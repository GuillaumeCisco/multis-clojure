goog.provide('re_frame_forms.protocols');
goog.require('cljs.core');

/**
 * Protocol for value holder
 * @interface
 */
re_frame_forms.protocols.Value = function(){};

/**
 * Get reaction for current value
 */
re_frame_forms.protocols.value = (function re_frame_forms$protocols$value(this$,default$){
if((((!((this$ == null)))) && ((!((this$.re_frame_forms$protocols$Value$value$arity$2 == null)))))){
return this$.re_frame_forms$protocols$Value$value$arity$2(this$,default$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (re_frame_forms.protocols.value[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(this$,default$) : m__4488__auto__.call(null,this$,default$));
} else {
var m__4485__auto__ = (re_frame_forms.protocols.value["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(this$,default$) : m__4485__auto__.call(null,this$,default$));
} else {
throw cljs.core.missing_protocol("Value.value",this$);
}
}
}
});

/**
 * Set current value
 */
re_frame_forms.protocols.set_value_BANG_ = (function re_frame_forms$protocols$set_value_BANG_(this$,val){
if((((!((this$ == null)))) && ((!((this$.re_frame_forms$protocols$Value$set_value_BANG_$arity$2 == null)))))){
return this$.re_frame_forms$protocols$Value$set_value_BANG_$arity$2(this$,val);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (re_frame_forms.protocols.set_value_BANG_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(this$,val) : m__4488__auto__.call(null,this$,val));
} else {
var m__4485__auto__ = (re_frame_forms.protocols.set_value_BANG_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(this$,val) : m__4485__auto__.call(null,this$,val));
} else {
throw cljs.core.missing_protocol("Value.set-value!",this$);
}
}
}
});


/**
 * Persistent error is retained between validations. Has to be explicitly set and cleared.
 * @interface
 */
re_frame_forms.protocols.PersistentError = function(){};

/**
 * Set 1 error for the field. Error can be cleared by calling clear-error!
 */
re_frame_forms.protocols.set_error_BANG_ = (function re_frame_forms$protocols$set_error_BANG_(this$,error){
if((((!((this$ == null)))) && ((!((this$.re_frame_forms$protocols$PersistentError$set_error_BANG_$arity$2 == null)))))){
return this$.re_frame_forms$protocols$PersistentError$set_error_BANG_$arity$2(this$,error);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (re_frame_forms.protocols.set_error_BANG_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(this$,error) : m__4488__auto__.call(null,this$,error));
} else {
var m__4485__auto__ = (re_frame_forms.protocols.set_error_BANG_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(this$,error) : m__4485__auto__.call(null,this$,error));
} else {
throw cljs.core.missing_protocol("PersistentError.set-error!",this$);
}
}
}
});

/**
 * Clear field error
 */
re_frame_forms.protocols.clear_error_BANG_ = (function re_frame_forms$protocols$clear_error_BANG_(this$){
return re_frame_forms.protocols.set_error_BANG_(this$,null);
});

/**
 * Protocol for accessing original value
 * @interface
 */
re_frame_forms.protocols.ResetValue = function(){};

/**
 * Get original value of the form/field
 */
re_frame_forms.protocols.original_value = (function re_frame_forms$protocols$original_value(this$){
if((((!((this$ == null)))) && ((!((this$.re_frame_forms$protocols$ResetValue$original_value$arity$1 == null)))))){
return this$.re_frame_forms$protocols$ResetValue$original_value$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (re_frame_forms.protocols.original_value[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (re_frame_forms.protocols.original_value["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("ResetValue.original-value",this$);
}
}
}
});

/**
 * Reset form/field to the original value, clear errors
 */
re_frame_forms.protocols.reset_value_BANG_ = (function re_frame_forms$protocols$reset_value_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.re_frame_forms$protocols$ResetValue$reset_value_BANG_$arity$1 == null)))))){
return this$.re_frame_forms$protocols$ResetValue$reset_value_BANG_$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (re_frame_forms.protocols.reset_value_BANG_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (re_frame_forms.protocols.reset_value_BANG_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("ResetValue.reset-value!",this$);
}
}
}
});


/**
 * Field protocol converting to/from string
 * @interface
 */
re_frame_forms.protocols.CoercedValue = function(){};

/**
 * Get reaction for current value converted to string
 */
re_frame_forms.protocols.str_value = (function re_frame_forms$protocols$str_value(this$){
if((((!((this$ == null)))) && ((!((this$.re_frame_forms$protocols$CoercedValue$str_value$arity$1 == null)))))){
return this$.re_frame_forms$protocols$CoercedValue$str_value$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (re_frame_forms.protocols.str_value[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (re_frame_forms.protocols.str_value["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("CoercedValue.str-value",this$);
}
}
}
});

/**
 * Set current value by converting val from string
 */
re_frame_forms.protocols.set_str_value_BANG_ = (function re_frame_forms$protocols$set_str_value_BANG_(this$,val,retain_str_QMARK_){
if((((!((this$ == null)))) && ((!((this$.re_frame_forms$protocols$CoercedValue$set_str_value_BANG_$arity$3 == null)))))){
return this$.re_frame_forms$protocols$CoercedValue$set_str_value_BANG_$arity$3(this$,val,retain_str_QMARK_);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (re_frame_forms.protocols.set_str_value_BANG_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(this$,val,retain_str_QMARK_) : m__4488__auto__.call(null,this$,val,retain_str_QMARK_));
} else {
var m__4485__auto__ = (re_frame_forms.protocols.set_str_value_BANG_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(this$,val,retain_str_QMARK_) : m__4485__auto__.call(null,this$,val,retain_str_QMARK_));
} else {
throw cljs.core.missing_protocol("CoercedValue.set-str-value!",this$);
}
}
}
});


/**
 * Field/form errors
 * @interface
 */
re_frame_forms.protocols.ErrorContainer = function(){};

/**
 * Get reaction for current field/form errors
 */
re_frame_forms.protocols.errors = (function re_frame_forms$protocols$errors(this$){
if((((!((this$ == null)))) && ((!((this$.re_frame_forms$protocols$ErrorContainer$errors$arity$1 == null)))))){
return this$.re_frame_forms$protocols$ErrorContainer$errors$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (re_frame_forms.protocols.errors[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (re_frame_forms.protocols.errors["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("ErrorContainer.errors",this$);
}
}
}
});


/**
 * Field/form validation status
 * @interface
 */
re_frame_forms.protocols.Validatable = function(){};

/**
 * Get reaction for current validation status of the form/field
 */
re_frame_forms.protocols.valid_QMARK_ = (function re_frame_forms$protocols$valid_QMARK_(this$){
if((((!((this$ == null)))) && ((!((this$.re_frame_forms$protocols$Validatable$valid_QMARK_$arity$1 == null)))))){
return this$.re_frame_forms$protocols$Validatable$valid_QMARK_$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (re_frame_forms.protocols.valid_QMARK_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (re_frame_forms.protocols.valid_QMARK_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Validatable.valid?",this$);
}
}
}
});


/**
 * Protocol for forced validation.
 * @interface
 */
re_frame_forms.protocols.Touchable = function(){};

/**
 * Touch the field/form
 */
re_frame_forms.protocols.touch_BANG_ = (function re_frame_forms$protocols$touch_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.re_frame_forms$protocols$Touchable$touch_BANG_$arity$1 == null)))))){
return this$.re_frame_forms$protocols$Touchable$touch_BANG_$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (re_frame_forms.protocols.touch_BANG_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (re_frame_forms.protocols.touch_BANG_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Touchable.touch!",this$);
}
}
}
});

/**
 * Get reaction with current touch status
 */
re_frame_forms.protocols.touched_QMARK_ = (function re_frame_forms$protocols$touched_QMARK_(this$){
if((((!((this$ == null)))) && ((!((this$.re_frame_forms$protocols$Touchable$touched_QMARK_$arity$1 == null)))))){
return this$.re_frame_forms$protocols$Touchable$touched_QMARK_$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (re_frame_forms.protocols.touched_QMARK_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (re_frame_forms.protocols.touched_QMARK_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Touchable.touched?",this$);
}
}
}
});


/**
 * @interface
 */
re_frame_forms.protocols.DelayedValidation = function(){};

re_frame_forms.protocols.start_validation_BANG_ = (function re_frame_forms$protocols$start_validation_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.re_frame_forms$protocols$DelayedValidation$start_validation_BANG_$arity$1 == null)))))){
return this$.re_frame_forms$protocols$DelayedValidation$start_validation_BANG_$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (re_frame_forms.protocols.start_validation_BANG_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (re_frame_forms.protocols.start_validation_BANG_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("DelayedValidation.start-validation!",this$);
}
}
}
});

re_frame_forms.protocols.mark_ok_BANG_ = (function re_frame_forms$protocols$mark_ok_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.re_frame_forms$protocols$DelayedValidation$mark_ok_BANG_$arity$1 == null)))))){
return this$.re_frame_forms$protocols$DelayedValidation$mark_ok_BANG_$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (re_frame_forms.protocols.mark_ok_BANG_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (re_frame_forms.protocols.mark_ok_BANG_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("DelayedValidation.mark-ok!",this$);
}
}
}
});

re_frame_forms.protocols.mark_error_BANG_ = (function re_frame_forms$protocols$mark_error_BANG_(this$,error){
if((((!((this$ == null)))) && ((!((this$.re_frame_forms$protocols$DelayedValidation$mark_error_BANG_$arity$2 == null)))))){
return this$.re_frame_forms$protocols$DelayedValidation$mark_error_BANG_$arity$2(this$,error);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (re_frame_forms.protocols.mark_error_BANG_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(this$,error) : m__4488__auto__.call(null,this$,error));
} else {
var m__4485__auto__ = (re_frame_forms.protocols.mark_error_BANG_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(this$,error) : m__4485__auto__.call(null,this$,error));
} else {
throw cljs.core.missing_protocol("DelayedValidation.mark-error!",this$);
}
}
}
});


/**
 * @interface
 */
re_frame_forms.protocols.DelayValidationContainer = function(){};

re_frame_forms.protocols.validation_in_progress_QMARK_ = (function re_frame_forms$protocols$validation_in_progress_QMARK_(this$){
if((((!((this$ == null)))) && ((!((this$.re_frame_forms$protocols$DelayValidationContainer$validation_in_progress_QMARK_$arity$1 == null)))))){
return this$.re_frame_forms$protocols$DelayValidationContainer$validation_in_progress_QMARK_$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (re_frame_forms.protocols.validation_in_progress_QMARK_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (re_frame_forms.protocols.validation_in_progress_QMARK_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("DelayValidationContainer.validation-in-progress?",this$);
}
}
}
});


//# sourceMappingURL=re_frame_forms.protocols.js.map
