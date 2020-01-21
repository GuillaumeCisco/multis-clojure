(ns multis.db
  (:require
    [cljsjs.web3]
    [cljs-web3.core :as web3]))

(def default-db
  {:name "re-frame"
   :new-bet {:address nil}
   :w3 (or (aget js/window "web3")
             (if goog.DEBUG
               (web3/web3)
               (web3/create-web3 "https://morden.infura.io/metamask"))) ; Let's borrow this ;) Thanks MetaMask guys!
  })
