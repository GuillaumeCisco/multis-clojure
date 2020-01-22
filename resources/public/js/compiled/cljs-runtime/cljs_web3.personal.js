goog.provide('cljs_web3.personal');
goog.require('cljs.core');
goog.require('cljs_web3.utils');
/**
 * Get the web3-eth-personal package.
 * 
 *   Parameter:
 *   web3 - web3 instance
 */
cljs_web3.personal.get_prs = (function cljs_web3$personal$get_prs(web3){
return (web3["personal"]);
});
/**
 * List accounts available.
 * 
 *   Parameter:
 *   web3 - web3 instance
 * 
 *   Returns all the Ethereum account addresses of all keys in the key store.
 * 
 *   Example:
 *   user> `(list-accounts web3-instance)`
 *   ["0x5e97870f263700f46aa00d967821199b9bc5a120",
 * "0x3d80b31a78c30fc628f20b2c89d7ddbf6e53cedc"]
 */
cljs_web3.personal.list_accounts = cljs_web3.utils.prop_or_clb_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["personal","listAccounts"], 0));
/**
 * Removes the private key with given address from memory. The account can no
 *   longer be used to send transactions.
 * 
 *   Parameters:
 *   web3    - web3 instance
 *   address - address to lock
 */
cljs_web3.personal.lock_account = (function cljs_web3$personal$lock_account(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41813 = arguments.length;
var i__4790__auto___41814 = (0);
while(true){
if((i__4790__auto___41814 < len__4789__auto___41813)){
args__4795__auto__.push((arguments[i__4790__auto___41814]));

var G__41815 = (i__4790__auto___41814 + (1));
i__4790__auto___41814 = G__41815;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.personal.lock_account.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.personal.lock_account.cljs$core$IFn$_invoke$arity$variadic = (function (web3,args){
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.personal.get_prs(web3),"lockAccount",args);
}));

(cljs_web3.personal.lock_account.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.personal.lock_account.cljs$lang$applyTo = (function (seq41704){
var G__41705 = cljs.core.first(seq41704);
var seq41704__$1 = cljs.core.next(seq41704);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41705,seq41704__$1);
}));

/**
 * Creates a new account.
 * 
 *   Note: Never call this function over a unsecured Websocket or HTTP provider, as
 *   your password will be send in plain text!
 * 
 *   Parameters:
 *   web3 - web3 instance
 *   password - String: The password to encrypt this account with.
 * 
 *   Returns:
 *   Promise returns Boolean: true if the account was created, otherwise
 *   false.
 */
cljs_web3.personal.new_account = (function cljs_web3$personal$new_account(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41816 = arguments.length;
var i__4790__auto___41817 = (0);
while(true){
if((i__4790__auto___41817 < len__4789__auto___41816)){
args__4795__auto__.push((arguments[i__4790__auto___41817]));

var G__41818 = (i__4790__auto___41817 + (1));
i__4790__auto___41817 = G__41818;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.personal.new_account.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.personal.new_account.cljs$core$IFn$_invoke$arity$variadic = (function (web3,args){
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.personal.get_prs(web3),"newAccount",args);
}));

(cljs_web3.personal.new_account.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.personal.new_account.cljs$lang$applyTo = (function (seq41717){
var G__41718 = cljs.core.first(seq41717);
var seq41717__$1 = cljs.core.next(seq41717);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41718,seq41717__$1);
}));

/**
 * Unlocks the given account for duration seconds.
 * 
 *   Parameters:
 *   web3       - web3 instance
 *   address    - address to unlock
 *   passphrase - passphrase
 *   duration   - time to unlock for in seconds, 0 for indefinitely
 *   callback   - callback with error and result parameters
 * 
 *   Returns boolean as to whether the account was successfully unlocked.
 * 
 *   Example:
 *   user> `(web3-personal/unlock-account web3-instance
 *                                 account
 *                                 "password"
 *                                 indefinitely
 *                                 callback)`
 */
cljs_web3.personal.unlock_account = (function cljs_web3$personal$unlock_account(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41821 = arguments.length;
var i__4790__auto___41823 = (0);
while(true){
if((i__4790__auto___41823 < len__4789__auto___41821)){
args__4795__auto__.push((arguments[i__4790__auto___41823]));

var G__41827 = (i__4790__auto___41823 + (1));
i__4790__auto___41823 = G__41827;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.personal.unlock_account.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.personal.unlock_account.cljs$core$IFn$_invoke$arity$variadic = (function (web3,args){
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.personal.get_prs(web3),"unlockAccount",args);
}));

(cljs_web3.personal.unlock_account.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.personal.unlock_account.cljs$lang$applyTo = (function (seq41728){
var G__41729 = cljs.core.first(seq41728);
var seq41728__$1 = cljs.core.next(seq41728);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41729,seq41728__$1);
}));

/**
 * Recovers the Ethereum address which was used to sign the given data.
 * 
 *   Parameters:
 *   web3 - web3 instance
 *   signature - String|Object: Either the encoded signature, the v, r, s values as
 *                           separate parameters, or an object with the following
 *                           values:
 *    messageHash - String: The hash of the given message.
 *    r - String: First 32 bytes of the signature
 *    s - String: Next 32 bytes of the signature
 *    v - String: Recovery value + 27
 * 
 *   Returns the Ethereum address used to sign this data.
 */
cljs_web3.personal.ec_recover = (function cljs_web3$personal$ec_recover(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41838 = arguments.length;
var i__4790__auto___41839 = (0);
while(true){
if((i__4790__auto___41839 < len__4789__auto___41838)){
args__4795__auto__.push((arguments[i__4790__auto___41839]));

var G__41840 = (i__4790__auto___41839 + (1));
i__4790__auto___41839 = G__41840;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.personal.ec_recover.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.personal.ec_recover.cljs$core$IFn$_invoke$arity$variadic = (function (web3,args){
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.personal.get_prs(web3),"ecRecover",args);
}));

(cljs_web3.personal.ec_recover.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.personal.ec_recover.cljs$lang$applyTo = (function (seq41743){
var G__41744 = cljs.core.first(seq41743);
var seq41743__$1 = cljs.core.next(seq41743);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41744,seq41743__$1);
}));

/**
 * Imports the given unencrypted private key (hex string) into the key store,
 *   encrypting it with the passphrase.
 * 
 *   Parameters:
 *   web3       - web3 instance
 *   keydata    - hex string representing the unencrypted private key
 *   passphrase - passphrase
 *   callback   - callback with error and result as parameters
 * 
 *   Returns the address of the new account.
 */
cljs_web3.personal.import_raw_key = (function cljs_web3$personal$import_raw_key(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41843 = arguments.length;
var i__4790__auto___41844 = (0);
while(true){
if((i__4790__auto___41844 < len__4789__auto___41843)){
args__4795__auto__.push((arguments[i__4790__auto___41844]));

var G__41845 = (i__4790__auto___41844 + (1));
i__4790__auto___41844 = G__41845;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.personal.import_raw_key.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.personal.import_raw_key.cljs$core$IFn$_invoke$arity$variadic = (function (web3,args){
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.personal.get_prs(web3),"importRawKey",args);
}));

(cljs_web3.personal.import_raw_key.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.personal.import_raw_key.cljs$lang$applyTo = (function (seq41754){
var G__41755 = cljs.core.first(seq41754);
var seq41754__$1 = cljs.core.next(seq41754);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41755,seq41754__$1);
}));

/**
 * Validate the given passphrase and submit transaction.
 * 
 *   Parameters:
 *   web3        - web3 instance
 *   transaction - The same argument as for `(web3-eth/send-transaction! ...)`
 *              and contains the from address. If the passphrase can be
 *              used to decrypt the private key belonging to tx.from the
 *              transaction is verified, signed and send onto the network.
 *              The account is not unlocked globally in the node and cannot
 *              be used in other RPC calls.
 *   passphrase  - passphrase
 *   callback    - callback with error and result as parameters
 * 
 *   Example:
 *   user> `(send-transaction web3-instance
 *         {:from "0x..."
 *          :to   "0x"}
 *        "password"
 *       callback)`
 */
cljs_web3.personal.send_transaction = (function cljs_web3$personal$send_transaction(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41848 = arguments.length;
var i__4790__auto___41849 = (0);
while(true){
if((i__4790__auto___41849 < len__4789__auto___41848)){
args__4795__auto__.push((arguments[i__4790__auto___41849]));

var G__41850 = (i__4790__auto___41849 + (1));
i__4790__auto___41849 = G__41850;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.personal.send_transaction.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.personal.send_transaction.cljs$core$IFn$_invoke$arity$variadic = (function (web3,args){
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.personal.get_prs(web3),"sendTransaction",args);
}));

(cljs_web3.personal.send_transaction.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.personal.send_transaction.cljs$lang$applyTo = (function (seq41781){
var G__41782 = cljs.core.first(seq41781);
var seq41781__$1 = cljs.core.next(seq41781);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41782,seq41781__$1);
}));

/**
 * Signs data using a specific account.
 * 
 *   Note: Sending your account password over an unsecured HTTP RPC connection is
 *   highly unsecure.
 * 
 *   Parameters:
 *   web3     - web3 instance
 *   String   - Data to sign. If String it will be converted using
 *           web3.utils.utf8ToHex.
 *   String   - Address to sign data with.
 *   String   - The password of the account to sign data with.
 *   Function - (optional) Optional callback, returns an error object as first
 *                      parameter and the result as second.
 * 
 *   Returns:
 *   Promise returns String - The signature.
 */
cljs_web3.personal.sign = (function cljs_web3$personal$sign(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41851 = arguments.length;
var i__4790__auto___41852 = (0);
while(true){
if((i__4790__auto___41852 < len__4789__auto___41851)){
args__4795__auto__.push((arguments[i__4790__auto___41852]));

var G__41853 = (i__4790__auto___41852 + (1));
i__4790__auto___41852 = G__41853;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.personal.sign.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.personal.sign.cljs$core$IFn$_invoke$arity$variadic = (function (web3,args){
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.personal.get_prs(web3),"sign",args);
}));

(cljs_web3.personal.sign.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.personal.sign.cljs$lang$applyTo = (function (seq41791){
var G__41792 = cljs.core.first(seq41791);
var seq41791__$1 = cljs.core.next(seq41791);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41792,seq41791__$1);
}));


//# sourceMappingURL=cljs_web3.personal.js.map
