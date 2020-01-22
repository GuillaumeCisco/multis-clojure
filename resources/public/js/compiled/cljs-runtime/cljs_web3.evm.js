goog.provide('cljs_web3.evm');
goog.require('cljs.core');
goog.require('cljs_web3.utils');
/**
 * Creates an fn that sends synchronous function to the currentProvider.
 * 
 *   Parameter:
 *   web3 - web3 instance
 * 
 *   Example:
 *   user> `(send-async-fn web3)`
 *   #object...
 */
cljs_web3.evm.send_sync_fn = (function cljs_web3$evm$send_sync_fn(web3){
return (function() { 
var G__41856__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.js_invoke,(web3["currentProvider"]),"send",args);
};
var G__41856 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41858__i = 0, G__41858__a = new Array(arguments.length -  0);
while (G__41858__i < G__41858__a.length) {G__41858__a[G__41858__i] = arguments[G__41858__i + 0]; ++G__41858__i;}
  args = new cljs.core.IndexedSeq(G__41858__a,0,null);
} 
return G__41856__delegate.call(this,args);};
G__41856.cljs$lang$maxFixedArity = 0;
G__41856.cljs$lang$applyTo = (function (arglist__41862){
var args = cljs.core.seq(arglist__41862);
return G__41856__delegate(args);
});
G__41856.cljs$core$IFn$_invoke$arity$variadic = G__41856__delegate;
return G__41856;
})()
;
});
/**
 * Creates an fn that sends asynchronous function to the currentProvider.
 * 
 *   Parameter:
 *   web3 - web3 instance
 * 
 *   Example:
 *   user> `(send-async-fn web3)`
 *   #object...
 */
cljs_web3.evm.send_async_fn = (function cljs_web3$evm$send_async_fn(web3){
return (function() { 
var G__41863__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.js_invoke,(web3["currentProvider"]),"sendAsync",args);
};
var G__41863 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41864__i = 0, G__41864__a = new Array(arguments.length -  0);
while (G__41864__i < G__41864__a.length) {G__41864__a[G__41864__i] = arguments[G__41864__i + 0]; ++G__41864__i;}
  args = new cljs.core.IndexedSeq(G__41864__a,0,null);
} 
return G__41863__delegate.call(this,args);};
G__41863.cljs$lang$maxFixedArity = 0;
G__41863.cljs$lang$applyTo = (function (arglist__41865){
var args = cljs.core.seq(arglist__41865);
return G__41863__delegate(args);
});
G__41863.cljs$core$IFn$_invoke$arity$variadic = G__41863__delegate;
return G__41863;
})()
;
});
cljs_web3.evm.increase_time_jsonrpc = (function cljs_web3$evm$increase_time_jsonrpc(args){
return cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"jsonrpc","jsonrpc",1483657187),"2.0",new cljs.core.Keyword(null,"method","method",55703592),"evm_increaseTime",new cljs.core.Keyword(null,"params","params",710516235),args,new cljs.core.Keyword(null,"id","id",-1388402092),(new Date()).getTime()], null));
});
/**
 * Jump forward in time in the EVM.
 * 
 *   Parameters:
 *   web3     - web3 instance
 *   args     - The amount of time to increase in seconds.
 *   callback - callback with two parameters, error and result.
 * 
 *   Returns the total time adjustment, in seconds.
 * 
 *   Example:
 *   user> `(web3-evm/increase-time! web3 [1000] callback)`
 */
cljs_web3.evm.increase_time_BANG_ = (function cljs_web3$evm$increase_time_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41868 = arguments.length;
var i__4790__auto___41870 = (0);
while(true){
if((i__4790__auto___41870 < len__4789__auto___41868)){
args__4795__auto__.push((arguments[i__4790__auto___41870]));

var G__41871 = (i__4790__auto___41870 + (1));
i__4790__auto___41870 = G__41871;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return cljs_web3.evm.increase_time_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(cljs_web3.evm.increase_time_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web3,args,p__41719){
var vec__41725 = p__41719;
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41725,(0),null);
if(cljs.core.fn_QMARK_(callback)){
var G__41731 = cljs_web3.evm.increase_time_jsonrpc(args);
var G__41732 = cljs_web3.utils.callback_js__GT_clj(callback);
var fexpr__41730 = cljs_web3.evm.send_async_fn(web3);
return (fexpr__41730.cljs$core$IFn$_invoke$arity$2 ? fexpr__41730.cljs$core$IFn$_invoke$arity$2(G__41731,G__41732) : fexpr__41730.call(null,G__41731,G__41732));
} else {
var G__41733 = (function (){var G__41735 = cljs_web3.evm.increase_time_jsonrpc(args);
var fexpr__41734 = cljs_web3.evm.send_sync_fn(web3);
return (fexpr__41734.cljs$core$IFn$_invoke$arity$1 ? fexpr__41734.cljs$core$IFn$_invoke$arity$1(G__41735) : fexpr__41734.call(null,G__41735));
})();
return (cljs_web3.utils.js__GT_cljkk.cljs$core$IFn$_invoke$arity$1 ? cljs_web3.utils.js__GT_cljkk.cljs$core$IFn$_invoke$arity$1(G__41733) : cljs_web3.utils.js__GT_cljkk.call(null,G__41733));
}
}));

(cljs_web3.evm.increase_time_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs_web3.evm.increase_time_BANG_.cljs$lang$applyTo = (function (seq41712){
var G__41713 = cljs.core.first(seq41712);
var seq41712__$1 = cljs.core.next(seq41712);
var G__41714 = cljs.core.first(seq41712__$1);
var seq41712__$2 = cljs.core.next(seq41712__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41713,G__41714,seq41712__$2);
}));

cljs_web3.evm.mine_jsonrpc = (function cljs_web3$evm$mine_jsonrpc(){
return cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"jsonrpc","jsonrpc",1483657187),"2.0",new cljs.core.Keyword(null,"method","method",55703592),"evm_mine",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092),(new Date()).getTime()], null));
});
/**
 * Force a block to be mined. Mines a block independent of
 *   whether or not mining is started or stopped.
 * 
 *   Parameters:
 *   web3     - web3 instance
 *   callback - callback with two parameters, error and result.
 * 
 *   Example:
 *   user> `(web3-evm/mine! web3 callback)`
 */
cljs_web3.evm.mine_BANG_ = (function cljs_web3$evm$mine_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41881 = arguments.length;
var i__4790__auto___41882 = (0);
while(true){
if((i__4790__auto___41882 < len__4789__auto___41881)){
args__4795__auto__.push((arguments[i__4790__auto___41882]));

var G__41883 = (i__4790__auto___41882 + (1));
i__4790__auto___41882 = G__41883;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.evm.mine_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.evm.mine_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__41749){
var vec__41761 = p__41749;
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41761,(0),null);
if(cljs.core.fn_QMARK_(callback)){
var G__41767 = cljs_web3.evm.mine_jsonrpc();
var G__41768 = cljs_web3.utils.callback_js__GT_clj(callback);
var fexpr__41766 = cljs_web3.evm.send_async_fn(web3);
return (fexpr__41766.cljs$core$IFn$_invoke$arity$2 ? fexpr__41766.cljs$core$IFn$_invoke$arity$2(G__41767,G__41768) : fexpr__41766.call(null,G__41767,G__41768));
} else {
var G__41770 = (function (){var G__41772 = cljs_web3.evm.mine_jsonrpc();
var fexpr__41771 = cljs_web3.evm.send_sync_fn(web3);
return (fexpr__41771.cljs$core$IFn$_invoke$arity$1 ? fexpr__41771.cljs$core$IFn$_invoke$arity$1(G__41772) : fexpr__41771.call(null,G__41772));
})();
return (cljs_web3.utils.js__GT_cljkk.cljs$core$IFn$_invoke$arity$1 ? cljs_web3.utils.js__GT_cljkk.cljs$core$IFn$_invoke$arity$1(G__41770) : cljs_web3.utils.js__GT_cljkk.call(null,G__41770));
}
}));

(cljs_web3.evm.mine_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.evm.mine_BANG_.cljs$lang$applyTo = (function (seq41745){
var G__41746 = cljs.core.first(seq41745);
var seq41745__$1 = cljs.core.next(seq41745);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41746,seq41745__$1);
}));

cljs_web3.evm.revert_jsonrpc = (function cljs_web3$evm$revert_jsonrpc(args){
return cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"jsonrpc","jsonrpc",1483657187),"2.0",new cljs.core.Keyword(null,"method","method",55703592),"evm_revert",new cljs.core.Keyword(null,"params","params",710516235),args,new cljs.core.Keyword(null,"id","id",-1388402092),(new Date()).getTime()], null));
});
/**
 * Revert the state of the blockchain to a previous snapshot.
 * 
 *   Takes a single
 *   parameter, which is the snapshot id to revert to. If no snapshot id is passed
 *   it will revert to the latest snapshot. Returns true.
 * 
 *   Parameters:
 *   web3     - web3 instance
 *   args     - snapshot id to revert to, if no snapshot id is passed, it will
 *           revert to the latest snapshot
 *   callback - callback with two parameters, error and result.
 * 
 *   Returns true.
 * 
 *   Example:
 *   user> `(web3-evm/revert! web3 0 callback)`
 */
cljs_web3.evm.revert_BANG_ = (function cljs_web3$evm$revert_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41886 = arguments.length;
var i__4790__auto___41887 = (0);
while(true){
if((i__4790__auto___41887 < len__4789__auto___41886)){
args__4795__auto__.push((arguments[i__4790__auto___41887]));

var G__41888 = (i__4790__auto___41887 + (1));
i__4790__auto___41887 = G__41888;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return cljs_web3.evm.revert_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(cljs_web3.evm.revert_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web3,args,p__41797){
var vec__41798 = p__41797;
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41798,(0),null);
if(cljs.core.fn_QMARK_(callback)){
var G__41802 = cljs_web3.evm.revert_jsonrpc(args);
var G__41803 = cljs_web3.utils.callback_js__GT_clj(callback);
var fexpr__41801 = cljs_web3.evm.send_async_fn(web3);
return (fexpr__41801.cljs$core$IFn$_invoke$arity$2 ? fexpr__41801.cljs$core$IFn$_invoke$arity$2(G__41802,G__41803) : fexpr__41801.call(null,G__41802,G__41803));
} else {
var G__41805 = (function (){var G__41807 = cljs_web3.evm.revert_jsonrpc(args);
var fexpr__41806 = cljs_web3.evm.send_sync_fn(web3);
return (fexpr__41806.cljs$core$IFn$_invoke$arity$1 ? fexpr__41806.cljs$core$IFn$_invoke$arity$1(G__41807) : fexpr__41806.call(null,G__41807));
})();
return (cljs_web3.utils.js__GT_cljkk.cljs$core$IFn$_invoke$arity$1 ? cljs_web3.utils.js__GT_cljkk.cljs$core$IFn$_invoke$arity$1(G__41805) : cljs_web3.utils.js__GT_cljkk.call(null,G__41805));
}
}));

(cljs_web3.evm.revert_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs_web3.evm.revert_BANG_.cljs$lang$applyTo = (function (seq41794){
var G__41795 = cljs.core.first(seq41794);
var seq41794__$1 = cljs.core.next(seq41794);
var G__41796 = cljs.core.first(seq41794__$1);
var seq41794__$2 = cljs.core.next(seq41794__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41795,G__41796,seq41794__$2);
}));

cljs_web3.evm.snapshot_jsonrpc = (function cljs_web3$evm$snapshot_jsonrpc(){
return cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"jsonrpc","jsonrpc",1483657187),"2.0",new cljs.core.Keyword(null,"method","method",55703592),"evm_snapshot",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092),(new Date()).getTime()], null));
});
/**
 * Snapshot the state of the blockchain at the current block.
 * 
 *   Parameters:
 *   web3     - web3 instance
 *   callback - callback with two parameters, error and result.
 * 
 *   Returns the integer id of the snapshot created.
 * 
 *   Example:
 *   user> `(web3-evm/snapshot! web3 callback)`
 *   0
 */
cljs_web3.evm.snapshot_BANG_ = (function cljs_web3$evm$snapshot_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41895 = arguments.length;
var i__4790__auto___41896 = (0);
while(true){
if((i__4790__auto___41896 < len__4789__auto___41895)){
args__4795__auto__.push((arguments[i__4790__auto___41896]));

var G__41897 = (i__4790__auto___41896 + (1));
i__4790__auto___41896 = G__41897;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.evm.snapshot_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.evm.snapshot_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__41828){
var vec__41829 = p__41828;
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41829,(0),null);
if(cljs.core.fn_QMARK_(callback)){
var G__41833 = cljs_web3.evm.snapshot_jsonrpc();
var G__41834 = cljs_web3.utils.callback_js__GT_clj(callback);
var fexpr__41832 = cljs_web3.evm.send_async_fn(web3);
return (fexpr__41832.cljs$core$IFn$_invoke$arity$2 ? fexpr__41832.cljs$core$IFn$_invoke$arity$2(G__41833,G__41834) : fexpr__41832.call(null,G__41833,G__41834));
} else {
var G__41835 = (function (){var G__41837 = cljs_web3.evm.snapshot_jsonrpc();
var fexpr__41836 = cljs_web3.evm.send_sync_fn(web3);
return (fexpr__41836.cljs$core$IFn$_invoke$arity$1 ? fexpr__41836.cljs$core$IFn$_invoke$arity$1(G__41837) : fexpr__41836.call(null,G__41837));
})();
return (cljs_web3.utils.js__GT_cljkk.cljs$core$IFn$_invoke$arity$1 ? cljs_web3.utils.js__GT_cljkk.cljs$core$IFn$_invoke$arity$1(G__41835) : cljs_web3.utils.js__GT_cljkk.call(null,G__41835));
}
}));

(cljs_web3.evm.snapshot_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.evm.snapshot_BANG_.cljs$lang$applyTo = (function (seq41819){
var G__41820 = cljs.core.first(seq41819);
var seq41819__$1 = cljs.core.next(seq41819);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41820,seq41819__$1);
}));


//# sourceMappingURL=cljs_web3.evm.js.map
