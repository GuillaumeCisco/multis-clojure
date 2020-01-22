goog.provide('re_frame_forms.impl');
goog.require('cljs.core');
goog.require('re_frame_forms.coerce');
goog.require('re_frame_forms.protocols');
goog.require('re_frame_forms.validation');
goog.require('reagent.core');
goog.require('reagent.ratom');
re_frame_forms.impl.field_path = (function re_frame_forms$impl$field_path(type,path){
if(cljs.core.truth_((function (){var fexpr__41762 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("re-frame-forms.impl","original","re-frame-forms.impl/original",-1497002270),null,new cljs.core.Keyword("re-frame-forms.impl","value","re-frame-forms.impl/value",-810615112),null], null), null);
return (fexpr__41762.cljs$core$IFn$_invoke$arity$1 ? fexpr__41762.cljs$core$IFn$_invoke$arity$1(type) : fexpr__41762.call(null,type));
})())){
return cljs.core.cons(type,path);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,path], null);
}
});
re_frame_forms.impl.assoc_field = (function re_frame_forms$impl$assoc_field(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41835 = arguments.length;
var i__4790__auto___41836 = (0);
while(true){
if((i__4790__auto___41836 < len__4789__auto___41835)){
args__4795__auto__.push((arguments[i__4790__auto___41836]));

var G__41837 = (i__4790__auto___41836 + (1));
i__4790__auto___41836 = G__41837;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return re_frame_forms.impl.assoc_field.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(re_frame_forms.impl.assoc_field.cljs$core$IFn$_invoke$arity$variadic = (function (form,path,kvs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (form__$1,p__41766){
var vec__41768 = p__41766;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41768,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41768,(1),null);
return cljs.core.assoc_in(form__$1,re_frame_forms.impl.field_path(type,path),value);
}),form,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
}));

(re_frame_forms.impl.assoc_field.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(re_frame_forms.impl.assoc_field.cljs$lang$applyTo = (function (seq41763){
var G__41764 = cljs.core.first(seq41763);
var seq41763__$1 = cljs.core.next(seq41763);
var G__41765 = cljs.core.first(seq41763__$1);
var seq41763__$2 = cljs.core.next(seq41763__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41764,G__41765,seq41763__$2);
}));

re_frame_forms.impl.path_value = (function re_frame_forms$impl$path_value(var_args){
var G__41772 = arguments.length;
switch (G__41772) {
case 3:
return re_frame_forms.impl.path_value.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return re_frame_forms.impl.path_value.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame_forms.impl.path_value.cljs$core$IFn$_invoke$arity$3 = (function (form,type,path){
return re_frame_forms.impl.path_value.cljs$core$IFn$_invoke$arity$4(form,type,path,null);
}));

(re_frame_forms.impl.path_value.cljs$core$IFn$_invoke$arity$4 = (function (form,type,path,default$){
var map__41773 = form;
var map__41773__$1 = (((((!((map__41773 == null))))?(((((map__41773.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41773.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41773):map__41773);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41773__$1,new cljs.core.Keyword(null,"value","value",305978217));
return reagent.ratom.make_reaction((function (){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(value),re_frame_forms.impl.field_path(type,path),default$);
}));
}));

(re_frame_forms.impl.path_value.cljs$lang$maxFixedArity = 4);

re_frame_forms.impl.path_errors = (function re_frame_forms$impl$path_errors(form,path){
var map__41776 = form;
var map__41776__$1 = (((((!((map__41776 == null))))?(((((map__41776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41776.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41776):map__41776);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41776__$1,new cljs.core.Keyword(null,"value","value",305978217));
return reagent.ratom.make_reaction((function (){
return re_frame_forms.validation.field_errors(new cljs.core.Keyword("re-frame-forms.impl","validator-errors","re-frame-forms.impl/validator-errors",163340389).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(value)),path);
}));
});
re_frame_forms.impl.validate_field = (function re_frame_forms$impl$validate_field(validator,val){
if((validator instanceof re_frame_forms.validation.FieldValidator)){
return validator.re_frame_forms$validation$FieldValidator$validate_field$arity$2(null,val);
} else {
return cljs.core.PersistentVector.EMPTY;
}
});

/**
* @constructor
 * @implements {re_frame_forms.protocols.PersistentError}
 * @implements {cljs.core.IRecord}
 * @implements {re_frame_forms.protocols.DelayedValidation}
 * @implements {re_frame_forms.protocols.DelayValidationContainer}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {re_frame_forms.protocols.Touchable}
 * @implements {re_frame_forms.protocols.ResetValue}
 * @implements {re_frame_forms.protocols.Validatable}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {re_frame_forms.protocols.ErrorContainer}
 * @implements {re_frame_forms.protocols.CoercedValue}
 * @implements {re_frame_forms.protocols.Value}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
re_frame_forms.impl.Field = (function (form,coercer,validator,path,__meta,__extmap,__hash){
this.form = form;
this.coercer = coercer;
this.validator = validator;
this.path = path;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(re_frame_forms.impl.Field.prototype.re_frame_forms$protocols$ErrorContainer$ = cljs.core.PROTOCOL_SENTINEL);

(re_frame_forms.impl.Field.prototype.re_frame_forms$protocols$ErrorContainer$errors$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return reagent.ratom.make_reaction((function (){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(re_frame_forms.impl.path_value.cljs$core$IFn$_invoke$arity$4(self__.form,new cljs.core.Keyword("re-frame-forms.impl","field-errors","re-frame-forms.impl/field-errors",364088825),self__.path,null)),cljs.core.deref(re_frame_forms.impl.path_errors(self__.form,self__.path)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(re_frame_forms.impl.path_value.cljs$core$IFn$_invoke$arity$4(self__.form,new cljs.core.Keyword("re-frame-forms.impl","persistent-error","re-frame-forms.impl/persistent-error",764197509),self__.path,null))], null)], 0))));
}));
}));

(re_frame_forms.impl.Field.prototype.re_frame_forms$protocols$Validatable$ = cljs.core.PROTOCOL_SENTINEL);

(re_frame_forms.impl.Field.prototype.re_frame_forms$protocols$Validatable$valid_QMARK_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.make_reaction((function (){
return ((cljs.core.not(cljs.core.deref(re_frame_forms.impl.path_value.cljs$core$IFn$_invoke$arity$4(self__.form,new cljs.core.Keyword("re-frame-forms.impl","coercion-error","re-frame-forms.impl/coercion-error",-1561155216),self__.path,false)))) && (cljs.core.empty_QMARK_(cljs.core.deref(this$__$1.re_frame_forms$protocols$ErrorContainer$errors$arity$1(null)))));
}));
}));

(re_frame_forms.impl.Field.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(re_frame_forms.impl.Field.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k41779,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__41792 = k41779;
var G__41792__$1 = (((G__41792 instanceof cljs.core.Keyword))?G__41792.fqn:null);
switch (G__41792__$1) {
case "form":
return self__.form;

break;
case "coercer":
return self__.coercer;

break;
case "validator":
return self__.validator;

break;
case "path":
return self__.path;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k41779,else__4442__auto__);

}
}));

(re_frame_forms.impl.Field.prototype.re_frame_forms$protocols$DelayedValidation$ = cljs.core.PROTOCOL_SENTINEL);

(re_frame_forms.impl.Field.prototype.re_frame_forms$protocols$DelayedValidation$start_validation_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__.form,re_frame_forms.impl.assoc_field,self__.path,new cljs.core.Keyword("re-frame-forms.impl","delayed-validation","re-frame-forms.impl/delayed-validation",1385478899),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0));
}));

(re_frame_forms.impl.Field.prototype.re_frame_forms$protocols$DelayedValidation$mark_ok_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__.form,re_frame_forms.impl.assoc_field,self__.path,new cljs.core.Keyword("re-frame-forms.impl","persistent-error","re-frame-forms.impl/persistent-error",764197509),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null,new cljs.core.Keyword("re-frame-forms.impl","delayed-validation","re-frame-forms.impl/delayed-validation",1385478899),false], 0));
}));

(re_frame_forms.impl.Field.prototype.re_frame_forms$protocols$DelayedValidation$mark_error_BANG_$arity$2 = (function (_,error){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__.form,re_frame_forms.impl.assoc_field,self__.path,new cljs.core.Keyword("re-frame-forms.impl","persistent-error","re-frame-forms.impl/persistent-error",764197509),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error,new cljs.core.Keyword("re-frame-forms.impl","delayed-validation","re-frame-forms.impl/delayed-validation",1385478899),false], 0));
}));

(re_frame_forms.impl.Field.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__41793){
var vec__41794 = p__41793;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41794,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41794,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(re_frame_forms.impl.Field.prototype.re_frame_forms$protocols$CoercedValue$ = cljs.core.PROTOCOL_SENTINEL);

(re_frame_forms.impl.Field.prototype.re_frame_forms$protocols$CoercedValue$str_value$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.make_reaction((function (){
var str_value = cljs.core.deref(re_frame_forms.impl.path_value.cljs$core$IFn$_invoke$arity$4(self__.form,new cljs.core.Keyword("re-frame-forms.impl","tmp","re-frame-forms.impl/tmp",333248151),self__.path,null));
var value = cljs.core.deref(this$__$1.re_frame_forms$protocols$Value$value$arity$2(null,null));
var or__4185__auto__ = str_value;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return re_frame_forms.coerce.to_str(self__.coercer,value);
}
}));
}));

(re_frame_forms.impl.Field.prototype.re_frame_forms$protocols$CoercedValue$set_str_value_BANG_$arity$3 = (function (this$,val,retain_str_QMARK_){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(re_frame_forms.coerce.valid_str_QMARK_(self__.coercer,val))){
var obj_value = re_frame_forms.coerce.from_str(self__.coercer,re_frame_forms.coerce.to_str(self__.coercer,re_frame_forms.coerce.from_str(self__.coercer,val)));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__.form,re_frame_forms.impl.assoc_field,self__.path,new cljs.core.Keyword("re-frame-forms.impl","field-errors","re-frame-forms.impl/field-errors",364088825),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_frame_forms.validation.validate_field(self__.validator,obj_value),new cljs.core.Keyword("re-frame-forms.impl","coercion-error","re-frame-forms.impl/coercion-error",-1561155216),false,new cljs.core.Keyword("re-frame-forms.impl","value","re-frame-forms.impl/value",-810615112),obj_value,new cljs.core.Keyword("re-frame-forms.impl","tmp","re-frame-forms.impl/tmp",333248151),(cljs.core.truth_(retain_str_QMARK_)?val:null),new cljs.core.Keyword("re-frame-forms.impl","field-touched","re-frame-forms.impl/field-touched",372146250),true], 0));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__.form,re_frame_forms.impl.assoc_field,self__.path,new cljs.core.Keyword("re-frame-forms.impl","field-errors","re-frame-forms.impl/field-errors",364088825),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_frame_forms.impl.validate_field(self__.coercer,val),new cljs.core.Keyword("re-frame-forms.impl","coercion-error","re-frame-forms.impl/coercion-error",-1561155216),true,new cljs.core.Keyword("re-frame-forms.impl","value","re-frame-forms.impl/value",-810615112),null,new cljs.core.Keyword("re-frame-forms.impl","tmp","re-frame-forms.impl/tmp",333248151),val,new cljs.core.Keyword("re-frame-forms.impl","field-touched","re-frame-forms.impl/field-touched",372146250),true], 0));
}
}));

(re_frame_forms.impl.Field.prototype.re_frame_forms$protocols$Value$ = cljs.core.PROTOCOL_SENTINEL);

(re_frame_forms.impl.Field.prototype.re_frame_forms$protocols$Value$value$arity$2 = (function (_,default$){
var self__ = this;
var ___$1 = this;
return re_frame_forms.impl.path_value.cljs$core$IFn$_invoke$arity$4(self__.form,new cljs.core.Keyword("re-frame-forms.impl","value","re-frame-forms.impl/value",-810615112),self__.path,default$);
}));

(re_frame_forms.impl.Field.prototype.re_frame_forms$protocols$Value$set_value_BANG_$arity$2 = (function (_,val){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__.form,re_frame_forms.impl.assoc_field,self__.path,new cljs.core.Keyword("re-frame-forms.impl","field-errors","re-frame-forms.impl/field-errors",364088825),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_frame_forms.validation.validate_field(self__.validator,val),new cljs.core.Keyword("re-frame-forms.impl","coercion-error","re-frame-forms.impl/coercion-error",-1561155216),false,new cljs.core.Keyword("re-frame-forms.impl","value","re-frame-forms.impl/value",-810615112),val,new cljs.core.Keyword("re-frame-forms.impl","tmp","re-frame-forms.impl/tmp",333248151),null,new cljs.core.Keyword("re-frame-forms.impl","field-touched","re-frame-forms.impl/field-touched",372146250),true], 0));
}));

(re_frame_forms.impl.Field.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#re-frame-forms.impl.Field{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"form","form",-1624062471),self__.form],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"coercer","coercer",1871193355),self__.coercer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"validator","validator",-1966190681),self__.validator],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null))], null),self__.__extmap));
}));

(re_frame_forms.impl.Field.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41778){
var self__ = this;
var G__41778__$1 = this;
return (new cljs.core.RecordIter((0),G__41778__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"coercer","coercer",1871193355),new cljs.core.Keyword(null,"validator","validator",-1966190681),new cljs.core.Keyword(null,"path","path",-188191168)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(re_frame_forms.impl.Field.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(re_frame_forms.impl.Field.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new re_frame_forms.impl.Field(self__.form,self__.coercer,self__.validator,self__.path,self__.__meta,self__.__extmap,self__.__hash));
}));

(re_frame_forms.impl.Field.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(re_frame_forms.impl.Field.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__41797 = (function (coll__4436__auto__){
return (900500844 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__41797(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(re_frame_forms.impl.Field.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this41780,other41781){
var self__ = this;
var this41780__$1 = this;
return (((!((other41781 == null)))) && ((this41780__$1.constructor === other41781.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41780__$1.form,other41781.form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41780__$1.coercer,other41781.coercer)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41780__$1.validator,other41781.validator)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41780__$1.path,other41781.path)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41780__$1.__extmap,other41781.__extmap)));
}));

(re_frame_forms.impl.Field.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"validator","validator",-1966190681),null,new cljs.core.Keyword(null,"coercer","coercer",1871193355),null,new cljs.core.Keyword(null,"form","form",-1624062471),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new re_frame_forms.impl.Field(self__.form,self__.coercer,self__.validator,self__.path,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(re_frame_forms.impl.Field.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__41778){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__41798 = cljs.core.keyword_identical_QMARK_;
var expr__41799 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__41801 = new cljs.core.Keyword(null,"form","form",-1624062471);
var G__41802 = expr__41799;
return (pred__41798.cljs$core$IFn$_invoke$arity$2 ? pred__41798.cljs$core$IFn$_invoke$arity$2(G__41801,G__41802) : pred__41798.call(null,G__41801,G__41802));
})())){
return (new re_frame_forms.impl.Field(G__41778,self__.coercer,self__.validator,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__41803 = new cljs.core.Keyword(null,"coercer","coercer",1871193355);
var G__41804 = expr__41799;
return (pred__41798.cljs$core$IFn$_invoke$arity$2 ? pred__41798.cljs$core$IFn$_invoke$arity$2(G__41803,G__41804) : pred__41798.call(null,G__41803,G__41804));
})())){
return (new re_frame_forms.impl.Field(self__.form,G__41778,self__.validator,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__41805 = new cljs.core.Keyword(null,"validator","validator",-1966190681);
var G__41806 = expr__41799;
return (pred__41798.cljs$core$IFn$_invoke$arity$2 ? pred__41798.cljs$core$IFn$_invoke$arity$2(G__41805,G__41806) : pred__41798.call(null,G__41805,G__41806));
})())){
return (new re_frame_forms.impl.Field(self__.form,self__.coercer,G__41778,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__41807 = new cljs.core.Keyword(null,"path","path",-188191168);
var G__41808 = expr__41799;
return (pred__41798.cljs$core$IFn$_invoke$arity$2 ? pred__41798.cljs$core$IFn$_invoke$arity$2(G__41807,G__41808) : pred__41798.call(null,G__41807,G__41808));
})())){
return (new re_frame_forms.impl.Field(self__.form,self__.coercer,self__.validator,G__41778,self__.__meta,self__.__extmap,null));
} else {
return (new re_frame_forms.impl.Field(self__.form,self__.coercer,self__.validator,self__.path,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__41778),null));
}
}
}
}
}));

(re_frame_forms.impl.Field.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"form","form",-1624062471),self__.form,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"coercer","coercer",1871193355),self__.coercer,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"validator","validator",-1966190681),self__.validator,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path","path",-188191168),self__.path,null))], null),self__.__extmap));
}));

(re_frame_forms.impl.Field.prototype.re_frame_forms$protocols$Touchable$ = cljs.core.PROTOCOL_SENTINEL);

(re_frame_forms.impl.Field.prototype.re_frame_forms$protocols$Touchable$touch_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__.form,re_frame_forms.impl.assoc_field,self__.path,new cljs.core.Keyword("re-frame-forms.impl","field-touched","re-frame-forms.impl/field-touched",372146250),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0));
}));

(re_frame_forms.impl.Field.prototype.re_frame_forms$protocols$Touchable$touched_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return reagent.ratom.make_reaction((function (){
var form_touched = cljs.core.deref(re_frame_forms.protocols.touched_QMARK_(self__.form));
var path_touched = cljs.core.deref(re_frame_forms.impl.path_value.cljs$core$IFn$_invoke$arity$4(self__.form,new cljs.core.Keyword("re-frame-forms.impl","field-touched","re-frame-forms.impl/field-touched",372146250),self__.path,false));
var or__4185__auto__ = form_touched;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return path_touched;
}
}));
}));

(re_frame_forms.impl.Field.prototype.re_frame_forms$protocols$ResetValue$ = cljs.core.PROTOCOL_SENTINEL);

(re_frame_forms.impl.Field.prototype.re_frame_forms$protocols$ResetValue$original_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(re_frame_forms.impl.path_value.cljs$core$IFn$_invoke$arity$4(self__.form,new cljs.core.Keyword("re-frame-forms.impl","original","re-frame-forms.impl/original",-1497002270),self__.path,null));
}));

(re_frame_forms.impl.Field.prototype.re_frame_forms$protocols$ResetValue$reset_value_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__.form,re_frame_forms.impl.assoc_field,self__.path,new cljs.core.Keyword("re-frame-forms.impl","field-errors","re-frame-forms.impl/field-errors",364088825),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("re-frame-forms.impl","coercion-error","re-frame-forms.impl/coercion-error",-1561155216),false,new cljs.core.Keyword("re-frame-forms.impl","value","re-frame-forms.impl/value",-810615112),this$__$1.re_frame_forms$protocols$ResetValue$original_value$arity$1(null),new cljs.core.Keyword("re-frame-forms.impl","persistent-error","re-frame-forms.impl/persistent-error",764197509),null,new cljs.core.Keyword("re-frame-forms.impl","delayed-validation","re-frame-forms.impl/delayed-validation",1385478899),false,new cljs.core.Keyword("re-frame-forms.impl","tmp","re-frame-forms.impl/tmp",333248151),null,new cljs.core.Keyword("re-frame-forms.impl","field-touched","re-frame-forms.impl/field-touched",372146250),false], 0));
}));

(re_frame_forms.impl.Field.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__41778){
var self__ = this;
var this__4438__auto____$1 = this;
return (new re_frame_forms.impl.Field(self__.form,self__.coercer,self__.validator,self__.path,G__41778,self__.__extmap,self__.__hash));
}));

(re_frame_forms.impl.Field.prototype.re_frame_forms$protocols$PersistentError$ = cljs.core.PROTOCOL_SENTINEL);

(re_frame_forms.impl.Field.prototype.re_frame_forms$protocols$PersistentError$set_error_BANG_$arity$2 = (function (_,error){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__.form,re_frame_forms.impl.assoc_field,self__.path,new cljs.core.Keyword("re-frame-forms.impl","persistent-error","re-frame-forms.impl/persistent-error",764197509),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error], 0));
}));

(re_frame_forms.impl.Field.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(re_frame_forms.impl.Field.prototype.re_frame_forms$protocols$DelayValidationContainer$ = cljs.core.PROTOCOL_SENTINEL);

(re_frame_forms.impl.Field.prototype.re_frame_forms$protocols$DelayValidationContainer$validation_in_progress_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return reagent.ratom.make_reaction((function (){
return cljs.core.deref(re_frame_forms.impl.path_value.cljs$core$IFn$_invoke$arity$4(self__.form,new cljs.core.Keyword("re-frame-forms.impl","delayed-validation","re-frame-forms.impl/delayed-validation",1385478899),self__.path,false));
}));
}));

(re_frame_forms.impl.Field.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"coercer","coercer",-783242414,null),new cljs.core.Symbol(null,"validator","validator",-325659154,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
}));

(re_frame_forms.impl.Field.cljs$lang$type = true);

(re_frame_forms.impl.Field.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"re-frame-forms.impl/Field",null,(1),null));
}));

(re_frame_forms.impl.Field.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"re-frame-forms.impl/Field");
}));

/**
 * Positional factory function for re-frame-forms.impl/Field.
 */
re_frame_forms.impl.__GT_Field = (function re_frame_forms$impl$__GT_Field(form,coercer,validator,path){
return (new re_frame_forms.impl.Field(form,coercer,validator,path,null,null,null));
});

/**
 * Factory function for re-frame-forms.impl/Field, taking a map of keywords to field values.
 */
re_frame_forms.impl.map__GT_Field = (function re_frame_forms$impl$map__GT_Field(G__41782){
var extmap__4478__auto__ = (function (){var G__41809 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__41782,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"coercer","coercer",1871193355),new cljs.core.Keyword(null,"validator","validator",-1966190681),new cljs.core.Keyword(null,"path","path",-188191168)], 0));
if(cljs.core.record_QMARK_(G__41782)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__41809);
} else {
return G__41809;
}
})();
return (new re_frame_forms.impl.Field(new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(G__41782),new cljs.core.Keyword(null,"coercer","coercer",1871193355).cljs$core$IFn$_invoke$arity$1(G__41782),new cljs.core.Keyword(null,"validator","validator",-1966190681).cljs$core$IFn$_invoke$arity$1(G__41782),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__41782),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

re_frame_forms.impl.validate_form = (function re_frame_forms$impl$validate_form(var_args){
var G__41815 = arguments.length;
switch (G__41815) {
case 2:
return re_frame_forms.impl.validate_form.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___41863 = arguments.length;
var i__4790__auto___41864 = (0);
while(true){
if((i__4790__auto___41864 < len__4789__auto___41863)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41864]));

var G__41866 = (i__4790__auto___41864 + (1));
i__4790__auto___41864 = G__41866;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((3)),(0),null));
return re_frame_forms.impl.validate_form.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4811__auto__);

}
});

(re_frame_forms.impl.validate_form.cljs$core$IFn$_invoke$arity$2 = (function (validator,f){
return (function() { 
var G__41868__delegate = function (value,args){
return re_frame_forms.impl.validate_form.cljs$core$IFn$_invoke$arity$variadic(value,validator,f,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0));
};
var G__41868 = function (value,var_args){
var args = null;
if (arguments.length > 1) {
var G__41870__i = 0, G__41870__a = new Array(arguments.length -  1);
while (G__41870__i < G__41870__a.length) {G__41870__a[G__41870__i] = arguments[G__41870__i + 1]; ++G__41870__i;}
  args = new cljs.core.IndexedSeq(G__41870__a,0,null);
} 
return G__41868__delegate.call(this,value,args);};
G__41868.cljs$lang$maxFixedArity = 1;
G__41868.cljs$lang$applyTo = (function (arglist__41871){
var value = cljs.core.first(arglist__41871);
var args = cljs.core.rest(arglist__41871);
return G__41868__delegate(value,args);
});
G__41868.cljs$core$IFn$_invoke$arity$variadic = G__41868__delegate;
return G__41868;
})()
;
}));

(re_frame_forms.impl.validate_form.cljs$core$IFn$_invoke$arity$variadic = (function (value,validator,f,args){
var new_value = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,value,args);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_value,new cljs.core.Keyword("re-frame-forms.impl","validator-errors","re-frame-forms.impl/validator-errors",163340389),re_frame_forms.validation.validate_form(validator,new cljs.core.Keyword("re-frame-forms.impl","value","re-frame-forms.impl/value",-810615112).cljs$core$IFn$_invoke$arity$1(new_value)));
}));

/** @this {Function} */
(re_frame_forms.impl.validate_form.cljs$lang$applyTo = (function (seq41811){
var G__41812 = cljs.core.first(seq41811);
var seq41811__$1 = cljs.core.next(seq41811);
var G__41813 = cljs.core.first(seq41811__$1);
var seq41811__$2 = cljs.core.next(seq41811__$1);
var G__41814 = cljs.core.first(seq41811__$2);
var seq41811__$3 = cljs.core.next(seq41811__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41812,G__41813,G__41814,seq41811__$3);
}));

(re_frame_forms.impl.validate_form.cljs$lang$maxFixedArity = (3));

re_frame_forms.impl.validation_in_progress_QMARK_ = (function re_frame_forms$impl$validation_in_progress_QMARK_(form_value){
return cljs.core.not_empty(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.true_QMARK_,cljs.core.vals(new cljs.core.Keyword("re-frame-forms.impl","delayed-validation","re-frame-forms.impl/delayed-validation",1385478899).cljs$core$IFn$_invoke$arity$2(form_value,cljs.core.PersistentArrayMap.EMPTY))));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {re_frame_forms.protocols.DelayValidationContainer}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {re_frame_forms.protocols.Touchable}
 * @implements {re_frame_forms.protocols.ResetValue}
 * @implements {re_frame_forms.protocols.Validatable}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {re_frame_forms.protocols.Value}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
re_frame_forms.impl.Form = (function (value,validator,__meta,__extmap,__hash){
this.value = value;
this.validator = validator;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 204800;
});
(re_frame_forms.impl.Form.prototype.re_frame_forms$protocols$Validatable$ = cljs.core.PROTOCOL_SENTINEL);

(re_frame_forms.impl.Form.prototype.re_frame_forms$protocols$Validatable$valid_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return reagent.ratom.make_reaction((function (){
if(cljs.core.empty_QMARK_(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.vals(new cljs.core.Keyword("re-frame-forms.impl","coercion-error","re-frame-forms.impl/coercion-error",-1561155216).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.value)))))){
if(cljs.core.empty_QMARK_(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,cljs.core.vals(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("re-frame-forms.impl","field-errors","re-frame-forms.impl/field-errors",364088825).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.value)),new cljs.core.Keyword("re-frame-forms.impl","persistent-error","re-frame-forms.impl/persistent-error",764197509).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.value))))))){
var and__4174__auto__ = re_frame_forms.validation.valid_QMARK_(new cljs.core.Keyword("re-frame-forms.impl","validator-errors","re-frame-forms.impl/validator-errors",163340389).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.value)));
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(re_frame_forms.impl.validation_in_progress_QMARK_(cljs.core.deref(self__.value)));
} else {
return and__4174__auto__;
}
} else {
return false;
}
} else {
return false;
}
}));
}));

(re_frame_forms.impl.Form.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(re_frame_forms.impl.Form.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k41817,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__41821 = k41817;
var G__41821__$1 = (((G__41821 instanceof cljs.core.Keyword))?G__41821.fqn:null);
switch (G__41821__$1) {
case "value":
return self__.value;

break;
case "validator":
return self__.validator;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k41817,else__4442__auto__);

}
}));

(re_frame_forms.impl.Form.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__41822){
var vec__41823 = p__41822;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41823,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41823,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(re_frame_forms.impl.Form.prototype.re_frame_forms$protocols$Value$ = cljs.core.PROTOCOL_SENTINEL);

(re_frame_forms.impl.Form.prototype.re_frame_forms$protocols$Value$value$arity$2 = (function (_,default$){
var self__ = this;
var ___$1 = this;
return reagent.ratom.make_reaction((function (){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(self__.value),new cljs.core.Keyword("re-frame-forms.impl","value","re-frame-forms.impl/value",-810615112),default$);
}));
}));

(re_frame_forms.impl.Form.prototype.re_frame_forms$protocols$Value$set_value_BANG_$arity$2 = (function (this$,val){
var self__ = this;
var this$__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$__$1,re_frame_forms.impl.validate_form,cljs.core.assoc,new cljs.core.Keyword("re-frame-forms.impl","value","re-frame-forms.impl/value",-810615112),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([val], 0));
}));

(re_frame_forms.impl.Form.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#re-frame-forms.impl.Form{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"validator","validator",-1966190681),self__.validator],null))], null),self__.__extmap));
}));

(re_frame_forms.impl.Form.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41816){
var self__ = this;
var G__41816__$1 = this;
return (new cljs.core.RecordIter((0),G__41816__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"validator","validator",-1966190681)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(re_frame_forms.impl.Form.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(re_frame_forms.impl.Form.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new re_frame_forms.impl.Form(self__.value,self__.validator,self__.__meta,self__.__extmap,self__.__hash));
}));

(re_frame_forms.impl.Form.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(re_frame_forms.impl.Form.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__41826 = (function (coll__4436__auto__){
return (-778396810 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__41826(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(re_frame_forms.impl.Form.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this41818,other41819){
var self__ = this;
var this41818__$1 = this;
return (((!((other41819 == null)))) && ((this41818__$1.constructor === other41819.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41818__$1.value,other41819.value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41818__$1.validator,other41819.validator)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41818__$1.__extmap,other41819.__extmap)));
}));

(re_frame_forms.impl.Form.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (o,f){
var self__ = this;
var o__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.value,re_frame_forms.impl.validate_form,self__.validator,f);
}));

(re_frame_forms.impl.Form.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (o,f,a){
var self__ = this;
var o__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__.value,re_frame_forms.impl.validate_form,self__.validator,f,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0));
}));

(re_frame_forms.impl.Form.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (o,f,a,b){
var self__ = this;
var o__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__.value,re_frame_forms.impl.validate_form,self__.validator,f,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
}));

(re_frame_forms.impl.Form.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (o,f,a,b,xs){
var self__ = this;
var o__$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.swap_BANG_,self__.value,re_frame_forms.impl.validate_form,self__.validator,f,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,xs], 0));
}));

(re_frame_forms.impl.Form.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"validator","validator",-1966190681),null,new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new re_frame_forms.impl.Form(self__.value,self__.validator,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(re_frame_forms.impl.Form.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__41816){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__41827 = cljs.core.keyword_identical_QMARK_;
var expr__41828 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__41830 = new cljs.core.Keyword(null,"value","value",305978217);
var G__41831 = expr__41828;
return (pred__41827.cljs$core$IFn$_invoke$arity$2 ? pred__41827.cljs$core$IFn$_invoke$arity$2(G__41830,G__41831) : pred__41827.call(null,G__41830,G__41831));
})())){
return (new re_frame_forms.impl.Form(G__41816,self__.validator,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__41832 = new cljs.core.Keyword(null,"validator","validator",-1966190681);
var G__41833 = expr__41828;
return (pred__41827.cljs$core$IFn$_invoke$arity$2 ? pred__41827.cljs$core$IFn$_invoke$arity$2(G__41832,G__41833) : pred__41827.call(null,G__41832,G__41833));
})())){
return (new re_frame_forms.impl.Form(self__.value,G__41816,self__.__meta,self__.__extmap,null));
} else {
return (new re_frame_forms.impl.Form(self__.value,self__.validator,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__41816),null));
}
}
}));

(re_frame_forms.impl.Form.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"validator","validator",-1966190681),self__.validator,null))], null),self__.__extmap));
}));

(re_frame_forms.impl.Form.prototype.re_frame_forms$protocols$Touchable$ = cljs.core.PROTOCOL_SENTINEL);

(re_frame_forms.impl.Form.prototype.re_frame_forms$protocols$Touchable$touch_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(this$__$1,cljs.core.assoc,new cljs.core.Keyword("re-frame-forms.impl","form-touched","re-frame-forms.impl/form-touched",595809559),true);
}));

(re_frame_forms.impl.Form.prototype.re_frame_forms$protocols$Touchable$touched_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return reagent.ratom.make_reaction((function (){
return new cljs.core.Keyword("re-frame-forms.impl","form-touched","re-frame-forms.impl/form-touched",595809559).cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.value),false);
}));
}));

(re_frame_forms.impl.Form.prototype.re_frame_forms$protocols$ResetValue$ = cljs.core.PROTOCOL_SENTINEL);

(re_frame_forms.impl.Form.prototype.re_frame_forms$protocols$ResetValue$original_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.value),new cljs.core.Keyword("re-frame-forms.impl","original","re-frame-forms.impl/original",-1497002270));
}));

(re_frame_forms.impl.Form.prototype.re_frame_forms$protocols$ResetValue$reset_value_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(this$__$1,(function (value__$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("re-frame-forms.impl","value","re-frame-forms.impl/value",-810615112),new cljs.core.Keyword("re-frame-forms.impl","original","re-frame-forms.impl/original",-1497002270).cljs$core$IFn$_invoke$arity$1(value__$1),new cljs.core.Keyword("re-frame-forms.impl","original","re-frame-forms.impl/original",-1497002270),new cljs.core.Keyword("re-frame-forms.impl","original","re-frame-forms.impl/original",-1497002270).cljs$core$IFn$_invoke$arity$1(value__$1)], null);
}));
}));

(re_frame_forms.impl.Form.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__41816){
var self__ = this;
var this__4438__auto____$1 = this;
return (new re_frame_forms.impl.Form(self__.value,self__.validator,G__41816,self__.__extmap,self__.__hash));
}));

(re_frame_forms.impl.Form.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(re_frame_forms.impl.Form.prototype.re_frame_forms$protocols$DelayValidationContainer$ = cljs.core.PROTOCOL_SENTINEL);

(re_frame_forms.impl.Form.prototype.re_frame_forms$protocols$DelayValidationContainer$validation_in_progress_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return reagent.ratom.make_reaction((function (){
return re_frame_forms.impl.validation_in_progress_QMARK_(cljs.core.deref(self__.value));
}));
}));

(re_frame_forms.impl.Form.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"validator","validator",-325659154,null)], null);
}));

(re_frame_forms.impl.Form.cljs$lang$type = true);

(re_frame_forms.impl.Form.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"re-frame-forms.impl/Form",null,(1),null));
}));

(re_frame_forms.impl.Form.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"re-frame-forms.impl/Form");
}));

/**
 * Positional factory function for re-frame-forms.impl/Form.
 */
re_frame_forms.impl.__GT_Form = (function re_frame_forms$impl$__GT_Form(value,validator){
return (new re_frame_forms.impl.Form(value,validator,null,null,null));
});

/**
 * Factory function for re-frame-forms.impl/Form, taking a map of keywords to field values.
 */
re_frame_forms.impl.map__GT_Form = (function re_frame_forms$impl$map__GT_Form(G__41820){
var extmap__4478__auto__ = (function (){var G__41834 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__41820,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"validator","validator",-1966190681)], 0));
if(cljs.core.record_QMARK_(G__41820)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__41834);
} else {
return G__41834;
}
})();
return (new re_frame_forms.impl.Form(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__41820),new cljs.core.Keyword(null,"validator","validator",-1966190681).cljs$core$IFn$_invoke$arity$1(G__41820),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

re_frame_forms.impl.make_field = (function re_frame_forms$impl$make_field(form,path,coercer,validator){
return re_frame_forms.impl.__GT_Field(form,coercer,validator,path);
});
re_frame_forms.impl.make_form = (function re_frame_forms$impl$make_form(value,validator){
return re_frame_forms.impl.__GT_Form(reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("re-frame-forms.impl","value","re-frame-forms.impl/value",-810615112),value,new cljs.core.Keyword("re-frame-forms.impl","original","re-frame-forms.impl/original",-1497002270),value], null)),validator);
});

//# sourceMappingURL=re_frame_forms.impl.js.map
