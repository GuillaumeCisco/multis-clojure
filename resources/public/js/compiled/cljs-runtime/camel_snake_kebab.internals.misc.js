goog.provide('camel_snake_kebab.internals.misc');
goog.require('cljs.core');
goog.require('camel_snake_kebab.internals.string_separator');
goog.require('clojure.string');
camel_snake_kebab.internals.misc.convert_case = (function camel_snake_kebab$internals$misc$convert_case(var_args){
var args__4795__auto__ = [];
var len__4789__auto___40687 = arguments.length;
var i__4790__auto___40688 = (0);
while(true){
if((i__4790__auto___40688 < len__4789__auto___40687)){
args__4795__auto__.push((arguments[i__4790__auto___40688]));

var G__40689 = (i__4790__auto___40688 + (1));
i__4790__auto___40688 = G__40689;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((4) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4796__auto__);
});

(camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,p__40673){
var map__40674 = p__40673;
var map__40674__$1 = (((((!((map__40674 == null))))?(((((map__40674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40674.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40674):map__40674);
var separator = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40674__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),camel_snake_kebab.internals.string_separator.generic_separator);
var vec__40682 = camel_snake_kebab.internals.string_separator.split(separator,s);
var seq__40683 = cljs.core.seq(vec__40682);
var first__40684 = cljs.core.first(seq__40683);
var seq__40683__$1 = cljs.core.next(seq__40683);
var first = first__40684;
var rest = seq__40683__$1;
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(sep,cljs.core.cons((first_fn.cljs$core$IFn$_invoke$arity$1 ? first_fn.cljs$core$IFn$_invoke$arity$1(first) : first_fn.call(null,first)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(rest_fn,rest)));
}));

(camel_snake_kebab.internals.misc.convert_case.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(camel_snake_kebab.internals.misc.convert_case.cljs$lang$applyTo = (function (seq40665){
var G__40666 = cljs.core.first(seq40665);
var seq40665__$1 = cljs.core.next(seq40665);
var G__40667 = cljs.core.first(seq40665__$1);
var seq40665__$2 = cljs.core.next(seq40665__$1);
var G__40668 = cljs.core.first(seq40665__$2);
var seq40665__$3 = cljs.core.next(seq40665__$2);
var G__40669 = cljs.core.first(seq40665__$3);
var seq40665__$4 = cljs.core.next(seq40665__$3);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40666,G__40667,G__40668,G__40669,seq40665__$4);
}));

camel_snake_kebab.internals.misc.upper_case_http_headers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["WWW",null,"TE",null,"CSP",null,"CPU",null,"IP",null,"WAP",null,"HTTP",null,"DNT",null,"UA",null,"ATT",null,"SSL",null,"MD5",null,"XSS",null], null), null);
camel_snake_kebab.internals.misc.capitalize_http_header = (function camel_snake_kebab$internals$misc$capitalize_http_header(s){
var or__4185__auto__ = (function (){var G__40686 = clojure.string.upper_case(s);
return (camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1 ? camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1(G__40686) : camel_snake_kebab.internals.misc.upper_case_http_headers.call(null,G__40686));
})();
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return clojure.string.capitalize(s);
}
});

//# sourceMappingURL=camel_snake_kebab.internals.misc.js.map
