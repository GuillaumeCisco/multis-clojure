goog.provide('multis.components.address_select_field');
goog.require('cljs.core');
goog.require('cljs_react_material_ui.reagent');
goog.require('re_frame.core');
goog.require('reagent.core');
multis.components.address_select_field.address_select_field = (function multis$components$address_select_field$address_select_field(var_args){
var args__4795__auto__ = [];
var len__4789__auto___40884 = arguments.length;
var i__4790__auto___40885 = (0);
while(true){
if((i__4790__auto___40885 < len__4789__auto___40884)){
args__4795__auto__.push((arguments[i__4790__auto___40885]));

var G__40886 = (i__4790__auto___40885 + (1));
i__4790__auto___40885 = G__40886;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return multis.components.address_select_field.address_select_field.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(multis.components.address_select_field.address_select_field.cljs$core$IFn$_invoke$arity$variadic = (function (selected_address,dispatch_vec,p__40877){
var vec__40878 = p__40877;
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40878,(0),null);
var fexpr__40882 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.select_field,reagent.core.merge_props.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),selected_address,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__40872_SHARP_,p2__40873_SHARP_,p3__40871_SHARP_){
var G__40883 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(dispatch_vec,p3__40871_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__40883) : re_frame.core.dispatch.call(null,G__40883));
}),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),false,new cljs.core.Keyword(null,"floating-label-text","floating-label-text",740415797),"Choose your account"], null),props)], null);
return (fexpr__40882.cljs$core$IFn$_invoke$arity$0 ? fexpr__40882.cljs$core$IFn$_invoke$arity$0() : fexpr__40882.call(null));
}));

(multis.components.address_select_field.address_select_field.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(multis.components.address_select_field.address_select_field.cljs$lang$applyTo = (function (seq40874){
var G__40875 = cljs.core.first(seq40874);
var seq40874__$1 = cljs.core.next(seq40874);
var G__40876 = cljs.core.first(seq40874__$1);
var seq40874__$2 = cljs.core.next(seq40874__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40875,G__40876,seq40874__$2);
}));


//# sourceMappingURL=multis.components.address_select_field.js.map
