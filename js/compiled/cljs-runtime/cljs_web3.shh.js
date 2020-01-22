goog.provide('cljs_web3.shh');
goog.require('cljs.core');
goog.require('cljs_web3.utils');
/**
 * Obtain Whisper package from web3 object
 * 
 *   Parameters:
 *   web3 - web3 instance
 */
cljs_web3.shh.get_shh = (function cljs_web3$shh$get_shh(web3){
return (web3["shh"]);
});
/**
 * This method should be called, when we want to post whisper a message to the
 *   network.
 * 
 *   Parameters:
 *   web3 - web3 instance
 *   data - The post object:
 *          :sym-key-id - String (optional): ID of symmetric key for message
 *                                           encryption (Either symKeyID or
 *                                           pubKey must be present. Cannot be both.)
 * 
 *          :pub-key - String (optional): The public key for message
 *                                        encryption (Either symKeyID or pubKey must
 *                                        be present. Cannot be both.)
 *          :sig - String (optional): The ID of the signing key.
 *          :ttl - Number: Time-to-live in seconds.
 *          :topic - String: 4 Bytes (mandatory when key is symmetric): Message
 *                                                                      topic.
 *          :payload - String: The payload of the message to be encrypted.
 *          :padding - Number (optional): Padding (byte array of arbitrary
 *                                        length).
 *          :pow-time - Number (optional)?: Maximal time in seconds to be spent on
 *                                          proof of work.
 *          :pow-target - Number (optional)?: Minimal PoW target required for this
 *                                            message.
 *          :target-peer - Number (optional): Peer ID (for peer-to-peer message only).
 *  callback - Function: (optional) Optional callback, returns an error object
 *                                  as first parameter and the result as second.
 * 
 *   Returns:
 *   Boolean - returns true if the message was send, otherwise false or error.
 * 
 *   JavaScript example: http://web3js.readthedocs.io/en/1.0/web3-shh.html#id74
 */
cljs_web3.shh.post_BANG_ = (function cljs_web3$shh$post_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41756 = arguments.length;
var i__4790__auto___41757 = (0);
while(true){
if((i__4790__auto___41757 < len__4789__auto___41756)){
args__4795__auto__.push((arguments[i__4790__auto___41757]));

var G__41758 = (i__4790__auto___41757 + (1));
i__4790__auto___41757 = G__41758;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.shh.post_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.shh.post_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web3,args){
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.shh.get_shh(web3),"post",args);
}));

(cljs_web3.shh.post_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.shh.post_BANG_.cljs$lang$applyTo = (function (seq41702){
var G__41703 = cljs.core.first(seq41702);
var seq41702__$1 = cljs.core.next(seq41702);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41703,seq41702__$1);
}));

/**
 * Seems deprecated since no JavaScript documentation available at
 *   http://web3js.readthedocs.io/en/1.0/web3-shh.html
 */
cljs_web3.shh.new_identity = (function cljs_web3$shh$new_identity(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41764 = arguments.length;
var i__4790__auto___41765 = (0);
while(true){
if((i__4790__auto___41765 < len__4789__auto___41764)){
args__4795__auto__.push((arguments[i__4790__auto___41765]));

var G__41769 = (i__4790__auto___41765 + (1));
i__4790__auto___41765 = G__41769;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.shh.new_identity.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.shh.new_identity.cljs$core$IFn$_invoke$arity$variadic = (function (web3,args){
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.shh.get_shh(web3),"newIdentity",args);
}));

(cljs_web3.shh.new_identity.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.shh.new_identity.cljs$lang$applyTo = (function (seq41706){
var G__41707 = cljs.core.first(seq41706);
var seq41706__$1 = cljs.core.next(seq41706);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41707,seq41706__$1);
}));

/**
 * Seems deprecated since no JavaScript documentation available at
 *   http://web3js.readthedocs.io/en/1.0/web3-shh.html
 */
cljs_web3.shh.has_identity_QMARK_ = (function cljs_web3$shh$has_identity_QMARK_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41773 = arguments.length;
var i__4790__auto___41774 = (0);
while(true){
if((i__4790__auto___41774 < len__4789__auto___41773)){
args__4795__auto__.push((arguments[i__4790__auto___41774]));

var G__41775 = (i__4790__auto___41774 + (1));
i__4790__auto___41774 = G__41775;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.shh.has_identity_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.shh.has_identity_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (web3,args){
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.shh.get_shh(web3),"hasIdentity",args);
}));

(cljs_web3.shh.has_identity_QMARK_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.shh.has_identity_QMARK_.cljs$lang$applyTo = (function (seq41715){
var G__41716 = cljs.core.first(seq41715);
var seq41715__$1 = cljs.core.next(seq41715);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41716,seq41715__$1);
}));

/**
 * Seems deprecated since no JavaScript documentation available at
 *   http://web3js.readthedocs.io/en/1.0/web3-shh.html
 */
cljs_web3.shh.new_group = (function cljs_web3$shh$new_group(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41778 = arguments.length;
var i__4790__auto___41779 = (0);
while(true){
if((i__4790__auto___41779 < len__4789__auto___41778)){
args__4795__auto__.push((arguments[i__4790__auto___41779]));

var G__41780 = (i__4790__auto___41779 + (1));
i__4790__auto___41779 = G__41780;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.shh.new_group.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.shh.new_group.cljs$core$IFn$_invoke$arity$variadic = (function (web3,args){
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.shh.get_shh(web3),"newGroup",args);
}));

(cljs_web3.shh.new_group.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.shh.new_group.cljs$lang$applyTo = (function (seq41723){
var G__41724 = cljs.core.first(seq41723);
var seq41723__$1 = cljs.core.next(seq41723);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41724,seq41723__$1);
}));

/**
 * Seems deprecated since no JavaScript documentation available at
 *   http://web3js.readthedocs.io/en/1.0/web3-shh.html
 */
cljs_web3.shh.add_to_group = (function cljs_web3$shh$add_to_group(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41783 = arguments.length;
var i__4790__auto___41784 = (0);
while(true){
if((i__4790__auto___41784 < len__4789__auto___41783)){
args__4795__auto__.push((arguments[i__4790__auto___41784]));

var G__41785 = (i__4790__auto___41784 + (1));
i__4790__auto___41784 = G__41785;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.shh.add_to_group.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.shh.add_to_group.cljs$core$IFn$_invoke$arity$variadic = (function (web3,args){
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.shh.get_shh(web3),"addToGroup",args);
}));

(cljs_web3.shh.add_to_group.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.shh.add_to_group.cljs$lang$applyTo = (function (seq41738){
var G__41739 = cljs.core.first(seq41738);
var seq41738__$1 = cljs.core.next(seq41738);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41739,seq41738__$1);
}));


//# sourceMappingURL=cljs_web3.shh.js.map
