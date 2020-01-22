goog.provide('cljs_web3.db');
goog.require('cljs.core');
goog.require('cljs_web3.utils');
/**
 * Gets leveldb object from web3-instance.
 * 
 *   Parameter:
 *   web3 - web3 instance
 */
cljs_web3.db.get_db = (function cljs_web3$db$get_db(web3){
return (web3["db"]);
});
/**
 * This method should be called, when we want to store a string in the local
 *   leveldb database.
 * 
 *   Parameters:
 *   web3 - web3 instance
 *   args:
 *  db    - The database (string) to store to.
 *  key   - The name (string) of the store.
 *  value - The string value to store.
 * 
 *   Returns true if successful, otherwise false.
 */
cljs_web3.db.put_string_BANG_ = (function cljs_web3$db$put_string_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41866 = arguments.length;
var i__4790__auto___41867 = (0);
while(true){
if((i__4790__auto___41867 < len__4789__auto___41866)){
args__4795__auto__.push((arguments[i__4790__auto___41867]));

var G__41869 = (i__4790__auto___41867 + (1));
i__4790__auto___41867 = G__41869;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.db.put_string_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.db.put_string_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__41720){
var vec__41740 = p__41720;
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41740,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41740,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41740,(2),null);
var cb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41740,(3),null);
var args = vec__41740;
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.db.get_db(web3),"putString",args);
}));

(cljs_web3.db.put_string_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.db.put_string_BANG_.cljs$lang$applyTo = (function (seq41710){
var G__41711 = cljs.core.first(seq41710);
var seq41710__$1 = cljs.core.next(seq41710);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41711,seq41710__$1);
}));

/**
 * This method should be called, when we want to get string from the local
 *   leveldb database.
 * 
 *   Parameters:
 *   db  - The database (string) name to retrieve from.
 *   key - The name (string) of the store.
 * 
 *   Returns the stored value string.
 */
cljs_web3.db.get_string = (function cljs_web3$db$get_string(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41872 = arguments.length;
var i__4790__auto___41873 = (0);
while(true){
if((i__4790__auto___41873 < len__4789__auto___41872)){
args__4795__auto__.push((arguments[i__4790__auto___41873]));

var G__41874 = (i__4790__auto___41873 + (1));
i__4790__auto___41873 = G__41874;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.db.get_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.db.get_string.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__41750){
var vec__41751 = p__41750;
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41751,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41751,(1),null);
var args = vec__41751;
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.db.get_db(web3),"getString",args);
}));

(cljs_web3.db.get_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.db.get_string.cljs$lang$applyTo = (function (seq41747){
var G__41748 = cljs.core.first(seq41747);
var seq41747__$1 = cljs.core.next(seq41747);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41748,seq41747__$1);
}));

/**
 * This method should be called, when we want to store binary data in HEX form
 *   in the local leveldb database.
 * 
 *   Parameters:
 *   db    - The database (string) to store to.
 *   key   - The name (string) of the store.
 *   value - The HEX string to store.
 * 
 *   Returns true if successful, otherwise false.
 */
cljs_web3.db.put_hex_BANG_ = (function cljs_web3$db$put_hex_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41889 = arguments.length;
var i__4790__auto___41890 = (0);
while(true){
if((i__4790__auto___41890 < len__4789__auto___41889)){
args__4795__auto__.push((arguments[i__4790__auto___41890]));

var G__41891 = (i__4790__auto___41890 + (1));
i__4790__auto___41890 = G__41891;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.db.put_hex_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.db.put_hex_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__41822){
var vec__41824 = p__41822;
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41824,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41824,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41824,(2),null);
var args = vec__41824;
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.db.get_db(web3),"putHex",args);
}));

(cljs_web3.db.put_hex_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.db.put_hex_BANG_.cljs$lang$applyTo = (function (seq41811){
var G__41812 = cljs.core.first(seq41811);
var seq41811__$1 = cljs.core.next(seq41811);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41812,seq41811__$1);
}));

/**
 * This method should be called, when we want to get a binary data in HEX form
 *   from the local leveldb database.
 * 
 *   Parameters:
 *   db  - The database (string) to store to.
 *   key - The name (string) of the store.
 * 
 *   Returns the stored HEX value.
 */
cljs_web3.db.get_hex = (function cljs_web3$db$get_hex(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41892 = arguments.length;
var i__4790__auto___41893 = (0);
while(true){
if((i__4790__auto___41893 < len__4789__auto___41892)){
args__4795__auto__.push((arguments[i__4790__auto___41893]));

var G__41894 = (i__4790__auto___41893 + (1));
i__4790__auto___41893 = G__41894;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.db.get_hex.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.db.get_hex.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__41857){
var vec__41859 = p__41857;
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41859,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41859,(1),null);
var args = vec__41859;
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.db.get_db(web3),"getHex",args);
}));

(cljs_web3.db.get_hex.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.db.get_hex.cljs$lang$applyTo = (function (seq41841){
var G__41842 = cljs.core.first(seq41841);
var seq41841__$1 = cljs.core.next(seq41841);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41842,seq41841__$1);
}));


//# sourceMappingURL=cljs_web3.db.js.map
