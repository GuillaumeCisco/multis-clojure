goog.provide('camel_snake_kebab.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('camel_snake_kebab.internals.misc');
goog.require('camel_snake_kebab.internals.alter_name');
/**
 * Converts the case of a string according to the rule for the first
 *   word, remaining words, and the separator.
 */
camel_snake_kebab.core.convert_case = (function camel_snake_kebab$core$convert_case(var_args){
var args__4795__auto__ = [];
var len__4789__auto___40930 = arguments.length;
var i__4790__auto___40931 = (0);
while(true){
if((i__4790__auto___40931 < len__4789__auto___40930)){
args__4795__auto__.push((arguments[i__4790__auto___40931]));

var G__40932 = (i__4790__auto___40931 + (1));
i__4790__auto___40931 = G__40932;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((4) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4796__auto__);
});

(camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,rest){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,first_fn,rest_fn,sep,s,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest], 0));
}));

(camel_snake_kebab.core.convert_case.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq40869){
var G__40870 = cljs.core.first(seq40869);
var seq40869__$1 = cljs.core.next(seq40869);
var G__40871 = cljs.core.first(seq40869__$1);
var seq40869__$2 = cljs.core.next(seq40869__$1);
var G__40872 = cljs.core.first(seq40869__$2);
var seq40869__$3 = cljs.core.next(seq40869__$2);
var G__40873 = cljs.core.first(seq40869__$3);
var seq40869__$4 = cljs.core.next(seq40869__$3);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40870,G__40871,G__40872,G__40873,seq40869__$4);
}));

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__4795__auto__ = [];
var len__4789__auto___40939 = arguments.length;
var i__4790__auto___40940 = (0);
while(true){
if((i__4790__auto___40940 < len__4789__auto___40939)){
args__4795__auto__.push((arguments[i__4790__auto___40940]));

var G__40941 = (i__4790__auto___40940 + (1));
i__4790__auto___40940 = G__40941;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__40834__auto__,rest__40835__auto__){
var convert_case__40836__auto__ = (function (p1__40833__40837__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__40833__40837__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__40835__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__40834__auto__,convert_case__40836__auto__);
}));

(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq40874){
var G__40875 = cljs.core.first(seq40874);
var seq40874__$1 = cljs.core.next(seq40874);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40875,seq40874__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__4795__auto__ = [];
var len__4789__auto___40946 = arguments.length;
var i__4790__auto___40947 = (0);
while(true){
if((i__4790__auto___40947 < len__4789__auto___40946)){
args__4795__auto__.push((arguments[i__4790__auto___40947]));

var G__40948 = (i__4790__auto___40947 + (1));
i__4790__auto___40947 = G__40948;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__40839__auto__,rest__40840__auto__){
if((!((s__40839__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__40839__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__40839__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__40840__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq40876){
var G__40877 = cljs.core.first(seq40876);
var seq40876__$1 = cljs.core.next(seq40876);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40877,seq40876__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__4795__auto__ = [];
var len__4789__auto___40955 = arguments.length;
var i__4790__auto___40956 = (0);
while(true){
if((i__4790__auto___40956 < len__4789__auto___40955)){
args__4795__auto__.push((arguments[i__4790__auto___40956]));

var G__40957 = (i__4790__auto___40956 + (1));
i__4790__auto___40956 = G__40957;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__40839__auto__,rest__40840__auto__){
if((!((s__40839__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__40839__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__40839__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__40840__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq40878){
var G__40879 = cljs.core.first(seq40878);
var seq40878__$1 = cljs.core.next(seq40878);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40879,seq40878__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__4795__auto__ = [];
var len__4789__auto___40959 = arguments.length;
var i__4790__auto___40960 = (0);
while(true){
if((i__4790__auto___40960 < len__4789__auto___40959)){
args__4795__auto__.push((arguments[i__4790__auto___40960]));

var G__40961 = (i__4790__auto___40960 + (1));
i__4790__auto___40960 = G__40961;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__40839__auto__,rest__40840__auto__){
if((!((s__40839__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__40839__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__40839__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__40840__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq40880){
var G__40881 = cljs.core.first(seq40880);
var seq40880__$1 = cljs.core.next(seq40880);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40881,seq40880__$1);
}));

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__4795__auto__ = [];
var len__4789__auto___40967 = arguments.length;
var i__4790__auto___40968 = (0);
while(true){
if((i__4790__auto___40968 < len__4789__auto___40967)){
args__4795__auto__.push((arguments[i__4790__auto___40968]));

var G__40969 = (i__4790__auto___40968 + (1));
i__4790__auto___40968 = G__40969;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__40834__auto__,rest__40835__auto__){
var convert_case__40836__auto__ = (function (p1__40833__40837__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__40833__40837__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__40835__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__40834__auto__,convert_case__40836__auto__);
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq40882){
var G__40883 = cljs.core.first(seq40882);
var seq40882__$1 = cljs.core.next(seq40882);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40883,seq40882__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__4795__auto__ = [];
var len__4789__auto___40972 = arguments.length;
var i__4790__auto___40973 = (0);
while(true){
if((i__4790__auto___40973 < len__4789__auto___40972)){
args__4795__auto__.push((arguments[i__4790__auto___40973]));

var G__40974 = (i__4790__auto___40973 + (1));
i__4790__auto___40973 = G__40974;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__40839__auto__,rest__40840__auto__){
if((!((s__40839__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__40839__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__40839__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__40840__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq40884){
var G__40885 = cljs.core.first(seq40884);
var seq40884__$1 = cljs.core.next(seq40884);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40885,seq40884__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__4795__auto__ = [];
var len__4789__auto___40978 = arguments.length;
var i__4790__auto___40979 = (0);
while(true){
if((i__4790__auto___40979 < len__4789__auto___40978)){
args__4795__auto__.push((arguments[i__4790__auto___40979]));

var G__40982 = (i__4790__auto___40979 + (1));
i__4790__auto___40979 = G__40982;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__40839__auto__,rest__40840__auto__){
if((!((s__40839__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__40839__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__40839__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__40840__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq40886){
var G__40887 = cljs.core.first(seq40886);
var seq40886__$1 = cljs.core.next(seq40886);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40887,seq40886__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__4795__auto__ = [];
var len__4789__auto___40984 = arguments.length;
var i__4790__auto___40985 = (0);
while(true){
if((i__4790__auto___40985 < len__4789__auto___40984)){
args__4795__auto__.push((arguments[i__4790__auto___40985]));

var G__40987 = (i__4790__auto___40985 + (1));
i__4790__auto___40985 = G__40987;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__40839__auto__,rest__40840__auto__){
if((!((s__40839__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__40839__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__40839__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__40840__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq40888){
var G__40889 = cljs.core.first(seq40888);
var seq40888__$1 = cljs.core.next(seq40888);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40889,seq40888__$1);
}));

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__4795__auto__ = [];
var len__4789__auto___40988 = arguments.length;
var i__4790__auto___40989 = (0);
while(true){
if((i__4790__auto___40989 < len__4789__auto___40988)){
args__4795__auto__.push((arguments[i__4790__auto___40989]));

var G__40990 = (i__4790__auto___40989 + (1));
i__4790__auto___40989 = G__40990;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__40834__auto__,rest__40835__auto__){
var convert_case__40836__auto__ = (function (p1__40833__40837__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__40833__40837__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__40835__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__40834__auto__,convert_case__40836__auto__);
}));

(camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq40890){
var G__40891 = cljs.core.first(seq40890);
var seq40890__$1 = cljs.core.next(seq40890);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40891,seq40890__$1);
}));


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__4795__auto__ = [];
var len__4789__auto___40996 = arguments.length;
var i__4790__auto___40997 = (0);
while(true){
if((i__4790__auto___40997 < len__4789__auto___40996)){
args__4795__auto__.push((arguments[i__4790__auto___40997]));

var G__40998 = (i__4790__auto___40997 + (1));
i__4790__auto___40997 = G__40998;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__40839__auto__,rest__40840__auto__){
if((!((s__40839__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__40839__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__40839__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__40840__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq40892){
var G__40893 = cljs.core.first(seq40892);
var seq40892__$1 = cljs.core.next(seq40892);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40893,seq40892__$1);
}));


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41000 = arguments.length;
var i__4790__auto___41001 = (0);
while(true){
if((i__4790__auto___41001 < len__4789__auto___41000)){
args__4795__auto__.push((arguments[i__4790__auto___41001]));

var G__41002 = (i__4790__auto___41001 + (1));
i__4790__auto___41001 = G__41002;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__40839__auto__,rest__40840__auto__){
if((!((s__40839__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__40839__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__40839__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__40840__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq40894){
var G__40895 = cljs.core.first(seq40894);
var seq40894__$1 = cljs.core.next(seq40894);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40895,seq40894__$1);
}));


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41005 = arguments.length;
var i__4790__auto___41006 = (0);
while(true){
if((i__4790__auto___41006 < len__4789__auto___41005)){
args__4795__auto__.push((arguments[i__4790__auto___41006]));

var G__41007 = (i__4790__auto___41006 + (1));
i__4790__auto___41006 = G__41007;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__40839__auto__,rest__40840__auto__){
if((!((s__40839__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__40839__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__40839__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__40840__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq40896){
var G__40897 = cljs.core.first(seq40896);
var seq40896__$1 = cljs.core.next(seq40896);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40897,seq40896__$1);
}));

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
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

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__40834__auto__,rest__40835__auto__){
var convert_case__40836__auto__ = (function (p1__40833__40837__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__40833__40837__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__40835__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__40834__auto__,convert_case__40836__auto__);
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq40898){
var G__40899 = cljs.core.first(seq40898);
var seq40898__$1 = cljs.core.next(seq40898);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40899,seq40898__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41017 = arguments.length;
var i__4790__auto___41018 = (0);
while(true){
if((i__4790__auto___41018 < len__4789__auto___41017)){
args__4795__auto__.push((arguments[i__4790__auto___41018]));

var G__41019 = (i__4790__auto___41018 + (1));
i__4790__auto___41018 = G__41019;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__40839__auto__,rest__40840__auto__){
if((!((s__40839__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__40839__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__40839__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__40840__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq40900){
var G__40901 = cljs.core.first(seq40900);
var seq40900__$1 = cljs.core.next(seq40900);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40901,seq40900__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41024 = arguments.length;
var i__4790__auto___41026 = (0);
while(true){
if((i__4790__auto___41026 < len__4789__auto___41024)){
args__4795__auto__.push((arguments[i__4790__auto___41026]));

var G__41027 = (i__4790__auto___41026 + (1));
i__4790__auto___41026 = G__41027;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__40839__auto__,rest__40840__auto__){
if((!((s__40839__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__40839__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__40839__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__40840__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq40902){
var G__40903 = cljs.core.first(seq40902);
var seq40902__$1 = cljs.core.next(seq40902);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40903,seq40902__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41030 = arguments.length;
var i__4790__auto___41031 = (0);
while(true){
if((i__4790__auto___41031 < len__4789__auto___41030)){
args__4795__auto__.push((arguments[i__4790__auto___41031]));

var G__41032 = (i__4790__auto___41031 + (1));
i__4790__auto___41031 = G__41032;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__40839__auto__,rest__40840__auto__){
if((!((s__40839__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__40839__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__40839__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__40840__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq40904){
var G__40905 = cljs.core.first(seq40904);
var seq40904__$1 = cljs.core.next(seq40904);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40905,seq40904__$1);
}));

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41034 = arguments.length;
var i__4790__auto___41035 = (0);
while(true){
if((i__4790__auto___41035 < len__4789__auto___41034)){
args__4795__auto__.push((arguments[i__4790__auto___41035]));

var G__41038 = (i__4790__auto___41035 + (1));
i__4790__auto___41035 = G__41038;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__40834__auto__,rest__40835__auto__){
var convert_case__40836__auto__ = (function (p1__40833__40837__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__40833__40837__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__40835__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__40834__auto__,convert_case__40836__auto__);
}));

(camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq40906){
var G__40907 = cljs.core.first(seq40906);
var seq40906__$1 = cljs.core.next(seq40906);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40907,seq40906__$1);
}));


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
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

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__40839__auto__,rest__40840__auto__){
if((!((s__40839__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__40839__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__40839__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__40840__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq40908){
var G__40909 = cljs.core.first(seq40908);
var seq40908__$1 = cljs.core.next(seq40908);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40909,seq40908__$1);
}));


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41047 = arguments.length;
var i__4790__auto___41048 = (0);
while(true){
if((i__4790__auto___41048 < len__4789__auto___41047)){
args__4795__auto__.push((arguments[i__4790__auto___41048]));

var G__41049 = (i__4790__auto___41048 + (1));
i__4790__auto___41048 = G__41049;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__40839__auto__,rest__40840__auto__){
if((!((s__40839__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__40839__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__40839__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__40840__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq40910){
var G__40911 = cljs.core.first(seq40910);
var seq40910__$1 = cljs.core.next(seq40910);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40911,seq40910__$1);
}));


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
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
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__40839__auto__,rest__40840__auto__){
if((!((s__40839__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__40839__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__40839__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__40840__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq40912){
var G__40913 = cljs.core.first(seq40912);
var seq40912__$1 = cljs.core.next(seq40912);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40913,seq40912__$1);
}));

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
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
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__40834__auto__,rest__40835__auto__){
var convert_case__40836__auto__ = (function (p1__40833__40837__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__40833__40837__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__40835__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__40834__auto__,convert_case__40836__auto__);
}));

(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq40914){
var G__40915 = cljs.core.first(seq40914);
var seq40914__$1 = cljs.core.next(seq40914);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40915,seq40914__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41058 = arguments.length;
var i__4790__auto___41059 = (0);
while(true){
if((i__4790__auto___41059 < len__4789__auto___41058)){
args__4795__auto__.push((arguments[i__4790__auto___41059]));

var G__41060 = (i__4790__auto___41059 + (1));
i__4790__auto___41059 = G__41060;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__40839__auto__,rest__40840__auto__){
if((!((s__40839__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__40839__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__40839__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__40840__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq40916){
var G__40917 = cljs.core.first(seq40916);
var seq40916__$1 = cljs.core.next(seq40916);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40917,seq40916__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41061 = arguments.length;
var i__4790__auto___41062 = (0);
while(true){
if((i__4790__auto___41062 < len__4789__auto___41061)){
args__4795__auto__.push((arguments[i__4790__auto___41062]));

var G__41063 = (i__4790__auto___41062 + (1));
i__4790__auto___41062 = G__41063;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__40839__auto__,rest__40840__auto__){
if((!((s__40839__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__40839__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__40839__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__40840__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq40918){
var G__40919 = cljs.core.first(seq40918);
var seq40918__$1 = cljs.core.next(seq40918);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40919,seq40918__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41066 = arguments.length;
var i__4790__auto___41067 = (0);
while(true){
if((i__4790__auto___41067 < len__4789__auto___41066)){
args__4795__auto__.push((arguments[i__4790__auto___41067]));

var G__41068 = (i__4790__auto___41067 + (1));
i__4790__auto___41067 = G__41068;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__40839__auto__,rest__40840__auto__){
if((!((s__40839__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__40839__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__40839__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__40840__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq40920){
var G__40921 = cljs.core.first(seq40920);
var seq40920__$1 = cljs.core.next(seq40920);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40921,seq40920__$1);
}));

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41070 = arguments.length;
var i__4790__auto___41071 = (0);
while(true){
if((i__4790__auto___41071 < len__4789__auto___41070)){
args__4795__auto__.push((arguments[i__4790__auto___41071]));

var G__41072 = (i__4790__auto___41071 + (1));
i__4790__auto___41071 = G__41072;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__40834__auto__,rest__40835__auto__){
var convert_case__40836__auto__ = (function (p1__40833__40837__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__40833__40837__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__40835__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__40834__auto__,convert_case__40836__auto__);
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq40922){
var G__40923 = cljs.core.first(seq40922);
var seq40922__$1 = cljs.core.next(seq40922);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40923,seq40922__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
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
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__40839__auto__,rest__40840__auto__){
if((!((s__40839__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__40839__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__40839__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__40840__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq40924){
var G__40925 = cljs.core.first(seq40924);
var seq40924__$1 = cljs.core.next(seq40924);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40925,seq40924__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41079 = arguments.length;
var i__4790__auto___41080 = (0);
while(true){
if((i__4790__auto___41080 < len__4789__auto___41079)){
args__4795__auto__.push((arguments[i__4790__auto___41080]));

var G__41081 = (i__4790__auto___41080 + (1));
i__4790__auto___41080 = G__41081;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__40839__auto__,rest__40840__auto__){
if((!((s__40839__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__40839__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__40839__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__40840__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq40926){
var G__40927 = cljs.core.first(seq40926);
var seq40926__$1 = cljs.core.next(seq40926);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40927,seq40926__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41083 = arguments.length;
var i__4790__auto___41084 = (0);
while(true){
if((i__4790__auto___41084 < len__4789__auto___41083)){
args__4795__auto__.push((arguments[i__4790__auto___41084]));

var G__41085 = (i__4790__auto___41084 + (1));
i__4790__auto___41084 = G__41085;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__40839__auto__,rest__40840__auto__){
if((!((s__40839__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__40839__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__40839__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__40840__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq40928){
var G__40929 = cljs.core.first(seq40928);
var seq40928__$1 = cljs.core.next(seq40928);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40929,seq40928__$1);
}));


//# sourceMappingURL=camel_snake_kebab.core.js.map
