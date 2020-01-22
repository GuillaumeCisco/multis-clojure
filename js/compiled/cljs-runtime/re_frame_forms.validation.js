goog.provide('re_frame_forms.validation');
goog.require('cljs.core');

/**
 * Validate field
 * @interface
 */
re_frame_forms.validation.FieldValidator = function(){};

/**
 * Return vector of errors for the field. Empty vector if valie
 */
re_frame_forms.validation.validate_field = (function re_frame_forms$validation$validate_field(this$,value){
if((((!((this$ == null)))) && ((!((this$.re_frame_forms$validation$FieldValidator$validate_field$arity$2 == null)))))){
return this$.re_frame_forms$validation$FieldValidator$validate_field$arity$2(this$,value);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (re_frame_forms.validation.validate_field[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__4488__auto__.call(null,this$,value));
} else {
var m__4485__auto__ = (re_frame_forms.validation.validate_field["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__4485__auto__.call(null,this$,value));
} else {
throw cljs.core.missing_protocol("FieldValidator.validate-field",this$);
}
}
}
});


/**
 * Validate form
 * @interface
 */
re_frame_forms.validation.FormValidator = function(){};

/**
 * Return instance of ValidationResult.
 */
re_frame_forms.validation.validate_form = (function re_frame_forms$validation$validate_form(this$,value){
if((((!((this$ == null)))) && ((!((this$.re_frame_forms$validation$FormValidator$validate_form$arity$2 == null)))))){
return this$.re_frame_forms$validation$FormValidator$validate_form$arity$2(this$,value);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (re_frame_forms.validation.validate_form[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__4488__auto__.call(null,this$,value));
} else {
var m__4485__auto__ = (re_frame_forms.validation.validate_form["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__4485__auto__.call(null,this$,value));
} else {
throw cljs.core.missing_protocol("FormValidator.validate-form",this$);
}
}
}
});


/**
 * Holder for validation result
 * @interface
 */
re_frame_forms.validation.ValidationResult = function(){};

/**
 * Get errors for the field on path
 */
re_frame_forms.validation.field_errors = (function re_frame_forms$validation$field_errors(this$,path){
if((((!((this$ == null)))) && ((!((this$.re_frame_forms$validation$ValidationResult$field_errors$arity$2 == null)))))){
return this$.re_frame_forms$validation$ValidationResult$field_errors$arity$2(this$,path);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (re_frame_forms.validation.field_errors[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(this$,path) : m__4488__auto__.call(null,this$,path));
} else {
var m__4485__auto__ = (re_frame_forms.validation.field_errors["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(this$,path) : m__4485__auto__.call(null,this$,path));
} else {
throw cljs.core.missing_protocol("ValidationResult.field-errors",this$);
}
}
}
});

/**
 * Is this form valid?
 */
re_frame_forms.validation.valid_QMARK_ = (function re_frame_forms$validation$valid_QMARK_(this$){
if((((!((this$ == null)))) && ((!((this$.re_frame_forms$validation$ValidationResult$valid_QMARK_$arity$1 == null)))))){
return this$.re_frame_forms$validation$ValidationResult$valid_QMARK_$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (re_frame_forms.validation.valid_QMARK_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (re_frame_forms.validation.valid_QMARK_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("ValidationResult.valid?",this$);
}
}
}
});


/**
* @constructor
 * @implements {re_frame_forms.validation.ValidationResult}
*/
re_frame_forms.validation.ValidResult = (function (){
});
(re_frame_forms.validation.ValidResult.prototype.re_frame_forms$validation$ValidationResult$ = cljs.core.PROTOCOL_SENTINEL);

(re_frame_forms.validation.ValidResult.prototype.re_frame_forms$validation$ValidationResult$field_errors$arity$2 = (function (this$,path){
var self__ = this;
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
}));

(re_frame_forms.validation.ValidResult.prototype.re_frame_forms$validation$ValidationResult$valid_QMARK_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return true;
}));

(re_frame_forms.validation.ValidResult.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(re_frame_forms.validation.ValidResult.cljs$lang$type = true);

(re_frame_forms.validation.ValidResult.cljs$lang$ctorStr = "re-frame-forms.validation/ValidResult");

(re_frame_forms.validation.ValidResult.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"re-frame-forms.validation/ValidResult");
}));

/**
 * Positional factory function for re-frame-forms.validation/ValidResult.
 */
re_frame_forms.validation.__GT_ValidResult = (function re_frame_forms$validation$__GT_ValidResult(){
return (new re_frame_forms.validation.ValidResult());
});


/**
* @constructor
 * @implements {re_frame_forms.validation.ValidationResult}
*/
re_frame_forms.validation.MapValidationResult = (function (errors){
this.errors = errors;
});
(re_frame_forms.validation.MapValidationResult.prototype.re_frame_forms$validation$ValidationResult$ = cljs.core.PROTOCOL_SENTINEL);

(re_frame_forms.validation.MapValidationResult.prototype.re_frame_forms$validation$ValidationResult$field_errors$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(self__.errors,path)], null));
}));

(re_frame_forms.validation.MapValidationResult.prototype.re_frame_forms$validation$ValidationResult$valid_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.empty_QMARK_(self__.errors);
}));

(re_frame_forms.validation.MapValidationResult.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"errors","errors",731740809,null)], null);
}));

(re_frame_forms.validation.MapValidationResult.cljs$lang$type = true);

(re_frame_forms.validation.MapValidationResult.cljs$lang$ctorStr = "re-frame-forms.validation/MapValidationResult");

(re_frame_forms.validation.MapValidationResult.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"re-frame-forms.validation/MapValidationResult");
}));

/**
 * Positional factory function for re-frame-forms.validation/MapValidationResult.
 */
re_frame_forms.validation.__GT_MapValidationResult = (function re_frame_forms$validation$__GT_MapValidationResult(errors){
return (new re_frame_forms.validation.MapValidationResult(errors));
});

re_frame_forms.validation.validation_result = (function re_frame_forms$validation$validation_result(result){
return re_frame_forms.validation.__GT_MapValidationResult(result);
});
re_frame_forms.validation.form_validator = (function re_frame_forms$validation$form_validator(f){
if((typeof re_frame_forms !== 'undefined') && (typeof re_frame_forms.validation !== 'undefined') && (typeof re_frame_forms.validation.t_re_frame_forms$validation41160 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {re_frame_forms.validation.FormValidator}
 * @implements {cljs.core.IWithMeta}
*/
re_frame_forms.validation.t_re_frame_forms$validation41160 = (function (f,meta41161){
this.f = f;
this.meta41161 = meta41161;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(re_frame_forms.validation.t_re_frame_forms$validation41160.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41162,meta41161__$1){
var self__ = this;
var _41162__$1 = this;
return (new re_frame_forms.validation.t_re_frame_forms$validation41160(self__.f,meta41161__$1));
}));

(re_frame_forms.validation.t_re_frame_forms$validation41160.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41162){
var self__ = this;
var _41162__$1 = this;
return self__.meta41161;
}));

(re_frame_forms.validation.t_re_frame_forms$validation41160.prototype.re_frame_forms$validation$FormValidator$ = cljs.core.PROTOCOL_SENTINEL);

(re_frame_forms.validation.t_re_frame_forms$validation41160.prototype.re_frame_forms$validation$FormValidator$validate_form$arity$2 = (function (_,value){
var self__ = this;
var ___$1 = this;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(value) : self__.f.call(null,value));
}));

(re_frame_forms.validation.t_re_frame_forms$validation41160.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta41161","meta41161",1006109665,null)], null);
}));

(re_frame_forms.validation.t_re_frame_forms$validation41160.cljs$lang$type = true);

(re_frame_forms.validation.t_re_frame_forms$validation41160.cljs$lang$ctorStr = "re-frame-forms.validation/t_re_frame_forms$validation41160");

(re_frame_forms.validation.t_re_frame_forms$validation41160.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"re-frame-forms.validation/t_re_frame_forms$validation41160");
}));

/**
 * Positional factory function for re-frame-forms.validation/t_re_frame_forms$validation41160.
 */
re_frame_forms.validation.__GT_t_re_frame_forms$validation41160 = (function re_frame_forms$validation$form_validator_$___GT_t_re_frame_forms$validation41160(f__$1,meta41161){
return (new re_frame_forms.validation.t_re_frame_forms$validation41160(f__$1,meta41161));
});

}

return (new re_frame_forms.validation.t_re_frame_forms$validation41160(f,cljs.core.PersistentArrayMap.EMPTY));
});
goog.object.set(re_frame_forms.validation.ValidationResult,"null",true);

var G__41198_41362 = re_frame_forms.validation.field_errors;
var G__41199_41363 = "null";
var G__41200_41364 = (function (this$,path){
return cljs.core.PersistentVector.EMPTY;
});
goog.object.set(G__41198_41362,G__41199_41363,G__41200_41364);

var G__41209_41365 = re_frame_forms.validation.valid_QMARK_;
var G__41210_41366 = "null";
var G__41211_41367 = (function (this$){
return true;
});
goog.object.set(G__41209_41365,G__41210_41366,G__41211_41367);

goog.object.set(re_frame_forms.validation.FieldValidator,"null",true);

var G__41212_41371 = re_frame_forms.validation.validate_field;
var G__41213_41372 = "null";
var G__41214_41373 = (function (this$,value){
return cljs.core.PersistentVector.EMPTY;
});
goog.object.set(G__41212_41371,G__41213_41372,G__41214_41373);

goog.object.set(re_frame_forms.validation.FormValidator,"null",true);

var G__41217_41375 = re_frame_forms.validation.validate_form;
var G__41218_41376 = "null";
var G__41219_41377 = (function (this$,value){
return re_frame_forms.validation.__GT_ValidResult();
});
goog.object.set(G__41217_41375,G__41218_41376,G__41219_41377);

//# sourceMappingURL=re_frame_forms.validation.js.map
