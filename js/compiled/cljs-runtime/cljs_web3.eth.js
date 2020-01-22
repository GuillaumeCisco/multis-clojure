goog.provide('cljs_web3.eth');
goog.require('cljs.core');
goog.require('cljs_web3.utils');
/**
 * Gets eth object from web3-instance.
 * 
 *   Parameter:
 *   web3 - web3 instance
 */
cljs_web3.eth.eth = (function cljs_web3$eth$eth(web3){
return (web3["eth"]);
});
/**
 * Gets compile object from web3-instance.
 * 
 *   Parameter:
 *   web3 - web3 instance
 */
cljs_web3.eth.get_compile = (function cljs_web3$eth$get_compile(web3){
return (cljs_web3.eth.eth(web3)["compile"]);
});
/**
 * Gets the default address that is used for the following methods (optionally
 *   you can overwrite it by specifying the :from key in their options map):
 * 
 *   - `send-transaction!`
 *   - `call!`
 * 
 *   Parameters:
 *   web3 - web3 instance
 * 
 *   Returns the default address HEX string.
 * 
 *   Example:
 *   user> `(default-account web3-instance)`
 *   "0x85d85715218895ae964a750d9a92f13a8951de3d"
 */
cljs_web3.eth.default_account = (function cljs_web3$eth$default_account(web3){
return (web3["eth"]["defaultAccount"]);
});
/**
 * Sets the default address that is used for the following methods (optionally
 *   you can overwrite it by specifying the :from key in their options map):
 * 
 *   - `send-transaction!`
 *   - `call!`
 * 
 *   Parameters:
 *   web3    - web3 instance
 *   hex-str - Any 20 bytes address you own, or where you have the private key for
 * 
 * 
 *   Returns a 20 bytes HEX string representing the currently set address.
 * 
 *   Example:
 *   user> (set-default-account! web3-instance
 *                            "0x85d85715218895ae964a750d9a92f13a8951de3d")
 *   "0x85d85715218895ae964a750d9a92f13a8951de3d"
 */
cljs_web3.eth.set_default_account_BANG_ = (function cljs_web3$eth$set_default_account_BANG_(web3,hex_str){
return (cljs_web3.eth.eth(web3)["defaultAccount"] = hex_str);
});
/**
 * This default block is used for the following methods (optionally you can
 *   override it by passing the default-block parameter):
 * 
 *   - `get-balance`
 *   - `get-code`
 *   - `get-transactionCount`
 *   - `get-storageAt`
 *   - `call`
 *   - `contract-call`
 *   - `estimate-gas`
 * 
 *   Parameters:
 *   web3 - web3 instance
 * 
 *   Returns one of:
 *   - a block number
 *   - "earliest", the genisis block
 *   - "latest", the latest block (current head of the blockchain)
 *   - "pending", the currently mined block (including pending transactions)
 * 
 *   Example:
 *   user> `(default-block web3-instance)`
 *   "latest"
 */
cljs_web3.eth.default_block = (function cljs_web3$eth$default_block(web3){
return (web3["eth"]["defaultBlock"]);
});
/**
 * Sets default block that is used for the following methods (optionally you can
 *   override it by passing the default-block parameter):
 * 
 *   - `get-balance`
 *   - `get-code`
 *   - `get-transactionCount`
 *   - `get-storageAt`
 *   - `call`
 *   - `contract-call`
 *   - `estimate-gas`
 * 
 *   Parameters:
 *   web3  - web3 instance
 *   block - one of:
 *          - a block number
 *          - "earliest", the genisis block
 *          - "latest", the latest block (current head of the blockchain)
 *          - "pending", the currently mined block (including pending
 *            transactions)
 * 
 *   Example:
 *   user> `(set-default-block! web3-instance "earliest")`
 *   "earliest"
 */
cljs_web3.eth.set_default_block_BANG_ = (function cljs_web3$eth$set_default_block_BANG_(web3,block){
return (cljs_web3.eth.eth(web3)["defaultBlock"] = block);
});
/**
 * This property is read only and returns the either a sync object, when the
 *   node is syncing or false.
 * 
 *   Parameters:
 *   web3        - web3 instance
 *   callback-fn - callback with two parameters, error and result
 * 
 *   Returns a sync object as follows, when the node is currently syncing or false:
 *   - startingBlock: The block number where the sync started.
 *   - currentBlock:  The block number where at which block the node currently
 *                 synced to already.
 *   - highestBlock:  The estimated block number to sync to.
 * 
 *   Example:
 *   user> `(syncing web3-instance (fn [err res] (when-not err (println res))))`
 *   nil
 *   user> `false`
 */
cljs_web3.eth.syncing = cljs_web3.utils.prop_or_clb_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["eth","syncing"], 0));
/**
 * This convenience function calls the callback everytime a sync starts, updates
 *   and stops.
 * 
 *   Parameters:
 *   web3 - web3 instance
 * 
 *   Returns an isSyncing object with the following methods:
 *   - `.addCallback`  Adds another callback, which will be called when the node
 *                  starts or stops syncing.
 *   - `.stopWatching` Stops the syncing callbacks
 * 
 *   Callback return value:
 * 
 *  The callback will be fired with true when the syncing starts and with false
 *  when it stopped.
 * 
 *  While syncing it will return the syncing object:
 *  - startingBlock: The block number where the sync started.
 *  - currentBlock:  The block number where at which block the node currently
 *                   synced to already.
 *  - highestBlock:  The estimated block number to sync to
 * 
 *   Example:
 *   user> `(.addCallback (web3-eth/syncing? web3-instance) (fn [err res] ...))`
 *   #object[s [object Object]]
 */
cljs_web3.eth.syncing_QMARK_ = (function cljs_web3$eth$syncing_QMARK_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41105 = arguments.length;
var i__4790__auto___41106 = (0);
while(true){
if((i__4790__auto___41106 < len__4789__auto___41105)){
args__4795__auto__.push((arguments[i__4790__auto___41106]));

var G__41107 = (i__4790__auto___41106 + (1));
i__4790__auto___41106 = G__41107;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.syncing_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.eth.syncing_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (web3,args){
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.eth.eth(web3),"isSyncing",args);
}));

(cljs_web3.eth.syncing_QMARK_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.eth.syncing_QMARK_.cljs$lang$applyTo = (function (seq40901){
var G__40902 = cljs.core.first(seq40901);
var seq40901__$1 = cljs.core.next(seq40901);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40902,seq40901__$1);
}));

/**
 * This property is read only and returns the coinbase address where the mining
 *   rewards go to.
 * 
 *   Parameters:
 *   web3 - web3 instance
 * 
 *   Returns a string representing the coinbase address of the client.
 * 
 *   Example:
 *   user> `(coinbase web3-instance)`
 *   "0x85d85715218895ae964a750d9a92f13a8951de3d"
 */
cljs_web3.eth.coinbase = cljs_web3.utils.prop_or_clb_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["eth","coinbase"], 0));
/**
 * This property is read only and says whether the node is mining or not.
 * 
 *   Parameters:
 *   web3 - web3 instance
 * 
 *   Returns a boolean: true if the client is mining, otherwise false.
 * 
 *   Example:
 *   `(mining? web3-instance (fn [err res] (when-not err (println res))))`
 *   nil
 *   user> `false`
 */
cljs_web3.eth.mining_QMARK_ = cljs_web3.utils.prop_or_clb_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["eth","mining"], 0));
/**
 * This property is read only and returns the number of hashes per second that
 *   the node is mining with.
 * 
 *   Parameters:
 *   web3 - web3 instance
 * 
 *   Returns a number representing the hashes per second.
 * 
 *   user> `(hashrate web3-instance (fn [err res] (when-not err (println res))))`
 *   nil
 *   user> 0
 *   
 */
cljs_web3.eth.hashrate = cljs_web3.utils.prop_or_clb_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["eth","hashrate"], 0));
/**
 * This property is read only and returns the current gas price. The gas price
 *   is determined by the x latest blocks median gas price.
 * 
 *   Parameters:
 *   web3        - web3 instance
 *   callback-fn - callback with two parameters, error and result
 * 
 *   Returns a BigNumber instance of the current gas price in wei.
 * 
 *   Example:
 *   user> `(gas-price web3-instance (fn [err res] (when-not err (println res))))`
 *   nil
 *   user> #object[e 90000000000]
 */
cljs_web3.eth.gas_price = cljs_web3.utils.prop_or_clb_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["eth","gasPrice"], 0));
/**
 * This property is read only and returns a list of accounts the node controls.
 * 
 *   Parameters:
 *   web3        - web3 instance
 *   callback-fn - callback with two parameters, error and result
 * 
 *   Returns an array of addresses controlled by client.
 * 
 *   Example:
 *   user> `(accounts web3-instance (fn [err res] (when-not err (println res))))`
 *   nil
 *   user> `[0x85d85715218895ae964a750d9a92f13a8951de3d]`
 */
cljs_web3.eth.accounts = cljs_web3.utils.prop_or_clb_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["eth","accounts"], 0));
/**
 * This property is read only and returns the current block number.
 * 
 *   Parameters:
 *   web3        - web3 instance
 *   callback-fn - callback with two parameters, error and result
 * 
 *   Returns the number of the most recent block.
 * 
 *   Example:
 *   `(block-number web3-instance
 *               (fn [err res] (when-not err (println res))))`
 *   nil
 *   user> `1783426`
 */
cljs_web3.eth.block_number = cljs_web3.utils.prop_or_clb_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["eth","blockNumber"], 0));
/**
 * (Not Implemented yet) Registers the given address to be included in
 *   `accounts`. This allows non-private-key owned accounts to be associated
 *   as an owned account (e.g., contract wallets).
 * 
 *   Parameters:
 *   web3        - web3 instance
 *   address     - string representing the address
 *   callback-fn - callback with two parameters, error and result.
 */
cljs_web3.eth.register = (function cljs_web3$eth$register(web3,address){
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.eth.eth(web3),"register",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [address], null));
});
/**
 * (Not Implemented yet) Unregisters a given address.
 * 
 *   Parameters:
 *   web3        - web3 instance
 *   address     - string representing the address
 *   callback-fn - callback with two parameters, error and result.
 */
cljs_web3.eth.unregister = (function cljs_web3$eth$unregister(web3,address){
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.eth.eth(web3),"unRegister",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [address], null));
});
/**
 * Get the balance of an address at a given block.
 * 
 *   Parameters:
 *   web3          - web3 instance
 *   address       - The address to get the balance of.
 *   default-block - If you pass this parameter it will not use the default block
 *                set with set-default-block.
 *   callback-fn   - callback with two parameters, error and result
 * 
 *   Returns a BigNumber instance of the current balance for the given address in
 *   wei.
 * 
 *   Example:
 *   user> `(get-balance web3-instance
 *                    "0x85d85715218895ae964a750d9a92f13a8951de3d"
 *                    "latest"
 *                    (fn [err res] (when-not err (println res))))`
 *   nil
 *   user> #object[e 1729597111000000000]
 */
cljs_web3.eth.get_balance = (function cljs_web3$eth$get_balance(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41108 = arguments.length;
var i__4790__auto___41109 = (0);
while(true){
if((i__4790__auto___41109 < len__4789__auto___41108)){
args__4795__auto__.push((arguments[i__4790__auto___41109]));

var G__41110 = (i__4790__auto___41109 + (1));
i__4790__auto___41109 = G__41110;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.get_balance.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.eth.get_balance.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__40918){
var vec__40920 = p__40918;
var address = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40920,(0),null);
var default_block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40920,(1),null);
var args = vec__40920;
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.eth.eth(web3),"getBalance",args);
}));

(cljs_web3.eth.get_balance.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.eth.get_balance.cljs$lang$applyTo = (function (seq40909){
var G__40910 = cljs.core.first(seq40909);
var seq40909__$1 = cljs.core.next(seq40909);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40910,seq40909__$1);
}));

/**
 * Get the storage at a specific position of an address.
 * 
 *   Parameters:
 *   web3          - web3 instance
 *   address       - The address to get the storage from.
 *   position      - The index position of the storage.
 *   default-block - If you pass this parameter it will not use the default block
 *                set with web3.eth.defaultBlock.
 *   callback-fn   - callback with two parameters, error and result
 * 
 *   Returns the value in storage at the given position.
 * 
 *   Example:
 *   user> `(get-storage-at web3-instance
 *                       "0x85d85715218895ae964a750d9a92f13a8951de3d"
 *                       0
 *                       "latest"
 *                       (fn [err res] (when-not err (println res))))`
 *   nil
 *   user> "0x0000000000000000000000000000000000000000000000000000000000000000" 
 */
cljs_web3.eth.get_storage_at = (function cljs_web3$eth$get_storage_at(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41111 = arguments.length;
var i__4790__auto___41112 = (0);
while(true){
if((i__4790__auto___41112 < len__4789__auto___41111)){
args__4795__auto__.push((arguments[i__4790__auto___41112]));

var G__41113 = (i__4790__auto___41112 + (1));
i__4790__auto___41112 = G__41113;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.get_storage_at.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.eth.get_storage_at.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__40930){
var vec__40931 = p__40930;
var address = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40931,(0),null);
var position = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40931,(1),null);
var default_block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40931,(2),null);
var args = vec__40931;
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.eth.eth(web3),"getStorageAt",args);
}));

(cljs_web3.eth.get_storage_at.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.eth.get_storage_at.cljs$lang$applyTo = (function (seq40926){
var G__40927 = cljs.core.first(seq40926);
var seq40926__$1 = cljs.core.next(seq40926);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40927,seq40926__$1);
}));

/**
 * Get the code at a specific address.
 * 
 *   Parameters:
 *   web3          - web3 instance
 *   address       - The address to get the code from.
 *   default-block - If you pass this parameter it will not use the default block set
 *                with `get-default-block!`.
 *   callback-fn   - callback with two parameters, error and result
 * 
 *   Returns the data at given address HEX string.
 * 
 *   Example:
 *   user> (get-code web3-instance
 *                "0x85d85715218895ae964a750d9a92f13a8951de3d
 *                0
 *                "latest"
 *                (fn [err res] (when-not err (println res))))
 *   nil
 *   user> `0x`
 *   
 */
cljs_web3.eth.get_code = (function cljs_web3$eth$get_code(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41114 = arguments.length;
var i__4790__auto___41115 = (0);
while(true){
if((i__4790__auto___41115 < len__4789__auto___41114)){
args__4795__auto__.push((arguments[i__4790__auto___41115]));

var G__41116 = (i__4790__auto___41115 + (1));
i__4790__auto___41115 = G__41116;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.get_code.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.eth.get_code.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__40940){
var vec__40942 = p__40940;
var address = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40942,(0),null);
var default_block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40942,(1),null);
var args = vec__40942;
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.eth.eth(web3),"getCode",args);
}));

(cljs_web3.eth.get_code.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.eth.get_code.cljs$lang$applyTo = (function (seq40936){
var G__40937 = cljs.core.first(seq40936);
var seq40936__$1 = cljs.core.next(seq40936);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40937,seq40936__$1);
}));

/**
 * Returns a block matching the block number or block hash.
 * 
 *   Parameters:
 *   web3                        - web3 instance
 * 
 *   block-hash-or-number        - The block number or hash. Or the string
 *                              "earliest", "latest" or "pending"
 *                              as in the default block parameter.
 * 
 *   return-transaction-objects? - If true, the returned block will contain all
 *                              transactions as objects, if false it will
 *                              only contains the transaction hashes.
 *   callback-fn                 - callback with two parameters, error and result
 * 
 *   Returns the block object:
 * 
 *   - number: Number - the block number. null when its pending block.
 *   - hash: String, 32 Bytes - hash of the block. null when its pending block.
 *   - parent-hash: String, 32 Bytes - hash of the parent block.
 *   - nonce: String, 8 Bytes - hash of the generated proof-of-work. null when its
 *                           pending block.
 *   - sha3-uncles: String, 32 Bytes - SHA3 of the uncles data in the block.
 *   - logs-bloom: String, 256 Bytes - the bloom filter for the logs of the block.
 *                                 null when its pending block.
 *   - transactions-root: String, 32 Bytes - the root of the transaction trie of the
 *                                        block
 *   - state-root: String, 32 Bytes - the root of the final state trie of the block.
 *   - miner: String, 20 Bytes - the address of the beneficiary to whom the mining
 *                            rewards were given.
 *   - difficulty: BigNumber - integer of the difficulty for this block.
 *   - total-difficulty: BigNumber - integer of the total difficulty of the chain
 *                                until this block.
 *   - extra- data: String - the "extra data" field of this block.
 *   - size: Number - integer the size of this block in bytes.
 *   - gas- limit: Number - the maximum gas allowed in this block.
 *   - gas-used: Number - the total used gas by all transactions in this block.
 *   - timestamp: Number - the unix timestamp for when the block was collated.
 *   - transactions: Array - Array of transaction objects, or 32 Bytes transaction
 *                        hashes depending on the last given parameter.
 *   - uncles: Array - Array of uncle hashes.
 * 
 *   Example:
 *   user> `(get-block web3-instance
 *                  0
 *                  false
 *                  (fn [err res] (when-not err (println res))))`
 *   nil
 *   user> {:state-root 0x.., :hash 0x.., :number 0, :difficulty #object[e 1048576],
 *       ...}
 */
cljs_web3.eth.get_block = (function cljs_web3$eth$get_block(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41117 = arguments.length;
var i__4790__auto___41118 = (0);
while(true){
if((i__4790__auto___41118 < len__4789__auto___41117)){
args__4795__auto__.push((arguments[i__4790__auto___41118]));

var G__41119 = (i__4790__auto___41118 + (1));
i__4790__auto___41118 = G__41119;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.get_block.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.eth.get_block.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__40952){
var vec__40953 = p__40952;
var block_hash_or_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40953,(0),null);
var return_transaction_objects_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40953,(1),null);
var args = vec__40953;
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.eth.eth(web3),"getBlock",args);
}));

(cljs_web3.eth.get_block.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.eth.get_block.cljs$lang$applyTo = (function (seq40948){
var G__40949 = cljs.core.first(seq40948);
var seq40948__$1 = cljs.core.next(seq40948);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40949,seq40948__$1);
}));

/**
 * Returns the number of transaction in a given block.
 * 
 *   Parameters
 *   web3                 - web3 instance
 *   block-hash-or-number - The block number or hash. Or the string "earliest",
 *                       "latest" or "pending" as in the default block
 *                       parameter.
 *   callback-fn          - callback with two parameters, error and result
 * 
 *   Example:
 *   user> `(get-block-transaction-count
 *         web3-instance
 *         0
 *         (fn [err res] (when-not err (println res))))`
 *   nil
 *   user> 0
 */
cljs_web3.eth.get_block_transaction_count = (function cljs_web3$eth$get_block_transaction_count(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41120 = arguments.length;
var i__4790__auto___41121 = (0);
while(true){
if((i__4790__auto___41121 < len__4789__auto___41120)){
args__4795__auto__.push((arguments[i__4790__auto___41121]));

var G__41122 = (i__4790__auto___41121 + (1));
i__4790__auto___41121 = G__41122;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.get_block_transaction_count.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.eth.get_block_transaction_count.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__40960){
var vec__40961 = p__40960;
var block_hash_or_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40961,(0),null);
var args = vec__40961;
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.eth.eth(web3),"getBlockTransactionCount",args);
}));

(cljs_web3.eth.get_block_transaction_count.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.eth.get_block_transaction_count.cljs$lang$applyTo = (function (seq40956){
var G__40957 = cljs.core.first(seq40956);
var seq40956__$1 = cljs.core.next(seq40956);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40957,seq40956__$1);
}));

/**
 * Returns a blocks uncle by a given uncle index position.
 *   Parameters
 * 
 *   Parameters:
 *   web3                        - web3 instance
 *   block-hash-or-number        - The block number or hash. Or the string
 *                              "earliest", "latest" or "pending" as in
 *                              the default block parameter
 *   uncle-number                - The index position of the uncle
 *   return-transaction-objects? - If true, the returned block will contain all
 *                              transactions as objects, if false it will only
 *                              contains the transaction hashes
 *   default-block               - If you pass this parameter it will not use the
 *                              default block set with (set-default-block)
 *   callback-fn                 - callback with two parameters, error and result
 * 
 *   Returns the returned uncle. For a return value see `(get-block)`.
 * 
 *   Note: An uncle doesn't contain individual transactions.
 */
cljs_web3.eth.get_uncle = (function cljs_web3$eth$get_uncle(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41123 = arguments.length;
var i__4790__auto___41124 = (0);
while(true){
if((i__4790__auto___41124 < len__4789__auto___41123)){
args__4795__auto__.push((arguments[i__4790__auto___41124]));

var G__41125 = (i__4790__auto___41124 + (1));
i__4790__auto___41124 = G__41125;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.get_uncle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.eth.get_uncle.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__40968){
var vec__40969 = p__40968;
var block_hash_or_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40969,(0),null);
var uncle_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40969,(1),null);
var return_transaction_objects_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40969,(2),null);
var args = vec__40969;
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.eth.eth(web3),"getUncle",args);
}));

(cljs_web3.eth.get_uncle.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.eth.get_uncle.cljs$lang$applyTo = (function (seq40966){
var G__40967 = cljs.core.first(seq40966);
var seq40966__$1 = cljs.core.next(seq40966);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40967,seq40966__$1);
}));

/**
 * Returns a transaction matching the given transaction hash.
 * 
 *   Parameters:
 *   web3             - web3 instance
 *   transaction-hash - The transaction hash.
 *   callback-fn      - callback with two parameters, error and result
 * 
 *   Returns a transaction object its hash transaction-hash:
 * 
 *   - hash: String, 32 Bytes - hash of the transaction.
 *   - nonce: Number - the number of transactions made by the sender prior to this
 *  one.
 *   - block-hash: String, 32 Bytes - hash of the block where this transaction was
 *                                 in. null when its pending.
 *   - block-number: Number - block number where this transaction was in. null when
 *                         its pending.
 *   - transaction-index: Number - integer of the transactions index position in the
 *                              block. null when its pending.
 *   - from: String, 20 Bytes - address of the sender.
 *   - to: String, 20 Bytes - address of the receiver. null when its a contract
 *                         creation transaction.
 *   - value: BigNumber - value transferred in Wei.
 *   - gas-price: BigNumber - gas price provided by the sender in Wei.
 *   - gas: Number - gas provided by the sender.
 *   - input: String - the data sent along with the transaction.
 * 
 *   Example:
 *   user> `(get-transaction
 *         web3-instance
 *         "0x..."
 *         (fn [err res] (when-not err (println res))))`
 *   nil
 *   user> {:r 0x...
 *       :v 0x2a
 *       :hash 0xf...
 *       :transaction-index 3 ...
 *       (...)
 *       :to 0x...}
 */
cljs_web3.eth.get_transaction = (function cljs_web3$eth$get_transaction(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41127 = arguments.length;
var i__4790__auto___41128 = (0);
while(true){
if((i__4790__auto___41128 < len__4789__auto___41127)){
args__4795__auto__.push((arguments[i__4790__auto___41128]));

var G__41129 = (i__4790__auto___41128 + (1));
i__4790__auto___41128 = G__41129;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.get_transaction.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.eth.get_transaction.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__40975){
var vec__40977 = p__40975;
var transaction_hash = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40977,(0),null);
var args = vec__40977;
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.eth.eth(web3),"getTransaction",args);
}));

(cljs_web3.eth.get_transaction.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.eth.get_transaction.cljs$lang$applyTo = (function (seq40972){
var G__40973 = cljs.core.first(seq40972);
var seq40972__$1 = cljs.core.next(seq40972);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40973,seq40972__$1);
}));

/**
 * Returns a transaction based on a block hash or number and the transactions
 *   index position.
 * 
 *   Parameters:
 *   web3                 - web3 instance
 *   block-hash-or-number - A block number or hash. Or the string "earliest",
 *                       "latest" or "pending" as in the default block
 *                       parameter.
 *   index                - The transactions index position.
 *   callback-fn          - callback with two parameters, error and result
 *   Number               - The transactions index position.
 * 
 *   Returns a transaction object, see `(get-transaction)`
 * 
 *   Example:
 *   user> `(get-transaction-from-block
 *         web3-instance
 *         1799402
 *         0
 *         (fn [err res] (when-not err (println res))))`
 *   nil
 *   user> {:r 0x...
 *       :v 0x2a
 *       :hash 0xf...
 *       :transaction-index 0 ...
 *       (...)
 *       :to 0x...}
 */
cljs_web3.eth.get_transaction_from_block = (function cljs_web3$eth$get_transaction_from_block(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41130 = arguments.length;
var i__4790__auto___41131 = (0);
while(true){
if((i__4790__auto___41131 < len__4789__auto___41130)){
args__4795__auto__.push((arguments[i__4790__auto___41131]));

var G__41132 = (i__4790__auto___41131 + (1));
i__4790__auto___41131 = G__41132;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.get_transaction_from_block.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.eth.get_transaction_from_block.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__40982){
var vec__40983 = p__40982;
var block_hash_or_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40983,(0),null);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40983,(1),null);
var args = vec__40983;
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.eth.eth(web3),"getTransactionFromBlock",args);
}));

(cljs_web3.eth.get_transaction_from_block.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.eth.get_transaction_from_block.cljs$lang$applyTo = (function (seq40980){
var G__40981 = cljs.core.first(seq40980);
var seq40980__$1 = cljs.core.next(seq40980);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40981,seq40980__$1);
}));

/**
 * Returns the receipt of a transaction by transaction hash.
 * 
 *   Note That the receipt is not available for pending transactions.
 * 
 *   Parameters:
 *   web3              - web3 instance
 *   transaction-hash  - The transaction hash.
 *   callback-fn       - callback with two parameters, error and result
 * 
 *   Returns transaction receipt object, or null when no receipt was found:
 * 
 *   - blockHash: String, 32 Bytes - hash of the block where this transaction was
 *                                in.
 *   - blockNumber: Number - block number where this transaction was in.
 *   - transactionHash: String, 32 Bytes - hash of the transaction.
 *   - transactionIndex: Number - integer of the transactions index position in the
 *                             block.
 *   - from: String, 20 Bytes - address of the sender.
 *   - to: String, 20 Bytes - address of the receiver. null when its a contract
 *                         creation transaction.
 *   - cumulativeGasUsed: Number - The total amount of gas used when this
 *                              transaction was executed in the block.
 *   - gasUsed: Number - The amount of gas used by this specific transaction alone.
 *   - contractAddress: String - 20 Bytes - The contract address created, if the
 *                                       transaction was a contract creation,
 *                                       otherwise null.
 *   - logs: Array - Array of log objects, which this transaction generated.
 * 
 *   Example
 */
cljs_web3.eth.get_transaction_receipt = (function cljs_web3$eth$get_transaction_receipt(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41133 = arguments.length;
var i__4790__auto___41134 = (0);
while(true){
if((i__4790__auto___41134 < len__4789__auto___41133)){
args__4795__auto__.push((arguments[i__4790__auto___41134]));

var G__41135 = (i__4790__auto___41134 + (1));
i__4790__auto___41134 = G__41135;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.get_transaction_receipt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.eth.get_transaction_receipt.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__40989){
var vec__40990 = p__40989;
var transaction_hash = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40990,(0),null);
var args = vec__40990;
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.eth.eth(web3),"getTransactionReceipt",args);
}));

(cljs_web3.eth.get_transaction_receipt.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.eth.get_transaction_receipt.cljs$lang$applyTo = (function (seq40987){
var G__40988 = cljs.core.first(seq40987);
var seq40987__$1 = cljs.core.next(seq40987);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40988,seq40987__$1);
}));

/**
 * Get the numbers of transactions sent from this address.
 * 
 *   Parameters:
 *   web3          - web3 instance
 *   address       - The address to get the numbers of transactions from.
 *   default-block - If you pass this parameter it will not use the default block
 *                set with set-default-block.
 *   callback-fn   - callback with two parameters, error and result
 * 
 *   Returns the number of transactions sent from the given address.
 * 
 *   Example:
 *   user> `(get-transaction-count web3-instance "0x8"
 *         (fn [err res] (when-not err (println res))))`
 *   nil
 *   user> 16
 */
cljs_web3.eth.get_transaction_count = (function cljs_web3$eth$get_transaction_count(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41136 = arguments.length;
var i__4790__auto___41137 = (0);
while(true){
if((i__4790__auto___41137 < len__4789__auto___41136)){
args__4795__auto__.push((arguments[i__4790__auto___41137]));

var G__41138 = (i__4790__auto___41137 + (1));
i__4790__auto___41137 = G__41138;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.get_transaction_count.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.eth.get_transaction_count.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__40997){
var vec__40998 = p__40997;
var address = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40998,(0),null);
var default_block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40998,(1),null);
var args = vec__40998;
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.eth.eth(web3),"getTransactionCount",args);
}));

(cljs_web3.eth.get_transaction_count.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.eth.get_transaction_count.cljs$lang$applyTo = (function (seq40994){
var G__40995 = cljs.core.first(seq40994);
var seq40994__$1 = cljs.core.next(seq40994);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40995,seq40994__$1);
}));

/**
 * Sends a transaction to the network.
 * 
 *   Parameters:
 *   web3               - web3 instance
 *   transaction-object - The transaction object to send:
 * 
 *  :from: String - The address for the sending account. Uses the
 *                  `default-account` property, if not specified.
 * 
 *  :to: String   - (optional) The destination address of the message, left
 *                             undefined for a contract-creation
 *                             transaction.
 * 
 *  :value        - (optional) The value transferred for the transaction in
 *                             Wei, also the endowment if it's a
 *                             contract-creation transaction.
 * 
 *  :gas:         - (optional, default: To-Be-Determined) The amount of gas
 *                  to use for the transaction (unused gas is refunded).
 *  :gas-price:   - (optional, default: To-Be-Determined) The price of gas
 *                  for this transaction in wei, defaults to the mean network
 *                  gas price.
 *  :data:        - (optional) Either a byte string containing the associated
 *                  data of the message, or in the case of a contract-creation
 *                  transaction, the initialisation code.
 *  :nonce:       - (optional) Integer of a nonce. This allows to overwrite your
 *                             own pending transactions that use the same nonce.
 *   callback-fn   - callback with two parameters, error and result, where result
 *                is the transaction hash
 * 
 *   Returns the 32 Bytes transaction hash as HEX string.
 * 
 *   If the transaction was a contract creation use `(get-transaction-receipt)` to
 *   get the contract address, after the transaction was mined.
 * 
 *   Example:
 *   user> (send-transaction! web3-instance {:to "0x.."}
 *        (fn [err res] (when-not err (println res))))
 *   nil
 *   user> 0x...
 */
cljs_web3.eth.send_transaction_BANG_ = (function cljs_web3$eth$send_transaction_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41139 = arguments.length;
var i__4790__auto___41140 = (0);
while(true){
if((i__4790__auto___41140 < len__4789__auto___41139)){
args__4795__auto__.push((arguments[i__4790__auto___41140]));

var G__41141 = (i__4790__auto___41140 + (1));
i__4790__auto___41140 = G__41141;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.send_transaction_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.eth.send_transaction_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__41004){
var vec__41005 = p__41004;
var transaction_object = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41005,(0),null);
var args = vec__41005;
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.eth.eth(web3),"sendTransaction",args);
}));

(cljs_web3.eth.send_transaction_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.eth.send_transaction_BANG_.cljs$lang$applyTo = (function (seq41002){
var G__41003 = cljs.core.first(seq41002);
var seq41002__$1 = cljs.core.next(seq41002);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41003,seq41002__$1);
}));

/**
 * Sends an already signed transaction. For example can be signed using:
 *   https://github.com/SilentCicero/ethereumjs-accounts
 * 
 *   Parameters:
 *   web3                    - web3 instance
 *   signed-transaction-data - Signed transaction data in HEX format
 * 
 *   callback-fn             - callback with two parameters, error and result
 * 
 *   Returns the 32 Bytes transaction hash as HEX string.
 * 
 *   If the transaction was a contract creation use `(get-transaction-receipt)`
 *   to get the contract address, after the transaction was mined.
 * 
 *   See https://github.com/ethereum/wiki/wiki/JavaScript-API#example-46 for a
 *   JavaScript example.
 */
cljs_web3.eth.send_raw_transaction_BANG_ = (function cljs_web3$eth$send_raw_transaction_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41142 = arguments.length;
var i__4790__auto___41143 = (0);
while(true){
if((i__4790__auto___41143 < len__4789__auto___41142)){
args__4795__auto__.push((arguments[i__4790__auto___41143]));

var G__41144 = (i__4790__auto___41143 + (1));
i__4790__auto___41143 = G__41144;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.send_raw_transaction_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.eth.send_raw_transaction_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__41012){
var vec__41013 = p__41012;
var signed_transaction_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41013,(0),null);
var args = vec__41013;
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.eth.eth(web3),"sendRawTransaction",args);
}));

(cljs_web3.eth.send_raw_transaction_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.eth.send_raw_transaction_BANG_.cljs$lang$applyTo = (function (seq41009){
var G__41010 = cljs.core.first(seq41009);
var seq41009__$1 = cljs.core.next(seq41009);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41010,seq41009__$1);
}));

/**
 * Sends IBAN transaction from user account to destination IBAN address.
 * 
 *   Parameters:
 *   web3          - web3 instance
 *   from          - address from which we want to send transaction
 *   iban-address  - IBAN address to which we want to send transaction
 *   value         - value that we want to send in IBAN transaction
 *   callback-fn   - callback with two parameters, error and result
 * 
 *   Note: uses smart contract to transfer money to IBAN account.
 * 
 *   Example:
 *   user> `(send-iban-transaction! '0xx'
 *                               'NL88YADYA02'
 *                                0x100
 *                                (fn [err res] (prn res)))`
 */
cljs_web3.eth.send_iban_transaction_BANG_ = (function cljs_web3$eth$send_iban_transaction_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41151 = arguments.length;
var i__4790__auto___41152 = (0);
while(true){
if((i__4790__auto___41152 < len__4789__auto___41151)){
args__4795__auto__.push((arguments[i__4790__auto___41152]));

var G__41153 = (i__4790__auto___41152 + (1));
i__4790__auto___41152 = G__41153;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.send_iban_transaction_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.eth.send_iban_transaction_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__41020){
var vec__41021 = p__41020;
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41021,(0),null);
var iban_address = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41021,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41021,(2),null);
var args = vec__41021;
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.eth.eth(web3),"sendIBANTransaction",args);
}));

(cljs_web3.eth.send_iban_transaction_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.eth.send_iban_transaction_BANG_.cljs$lang$applyTo = (function (seq41017){
var G__41018 = cljs.core.first(seq41017);
var seq41017__$1 = cljs.core.next(seq41017);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41018,seq41017__$1);
}));

/**
 * Signs data from a specific account. This account needs to be unlocked.
 * 
 *   Parameters:
 *   web3          - web3 instance
 *   address       - The address to sign with
 *   data-to-sign  - Data to sign
 *   callback-fn   - callback with two parameters, error and result
 * 
 *   Returns the signed data.
 * 
 *   After the hex prefix, characters correspond to ECDSA values like this:
 * 
 *   r = signature[0:64]
 *   s = signature[64:128]
 *   v = signature[128:130]
 * 
 *   Note that if you are using ecrecover, v will be either "00" or "01". As a
 *   result, in order to use this value, you will have to parse it to an integer
 *   and then add 27. This will result in either a 27 or a 28.
 * 
 *   Example:
 *   user> `(sign web3-instance
 *             "0x135a7de83802408321b74c322f8558db1679ac20"
 *             "0x9dd2c369a187b4e6b9c402f030e50743e619301ea62aa4c0737d4ef7e10a3d49"
 *             (fn [err res] (when-not err (println res))))`
 * 
 *   user> 0x3...
 */
cljs_web3.eth.sign = (function cljs_web3$eth$sign(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41156 = arguments.length;
var i__4790__auto___41157 = (0);
while(true){
if((i__4790__auto___41157 < len__4789__auto___41156)){
args__4795__auto__.push((arguments[i__4790__auto___41157]));

var G__41158 = (i__4790__auto___41157 + (1));
i__4790__auto___41157 = G__41158;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.sign.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.eth.sign.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__41028){
var vec__41029 = p__41028;
var address = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41029,(0),null);
var data_to_sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41029,(1),null);
var args = vec__41029;
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.eth.eth(web3),"sign",args);
}));

(cljs_web3.eth.sign.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.eth.sign.cljs$lang$applyTo = (function (seq41025){
var G__41026 = cljs.core.first(seq41025);
var seq41025__$1 = cljs.core.next(seq41025);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41026,seq41025__$1);
}));

/**
 * Sign a transaction. Method is not documented in the web3.js docs. Not sure if it is safe.
 * 
 *   Parameters:
 *   web3           - web3 instance
 *   sign-tx-params - Parameters of transaction
 *                 See `(send-transaction!)`
 *   private-key    - Private key to sign the transaction with
 *   callback-fn    - callback with two parameters, error and result
 * 
 *   Returns signed transaction data.
 */
cljs_web3.eth.sign_transaction = (function cljs_web3$eth$sign_transaction(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41159 = arguments.length;
var i__4790__auto___41160 = (0);
while(true){
if((i__4790__auto___41160 < len__4789__auto___41159)){
args__4795__auto__.push((arguments[i__4790__auto___41160]));

var G__41161 = (i__4790__auto___41160 + (1));
i__4790__auto___41160 = G__41161;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.sign_transaction.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.eth.sign_transaction.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__41036){
var vec__41037 = p__41036;
var sign_tx_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41037,(0),null);
var private_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41037,(1),null);
var signed_tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41037,(2),null);
var args = vec__41037;
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.eth.eth(web3),"signTransaction",args);
}));

(cljs_web3.eth.sign_transaction.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.eth.sign_transaction.cljs$lang$applyTo = (function (seq41033){
var G__41034 = cljs.core.first(seq41033);
var seq41033__$1 = cljs.core.next(seq41033);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41034,seq41033__$1);
}));

/**
 * Executes a message call transaction, which is directly executed in the VM of
 *   the node, but never mined into the blockchain.
 * 
 *   Parameters:
 *   web3          - web3 instance
 *   call-object   - A transaction object see web3.eth.sendTransaction, with the
 *                difference that for calls the from property is optional as
 *                well.
 *   default-block - If you pass this parameter it will not use the default block
 *                set with set-default-block.
 *   callback-fn   - callback with two parameters, error and result
 * 
 *   Returns the returned data of the call as string, e.g. a codes functions return
 *   value.
 * 
 *   Example:
 *   user> `(call! web3-instance {:to   "0x"
 *                             :data "0x"}
 *              (fn [err res] (when-not err (println res))))`
 *   nil
 *   user> 0x
 */
cljs_web3.eth.call_BANG_ = (function cljs_web3$eth$call_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41162 = arguments.length;
var i__4790__auto___41163 = (0);
while(true){
if((i__4790__auto___41163 < len__4789__auto___41162)){
args__4795__auto__.push((arguments[i__4790__auto___41163]));

var G__41164 = (i__4790__auto___41163 + (1));
i__4790__auto___41163 = G__41164;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.call_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.eth.call_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__41043){
var vec__41044 = p__41043;
var call_object = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41044,(0),null);
var default_block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41044,(1),null);
var args = vec__41044;
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.eth.eth(web3),"call",args);
}));

(cljs_web3.eth.call_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.eth.call_BANG_.cljs$lang$applyTo = (function (seq41041){
var G__41042 = cljs.core.first(seq41041);
var seq41041__$1 = cljs.core.next(seq41041);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41042,seq41041__$1);
}));

/**
 * Executes a message call or transaction, which is directly executed in the VM
 *   of the node, but never mined into the blockchain and returns the amount of the
 *   gas used.
 * 
 *   Parameters:
 *   web3          - web3 instance
 *   call-object   - See `(send-transaction!)`, except that all properties are
 *                optional.
 *   callback-fn   - callback with two parameters, error and result
 * 
 *   Returns the used gas for the simulated call/transaction.
 * 
 *   Example:
 *   user> `(estimate-gas web3-instance
 *         {:to   "0x135a7de83802408321b74c322f8558db1679ac20",
 *          :data "0x135a7de83802408321b74c322f8558db1679ac20"}
 *         (fn [err res] (when-not err (println res))))`
 *   nil
 *   user> 22361
 */
cljs_web3.eth.estimate_gas = (function cljs_web3$eth$estimate_gas(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41171 = arguments.length;
var i__4790__auto___41172 = (0);
while(true){
if((i__4790__auto___41172 < len__4789__auto___41171)){
args__4795__auto__.push((arguments[i__4790__auto___41172]));

var G__41173 = (i__4790__auto___41172 + (1));
i__4790__auto___41172 = G__41173;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.estimate_gas.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.eth.estimate_gas.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__41050){
var vec__41051 = p__41050;
var call_object = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41051,(0),null);
var args = vec__41051;
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.eth.eth(web3),"estimateGas",args);
}));

(cljs_web3.eth.estimate_gas.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.eth.estimate_gas.cljs$lang$applyTo = (function (seq41048){
var G__41049 = cljs.core.first(seq41048);
var seq41048__$1 = cljs.core.next(seq41048);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41049,seq41048__$1);
}));

/**
 * Parameters:
 *   web3          - web3 instance
 *   block-or-transaction  - The string "latest" or "pending" to watch
 *                        for changes in the latest block or pending
 *                        transactions respectively. Or a filter options
 *                        object as follows:
 * 
 *  from-block: Number|String - The number of the earliest block (latest may be
 *                              given to mean the most recent and pending
 *                              currently mining, block). By default
 *                             latest.
 *  to-block: Number|String   - The number of the latest block (latest may be
 *                              given to mean the most recent and pending
 *                              currently mining, block). By default latest.
 * 
 *  address: String           - An address or a list of addresses to only get
 *                              logs from particular account(s).
 * 
 *  :topics: Array of Strings - An array of values which must each appear in the
 *                              log entries. The order is important, if you want
 *                              to leave topics out use null, e.g.
 *                              `[null, '0x00...']`. You can also pass another array
 *                              for each topic with options for that topic e.g.
 *                              `[null, ['option1', 'option2']]`
 * 
 *   Returns a filter object with the following methods:
 * 
 *  `(.get filter callback-fn)`:   Returns all of the log entries that fit the
 *                                 filter.
 *  `(.watch filter callback-fn)`: Watches for state changes that fit the
 *                                 filter and calls the callback.
 *  `(.stopWatching filter)`:      Stops the watch and uninstalls the filter in the
 *                                 node. Should always be called once it is done.
 * 
 *   Watch callback return value
 * 
 *  String - When using the "latest" parameter, it returns the block hash of
 *           the last incoming block.
 * 
 *  String - When using the "pending" parameter, it returns a transaction hash
 *           of the most recent pending transaction.
 *  Object - When using manual filter options, it returns a log object as follows:
 * 
 *      logIndex: Number - integer of the log index position in the block. null
 *                         when its pending log.
 *      transactionIndex: Number - integer of the transactions index position log
 *                                 was created from. null when its pending log.
 *      transactionHash: String, 32 Bytes - hash of the transactions this log was
 *                                          created from. null when its pending log.
 *      blockHash: String, 32 Bytes - hash of the block where this log was in. null
 *                                    when its pending. null when its pending log.
 *      blockNumber: Number - the block number where this log was in. null when its
 *                            pending. null when its pending log.
 *      address: String, 32 Bytes - address from which this log originated.
 *      data: String - contains one or more 32 Bytes non-indexed arguments of the log.
 * 
 *      topics: Array of Strings - Array of 0 to 4 32 Bytes DATA of indexed log
 *                                 arguments. (In solidity: The first topic is the hash
 *                                 of the signature of the event, except if you declared the
 *                                 event with the anonymous specifier.)
 * 
 *   Note for event filter return values see Contract Events at
 *   https://github.com/ethereum/wiki/wiki/JavaScript-API#contract-events
 */
cljs_web3.eth.filter = (function cljs_web3$eth$filter(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41174 = arguments.length;
var i__4790__auto___41175 = (0);
while(true){
if((i__4790__auto___41175 < len__4789__auto___41174)){
args__4795__auto__.push((arguments[i__4790__auto___41175]));

var G__41176 = (i__4790__auto___41175 + (1));
i__4790__auto___41175 = G__41176;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.filter.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.eth.filter.cljs$core$IFn$_invoke$arity$variadic = (function (web3,args){
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.eth.eth(web3),"filter",args);
}));

(cljs_web3.eth.filter.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.eth.filter.cljs$lang$applyTo = (function (seq41054){
var G__41055 = cljs.core.first(seq41054);
var seq41054__$1 = cljs.core.next(seq41054);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41055,seq41054__$1);
}));

/**
 * Compiling features being deprecated https://github.com/ethereum/EIPs/issues/209
 */
cljs_web3.eth.get_compilers = (function cljs_web3$eth$get_compilers(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41177 = arguments.length;
var i__4790__auto___41178 = (0);
while(true){
if((i__4790__auto___41178 < len__4789__auto___41177)){
args__4795__auto__.push((arguments[i__4790__auto___41178]));

var G__41179 = (i__4790__auto___41178 + (1));
i__4790__auto___41178 = G__41179;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.get_compilers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.eth.get_compilers.cljs$core$IFn$_invoke$arity$variadic = (function (web3,args){
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.eth.eth(web3),"getCompilers",args);
}));

(cljs_web3.eth.get_compilers.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.eth.get_compilers.cljs$lang$applyTo = (function (seq41056){
var G__41057 = cljs.core.first(seq41056);
var seq41056__$1 = cljs.core.next(seq41056);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41057,seq41056__$1);
}));

/**
 * Compiling features being deprecated https://github.com/ethereum/EIPs/issues/209
 */
cljs_web3.eth.compile_solidity = (function cljs_web3$eth$compile_solidity(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41180 = arguments.length;
var i__4790__auto___41181 = (0);
while(true){
if((i__4790__auto___41181 < len__4789__auto___41180)){
args__4795__auto__.push((arguments[i__4790__auto___41181]));

var G__41182 = (i__4790__auto___41181 + (1));
i__4790__auto___41181 = G__41182;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.compile_solidity.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.eth.compile_solidity.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__41060){
var vec__41061 = p__41060;
var source_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41061,(0),null);
var args = vec__41061;
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.eth.get_compile(web3),"solidity",args);
}));

(cljs_web3.eth.compile_solidity.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.eth.compile_solidity.cljs$lang$applyTo = (function (seq41058){
var G__41059 = cljs.core.first(seq41058);
var seq41058__$1 = cljs.core.next(seq41058);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41059,seq41058__$1);
}));

/**
 * Compiling features being deprecated https://github.com/ethereum/EIPs/issues/209
 */
cljs_web3.eth.compile_lll = (function cljs_web3$eth$compile_lll(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41183 = arguments.length;
var i__4790__auto___41184 = (0);
while(true){
if((i__4790__auto___41184 < len__4789__auto___41183)){
args__4795__auto__.push((arguments[i__4790__auto___41184]));

var G__41185 = (i__4790__auto___41184 + (1));
i__4790__auto___41184 = G__41185;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.compile_lll.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.eth.compile_lll.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__41066){
var vec__41067 = p__41066;
var source_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41067,(0),null);
var args = vec__41067;
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.eth.get_compile(web3),"lll",args);
}));

(cljs_web3.eth.compile_lll.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.eth.compile_lll.cljs$lang$applyTo = (function (seq41064){
var G__41065 = cljs.core.first(seq41064);
var seq41064__$1 = cljs.core.next(seq41064);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41065,seq41064__$1);
}));

/**
 * Compiling features being deprecated https://github.com/ethereum/EIPs/issues/209
 */
cljs_web3.eth.compile_serpent = (function cljs_web3$eth$compile_serpent(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41186 = arguments.length;
var i__4790__auto___41187 = (0);
while(true){
if((i__4790__auto___41187 < len__4789__auto___41186)){
args__4795__auto__.push((arguments[i__4790__auto___41187]));

var G__41188 = (i__4790__auto___41187 + (1));
i__4790__auto___41187 = G__41188;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.compile_serpent.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.eth.compile_serpent.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__41072){
var vec__41073 = p__41072;
var source_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41073,(0),null);
var args = vec__41073;
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.eth.get_compile(web3),"serpent",args);
}));

(cljs_web3.eth.compile_serpent.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.eth.compile_serpent.cljs$lang$applyTo = (function (seq41070){
var G__41071 = cljs.core.first(seq41070);
var seq41070__$1 = cljs.core.next(seq41070);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41071,seq41070__$1);
}));

/**
 * Returns GlobalRegistrar object.
 * 
 *   See https://github.com/ethereum/web3.js/blob/master/example/namereg.html
 *   for an example in JavaScript.
 */
cljs_web3.eth.namereg = (function cljs_web3$eth$namereg(web3){
return (cljs_web3.eth.eth(web3)["namereg"]);
});
/**
 * Creates a contract object for a solidity contract, which can be used to
 *   initiate contracts on an address.
 * 
 *   Parameters:
 *   web3          - web3 instance
 *   abi           - ABI array with descriptions of functions and events of
 *                the contract
 *   callback-fn   - callback with two parameters, error and result
 * 
 *   Returns a contract object.
 */
cljs_web3.eth.contract = (function cljs_web3$eth$contract(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41190 = arguments.length;
var i__4790__auto___41191 = (0);
while(true){
if((i__4790__auto___41191 < len__4789__auto___41190)){
args__4795__auto__.push((arguments[i__4790__auto___41191]));

var G__41192 = (i__4790__auto___41191 + (1));
i__4790__auto___41191 = G__41192;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.contract.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.eth.contract.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__41078){
var vec__41079 = p__41078;
var abi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41079,(0),null);
var args = vec__41079;
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.eth.eth(web3),"contract",args);
}));

(cljs_web3.eth.contract.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.eth.contract.cljs$lang$applyTo = (function (seq41076){
var G__41077 = cljs.core.first(seq41076);
var seq41076__$1 = cljs.core.next(seq41076);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41077,seq41076__$1);
}));

/**
 * Initiate an existing contract on an address.
 * 
 *   Parameters:
 *   web3          - web3 instance
 *   abi           - ABI array with descriptions of functions and events of
 *                the contract
 *   address       - The address of the existing contract
 * 
 *   Example:
 *   user> `(contract-at web3-instance
 *                    abi
 *                    address)`
 */
cljs_web3.eth.contract_at = (function cljs_web3$eth$contract_at(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41194 = arguments.length;
var i__4790__auto___41195 = (0);
while(true){
if((i__4790__auto___41195 < len__4789__auto___41194)){
args__4795__auto__.push((arguments[i__4790__auto___41195]));

var G__41196 = (i__4790__auto___41195 + (1));
i__4790__auto___41195 = G__41196;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return cljs_web3.eth.contract_at.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(cljs_web3.eth.contract_at.cljs$core$IFn$_invoke$arity$variadic = (function (web3,abi,p__41085){
var vec__41086 = p__41085;
var address = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41086,(0),null);
var args = vec__41086;
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.eth.contract.cljs$core$IFn$_invoke$arity$variadic(web3,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([abi], 0)),"at",args);
}));

(cljs_web3.eth.contract_at.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs_web3.eth.contract_at.cljs$lang$applyTo = (function (seq41082){
var G__41083 = cljs.core.first(seq41082);
var seq41082__$1 = cljs.core.next(seq41082);
var G__41084 = cljs.core.first(seq41082__$1);
var seq41082__$2 = cljs.core.next(seq41082__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41083,G__41084,seq41082__$2);
}));

/**
 * Deploy a contract asynchronous from a Solidity file.
 * 
 *   Parameters:
 *   web3             - web3 instance
 *   abi              - ABI array with descriptions of functions and events of
 *                   the contract
 *   transaction-data - map that contains
 *  - :gas - max gas to use
 *  - :data the BIN of the contract
 *  - :from account to use
 *   callback-fn      - callback with two parameters, error and contract.
 *                   From the contract the "address" property can be used to
 *                   obtain the address. And the "transactionHash" to obtain
 *                   the hash of the transaction, which created the contract.
 * 
 *   Example:
 *   `(contract-new web3-instance
 *               abi
 *               {:from "0x.."
 *                :data bin
 *                :gas  4000000}
 *               (fn [err contract]
 *                 (if-not err
 *                  (let [address (aget contract "address")
 *                        tx-hash (aget contract "transactionHash")]
 *                    ;; Two calls: transaction received
 *                    ;; and contract deployed.
 *                    ;; Check address on the second call
 *                    (when (address? address)
 *                      (do-something-with-contract contract)
 *                      (do-something-with-address address)))
 *                  (println "error deploying contract" err))))`
 * nil
 */
cljs_web3.eth.contract_new = (function cljs_web3$eth$contract_new(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41197 = arguments.length;
var i__4790__auto___41198 = (0);
while(true){
if((i__4790__auto___41198 < len__4789__auto___41197)){
args__4795__auto__.push((arguments[i__4790__auto___41198]));

var G__41199 = (i__4790__auto___41198 + (1));
i__4790__auto___41198 = G__41199;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return cljs_web3.eth.contract_new.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(cljs_web3.eth.contract_new.cljs$core$IFn$_invoke$arity$variadic = (function (web3,abi,p__41092){
var vec__41093 = p__41092;
var transaction_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41093,(0),null);
var callback_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41093,(1),null);
var args = vec__41093;
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.eth.contract.cljs$core$IFn$_invoke$arity$variadic(web3,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([abi], 0)),"new",args);
}));

(cljs_web3.eth.contract_new.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs_web3.eth.contract_new.cljs$lang$applyTo = (function (seq41089){
var G__41090 = cljs.core.first(seq41089);
var seq41089__$1 = cljs.core.next(seq41089);
var G__41091 = cljs.core.first(seq41089__$1);
var seq41089__$2 = cljs.core.next(seq41089__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41090,G__41091,seq41089__$2);
}));

/**
 * Explicitly call a method on a contract.
 * 
 *   Use the kebab-cases version of the original method.
 *   E.g., function fooBar() can be addressed with :foo-bar.
 * 
 *   Parameters:
 *   contract-instance - an instance of the contract (obtained via `contract` or
 *                    `contract-at`)
 *   method            - the kebab-cased version of the method
 *   args              - arguments to the method
 * 
 *   Example:
 *   user> `(web3-eth/contract-call ContractInstance :multiply 5)`
 *   25
 */
cljs_web3.eth.contract_call = (function cljs_web3$eth$contract_call(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41200 = arguments.length;
var i__4790__auto___41201 = (0);
while(true){
if((i__4790__auto___41201 < len__4789__auto___41200)){
args__4795__auto__.push((arguments[i__4790__auto___41201]));

var G__41202 = (i__4790__auto___41201 + (1));
i__4790__auto___41201 = G__41202;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return cljs_web3.eth.contract_call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(cljs_web3.eth.contract_call.cljs$core$IFn$_invoke$arity$variadic = (function (contract_instance,method,args){
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(contract_instance,method,args);
}));

(cljs_web3.eth.contract_call.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs_web3.eth.contract_call.cljs$lang$applyTo = (function (seq41096){
var G__41097 = cljs.core.first(seq41096);
var seq41096__$1 = cljs.core.next(seq41096);
var G__41098 = cljs.core.first(seq41096__$1);
var seq41096__$2 = cljs.core.next(seq41096__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41097,G__41098,seq41096__$2);
}));

/**
 * Gets binary data of a contract method call.
 * 
 *   Use the kebab-cases version of the original method.
 *   E.g., function fooBar() can be addressed with :foo-bar.
 * 
 *   Parameters:
 *   contract-instance - an instance of the contract (obtained via `contract` or
 *                    `contract-at`)
 *   method            - the kebab-cased version of the method
 *   args              - arguments to the method
 * 
 *   Example:
 *   user> `(web3-eth/contract-call ContractInstance :multiply 5)`
 *   25
 */
cljs_web3.eth.contract_get_data = (function cljs_web3$eth$contract_get_data(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41203 = arguments.length;
var i__4790__auto___41204 = (0);
while(true){
if((i__4790__auto___41204 < len__4789__auto___41203)){
args__4795__auto__.push((arguments[i__4790__auto___41204]));

var G__41205 = (i__4790__auto___41204 + (1));
i__4790__auto___41204 = G__41205;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return cljs_web3.eth.contract_get_data.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(cljs_web3.eth.contract_get_data.cljs$core$IFn$_invoke$arity$variadic = (function (contract_instance,method,args){
var method_name = (function (){var G__41102 = cljs.core.name(method);
return (cljs_web3.utils.camel_case.cljs$core$IFn$_invoke$arity$1 ? cljs_web3.utils.camel_case.cljs$core$IFn$_invoke$arity$1(G__41102) : cljs_web3.utils.camel_case.call(null,G__41102));
})();
var method_fn = (contract_instance[method_name]);
if(cljs.core.truth_(method_fn)){
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(method_fn,"getData",args);
} else {
throw ["Method: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_name)," was not found in object."].join('');
}
}));

(cljs_web3.eth.contract_get_data.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs_web3.eth.contract_get_data.cljs$lang$applyTo = (function (seq41099){
var G__41100 = cljs.core.first(seq41099);
var seq41099__$1 = cljs.core.next(seq41099);
var G__41101 = cljs.core.first(seq41099__$1);
var seq41099__$2 = cljs.core.next(seq41099__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41100,G__41101,seq41099__$2);
}));

/**
 * Stops and uninstalls the filter.
 * 
 *   Arguments:
 *   filter - the filter to stop
 */
cljs_web3.eth.stop_watching_BANG_ = (function cljs_web3$eth$stop_watching_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41206 = arguments.length;
var i__4790__auto___41207 = (0);
while(true){
if((i__4790__auto___41207 < len__4789__auto___41206)){
args__4795__auto__.push((arguments[i__4790__auto___41207]));

var G__41208 = (i__4790__auto___41207 + (1));
i__4790__auto___41207 = G__41208;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.stop_watching_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.eth.stop_watching_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (filter,args){
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(filter,"stopWatching",args);
}));

(cljs_web3.eth.stop_watching_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.eth.stop_watching_BANG_.cljs$lang$applyTo = (function (seq41103){
var G__41104 = cljs.core.first(seq41103);
var seq41103__$1 = cljs.core.next(seq41103);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41104,seq41103__$1);
}));


//# sourceMappingURL=cljs_web3.eth.js.map
