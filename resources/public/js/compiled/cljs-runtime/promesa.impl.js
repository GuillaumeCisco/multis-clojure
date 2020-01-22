goog.provide('promesa.impl');
goog.require('cljs.core');
goog.require('promesa.protocols');
goog.require('promesa.util');
goog.require('promesa.exec');
promesa.impl._STAR_default_promise_STAR_ = Promise;
promesa.impl.resolved = (function promesa$impl$resolved(v){
return promesa.impl._STAR_default_promise_STAR_.resolve(v);
});
promesa.impl.rejected = (function promesa$impl$rejected(v){
return promesa.impl._STAR_default_promise_STAR_.reject(v);
});
promesa.impl.deferred = (function promesa$impl$deferred(){
var state = ({});
var obj = (new promesa.impl._STAR_default_promise_STAR_((function (resolve,reject){
(state.resolve = resolve);

return (state.reject = reject);
})));
var x40906 = obj;
(x40906.promesa$protocols$ICompletable$ = cljs.core.PROTOCOL_SENTINEL);

(x40906.promesa$protocols$ICompletable$_resolve_BANG_$arity$2 = (function (_,v){
var ___$1 = this;
return state.resolve(v);
}));

(x40906.promesa$protocols$ICompletable$_reject_BANG_$arity$2 = (function (_,v){
var ___$1 = this;
return state.reject(v);
}));

return x40906;
});
promesa.impl.extend_promise_BANG_ = (function promesa$impl$extend_promise_BANG_(t){
(t.prototype.promesa$protocols$IPromiseFactory$ = cljs.core.PROTOCOL_SENTINEL);

(t.prototype.promesa$protocols$IPromiseFactory$_promise$arity$1 = (function (p){
var p__$1 = this;
return p__$1;
}));

(t.prototype.promesa$protocols$IPromise$ = cljs.core.PROTOCOL_SENTINEL);

(t.prototype.promesa$protocols$IPromise$_map$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.then((function (p1__40909_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__40909_SHARP_) : f.call(null,p1__40909_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_map$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.then((function (p1__40910_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__40910_SHARP_) : f.call(null,p1__40910_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_bind$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.then((function (p1__40911_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__40911_SHARP_) : f.call(null,p1__40911_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_bind$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.then((function (p1__40912_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__40912_SHARP_) : f.call(null,p1__40912_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_then$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.then((function (p1__40913_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__40913_SHARP_) : f.call(null,p1__40913_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_then$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.then((function (p1__40914_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__40914_SHARP_) : f.call(null,p1__40914_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_mapErr$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.catch((function (p1__40915_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__40915_SHARP_) : f.call(null,p1__40915_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_mapErr$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.catch((function (p1__40916_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__40916_SHARP_) : f.call(null,p1__40916_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_thenErr$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.catch((function (p1__40917_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__40917_SHARP_) : f.call(null,p1__40917_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_thenErr$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.catch((function (p1__40918_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__40918_SHARP_) : f.call(null,p1__40918_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_handle$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.then((function (p1__40919_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__40919_SHARP_,null) : f.call(null,p1__40919_SHARP_,null));
}),(function (p1__40920_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(null,p1__40920_SHARP_) : f.call(null,null,p1__40920_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_handle$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.then((function (p1__40921_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__40921_SHARP_,null) : f.call(null,p1__40921_SHARP_,null));
}),(function (p1__40922_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(null,p1__40922_SHARP_) : f.call(null,null,p1__40922_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_finally$arity$2 = (function (it,f){
var it__$1 = this;
it__$1.then((function (p1__40923_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__40923_SHARP_,null) : f.call(null,p1__40923_SHARP_,null));
}),(function (p1__40924_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(null,p1__40924_SHARP_) : f.call(null,null,p1__40924_SHARP_));
}));

return it__$1;
}));

return (t.prototype.promesa$protocols$IPromise$_finally$arity$3 = (function (it,f,executor){
var it__$1 = this;
it__$1.then((function (p1__40925_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__40925_SHARP_,null) : f.call(null,p1__40925_SHARP_,null));
}),(function (p1__40926_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(null,p1__40926_SHARP_) : f.call(null,null,p1__40926_SHARP_));
}));

return it__$1;
}));
});
promesa.impl.extend_promise_BANG_(Promise);
goog.object.set(promesa.protocols.IPromise,"_",true);

var G__40930_40990 = promesa.protocols._map;
var G__40931_40991 = "_";
var G__40932_40992 = (function() {
var G__40993 = null;
var G__40993__2 = (function (it,f){
return promesa.protocols._map.cljs$core$IFn$_invoke$arity$2(promesa.protocols._promise(it),f);
});
var G__40993__3 = (function (it,f,e){
return promesa.protocols._map.cljs$core$IFn$_invoke$arity$3(promesa.protocols._promise(it),f,e);
});
G__40993 = function(it,f,e){
switch(arguments.length){
case 2:
return G__40993__2.call(this,it,f);
case 3:
return G__40993__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40993.cljs$core$IFn$_invoke$arity$2 = G__40993__2;
G__40993.cljs$core$IFn$_invoke$arity$3 = G__40993__3;
return G__40993;
})()
;
goog.object.set(G__40930_40990,G__40931_40991,G__40932_40992);

var G__40933_41106 = promesa.protocols._bind;
var G__40934_41107 = "_";
var G__40935_41108 = (function() {
var G__41109 = null;
var G__41109__2 = (function (it,f){
return promesa.protocols._bind.cljs$core$IFn$_invoke$arity$2(promesa.protocols._promise(it),f);
});
var G__41109__3 = (function (it,f,e){
return promesa.protocols._bind.cljs$core$IFn$_invoke$arity$3(promesa.protocols._promise(it),f,e);
});
G__41109 = function(it,f,e){
switch(arguments.length){
case 2:
return G__41109__2.call(this,it,f);
case 3:
return G__41109__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__41109.cljs$core$IFn$_invoke$arity$2 = G__41109__2;
G__41109.cljs$core$IFn$_invoke$arity$3 = G__41109__3;
return G__41109;
})()
;
goog.object.set(G__40933_41106,G__40934_41107,G__40935_41108);

var G__40936_41110 = promesa.protocols._mapErr;
var G__40937_41111 = "_";
var G__40938_41112 = (function() {
var G__41113 = null;
var G__41113__2 = (function (it,f){
return promesa.protocols._mapErr.cljs$core$IFn$_invoke$arity$2(promesa.protocols._promise(it),f);
});
var G__41113__3 = (function (it,f,e){
return promesa.protocols._mapErr.cljs$core$IFn$_invoke$arity$3(promesa.protocols._promise(it),f,e);
});
G__41113 = function(it,f,e){
switch(arguments.length){
case 2:
return G__41113__2.call(this,it,f);
case 3:
return G__41113__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__41113.cljs$core$IFn$_invoke$arity$2 = G__41113__2;
G__41113.cljs$core$IFn$_invoke$arity$3 = G__41113__3;
return G__41113;
})()
;
goog.object.set(G__40936_41110,G__40937_41111,G__40938_41112);

var G__40939_41114 = promesa.protocols._thenErr;
var G__40940_41115 = "_";
var G__40941_41116 = (function() {
var G__41117 = null;
var G__41117__2 = (function (it,f){
return promesa.protocols._thenErr.cljs$core$IFn$_invoke$arity$2(promesa.protocols._promise(it),f);
});
var G__41117__3 = (function (it,f,e){
return promesa.protocols._thenErr.cljs$core$IFn$_invoke$arity$3(promesa.protocols._promise(it),f,e);
});
G__41117 = function(it,f,e){
switch(arguments.length){
case 2:
return G__41117__2.call(this,it,f);
case 3:
return G__41117__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__41117.cljs$core$IFn$_invoke$arity$2 = G__41117__2;
G__41117.cljs$core$IFn$_invoke$arity$3 = G__41117__3;
return G__41117;
})()
;
goog.object.set(G__40939_41114,G__40940_41115,G__40941_41116);

var G__40942_41155 = promesa.protocols._handle;
var G__40943_41156 = "_";
var G__40944_41157 = (function() {
var G__41158 = null;
var G__41158__2 = (function (it,f){
return promesa.protocols._handle.cljs$core$IFn$_invoke$arity$2(promesa.protocols._promise(it),f);
});
var G__41158__3 = (function (it,f,e){
return promesa.protocols._handle.cljs$core$IFn$_invoke$arity$3(promesa.protocols._promise(it),f,e);
});
G__41158 = function(it,f,e){
switch(arguments.length){
case 2:
return G__41158__2.call(this,it,f);
case 3:
return G__41158__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__41158.cljs$core$IFn$_invoke$arity$2 = G__41158__2;
G__41158.cljs$core$IFn$_invoke$arity$3 = G__41158__3;
return G__41158;
})()
;
goog.object.set(G__40942_41155,G__40943_41156,G__40944_41157);

var G__40945_41159 = promesa.protocols._finally;
var G__40946_41160 = "_";
var G__40947_41161 = (function() {
var G__41162 = null;
var G__41162__2 = (function (it,f){
return promesa.protocols._finally.cljs$core$IFn$_invoke$arity$2(promesa.protocols._promise(it),f);
});
var G__41162__3 = (function (it,f,e){
return promesa.protocols._finally.cljs$core$IFn$_invoke$arity$3(promesa.protocols._promise(it),f,e);
});
G__41162 = function(it,f,e){
switch(arguments.length){
case 2:
return G__41162__2.call(this,it,f);
case 3:
return G__41162__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__41162.cljs$core$IFn$_invoke$arity$2 = G__41162__2;
G__41162.cljs$core$IFn$_invoke$arity$3 = G__41162__3;
return G__41162;
})()
;
goog.object.set(G__40945_41159,G__40946_41160,G__40947_41161);
(Error.prototype.promesa$protocols$IPromiseFactory$ = cljs.core.PROTOCOL_SENTINEL);

(Error.prototype.promesa$protocols$IPromiseFactory$_promise$arity$1 = (function (e){
var e__$1 = this;
return promesa.impl.rejected(e__$1);
}));

goog.object.set(promesa.protocols.IPromiseFactory,"_",true);

var G__40948_41163 = promesa.protocols._promise;
var G__40949_41164 = "_";
var G__40950_41165 = (function (v){
return promesa.impl.resolved(v);
});
goog.object.set(G__40948_41163,G__40949_41164,G__40950_41165);
promesa.impl.promise__GT_str = (function promesa$impl$promise__GT_str(p){
return "#<Promise[~]>";
});
(Promise.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(Promise.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (p,writer,opts){
var p__$1 = this;
return cljs.core._write(writer,promesa.impl.promise__GT_str(p__$1));
}));

//# sourceMappingURL=promesa.impl.js.map
