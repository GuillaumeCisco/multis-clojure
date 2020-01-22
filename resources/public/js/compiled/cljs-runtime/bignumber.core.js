goog.provide('bignumber.core');
goog.require('cljs.core');
bignumber.core.bignumber_QMARK_ = (function bignumber$core$bignumber_QMARK_(x){
var and__4174__auto__ = x;
if(cljs.core.truth_(and__4174__auto__)){
return (x["toNumber"]);
} else {
return and__4174__auto__;
}
});
bignumber.core.apply_fn = (function bignumber$core$apply_fn(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41013 = arguments.length;
var i__4790__auto___41014 = (0);
while(true){
if((i__4790__auto___41014 < len__4789__auto___41013)){
args__4795__auto__.push((arguments[i__4790__auto___41014]));

var G__41015 = (i__4790__auto___41014 + (1));
i__4790__auto___41014 = G__41015;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return bignumber.core.apply_fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(bignumber.core.apply_fn.cljs$core$IFn$_invoke$arity$variadic = (function (bn_fn_name,native_fn,x,args){
if(cljs.core.truth_(bignumber.core.bignumber_QMARK_(x))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.js_invoke,x,bn_fn_name,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(native_fn,x,args);
}
}));

(bignumber.core.apply_fn.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(bignumber.core.apply_fn.cljs$lang$applyTo = (function (seq40833){
var G__40835 = cljs.core.first(seq40833);
var seq40833__$1 = cljs.core.next(seq40833);
var G__40836 = cljs.core.first(seq40833__$1);
var seq40833__$2 = cljs.core.next(seq40833__$1);
var G__40837 = cljs.core.first(seq40833__$2);
var seq40833__$3 = cljs.core.next(seq40833__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40835,G__40836,G__40837,seq40833__$3);
}));

bignumber.core.apply_arithmetic_fn = (function bignumber$core$apply_arithmetic_fn(bn_fn_name,native_fn,x,y,base){
if(cljs.core.truth_(bignumber.core.bignumber_QMARK_(x))){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(x,bn_fn_name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([y,base], 0));
} else {
return (native_fn.cljs$core$IFn$_invoke$arity$2 ? native_fn.cljs$core$IFn$_invoke$arity$2(x,y) : native_fn.call(null,x,y));
}
});
bignumber.core.number = (function bignumber$core$number(x){
return bignumber.core.apply_fn("toNumber",(function (x__$1){
var x__$2 = parseFloat(x__$1);
if(cljs.core.truth_(isNaN(x__$2))){
return null;
} else {
return x__$2;
}
}),x);
});
bignumber.core.abs = (function bignumber$core$abs(x){
return bignumber.core.apply_fn("abs",Math.abs,x);
});
bignumber.core.ceil = (function bignumber$core$ceil(x){
return bignumber.core.apply_fn("ceil",Math.ceil,x);
});
bignumber.core.cmp = (function bignumber$core$cmp(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41016 = arguments.length;
var i__4790__auto___41017 = (0);
while(true){
if((i__4790__auto___41017 < len__4789__auto___41016)){
args__4795__auto__.push((arguments[i__4790__auto___41017]));

var G__41018 = (i__4790__auto___41017 + (1));
i__4790__auto___41017 = G__41018;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return bignumber.core.cmp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(bignumber.core.cmp.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__40877){
var vec__40878 = p__40877;
var base = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40878,(0),null);
return bignumber.core.apply_fn.cljs$core$IFn$_invoke$arity$variadic("cmp",cljs.core.compare,x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([base], 0));
}));

(bignumber.core.cmp.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bignumber.core.cmp.cljs$lang$applyTo = (function (seq40875){
var G__40876 = cljs.core.first(seq40875);
var seq40875__$1 = cljs.core.next(seq40875);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40876,seq40875__$1);
}));

bignumber.core.dp = (function bignumber$core$dp(x){
return bignumber.core.apply_fn("dp",cljs.core.identity,x);
});
bignumber.core._SLASH_ = (function bignumber$core$_SLASH_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41019 = arguments.length;
var i__4790__auto___41020 = (0);
while(true){
if((i__4790__auto___41020 < len__4789__auto___41019)){
args__4795__auto__.push((arguments[i__4790__auto___41020]));

var G__41021 = (i__4790__auto___41020 + (1));
i__4790__auto___41020 = G__41021;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return bignumber.core._SLASH_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(bignumber.core._SLASH_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,p__40884){
var vec__40885 = p__40884;
var base = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40885,(0),null);
return bignumber.core.apply_arithmetic_fn("div",cljs.core.divide,x,y,base);
}));

(bignumber.core._SLASH_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(bignumber.core._SLASH_.cljs$lang$applyTo = (function (seq40881){
var G__40882 = cljs.core.first(seq40881);
var seq40881__$1 = cljs.core.next(seq40881);
var G__40883 = cljs.core.first(seq40881__$1);
var seq40881__$2 = cljs.core.next(seq40881__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40882,G__40883,seq40881__$2);
}));

bignumber.core.div_to_int = (function bignumber$core$div_to_int(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41022 = arguments.length;
var i__4790__auto___41023 = (0);
while(true){
if((i__4790__auto___41023 < len__4789__auto___41022)){
args__4795__auto__.push((arguments[i__4790__auto___41023]));

var G__41024 = (i__4790__auto___41023 + (1));
i__4790__auto___41023 = G__41024;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return bignumber.core.div_to_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(bignumber.core.div_to_int.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,p__40891){
var vec__40892 = p__40891;
var base = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40892,(0),null);
return bignumber.core.apply_arithmetic_fn("divToInt",cljs.core.divide,x,y,base);
}));

(bignumber.core.div_to_int.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(bignumber.core.div_to_int.cljs$lang$applyTo = (function (seq40888){
var G__40889 = cljs.core.first(seq40888);
var seq40888__$1 = cljs.core.next(seq40888);
var G__40890 = cljs.core.first(seq40888__$1);
var seq40888__$2 = cljs.core.next(seq40888__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40889,G__40890,seq40888__$2);
}));

bignumber.core._EQ_ = (function bignumber$core$_EQ_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41026 = arguments.length;
var i__4790__auto___41027 = (0);
while(true){
if((i__4790__auto___41027 < len__4789__auto___41026)){
args__4795__auto__.push((arguments[i__4790__auto___41027]));

var G__41028 = (i__4790__auto___41027 + (1));
i__4790__auto___41027 = G__41028;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return bignumber.core._EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(bignumber.core._EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,p__40898){
var vec__40899 = p__40898;
var base = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40899,(0),null);
return bignumber.core.apply_arithmetic_fn("eq",cljs.core._EQ_,x,y,base);
}));

(bignumber.core._EQ_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(bignumber.core._EQ_.cljs$lang$applyTo = (function (seq40895){
var G__40896 = cljs.core.first(seq40895);
var seq40895__$1 = cljs.core.next(seq40895);
var G__40897 = cljs.core.first(seq40895__$1);
var seq40895__$2 = cljs.core.next(seq40895__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40896,G__40897,seq40895__$2);
}));

bignumber.core.floor = (function bignumber$core$floor(x){
return bignumber.core.apply_fn("floor",Math.floor,x);
});
bignumber.core._GT_ = (function bignumber$core$_GT_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41029 = arguments.length;
var i__4790__auto___41030 = (0);
while(true){
if((i__4790__auto___41030 < len__4789__auto___41029)){
args__4795__auto__.push((arguments[i__4790__auto___41030]));

var G__41031 = (i__4790__auto___41030 + (1));
i__4790__auto___41030 = G__41031;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return bignumber.core._GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(bignumber.core._GT_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,p__40905){
var vec__40906 = p__40905;
var base = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40906,(0),null);
return bignumber.core.apply_arithmetic_fn("gt",cljs.core._GT_,x,y,base);
}));

(bignumber.core._GT_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(bignumber.core._GT_.cljs$lang$applyTo = (function (seq40902){
var G__40903 = cljs.core.first(seq40902);
var seq40902__$1 = cljs.core.next(seq40902);
var G__40904 = cljs.core.first(seq40902__$1);
var seq40902__$2 = cljs.core.next(seq40902__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40903,G__40904,seq40902__$2);
}));

bignumber.core._GT__EQ_ = (function bignumber$core$_GT__EQ_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41032 = arguments.length;
var i__4790__auto___41033 = (0);
while(true){
if((i__4790__auto___41033 < len__4789__auto___41032)){
args__4795__auto__.push((arguments[i__4790__auto___41033]));

var G__41034 = (i__4790__auto___41033 + (1));
i__4790__auto___41033 = G__41034;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return bignumber.core._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(bignumber.core._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,p__40912){
var vec__40913 = p__40912;
var base = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40913,(0),null);
return bignumber.core.apply_arithmetic_fn("gte",cljs.core._GT__EQ_,x,y,base);
}));

(bignumber.core._GT__EQ_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(bignumber.core._GT__EQ_.cljs$lang$applyTo = (function (seq40909){
var G__40910 = cljs.core.first(seq40909);
var seq40909__$1 = cljs.core.next(seq40909);
var G__40911 = cljs.core.first(seq40909__$1);
var seq40909__$2 = cljs.core.next(seq40909__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40910,G__40911,seq40909__$2);
}));

bignumber.core.finite_QMARK_ = (function bignumber$core$finite_QMARK_(x){
return bignumber.core.apply_fn("isFinite",cljs.core.complement(cljs.core.infinite_QMARK_),x);
});
bignumber.core.int_QMARK_ = (function bignumber$core$int_QMARK_(x){
return bignumber.core.apply_fn("isInt",cljs.core.int_QMARK_,x);
});
bignumber.core.nan_QMARK_ = (function bignumber$core$nan_QMARK_(x){
return bignumber.core.apply_fn("isNaN",isNaN,x);
});
bignumber.core.neg_QMARK_ = (function bignumber$core$neg_QMARK_(x){
return bignumber.core.apply_fn("isNeg",cljs.core.neg_QMARK_,x);
});
bignumber.core.zero_QMARK_ = (function bignumber$core$zero_QMARK_(x){
return bignumber.core.apply_fn("isZero",cljs.core.zero_QMARK_,x);
});
bignumber.core._LT_ = (function bignumber$core$_LT_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41035 = arguments.length;
var i__4790__auto___41036 = (0);
while(true){
if((i__4790__auto___41036 < len__4789__auto___41035)){
args__4795__auto__.push((arguments[i__4790__auto___41036]));

var G__41037 = (i__4790__auto___41036 + (1));
i__4790__auto___41036 = G__41037;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return bignumber.core._LT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(bignumber.core._LT_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,p__40919){
var vec__40920 = p__40919;
var base = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40920,(0),null);
return bignumber.core.apply_arithmetic_fn("lt",cljs.core._LT_,x,y,base);
}));

(bignumber.core._LT_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(bignumber.core._LT_.cljs$lang$applyTo = (function (seq40916){
var G__40917 = cljs.core.first(seq40916);
var seq40916__$1 = cljs.core.next(seq40916);
var G__40918 = cljs.core.first(seq40916__$1);
var seq40916__$2 = cljs.core.next(seq40916__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40917,G__40918,seq40916__$2);
}));

bignumber.core._LT__EQ_ = (function bignumber$core$_LT__EQ_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41038 = arguments.length;
var i__4790__auto___41039 = (0);
while(true){
if((i__4790__auto___41039 < len__4789__auto___41038)){
args__4795__auto__.push((arguments[i__4790__auto___41039]));

var G__41040 = (i__4790__auto___41039 + (1));
i__4790__auto___41039 = G__41040;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return bignumber.core._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(bignumber.core._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,p__40926){
var vec__40927 = p__40926;
var base = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40927,(0),null);
return bignumber.core.apply_arithmetic_fn("lte",cljs.core._LT__EQ_,x,y,base);
}));

(bignumber.core._LT__EQ_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(bignumber.core._LT__EQ_.cljs$lang$applyTo = (function (seq40923){
var G__40924 = cljs.core.first(seq40923);
var seq40923__$1 = cljs.core.next(seq40923);
var G__40925 = cljs.core.first(seq40923__$1);
var seq40923__$2 = cljs.core.next(seq40923__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40924,G__40925,seq40923__$2);
}));

bignumber.core._ = (function bignumber$core$_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41042 = arguments.length;
var i__4790__auto___41043 = (0);
while(true){
if((i__4790__auto___41043 < len__4789__auto___41042)){
args__4795__auto__.push((arguments[i__4790__auto___41043]));

var G__41044 = (i__4790__auto___41043 + (1));
i__4790__auto___41043 = G__41044;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return bignumber.core._.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(bignumber.core._.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,p__40933){
var vec__40934 = p__40933;
var base = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40934,(0),null);
return bignumber.core.apply_arithmetic_fn("minus",cljs.core._,x,y,base);
}));

(bignumber.core._.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(bignumber.core._.cljs$lang$applyTo = (function (seq40930){
var G__40931 = cljs.core.first(seq40930);
var seq40930__$1 = cljs.core.next(seq40930);
var G__40932 = cljs.core.first(seq40930__$1);
var seq40930__$2 = cljs.core.next(seq40930__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40931,G__40932,seq40930__$2);
}));

bignumber.core.mod = (function bignumber$core$mod(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41045 = arguments.length;
var i__4790__auto___41046 = (0);
while(true){
if((i__4790__auto___41046 < len__4789__auto___41045)){
args__4795__auto__.push((arguments[i__4790__auto___41046]));

var G__41047 = (i__4790__auto___41046 + (1));
i__4790__auto___41046 = G__41047;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return bignumber.core.mod.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(bignumber.core.mod.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,p__40940){
var vec__40941 = p__40940;
var base = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40941,(0),null);
return bignumber.core.apply_arithmetic_fn("mod",cljs.core.mod,x,y,base);
}));

(bignumber.core.mod.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(bignumber.core.mod.cljs$lang$applyTo = (function (seq40937){
var G__40938 = cljs.core.first(seq40937);
var seq40937__$1 = cljs.core.next(seq40937);
var G__40939 = cljs.core.first(seq40937__$1);
var seq40937__$2 = cljs.core.next(seq40937__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40938,G__40939,seq40937__$2);
}));

bignumber.core.neg = (function bignumber$core$neg(x){
return bignumber.core.apply_fn("neg",cljs.core.unchecked_negate,x);
});
bignumber.core._PLUS_ = (function bignumber$core$_PLUS_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41048 = arguments.length;
var i__4790__auto___41049 = (0);
while(true){
if((i__4790__auto___41049 < len__4789__auto___41048)){
args__4795__auto__.push((arguments[i__4790__auto___41049]));

var G__41050 = (i__4790__auto___41049 + (1));
i__4790__auto___41049 = G__41050;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return bignumber.core._PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(bignumber.core._PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,p__40947){
var vec__40948 = p__40947;
var base = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40948,(0),null);
return bignumber.core.apply_arithmetic_fn("plus",cljs.core._PLUS_,x,y,base);
}));

(bignumber.core._PLUS_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(bignumber.core._PLUS_.cljs$lang$applyTo = (function (seq40944){
var G__40945 = cljs.core.first(seq40944);
var seq40944__$1 = cljs.core.next(seq40944);
var G__40946 = cljs.core.first(seq40944__$1);
var seq40944__$2 = cljs.core.next(seq40944__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40945,G__40946,seq40944__$2);
}));

bignumber.core.sd = (function bignumber$core$sd(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41051 = arguments.length;
var i__4790__auto___41052 = (0);
while(true){
if((i__4790__auto___41052 < len__4789__auto___41051)){
args__4795__auto__.push((arguments[i__4790__auto___41052]));

var G__41053 = (i__4790__auto___41052 + (1));
i__4790__auto___41052 = G__41053;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return bignumber.core.sd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(bignumber.core.sd.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__40953){
var vec__40954 = p__40953;
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40954,(0),null);
return bignumber.core.apply_fn.cljs$core$IFn$_invoke$arity$variadic("sd",cljs.core.constantly(null),x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([z], 0));
}));

(bignumber.core.sd.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bignumber.core.sd.cljs$lang$applyTo = (function (seq40951){
var G__40952 = cljs.core.first(seq40951);
var seq40951__$1 = cljs.core.next(seq40951);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40952,seq40951__$1);
}));

bignumber.core.round = (function bignumber$core$round(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41054 = arguments.length;
var i__4790__auto___41055 = (0);
while(true){
if((i__4790__auto___41055 < len__4789__auto___41054)){
args__4795__auto__.push((arguments[i__4790__auto___41055]));

var G__41056 = (i__4790__auto___41055 + (1));
i__4790__auto___41055 = G__41056;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return bignumber.core.round.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(bignumber.core.round.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__40959){
var vec__40960 = p__40959;
var dp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40960,(0),null);
var rm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40960,(1),null);
return bignumber.core.apply_fn.cljs$core$IFn$_invoke$arity$variadic("round",Math.round,x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dp,rm], 0));
}));

(bignumber.core.round.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bignumber.core.round.cljs$lang$applyTo = (function (seq40957){
var G__40958 = cljs.core.first(seq40957);
var seq40957__$1 = cljs.core.next(seq40957);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40958,seq40957__$1);
}));

bignumber.core.shift = (function bignumber$core$shift(x,z){
return bignumber.core.apply_fn.cljs$core$IFn$_invoke$arity$variadic("shift",cljs.core.constantly(null),x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bignumber.core.dp,z], 0));
});
bignumber.core.sqrt = (function bignumber$core$sqrt(x){
return bignumber.core.apply_fn("sqrt",Math.sqrt,x);
});
bignumber.core._STAR_ = (function bignumber$core$_STAR_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41057 = arguments.length;
var i__4790__auto___41058 = (0);
while(true){
if((i__4790__auto___41058 < len__4789__auto___41057)){
args__4795__auto__.push((arguments[i__4790__auto___41058]));

var G__41059 = (i__4790__auto___41058 + (1));
i__4790__auto___41058 = G__41059;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return bignumber.core._STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(bignumber.core._STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,p__40966){
var vec__40967 = p__40966;
var base = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40967,(0),null);
return bignumber.core.apply_arithmetic_fn("times",cljs.core._STAR_,x,y,base);
}));

(bignumber.core._STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(bignumber.core._STAR_.cljs$lang$applyTo = (function (seq40963){
var G__40964 = cljs.core.first(seq40963);
var seq40963__$1 = cljs.core.next(seq40963);
var G__40965 = cljs.core.first(seq40963__$1);
var seq40963__$2 = cljs.core.next(seq40963__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40964,G__40965,seq40963__$2);
}));

bignumber.core.digits = (function bignumber$core$digits(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41060 = arguments.length;
var i__4790__auto___41061 = (0);
while(true){
if((i__4790__auto___41061 < len__4789__auto___41060)){
args__4795__auto__.push((arguments[i__4790__auto___41061]));

var G__41062 = (i__4790__auto___41061 + (1));
i__4790__auto___41061 = G__41062;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return bignumber.core.digits.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(bignumber.core.digits.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__40972){
var vec__40973 = p__40972;
var sd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40973,(0),null);
var rm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40973,(1),null);
return bignumber.core.apply_fn.cljs$core$IFn$_invoke$arity$variadic("toDigits",cljs.core.identity,x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sd,rm], 0));
}));

(bignumber.core.digits.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bignumber.core.digits.cljs$lang$applyTo = (function (seq40970){
var G__40971 = cljs.core.first(seq40970);
var seq40970__$1 = cljs.core.next(seq40970);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40971,seq40970__$1);
}));

bignumber.core.exponential = (function bignumber$core$exponential(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41065 = arguments.length;
var i__4790__auto___41066 = (0);
while(true){
if((i__4790__auto___41066 < len__4789__auto___41065)){
args__4795__auto__.push((arguments[i__4790__auto___41066]));

var G__41067 = (i__4790__auto___41066 + (1));
i__4790__auto___41066 = G__41067;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return bignumber.core.exponential.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(bignumber.core.exponential.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__40978){
var vec__40979 = p__40978;
var dp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40979,(0),null);
var rm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40979,(1),null);
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(x,"toExponential",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dp,rm], 0));
}));

(bignumber.core.exponential.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bignumber.core.exponential.cljs$lang$applyTo = (function (seq40976){
var G__40977 = cljs.core.first(seq40976);
var seq40976__$1 = cljs.core.next(seq40976);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40977,seq40976__$1);
}));

bignumber.core.fixed = (function bignumber$core$fixed(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41068 = arguments.length;
var i__4790__auto___41069 = (0);
while(true){
if((i__4790__auto___41069 < len__4789__auto___41068)){
args__4795__auto__.push((arguments[i__4790__auto___41069]));

var G__41070 = (i__4790__auto___41069 + (1));
i__4790__auto___41069 = G__41070;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return bignumber.core.fixed.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(bignumber.core.fixed.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__40984){
var vec__40985 = p__40984;
var dp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40985,(0),null);
var rm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40985,(1),null);
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(x,"toFixed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dp,rm], 0));
}));

(bignumber.core.fixed.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bignumber.core.fixed.cljs$lang$applyTo = (function (seq40982){
var G__40983 = cljs.core.first(seq40982);
var seq40982__$1 = cljs.core.next(seq40982);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40983,seq40982__$1);
}));

bignumber.core.format = (function bignumber$core$format(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41071 = arguments.length;
var i__4790__auto___41072 = (0);
while(true){
if((i__4790__auto___41072 < len__4789__auto___41071)){
args__4795__auto__.push((arguments[i__4790__auto___41072]));

var G__41073 = (i__4790__auto___41072 + (1));
i__4790__auto___41072 = G__41073;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return bignumber.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(bignumber.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__40990){
var vec__40991 = p__40990;
var dp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40991,(0),null);
var rm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40991,(1),null);
return bignumber.core.apply_fn.cljs$core$IFn$_invoke$arity$variadic("toFormat",cljs.core.identity,x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dp,rm], 0));
}));

(bignumber.core.format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bignumber.core.format.cljs$lang$applyTo = (function (seq40988){
var G__40989 = cljs.core.first(seq40988);
var seq40988__$1 = cljs.core.next(seq40988);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40989,seq40988__$1);
}));

bignumber.core.fraction = (function bignumber$core$fraction(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41074 = arguments.length;
var i__4790__auto___41075 = (0);
while(true){
if((i__4790__auto___41075 < len__4789__auto___41074)){
args__4795__auto__.push((arguments[i__4790__auto___41075]));

var G__41076 = (i__4790__auto___41075 + (1));
i__4790__auto___41075 = G__41076;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return bignumber.core.fraction.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(bignumber.core.fraction.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__40996){
var vec__40997 = p__40996;
var max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40997,(0),null);
return bignumber.core.apply_fn.cljs$core$IFn$_invoke$arity$variadic("toFraction",cljs.core.identity,x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map], 0));
}));

(bignumber.core.fraction.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bignumber.core.fraction.cljs$lang$applyTo = (function (seq40994){
var G__40995 = cljs.core.first(seq40994);
var seq40994__$1 = cljs.core.next(seq40994);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40995,seq40994__$1);
}));

bignumber.core.json = (function bignumber$core$json(x){
return bignumber.core.apply_fn("toJSON",JSON.stringify,x);
});
bignumber.core.pow = (function bignumber$core$pow(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41077 = arguments.length;
var i__4790__auto___41078 = (0);
while(true){
if((i__4790__auto___41078 < len__4789__auto___41077)){
args__4795__auto__.push((arguments[i__4790__auto___41078]));

var G__41079 = (i__4790__auto___41078 + (1));
i__4790__auto___41078 = G__41079;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return bignumber.core.pow.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(bignumber.core.pow.cljs$core$IFn$_invoke$arity$variadic = (function (x,n,p__41003){
var vec__41004 = p__41003;
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41004,(0),null);
return bignumber.core.apply_fn.cljs$core$IFn$_invoke$arity$variadic("pow",Math.pow,x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n,m], 0));
}));

(bignumber.core.pow.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(bignumber.core.pow.cljs$lang$applyTo = (function (seq41000){
var G__41001 = cljs.core.first(seq41000);
var seq41000__$1 = cljs.core.next(seq41000);
var G__41002 = cljs.core.first(seq41000__$1);
var seq41000__$2 = cljs.core.next(seq41000__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41001,G__41002,seq41000__$2);
}));

bignumber.core.precision = (function bignumber$core$precision(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41080 = arguments.length;
var i__4790__auto___41081 = (0);
while(true){
if((i__4790__auto___41081 < len__4789__auto___41080)){
args__4795__auto__.push((arguments[i__4790__auto___41081]));

var G__41082 = (i__4790__auto___41081 + (1));
i__4790__auto___41081 = G__41082;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return bignumber.core.precision.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(bignumber.core.precision.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__41009){
var vec__41010 = p__41009;
var sd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41010,(0),null);
var rm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41010,(1),null);
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(x,"toPrecision",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sd,rm], 0));
}));

(bignumber.core.precision.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bignumber.core.precision.cljs$lang$applyTo = (function (seq41007){
var G__41008 = cljs.core.first(seq41007);
var seq41007__$1 = cljs.core.next(seq41007);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41008,seq41007__$1);
}));

bignumber.core.trunc = (function bignumber$core$trunc(x){
if(cljs.core.truth_(bignumber.core.bignumber_QMARK_(x))){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(x,"trunc",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
} else {
if(typeof x === 'number'){
return (x | (0));
} else {
return x;

}
}
});
bignumber.core.value_of = (function bignumber$core$value_of(x){
return cljs.core.js_invoke(x,"valueOf");
});

//# sourceMappingURL=bignumber.core.js.map
