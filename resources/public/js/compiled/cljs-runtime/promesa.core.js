goog.provide('promesa.core');
goog.require('cljs.core');
goog.require('promesa.protocols');
goog.require('cljs.core');
goog.require('promesa.exec');
goog.require('promesa.impl');
/**
 * Return a resolved promise with provided value.
 */
promesa.core.resolved = (function promesa$core$resolved(v){
return promesa.impl.resolved(v);
});
/**
 * Return a rejected promise with provided reason.
 */
promesa.core.rejected = (function promesa$core$rejected(v){
return promesa.impl.rejected(v);
});
/**
 * Creates an empty promise instance.
 */
promesa.core.deferred = (function promesa$core$deferred(){
return promesa.impl.deferred();
});
/**
 * The coerce based promise constructor. Creates a appropriate promise
 *   instance depending on the provided value.
 * 
 *   If an executor is provided, it will be used to resolve this
 *   promise.
 */
promesa.core.promise = (function promesa$core$promise(var_args){
var G__41804 = arguments.length;
switch (G__41804) {
case 1:
return promesa.core.promise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.core.promise.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.promise.cljs$core$IFn$_invoke$arity$1 = (function (v){
return promesa.protocols._promise(v);
}));

(promesa.core.promise.cljs$core$IFn$_invoke$arity$2 = (function (v,executor){
return promesa.protocols._map.cljs$core$IFn$_invoke$arity$3(v,cljs.core.identity,executor);
}));

(promesa.core.promise.cljs$lang$maxFixedArity = 2);

/**
 * Create a promise instance from a factory function. If an executor is
 *   provided, the factory will be executed in the provided executor.
 * 
 *   A factory function looks like `(fn [resolve reject] (resolve 1))`.
 */
promesa.core.create = (function promesa$core$create(var_args){
var G__41810 = arguments.length;
switch (G__41810) {
case 1:
return promesa.core.create.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.core.create.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.create.cljs$core$IFn$_invoke$arity$1 = (function (f){
var d = promesa.impl.deferred();
try{var G__41812_41887 = (function (p1__41805_SHARP_){
return promesa.protocols._resolve_BANG_(d,p1__41805_SHARP_);
});
var G__41813_41888 = (function (p1__41806_SHARP_){
return promesa.protocols._reject_BANG_(d,p1__41806_SHARP_);
});
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__41812_41887,G__41813_41888) : f.call(null,G__41812_41887,G__41813_41888));
}catch (e41811){var e_41889 = e41811;
promesa.protocols._reject_BANG_(d,e_41889);
}
return d;
}));

(promesa.core.create.cljs$core$IFn$_invoke$arity$2 = (function (f,executor){
var d = promesa.impl.deferred();
promesa.exec.run_BANG_.cljs$core$IFn$_invoke$arity$2(executor,(function (){
try{var G__41815 = (function (p1__41807_SHARP_){
return promesa.protocols._resolve_BANG_(d,p1__41807_SHARP_);
});
var G__41816 = (function (p1__41808_SHARP_){
return promesa.protocols._reject_BANG_(d,p1__41808_SHARP_);
});
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__41815,G__41816) : f.call(null,G__41815,G__41816));
}catch (e41814){var e = e41814;
return promesa.protocols._reject_BANG_(d,e);
}}));

return d;
}));

(promesa.core.create.cljs$lang$maxFixedArity = 2);

/**
 * Return true if `v` is a promise instance.
 */
promesa.core.promise_QMARK_ = (function promesa$core$promise_QMARK_(v){
return (v instanceof promesa.impl._STAR_default_promise_STAR_);
});
/**
 * Return true if `v` is a promise instance (alias to `promise?`.
 */
promesa.core.deferred_QMARK_ = (function promesa$core$deferred_QMARK_(v){
return (v instanceof promesa.impl._STAR_default_promise_STAR_);
});
/**
 * Returns true if `v` is a promise like object.
 */
promesa.core.thenable_QMARK_ = (function promesa$core$thenable_QMARK_(v){
return ((cljs.core.object_QMARK_(v)) && (cljs.core.fn_QMARK_((v["then"]))));
});
/**
 * Returns true if promise `p` is already fulfilled.
 */
promesa.core.resolved_QMARK_ = (function promesa$core$resolved_QMARK_(p){
return promesa.protocols._resolved_QMARK_(p);
});
/**
 * Returns true if promise `p` is already rejected.
 */
promesa.core.rejected_QMARK_ = (function promesa$core$rejected_QMARK_(p){
return promesa.protocols._rejected_QMARK_(p);
});
/**
 * Returns true if promise `p` is stil pending.
 */
promesa.core.pending_QMARK_ = (function promesa$core$pending_QMARK_(p){
return promesa.protocols._pending_QMARK_(p);
});
/**
 * Returns the current promise value.
 */
promesa.core.extract = (function promesa$core$extract(p){
return promesa.protocols._extract(p);
});
/**
 * Returns true if promise `p` is already done.
 */
promesa.core.done_QMARK_ = cljs.core.complement(promesa.core.pending_QMARK_);
promesa.core.wrap = (function promesa$core$wrap(v){
if(promesa.core.promise_QMARK_(v)){
return v;
} else {
return promesa.protocols._promise(v);
}
});
/**
 * Chains a computation `f` (function) to be executed when the promise
 *   `p` is successfully resolved.
 * 
 *   The computation will be executed in the calling thread by default;
 *   you also can provide a custom executor.
 * 
 *   If the function `f` returns a promise instance, it will be
 *   automatically unwrapped.
 */
promesa.core.then = (function promesa$core$then(var_args){
var G__41818 = arguments.length;
switch (G__41818) {
case 2:
return promesa.core.then.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.then.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.then.cljs$core$IFn$_invoke$arity$2 = (function (p,f){
return promesa.protocols._then.cljs$core$IFn$_invoke$arity$2(p,f);
}));

(promesa.core.then.cljs$core$IFn$_invoke$arity$3 = (function (p,f,executor){
return promesa.protocols._then.cljs$core$IFn$_invoke$arity$3(p,f,executor);
}));

(promesa.core.then.cljs$lang$maxFixedArity = 3);

/**
 * A convenient alias for `then`.
 */
promesa.core.bind = (function promesa$core$bind(var_args){
var G__41820 = arguments.length;
switch (G__41820) {
case 2:
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.bind.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.bind.cljs$core$IFn$_invoke$arity$2 = (function (p,f){
return promesa.protocols._then.cljs$core$IFn$_invoke$arity$2(p,f);
}));

(promesa.core.bind.cljs$core$IFn$_invoke$arity$3 = (function (p,f,executor){
return promesa.protocols._then.cljs$core$IFn$_invoke$arity$3(p,f,executor);
}));

(promesa.core.bind.cljs$lang$maxFixedArity = 3);

/**
 * Chains a computation `f` (function) to be executed when the promise
 *   `p` is successfully resolved.
 * 
 *   The computation will be executed in the calling thread by default;
 *   you also can provide a custom executor.
 * 
 *   Don't perform flatten on the result.
 */
promesa.core.then_SINGLEQUOTE_ = (function promesa$core$then_SINGLEQUOTE_(var_args){
var G__41822 = arguments.length;
switch (G__41822) {
case 2:
return promesa.core.then_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.then_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.then_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 = (function (p,f){
return promesa.protocols._map.cljs$core$IFn$_invoke$arity$2(p,f);
}));

(promesa.core.then_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$3 = (function (p,f,executor){
return promesa.protocols._map.cljs$core$IFn$_invoke$arity$3(p,f,executor);
}));

(promesa.core.then_SINGLEQUOTE_.cljs$lang$maxFixedArity = 3);

/**
 * Chains a computation `f` (function) to be executed when the promise
 *   `p` is successfully resolved.
 * 
 *   Unlike `then` this does not performs automatic promise flattening.
 *   This is designed to be used with `->>`.
 */
promesa.core.map = (function promesa$core$map(var_args){
var G__41824 = arguments.length;
switch (G__41824) {
case 2:
return promesa.core.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.map.cljs$core$IFn$_invoke$arity$2 = (function (f,p){
return promesa.protocols._map.cljs$core$IFn$_invoke$arity$2(p,f);
}));

(promesa.core.map.cljs$core$IFn$_invoke$arity$3 = (function (executor,f,p){
return promesa.protocols._map.cljs$core$IFn$_invoke$arity$3(p,f,executor);
}));

(promesa.core.map.cljs$lang$maxFixedArity = 3);

/**
 * Chains a computation `f` (function) to be executed when the promise
 *   `p` is successfully resolved. always expecting that `f` returns a
 *   promise that will be automatically unwrapped.
 * 
 *   This is just a stricter version of `then` with reversed arguments in
 *   the same way as `map`.
 * 
 *   This is designed to be used with `->>`.
 */
promesa.core.mapcat = (function promesa$core$mapcat(var_args){
var G__41826 = arguments.length;
switch (G__41826) {
case 2:
return promesa.core.mapcat.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.mapcat.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.mapcat.cljs$core$IFn$_invoke$arity$2 = (function (f,p){
return promesa.protocols._bind.cljs$core$IFn$_invoke$arity$2(p,f);
}));

(promesa.core.mapcat.cljs$core$IFn$_invoke$arity$3 = (function (executor,f,p){
return promesa.protocols._bind.cljs$core$IFn$_invoke$arity$3(p,f,executor);
}));

(promesa.core.mapcat.cljs$lang$maxFixedArity = 3);

/**
 * Chain variable number of computations to be executed
 *   serially. Analogous to `then` that accepts variable number of
 *   functions.
 */
promesa.core.chain = (function promesa$core$chain(var_args){
var G__41833 = arguments.length;
switch (G__41833) {
case 2:
return promesa.core.chain.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___41896 = arguments.length;
var i__4790__auto___41897 = (0);
while(true){
if((i__4790__auto___41897 < len__4789__auto___41896)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41897]));

var G__41898 = (i__4790__auto___41897 + (1));
i__4790__auto___41897 = G__41898;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return promesa.core.chain.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(promesa.core.chain.cljs$core$IFn$_invoke$arity$2 = (function (p,f){
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(p,f);
}));

(promesa.core.chain.cljs$core$IFn$_invoke$arity$variadic = (function (p,f,fs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__41827_SHARP_,p2__41828_SHARP_){
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(p1__41827_SHARP_,p2__41828_SHARP_);
}),p,cljs.core.cons(f,fs));
}));

/** @this {Function} */
(promesa.core.chain.cljs$lang$applyTo = (function (seq41830){
var G__41831 = cljs.core.first(seq41830);
var seq41830__$1 = cljs.core.next(seq41830);
var G__41832 = cljs.core.first(seq41830__$1);
var seq41830__$2 = cljs.core.next(seq41830__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41831,G__41832,seq41830__$2);
}));

(promesa.core.chain.cljs$lang$maxFixedArity = (2));

/**
 * Chain variable number of computations to be executed serially. Unlike
 *   `chain` does not flattens the return value of each step (probably
 *   this is more performant than `chain`).
 */
promesa.core.chain_SINGLEQUOTE_ = (function promesa$core$chain_SINGLEQUOTE_(var_args){
var G__41838 = arguments.length;
switch (G__41838) {
case 2:
return promesa.core.chain_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___41900 = arguments.length;
var i__4790__auto___41901 = (0);
while(true){
if((i__4790__auto___41901 < len__4789__auto___41900)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41901]));

var G__41902 = (i__4790__auto___41901 + (1));
i__4790__auto___41901 = G__41902;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return promesa.core.chain_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(promesa.core.chain_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 = (function (p,f){
return promesa.core.then_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(p,f);
}));

(promesa.core.chain_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$variadic = (function (p,f,fs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(promesa.protocols._map,p,cljs.core.cons(f,fs));
}));

/** @this {Function} */
(promesa.core.chain_SINGLEQUOTE_.cljs$lang$applyTo = (function (seq41835){
var G__41836 = cljs.core.first(seq41835);
var seq41835__$1 = cljs.core.next(seq41835);
var G__41837 = cljs.core.first(seq41835__$1);
var seq41835__$2 = cljs.core.next(seq41835__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41836,G__41837,seq41835__$2);
}));

(promesa.core.chain_SINGLEQUOTE_.cljs$lang$maxFixedArity = (2));

/**
 * Executes `f` when the promise `p` is resolved or is rejected. Returns
 *   a promise resolved with the return value of `f` function.
 */
promesa.core.handle = (function promesa$core$handle(var_args){
var G__41840 = arguments.length;
switch (G__41840) {
case 2:
return promesa.core.handle.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.handle.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.handle.cljs$core$IFn$_invoke$arity$2 = (function (p,f){
return promesa.protocols._handle.cljs$core$IFn$_invoke$arity$2(p,f);
}));

(promesa.core.handle.cljs$core$IFn$_invoke$arity$3 = (function (p,f,executor){
return promesa.protocols._handle.cljs$core$IFn$_invoke$arity$3(p,f,executor);
}));

(promesa.core.handle.cljs$lang$maxFixedArity = 3);

/**
 * Attach a potentially side-effectful handler to promise that will be
 *   executed independently if promise is resolved or rejected.
 * 
 *   Returns the original promise and the return value of `f` function is
 *   ignored.
 */
promesa.core.finally$ = (function promesa$core$finally(var_args){
var G__41842 = arguments.length;
switch (G__41842) {
case 2:
return promesa.core.finally$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.finally$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2 = (function (p,f){
return promesa.protocols._finally.cljs$core$IFn$_invoke$arity$2(p,f);
}));

(promesa.core.finally$.cljs$core$IFn$_invoke$arity$3 = (function (p,f,executor){
return promesa.protocols._finally.cljs$core$IFn$_invoke$arity$3(p,f,executor);
}));

(promesa.core.finally$.cljs$lang$maxFixedArity = 3);

/**
 * Executes `f` when the promise `p` is rejected. Returns a promise
 *   resolved with the return value of `f` function handler.
 */
promesa.core.catch$ = (function promesa$core$catch(var_args){
var G__41845 = arguments.length;
switch (G__41845) {
case 2:
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2 = (function (p,f){
return promesa.protocols._thenErr.cljs$core$IFn$_invoke$arity$2(p,f);
}));

(promesa.core.catch$.cljs$core$IFn$_invoke$arity$3 = (function (p,pred_or_type,f){
var accept_QMARK_ = ((cljs.core.ifn_QMARK_(pred_or_type))?pred_or_type:(function (p1__41843_SHARP_){
return (p1__41843_SHARP_ instanceof pred_or_type);
}));
return promesa.protocols._thenErr.cljs$core$IFn$_invoke$arity$2(p,(function (e){
if(cljs.core.truth_((accept_QMARK_.cljs$core$IFn$_invoke$arity$1 ? accept_QMARK_.cljs$core$IFn$_invoke$arity$1(e) : accept_QMARK_.call(null,e)))){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(e) : f.call(null,e));
} else {
return promesa.impl.rejected(e);
}
}));
}));

(promesa.core.catch$.cljs$lang$maxFixedArity = 3);

/**
 * Executes `f` when the promise `p` is rejected. Returns a promise
 *   resolved with the return value of `f` function handler.
 */
promesa.core.catch_SINGLEQUOTE_ = (function promesa$core$catch_SINGLEQUOTE_(var_args){
var G__41848 = arguments.length;
switch (G__41848) {
case 2:
return promesa.core.catch_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.catch_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.catch_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 = (function (p,f){
return promesa.protocols._mapErr.cljs$core$IFn$_invoke$arity$2(p,f);
}));

(promesa.core.catch_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$3 = (function (p,pred_or_type,f){
var accept_QMARK_ = ((cljs.core.ifn_QMARK_(pred_or_type))?pred_or_type:(function (p1__41846_SHARP_){
return (p1__41846_SHARP_ instanceof pred_or_type);
}));
return promesa.protocols._mapErr.cljs$core$IFn$_invoke$arity$2(p,(function (e){
if(cljs.core.truth_((accept_QMARK_.cljs$core$IFn$_invoke$arity$1 ? accept_QMARK_.cljs$core$IFn$_invoke$arity$1(e) : accept_QMARK_.call(null,e)))){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(e) : f.call(null,e));
} else {
throw e;
}
}));
}));

(promesa.core.catch_SINGLEQUOTE_.cljs$lang$maxFixedArity = 3);

/**
 * Same as `catch` but with parameters inverted.
 */
promesa.core.error = (function promesa$core$error(var_args){
var G__41850 = arguments.length;
switch (G__41850) {
case 2:
return promesa.core.error.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.error.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.error.cljs$core$IFn$_invoke$arity$2 = (function (f,p){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(p,f);
}));

(promesa.core.error.cljs$core$IFn$_invoke$arity$3 = (function (f,type,p){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$3(p,type,f);
}));

(promesa.core.error.cljs$lang$maxFixedArity = 3);

/**
 * A short alias for `error` function.
 */
promesa.core.err = promesa.core.error;
/**
 * Given an array of promises, return a promise
 *   that is fulfilled  when all the items in the
 *   array are fulfilled.
 * 
 *   Example:
 * 
 *   (-> (all [(promise :first-promise)
 *          (promise :second-promise)]
 *    (then (fn [[first-result second-result]]))
 *     (println (str first-result ", " second-result)
 * 
 *   Will print out
 *   :first-promise, :second-promise.
 * 
 *   If at least one of the promises is rejected, the resulting promise will be
 *   rejected.
 */
promesa.core.all = (function promesa$core$all(promises){
return promesa.core.then_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(promesa.impl._STAR_default_promise_STAR_.all(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(promises)),cljs.core.vec);
});
promesa.core.race = (function promesa$core$race(promises){
return promesa.impl._STAR_default_promise_STAR_.race(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(promesa.protocols._promise,promises)));
});
/**
 * Given an array of promises, return a promise that is fulfilled when
 *   first one item in the array is fulfilled.
 */
promesa.core.any = (function promesa$core$any(var_args){
var G__41852 = arguments.length;
switch (G__41852) {
case 1:
return promesa.core.any.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.core.any.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.any.cljs$core$IFn$_invoke$arity$1 = (function (promises){
return promesa.core.any.cljs$core$IFn$_invoke$arity$2(promises,new cljs.core.Keyword("promesa.core","default","promesa.core/default",1773193826));
}));

(promesa.core.any.cljs$core$IFn$_invoke$arity$2 = (function (promises,default$){
var state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"resolved","resolved",968763567),false,new cljs.core.Keyword(null,"counter","counter",804008177),cljs.core.count(promises),new cljs.core.Keyword(null,"rejections","rejections",-1620899911),cljs.core.PersistentVector.EMPTY], null));
return promesa.core.create.cljs$core$IFn$_invoke$arity$1((function (resolve,reject){
var seq__41853 = cljs.core.seq(promises);
var chunk__41854 = null;
var count__41855 = (0);
var i__41856 = (0);
while(true){
if((i__41856 < count__41855)){
var p = chunk__41854.cljs$core$IIndexed$_nth$arity$2(null,i__41856);
promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.core.promise.cljs$core$IFn$_invoke$arity$1(p),((function (seq__41853,chunk__41854,count__41855,i__41856,p,state){
return (function (v){
if(cljs.core.truth_(new cljs.core.Keyword(null,"resolved","resolved",968763567).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,((function (seq__41853,chunk__41854,count__41855,i__41856,p,state){
return (function (state__$1){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"resolved","resolved",968763567),true),new cljs.core.Keyword(null,"counter","counter",804008177),cljs.core.dec);
});})(seq__41853,chunk__41854,count__41855,i__41856,p,state))
);

return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(v) : resolve.call(null,v));
}
});})(seq__41853,chunk__41854,count__41855,i__41856,p,state))
),((function (seq__41853,chunk__41854,count__41855,i__41856,p,state){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,((function (seq__41853,chunk__41854,count__41855,i__41856,p,state){
return (function (state__$1){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"counter","counter",804008177),cljs.core.dec),new cljs.core.Keyword(null,"rejections","rejections",-1620899911),cljs.core.conj,e);
});})(seq__41853,chunk__41854,count__41855,i__41856,p,state))
);

var map__41863 = cljs.core.deref(state);
var map__41863__$1 = (((((!((map__41863 == null))))?(((((map__41863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41863.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41863):map__41863);
var resolved = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41863__$1,new cljs.core.Keyword(null,"resolved","resolved",968763567));
var counter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41863__$1,new cljs.core.Keyword(null,"counter","counter",804008177));
var rejections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41863__$1,new cljs.core.Keyword(null,"rejections","rejections",-1620899911));
if(((cljs.core.not(resolved)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(counter,(0))))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(default$,new cljs.core.Keyword("promesa.core","default","promesa.core/default",1773193826))){
var G__41865 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No promises resolved",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rejections","rejections",-1620899911),rejections], null));
return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(G__41865) : reject.call(null,G__41865));
} else {
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(default$) : resolve.call(null,default$));
}
} else {
return null;
}
});})(seq__41853,chunk__41854,count__41855,i__41856,p,state))
);


var G__41912 = seq__41853;
var G__41913 = chunk__41854;
var G__41914 = count__41855;
var G__41915 = (i__41856 + (1));
seq__41853 = G__41912;
chunk__41854 = G__41913;
count__41855 = G__41914;
i__41856 = G__41915;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41853);
if(temp__5735__auto__){
var seq__41853__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41853__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__41853__$1);
var G__41916 = cljs.core.chunk_rest(seq__41853__$1);
var G__41917 = c__4609__auto__;
var G__41918 = cljs.core.count(c__4609__auto__);
var G__41919 = (0);
seq__41853 = G__41916;
chunk__41854 = G__41917;
count__41855 = G__41918;
i__41856 = G__41919;
continue;
} else {
var p = cljs.core.first(seq__41853__$1);
promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.core.promise.cljs$core$IFn$_invoke$arity$1(p),((function (seq__41853,chunk__41854,count__41855,i__41856,p,seq__41853__$1,temp__5735__auto__,state){
return (function (v){
if(cljs.core.truth_(new cljs.core.Keyword(null,"resolved","resolved",968763567).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,((function (seq__41853,chunk__41854,count__41855,i__41856,p,seq__41853__$1,temp__5735__auto__,state){
return (function (state__$1){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"resolved","resolved",968763567),true),new cljs.core.Keyword(null,"counter","counter",804008177),cljs.core.dec);
});})(seq__41853,chunk__41854,count__41855,i__41856,p,seq__41853__$1,temp__5735__auto__,state))
);

return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(v) : resolve.call(null,v));
}
});})(seq__41853,chunk__41854,count__41855,i__41856,p,seq__41853__$1,temp__5735__auto__,state))
),((function (seq__41853,chunk__41854,count__41855,i__41856,p,seq__41853__$1,temp__5735__auto__,state){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,((function (seq__41853,chunk__41854,count__41855,i__41856,p,seq__41853__$1,temp__5735__auto__,state){
return (function (state__$1){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"counter","counter",804008177),cljs.core.dec),new cljs.core.Keyword(null,"rejections","rejections",-1620899911),cljs.core.conj,e);
});})(seq__41853,chunk__41854,count__41855,i__41856,p,seq__41853__$1,temp__5735__auto__,state))
);

var map__41866 = cljs.core.deref(state);
var map__41866__$1 = (((((!((map__41866 == null))))?(((((map__41866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41866.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41866):map__41866);
var resolved = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41866__$1,new cljs.core.Keyword(null,"resolved","resolved",968763567));
var counter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41866__$1,new cljs.core.Keyword(null,"counter","counter",804008177));
var rejections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41866__$1,new cljs.core.Keyword(null,"rejections","rejections",-1620899911));
if(((cljs.core.not(resolved)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(counter,(0))))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(default$,new cljs.core.Keyword("promesa.core","default","promesa.core/default",1773193826))){
var G__41868 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No promises resolved",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rejections","rejections",-1620899911),rejections], null));
return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(G__41868) : reject.call(null,G__41868));
} else {
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(default$) : resolve.call(null,default$));
}
} else {
return null;
}
});})(seq__41853,chunk__41854,count__41855,i__41856,p,seq__41853__$1,temp__5735__auto__,state))
);


var G__41920 = cljs.core.next(seq__41853__$1);
var G__41921 = null;
var G__41922 = (0);
var G__41923 = (0);
seq__41853 = G__41920;
chunk__41854 = G__41921;
count__41855 = G__41922;
i__41856 = G__41923;
continue;
}
} else {
return null;
}
}
break;
}
}));
}));

(promesa.core.any.cljs$lang$maxFixedArity = 2);

/**
 * A promise aware run! function.
 */
promesa.core.run_BANG_ = (function promesa$core$run_BANG_(var_args){
var G__41872 = arguments.length;
switch (G__41872) {
case 2:
return promesa.core.run_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.run_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.run_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return promesa.core.run_BANG_.cljs$core$IFn$_invoke$arity$3(f,coll,promesa.exec.current_thread_executor);
}));

(promesa.core.run_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (f,coll,executor){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__41869_SHARP_,p2__41870_SHARP_){
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(p1__41869_SHARP_,(function (_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p2__41870_SHARP_) : f.call(null,p2__41870_SHARP_));
}));
}),promesa.core.promise.cljs$core$IFn$_invoke$arity$2(null,executor),coll);
}));

(promesa.core.run_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Cancel the promise.
 */
promesa.core.cancel_BANG_ = (function promesa$core$cancel_BANG_(p){
promesa.protocols._cancel_BANG_(p);

return p;
});
/**
 * Return true if `v` is a cancelled promise.
 */
promesa.core.cancelled_QMARK_ = (function promesa$core$cancelled_QMARK_(v){
return promesa.protocols._cancelled_QMARK_(v);
});
/**
 * Resolve a completable promise with a value.
 */
promesa.core.resolve_BANG_ = (function promesa$core$resolve_BANG_(var_args){
var G__41874 = arguments.length;
switch (G__41874) {
case 1:
return promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (o){
return promesa.protocols._resolve_BANG_(o,null);
}));

(promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (o,v){
return promesa.protocols._resolve_BANG_(o,v);
}));

(promesa.core.resolve_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Reject a completable promise with an error.
 */
promesa.core.reject_BANG_ = (function promesa$core$reject_BANG_(p,e){
return promesa.protocols._reject_BANG_(p,e);
});
/**
 * Given a function that accepts a callback as the last argument return other
 *   function that returns a promise. Callback is expected to take single
 *   parameter (result of a computation).
 */
promesa.core.promisify = (function promesa$core$promisify(callable){
return (function() { 
var G__41926__delegate = function (args){
return promesa.core.create.cljs$core$IFn$_invoke$arity$1((function (resolve,reject){
var args__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(args),resolve);
try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(callable,args__$1);
}catch (e41875){if((e41875 instanceof Error)){
var e = e41875;
return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(e) : reject.call(null,e));
} else {
throw e41875;

}
}}));
};
var G__41926 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41927__i = 0, G__41927__a = new Array(arguments.length -  0);
while (G__41927__i < G__41927__a.length) {G__41927__a[G__41927__i] = arguments[G__41927__i + 0]; ++G__41927__i;}
  args = new cljs.core.IndexedSeq(G__41927__a,0,null);
} 
return G__41926__delegate.call(this,args);};
G__41926.cljs$lang$maxFixedArity = 0;
G__41926.cljs$lang$applyTo = (function (arglist__41928){
var args = cljs.core.seq(arglist__41928);
return G__41926__delegate(args);
});
G__41926.cljs$core$IFn$_invoke$arity$variadic = G__41926__delegate;
return G__41926;
})()
;
});
/**
 * @constructor
 */
promesa.core.TimeoutException = (function promesa$core$TimeoutException(message){
var it = this;
Error.call(it,message,cljs.core.PersistentArrayMap.EMPTY,null);

return it;
});
goog.inherits(promesa.core.TimeoutException,Error);
/**
 * Returns a cancellable promise that will be fulfilled with this
 *   promise's fulfillment value or rejection reason.  However, if this
 *   promise is not fulfilled or rejected within `ms` milliseconds, the
 *   returned promise is cancelled with a TimeoutError
 */
promesa.core.timeout = (function promesa$core$timeout(var_args){
var G__41877 = arguments.length;
switch (G__41877) {
case 2:
return promesa.core.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.timeout.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return promesa.core.timeout.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.timeout.cljs$core$IFn$_invoke$arity$2 = (function (p,t){
return promesa.core.timeout.cljs$core$IFn$_invoke$arity$4(p,t,new cljs.core.Keyword("promesa.core","default","promesa.core/default",1773193826),promesa.exec.default_scheduler);
}));

(promesa.core.timeout.cljs$core$IFn$_invoke$arity$3 = (function (p,t,v){
return promesa.core.timeout.cljs$core$IFn$_invoke$arity$4(p,t,v,promesa.exec.default_scheduler);
}));

(promesa.core.timeout.cljs$core$IFn$_invoke$arity$4 = (function (p,t,v,scheduler){
var timeout = promesa.core.deferred();
promesa.exec.schedule_BANG_.cljs$core$IFn$_invoke$arity$3(scheduler,t,(function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,new cljs.core.Keyword("promesa.core","default","promesa.core/default",1773193826))){
return promesa.core.reject_BANG_(timeout,(new promesa.core.TimeoutException("Operation timed out.")));
} else {
return promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2(timeout,v);
}
}));

return promesa.core.race(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,timeout], null));
}));

(promesa.core.timeout.cljs$lang$maxFixedArity = 4);

/**
 * Given a timeout in miliseconds and optional
 *   value, returns a promise that will fulfilled
 *   with provided value (or nil) after the
 *   time is reached.
 */
promesa.core.delay = (function promesa$core$delay(var_args){
var G__41879 = arguments.length;
switch (G__41879) {
case 1:
return promesa.core.delay.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.core.delay.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.delay.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.delay.cljs$core$IFn$_invoke$arity$1 = (function (t){
return promesa.core.delay.cljs$core$IFn$_invoke$arity$3(t,null,promesa.exec.default_scheduler);
}));

(promesa.core.delay.cljs$core$IFn$_invoke$arity$2 = (function (t,v){
return promesa.core.delay.cljs$core$IFn$_invoke$arity$3(t,v,promesa.exec.default_scheduler);
}));

(promesa.core.delay.cljs$core$IFn$_invoke$arity$3 = (function (t,v,scheduler){
var d = promesa.core.deferred();
promesa.exec.schedule_BANG_.cljs$core$IFn$_invoke$arity$3(scheduler,t,(function (){
return promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2(d,v);
}));

return d;
}));

(promesa.core.delay.cljs$lang$maxFixedArity = 3);

if((typeof promesa !== 'undefined') && (typeof promesa.core !== 'undefined') && (typeof promesa.core.INTERNAL_LOOP_FN_NAME !== 'undefined')){
} else {
promesa.core.INTERNAL_LOOP_FN_NAME = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"internal-loop-fn-name","internal-loop-fn-name",-1883749796,null));
}

//# sourceMappingURL=promesa.core.js.map
