goog.provide('re_frame_forms.input');
goog.require('cljs.core');
goog.require('re_frame_forms.core');
re_frame_forms.input.radio = (function re_frame_forms$input$radio(var_args){
var G__41855 = arguments.length;
switch (G__41855) {
case 2:
return re_frame_forms.input.radio.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame_forms.input.radio.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame_forms.input.radio.cljs$core$IFn$_invoke$arity$2 = (function (field,value){
return re_frame_forms.input.radio.cljs$core$IFn$_invoke$arity$3(field,value,cljs.core.PersistentArrayMap.EMPTY);
}));

(re_frame_forms.input.radio.cljs$core$IFn$_invoke$arity$3 = (function (field,value,attrs){
return (function (field__$1,value__$1,attrs__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"value","value",305978217),value__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149),re_frame_forms.core.handle_str_value.cljs$core$IFn$_invoke$arity$1(field__$1),new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame_forms.core.value.cljs$core$IFn$_invoke$arity$1(field__$1)),value__$1)], null)], 0))], null);
});
}));

(re_frame_forms.input.radio.cljs$lang$maxFixedArity = 3);

re_frame_forms.input.checkbox = (function re_frame_forms$input$checkbox(var_args){
var G__41859 = arguments.length;
switch (G__41859) {
case 1:
return re_frame_forms.input.checkbox.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame_forms.input.checkbox.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame_forms.input.checkbox.cljs$core$IFn$_invoke$arity$1 = (function (field){
return re_frame_forms.input.checkbox.cljs$core$IFn$_invoke$arity$2(field,cljs.core.PersistentArrayMap.EMPTY);
}));

(re_frame_forms.input.checkbox.cljs$core$IFn$_invoke$arity$2 = (function (field,attrs){
return (function (field__$1,attrs__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.deref(re_frame_forms.core.value.cljs$core$IFn$_invoke$arity$1(field__$1)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),re_frame_forms.core.handle_checked_value(field__$1)], null)], 0))], null);
});
}));

(re_frame_forms.input.checkbox.cljs$lang$maxFixedArity = 2);

re_frame_forms.input.input = (function re_frame_forms$input$input(var_args){
var G__41867 = arguments.length;
switch (G__41867) {
case 1:
return re_frame_forms.input.input.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame_forms.input.input.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame_forms.input.input.cljs$core$IFn$_invoke$arity$1 = (function (field){
return re_frame_forms.input.input.cljs$core$IFn$_invoke$arity$2(field,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"text"], null));
}));

(re_frame_forms.input.input.cljs$core$IFn$_invoke$arity$2 = (function (field,attrs){
return (function (field__$1,attrs__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(re_frame_forms.core.str_value(field__$1)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),re_frame_forms.core.handle_str_value.cljs$core$IFn$_invoke$arity$2(field__$1,true),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),re_frame_forms.core.handle_str_value.cljs$core$IFn$_invoke$arity$2(field__$1,false)], null)], 0))], null);
});
}));

(re_frame_forms.input.input.cljs$lang$maxFixedArity = 2);

re_frame_forms.input.select = (function re_frame_forms$input$select(field,attrs,options){
return (function (field__$1,attrs__$1,options__$1){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(re_frame_forms.core.str_value(field__$1)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),re_frame_forms.core.handle_str_value.cljs$core$IFn$_invoke$arity$1(field__$1)], null)], 0))], null),options__$1);
});
});
re_frame_forms.input.options = (function re_frame_forms$input$options(var_args){
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

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return re_frame_forms.input.options.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(re_frame_forms.input.options.cljs$core$IFn$_invoke$arity$variadic = (function (options){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__41873){
var vec__41874 = p__41873;
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41874,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41874,(1),null);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null),label], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),value], null));
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),options));
}));

(re_frame_forms.input.options.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame_forms.input.options.cljs$lang$applyTo = (function (seq41872){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41872));
}));


//# sourceMappingURL=re_frame_forms.input.js.map
