(ns multis.views
  (:use-macros [cljs.core.async.macros :only [go]])
  (:require
   [re-frame.core :as re-frame]
   [cljs.core.async :refer [<! timeout]]
   [multis.subs :as subs]
   [multis.events :as evts]
   [multis.styles :as styles]
   [cljsjs.web3]
   [cljs-web3.core :as web3]
   [cljs-web3.eth :as web3-eth]
   [bignumber.core :as bn]
   [promesa.core :as p]
   [re-frame-forms.core :as form]
   [re-frame-forms.input :as input]
   [re-frame-forms.coerce :as coerce]
   [multis.timestampSchedulerABI :refer [TimestampSchedulerABI]]
   ))

;####################################################
; Following code mimic eac-lib.js timestampScheduler utils method
; borrowed from https://github.com/ethereum-alarm-clock/eac.js-lib/blob/master/lib/util.js#L23
(defn calcEndowment
  "calc Endowment" ;docstring
  [callGas, callValue, gasPrice, fee, bounty] ;arguments
  (+ (bn/number bounty) (bn/number fee) (* (bn/number callGas) gasPrice) (* (bn/number gasPrice) 180000) (bn/number callValue))
)

(defn sleep [f ms]
  (js/setTimeout f ms))

(defn txReceiptAsync
 "txReceiptAsync"
 [web3 txHash resolve reject]
 (.eth.getTransactionReceipt web3 txHash (fn [err, receipt]
       (.log js/console "receipt:" receipt)
       (if err
          (reject err)
          (if (nil? receipt)
             (sleep #(txReceiptAsync web3 txHash resolve reject) 500)
             (resolve receipt)
          )
       )
 ))
)

(defn waitForTransactionToBeMined
  "waitForTransactionToBeMined" ;docstring
  [web3 txHash] ;arguments
  (p/create
    (fn [resolve reject]
      (txReceiptAsync web3 txHash resolve reject)
    )
  )
)

; #################
; business code
(defn sendDelayedTransaction
  "sendDelayedTransaction" ;docstring
  [amount h toAddress] ;arguments

  ; get sender
  (def sender @(re-frame/subscribe [:sender]))

  ; get web3
  (def web3 (or (aget js/window "web3")
           (if goog.DEBUG
             (web3/web3)
             (web3/create-web3 "https://morden.infura.io/metamask"))))
  ;(def w3 (new (aget js/window "Web3") (web3/current-provider web3)))
  ;(def w3 (new (aget js/window "Web3") (aget js/window "ethereum")))
  ;(def sender (web3-eth/default-account web3))

  ; define timestamp scheduler
  (def tSchedulerAddress "0x44b28e47fe781eabf8095a2a21449a82a635745b")
  (def timestampScheduler (web3-eth/contract-at web3 TimestampSchedulerABI tSchedulerAddress))

  ; borrowed form https://github.com/chronologic/integration-example/blob/integrated/src/app.js
  (def callValue (.toWei web3 amount "ether"))
  (def windowSize (* 15 60))
  (def windowStart (+ (.getTime (js/Date.)) (* h 60 60 1000)))
  ;(def windowStart (+ (.getTime (js/Date.)) (* h 5 1000))) ; use 5 sec for debugging
  (def callGas "21000")
  (def gasPrice (.toWei web3 "10" "gwei"))
  (def fee (.toWei web3 "0" "finney"))
  (def bounty (.toWei web3 "0.01" "ether"))
  (def requiredDeposit (.toWei web3 "0" "finney"))


  ; calcluate endowment
  (def endowment (calcEndowment callGas callValue gasPrice fee bounty))

  ; borrowed from https://github.com/ethereum-alarm-clock/eac.js-lib/blob/master/lib/scheduling/index.js
  ; send delayed request
  (.schedule timestampScheduler
             toAddress
             ""
             #js [callGas callValue windowSize windowStart gasPrice fee bounty requiredDeposit]
             #js {:from sender :gas 30000 :gasPrice nil :value endowment}
             (fn [err txHash]
               (if err
                  (re-frame/dispatch [:submitted false])
                  (-> (waitForTransactionToBeMined web3 txHash)
                    (p/then (fn [result]
                       (re-frame/dispatch [:transaction-validated result])
                       (re-frame/dispatch [:submitted false])
                    ))
                    (p/catch (fn [error]
                       (re-frame/dispatch [:transaction-failed error])
                       (re-frame/dispatch [:submitted false])
                    ))
                  )
               )
             )
  )
)

; #############
; init
(if (exists? js/ethereum)
  (-> (js/ethereum.enable)
      (p/then (fn [v]
                (re-frame/dispatch [:ethereum-init v])
                ))
      (p/catch (fn [v]
                (re-frame/dispatch [:ethereum-error v])
                ))
  )
  (re-frame/dispatch [:ethereum-error "Please install metamask extension"])
)


; ###########
; UI
(defn handleForm
 "Handle form"
 [values]
 (re-frame/dispatch [:submitted true])
 (sendDelayedTransaction (:amount values) (:hours values) (:address values)))

(defn main-panel []
  (let [name (re-frame/subscribe [::subs/name])
       ethereum-error (re-frame/subscribe [:ethereum-error])
       submitted (re-frame/subscribe [:submitted])
       receipt (re-frame/subscribe [:receipt])
       form  (form/make-form {:amount 0.01 :hours 1 :address "0xd8c6F58BbF71E0739E4CCfe9f9721a07285bB895"})
       amount (form/make-field form [:amount] (coerce/number))
       hours (form/make-field form [:hours] (coerce/int))
       address (form/make-field form [:address])]
  [:div
     {:style styles/main}
     [:h1 "Multis Delayed Transaction"]
     [:h3 "Choose the amount and the delayed time (in hours) to send your transaction to a specified address"]
     (if-not (nil? @ethereum-error)
       [:span {:style styles/error} @ethereum-error]
       [:div
         [:form {:on-submit (form/handle-valid-form form handleForm)}
           [:label
           {:style styles/label}
            "Amount:"
            [input/input amount {:type "number"
                                 :step "0.001"
                                 :style (if @(form/valid? amount)
                                         styles/input-number
                                         (merge styles/input-number styles/input-error))}]]
           [:label
            {:style styles/label}
            "Delayed by (in hours):"
            [input/input hours {:type "number"
                                :style (if @(form/valid? hours)
                                         styles/input-number
                                         (merge styles/input-number styles/input-error))}]]
           [:label
           {:style styles/label}
            "to Address:"
            [input/input address {:type  "text"
                                  :style (if @(form/valid? address)
                                            styles/input
                                            (merge styles/input styles/input-error))}]]
            (if-not @submitted [:button {:type "submit" :style styles/submit :disabled @submitted} "Submit"])
          ]
         (if (= @submitted true)
            (if-not (nil? @receipt)
               [:span {:style styles/congrats} "Congratulations transaction has been commited"]
               [:span {:style styles/loading} "loading... Please wait until transaction has been commited"])
         )
       ]
     )
  ]
))
