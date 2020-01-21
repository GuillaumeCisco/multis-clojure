(ns multis.timestampSchedulerABI)

(def TimestampSchedulerABI #js [
 #js {
 :constant false
 :inputs #js [
 #js {:name "_toAdress", :type "address"}
 #js {:name "_callData", :type "bytes"}
 #js {:name "_uintArgs", :type "uint256[8]"}
 ]
 :name "schedule"
 :outputs #js [#js {:name "newRequest", :type "address"} ]
 :payable true
 :stateMutability "payable"
 :type "function"
 }
 #js {
 :constant true
 :inputs #js []
 :name "temporalUnit"
 :outputs #js [#js {:name "", :type "uint8"}]
 :payable false
 :stateMutability "view"
 :type "function"
 }
  #js {
 :constant true
 :inputs #js []
 :name "feeRecipient"
 :outputs #js [#js {:name "", :type "address"}]
 :payable false
 :stateMutability "view"
 :type "function"
 }
 #js {
 :constant true
 :inputs #js [
 #js {:name "_bounty", :type "uint256"}
 #js {:name "_fee", :type "uint256"}
 #js {:name "_callGas", :type "uint256"}
 #js {:name "_callValue", :type "uint256"}
 #js {:name "_gasPrice", :type "uint256"}
 ]
 :name "computeEndowment"
 :outputs #js [#js {:name "", :type "uint256"}]
 :payable false
 :stateMutability "view"
 :type "function"
 }
 #js {
 :constant true
 :inputs #js []
 :name "factoryAddress"
 :outputs #js [#js {:name "", :type "address"}]
 :payable false
 :stateMutability "view"
 :type "function"
 }
 #js {
 :constant true
 :inputs #js [
 #js {:name "_factoryAddress", :type "address"}
 #js {:name "_feeRecipient", :type "address"}
 ]
 :payable false
 :stateMutability "nonpayable"
 :type "constructor"
 }
 #js {
  :payable true
  :stateMutability "payable"
  :type "fallback"
 }
 #js {
  :anonymous false
  :inputs #js [
  #js {
  :indexed false
  :name "request"
  :type "address"
  }
  ]
  :name "NewRequest"
  :type "event"
 }
 ])
