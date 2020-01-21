(ns multis.views
  (:require
   [re-frame.core :as re-frame]
   [multis.subs :as subs]
   [cljsjs.web3]
   [cljs-web3.core :as web3]
   [cljs-web3.eth :as web3-eth]
   [bignumber.core :as bn]
   [promesa.core :as p]
   [multis.timestampSchedulerABI :refer [TimestampSchedulerABI]]
   ))

;(.log js/console TimestampSchedulerABI);

; borrowed from https://github.com/ethereum-alarm-clock/eac.js-lib/blob/master/lib/util.js#L23
(defn calcEndowment
  "calc Endowment" ;docstring
  [callGas, callValue, gasPrice, fee, bounty] ;arguments
  (+ (bn/number bounty) (bn/number fee) (* (bn/number callGas) gasPrice) (* (bn/number gasPrice) 180000) (bn/number callValue))
)

(defn waitForTransactionToBeMined
  "waitForTransactionToBeMined" ;docstring
  [web3 txHash] ;arguments
  (.eth.getTransactionReceipt web3 txHash (fn [err, receipt] (.log js/console receipt)))
)

(defn sendDelayedTransaction
  "sendDelayedTransaction" ;docstring
  [accounts] ;arguments
  (def web3 (or (aget js/window "web3")
           (if goog.DEBUG
             (web3/web3)
             (web3/create-web3 "https://morden.infura.io/metamask"))))
  (def w3 (new (aget js/window "Web3") (web3/current-provider web3)))
  ;(def w3 (new (aget js/window "Web3") (aget js/window "ethereum")))

  (def defaultAccount (first accounts))
  ;(def defaultAccount (web3-eth/default-account my-web3))

  (def tSchedulerAddress "0x44b28e47fe781eabf8095a2a21449a82a635745b")
  (def timestampScheduler (web3-eth/contract-at web3 TimestampSchedulerABI tSchedulerAddress))
  ;(.log js/console timestampScheduler)

  ; variables to get from form
  (def amount (.toWei web3 "0.1" "ether"))
  (def receiver "0xd8c6F58BbF71E0739E4CCfe9f9721a07285bB895")
  (def h 1)

  ; initial variables
  ; borrowed form https://github.com/chronologic/integration-example/blob/integrated/src/app.js
  (def windowSize (* 15 60))
  (def windowStart (+ (.getTime (js/Date.)) (* h 60 60 1000)))
  (def callGas "21000")
  (def futureGasPrice (.toWei web3 10 "gwei"))
  (def fee 0)
  (def bounty (.toWei web3 "0.01" "ether"))
  (def requiredDeposit 0)

  ; calcluate endowment
  (def endowment (calcEndowment callGas amount futureGasPrice fee bounty))

  ;borrowed from https://github.com/ethereum-alarm-clock/eac.js-lib/blob/master/lib/scheduling/index.js
  ; send request
  (.schedule timestampScheduler
             "0xd8c6F58BbF71E0739E4CCfe9f9721a07285bB895"
             ""
             #js [callGas amount windowSize windowStart futureGasPrice fee bounty requiredDeposit]
             #js {:from defaultAccount :gas nil :gasPrice nil :value endowment}
             (fn [err txHash]
               (if err
                  (.log js/console err)
                  (let [receipt (waitForTransactionToBeMined web3 txHash)]
                  (.log js/console receipt)
                  )
               )
             )
  )
)

(-> (js/ethereum.enable)
    (p/then (fn [v]
              (sendDelayedTransaction v))))

(defn main-panel []
  (let [name (re-frame/subscribe [::subs/name])]
  [:div
     [:h1 "Hello from " @name]
  ]
))
