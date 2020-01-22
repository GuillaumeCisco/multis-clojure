goog.provide('cljs_web3.bzz');
goog.require('cljs.core');
goog.require('cljs_web3.utils');
cljs_web3.bzz.get_bzz = (function cljs_web3$bzz$get_bzz(web3){
return (web3["bzz"]);
});
cljs_web3.bzz.block_network_read = (function cljs_web3$bzz$block_network_read(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41900 = arguments.length;
var i__4790__auto___41901 = (0);
while(true){
if((i__4790__auto___41901 < len__4789__auto___41900)){
args__4795__auto__.push((arguments[i__4790__auto___41901]));

var G__41902 = (i__4790__auto___41901 + (1));
i__4790__auto___41901 = G__41902;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.bzz.block_network_read.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.bzz.block_network_read.cljs$core$IFn$_invoke$arity$variadic = (function (web3,args){
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.bzz.get_bzz(web3),"blockNetworkRead",args);
}));

(cljs_web3.bzz.block_network_read.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.bzz.block_network_read.cljs$lang$applyTo = (function (seq41700){
var G__41701 = cljs.core.first(seq41700);
var seq41700__$1 = cljs.core.next(seq41700);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41701,seq41700__$1);
}));

cljs_web3.bzz.download = (function cljs_web3$bzz$download(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41903 = arguments.length;
var i__4790__auto___41904 = (0);
while(true){
if((i__4790__auto___41904 < len__4789__auto___41903)){
args__4795__auto__.push((arguments[i__4790__auto___41904]));

var G__41906 = (i__4790__auto___41904 + (1));
i__4790__auto___41904 = G__41906;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.bzz.download.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.bzz.download.cljs$core$IFn$_invoke$arity$variadic = (function (web3,args){
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.bzz.get_bzz(web3),"download",args);
}));

(cljs_web3.bzz.download.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.bzz.download.cljs$lang$applyTo = (function (seq41708){
var G__41709 = cljs.core.first(seq41708);
var seq41708__$1 = cljs.core.next(seq41708);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41709,seq41708__$1);
}));

cljs_web3.bzz.get = (function cljs_web3$bzz$get(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41908 = arguments.length;
var i__4790__auto___41909 = (0);
while(true){
if((i__4790__auto___41909 < len__4789__auto___41908)){
args__4795__auto__.push((arguments[i__4790__auto___41909]));

var G__41910 = (i__4790__auto___41909 + (1));
i__4790__auto___41909 = G__41910;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.bzz.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.bzz.get.cljs$core$IFn$_invoke$arity$variadic = (function (web3,args){
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.bzz.get_bzz(web3),"get",args);
}));

(cljs_web3.bzz.get.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.bzz.get.cljs$lang$applyTo = (function (seq41721){
var G__41722 = cljs.core.first(seq41721);
var seq41721__$1 = cljs.core.next(seq41721);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41722,seq41721__$1);
}));

cljs_web3.bzz.put = (function cljs_web3$bzz$put(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41912 = arguments.length;
var i__4790__auto___41913 = (0);
while(true){
if((i__4790__auto___41913 < len__4789__auto___41912)){
args__4795__auto__.push((arguments[i__4790__auto___41913]));

var G__41914 = (i__4790__auto___41913 + (1));
i__4790__auto___41913 = G__41914;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.bzz.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.bzz.put.cljs$core$IFn$_invoke$arity$variadic = (function (web3,args){
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.bzz.get_bzz(web3),"put",args);
}));

(cljs_web3.bzz.put.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.bzz.put.cljs$lang$applyTo = (function (seq41759){
var G__41760 = cljs.core.first(seq41759);
var seq41759__$1 = cljs.core.next(seq41759);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41760,seq41759__$1);
}));

cljs_web3.bzz.hive = cljs_web3.utils.prop_or_clb_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["bzz","hive"], 0));
cljs_web3.bzz.info = cljs_web3.utils.prop_or_clb_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["bzz","info"], 0));
cljs_web3.bzz.modify = (function cljs_web3$bzz$modify(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41915 = arguments.length;
var i__4790__auto___41916 = (0);
while(true){
if((i__4790__auto___41916 < len__4789__auto___41915)){
args__4795__auto__.push((arguments[i__4790__auto___41916]));

var G__41917 = (i__4790__auto___41916 + (1));
i__4790__auto___41916 = G__41917;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.bzz.modify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.bzz.modify.cljs$core$IFn$_invoke$arity$variadic = (function (web3,args){
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.bzz.get_bzz(web3),"modify",args);
}));

(cljs_web3.bzz.modify.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.bzz.modify.cljs$lang$applyTo = (function (seq41776){
var G__41777 = cljs.core.first(seq41776);
var seq41776__$1 = cljs.core.next(seq41776);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41777,seq41776__$1);
}));

cljs_web3.bzz.retrieve = (function cljs_web3$bzz$retrieve(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41918 = arguments.length;
var i__4790__auto___41919 = (0);
while(true){
if((i__4790__auto___41919 < len__4789__auto___41918)){
args__4795__auto__.push((arguments[i__4790__auto___41919]));

var G__41920 = (i__4790__auto___41919 + (1));
i__4790__auto___41919 = G__41920;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.bzz.retrieve.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.bzz.retrieve.cljs$core$IFn$_invoke$arity$variadic = (function (web3,args){
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.bzz.get_bzz(web3),"retrieve",args);
}));

(cljs_web3.bzz.retrieve.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.bzz.retrieve.cljs$lang$applyTo = (function (seq41788){
var G__41789 = cljs.core.first(seq41788);
var seq41788__$1 = cljs.core.next(seq41788);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41789,seq41788__$1);
}));

cljs_web3.bzz.store = (function cljs_web3$bzz$store(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41921 = arguments.length;
var i__4790__auto___41922 = (0);
while(true){
if((i__4790__auto___41922 < len__4789__auto___41921)){
args__4795__auto__.push((arguments[i__4790__auto___41922]));

var G__41923 = (i__4790__auto___41922 + (1));
i__4790__auto___41922 = G__41923;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.bzz.store.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.bzz.store.cljs$core$IFn$_invoke$arity$variadic = (function (web3,args){
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.bzz.get_bzz(web3),"store",args);
}));

(cljs_web3.bzz.store.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.bzz.store.cljs$lang$applyTo = (function (seq41809){
var G__41810 = cljs.core.first(seq41809);
var seq41809__$1 = cljs.core.next(seq41809);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41810,seq41809__$1);
}));

cljs_web3.bzz.upload = (function cljs_web3$bzz$upload(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41925 = arguments.length;
var i__4790__auto___41926 = (0);
while(true){
if((i__4790__auto___41926 < len__4789__auto___41925)){
args__4795__auto__.push((arguments[i__4790__auto___41926]));

var G__41927 = (i__4790__auto___41926 + (1));
i__4790__auto___41926 = G__41927;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.bzz.upload.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.bzz.upload.cljs$core$IFn$_invoke$arity$variadic = (function (web3,args){
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.bzz.get_bzz(web3),"upload",args);
}));

(cljs_web3.bzz.upload.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.bzz.upload.cljs$lang$applyTo = (function (seq41846){
var G__41847 = cljs.core.first(seq41846);
var seq41846__$1 = cljs.core.next(seq41846);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41847,seq41846__$1);
}));

cljs_web3.bzz.swap_enabled_QMARK_ = (function cljs_web3$bzz$swap_enabled_QMARK_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41928 = arguments.length;
var i__4790__auto___41929 = (0);
while(true){
if((i__4790__auto___41929 < len__4789__auto___41928)){
args__4795__auto__.push((arguments[i__4790__auto___41929]));

var G__41931 = (i__4790__auto___41929 + (1));
i__4790__auto___41929 = G__41931;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.bzz.swap_enabled_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.bzz.swap_enabled_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (web3,args){
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.bzz.get_bzz(web3),"swapEnabled",args);
}));

(cljs_web3.bzz.swap_enabled_QMARK_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.bzz.swap_enabled_QMARK_.cljs$lang$applyTo = (function (seq41854){
var G__41855 = cljs.core.first(seq41854);
var seq41854__$1 = cljs.core.next(seq41854);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41855,seq41854__$1);
}));

cljs_web3.bzz.sync_enabled_QMARK_ = (function cljs_web3$bzz$sync_enabled_QMARK_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41933 = arguments.length;
var i__4790__auto___41934 = (0);
while(true){
if((i__4790__auto___41934 < len__4789__auto___41933)){
args__4795__auto__.push((arguments[i__4790__auto___41934]));

var G__41935 = (i__4790__auto___41934 + (1));
i__4790__auto___41934 = G__41935;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs_web3.bzz.sync_enabled_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs_web3.bzz.sync_enabled_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (web3,args){
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3(cljs_web3.bzz.get_bzz(web3),"syncEnabled",args);
}));

(cljs_web3.bzz.sync_enabled_QMARK_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_web3.bzz.sync_enabled_QMARK_.cljs$lang$applyTo = (function (seq41876){
var G__41877 = cljs.core.first(seq41876);
var seq41876__$1 = cljs.core.next(seq41876);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41877,seq41876__$1);
}));


//# sourceMappingURL=cljs_web3.bzz.js.map
