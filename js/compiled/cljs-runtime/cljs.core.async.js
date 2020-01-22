goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__46466 = arguments.length;
switch (G__46466) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46467 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46467 = (function (f,blockable,meta46468){
this.f = f;
this.blockable = blockable;
this.meta46468 = meta46468;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46467.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46469,meta46468__$1){
var self__ = this;
var _46469__$1 = this;
return (new cljs.core.async.t_cljs$core$async46467(self__.f,self__.blockable,meta46468__$1));
}));

(cljs.core.async.t_cljs$core$async46467.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46469){
var self__ = this;
var _46469__$1 = this;
return self__.meta46468;
}));

(cljs.core.async.t_cljs$core$async46467.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46467.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46467.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async46467.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async46467.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta46468","meta46468",-750954904,null)], null);
}));

(cljs.core.async.t_cljs$core$async46467.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46467.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46467");

(cljs.core.async.t_cljs$core$async46467.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async46467");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46467.
 */
cljs.core.async.__GT_t_cljs$core$async46467 = (function cljs$core$async$__GT_t_cljs$core$async46467(f__$1,blockable__$1,meta46468){
return (new cljs.core.async.t_cljs$core$async46467(f__$1,blockable__$1,meta46468));
});

}

return (new cljs.core.async.t_cljs$core$async46467(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__46472 = arguments.length;
switch (G__46472) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__46474 = arguments.length;
switch (G__46474) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__46476 = arguments.length;
switch (G__46476) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_47921 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_47921) : fn1.call(null,val_47921));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_47921) : fn1.call(null,val_47921));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__46478 = arguments.length;
switch (G__46478) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___47938 = n;
var x_47939 = (0);
while(true){
if((x_47939 < n__4666__auto___47938)){
(a[x_47939] = x_47939);

var G__47940 = (x_47939 + (1));
x_47939 = G__47940;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46479 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46479 = (function (flag,meta46480){
this.flag = flag;
this.meta46480 = meta46480;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46479.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46481,meta46480__$1){
var self__ = this;
var _46481__$1 = this;
return (new cljs.core.async.t_cljs$core$async46479(self__.flag,meta46480__$1));
}));

(cljs.core.async.t_cljs$core$async46479.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46481){
var self__ = this;
var _46481__$1 = this;
return self__.meta46480;
}));

(cljs.core.async.t_cljs$core$async46479.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46479.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async46479.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46479.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async46479.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta46480","meta46480",-1912775665,null)], null);
}));

(cljs.core.async.t_cljs$core$async46479.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46479.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46479");

(cljs.core.async.t_cljs$core$async46479.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async46479");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46479.
 */
cljs.core.async.__GT_t_cljs$core$async46479 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async46479(flag__$1,meta46480){
return (new cljs.core.async.t_cljs$core$async46479(flag__$1,meta46480));
});

}

return (new cljs.core.async.t_cljs$core$async46479(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46482 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46482 = (function (flag,cb,meta46483){
this.flag = flag;
this.cb = cb;
this.meta46483 = meta46483;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46482.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46484,meta46483__$1){
var self__ = this;
var _46484__$1 = this;
return (new cljs.core.async.t_cljs$core$async46482(self__.flag,self__.cb,meta46483__$1));
}));

(cljs.core.async.t_cljs$core$async46482.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46484){
var self__ = this;
var _46484__$1 = this;
return self__.meta46483;
}));

(cljs.core.async.t_cljs$core$async46482.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46482.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async46482.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46482.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async46482.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta46483","meta46483",-127553495,null)], null);
}));

(cljs.core.async.t_cljs$core$async46482.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46482.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46482");

(cljs.core.async.t_cljs$core$async46482.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async46482");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46482.
 */
cljs.core.async.__GT_t_cljs$core$async46482 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async46482(flag__$1,cb__$1,meta46483){
return (new cljs.core.async.t_cljs$core$async46482(flag__$1,cb__$1,meta46483));
});

}

return (new cljs.core.async.t_cljs$core$async46482(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__46485_SHARP_){
var G__46487 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46485_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__46487) : fret.call(null,G__46487));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__46486_SHARP_){
var G__46488 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46486_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__46488) : fret.call(null,G__46488));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__47961 = (i + (1));
i = G__47961;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4174__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___47963 = arguments.length;
var i__4790__auto___47964 = (0);
while(true){
if((i__4790__auto___47964 < len__4789__auto___47963)){
args__4795__auto__.push((arguments[i__4790__auto___47964]));

var G__47965 = (i__4790__auto___47964 + (1));
i__4790__auto___47964 = G__47965;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__46491){
var map__46492 = p__46491;
var map__46492__$1 = (((((!((map__46492 == null))))?(((((map__46492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46492):map__46492);
var opts = map__46492__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq46489){
var G__46490 = cljs.core.first(seq46489);
var seq46489__$1 = cljs.core.next(seq46489);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46490,seq46489__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__46495 = arguments.length;
switch (G__46495) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__46406__auto___47972 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46407__auto__ = (function (){var switch__46338__auto__ = (function (state_46519){
var state_val_46520 = (state_46519[(1)]);
if((state_val_46520 === (7))){
var inst_46515 = (state_46519[(2)]);
var state_46519__$1 = state_46519;
var statearr_46521_47975 = state_46519__$1;
(statearr_46521_47975[(2)] = inst_46515);

(statearr_46521_47975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46520 === (1))){
var state_46519__$1 = state_46519;
var statearr_46522_47977 = state_46519__$1;
(statearr_46522_47977[(2)] = null);

(statearr_46522_47977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46520 === (4))){
var inst_46498 = (state_46519[(7)]);
var inst_46498__$1 = (state_46519[(2)]);
var inst_46499 = (inst_46498__$1 == null);
var state_46519__$1 = (function (){var statearr_46523 = state_46519;
(statearr_46523[(7)] = inst_46498__$1);

return statearr_46523;
})();
if(cljs.core.truth_(inst_46499)){
var statearr_46524_47980 = state_46519__$1;
(statearr_46524_47980[(1)] = (5));

} else {
var statearr_46525_47981 = state_46519__$1;
(statearr_46525_47981[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46520 === (13))){
var state_46519__$1 = state_46519;
var statearr_46526_47983 = state_46519__$1;
(statearr_46526_47983[(2)] = null);

(statearr_46526_47983[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46520 === (6))){
var inst_46498 = (state_46519[(7)]);
var state_46519__$1 = state_46519;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46519__$1,(11),to,inst_46498);
} else {
if((state_val_46520 === (3))){
var inst_46517 = (state_46519[(2)]);
var state_46519__$1 = state_46519;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46519__$1,inst_46517);
} else {
if((state_val_46520 === (12))){
var state_46519__$1 = state_46519;
var statearr_46527_47985 = state_46519__$1;
(statearr_46527_47985[(2)] = null);

(statearr_46527_47985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46520 === (2))){
var state_46519__$1 = state_46519;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46519__$1,(4),from);
} else {
if((state_val_46520 === (11))){
var inst_46508 = (state_46519[(2)]);
var state_46519__$1 = state_46519;
if(cljs.core.truth_(inst_46508)){
var statearr_46528_47986 = state_46519__$1;
(statearr_46528_47986[(1)] = (12));

} else {
var statearr_46529_47987 = state_46519__$1;
(statearr_46529_47987[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46520 === (9))){
var state_46519__$1 = state_46519;
var statearr_46530_47988 = state_46519__$1;
(statearr_46530_47988[(2)] = null);

(statearr_46530_47988[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46520 === (5))){
var state_46519__$1 = state_46519;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46531_47991 = state_46519__$1;
(statearr_46531_47991[(1)] = (8));

} else {
var statearr_46532_47993 = state_46519__$1;
(statearr_46532_47993[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46520 === (14))){
var inst_46513 = (state_46519[(2)]);
var state_46519__$1 = state_46519;
var statearr_46533_47995 = state_46519__$1;
(statearr_46533_47995[(2)] = inst_46513);

(statearr_46533_47995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46520 === (10))){
var inst_46505 = (state_46519[(2)]);
var state_46519__$1 = state_46519;
var statearr_46534_47996 = state_46519__$1;
(statearr_46534_47996[(2)] = inst_46505);

(statearr_46534_47996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46520 === (8))){
var inst_46502 = cljs.core.async.close_BANG_(to);
var state_46519__$1 = state_46519;
var statearr_46535_47997 = state_46519__$1;
(statearr_46535_47997[(2)] = inst_46502);

(statearr_46535_47997[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46339__auto__ = null;
var cljs$core$async$state_machine__46339__auto____0 = (function (){
var statearr_46536 = [null,null,null,null,null,null,null,null];
(statearr_46536[(0)] = cljs$core$async$state_machine__46339__auto__);

(statearr_46536[(1)] = (1));

return statearr_46536;
});
var cljs$core$async$state_machine__46339__auto____1 = (function (state_46519){
while(true){
var ret_value__46340__auto__ = (function (){try{while(true){
var result__46341__auto__ = switch__46338__auto__(state_46519);
if(cljs.core.keyword_identical_QMARK_(result__46341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46341__auto__;
}
break;
}
}catch (e46537){if((e46537 instanceof Object)){
var ex__46342__auto__ = e46537;
var statearr_46538_47998 = state_46519;
(statearr_46538_47998[(5)] = ex__46342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46519);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46537;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47999 = state_46519;
state_46519 = G__47999;
continue;
} else {
return ret_value__46340__auto__;
}
break;
}
});
cljs$core$async$state_machine__46339__auto__ = function(state_46519){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46339__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46339__auto____1.call(this,state_46519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46339__auto____0;
cljs$core$async$state_machine__46339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46339__auto____1;
return cljs$core$async$state_machine__46339__auto__;
})()
})();
var state__46408__auto__ = (function (){var statearr_46539 = (f__46407__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46407__auto__.cljs$core$IFn$_invoke$arity$0() : f__46407__auto__.call(null));
(statearr_46539[(6)] = c__46406__auto___47972);

return statearr_46539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46408__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__46540){
var vec__46541 = p__46540;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46541,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46541,(1),null);
var job = vec__46541;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__46406__auto___48009 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46407__auto__ = (function (){var switch__46338__auto__ = (function (state_46548){
var state_val_46549 = (state_46548[(1)]);
if((state_val_46549 === (1))){
var state_46548__$1 = state_46548;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46548__$1,(2),res,v);
} else {
if((state_val_46549 === (2))){
var inst_46545 = (state_46548[(2)]);
var inst_46546 = cljs.core.async.close_BANG_(res);
var state_46548__$1 = (function (){var statearr_46550 = state_46548;
(statearr_46550[(7)] = inst_46545);

return statearr_46550;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46548__$1,inst_46546);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46339__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46339__auto____0 = (function (){
var statearr_46551 = [null,null,null,null,null,null,null,null];
(statearr_46551[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46339__auto__);

(statearr_46551[(1)] = (1));

return statearr_46551;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46339__auto____1 = (function (state_46548){
while(true){
var ret_value__46340__auto__ = (function (){try{while(true){
var result__46341__auto__ = switch__46338__auto__(state_46548);
if(cljs.core.keyword_identical_QMARK_(result__46341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46341__auto__;
}
break;
}
}catch (e46552){if((e46552 instanceof Object)){
var ex__46342__auto__ = e46552;
var statearr_46553_48010 = state_46548;
(statearr_46553_48010[(5)] = ex__46342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46548);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46552;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48011 = state_46548;
state_46548 = G__48011;
continue;
} else {
return ret_value__46340__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46339__auto__ = function(state_46548){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46339__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46339__auto____1.call(this,state_46548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46339__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46339__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46339__auto__;
})()
})();
var state__46408__auto__ = (function (){var statearr_46554 = (f__46407__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46407__auto__.cljs$core$IFn$_invoke$arity$0() : f__46407__auto__.call(null));
(statearr_46554[(6)] = c__46406__auto___48009);

return statearr_46554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46408__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__46555){
var vec__46556 = p__46555;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46556,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46556,(1),null);
var job = vec__46556;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4666__auto___48013 = n;
var __48014 = (0);
while(true){
if((__48014 < n__4666__auto___48013)){
var G__46559_48016 = type;
var G__46559_48017__$1 = (((G__46559_48016 instanceof cljs.core.Keyword))?G__46559_48016.fqn:null);
switch (G__46559_48017__$1) {
case "compute":
var c__46406__auto___48019 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__48014,c__46406__auto___48019,G__46559_48016,G__46559_48017__$1,n__4666__auto___48013,jobs,results,process,async){
return (function (){
var f__46407__auto__ = (function (){var switch__46338__auto__ = ((function (__48014,c__46406__auto___48019,G__46559_48016,G__46559_48017__$1,n__4666__auto___48013,jobs,results,process,async){
return (function (state_46572){
var state_val_46573 = (state_46572[(1)]);
if((state_val_46573 === (1))){
var state_46572__$1 = state_46572;
var statearr_46574_48021 = state_46572__$1;
(statearr_46574_48021[(2)] = null);

(statearr_46574_48021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46573 === (2))){
var state_46572__$1 = state_46572;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46572__$1,(4),jobs);
} else {
if((state_val_46573 === (3))){
var inst_46570 = (state_46572[(2)]);
var state_46572__$1 = state_46572;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46572__$1,inst_46570);
} else {
if((state_val_46573 === (4))){
var inst_46562 = (state_46572[(2)]);
var inst_46563 = process(inst_46562);
var state_46572__$1 = state_46572;
if(cljs.core.truth_(inst_46563)){
var statearr_46575_48022 = state_46572__$1;
(statearr_46575_48022[(1)] = (5));

} else {
var statearr_46576_48023 = state_46572__$1;
(statearr_46576_48023[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46573 === (5))){
var state_46572__$1 = state_46572;
var statearr_46577_48024 = state_46572__$1;
(statearr_46577_48024[(2)] = null);

(statearr_46577_48024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46573 === (6))){
var state_46572__$1 = state_46572;
var statearr_46578_48025 = state_46572__$1;
(statearr_46578_48025[(2)] = null);

(statearr_46578_48025[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46573 === (7))){
var inst_46568 = (state_46572[(2)]);
var state_46572__$1 = state_46572;
var statearr_46579_48026 = state_46572__$1;
(statearr_46579_48026[(2)] = inst_46568);

(statearr_46579_48026[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__48014,c__46406__auto___48019,G__46559_48016,G__46559_48017__$1,n__4666__auto___48013,jobs,results,process,async))
;
return ((function (__48014,switch__46338__auto__,c__46406__auto___48019,G__46559_48016,G__46559_48017__$1,n__4666__auto___48013,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46339__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46339__auto____0 = (function (){
var statearr_46580 = [null,null,null,null,null,null,null];
(statearr_46580[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46339__auto__);

(statearr_46580[(1)] = (1));

return statearr_46580;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46339__auto____1 = (function (state_46572){
while(true){
var ret_value__46340__auto__ = (function (){try{while(true){
var result__46341__auto__ = switch__46338__auto__(state_46572);
if(cljs.core.keyword_identical_QMARK_(result__46341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46341__auto__;
}
break;
}
}catch (e46581){if((e46581 instanceof Object)){
var ex__46342__auto__ = e46581;
var statearr_46582_48029 = state_46572;
(statearr_46582_48029[(5)] = ex__46342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46572);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46581;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48033 = state_46572;
state_46572 = G__48033;
continue;
} else {
return ret_value__46340__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46339__auto__ = function(state_46572){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46339__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46339__auto____1.call(this,state_46572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46339__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46339__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46339__auto__;
})()
;})(__48014,switch__46338__auto__,c__46406__auto___48019,G__46559_48016,G__46559_48017__$1,n__4666__auto___48013,jobs,results,process,async))
})();
var state__46408__auto__ = (function (){var statearr_46583 = (f__46407__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46407__auto__.cljs$core$IFn$_invoke$arity$0() : f__46407__auto__.call(null));
(statearr_46583[(6)] = c__46406__auto___48019);

return statearr_46583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46408__auto__);
});})(__48014,c__46406__auto___48019,G__46559_48016,G__46559_48017__$1,n__4666__auto___48013,jobs,results,process,async))
);


break;
case "async":
var c__46406__auto___48039 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__48014,c__46406__auto___48039,G__46559_48016,G__46559_48017__$1,n__4666__auto___48013,jobs,results,process,async){
return (function (){
var f__46407__auto__ = (function (){var switch__46338__auto__ = ((function (__48014,c__46406__auto___48039,G__46559_48016,G__46559_48017__$1,n__4666__auto___48013,jobs,results,process,async){
return (function (state_46596){
var state_val_46597 = (state_46596[(1)]);
if((state_val_46597 === (1))){
var state_46596__$1 = state_46596;
var statearr_46598_48040 = state_46596__$1;
(statearr_46598_48040[(2)] = null);

(statearr_46598_48040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46597 === (2))){
var state_46596__$1 = state_46596;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46596__$1,(4),jobs);
} else {
if((state_val_46597 === (3))){
var inst_46594 = (state_46596[(2)]);
var state_46596__$1 = state_46596;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46596__$1,inst_46594);
} else {
if((state_val_46597 === (4))){
var inst_46586 = (state_46596[(2)]);
var inst_46587 = async(inst_46586);
var state_46596__$1 = state_46596;
if(cljs.core.truth_(inst_46587)){
var statearr_46599_48043 = state_46596__$1;
(statearr_46599_48043[(1)] = (5));

} else {
var statearr_46600_48044 = state_46596__$1;
(statearr_46600_48044[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46597 === (5))){
var state_46596__$1 = state_46596;
var statearr_46601_48045 = state_46596__$1;
(statearr_46601_48045[(2)] = null);

(statearr_46601_48045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46597 === (6))){
var state_46596__$1 = state_46596;
var statearr_46602_48046 = state_46596__$1;
(statearr_46602_48046[(2)] = null);

(statearr_46602_48046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46597 === (7))){
var inst_46592 = (state_46596[(2)]);
var state_46596__$1 = state_46596;
var statearr_46603_48048 = state_46596__$1;
(statearr_46603_48048[(2)] = inst_46592);

(statearr_46603_48048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__48014,c__46406__auto___48039,G__46559_48016,G__46559_48017__$1,n__4666__auto___48013,jobs,results,process,async))
;
return ((function (__48014,switch__46338__auto__,c__46406__auto___48039,G__46559_48016,G__46559_48017__$1,n__4666__auto___48013,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46339__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46339__auto____0 = (function (){
var statearr_46604 = [null,null,null,null,null,null,null];
(statearr_46604[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46339__auto__);

(statearr_46604[(1)] = (1));

return statearr_46604;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46339__auto____1 = (function (state_46596){
while(true){
var ret_value__46340__auto__ = (function (){try{while(true){
var result__46341__auto__ = switch__46338__auto__(state_46596);
if(cljs.core.keyword_identical_QMARK_(result__46341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46341__auto__;
}
break;
}
}catch (e46605){if((e46605 instanceof Object)){
var ex__46342__auto__ = e46605;
var statearr_46606_48049 = state_46596;
(statearr_46606_48049[(5)] = ex__46342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46596);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46605;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48050 = state_46596;
state_46596 = G__48050;
continue;
} else {
return ret_value__46340__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46339__auto__ = function(state_46596){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46339__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46339__auto____1.call(this,state_46596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46339__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46339__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46339__auto__;
})()
;})(__48014,switch__46338__auto__,c__46406__auto___48039,G__46559_48016,G__46559_48017__$1,n__4666__auto___48013,jobs,results,process,async))
})();
var state__46408__auto__ = (function (){var statearr_46607 = (f__46407__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46407__auto__.cljs$core$IFn$_invoke$arity$0() : f__46407__auto__.call(null));
(statearr_46607[(6)] = c__46406__auto___48039);

return statearr_46607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46408__auto__);
});})(__48014,c__46406__auto___48039,G__46559_48016,G__46559_48017__$1,n__4666__auto___48013,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46559_48017__$1)].join('')));

}

var G__48054 = (__48014 + (1));
__48014 = G__48054;
continue;
} else {
}
break;
}

var c__46406__auto___48055 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46407__auto__ = (function (){var switch__46338__auto__ = (function (state_46629){
var state_val_46630 = (state_46629[(1)]);
if((state_val_46630 === (7))){
var inst_46625 = (state_46629[(2)]);
var state_46629__$1 = state_46629;
var statearr_46631_48056 = state_46629__$1;
(statearr_46631_48056[(2)] = inst_46625);

(statearr_46631_48056[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46630 === (1))){
var state_46629__$1 = state_46629;
var statearr_46632_48057 = state_46629__$1;
(statearr_46632_48057[(2)] = null);

(statearr_46632_48057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46630 === (4))){
var inst_46610 = (state_46629[(7)]);
var inst_46610__$1 = (state_46629[(2)]);
var inst_46611 = (inst_46610__$1 == null);
var state_46629__$1 = (function (){var statearr_46633 = state_46629;
(statearr_46633[(7)] = inst_46610__$1);

return statearr_46633;
})();
if(cljs.core.truth_(inst_46611)){
var statearr_46634_48058 = state_46629__$1;
(statearr_46634_48058[(1)] = (5));

} else {
var statearr_46635_48059 = state_46629__$1;
(statearr_46635_48059[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46630 === (6))){
var inst_46615 = (state_46629[(8)]);
var inst_46610 = (state_46629[(7)]);
var inst_46615__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_46616 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46617 = [inst_46610,inst_46615__$1];
var inst_46618 = (new cljs.core.PersistentVector(null,2,(5),inst_46616,inst_46617,null));
var state_46629__$1 = (function (){var statearr_46636 = state_46629;
(statearr_46636[(8)] = inst_46615__$1);

return statearr_46636;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46629__$1,(8),jobs,inst_46618);
} else {
if((state_val_46630 === (3))){
var inst_46627 = (state_46629[(2)]);
var state_46629__$1 = state_46629;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46629__$1,inst_46627);
} else {
if((state_val_46630 === (2))){
var state_46629__$1 = state_46629;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46629__$1,(4),from);
} else {
if((state_val_46630 === (9))){
var inst_46622 = (state_46629[(2)]);
var state_46629__$1 = (function (){var statearr_46637 = state_46629;
(statearr_46637[(9)] = inst_46622);

return statearr_46637;
})();
var statearr_46638_48063 = state_46629__$1;
(statearr_46638_48063[(2)] = null);

(statearr_46638_48063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46630 === (5))){
var inst_46613 = cljs.core.async.close_BANG_(jobs);
var state_46629__$1 = state_46629;
var statearr_46639_48065 = state_46629__$1;
(statearr_46639_48065[(2)] = inst_46613);

(statearr_46639_48065[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46630 === (8))){
var inst_46615 = (state_46629[(8)]);
var inst_46620 = (state_46629[(2)]);
var state_46629__$1 = (function (){var statearr_46640 = state_46629;
(statearr_46640[(10)] = inst_46620);

return statearr_46640;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46629__$1,(9),results,inst_46615);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46339__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46339__auto____0 = (function (){
var statearr_46641 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46641[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46339__auto__);

(statearr_46641[(1)] = (1));

return statearr_46641;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46339__auto____1 = (function (state_46629){
while(true){
var ret_value__46340__auto__ = (function (){try{while(true){
var result__46341__auto__ = switch__46338__auto__(state_46629);
if(cljs.core.keyword_identical_QMARK_(result__46341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46341__auto__;
}
break;
}
}catch (e46642){if((e46642 instanceof Object)){
var ex__46342__auto__ = e46642;
var statearr_46643_48068 = state_46629;
(statearr_46643_48068[(5)] = ex__46342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46642;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48069 = state_46629;
state_46629 = G__48069;
continue;
} else {
return ret_value__46340__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46339__auto__ = function(state_46629){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46339__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46339__auto____1.call(this,state_46629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46339__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46339__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46339__auto__;
})()
})();
var state__46408__auto__ = (function (){var statearr_46644 = (f__46407__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46407__auto__.cljs$core$IFn$_invoke$arity$0() : f__46407__auto__.call(null));
(statearr_46644[(6)] = c__46406__auto___48055);

return statearr_46644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46408__auto__);
}));


var c__46406__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46407__auto__ = (function (){var switch__46338__auto__ = (function (state_46682){
var state_val_46683 = (state_46682[(1)]);
if((state_val_46683 === (7))){
var inst_46678 = (state_46682[(2)]);
var state_46682__$1 = state_46682;
var statearr_46684_48070 = state_46682__$1;
(statearr_46684_48070[(2)] = inst_46678);

(statearr_46684_48070[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46683 === (20))){
var state_46682__$1 = state_46682;
var statearr_46685_48071 = state_46682__$1;
(statearr_46685_48071[(2)] = null);

(statearr_46685_48071[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46683 === (1))){
var state_46682__$1 = state_46682;
var statearr_46686_48072 = state_46682__$1;
(statearr_46686_48072[(2)] = null);

(statearr_46686_48072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46683 === (4))){
var inst_46647 = (state_46682[(7)]);
var inst_46647__$1 = (state_46682[(2)]);
var inst_46648 = (inst_46647__$1 == null);
var state_46682__$1 = (function (){var statearr_46687 = state_46682;
(statearr_46687[(7)] = inst_46647__$1);

return statearr_46687;
})();
if(cljs.core.truth_(inst_46648)){
var statearr_46688_48073 = state_46682__$1;
(statearr_46688_48073[(1)] = (5));

} else {
var statearr_46689_48074 = state_46682__$1;
(statearr_46689_48074[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46683 === (15))){
var inst_46660 = (state_46682[(8)]);
var state_46682__$1 = state_46682;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46682__$1,(18),to,inst_46660);
} else {
if((state_val_46683 === (21))){
var inst_46673 = (state_46682[(2)]);
var state_46682__$1 = state_46682;
var statearr_46690_48075 = state_46682__$1;
(statearr_46690_48075[(2)] = inst_46673);

(statearr_46690_48075[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46683 === (13))){
var inst_46675 = (state_46682[(2)]);
var state_46682__$1 = (function (){var statearr_46691 = state_46682;
(statearr_46691[(9)] = inst_46675);

return statearr_46691;
})();
var statearr_46692_48076 = state_46682__$1;
(statearr_46692_48076[(2)] = null);

(statearr_46692_48076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46683 === (6))){
var inst_46647 = (state_46682[(7)]);
var state_46682__$1 = state_46682;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46682__$1,(11),inst_46647);
} else {
if((state_val_46683 === (17))){
var inst_46668 = (state_46682[(2)]);
var state_46682__$1 = state_46682;
if(cljs.core.truth_(inst_46668)){
var statearr_46693_48077 = state_46682__$1;
(statearr_46693_48077[(1)] = (19));

} else {
var statearr_46694_48078 = state_46682__$1;
(statearr_46694_48078[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46683 === (3))){
var inst_46680 = (state_46682[(2)]);
var state_46682__$1 = state_46682;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46682__$1,inst_46680);
} else {
if((state_val_46683 === (12))){
var inst_46657 = (state_46682[(10)]);
var state_46682__$1 = state_46682;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46682__$1,(14),inst_46657);
} else {
if((state_val_46683 === (2))){
var state_46682__$1 = state_46682;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46682__$1,(4),results);
} else {
if((state_val_46683 === (19))){
var state_46682__$1 = state_46682;
var statearr_46695_48079 = state_46682__$1;
(statearr_46695_48079[(2)] = null);

(statearr_46695_48079[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46683 === (11))){
var inst_46657 = (state_46682[(2)]);
var state_46682__$1 = (function (){var statearr_46696 = state_46682;
(statearr_46696[(10)] = inst_46657);

return statearr_46696;
})();
var statearr_46697_48080 = state_46682__$1;
(statearr_46697_48080[(2)] = null);

(statearr_46697_48080[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46683 === (9))){
var state_46682__$1 = state_46682;
var statearr_46698_48081 = state_46682__$1;
(statearr_46698_48081[(2)] = null);

(statearr_46698_48081[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46683 === (5))){
var state_46682__$1 = state_46682;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46699_48082 = state_46682__$1;
(statearr_46699_48082[(1)] = (8));

} else {
var statearr_46700_48083 = state_46682__$1;
(statearr_46700_48083[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46683 === (14))){
var inst_46660 = (state_46682[(8)]);
var inst_46660__$1 = (state_46682[(2)]);
var inst_46661 = (inst_46660__$1 == null);
var inst_46662 = cljs.core.not(inst_46661);
var state_46682__$1 = (function (){var statearr_46701 = state_46682;
(statearr_46701[(8)] = inst_46660__$1);

return statearr_46701;
})();
if(inst_46662){
var statearr_46702_48084 = state_46682__$1;
(statearr_46702_48084[(1)] = (15));

} else {
var statearr_46703_48085 = state_46682__$1;
(statearr_46703_48085[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46683 === (16))){
var state_46682__$1 = state_46682;
var statearr_46704_48086 = state_46682__$1;
(statearr_46704_48086[(2)] = false);

(statearr_46704_48086[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46683 === (10))){
var inst_46654 = (state_46682[(2)]);
var state_46682__$1 = state_46682;
var statearr_46705_48087 = state_46682__$1;
(statearr_46705_48087[(2)] = inst_46654);

(statearr_46705_48087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46683 === (18))){
var inst_46665 = (state_46682[(2)]);
var state_46682__$1 = state_46682;
var statearr_46706_48088 = state_46682__$1;
(statearr_46706_48088[(2)] = inst_46665);

(statearr_46706_48088[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46683 === (8))){
var inst_46651 = cljs.core.async.close_BANG_(to);
var state_46682__$1 = state_46682;
var statearr_46707_48089 = state_46682__$1;
(statearr_46707_48089[(2)] = inst_46651);

(statearr_46707_48089[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46339__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46339__auto____0 = (function (){
var statearr_46708 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46708[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46339__auto__);

(statearr_46708[(1)] = (1));

return statearr_46708;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46339__auto____1 = (function (state_46682){
while(true){
var ret_value__46340__auto__ = (function (){try{while(true){
var result__46341__auto__ = switch__46338__auto__(state_46682);
if(cljs.core.keyword_identical_QMARK_(result__46341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46341__auto__;
}
break;
}
}catch (e46709){if((e46709 instanceof Object)){
var ex__46342__auto__ = e46709;
var statearr_46710_48091 = state_46682;
(statearr_46710_48091[(5)] = ex__46342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46682);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46709;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48092 = state_46682;
state_46682 = G__48092;
continue;
} else {
return ret_value__46340__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46339__auto__ = function(state_46682){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46339__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46339__auto____1.call(this,state_46682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46339__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46339__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46339__auto__;
})()
})();
var state__46408__auto__ = (function (){var statearr_46711 = (f__46407__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46407__auto__.cljs$core$IFn$_invoke$arity$0() : f__46407__auto__.call(null));
(statearr_46711[(6)] = c__46406__auto__);

return statearr_46711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46408__auto__);
}));

return c__46406__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__46713 = arguments.length;
switch (G__46713) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__46715 = arguments.length;
switch (G__46715) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__46717 = arguments.length;
switch (G__46717) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__46406__auto___48100 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46407__auto__ = (function (){var switch__46338__auto__ = (function (state_46743){
var state_val_46744 = (state_46743[(1)]);
if((state_val_46744 === (7))){
var inst_46739 = (state_46743[(2)]);
var state_46743__$1 = state_46743;
var statearr_46745_48101 = state_46743__$1;
(statearr_46745_48101[(2)] = inst_46739);

(statearr_46745_48101[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (1))){
var state_46743__$1 = state_46743;
var statearr_46746_48102 = state_46743__$1;
(statearr_46746_48102[(2)] = null);

(statearr_46746_48102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (4))){
var inst_46720 = (state_46743[(7)]);
var inst_46720__$1 = (state_46743[(2)]);
var inst_46721 = (inst_46720__$1 == null);
var state_46743__$1 = (function (){var statearr_46747 = state_46743;
(statearr_46747[(7)] = inst_46720__$1);

return statearr_46747;
})();
if(cljs.core.truth_(inst_46721)){
var statearr_46748_48104 = state_46743__$1;
(statearr_46748_48104[(1)] = (5));

} else {
var statearr_46749_48105 = state_46743__$1;
(statearr_46749_48105[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (13))){
var state_46743__$1 = state_46743;
var statearr_46750_48107 = state_46743__$1;
(statearr_46750_48107[(2)] = null);

(statearr_46750_48107[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (6))){
var inst_46720 = (state_46743[(7)]);
var inst_46726 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_46720) : p.call(null,inst_46720));
var state_46743__$1 = state_46743;
if(cljs.core.truth_(inst_46726)){
var statearr_46751_48108 = state_46743__$1;
(statearr_46751_48108[(1)] = (9));

} else {
var statearr_46752_48109 = state_46743__$1;
(statearr_46752_48109[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (3))){
var inst_46741 = (state_46743[(2)]);
var state_46743__$1 = state_46743;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46743__$1,inst_46741);
} else {
if((state_val_46744 === (12))){
var state_46743__$1 = state_46743;
var statearr_46753_48110 = state_46743__$1;
(statearr_46753_48110[(2)] = null);

(statearr_46753_48110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (2))){
var state_46743__$1 = state_46743;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46743__$1,(4),ch);
} else {
if((state_val_46744 === (11))){
var inst_46720 = (state_46743[(7)]);
var inst_46730 = (state_46743[(2)]);
var state_46743__$1 = state_46743;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46743__$1,(8),inst_46730,inst_46720);
} else {
if((state_val_46744 === (9))){
var state_46743__$1 = state_46743;
var statearr_46754_48111 = state_46743__$1;
(statearr_46754_48111[(2)] = tc);

(statearr_46754_48111[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (5))){
var inst_46723 = cljs.core.async.close_BANG_(tc);
var inst_46724 = cljs.core.async.close_BANG_(fc);
var state_46743__$1 = (function (){var statearr_46755 = state_46743;
(statearr_46755[(8)] = inst_46723);

return statearr_46755;
})();
var statearr_46756_48113 = state_46743__$1;
(statearr_46756_48113[(2)] = inst_46724);

(statearr_46756_48113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (14))){
var inst_46737 = (state_46743[(2)]);
var state_46743__$1 = state_46743;
var statearr_46757_48115 = state_46743__$1;
(statearr_46757_48115[(2)] = inst_46737);

(statearr_46757_48115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (10))){
var state_46743__$1 = state_46743;
var statearr_46758_48116 = state_46743__$1;
(statearr_46758_48116[(2)] = fc);

(statearr_46758_48116[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (8))){
var inst_46732 = (state_46743[(2)]);
var state_46743__$1 = state_46743;
if(cljs.core.truth_(inst_46732)){
var statearr_46759_48117 = state_46743__$1;
(statearr_46759_48117[(1)] = (12));

} else {
var statearr_46760_48118 = state_46743__$1;
(statearr_46760_48118[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46339__auto__ = null;
var cljs$core$async$state_machine__46339__auto____0 = (function (){
var statearr_46761 = [null,null,null,null,null,null,null,null,null];
(statearr_46761[(0)] = cljs$core$async$state_machine__46339__auto__);

(statearr_46761[(1)] = (1));

return statearr_46761;
});
var cljs$core$async$state_machine__46339__auto____1 = (function (state_46743){
while(true){
var ret_value__46340__auto__ = (function (){try{while(true){
var result__46341__auto__ = switch__46338__auto__(state_46743);
if(cljs.core.keyword_identical_QMARK_(result__46341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46341__auto__;
}
break;
}
}catch (e46762){if((e46762 instanceof Object)){
var ex__46342__auto__ = e46762;
var statearr_46763_48119 = state_46743;
(statearr_46763_48119[(5)] = ex__46342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46762;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48120 = state_46743;
state_46743 = G__48120;
continue;
} else {
return ret_value__46340__auto__;
}
break;
}
});
cljs$core$async$state_machine__46339__auto__ = function(state_46743){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46339__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46339__auto____1.call(this,state_46743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46339__auto____0;
cljs$core$async$state_machine__46339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46339__auto____1;
return cljs$core$async$state_machine__46339__auto__;
})()
})();
var state__46408__auto__ = (function (){var statearr_46764 = (f__46407__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46407__auto__.cljs$core$IFn$_invoke$arity$0() : f__46407__auto__.call(null));
(statearr_46764[(6)] = c__46406__auto___48100);

return statearr_46764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46408__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__46406__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46407__auto__ = (function (){var switch__46338__auto__ = (function (state_46785){
var state_val_46786 = (state_46785[(1)]);
if((state_val_46786 === (7))){
var inst_46781 = (state_46785[(2)]);
var state_46785__$1 = state_46785;
var statearr_46787_48121 = state_46785__$1;
(statearr_46787_48121[(2)] = inst_46781);

(statearr_46787_48121[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46786 === (1))){
var inst_46765 = init;
var state_46785__$1 = (function (){var statearr_46788 = state_46785;
(statearr_46788[(7)] = inst_46765);

return statearr_46788;
})();
var statearr_46789_48122 = state_46785__$1;
(statearr_46789_48122[(2)] = null);

(statearr_46789_48122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46786 === (4))){
var inst_46768 = (state_46785[(8)]);
var inst_46768__$1 = (state_46785[(2)]);
var inst_46769 = (inst_46768__$1 == null);
var state_46785__$1 = (function (){var statearr_46790 = state_46785;
(statearr_46790[(8)] = inst_46768__$1);

return statearr_46790;
})();
if(cljs.core.truth_(inst_46769)){
var statearr_46791_48123 = state_46785__$1;
(statearr_46791_48123[(1)] = (5));

} else {
var statearr_46792_48124 = state_46785__$1;
(statearr_46792_48124[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46786 === (6))){
var inst_46772 = (state_46785[(9)]);
var inst_46768 = (state_46785[(8)]);
var inst_46765 = (state_46785[(7)]);
var inst_46772__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_46765,inst_46768) : f.call(null,inst_46765,inst_46768));
var inst_46773 = cljs.core.reduced_QMARK_(inst_46772__$1);
var state_46785__$1 = (function (){var statearr_46793 = state_46785;
(statearr_46793[(9)] = inst_46772__$1);

return statearr_46793;
})();
if(inst_46773){
var statearr_46794_48127 = state_46785__$1;
(statearr_46794_48127[(1)] = (8));

} else {
var statearr_46795_48128 = state_46785__$1;
(statearr_46795_48128[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46786 === (3))){
var inst_46783 = (state_46785[(2)]);
var state_46785__$1 = state_46785;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46785__$1,inst_46783);
} else {
if((state_val_46786 === (2))){
var state_46785__$1 = state_46785;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46785__$1,(4),ch);
} else {
if((state_val_46786 === (9))){
var inst_46772 = (state_46785[(9)]);
var inst_46765 = inst_46772;
var state_46785__$1 = (function (){var statearr_46796 = state_46785;
(statearr_46796[(7)] = inst_46765);

return statearr_46796;
})();
var statearr_46797_48131 = state_46785__$1;
(statearr_46797_48131[(2)] = null);

(statearr_46797_48131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46786 === (5))){
var inst_46765 = (state_46785[(7)]);
var state_46785__$1 = state_46785;
var statearr_46798_48132 = state_46785__$1;
(statearr_46798_48132[(2)] = inst_46765);

(statearr_46798_48132[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46786 === (10))){
var inst_46779 = (state_46785[(2)]);
var state_46785__$1 = state_46785;
var statearr_46799_48133 = state_46785__$1;
(statearr_46799_48133[(2)] = inst_46779);

(statearr_46799_48133[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46786 === (8))){
var inst_46772 = (state_46785[(9)]);
var inst_46775 = cljs.core.deref(inst_46772);
var state_46785__$1 = state_46785;
var statearr_46800_48134 = state_46785__$1;
(statearr_46800_48134[(2)] = inst_46775);

(statearr_46800_48134[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__46339__auto__ = null;
var cljs$core$async$reduce_$_state_machine__46339__auto____0 = (function (){
var statearr_46801 = [null,null,null,null,null,null,null,null,null,null];
(statearr_46801[(0)] = cljs$core$async$reduce_$_state_machine__46339__auto__);

(statearr_46801[(1)] = (1));

return statearr_46801;
});
var cljs$core$async$reduce_$_state_machine__46339__auto____1 = (function (state_46785){
while(true){
var ret_value__46340__auto__ = (function (){try{while(true){
var result__46341__auto__ = switch__46338__auto__(state_46785);
if(cljs.core.keyword_identical_QMARK_(result__46341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46341__auto__;
}
break;
}
}catch (e46802){if((e46802 instanceof Object)){
var ex__46342__auto__ = e46802;
var statearr_46803_48135 = state_46785;
(statearr_46803_48135[(5)] = ex__46342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46785);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46802;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48136 = state_46785;
state_46785 = G__48136;
continue;
} else {
return ret_value__46340__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__46339__auto__ = function(state_46785){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__46339__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__46339__auto____1.call(this,state_46785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__46339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__46339__auto____0;
cljs$core$async$reduce_$_state_machine__46339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__46339__auto____1;
return cljs$core$async$reduce_$_state_machine__46339__auto__;
})()
})();
var state__46408__auto__ = (function (){var statearr_46804 = (f__46407__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46407__auto__.cljs$core$IFn$_invoke$arity$0() : f__46407__auto__.call(null));
(statearr_46804[(6)] = c__46406__auto__);

return statearr_46804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46408__auto__);
}));

return c__46406__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__46406__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46407__auto__ = (function (){var switch__46338__auto__ = (function (state_46810){
var state_val_46811 = (state_46810[(1)]);
if((state_val_46811 === (1))){
var inst_46805 = cljs.core.async.reduce(f__$1,init,ch);
var state_46810__$1 = state_46810;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46810__$1,(2),inst_46805);
} else {
if((state_val_46811 === (2))){
var inst_46807 = (state_46810[(2)]);
var inst_46808 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_46807) : f__$1.call(null,inst_46807));
var state_46810__$1 = state_46810;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46810__$1,inst_46808);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__46339__auto__ = null;
var cljs$core$async$transduce_$_state_machine__46339__auto____0 = (function (){
var statearr_46812 = [null,null,null,null,null,null,null];
(statearr_46812[(0)] = cljs$core$async$transduce_$_state_machine__46339__auto__);

(statearr_46812[(1)] = (1));

return statearr_46812;
});
var cljs$core$async$transduce_$_state_machine__46339__auto____1 = (function (state_46810){
while(true){
var ret_value__46340__auto__ = (function (){try{while(true){
var result__46341__auto__ = switch__46338__auto__(state_46810);
if(cljs.core.keyword_identical_QMARK_(result__46341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46341__auto__;
}
break;
}
}catch (e46813){if((e46813 instanceof Object)){
var ex__46342__auto__ = e46813;
var statearr_46814_48137 = state_46810;
(statearr_46814_48137[(5)] = ex__46342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46810);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46813;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48138 = state_46810;
state_46810 = G__48138;
continue;
} else {
return ret_value__46340__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__46339__auto__ = function(state_46810){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__46339__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__46339__auto____1.call(this,state_46810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__46339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__46339__auto____0;
cljs$core$async$transduce_$_state_machine__46339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__46339__auto____1;
return cljs$core$async$transduce_$_state_machine__46339__auto__;
})()
})();
var state__46408__auto__ = (function (){var statearr_46815 = (f__46407__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46407__auto__.cljs$core$IFn$_invoke$arity$0() : f__46407__auto__.call(null));
(statearr_46815[(6)] = c__46406__auto__);

return statearr_46815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46408__auto__);
}));

return c__46406__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__46817 = arguments.length;
switch (G__46817) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__46406__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46407__auto__ = (function (){var switch__46338__auto__ = (function (state_46842){
var state_val_46843 = (state_46842[(1)]);
if((state_val_46843 === (7))){
var inst_46824 = (state_46842[(2)]);
var state_46842__$1 = state_46842;
var statearr_46844_48142 = state_46842__$1;
(statearr_46844_48142[(2)] = inst_46824);

(statearr_46844_48142[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46843 === (1))){
var inst_46818 = cljs.core.seq(coll);
var inst_46819 = inst_46818;
var state_46842__$1 = (function (){var statearr_46845 = state_46842;
(statearr_46845[(7)] = inst_46819);

return statearr_46845;
})();
var statearr_46846_48143 = state_46842__$1;
(statearr_46846_48143[(2)] = null);

(statearr_46846_48143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46843 === (4))){
var inst_46819 = (state_46842[(7)]);
var inst_46822 = cljs.core.first(inst_46819);
var state_46842__$1 = state_46842;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46842__$1,(7),ch,inst_46822);
} else {
if((state_val_46843 === (13))){
var inst_46836 = (state_46842[(2)]);
var state_46842__$1 = state_46842;
var statearr_46847_48144 = state_46842__$1;
(statearr_46847_48144[(2)] = inst_46836);

(statearr_46847_48144[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46843 === (6))){
var inst_46827 = (state_46842[(2)]);
var state_46842__$1 = state_46842;
if(cljs.core.truth_(inst_46827)){
var statearr_46848_48145 = state_46842__$1;
(statearr_46848_48145[(1)] = (8));

} else {
var statearr_46849_48146 = state_46842__$1;
(statearr_46849_48146[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46843 === (3))){
var inst_46840 = (state_46842[(2)]);
var state_46842__$1 = state_46842;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46842__$1,inst_46840);
} else {
if((state_val_46843 === (12))){
var state_46842__$1 = state_46842;
var statearr_46850_48149 = state_46842__$1;
(statearr_46850_48149[(2)] = null);

(statearr_46850_48149[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46843 === (2))){
var inst_46819 = (state_46842[(7)]);
var state_46842__$1 = state_46842;
if(cljs.core.truth_(inst_46819)){
var statearr_46851_48150 = state_46842__$1;
(statearr_46851_48150[(1)] = (4));

} else {
var statearr_46852_48151 = state_46842__$1;
(statearr_46852_48151[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46843 === (11))){
var inst_46833 = cljs.core.async.close_BANG_(ch);
var state_46842__$1 = state_46842;
var statearr_46853_48152 = state_46842__$1;
(statearr_46853_48152[(2)] = inst_46833);

(statearr_46853_48152[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46843 === (9))){
var state_46842__$1 = state_46842;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46854_48153 = state_46842__$1;
(statearr_46854_48153[(1)] = (11));

} else {
var statearr_46855_48154 = state_46842__$1;
(statearr_46855_48154[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46843 === (5))){
var inst_46819 = (state_46842[(7)]);
var state_46842__$1 = state_46842;
var statearr_46856_48155 = state_46842__$1;
(statearr_46856_48155[(2)] = inst_46819);

(statearr_46856_48155[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46843 === (10))){
var inst_46838 = (state_46842[(2)]);
var state_46842__$1 = state_46842;
var statearr_46857_48158 = state_46842__$1;
(statearr_46857_48158[(2)] = inst_46838);

(statearr_46857_48158[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46843 === (8))){
var inst_46819 = (state_46842[(7)]);
var inst_46829 = cljs.core.next(inst_46819);
var inst_46819__$1 = inst_46829;
var state_46842__$1 = (function (){var statearr_46858 = state_46842;
(statearr_46858[(7)] = inst_46819__$1);

return statearr_46858;
})();
var statearr_46859_48160 = state_46842__$1;
(statearr_46859_48160[(2)] = null);

(statearr_46859_48160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46339__auto__ = null;
var cljs$core$async$state_machine__46339__auto____0 = (function (){
var statearr_46860 = [null,null,null,null,null,null,null,null];
(statearr_46860[(0)] = cljs$core$async$state_machine__46339__auto__);

(statearr_46860[(1)] = (1));

return statearr_46860;
});
var cljs$core$async$state_machine__46339__auto____1 = (function (state_46842){
while(true){
var ret_value__46340__auto__ = (function (){try{while(true){
var result__46341__auto__ = switch__46338__auto__(state_46842);
if(cljs.core.keyword_identical_QMARK_(result__46341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46341__auto__;
}
break;
}
}catch (e46861){if((e46861 instanceof Object)){
var ex__46342__auto__ = e46861;
var statearr_46862_48164 = state_46842;
(statearr_46862_48164[(5)] = ex__46342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46861;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48165 = state_46842;
state_46842 = G__48165;
continue;
} else {
return ret_value__46340__auto__;
}
break;
}
});
cljs$core$async$state_machine__46339__auto__ = function(state_46842){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46339__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46339__auto____1.call(this,state_46842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46339__auto____0;
cljs$core$async$state_machine__46339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46339__auto____1;
return cljs$core$async$state_machine__46339__auto__;
})()
})();
var state__46408__auto__ = (function (){var statearr_46863 = (f__46407__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46407__auto__.cljs$core$IFn$_invoke$arity$0() : f__46407__auto__.call(null));
(statearr_46863[(6)] = c__46406__auto__);

return statearr_46863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46408__auto__);
}));

return c__46406__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4488__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4485__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46864 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46864 = (function (ch,cs,meta46865){
this.ch = ch;
this.cs = cs;
this.meta46865 = meta46865;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46864.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46866,meta46865__$1){
var self__ = this;
var _46866__$1 = this;
return (new cljs.core.async.t_cljs$core$async46864(self__.ch,self__.cs,meta46865__$1));
}));

(cljs.core.async.t_cljs$core$async46864.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46866){
var self__ = this;
var _46866__$1 = this;
return self__.meta46865;
}));

(cljs.core.async.t_cljs$core$async46864.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46864.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async46864.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46864.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async46864.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async46864.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async46864.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta46865","meta46865",357972016,null)], null);
}));

(cljs.core.async.t_cljs$core$async46864.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46864.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46864");

(cljs.core.async.t_cljs$core$async46864.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async46864");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46864.
 */
cljs.core.async.__GT_t_cljs$core$async46864 = (function cljs$core$async$mult_$___GT_t_cljs$core$async46864(ch__$1,cs__$1,meta46865){
return (new cljs.core.async.t_cljs$core$async46864(ch__$1,cs__$1,meta46865));
});

}

return (new cljs.core.async.t_cljs$core$async46864(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__46406__auto___48167 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46407__auto__ = (function (){var switch__46338__auto__ = (function (state_47001){
var state_val_47002 = (state_47001[(1)]);
if((state_val_47002 === (7))){
var inst_46997 = (state_47001[(2)]);
var state_47001__$1 = state_47001;
var statearr_47003_48168 = state_47001__$1;
(statearr_47003_48168[(2)] = inst_46997);

(statearr_47003_48168[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (20))){
var inst_46900 = (state_47001[(7)]);
var inst_46912 = cljs.core.first(inst_46900);
var inst_46913 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46912,(0),null);
var inst_46914 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46912,(1),null);
var state_47001__$1 = (function (){var statearr_47004 = state_47001;
(statearr_47004[(8)] = inst_46913);

return statearr_47004;
})();
if(cljs.core.truth_(inst_46914)){
var statearr_47005_48169 = state_47001__$1;
(statearr_47005_48169[(1)] = (22));

} else {
var statearr_47006_48170 = state_47001__$1;
(statearr_47006_48170[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (27))){
var inst_46869 = (state_47001[(9)]);
var inst_46944 = (state_47001[(10)]);
var inst_46949 = (state_47001[(11)]);
var inst_46942 = (state_47001[(12)]);
var inst_46949__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_46942,inst_46944);
var inst_46950 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_46949__$1,inst_46869,done);
var state_47001__$1 = (function (){var statearr_47007 = state_47001;
(statearr_47007[(11)] = inst_46949__$1);

return statearr_47007;
})();
if(cljs.core.truth_(inst_46950)){
var statearr_47008_48171 = state_47001__$1;
(statearr_47008_48171[(1)] = (30));

} else {
var statearr_47009_48172 = state_47001__$1;
(statearr_47009_48172[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (1))){
var state_47001__$1 = state_47001;
var statearr_47010_48173 = state_47001__$1;
(statearr_47010_48173[(2)] = null);

(statearr_47010_48173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (24))){
var inst_46900 = (state_47001[(7)]);
var inst_46919 = (state_47001[(2)]);
var inst_46920 = cljs.core.next(inst_46900);
var inst_46878 = inst_46920;
var inst_46879 = null;
var inst_46880 = (0);
var inst_46881 = (0);
var state_47001__$1 = (function (){var statearr_47011 = state_47001;
(statearr_47011[(13)] = inst_46881);

(statearr_47011[(14)] = inst_46919);

(statearr_47011[(15)] = inst_46880);

(statearr_47011[(16)] = inst_46878);

(statearr_47011[(17)] = inst_46879);

return statearr_47011;
})();
var statearr_47012_48178 = state_47001__$1;
(statearr_47012_48178[(2)] = null);

(statearr_47012_48178[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (39))){
var state_47001__$1 = state_47001;
var statearr_47016_48179 = state_47001__$1;
(statearr_47016_48179[(2)] = null);

(statearr_47016_48179[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (4))){
var inst_46869 = (state_47001[(9)]);
var inst_46869__$1 = (state_47001[(2)]);
var inst_46870 = (inst_46869__$1 == null);
var state_47001__$1 = (function (){var statearr_47017 = state_47001;
(statearr_47017[(9)] = inst_46869__$1);

return statearr_47017;
})();
if(cljs.core.truth_(inst_46870)){
var statearr_47018_48180 = state_47001__$1;
(statearr_47018_48180[(1)] = (5));

} else {
var statearr_47019_48181 = state_47001__$1;
(statearr_47019_48181[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (15))){
var inst_46881 = (state_47001[(13)]);
var inst_46880 = (state_47001[(15)]);
var inst_46878 = (state_47001[(16)]);
var inst_46879 = (state_47001[(17)]);
var inst_46896 = (state_47001[(2)]);
var inst_46897 = (inst_46881 + (1));
var tmp47013 = inst_46880;
var tmp47014 = inst_46878;
var tmp47015 = inst_46879;
var inst_46878__$1 = tmp47014;
var inst_46879__$1 = tmp47015;
var inst_46880__$1 = tmp47013;
var inst_46881__$1 = inst_46897;
var state_47001__$1 = (function (){var statearr_47020 = state_47001;
(statearr_47020[(18)] = inst_46896);

(statearr_47020[(13)] = inst_46881__$1);

(statearr_47020[(15)] = inst_46880__$1);

(statearr_47020[(16)] = inst_46878__$1);

(statearr_47020[(17)] = inst_46879__$1);

return statearr_47020;
})();
var statearr_47021_48185 = state_47001__$1;
(statearr_47021_48185[(2)] = null);

(statearr_47021_48185[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (21))){
var inst_46923 = (state_47001[(2)]);
var state_47001__$1 = state_47001;
var statearr_47025_48186 = state_47001__$1;
(statearr_47025_48186[(2)] = inst_46923);

(statearr_47025_48186[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (31))){
var inst_46949 = (state_47001[(11)]);
var inst_46953 = done(null);
var inst_46954 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_46949);
var state_47001__$1 = (function (){var statearr_47026 = state_47001;
(statearr_47026[(19)] = inst_46953);

return statearr_47026;
})();
var statearr_47027_48187 = state_47001__$1;
(statearr_47027_48187[(2)] = inst_46954);

(statearr_47027_48187[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (32))){
var inst_46941 = (state_47001[(20)]);
var inst_46944 = (state_47001[(10)]);
var inst_46942 = (state_47001[(12)]);
var inst_46943 = (state_47001[(21)]);
var inst_46956 = (state_47001[(2)]);
var inst_46957 = (inst_46944 + (1));
var tmp47022 = inst_46941;
var tmp47023 = inst_46942;
var tmp47024 = inst_46943;
var inst_46941__$1 = tmp47022;
var inst_46942__$1 = tmp47023;
var inst_46943__$1 = tmp47024;
var inst_46944__$1 = inst_46957;
var state_47001__$1 = (function (){var statearr_47028 = state_47001;
(statearr_47028[(20)] = inst_46941__$1);

(statearr_47028[(10)] = inst_46944__$1);

(statearr_47028[(12)] = inst_46942__$1);

(statearr_47028[(22)] = inst_46956);

(statearr_47028[(21)] = inst_46943__$1);

return statearr_47028;
})();
var statearr_47029_48191 = state_47001__$1;
(statearr_47029_48191[(2)] = null);

(statearr_47029_48191[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (40))){
var inst_46969 = (state_47001[(23)]);
var inst_46973 = done(null);
var inst_46974 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_46969);
var state_47001__$1 = (function (){var statearr_47030 = state_47001;
(statearr_47030[(24)] = inst_46973);

return statearr_47030;
})();
var statearr_47031_48192 = state_47001__$1;
(statearr_47031_48192[(2)] = inst_46974);

(statearr_47031_48192[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (33))){
var inst_46960 = (state_47001[(25)]);
var inst_46962 = cljs.core.chunked_seq_QMARK_(inst_46960);
var state_47001__$1 = state_47001;
if(inst_46962){
var statearr_47032_48196 = state_47001__$1;
(statearr_47032_48196[(1)] = (36));

} else {
var statearr_47033_48197 = state_47001__$1;
(statearr_47033_48197[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (13))){
var inst_46890 = (state_47001[(26)]);
var inst_46893 = cljs.core.async.close_BANG_(inst_46890);
var state_47001__$1 = state_47001;
var statearr_47034_48198 = state_47001__$1;
(statearr_47034_48198[(2)] = inst_46893);

(statearr_47034_48198[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (22))){
var inst_46913 = (state_47001[(8)]);
var inst_46916 = cljs.core.async.close_BANG_(inst_46913);
var state_47001__$1 = state_47001;
var statearr_47035_48199 = state_47001__$1;
(statearr_47035_48199[(2)] = inst_46916);

(statearr_47035_48199[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (36))){
var inst_46960 = (state_47001[(25)]);
var inst_46964 = cljs.core.chunk_first(inst_46960);
var inst_46965 = cljs.core.chunk_rest(inst_46960);
var inst_46966 = cljs.core.count(inst_46964);
var inst_46941 = inst_46965;
var inst_46942 = inst_46964;
var inst_46943 = inst_46966;
var inst_46944 = (0);
var state_47001__$1 = (function (){var statearr_47036 = state_47001;
(statearr_47036[(20)] = inst_46941);

(statearr_47036[(10)] = inst_46944);

(statearr_47036[(12)] = inst_46942);

(statearr_47036[(21)] = inst_46943);

return statearr_47036;
})();
var statearr_47037_48203 = state_47001__$1;
(statearr_47037_48203[(2)] = null);

(statearr_47037_48203[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (41))){
var inst_46960 = (state_47001[(25)]);
var inst_46976 = (state_47001[(2)]);
var inst_46977 = cljs.core.next(inst_46960);
var inst_46941 = inst_46977;
var inst_46942 = null;
var inst_46943 = (0);
var inst_46944 = (0);
var state_47001__$1 = (function (){var statearr_47038 = state_47001;
(statearr_47038[(20)] = inst_46941);

(statearr_47038[(27)] = inst_46976);

(statearr_47038[(10)] = inst_46944);

(statearr_47038[(12)] = inst_46942);

(statearr_47038[(21)] = inst_46943);

return statearr_47038;
})();
var statearr_47039_48206 = state_47001__$1;
(statearr_47039_48206[(2)] = null);

(statearr_47039_48206[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (43))){
var state_47001__$1 = state_47001;
var statearr_47040_48207 = state_47001__$1;
(statearr_47040_48207[(2)] = null);

(statearr_47040_48207[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (29))){
var inst_46985 = (state_47001[(2)]);
var state_47001__$1 = state_47001;
var statearr_47041_48208 = state_47001__$1;
(statearr_47041_48208[(2)] = inst_46985);

(statearr_47041_48208[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (44))){
var inst_46994 = (state_47001[(2)]);
var state_47001__$1 = (function (){var statearr_47042 = state_47001;
(statearr_47042[(28)] = inst_46994);

return statearr_47042;
})();
var statearr_47043_48209 = state_47001__$1;
(statearr_47043_48209[(2)] = null);

(statearr_47043_48209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (6))){
var inst_46933 = (state_47001[(29)]);
var inst_46932 = cljs.core.deref(cs);
var inst_46933__$1 = cljs.core.keys(inst_46932);
var inst_46934 = cljs.core.count(inst_46933__$1);
var inst_46935 = cljs.core.reset_BANG_(dctr,inst_46934);
var inst_46940 = cljs.core.seq(inst_46933__$1);
var inst_46941 = inst_46940;
var inst_46942 = null;
var inst_46943 = (0);
var inst_46944 = (0);
var state_47001__$1 = (function (){var statearr_47044 = state_47001;
(statearr_47044[(20)] = inst_46941);

(statearr_47044[(10)] = inst_46944);

(statearr_47044[(12)] = inst_46942);

(statearr_47044[(30)] = inst_46935);

(statearr_47044[(29)] = inst_46933__$1);

(statearr_47044[(21)] = inst_46943);

return statearr_47044;
})();
var statearr_47045_48216 = state_47001__$1;
(statearr_47045_48216[(2)] = null);

(statearr_47045_48216[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (28))){
var inst_46960 = (state_47001[(25)]);
var inst_46941 = (state_47001[(20)]);
var inst_46960__$1 = cljs.core.seq(inst_46941);
var state_47001__$1 = (function (){var statearr_47046 = state_47001;
(statearr_47046[(25)] = inst_46960__$1);

return statearr_47046;
})();
if(inst_46960__$1){
var statearr_47047_48217 = state_47001__$1;
(statearr_47047_48217[(1)] = (33));

} else {
var statearr_47048_48218 = state_47001__$1;
(statearr_47048_48218[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (25))){
var inst_46944 = (state_47001[(10)]);
var inst_46943 = (state_47001[(21)]);
var inst_46946 = (inst_46944 < inst_46943);
var inst_46947 = inst_46946;
var state_47001__$1 = state_47001;
if(cljs.core.truth_(inst_46947)){
var statearr_47049_48226 = state_47001__$1;
(statearr_47049_48226[(1)] = (27));

} else {
var statearr_47050_48227 = state_47001__$1;
(statearr_47050_48227[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (34))){
var state_47001__$1 = state_47001;
var statearr_47051_48228 = state_47001__$1;
(statearr_47051_48228[(2)] = null);

(statearr_47051_48228[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (17))){
var state_47001__$1 = state_47001;
var statearr_47052_48229 = state_47001__$1;
(statearr_47052_48229[(2)] = null);

(statearr_47052_48229[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (3))){
var inst_46999 = (state_47001[(2)]);
var state_47001__$1 = state_47001;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47001__$1,inst_46999);
} else {
if((state_val_47002 === (12))){
var inst_46928 = (state_47001[(2)]);
var state_47001__$1 = state_47001;
var statearr_47053_48236 = state_47001__$1;
(statearr_47053_48236[(2)] = inst_46928);

(statearr_47053_48236[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (2))){
var state_47001__$1 = state_47001;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47001__$1,(4),ch);
} else {
if((state_val_47002 === (23))){
var state_47001__$1 = state_47001;
var statearr_47054_48237 = state_47001__$1;
(statearr_47054_48237[(2)] = null);

(statearr_47054_48237[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (35))){
var inst_46983 = (state_47001[(2)]);
var state_47001__$1 = state_47001;
var statearr_47055_48241 = state_47001__$1;
(statearr_47055_48241[(2)] = inst_46983);

(statearr_47055_48241[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (19))){
var inst_46900 = (state_47001[(7)]);
var inst_46904 = cljs.core.chunk_first(inst_46900);
var inst_46905 = cljs.core.chunk_rest(inst_46900);
var inst_46906 = cljs.core.count(inst_46904);
var inst_46878 = inst_46905;
var inst_46879 = inst_46904;
var inst_46880 = inst_46906;
var inst_46881 = (0);
var state_47001__$1 = (function (){var statearr_47056 = state_47001;
(statearr_47056[(13)] = inst_46881);

(statearr_47056[(15)] = inst_46880);

(statearr_47056[(16)] = inst_46878);

(statearr_47056[(17)] = inst_46879);

return statearr_47056;
})();
var statearr_47057_48246 = state_47001__$1;
(statearr_47057_48246[(2)] = null);

(statearr_47057_48246[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (11))){
var inst_46878 = (state_47001[(16)]);
var inst_46900 = (state_47001[(7)]);
var inst_46900__$1 = cljs.core.seq(inst_46878);
var state_47001__$1 = (function (){var statearr_47058 = state_47001;
(statearr_47058[(7)] = inst_46900__$1);

return statearr_47058;
})();
if(inst_46900__$1){
var statearr_47059_48253 = state_47001__$1;
(statearr_47059_48253[(1)] = (16));

} else {
var statearr_47060_48254 = state_47001__$1;
(statearr_47060_48254[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (9))){
var inst_46930 = (state_47001[(2)]);
var state_47001__$1 = state_47001;
var statearr_47061_48255 = state_47001__$1;
(statearr_47061_48255[(2)] = inst_46930);

(statearr_47061_48255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (5))){
var inst_46876 = cljs.core.deref(cs);
var inst_46877 = cljs.core.seq(inst_46876);
var inst_46878 = inst_46877;
var inst_46879 = null;
var inst_46880 = (0);
var inst_46881 = (0);
var state_47001__$1 = (function (){var statearr_47062 = state_47001;
(statearr_47062[(13)] = inst_46881);

(statearr_47062[(15)] = inst_46880);

(statearr_47062[(16)] = inst_46878);

(statearr_47062[(17)] = inst_46879);

return statearr_47062;
})();
var statearr_47063_48262 = state_47001__$1;
(statearr_47063_48262[(2)] = null);

(statearr_47063_48262[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (14))){
var state_47001__$1 = state_47001;
var statearr_47064_48263 = state_47001__$1;
(statearr_47064_48263[(2)] = null);

(statearr_47064_48263[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (45))){
var inst_46991 = (state_47001[(2)]);
var state_47001__$1 = state_47001;
var statearr_47065_48264 = state_47001__$1;
(statearr_47065_48264[(2)] = inst_46991);

(statearr_47065_48264[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (26))){
var inst_46933 = (state_47001[(29)]);
var inst_46987 = (state_47001[(2)]);
var inst_46988 = cljs.core.seq(inst_46933);
var state_47001__$1 = (function (){var statearr_47066 = state_47001;
(statearr_47066[(31)] = inst_46987);

return statearr_47066;
})();
if(inst_46988){
var statearr_47067_48265 = state_47001__$1;
(statearr_47067_48265[(1)] = (42));

} else {
var statearr_47068_48272 = state_47001__$1;
(statearr_47068_48272[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (16))){
var inst_46900 = (state_47001[(7)]);
var inst_46902 = cljs.core.chunked_seq_QMARK_(inst_46900);
var state_47001__$1 = state_47001;
if(inst_46902){
var statearr_47069_48273 = state_47001__$1;
(statearr_47069_48273[(1)] = (19));

} else {
var statearr_47070_48274 = state_47001__$1;
(statearr_47070_48274[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (38))){
var inst_46980 = (state_47001[(2)]);
var state_47001__$1 = state_47001;
var statearr_47071_48278 = state_47001__$1;
(statearr_47071_48278[(2)] = inst_46980);

(statearr_47071_48278[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (30))){
var state_47001__$1 = state_47001;
var statearr_47072_48282 = state_47001__$1;
(statearr_47072_48282[(2)] = null);

(statearr_47072_48282[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (10))){
var inst_46881 = (state_47001[(13)]);
var inst_46879 = (state_47001[(17)]);
var inst_46889 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_46879,inst_46881);
var inst_46890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46889,(0),null);
var inst_46891 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46889,(1),null);
var state_47001__$1 = (function (){var statearr_47073 = state_47001;
(statearr_47073[(26)] = inst_46890);

return statearr_47073;
})();
if(cljs.core.truth_(inst_46891)){
var statearr_47074_48283 = state_47001__$1;
(statearr_47074_48283[(1)] = (13));

} else {
var statearr_47075_48284 = state_47001__$1;
(statearr_47075_48284[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (18))){
var inst_46926 = (state_47001[(2)]);
var state_47001__$1 = state_47001;
var statearr_47076_48285 = state_47001__$1;
(statearr_47076_48285[(2)] = inst_46926);

(statearr_47076_48285[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (42))){
var state_47001__$1 = state_47001;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47001__$1,(45),dchan);
} else {
if((state_val_47002 === (37))){
var inst_46960 = (state_47001[(25)]);
var inst_46869 = (state_47001[(9)]);
var inst_46969 = (state_47001[(23)]);
var inst_46969__$1 = cljs.core.first(inst_46960);
var inst_46970 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_46969__$1,inst_46869,done);
var state_47001__$1 = (function (){var statearr_47077 = state_47001;
(statearr_47077[(23)] = inst_46969__$1);

return statearr_47077;
})();
if(cljs.core.truth_(inst_46970)){
var statearr_47078_48287 = state_47001__$1;
(statearr_47078_48287[(1)] = (39));

} else {
var statearr_47079_48288 = state_47001__$1;
(statearr_47079_48288[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (8))){
var inst_46881 = (state_47001[(13)]);
var inst_46880 = (state_47001[(15)]);
var inst_46883 = (inst_46881 < inst_46880);
var inst_46884 = inst_46883;
var state_47001__$1 = state_47001;
if(cljs.core.truth_(inst_46884)){
var statearr_47080_48289 = state_47001__$1;
(statearr_47080_48289[(1)] = (10));

} else {
var statearr_47081_48290 = state_47001__$1;
(statearr_47081_48290[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__46339__auto__ = null;
var cljs$core$async$mult_$_state_machine__46339__auto____0 = (function (){
var statearr_47082 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47082[(0)] = cljs$core$async$mult_$_state_machine__46339__auto__);

(statearr_47082[(1)] = (1));

return statearr_47082;
});
var cljs$core$async$mult_$_state_machine__46339__auto____1 = (function (state_47001){
while(true){
var ret_value__46340__auto__ = (function (){try{while(true){
var result__46341__auto__ = switch__46338__auto__(state_47001);
if(cljs.core.keyword_identical_QMARK_(result__46341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46341__auto__;
}
break;
}
}catch (e47083){if((e47083 instanceof Object)){
var ex__46342__auto__ = e47083;
var statearr_47084_48291 = state_47001;
(statearr_47084_48291[(5)] = ex__46342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47001);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47083;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48292 = state_47001;
state_47001 = G__48292;
continue;
} else {
return ret_value__46340__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__46339__auto__ = function(state_47001){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__46339__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__46339__auto____1.call(this,state_47001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__46339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__46339__auto____0;
cljs$core$async$mult_$_state_machine__46339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__46339__auto____1;
return cljs$core$async$mult_$_state_machine__46339__auto__;
})()
})();
var state__46408__auto__ = (function (){var statearr_47085 = (f__46407__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46407__auto__.cljs$core$IFn$_invoke$arity$0() : f__46407__auto__.call(null));
(statearr_47085[(6)] = c__46406__auto___48167);

return statearr_47085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46408__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__47087 = arguments.length;
switch (G__47087) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4488__auto__.call(null,m,state_map));
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4485__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4488__auto__.call(null,m,mode));
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4485__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___48296 = arguments.length;
var i__4790__auto___48297 = (0);
while(true){
if((i__4790__auto___48297 < len__4789__auto___48296)){
args__4795__auto__.push((arguments[i__4790__auto___48297]));

var G__48298 = (i__4790__auto___48297 + (1));
i__4790__auto___48297 = G__48298;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__47092){
var map__47093 = p__47092;
var map__47093__$1 = (((((!((map__47093 == null))))?(((((map__47093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47093):map__47093);
var opts = map__47093__$1;
var statearr_47095_48299 = state;
(statearr_47095_48299[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_47096_48300 = state;
(statearr_47096_48300[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_47097_48301 = state;
(statearr_47097_48301[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq47088){
var G__47089 = cljs.core.first(seq47088);
var seq47088__$1 = cljs.core.next(seq47088);
var G__47090 = cljs.core.first(seq47088__$1);
var seq47088__$2 = cljs.core.next(seq47088__$1);
var G__47091 = cljs.core.first(seq47088__$2);
var seq47088__$3 = cljs.core.next(seq47088__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47089,G__47090,G__47091,seq47088__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47098 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47098 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta47099){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta47099 = meta47099;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47098.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47100,meta47099__$1){
var self__ = this;
var _47100__$1 = this;
return (new cljs.core.async.t_cljs$core$async47098(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta47099__$1));
}));

(cljs.core.async.t_cljs$core$async47098.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47100){
var self__ = this;
var _47100__$1 = this;
return self__.meta47099;
}));

(cljs.core.async.t_cljs$core$async47098.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47098.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async47098.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47098.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47098.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47098.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47098.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47098.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47098.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta47099","meta47099",-233269851,null)], null);
}));

(cljs.core.async.t_cljs$core$async47098.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47098.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47098");

(cljs.core.async.t_cljs$core$async47098.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async47098");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47098.
 */
cljs.core.async.__GT_t_cljs$core$async47098 = (function cljs$core$async$mix_$___GT_t_cljs$core$async47098(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta47099){
return (new cljs.core.async.t_cljs$core$async47098(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta47099));
});

}

return (new cljs.core.async.t_cljs$core$async47098(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46406__auto___48326 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46407__auto__ = (function (){var switch__46338__auto__ = (function (state_47202){
var state_val_47203 = (state_47202[(1)]);
if((state_val_47203 === (7))){
var inst_47117 = (state_47202[(2)]);
var state_47202__$1 = state_47202;
var statearr_47204_48333 = state_47202__$1;
(statearr_47204_48333[(2)] = inst_47117);

(statearr_47204_48333[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47203 === (20))){
var inst_47129 = (state_47202[(7)]);
var state_47202__$1 = state_47202;
var statearr_47205_48334 = state_47202__$1;
(statearr_47205_48334[(2)] = inst_47129);

(statearr_47205_48334[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47203 === (27))){
var state_47202__$1 = state_47202;
var statearr_47206_48335 = state_47202__$1;
(statearr_47206_48335[(2)] = null);

(statearr_47206_48335[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47203 === (1))){
var inst_47104 = (state_47202[(8)]);
var inst_47104__$1 = calc_state();
var inst_47106 = (inst_47104__$1 == null);
var inst_47107 = cljs.core.not(inst_47106);
var state_47202__$1 = (function (){var statearr_47207 = state_47202;
(statearr_47207[(8)] = inst_47104__$1);

return statearr_47207;
})();
if(inst_47107){
var statearr_47208_48336 = state_47202__$1;
(statearr_47208_48336[(1)] = (2));

} else {
var statearr_47209_48337 = state_47202__$1;
(statearr_47209_48337[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47203 === (24))){
var inst_47176 = (state_47202[(9)]);
var inst_47162 = (state_47202[(10)]);
var inst_47153 = (state_47202[(11)]);
var inst_47176__$1 = (inst_47153.cljs$core$IFn$_invoke$arity$1 ? inst_47153.cljs$core$IFn$_invoke$arity$1(inst_47162) : inst_47153.call(null,inst_47162));
var state_47202__$1 = (function (){var statearr_47210 = state_47202;
(statearr_47210[(9)] = inst_47176__$1);

return statearr_47210;
})();
if(cljs.core.truth_(inst_47176__$1)){
var statearr_47211_48338 = state_47202__$1;
(statearr_47211_48338[(1)] = (29));

} else {
var statearr_47212_48339 = state_47202__$1;
(statearr_47212_48339[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47203 === (4))){
var inst_47120 = (state_47202[(2)]);
var state_47202__$1 = state_47202;
if(cljs.core.truth_(inst_47120)){
var statearr_47213_48340 = state_47202__$1;
(statearr_47213_48340[(1)] = (8));

} else {
var statearr_47214_48341 = state_47202__$1;
(statearr_47214_48341[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47203 === (15))){
var inst_47147 = (state_47202[(2)]);
var state_47202__$1 = state_47202;
if(cljs.core.truth_(inst_47147)){
var statearr_47215_48342 = state_47202__$1;
(statearr_47215_48342[(1)] = (19));

} else {
var statearr_47216_48343 = state_47202__$1;
(statearr_47216_48343[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47203 === (21))){
var inst_47152 = (state_47202[(12)]);
var inst_47152__$1 = (state_47202[(2)]);
var inst_47153 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47152__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47154 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47152__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47155 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47152__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_47202__$1 = (function (){var statearr_47217 = state_47202;
(statearr_47217[(12)] = inst_47152__$1);

(statearr_47217[(13)] = inst_47154);

(statearr_47217[(11)] = inst_47153);

return statearr_47217;
})();
return cljs.core.async.ioc_alts_BANG_(state_47202__$1,(22),inst_47155);
} else {
if((state_val_47203 === (31))){
var inst_47184 = (state_47202[(2)]);
var state_47202__$1 = state_47202;
if(cljs.core.truth_(inst_47184)){
var statearr_47218_48350 = state_47202__$1;
(statearr_47218_48350[(1)] = (32));

} else {
var statearr_47219_48351 = state_47202__$1;
(statearr_47219_48351[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47203 === (32))){
var inst_47161 = (state_47202[(14)]);
var state_47202__$1 = state_47202;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47202__$1,(35),out,inst_47161);
} else {
if((state_val_47203 === (33))){
var inst_47152 = (state_47202[(12)]);
var inst_47129 = inst_47152;
var state_47202__$1 = (function (){var statearr_47220 = state_47202;
(statearr_47220[(7)] = inst_47129);

return statearr_47220;
})();
var statearr_47221_48352 = state_47202__$1;
(statearr_47221_48352[(2)] = null);

(statearr_47221_48352[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47203 === (13))){
var inst_47129 = (state_47202[(7)]);
var inst_47136 = inst_47129.cljs$lang$protocol_mask$partition0$;
var inst_47137 = (inst_47136 & (64));
var inst_47138 = inst_47129.cljs$core$ISeq$;
var inst_47139 = (cljs.core.PROTOCOL_SENTINEL === inst_47138);
var inst_47140 = ((inst_47137) || (inst_47139));
var state_47202__$1 = state_47202;
if(cljs.core.truth_(inst_47140)){
var statearr_47222_48353 = state_47202__$1;
(statearr_47222_48353[(1)] = (16));

} else {
var statearr_47223_48354 = state_47202__$1;
(statearr_47223_48354[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47203 === (22))){
var inst_47162 = (state_47202[(10)]);
var inst_47161 = (state_47202[(14)]);
var inst_47160 = (state_47202[(2)]);
var inst_47161__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47160,(0),null);
var inst_47162__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47160,(1),null);
var inst_47163 = (inst_47161__$1 == null);
var inst_47164 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47162__$1,change);
var inst_47165 = ((inst_47163) || (inst_47164));
var state_47202__$1 = (function (){var statearr_47224 = state_47202;
(statearr_47224[(10)] = inst_47162__$1);

(statearr_47224[(14)] = inst_47161__$1);

return statearr_47224;
})();
if(cljs.core.truth_(inst_47165)){
var statearr_47225_48355 = state_47202__$1;
(statearr_47225_48355[(1)] = (23));

} else {
var statearr_47226_48356 = state_47202__$1;
(statearr_47226_48356[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47203 === (36))){
var inst_47152 = (state_47202[(12)]);
var inst_47129 = inst_47152;
var state_47202__$1 = (function (){var statearr_47227 = state_47202;
(statearr_47227[(7)] = inst_47129);

return statearr_47227;
})();
var statearr_47228_48363 = state_47202__$1;
(statearr_47228_48363[(2)] = null);

(statearr_47228_48363[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47203 === (29))){
var inst_47176 = (state_47202[(9)]);
var state_47202__$1 = state_47202;
var statearr_47229_48364 = state_47202__$1;
(statearr_47229_48364[(2)] = inst_47176);

(statearr_47229_48364[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47203 === (6))){
var state_47202__$1 = state_47202;
var statearr_47230_48365 = state_47202__$1;
(statearr_47230_48365[(2)] = false);

(statearr_47230_48365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47203 === (28))){
var inst_47172 = (state_47202[(2)]);
var inst_47173 = calc_state();
var inst_47129 = inst_47173;
var state_47202__$1 = (function (){var statearr_47231 = state_47202;
(statearr_47231[(15)] = inst_47172);

(statearr_47231[(7)] = inst_47129);

return statearr_47231;
})();
var statearr_47232_48366 = state_47202__$1;
(statearr_47232_48366[(2)] = null);

(statearr_47232_48366[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47203 === (25))){
var inst_47198 = (state_47202[(2)]);
var state_47202__$1 = state_47202;
var statearr_47233_48367 = state_47202__$1;
(statearr_47233_48367[(2)] = inst_47198);

(statearr_47233_48367[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47203 === (34))){
var inst_47196 = (state_47202[(2)]);
var state_47202__$1 = state_47202;
var statearr_47234_48368 = state_47202__$1;
(statearr_47234_48368[(2)] = inst_47196);

(statearr_47234_48368[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47203 === (17))){
var state_47202__$1 = state_47202;
var statearr_47235_48369 = state_47202__$1;
(statearr_47235_48369[(2)] = false);

(statearr_47235_48369[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47203 === (3))){
var state_47202__$1 = state_47202;
var statearr_47236_48370 = state_47202__$1;
(statearr_47236_48370[(2)] = false);

(statearr_47236_48370[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47203 === (12))){
var inst_47200 = (state_47202[(2)]);
var state_47202__$1 = state_47202;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47202__$1,inst_47200);
} else {
if((state_val_47203 === (2))){
var inst_47104 = (state_47202[(8)]);
var inst_47109 = inst_47104.cljs$lang$protocol_mask$partition0$;
var inst_47110 = (inst_47109 & (64));
var inst_47111 = inst_47104.cljs$core$ISeq$;
var inst_47112 = (cljs.core.PROTOCOL_SENTINEL === inst_47111);
var inst_47113 = ((inst_47110) || (inst_47112));
var state_47202__$1 = state_47202;
if(cljs.core.truth_(inst_47113)){
var statearr_47237_48377 = state_47202__$1;
(statearr_47237_48377[(1)] = (5));

} else {
var statearr_47238_48378 = state_47202__$1;
(statearr_47238_48378[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47203 === (23))){
var inst_47161 = (state_47202[(14)]);
var inst_47167 = (inst_47161 == null);
var state_47202__$1 = state_47202;
if(cljs.core.truth_(inst_47167)){
var statearr_47239_48379 = state_47202__$1;
(statearr_47239_48379[(1)] = (26));

} else {
var statearr_47240_48380 = state_47202__$1;
(statearr_47240_48380[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47203 === (35))){
var inst_47187 = (state_47202[(2)]);
var state_47202__$1 = state_47202;
if(cljs.core.truth_(inst_47187)){
var statearr_47241_48381 = state_47202__$1;
(statearr_47241_48381[(1)] = (36));

} else {
var statearr_47242_48382 = state_47202__$1;
(statearr_47242_48382[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47203 === (19))){
var inst_47129 = (state_47202[(7)]);
var inst_47149 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_47129);
var state_47202__$1 = state_47202;
var statearr_47243_48383 = state_47202__$1;
(statearr_47243_48383[(2)] = inst_47149);

(statearr_47243_48383[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47203 === (11))){
var inst_47129 = (state_47202[(7)]);
var inst_47133 = (inst_47129 == null);
var inst_47134 = cljs.core.not(inst_47133);
var state_47202__$1 = state_47202;
if(inst_47134){
var statearr_47244_48384 = state_47202__$1;
(statearr_47244_48384[(1)] = (13));

} else {
var statearr_47245_48385 = state_47202__$1;
(statearr_47245_48385[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47203 === (9))){
var inst_47104 = (state_47202[(8)]);
var state_47202__$1 = state_47202;
var statearr_47246_48386 = state_47202__$1;
(statearr_47246_48386[(2)] = inst_47104);

(statearr_47246_48386[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47203 === (5))){
var state_47202__$1 = state_47202;
var statearr_47247_48387 = state_47202__$1;
(statearr_47247_48387[(2)] = true);

(statearr_47247_48387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47203 === (14))){
var state_47202__$1 = state_47202;
var statearr_47248_48388 = state_47202__$1;
(statearr_47248_48388[(2)] = false);

(statearr_47248_48388[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47203 === (26))){
var inst_47162 = (state_47202[(10)]);
var inst_47169 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_47162);
var state_47202__$1 = state_47202;
var statearr_47249_48389 = state_47202__$1;
(statearr_47249_48389[(2)] = inst_47169);

(statearr_47249_48389[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47203 === (16))){
var state_47202__$1 = state_47202;
var statearr_47250_48390 = state_47202__$1;
(statearr_47250_48390[(2)] = true);

(statearr_47250_48390[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47203 === (38))){
var inst_47192 = (state_47202[(2)]);
var state_47202__$1 = state_47202;
var statearr_47251_48391 = state_47202__$1;
(statearr_47251_48391[(2)] = inst_47192);

(statearr_47251_48391[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47203 === (30))){
var inst_47154 = (state_47202[(13)]);
var inst_47162 = (state_47202[(10)]);
var inst_47153 = (state_47202[(11)]);
var inst_47179 = cljs.core.empty_QMARK_(inst_47153);
var inst_47180 = (inst_47154.cljs$core$IFn$_invoke$arity$1 ? inst_47154.cljs$core$IFn$_invoke$arity$1(inst_47162) : inst_47154.call(null,inst_47162));
var inst_47181 = cljs.core.not(inst_47180);
var inst_47182 = ((inst_47179) && (inst_47181));
var state_47202__$1 = state_47202;
var statearr_47252_48392 = state_47202__$1;
(statearr_47252_48392[(2)] = inst_47182);

(statearr_47252_48392[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47203 === (10))){
var inst_47104 = (state_47202[(8)]);
var inst_47125 = (state_47202[(2)]);
var inst_47126 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47125,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47127 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47125,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47128 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47125,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_47129 = inst_47104;
var state_47202__$1 = (function (){var statearr_47253 = state_47202;
(statearr_47253[(7)] = inst_47129);

(statearr_47253[(16)] = inst_47127);

(statearr_47253[(17)] = inst_47126);

(statearr_47253[(18)] = inst_47128);

return statearr_47253;
})();
var statearr_47254_48394 = state_47202__$1;
(statearr_47254_48394[(2)] = null);

(statearr_47254_48394[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47203 === (18))){
var inst_47144 = (state_47202[(2)]);
var state_47202__$1 = state_47202;
var statearr_47255_48395 = state_47202__$1;
(statearr_47255_48395[(2)] = inst_47144);

(statearr_47255_48395[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47203 === (37))){
var state_47202__$1 = state_47202;
var statearr_47256_48396 = state_47202__$1;
(statearr_47256_48396[(2)] = null);

(statearr_47256_48396[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47203 === (8))){
var inst_47104 = (state_47202[(8)]);
var inst_47122 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_47104);
var state_47202__$1 = state_47202;
var statearr_47257_48397 = state_47202__$1;
(statearr_47257_48397[(2)] = inst_47122);

(statearr_47257_48397[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__46339__auto__ = null;
var cljs$core$async$mix_$_state_machine__46339__auto____0 = (function (){
var statearr_47258 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47258[(0)] = cljs$core$async$mix_$_state_machine__46339__auto__);

(statearr_47258[(1)] = (1));

return statearr_47258;
});
var cljs$core$async$mix_$_state_machine__46339__auto____1 = (function (state_47202){
while(true){
var ret_value__46340__auto__ = (function (){try{while(true){
var result__46341__auto__ = switch__46338__auto__(state_47202);
if(cljs.core.keyword_identical_QMARK_(result__46341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46341__auto__;
}
break;
}
}catch (e47259){if((e47259 instanceof Object)){
var ex__46342__auto__ = e47259;
var statearr_47260_48403 = state_47202;
(statearr_47260_48403[(5)] = ex__46342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47202);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47259;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48404 = state_47202;
state_47202 = G__48404;
continue;
} else {
return ret_value__46340__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__46339__auto__ = function(state_47202){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__46339__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__46339__auto____1.call(this,state_47202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__46339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__46339__auto____0;
cljs$core$async$mix_$_state_machine__46339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__46339__auto____1;
return cljs$core$async$mix_$_state_machine__46339__auto__;
})()
})();
var state__46408__auto__ = (function (){var statearr_47261 = (f__46407__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46407__auto__.cljs$core$IFn$_invoke$arity$0() : f__46407__auto__.call(null));
(statearr_47261[(6)] = c__46406__auto___48326);

return statearr_47261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46408__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4488__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4485__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4488__auto__.call(null,p,v,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4485__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__47263 = arguments.length;
switch (G__47263) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4488__auto__.call(null,p));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4485__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4488__auto__.call(null,p,v));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4485__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__47266 = arguments.length;
switch (G__47266) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__47264_SHARP_){
if(cljs.core.truth_((p1__47264_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__47264_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__47264_SHARP_.call(null,topic)))){
return p1__47264_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__47264_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47267 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47267 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta47268){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta47268 = meta47268;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47267.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47269,meta47268__$1){
var self__ = this;
var _47269__$1 = this;
return (new cljs.core.async.t_cljs$core$async47267(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta47268__$1));
}));

(cljs.core.async.t_cljs$core$async47267.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47269){
var self__ = this;
var _47269__$1 = this;
return self__.meta47268;
}));

(cljs.core.async.t_cljs$core$async47267.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47267.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async47267.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47267.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async47267.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async47267.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async47267.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async47267.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta47268","meta47268",496770785,null)], null);
}));

(cljs.core.async.t_cljs$core$async47267.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47267.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47267");

(cljs.core.async.t_cljs$core$async47267.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async47267");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47267.
 */
cljs.core.async.__GT_t_cljs$core$async47267 = (function cljs$core$async$__GT_t_cljs$core$async47267(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta47268){
return (new cljs.core.async.t_cljs$core$async47267(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta47268));
});

}

return (new cljs.core.async.t_cljs$core$async47267(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46406__auto___48415 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46407__auto__ = (function (){var switch__46338__auto__ = (function (state_47341){
var state_val_47342 = (state_47341[(1)]);
if((state_val_47342 === (7))){
var inst_47337 = (state_47341[(2)]);
var state_47341__$1 = state_47341;
var statearr_47343_48416 = state_47341__$1;
(statearr_47343_48416[(2)] = inst_47337);

(statearr_47343_48416[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47342 === (20))){
var state_47341__$1 = state_47341;
var statearr_47344_48417 = state_47341__$1;
(statearr_47344_48417[(2)] = null);

(statearr_47344_48417[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47342 === (1))){
var state_47341__$1 = state_47341;
var statearr_47345_48418 = state_47341__$1;
(statearr_47345_48418[(2)] = null);

(statearr_47345_48418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47342 === (24))){
var inst_47320 = (state_47341[(7)]);
var inst_47329 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_47320);
var state_47341__$1 = state_47341;
var statearr_47346_48420 = state_47341__$1;
(statearr_47346_48420[(2)] = inst_47329);

(statearr_47346_48420[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47342 === (4))){
var inst_47272 = (state_47341[(8)]);
var inst_47272__$1 = (state_47341[(2)]);
var inst_47273 = (inst_47272__$1 == null);
var state_47341__$1 = (function (){var statearr_47347 = state_47341;
(statearr_47347[(8)] = inst_47272__$1);

return statearr_47347;
})();
if(cljs.core.truth_(inst_47273)){
var statearr_47348_48421 = state_47341__$1;
(statearr_47348_48421[(1)] = (5));

} else {
var statearr_47349_48422 = state_47341__$1;
(statearr_47349_48422[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47342 === (15))){
var inst_47314 = (state_47341[(2)]);
var state_47341__$1 = state_47341;
var statearr_47350_48423 = state_47341__$1;
(statearr_47350_48423[(2)] = inst_47314);

(statearr_47350_48423[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47342 === (21))){
var inst_47334 = (state_47341[(2)]);
var state_47341__$1 = (function (){var statearr_47351 = state_47341;
(statearr_47351[(9)] = inst_47334);

return statearr_47351;
})();
var statearr_47352_48428 = state_47341__$1;
(statearr_47352_48428[(2)] = null);

(statearr_47352_48428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47342 === (13))){
var inst_47296 = (state_47341[(10)]);
var inst_47298 = cljs.core.chunked_seq_QMARK_(inst_47296);
var state_47341__$1 = state_47341;
if(inst_47298){
var statearr_47353_48429 = state_47341__$1;
(statearr_47353_48429[(1)] = (16));

} else {
var statearr_47354_48430 = state_47341__$1;
(statearr_47354_48430[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47342 === (22))){
var inst_47326 = (state_47341[(2)]);
var state_47341__$1 = state_47341;
if(cljs.core.truth_(inst_47326)){
var statearr_47355_48431 = state_47341__$1;
(statearr_47355_48431[(1)] = (23));

} else {
var statearr_47356_48432 = state_47341__$1;
(statearr_47356_48432[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47342 === (6))){
var inst_47320 = (state_47341[(7)]);
var inst_47272 = (state_47341[(8)]);
var inst_47322 = (state_47341[(11)]);
var inst_47320__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_47272) : topic_fn.call(null,inst_47272));
var inst_47321 = cljs.core.deref(mults);
var inst_47322__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47321,inst_47320__$1);
var state_47341__$1 = (function (){var statearr_47357 = state_47341;
(statearr_47357[(7)] = inst_47320__$1);

(statearr_47357[(11)] = inst_47322__$1);

return statearr_47357;
})();
if(cljs.core.truth_(inst_47322__$1)){
var statearr_47358_48433 = state_47341__$1;
(statearr_47358_48433[(1)] = (19));

} else {
var statearr_47359_48434 = state_47341__$1;
(statearr_47359_48434[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47342 === (25))){
var inst_47331 = (state_47341[(2)]);
var state_47341__$1 = state_47341;
var statearr_47360_48435 = state_47341__$1;
(statearr_47360_48435[(2)] = inst_47331);

(statearr_47360_48435[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47342 === (17))){
var inst_47296 = (state_47341[(10)]);
var inst_47305 = cljs.core.first(inst_47296);
var inst_47306 = cljs.core.async.muxch_STAR_(inst_47305);
var inst_47307 = cljs.core.async.close_BANG_(inst_47306);
var inst_47308 = cljs.core.next(inst_47296);
var inst_47282 = inst_47308;
var inst_47283 = null;
var inst_47284 = (0);
var inst_47285 = (0);
var state_47341__$1 = (function (){var statearr_47361 = state_47341;
(statearr_47361[(12)] = inst_47283);

(statearr_47361[(13)] = inst_47285);

(statearr_47361[(14)] = inst_47282);

(statearr_47361[(15)] = inst_47284);

(statearr_47361[(16)] = inst_47307);

return statearr_47361;
})();
var statearr_47362_48443 = state_47341__$1;
(statearr_47362_48443[(2)] = null);

(statearr_47362_48443[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47342 === (3))){
var inst_47339 = (state_47341[(2)]);
var state_47341__$1 = state_47341;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47341__$1,inst_47339);
} else {
if((state_val_47342 === (12))){
var inst_47316 = (state_47341[(2)]);
var state_47341__$1 = state_47341;
var statearr_47363_48444 = state_47341__$1;
(statearr_47363_48444[(2)] = inst_47316);

(statearr_47363_48444[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47342 === (2))){
var state_47341__$1 = state_47341;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47341__$1,(4),ch);
} else {
if((state_val_47342 === (23))){
var state_47341__$1 = state_47341;
var statearr_47364_48448 = state_47341__$1;
(statearr_47364_48448[(2)] = null);

(statearr_47364_48448[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47342 === (19))){
var inst_47272 = (state_47341[(8)]);
var inst_47322 = (state_47341[(11)]);
var inst_47324 = cljs.core.async.muxch_STAR_(inst_47322);
var state_47341__$1 = state_47341;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47341__$1,(22),inst_47324,inst_47272);
} else {
if((state_val_47342 === (11))){
var inst_47296 = (state_47341[(10)]);
var inst_47282 = (state_47341[(14)]);
var inst_47296__$1 = cljs.core.seq(inst_47282);
var state_47341__$1 = (function (){var statearr_47365 = state_47341;
(statearr_47365[(10)] = inst_47296__$1);

return statearr_47365;
})();
if(inst_47296__$1){
var statearr_47366_48452 = state_47341__$1;
(statearr_47366_48452[(1)] = (13));

} else {
var statearr_47367_48453 = state_47341__$1;
(statearr_47367_48453[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47342 === (9))){
var inst_47318 = (state_47341[(2)]);
var state_47341__$1 = state_47341;
var statearr_47368_48457 = state_47341__$1;
(statearr_47368_48457[(2)] = inst_47318);

(statearr_47368_48457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47342 === (5))){
var inst_47279 = cljs.core.deref(mults);
var inst_47280 = cljs.core.vals(inst_47279);
var inst_47281 = cljs.core.seq(inst_47280);
var inst_47282 = inst_47281;
var inst_47283 = null;
var inst_47284 = (0);
var inst_47285 = (0);
var state_47341__$1 = (function (){var statearr_47369 = state_47341;
(statearr_47369[(12)] = inst_47283);

(statearr_47369[(13)] = inst_47285);

(statearr_47369[(14)] = inst_47282);

(statearr_47369[(15)] = inst_47284);

return statearr_47369;
})();
var statearr_47370_48462 = state_47341__$1;
(statearr_47370_48462[(2)] = null);

(statearr_47370_48462[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47342 === (14))){
var state_47341__$1 = state_47341;
var statearr_47374_48463 = state_47341__$1;
(statearr_47374_48463[(2)] = null);

(statearr_47374_48463[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47342 === (16))){
var inst_47296 = (state_47341[(10)]);
var inst_47300 = cljs.core.chunk_first(inst_47296);
var inst_47301 = cljs.core.chunk_rest(inst_47296);
var inst_47302 = cljs.core.count(inst_47300);
var inst_47282 = inst_47301;
var inst_47283 = inst_47300;
var inst_47284 = inst_47302;
var inst_47285 = (0);
var state_47341__$1 = (function (){var statearr_47375 = state_47341;
(statearr_47375[(12)] = inst_47283);

(statearr_47375[(13)] = inst_47285);

(statearr_47375[(14)] = inst_47282);

(statearr_47375[(15)] = inst_47284);

return statearr_47375;
})();
var statearr_47376_48464 = state_47341__$1;
(statearr_47376_48464[(2)] = null);

(statearr_47376_48464[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47342 === (10))){
var inst_47283 = (state_47341[(12)]);
var inst_47285 = (state_47341[(13)]);
var inst_47282 = (state_47341[(14)]);
var inst_47284 = (state_47341[(15)]);
var inst_47290 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_47283,inst_47285);
var inst_47291 = cljs.core.async.muxch_STAR_(inst_47290);
var inst_47292 = cljs.core.async.close_BANG_(inst_47291);
var inst_47293 = (inst_47285 + (1));
var tmp47371 = inst_47283;
var tmp47372 = inst_47282;
var tmp47373 = inst_47284;
var inst_47282__$1 = tmp47372;
var inst_47283__$1 = tmp47371;
var inst_47284__$1 = tmp47373;
var inst_47285__$1 = inst_47293;
var state_47341__$1 = (function (){var statearr_47377 = state_47341;
(statearr_47377[(12)] = inst_47283__$1);

(statearr_47377[(13)] = inst_47285__$1);

(statearr_47377[(17)] = inst_47292);

(statearr_47377[(14)] = inst_47282__$1);

(statearr_47377[(15)] = inst_47284__$1);

return statearr_47377;
})();
var statearr_47378_48465 = state_47341__$1;
(statearr_47378_48465[(2)] = null);

(statearr_47378_48465[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47342 === (18))){
var inst_47311 = (state_47341[(2)]);
var state_47341__$1 = state_47341;
var statearr_47379_48468 = state_47341__$1;
(statearr_47379_48468[(2)] = inst_47311);

(statearr_47379_48468[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47342 === (8))){
var inst_47285 = (state_47341[(13)]);
var inst_47284 = (state_47341[(15)]);
var inst_47287 = (inst_47285 < inst_47284);
var inst_47288 = inst_47287;
var state_47341__$1 = state_47341;
if(cljs.core.truth_(inst_47288)){
var statearr_47380_48479 = state_47341__$1;
(statearr_47380_48479[(1)] = (10));

} else {
var statearr_47381_48480 = state_47341__$1;
(statearr_47381_48480[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46339__auto__ = null;
var cljs$core$async$state_machine__46339__auto____0 = (function (){
var statearr_47382 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47382[(0)] = cljs$core$async$state_machine__46339__auto__);

(statearr_47382[(1)] = (1));

return statearr_47382;
});
var cljs$core$async$state_machine__46339__auto____1 = (function (state_47341){
while(true){
var ret_value__46340__auto__ = (function (){try{while(true){
var result__46341__auto__ = switch__46338__auto__(state_47341);
if(cljs.core.keyword_identical_QMARK_(result__46341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46341__auto__;
}
break;
}
}catch (e47383){if((e47383 instanceof Object)){
var ex__46342__auto__ = e47383;
var statearr_47384_48482 = state_47341;
(statearr_47384_48482[(5)] = ex__46342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47341);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47383;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48485 = state_47341;
state_47341 = G__48485;
continue;
} else {
return ret_value__46340__auto__;
}
break;
}
});
cljs$core$async$state_machine__46339__auto__ = function(state_47341){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46339__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46339__auto____1.call(this,state_47341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46339__auto____0;
cljs$core$async$state_machine__46339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46339__auto____1;
return cljs$core$async$state_machine__46339__auto__;
})()
})();
var state__46408__auto__ = (function (){var statearr_47385 = (f__46407__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46407__auto__.cljs$core$IFn$_invoke$arity$0() : f__46407__auto__.call(null));
(statearr_47385[(6)] = c__46406__auto___48415);

return statearr_47385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46408__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__47387 = arguments.length;
switch (G__47387) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__47389 = arguments.length;
switch (G__47389) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__47391 = arguments.length;
switch (G__47391) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__46406__auto___48517 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46407__auto__ = (function (){var switch__46338__auto__ = (function (state_47430){
var state_val_47431 = (state_47430[(1)]);
if((state_val_47431 === (7))){
var state_47430__$1 = state_47430;
var statearr_47432_48518 = state_47430__$1;
(statearr_47432_48518[(2)] = null);

(statearr_47432_48518[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47431 === (1))){
var state_47430__$1 = state_47430;
var statearr_47433_48519 = state_47430__$1;
(statearr_47433_48519[(2)] = null);

(statearr_47433_48519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47431 === (4))){
var inst_47394 = (state_47430[(7)]);
var inst_47396 = (inst_47394 < cnt);
var state_47430__$1 = state_47430;
if(cljs.core.truth_(inst_47396)){
var statearr_47434_48520 = state_47430__$1;
(statearr_47434_48520[(1)] = (6));

} else {
var statearr_47435_48521 = state_47430__$1;
(statearr_47435_48521[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47431 === (15))){
var inst_47426 = (state_47430[(2)]);
var state_47430__$1 = state_47430;
var statearr_47436_48523 = state_47430__$1;
(statearr_47436_48523[(2)] = inst_47426);

(statearr_47436_48523[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47431 === (13))){
var inst_47419 = cljs.core.async.close_BANG_(out);
var state_47430__$1 = state_47430;
var statearr_47437_48525 = state_47430__$1;
(statearr_47437_48525[(2)] = inst_47419);

(statearr_47437_48525[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47431 === (6))){
var state_47430__$1 = state_47430;
var statearr_47438_48526 = state_47430__$1;
(statearr_47438_48526[(2)] = null);

(statearr_47438_48526[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47431 === (3))){
var inst_47428 = (state_47430[(2)]);
var state_47430__$1 = state_47430;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47430__$1,inst_47428);
} else {
if((state_val_47431 === (12))){
var inst_47416 = (state_47430[(8)]);
var inst_47416__$1 = (state_47430[(2)]);
var inst_47417 = cljs.core.some(cljs.core.nil_QMARK_,inst_47416__$1);
var state_47430__$1 = (function (){var statearr_47439 = state_47430;
(statearr_47439[(8)] = inst_47416__$1);

return statearr_47439;
})();
if(cljs.core.truth_(inst_47417)){
var statearr_47440_48527 = state_47430__$1;
(statearr_47440_48527[(1)] = (13));

} else {
var statearr_47441_48528 = state_47430__$1;
(statearr_47441_48528[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47431 === (2))){
var inst_47393 = cljs.core.reset_BANG_(dctr,cnt);
var inst_47394 = (0);
var state_47430__$1 = (function (){var statearr_47442 = state_47430;
(statearr_47442[(7)] = inst_47394);

(statearr_47442[(9)] = inst_47393);

return statearr_47442;
})();
var statearr_47443_48529 = state_47430__$1;
(statearr_47443_48529[(2)] = null);

(statearr_47443_48529[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47431 === (11))){
var inst_47394 = (state_47430[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_47430,(10),Object,null,(9));
var inst_47403 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_47394) : chs__$1.call(null,inst_47394));
var inst_47404 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_47394) : done.call(null,inst_47394));
var inst_47405 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_47403,inst_47404);
var state_47430__$1 = state_47430;
var statearr_47444_48531 = state_47430__$1;
(statearr_47444_48531[(2)] = inst_47405);


cljs.core.async.impl.ioc_helpers.process_exception(state_47430__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47431 === (9))){
var inst_47394 = (state_47430[(7)]);
var inst_47407 = (state_47430[(2)]);
var inst_47408 = (inst_47394 + (1));
var inst_47394__$1 = inst_47408;
var state_47430__$1 = (function (){var statearr_47445 = state_47430;
(statearr_47445[(7)] = inst_47394__$1);

(statearr_47445[(10)] = inst_47407);

return statearr_47445;
})();
var statearr_47446_48533 = state_47430__$1;
(statearr_47446_48533[(2)] = null);

(statearr_47446_48533[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47431 === (5))){
var inst_47414 = (state_47430[(2)]);
var state_47430__$1 = (function (){var statearr_47447 = state_47430;
(statearr_47447[(11)] = inst_47414);

return statearr_47447;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47430__$1,(12),dchan);
} else {
if((state_val_47431 === (14))){
var inst_47416 = (state_47430[(8)]);
var inst_47421 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_47416);
var state_47430__$1 = state_47430;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47430__$1,(16),out,inst_47421);
} else {
if((state_val_47431 === (16))){
var inst_47423 = (state_47430[(2)]);
var state_47430__$1 = (function (){var statearr_47448 = state_47430;
(statearr_47448[(12)] = inst_47423);

return statearr_47448;
})();
var statearr_47449_48536 = state_47430__$1;
(statearr_47449_48536[(2)] = null);

(statearr_47449_48536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47431 === (10))){
var inst_47398 = (state_47430[(2)]);
var inst_47399 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_47430__$1 = (function (){var statearr_47450 = state_47430;
(statearr_47450[(13)] = inst_47398);

return statearr_47450;
})();
var statearr_47451_48538 = state_47430__$1;
(statearr_47451_48538[(2)] = inst_47399);


cljs.core.async.impl.ioc_helpers.process_exception(state_47430__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47431 === (8))){
var inst_47412 = (state_47430[(2)]);
var state_47430__$1 = state_47430;
var statearr_47452_48540 = state_47430__$1;
(statearr_47452_48540[(2)] = inst_47412);

(statearr_47452_48540[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46339__auto__ = null;
var cljs$core$async$state_machine__46339__auto____0 = (function (){
var statearr_47453 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47453[(0)] = cljs$core$async$state_machine__46339__auto__);

(statearr_47453[(1)] = (1));

return statearr_47453;
});
var cljs$core$async$state_machine__46339__auto____1 = (function (state_47430){
while(true){
var ret_value__46340__auto__ = (function (){try{while(true){
var result__46341__auto__ = switch__46338__auto__(state_47430);
if(cljs.core.keyword_identical_QMARK_(result__46341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46341__auto__;
}
break;
}
}catch (e47454){if((e47454 instanceof Object)){
var ex__46342__auto__ = e47454;
var statearr_47455_48546 = state_47430;
(statearr_47455_48546[(5)] = ex__46342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47430);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47454;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48547 = state_47430;
state_47430 = G__48547;
continue;
} else {
return ret_value__46340__auto__;
}
break;
}
});
cljs$core$async$state_machine__46339__auto__ = function(state_47430){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46339__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46339__auto____1.call(this,state_47430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46339__auto____0;
cljs$core$async$state_machine__46339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46339__auto____1;
return cljs$core$async$state_machine__46339__auto__;
})()
})();
var state__46408__auto__ = (function (){var statearr_47456 = (f__46407__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46407__auto__.cljs$core$IFn$_invoke$arity$0() : f__46407__auto__.call(null));
(statearr_47456[(6)] = c__46406__auto___48517);

return statearr_47456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46408__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__47459 = arguments.length;
switch (G__47459) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46406__auto___48550 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46407__auto__ = (function (){var switch__46338__auto__ = (function (state_47491){
var state_val_47492 = (state_47491[(1)]);
if((state_val_47492 === (7))){
var inst_47471 = (state_47491[(7)]);
var inst_47470 = (state_47491[(8)]);
var inst_47470__$1 = (state_47491[(2)]);
var inst_47471__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47470__$1,(0),null);
var inst_47472 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47470__$1,(1),null);
var inst_47473 = (inst_47471__$1 == null);
var state_47491__$1 = (function (){var statearr_47493 = state_47491;
(statearr_47493[(7)] = inst_47471__$1);

(statearr_47493[(8)] = inst_47470__$1);

(statearr_47493[(9)] = inst_47472);

return statearr_47493;
})();
if(cljs.core.truth_(inst_47473)){
var statearr_47494_48551 = state_47491__$1;
(statearr_47494_48551[(1)] = (8));

} else {
var statearr_47495_48553 = state_47491__$1;
(statearr_47495_48553[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47492 === (1))){
var inst_47460 = cljs.core.vec(chs);
var inst_47461 = inst_47460;
var state_47491__$1 = (function (){var statearr_47496 = state_47491;
(statearr_47496[(10)] = inst_47461);

return statearr_47496;
})();
var statearr_47497_48555 = state_47491__$1;
(statearr_47497_48555[(2)] = null);

(statearr_47497_48555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47492 === (4))){
var inst_47461 = (state_47491[(10)]);
var state_47491__$1 = state_47491;
return cljs.core.async.ioc_alts_BANG_(state_47491__$1,(7),inst_47461);
} else {
if((state_val_47492 === (6))){
var inst_47487 = (state_47491[(2)]);
var state_47491__$1 = state_47491;
var statearr_47498_48556 = state_47491__$1;
(statearr_47498_48556[(2)] = inst_47487);

(statearr_47498_48556[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47492 === (3))){
var inst_47489 = (state_47491[(2)]);
var state_47491__$1 = state_47491;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47491__$1,inst_47489);
} else {
if((state_val_47492 === (2))){
var inst_47461 = (state_47491[(10)]);
var inst_47463 = cljs.core.count(inst_47461);
var inst_47464 = (inst_47463 > (0));
var state_47491__$1 = state_47491;
if(cljs.core.truth_(inst_47464)){
var statearr_47500_48561 = state_47491__$1;
(statearr_47500_48561[(1)] = (4));

} else {
var statearr_47501_48562 = state_47491__$1;
(statearr_47501_48562[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47492 === (11))){
var inst_47461 = (state_47491[(10)]);
var inst_47480 = (state_47491[(2)]);
var tmp47499 = inst_47461;
var inst_47461__$1 = tmp47499;
var state_47491__$1 = (function (){var statearr_47502 = state_47491;
(statearr_47502[(11)] = inst_47480);

(statearr_47502[(10)] = inst_47461__$1);

return statearr_47502;
})();
var statearr_47503_48564 = state_47491__$1;
(statearr_47503_48564[(2)] = null);

(statearr_47503_48564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47492 === (9))){
var inst_47471 = (state_47491[(7)]);
var state_47491__$1 = state_47491;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47491__$1,(11),out,inst_47471);
} else {
if((state_val_47492 === (5))){
var inst_47485 = cljs.core.async.close_BANG_(out);
var state_47491__$1 = state_47491;
var statearr_47504_48565 = state_47491__$1;
(statearr_47504_48565[(2)] = inst_47485);

(statearr_47504_48565[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47492 === (10))){
var inst_47483 = (state_47491[(2)]);
var state_47491__$1 = state_47491;
var statearr_47505_48566 = state_47491__$1;
(statearr_47505_48566[(2)] = inst_47483);

(statearr_47505_48566[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47492 === (8))){
var inst_47471 = (state_47491[(7)]);
var inst_47470 = (state_47491[(8)]);
var inst_47461 = (state_47491[(10)]);
var inst_47472 = (state_47491[(9)]);
var inst_47475 = (function (){var cs = inst_47461;
var vec__47466 = inst_47470;
var v = inst_47471;
var c = inst_47472;
return (function (p1__47457_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__47457_SHARP_);
});
})();
var inst_47476 = cljs.core.filterv(inst_47475,inst_47461);
var inst_47461__$1 = inst_47476;
var state_47491__$1 = (function (){var statearr_47506 = state_47491;
(statearr_47506[(10)] = inst_47461__$1);

return statearr_47506;
})();
var statearr_47507_48569 = state_47491__$1;
(statearr_47507_48569[(2)] = null);

(statearr_47507_48569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46339__auto__ = null;
var cljs$core$async$state_machine__46339__auto____0 = (function (){
var statearr_47508 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47508[(0)] = cljs$core$async$state_machine__46339__auto__);

(statearr_47508[(1)] = (1));

return statearr_47508;
});
var cljs$core$async$state_machine__46339__auto____1 = (function (state_47491){
while(true){
var ret_value__46340__auto__ = (function (){try{while(true){
var result__46341__auto__ = switch__46338__auto__(state_47491);
if(cljs.core.keyword_identical_QMARK_(result__46341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46341__auto__;
}
break;
}
}catch (e47509){if((e47509 instanceof Object)){
var ex__46342__auto__ = e47509;
var statearr_47510_48570 = state_47491;
(statearr_47510_48570[(5)] = ex__46342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47491);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47509;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48571 = state_47491;
state_47491 = G__48571;
continue;
} else {
return ret_value__46340__auto__;
}
break;
}
});
cljs$core$async$state_machine__46339__auto__ = function(state_47491){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46339__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46339__auto____1.call(this,state_47491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46339__auto____0;
cljs$core$async$state_machine__46339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46339__auto____1;
return cljs$core$async$state_machine__46339__auto__;
})()
})();
var state__46408__auto__ = (function (){var statearr_47511 = (f__46407__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46407__auto__.cljs$core$IFn$_invoke$arity$0() : f__46407__auto__.call(null));
(statearr_47511[(6)] = c__46406__auto___48550);

return statearr_47511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46408__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__47513 = arguments.length;
switch (G__47513) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46406__auto___48580 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46407__auto__ = (function (){var switch__46338__auto__ = (function (state_47537){
var state_val_47538 = (state_47537[(1)]);
if((state_val_47538 === (7))){
var inst_47519 = (state_47537[(7)]);
var inst_47519__$1 = (state_47537[(2)]);
var inst_47520 = (inst_47519__$1 == null);
var inst_47521 = cljs.core.not(inst_47520);
var state_47537__$1 = (function (){var statearr_47539 = state_47537;
(statearr_47539[(7)] = inst_47519__$1);

return statearr_47539;
})();
if(inst_47521){
var statearr_47540_48582 = state_47537__$1;
(statearr_47540_48582[(1)] = (8));

} else {
var statearr_47541_48583 = state_47537__$1;
(statearr_47541_48583[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47538 === (1))){
var inst_47514 = (0);
var state_47537__$1 = (function (){var statearr_47542 = state_47537;
(statearr_47542[(8)] = inst_47514);

return statearr_47542;
})();
var statearr_47543_48584 = state_47537__$1;
(statearr_47543_48584[(2)] = null);

(statearr_47543_48584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47538 === (4))){
var state_47537__$1 = state_47537;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47537__$1,(7),ch);
} else {
if((state_val_47538 === (6))){
var inst_47532 = (state_47537[(2)]);
var state_47537__$1 = state_47537;
var statearr_47544_48585 = state_47537__$1;
(statearr_47544_48585[(2)] = inst_47532);

(statearr_47544_48585[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47538 === (3))){
var inst_47534 = (state_47537[(2)]);
var inst_47535 = cljs.core.async.close_BANG_(out);
var state_47537__$1 = (function (){var statearr_47545 = state_47537;
(statearr_47545[(9)] = inst_47534);

return statearr_47545;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47537__$1,inst_47535);
} else {
if((state_val_47538 === (2))){
var inst_47514 = (state_47537[(8)]);
var inst_47516 = (inst_47514 < n);
var state_47537__$1 = state_47537;
if(cljs.core.truth_(inst_47516)){
var statearr_47546_48587 = state_47537__$1;
(statearr_47546_48587[(1)] = (4));

} else {
var statearr_47547_48588 = state_47537__$1;
(statearr_47547_48588[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47538 === (11))){
var inst_47514 = (state_47537[(8)]);
var inst_47524 = (state_47537[(2)]);
var inst_47525 = (inst_47514 + (1));
var inst_47514__$1 = inst_47525;
var state_47537__$1 = (function (){var statearr_47548 = state_47537;
(statearr_47548[(10)] = inst_47524);

(statearr_47548[(8)] = inst_47514__$1);

return statearr_47548;
})();
var statearr_47549_48590 = state_47537__$1;
(statearr_47549_48590[(2)] = null);

(statearr_47549_48590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47538 === (9))){
var state_47537__$1 = state_47537;
var statearr_47550_48591 = state_47537__$1;
(statearr_47550_48591[(2)] = null);

(statearr_47550_48591[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47538 === (5))){
var state_47537__$1 = state_47537;
var statearr_47551_48592 = state_47537__$1;
(statearr_47551_48592[(2)] = null);

(statearr_47551_48592[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47538 === (10))){
var inst_47529 = (state_47537[(2)]);
var state_47537__$1 = state_47537;
var statearr_47552_48593 = state_47537__$1;
(statearr_47552_48593[(2)] = inst_47529);

(statearr_47552_48593[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47538 === (8))){
var inst_47519 = (state_47537[(7)]);
var state_47537__$1 = state_47537;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47537__$1,(11),out,inst_47519);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46339__auto__ = null;
var cljs$core$async$state_machine__46339__auto____0 = (function (){
var statearr_47553 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47553[(0)] = cljs$core$async$state_machine__46339__auto__);

(statearr_47553[(1)] = (1));

return statearr_47553;
});
var cljs$core$async$state_machine__46339__auto____1 = (function (state_47537){
while(true){
var ret_value__46340__auto__ = (function (){try{while(true){
var result__46341__auto__ = switch__46338__auto__(state_47537);
if(cljs.core.keyword_identical_QMARK_(result__46341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46341__auto__;
}
break;
}
}catch (e47554){if((e47554 instanceof Object)){
var ex__46342__auto__ = e47554;
var statearr_47555_48594 = state_47537;
(statearr_47555_48594[(5)] = ex__46342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47537);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47554;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48595 = state_47537;
state_47537 = G__48595;
continue;
} else {
return ret_value__46340__auto__;
}
break;
}
});
cljs$core$async$state_machine__46339__auto__ = function(state_47537){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46339__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46339__auto____1.call(this,state_47537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46339__auto____0;
cljs$core$async$state_machine__46339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46339__auto____1;
return cljs$core$async$state_machine__46339__auto__;
})()
})();
var state__46408__auto__ = (function (){var statearr_47556 = (f__46407__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46407__auto__.cljs$core$IFn$_invoke$arity$0() : f__46407__auto__.call(null));
(statearr_47556[(6)] = c__46406__auto___48580);

return statearr_47556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46408__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47558 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47558 = (function (f,ch,meta47559){
this.f = f;
this.ch = ch;
this.meta47559 = meta47559;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47558.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47560,meta47559__$1){
var self__ = this;
var _47560__$1 = this;
return (new cljs.core.async.t_cljs$core$async47558(self__.f,self__.ch,meta47559__$1));
}));

(cljs.core.async.t_cljs$core$async47558.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47560){
var self__ = this;
var _47560__$1 = this;
return self__.meta47559;
}));

(cljs.core.async.t_cljs$core$async47558.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47558.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47558.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47558.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47558.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47561 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47561 = (function (f,ch,meta47559,_,fn1,meta47562){
this.f = f;
this.ch = ch;
this.meta47559 = meta47559;
this._ = _;
this.fn1 = fn1;
this.meta47562 = meta47562;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47561.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47563,meta47562__$1){
var self__ = this;
var _47563__$1 = this;
return (new cljs.core.async.t_cljs$core$async47561(self__.f,self__.ch,self__.meta47559,self__._,self__.fn1,meta47562__$1));
}));

(cljs.core.async.t_cljs$core$async47561.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47563){
var self__ = this;
var _47563__$1 = this;
return self__.meta47562;
}));

(cljs.core.async.t_cljs$core$async47561.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47561.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async47561.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47561.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__47557_SHARP_){
var G__47564 = (((p1__47557_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__47557_SHARP_) : self__.f.call(null,p1__47557_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__47564) : f1.call(null,G__47564));
});
}));

(cljs.core.async.t_cljs$core$async47561.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47559","meta47559",-818220817,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async47558","cljs.core.async/t_cljs$core$async47558",-349911411,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta47562","meta47562",-1956379918,null)], null);
}));

(cljs.core.async.t_cljs$core$async47561.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47561.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47561");

(cljs.core.async.t_cljs$core$async47561.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async47561");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47561.
 */
cljs.core.async.__GT_t_cljs$core$async47561 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47561(f__$1,ch__$1,meta47559__$1,___$2,fn1__$1,meta47562){
return (new cljs.core.async.t_cljs$core$async47561(f__$1,ch__$1,meta47559__$1,___$2,fn1__$1,meta47562));
});

}

return (new cljs.core.async.t_cljs$core$async47561(self__.f,self__.ch,self__.meta47559,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__47565 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__47565) : self__.f.call(null,G__47565));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async47558.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47558.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async47558.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47559","meta47559",-818220817,null)], null);
}));

(cljs.core.async.t_cljs$core$async47558.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47558.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47558");

(cljs.core.async.t_cljs$core$async47558.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async47558");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47558.
 */
cljs.core.async.__GT_t_cljs$core$async47558 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47558(f__$1,ch__$1,meta47559){
return (new cljs.core.async.t_cljs$core$async47558(f__$1,ch__$1,meta47559));
});

}

return (new cljs.core.async.t_cljs$core$async47558(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47566 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47566 = (function (f,ch,meta47567){
this.f = f;
this.ch = ch;
this.meta47567 = meta47567;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47566.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47568,meta47567__$1){
var self__ = this;
var _47568__$1 = this;
return (new cljs.core.async.t_cljs$core$async47566(self__.f,self__.ch,meta47567__$1));
}));

(cljs.core.async.t_cljs$core$async47566.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47568){
var self__ = this;
var _47568__$1 = this;
return self__.meta47567;
}));

(cljs.core.async.t_cljs$core$async47566.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47566.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47566.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47566.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async47566.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47566.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async47566.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47567","meta47567",-748436651,null)], null);
}));

(cljs.core.async.t_cljs$core$async47566.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47566.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47566");

(cljs.core.async.t_cljs$core$async47566.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async47566");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47566.
 */
cljs.core.async.__GT_t_cljs$core$async47566 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async47566(f__$1,ch__$1,meta47567){
return (new cljs.core.async.t_cljs$core$async47566(f__$1,ch__$1,meta47567));
});

}

return (new cljs.core.async.t_cljs$core$async47566(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47569 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47569 = (function (p,ch,meta47570){
this.p = p;
this.ch = ch;
this.meta47570 = meta47570;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47569.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47571,meta47570__$1){
var self__ = this;
var _47571__$1 = this;
return (new cljs.core.async.t_cljs$core$async47569(self__.p,self__.ch,meta47570__$1));
}));

(cljs.core.async.t_cljs$core$async47569.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47571){
var self__ = this;
var _47571__$1 = this;
return self__.meta47570;
}));

(cljs.core.async.t_cljs$core$async47569.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47569.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47569.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47569.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47569.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async47569.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47569.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async47569.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47570","meta47570",-429250501,null)], null);
}));

(cljs.core.async.t_cljs$core$async47569.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47569.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47569");

(cljs.core.async.t_cljs$core$async47569.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async47569");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47569.
 */
cljs.core.async.__GT_t_cljs$core$async47569 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async47569(p__$1,ch__$1,meta47570){
return (new cljs.core.async.t_cljs$core$async47569(p__$1,ch__$1,meta47570));
});

}

return (new cljs.core.async.t_cljs$core$async47569(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__47573 = arguments.length;
switch (G__47573) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46406__auto___48614 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46407__auto__ = (function (){var switch__46338__auto__ = (function (state_47594){
var state_val_47595 = (state_47594[(1)]);
if((state_val_47595 === (7))){
var inst_47590 = (state_47594[(2)]);
var state_47594__$1 = state_47594;
var statearr_47596_48615 = state_47594__$1;
(statearr_47596_48615[(2)] = inst_47590);

(statearr_47596_48615[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47595 === (1))){
var state_47594__$1 = state_47594;
var statearr_47597_48616 = state_47594__$1;
(statearr_47597_48616[(2)] = null);

(statearr_47597_48616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47595 === (4))){
var inst_47576 = (state_47594[(7)]);
var inst_47576__$1 = (state_47594[(2)]);
var inst_47577 = (inst_47576__$1 == null);
var state_47594__$1 = (function (){var statearr_47598 = state_47594;
(statearr_47598[(7)] = inst_47576__$1);

return statearr_47598;
})();
if(cljs.core.truth_(inst_47577)){
var statearr_47599_48617 = state_47594__$1;
(statearr_47599_48617[(1)] = (5));

} else {
var statearr_47600_48618 = state_47594__$1;
(statearr_47600_48618[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47595 === (6))){
var inst_47576 = (state_47594[(7)]);
var inst_47581 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_47576) : p.call(null,inst_47576));
var state_47594__$1 = state_47594;
if(cljs.core.truth_(inst_47581)){
var statearr_47601_48620 = state_47594__$1;
(statearr_47601_48620[(1)] = (8));

} else {
var statearr_47602_48621 = state_47594__$1;
(statearr_47602_48621[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47595 === (3))){
var inst_47592 = (state_47594[(2)]);
var state_47594__$1 = state_47594;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47594__$1,inst_47592);
} else {
if((state_val_47595 === (2))){
var state_47594__$1 = state_47594;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47594__$1,(4),ch);
} else {
if((state_val_47595 === (11))){
var inst_47584 = (state_47594[(2)]);
var state_47594__$1 = state_47594;
var statearr_47603_48623 = state_47594__$1;
(statearr_47603_48623[(2)] = inst_47584);

(statearr_47603_48623[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47595 === (9))){
var state_47594__$1 = state_47594;
var statearr_47604_48624 = state_47594__$1;
(statearr_47604_48624[(2)] = null);

(statearr_47604_48624[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47595 === (5))){
var inst_47579 = cljs.core.async.close_BANG_(out);
var state_47594__$1 = state_47594;
var statearr_47605_48625 = state_47594__$1;
(statearr_47605_48625[(2)] = inst_47579);

(statearr_47605_48625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47595 === (10))){
var inst_47587 = (state_47594[(2)]);
var state_47594__$1 = (function (){var statearr_47606 = state_47594;
(statearr_47606[(8)] = inst_47587);

return statearr_47606;
})();
var statearr_47607_48626 = state_47594__$1;
(statearr_47607_48626[(2)] = null);

(statearr_47607_48626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47595 === (8))){
var inst_47576 = (state_47594[(7)]);
var state_47594__$1 = state_47594;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47594__$1,(11),out,inst_47576);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46339__auto__ = null;
var cljs$core$async$state_machine__46339__auto____0 = (function (){
var statearr_47608 = [null,null,null,null,null,null,null,null,null];
(statearr_47608[(0)] = cljs$core$async$state_machine__46339__auto__);

(statearr_47608[(1)] = (1));

return statearr_47608;
});
var cljs$core$async$state_machine__46339__auto____1 = (function (state_47594){
while(true){
var ret_value__46340__auto__ = (function (){try{while(true){
var result__46341__auto__ = switch__46338__auto__(state_47594);
if(cljs.core.keyword_identical_QMARK_(result__46341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46341__auto__;
}
break;
}
}catch (e47609){if((e47609 instanceof Object)){
var ex__46342__auto__ = e47609;
var statearr_47610_48629 = state_47594;
(statearr_47610_48629[(5)] = ex__46342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47594);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47609;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48630 = state_47594;
state_47594 = G__48630;
continue;
} else {
return ret_value__46340__auto__;
}
break;
}
});
cljs$core$async$state_machine__46339__auto__ = function(state_47594){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46339__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46339__auto____1.call(this,state_47594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46339__auto____0;
cljs$core$async$state_machine__46339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46339__auto____1;
return cljs$core$async$state_machine__46339__auto__;
})()
})();
var state__46408__auto__ = (function (){var statearr_47611 = (f__46407__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46407__auto__.cljs$core$IFn$_invoke$arity$0() : f__46407__auto__.call(null));
(statearr_47611[(6)] = c__46406__auto___48614);

return statearr_47611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46408__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__47613 = arguments.length;
switch (G__47613) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__46406__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46407__auto__ = (function (){var switch__46338__auto__ = (function (state_47675){
var state_val_47676 = (state_47675[(1)]);
if((state_val_47676 === (7))){
var inst_47671 = (state_47675[(2)]);
var state_47675__$1 = state_47675;
var statearr_47677_48637 = state_47675__$1;
(statearr_47677_48637[(2)] = inst_47671);

(statearr_47677_48637[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47676 === (20))){
var inst_47641 = (state_47675[(7)]);
var inst_47652 = (state_47675[(2)]);
var inst_47653 = cljs.core.next(inst_47641);
var inst_47627 = inst_47653;
var inst_47628 = null;
var inst_47629 = (0);
var inst_47630 = (0);
var state_47675__$1 = (function (){var statearr_47678 = state_47675;
(statearr_47678[(8)] = inst_47629);

(statearr_47678[(9)] = inst_47627);

(statearr_47678[(10)] = inst_47628);

(statearr_47678[(11)] = inst_47630);

(statearr_47678[(12)] = inst_47652);

return statearr_47678;
})();
var statearr_47679_48645 = state_47675__$1;
(statearr_47679_48645[(2)] = null);

(statearr_47679_48645[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47676 === (1))){
var state_47675__$1 = state_47675;
var statearr_47680_48646 = state_47675__$1;
(statearr_47680_48646[(2)] = null);

(statearr_47680_48646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47676 === (4))){
var inst_47616 = (state_47675[(13)]);
var inst_47616__$1 = (state_47675[(2)]);
var inst_47617 = (inst_47616__$1 == null);
var state_47675__$1 = (function (){var statearr_47681 = state_47675;
(statearr_47681[(13)] = inst_47616__$1);

return statearr_47681;
})();
if(cljs.core.truth_(inst_47617)){
var statearr_47682_48647 = state_47675__$1;
(statearr_47682_48647[(1)] = (5));

} else {
var statearr_47683_48648 = state_47675__$1;
(statearr_47683_48648[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47676 === (15))){
var state_47675__$1 = state_47675;
var statearr_47687_48652 = state_47675__$1;
(statearr_47687_48652[(2)] = null);

(statearr_47687_48652[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47676 === (21))){
var state_47675__$1 = state_47675;
var statearr_47688_48653 = state_47675__$1;
(statearr_47688_48653[(2)] = null);

(statearr_47688_48653[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47676 === (13))){
var inst_47629 = (state_47675[(8)]);
var inst_47627 = (state_47675[(9)]);
var inst_47628 = (state_47675[(10)]);
var inst_47630 = (state_47675[(11)]);
var inst_47637 = (state_47675[(2)]);
var inst_47638 = (inst_47630 + (1));
var tmp47684 = inst_47629;
var tmp47685 = inst_47627;
var tmp47686 = inst_47628;
var inst_47627__$1 = tmp47685;
var inst_47628__$1 = tmp47686;
var inst_47629__$1 = tmp47684;
var inst_47630__$1 = inst_47638;
var state_47675__$1 = (function (){var statearr_47689 = state_47675;
(statearr_47689[(8)] = inst_47629__$1);

(statearr_47689[(14)] = inst_47637);

(statearr_47689[(9)] = inst_47627__$1);

(statearr_47689[(10)] = inst_47628__$1);

(statearr_47689[(11)] = inst_47630__$1);

return statearr_47689;
})();
var statearr_47690_48658 = state_47675__$1;
(statearr_47690_48658[(2)] = null);

(statearr_47690_48658[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47676 === (22))){
var state_47675__$1 = state_47675;
var statearr_47691_48659 = state_47675__$1;
(statearr_47691_48659[(2)] = null);

(statearr_47691_48659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47676 === (6))){
var inst_47616 = (state_47675[(13)]);
var inst_47625 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_47616) : f.call(null,inst_47616));
var inst_47626 = cljs.core.seq(inst_47625);
var inst_47627 = inst_47626;
var inst_47628 = null;
var inst_47629 = (0);
var inst_47630 = (0);
var state_47675__$1 = (function (){var statearr_47692 = state_47675;
(statearr_47692[(8)] = inst_47629);

(statearr_47692[(9)] = inst_47627);

(statearr_47692[(10)] = inst_47628);

(statearr_47692[(11)] = inst_47630);

return statearr_47692;
})();
var statearr_47693_48663 = state_47675__$1;
(statearr_47693_48663[(2)] = null);

(statearr_47693_48663[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47676 === (17))){
var inst_47641 = (state_47675[(7)]);
var inst_47645 = cljs.core.chunk_first(inst_47641);
var inst_47646 = cljs.core.chunk_rest(inst_47641);
var inst_47647 = cljs.core.count(inst_47645);
var inst_47627 = inst_47646;
var inst_47628 = inst_47645;
var inst_47629 = inst_47647;
var inst_47630 = (0);
var state_47675__$1 = (function (){var statearr_47694 = state_47675;
(statearr_47694[(8)] = inst_47629);

(statearr_47694[(9)] = inst_47627);

(statearr_47694[(10)] = inst_47628);

(statearr_47694[(11)] = inst_47630);

return statearr_47694;
})();
var statearr_47695_48666 = state_47675__$1;
(statearr_47695_48666[(2)] = null);

(statearr_47695_48666[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47676 === (3))){
var inst_47673 = (state_47675[(2)]);
var state_47675__$1 = state_47675;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47675__$1,inst_47673);
} else {
if((state_val_47676 === (12))){
var inst_47661 = (state_47675[(2)]);
var state_47675__$1 = state_47675;
var statearr_47696_48667 = state_47675__$1;
(statearr_47696_48667[(2)] = inst_47661);

(statearr_47696_48667[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47676 === (2))){
var state_47675__$1 = state_47675;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47675__$1,(4),in$);
} else {
if((state_val_47676 === (23))){
var inst_47669 = (state_47675[(2)]);
var state_47675__$1 = state_47675;
var statearr_47697_48668 = state_47675__$1;
(statearr_47697_48668[(2)] = inst_47669);

(statearr_47697_48668[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47676 === (19))){
var inst_47656 = (state_47675[(2)]);
var state_47675__$1 = state_47675;
var statearr_47698_48669 = state_47675__$1;
(statearr_47698_48669[(2)] = inst_47656);

(statearr_47698_48669[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47676 === (11))){
var inst_47627 = (state_47675[(9)]);
var inst_47641 = (state_47675[(7)]);
var inst_47641__$1 = cljs.core.seq(inst_47627);
var state_47675__$1 = (function (){var statearr_47699 = state_47675;
(statearr_47699[(7)] = inst_47641__$1);

return statearr_47699;
})();
if(inst_47641__$1){
var statearr_47700_48670 = state_47675__$1;
(statearr_47700_48670[(1)] = (14));

} else {
var statearr_47701_48671 = state_47675__$1;
(statearr_47701_48671[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47676 === (9))){
var inst_47663 = (state_47675[(2)]);
var inst_47664 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_47675__$1 = (function (){var statearr_47702 = state_47675;
(statearr_47702[(15)] = inst_47663);

return statearr_47702;
})();
if(cljs.core.truth_(inst_47664)){
var statearr_47703_48673 = state_47675__$1;
(statearr_47703_48673[(1)] = (21));

} else {
var statearr_47704_48674 = state_47675__$1;
(statearr_47704_48674[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47676 === (5))){
var inst_47619 = cljs.core.async.close_BANG_(out);
var state_47675__$1 = state_47675;
var statearr_47705_48675 = state_47675__$1;
(statearr_47705_48675[(2)] = inst_47619);

(statearr_47705_48675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47676 === (14))){
var inst_47641 = (state_47675[(7)]);
var inst_47643 = cljs.core.chunked_seq_QMARK_(inst_47641);
var state_47675__$1 = state_47675;
if(inst_47643){
var statearr_47706_48676 = state_47675__$1;
(statearr_47706_48676[(1)] = (17));

} else {
var statearr_47707_48680 = state_47675__$1;
(statearr_47707_48680[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47676 === (16))){
var inst_47659 = (state_47675[(2)]);
var state_47675__$1 = state_47675;
var statearr_47708_48687 = state_47675__$1;
(statearr_47708_48687[(2)] = inst_47659);

(statearr_47708_48687[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47676 === (10))){
var inst_47628 = (state_47675[(10)]);
var inst_47630 = (state_47675[(11)]);
var inst_47635 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_47628,inst_47630);
var state_47675__$1 = state_47675;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47675__$1,(13),out,inst_47635);
} else {
if((state_val_47676 === (18))){
var inst_47641 = (state_47675[(7)]);
var inst_47650 = cljs.core.first(inst_47641);
var state_47675__$1 = state_47675;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47675__$1,(20),out,inst_47650);
} else {
if((state_val_47676 === (8))){
var inst_47629 = (state_47675[(8)]);
var inst_47630 = (state_47675[(11)]);
var inst_47632 = (inst_47630 < inst_47629);
var inst_47633 = inst_47632;
var state_47675__$1 = state_47675;
if(cljs.core.truth_(inst_47633)){
var statearr_47709_48694 = state_47675__$1;
(statearr_47709_48694[(1)] = (10));

} else {
var statearr_47710_48695 = state_47675__$1;
(statearr_47710_48695[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__46339__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__46339__auto____0 = (function (){
var statearr_47711 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47711[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__46339__auto__);

(statearr_47711[(1)] = (1));

return statearr_47711;
});
var cljs$core$async$mapcat_STAR__$_state_machine__46339__auto____1 = (function (state_47675){
while(true){
var ret_value__46340__auto__ = (function (){try{while(true){
var result__46341__auto__ = switch__46338__auto__(state_47675);
if(cljs.core.keyword_identical_QMARK_(result__46341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46341__auto__;
}
break;
}
}catch (e47712){if((e47712 instanceof Object)){
var ex__46342__auto__ = e47712;
var statearr_47713_48697 = state_47675;
(statearr_47713_48697[(5)] = ex__46342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47675);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47712;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48698 = state_47675;
state_47675 = G__48698;
continue;
} else {
return ret_value__46340__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__46339__auto__ = function(state_47675){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__46339__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__46339__auto____1.call(this,state_47675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__46339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__46339__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__46339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__46339__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__46339__auto__;
})()
})();
var state__46408__auto__ = (function (){var statearr_47714 = (f__46407__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46407__auto__.cljs$core$IFn$_invoke$arity$0() : f__46407__auto__.call(null));
(statearr_47714[(6)] = c__46406__auto__);

return statearr_47714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46408__auto__);
}));

return c__46406__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__47716 = arguments.length;
switch (G__47716) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__47718 = arguments.length;
switch (G__47718) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__47720 = arguments.length;
switch (G__47720) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46406__auto___48709 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46407__auto__ = (function (){var switch__46338__auto__ = (function (state_47744){
var state_val_47745 = (state_47744[(1)]);
if((state_val_47745 === (7))){
var inst_47739 = (state_47744[(2)]);
var state_47744__$1 = state_47744;
var statearr_47746_48710 = state_47744__$1;
(statearr_47746_48710[(2)] = inst_47739);

(statearr_47746_48710[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47745 === (1))){
var inst_47721 = null;
var state_47744__$1 = (function (){var statearr_47747 = state_47744;
(statearr_47747[(7)] = inst_47721);

return statearr_47747;
})();
var statearr_47748_48711 = state_47744__$1;
(statearr_47748_48711[(2)] = null);

(statearr_47748_48711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47745 === (4))){
var inst_47724 = (state_47744[(8)]);
var inst_47724__$1 = (state_47744[(2)]);
var inst_47725 = (inst_47724__$1 == null);
var inst_47726 = cljs.core.not(inst_47725);
var state_47744__$1 = (function (){var statearr_47749 = state_47744;
(statearr_47749[(8)] = inst_47724__$1);

return statearr_47749;
})();
if(inst_47726){
var statearr_47750_48713 = state_47744__$1;
(statearr_47750_48713[(1)] = (5));

} else {
var statearr_47751_48714 = state_47744__$1;
(statearr_47751_48714[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47745 === (6))){
var state_47744__$1 = state_47744;
var statearr_47752_48715 = state_47744__$1;
(statearr_47752_48715[(2)] = null);

(statearr_47752_48715[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47745 === (3))){
var inst_47741 = (state_47744[(2)]);
var inst_47742 = cljs.core.async.close_BANG_(out);
var state_47744__$1 = (function (){var statearr_47753 = state_47744;
(statearr_47753[(9)] = inst_47741);

return statearr_47753;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47744__$1,inst_47742);
} else {
if((state_val_47745 === (2))){
var state_47744__$1 = state_47744;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47744__$1,(4),ch);
} else {
if((state_val_47745 === (11))){
var inst_47724 = (state_47744[(8)]);
var inst_47733 = (state_47744[(2)]);
var inst_47721 = inst_47724;
var state_47744__$1 = (function (){var statearr_47754 = state_47744;
(statearr_47754[(7)] = inst_47721);

(statearr_47754[(10)] = inst_47733);

return statearr_47754;
})();
var statearr_47755_48722 = state_47744__$1;
(statearr_47755_48722[(2)] = null);

(statearr_47755_48722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47745 === (9))){
var inst_47724 = (state_47744[(8)]);
var state_47744__$1 = state_47744;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47744__$1,(11),out,inst_47724);
} else {
if((state_val_47745 === (5))){
var inst_47724 = (state_47744[(8)]);
var inst_47721 = (state_47744[(7)]);
var inst_47728 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47724,inst_47721);
var state_47744__$1 = state_47744;
if(inst_47728){
var statearr_47757_48724 = state_47744__$1;
(statearr_47757_48724[(1)] = (8));

} else {
var statearr_47758_48725 = state_47744__$1;
(statearr_47758_48725[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47745 === (10))){
var inst_47736 = (state_47744[(2)]);
var state_47744__$1 = state_47744;
var statearr_47759_48726 = state_47744__$1;
(statearr_47759_48726[(2)] = inst_47736);

(statearr_47759_48726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47745 === (8))){
var inst_47721 = (state_47744[(7)]);
var tmp47756 = inst_47721;
var inst_47721__$1 = tmp47756;
var state_47744__$1 = (function (){var statearr_47760 = state_47744;
(statearr_47760[(7)] = inst_47721__$1);

return statearr_47760;
})();
var statearr_47761_48727 = state_47744__$1;
(statearr_47761_48727[(2)] = null);

(statearr_47761_48727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46339__auto__ = null;
var cljs$core$async$state_machine__46339__auto____0 = (function (){
var statearr_47762 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47762[(0)] = cljs$core$async$state_machine__46339__auto__);

(statearr_47762[(1)] = (1));

return statearr_47762;
});
var cljs$core$async$state_machine__46339__auto____1 = (function (state_47744){
while(true){
var ret_value__46340__auto__ = (function (){try{while(true){
var result__46341__auto__ = switch__46338__auto__(state_47744);
if(cljs.core.keyword_identical_QMARK_(result__46341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46341__auto__;
}
break;
}
}catch (e47763){if((e47763 instanceof Object)){
var ex__46342__auto__ = e47763;
var statearr_47764_48734 = state_47744;
(statearr_47764_48734[(5)] = ex__46342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47744);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47763;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48736 = state_47744;
state_47744 = G__48736;
continue;
} else {
return ret_value__46340__auto__;
}
break;
}
});
cljs$core$async$state_machine__46339__auto__ = function(state_47744){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46339__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46339__auto____1.call(this,state_47744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46339__auto____0;
cljs$core$async$state_machine__46339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46339__auto____1;
return cljs$core$async$state_machine__46339__auto__;
})()
})();
var state__46408__auto__ = (function (){var statearr_47765 = (f__46407__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46407__auto__.cljs$core$IFn$_invoke$arity$0() : f__46407__auto__.call(null));
(statearr_47765[(6)] = c__46406__auto___48709);

return statearr_47765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46408__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__47767 = arguments.length;
switch (G__47767) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46406__auto___48738 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46407__auto__ = (function (){var switch__46338__auto__ = (function (state_47805){
var state_val_47806 = (state_47805[(1)]);
if((state_val_47806 === (7))){
var inst_47801 = (state_47805[(2)]);
var state_47805__$1 = state_47805;
var statearr_47807_48739 = state_47805__$1;
(statearr_47807_48739[(2)] = inst_47801);

(statearr_47807_48739[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (1))){
var inst_47768 = (new Array(n));
var inst_47769 = inst_47768;
var inst_47770 = (0);
var state_47805__$1 = (function (){var statearr_47808 = state_47805;
(statearr_47808[(7)] = inst_47769);

(statearr_47808[(8)] = inst_47770);

return statearr_47808;
})();
var statearr_47809_48740 = state_47805__$1;
(statearr_47809_48740[(2)] = null);

(statearr_47809_48740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (4))){
var inst_47773 = (state_47805[(9)]);
var inst_47773__$1 = (state_47805[(2)]);
var inst_47774 = (inst_47773__$1 == null);
var inst_47775 = cljs.core.not(inst_47774);
var state_47805__$1 = (function (){var statearr_47810 = state_47805;
(statearr_47810[(9)] = inst_47773__$1);

return statearr_47810;
})();
if(inst_47775){
var statearr_47811_48742 = state_47805__$1;
(statearr_47811_48742[(1)] = (5));

} else {
var statearr_47812_48743 = state_47805__$1;
(statearr_47812_48743[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (15))){
var inst_47795 = (state_47805[(2)]);
var state_47805__$1 = state_47805;
var statearr_47813_48744 = state_47805__$1;
(statearr_47813_48744[(2)] = inst_47795);

(statearr_47813_48744[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (13))){
var state_47805__$1 = state_47805;
var statearr_47814_48745 = state_47805__$1;
(statearr_47814_48745[(2)] = null);

(statearr_47814_48745[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (6))){
var inst_47770 = (state_47805[(8)]);
var inst_47791 = (inst_47770 > (0));
var state_47805__$1 = state_47805;
if(cljs.core.truth_(inst_47791)){
var statearr_47815_48746 = state_47805__$1;
(statearr_47815_48746[(1)] = (12));

} else {
var statearr_47816_48747 = state_47805__$1;
(statearr_47816_48747[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (3))){
var inst_47803 = (state_47805[(2)]);
var state_47805__$1 = state_47805;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47805__$1,inst_47803);
} else {
if((state_val_47806 === (12))){
var inst_47769 = (state_47805[(7)]);
var inst_47793 = cljs.core.vec(inst_47769);
var state_47805__$1 = state_47805;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47805__$1,(15),out,inst_47793);
} else {
if((state_val_47806 === (2))){
var state_47805__$1 = state_47805;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47805__$1,(4),ch);
} else {
if((state_val_47806 === (11))){
var inst_47785 = (state_47805[(2)]);
var inst_47786 = (new Array(n));
var inst_47769 = inst_47786;
var inst_47770 = (0);
var state_47805__$1 = (function (){var statearr_47817 = state_47805;
(statearr_47817[(7)] = inst_47769);

(statearr_47817[(10)] = inst_47785);

(statearr_47817[(8)] = inst_47770);

return statearr_47817;
})();
var statearr_47818_48749 = state_47805__$1;
(statearr_47818_48749[(2)] = null);

(statearr_47818_48749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (9))){
var inst_47769 = (state_47805[(7)]);
var inst_47783 = cljs.core.vec(inst_47769);
var state_47805__$1 = state_47805;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47805__$1,(11),out,inst_47783);
} else {
if((state_val_47806 === (5))){
var inst_47773 = (state_47805[(9)]);
var inst_47769 = (state_47805[(7)]);
var inst_47778 = (state_47805[(11)]);
var inst_47770 = (state_47805[(8)]);
var inst_47777 = (inst_47769[inst_47770] = inst_47773);
var inst_47778__$1 = (inst_47770 + (1));
var inst_47779 = (inst_47778__$1 < n);
var state_47805__$1 = (function (){var statearr_47819 = state_47805;
(statearr_47819[(11)] = inst_47778__$1);

(statearr_47819[(12)] = inst_47777);

return statearr_47819;
})();
if(cljs.core.truth_(inst_47779)){
var statearr_47820_48753 = state_47805__$1;
(statearr_47820_48753[(1)] = (8));

} else {
var statearr_47821_48754 = state_47805__$1;
(statearr_47821_48754[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (14))){
var inst_47798 = (state_47805[(2)]);
var inst_47799 = cljs.core.async.close_BANG_(out);
var state_47805__$1 = (function (){var statearr_47823 = state_47805;
(statearr_47823[(13)] = inst_47798);

return statearr_47823;
})();
var statearr_47824_48755 = state_47805__$1;
(statearr_47824_48755[(2)] = inst_47799);

(statearr_47824_48755[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (10))){
var inst_47789 = (state_47805[(2)]);
var state_47805__$1 = state_47805;
var statearr_47825_48760 = state_47805__$1;
(statearr_47825_48760[(2)] = inst_47789);

(statearr_47825_48760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (8))){
var inst_47769 = (state_47805[(7)]);
var inst_47778 = (state_47805[(11)]);
var tmp47822 = inst_47769;
var inst_47769__$1 = tmp47822;
var inst_47770 = inst_47778;
var state_47805__$1 = (function (){var statearr_47826 = state_47805;
(statearr_47826[(7)] = inst_47769__$1);

(statearr_47826[(8)] = inst_47770);

return statearr_47826;
})();
var statearr_47827_48762 = state_47805__$1;
(statearr_47827_48762[(2)] = null);

(statearr_47827_48762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46339__auto__ = null;
var cljs$core$async$state_machine__46339__auto____0 = (function (){
var statearr_47828 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47828[(0)] = cljs$core$async$state_machine__46339__auto__);

(statearr_47828[(1)] = (1));

return statearr_47828;
});
var cljs$core$async$state_machine__46339__auto____1 = (function (state_47805){
while(true){
var ret_value__46340__auto__ = (function (){try{while(true){
var result__46341__auto__ = switch__46338__auto__(state_47805);
if(cljs.core.keyword_identical_QMARK_(result__46341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46341__auto__;
}
break;
}
}catch (e47829){if((e47829 instanceof Object)){
var ex__46342__auto__ = e47829;
var statearr_47830_48764 = state_47805;
(statearr_47830_48764[(5)] = ex__46342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47805);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47829;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48765 = state_47805;
state_47805 = G__48765;
continue;
} else {
return ret_value__46340__auto__;
}
break;
}
});
cljs$core$async$state_machine__46339__auto__ = function(state_47805){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46339__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46339__auto____1.call(this,state_47805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46339__auto____0;
cljs$core$async$state_machine__46339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46339__auto____1;
return cljs$core$async$state_machine__46339__auto__;
})()
})();
var state__46408__auto__ = (function (){var statearr_47831 = (f__46407__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46407__auto__.cljs$core$IFn$_invoke$arity$0() : f__46407__auto__.call(null));
(statearr_47831[(6)] = c__46406__auto___48738);

return statearr_47831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46408__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__47833 = arguments.length;
switch (G__47833) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46406__auto___48770 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46407__auto__ = (function (){var switch__46338__auto__ = (function (state_47875){
var state_val_47876 = (state_47875[(1)]);
if((state_val_47876 === (7))){
var inst_47871 = (state_47875[(2)]);
var state_47875__$1 = state_47875;
var statearr_47877_48771 = state_47875__$1;
(statearr_47877_48771[(2)] = inst_47871);

(statearr_47877_48771[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47876 === (1))){
var inst_47834 = [];
var inst_47835 = inst_47834;
var inst_47836 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_47875__$1 = (function (){var statearr_47878 = state_47875;
(statearr_47878[(7)] = inst_47835);

(statearr_47878[(8)] = inst_47836);

return statearr_47878;
})();
var statearr_47879_48772 = state_47875__$1;
(statearr_47879_48772[(2)] = null);

(statearr_47879_48772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47876 === (4))){
var inst_47839 = (state_47875[(9)]);
var inst_47839__$1 = (state_47875[(2)]);
var inst_47840 = (inst_47839__$1 == null);
var inst_47841 = cljs.core.not(inst_47840);
var state_47875__$1 = (function (){var statearr_47880 = state_47875;
(statearr_47880[(9)] = inst_47839__$1);

return statearr_47880;
})();
if(inst_47841){
var statearr_47881_48773 = state_47875__$1;
(statearr_47881_48773[(1)] = (5));

} else {
var statearr_47882_48774 = state_47875__$1;
(statearr_47882_48774[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47876 === (15))){
var inst_47865 = (state_47875[(2)]);
var state_47875__$1 = state_47875;
var statearr_47883_48776 = state_47875__$1;
(statearr_47883_48776[(2)] = inst_47865);

(statearr_47883_48776[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47876 === (13))){
var state_47875__$1 = state_47875;
var statearr_47884_48780 = state_47875__$1;
(statearr_47884_48780[(2)] = null);

(statearr_47884_48780[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47876 === (6))){
var inst_47835 = (state_47875[(7)]);
var inst_47860 = inst_47835.length;
var inst_47861 = (inst_47860 > (0));
var state_47875__$1 = state_47875;
if(cljs.core.truth_(inst_47861)){
var statearr_47885_48781 = state_47875__$1;
(statearr_47885_48781[(1)] = (12));

} else {
var statearr_47886_48784 = state_47875__$1;
(statearr_47886_48784[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47876 === (3))){
var inst_47873 = (state_47875[(2)]);
var state_47875__$1 = state_47875;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47875__$1,inst_47873);
} else {
if((state_val_47876 === (12))){
var inst_47835 = (state_47875[(7)]);
var inst_47863 = cljs.core.vec(inst_47835);
var state_47875__$1 = state_47875;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47875__$1,(15),out,inst_47863);
} else {
if((state_val_47876 === (2))){
var state_47875__$1 = state_47875;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47875__$1,(4),ch);
} else {
if((state_val_47876 === (11))){
var inst_47843 = (state_47875[(10)]);
var inst_47839 = (state_47875[(9)]);
var inst_47853 = (state_47875[(2)]);
var inst_47854 = [];
var inst_47855 = inst_47854.push(inst_47839);
var inst_47835 = inst_47854;
var inst_47836 = inst_47843;
var state_47875__$1 = (function (){var statearr_47887 = state_47875;
(statearr_47887[(11)] = inst_47855);

(statearr_47887[(7)] = inst_47835);

(statearr_47887[(8)] = inst_47836);

(statearr_47887[(12)] = inst_47853);

return statearr_47887;
})();
var statearr_47888_48791 = state_47875__$1;
(statearr_47888_48791[(2)] = null);

(statearr_47888_48791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47876 === (9))){
var inst_47835 = (state_47875[(7)]);
var inst_47851 = cljs.core.vec(inst_47835);
var state_47875__$1 = state_47875;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47875__$1,(11),out,inst_47851);
} else {
if((state_val_47876 === (5))){
var inst_47843 = (state_47875[(10)]);
var inst_47836 = (state_47875[(8)]);
var inst_47839 = (state_47875[(9)]);
var inst_47843__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_47839) : f.call(null,inst_47839));
var inst_47844 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47843__$1,inst_47836);
var inst_47845 = cljs.core.keyword_identical_QMARK_(inst_47836,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_47846 = ((inst_47844) || (inst_47845));
var state_47875__$1 = (function (){var statearr_47889 = state_47875;
(statearr_47889[(10)] = inst_47843__$1);

return statearr_47889;
})();
if(cljs.core.truth_(inst_47846)){
var statearr_47890_48795 = state_47875__$1;
(statearr_47890_48795[(1)] = (8));

} else {
var statearr_47891_48796 = state_47875__$1;
(statearr_47891_48796[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47876 === (14))){
var inst_47868 = (state_47875[(2)]);
var inst_47869 = cljs.core.async.close_BANG_(out);
var state_47875__$1 = (function (){var statearr_47893 = state_47875;
(statearr_47893[(13)] = inst_47868);

return statearr_47893;
})();
var statearr_47894_48798 = state_47875__$1;
(statearr_47894_48798[(2)] = inst_47869);

(statearr_47894_48798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47876 === (10))){
var inst_47858 = (state_47875[(2)]);
var state_47875__$1 = state_47875;
var statearr_47895_48799 = state_47875__$1;
(statearr_47895_48799[(2)] = inst_47858);

(statearr_47895_48799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47876 === (8))){
var inst_47843 = (state_47875[(10)]);
var inst_47835 = (state_47875[(7)]);
var inst_47839 = (state_47875[(9)]);
var inst_47848 = inst_47835.push(inst_47839);
var tmp47892 = inst_47835;
var inst_47835__$1 = tmp47892;
var inst_47836 = inst_47843;
var state_47875__$1 = (function (){var statearr_47896 = state_47875;
(statearr_47896[(7)] = inst_47835__$1);

(statearr_47896[(8)] = inst_47836);

(statearr_47896[(14)] = inst_47848);

return statearr_47896;
})();
var statearr_47897_48801 = state_47875__$1;
(statearr_47897_48801[(2)] = null);

(statearr_47897_48801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46339__auto__ = null;
var cljs$core$async$state_machine__46339__auto____0 = (function (){
var statearr_47898 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47898[(0)] = cljs$core$async$state_machine__46339__auto__);

(statearr_47898[(1)] = (1));

return statearr_47898;
});
var cljs$core$async$state_machine__46339__auto____1 = (function (state_47875){
while(true){
var ret_value__46340__auto__ = (function (){try{while(true){
var result__46341__auto__ = switch__46338__auto__(state_47875);
if(cljs.core.keyword_identical_QMARK_(result__46341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46341__auto__;
}
break;
}
}catch (e47899){if((e47899 instanceof Object)){
var ex__46342__auto__ = e47899;
var statearr_47900_48802 = state_47875;
(statearr_47900_48802[(5)] = ex__46342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47875);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47899;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48803 = state_47875;
state_47875 = G__48803;
continue;
} else {
return ret_value__46340__auto__;
}
break;
}
});
cljs$core$async$state_machine__46339__auto__ = function(state_47875){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46339__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46339__auto____1.call(this,state_47875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46339__auto____0;
cljs$core$async$state_machine__46339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46339__auto____1;
return cljs$core$async$state_machine__46339__auto__;
})()
})();
var state__46408__auto__ = (function (){var statearr_47901 = (f__46407__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46407__auto__.cljs$core$IFn$_invoke$arity$0() : f__46407__auto__.call(null));
(statearr_47901[(6)] = c__46406__auto___48770);

return statearr_47901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46408__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
