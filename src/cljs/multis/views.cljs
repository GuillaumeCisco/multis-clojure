(ns multis.views
  (:require
   [re-frame.core :as re-frame]
   [multis.subs :as subs]
   [cljsjs.web3]
   [cljs-web3.core :as web3]
   [cljs-web3.eth :as web3-eth]
   [multis.timestampSchedulerABI :refer [TimestampSchedulerABI]]
   ))

(.log js/console TimestampSchedulerABI)

(def enabled (js/ethereum.enable (fn [err res] (
  (.log js/console res)
))))

(def my-web3 (or (aget js/window "web3")
             (if goog.DEBUG
               (web3/web3)
               (web3/create-web3 "https://morden.infura.io/metamask"))))
;(def w3 (new (aget js/window "Web3") (web3/current-provider web3)))
(def w3 (new (aget js/window "Web3") (aget js/window "ethereum")))
;(.log js/console w3)
(.log js/console (web3/current-provider w3))
(.log js/console (web3-eth/accounts w3))

(def defaultAccount (web3-eth/default-account my-web3))
(.log js/console defaultAccount)

(def tSchedulerAddress "0x44b28e47fe781eabf8095a2a21449a82a635745b")
(def timestampScheduler (web3-eth/contract-at my-web3 TimestampSchedulerABI tSchedulerAddress))
(.log js/console timestampScheduler)

; variables to get from form
(def amount (.toWei my-web3 0.00001 "ether"))
(def receiver "0xd8c6F58BbF71E0739E4CCfe9f9721a07285bB895")
(def h 30)

; initial variables
(def windowSize (* 15 60))
(def windowStart (+ (.getTime (js/Date.)) (* h 60 60 1000)))
(def callGas "21000")
(def futureGasPrice (.toWei my-web3 10 "gwei"))
(def fee 0)
(def bounty (.toWei my-web3 "0.01" "ether"))
(def requiredDeposit 0)

; TODO use BigNumber instead of parseInt
(defn calcEndowment
  "calc Endowment" ;docstring
  [callGas, callValue, gasPrice, fee, bounty] ;arguments
  (+ (js/parseInt bounty) (js/parseInt fee) (* (js/parseInt callGas) (js/parseInt gasPrice)) (* (js/parseInt gasPrice) 180000) (js/parseInt callValue))
)

(defn waitForTransactionToBeMined
  "waitForTransactionToBeMined" ;docstring
  [txHash] ;arguments
  (.eth.getTransactionReceipt my-web3 txHash (fn [err, receipt] (.log js/console receipt)))
)

; calcluate endowment
(def endowment (calcEndowment callGas amount futureGasPrice fee bounty))
(.log js/console "endowment: " endowment)

; send request
(.schedule timestampScheduler "0xd8c6F58BbF71E0739E4CCfe9f9721a07285bB895"
                                ""
                                #js [callGas amount windowSize windowStart futureGasPrice fee bounty requiredDeposit]
                                #js {:from defaultAccount :gas nil :gasPrice nil :value endowment}
                                (fn [err txHash]
                                (if err
                                   (.log js/console err)
                                   (let [receipt (waitForTransactionToBeMined txHash)]
                                   (.log js/console receipt)
                                   )
                                )
                                )
)



;(.log js/console accounts)
;(def defaultaccount (first (web3-eth/accounts w3)))

;(def w3 (web3/web3))
;(.log js/console w3)

;(def Web3 (goog.object/getValueByKeys js/window "web3" "constructor"))
;(def currentProvider (aget (goog.object/get js/window "web3") "currentProvider"))
;(.log js/console Web3)
;(.log js/console currentProvider)
;(def w3 (new Web3 currentProvider))
;(.log js/console w3)
;
;(def api (web3/version-api w3))
;(.log js/console api)
;
;
;(def accounts (web3-eth/accounts w3))
;(.log js/console accounts)
;(def defaultaccount (first (web3-eth/accounts w3)))


;(web3/current-provider w3)
;
;(web3/version-node w3
;           (fn [err res] (when-not err (println res))))

;(def w3 (web3/create-web3 "http://localhost:8549/"))



;(def provider (web3/current-provider w3))
;(def timestampScheduler "0x44b28e47fe781eabf8095a2a21449a82a635745b")


(defn main-panel []
  (let [name (re-frame/subscribe [::subs/name])]
  [:div
     [:h1 "Hello from " @name]
  ]
))
