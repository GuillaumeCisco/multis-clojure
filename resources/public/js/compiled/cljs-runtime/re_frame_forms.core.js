goog.provide('re_frame_forms.core');
goog.require('cljs.core');
goog.require('re_frame_forms.protocols');
goog.require('re_frame_forms.impl');
/**
 * Get reaction for current value
 */
re_frame_forms.core.value = (function re_frame_forms$core$value(var_args){
var G__41839 = arguments.length;
switch (G__41839) {
case 1:
return re_frame_forms.core.value.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame_forms.core.value.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame_forms.core.value.cljs$core$IFn$_invoke$arity$1 = (function (form_or_field){
return re_frame_forms.core.value.cljs$core$IFn$_invoke$arity$2(form_or_field,null);
}));

(re_frame_forms.core.value.cljs$core$IFn$_invoke$arity$2 = (function (form_or_field,default$){
return re_frame_forms.protocols.value(form_or_field,default$);
}));

(re_frame_forms.core.value.cljs$lang$maxFixedArity = 2);

/**
 * Set current value
 */
re_frame_forms.core.set_value_BANG_ = (function re_frame_forms$core$set_value_BANG_(form_or_field,value){
return re_frame_forms.protocols.set_value_BANG_(form_or_field,value);
});
/**
 * Set 1 error for the field. Error can be cleared by calling clear-error!
 */
re_frame_forms.core.set_error_BANG_ = (function re_frame_forms$core$set_error_BANG_(field,error){
return re_frame_forms.protocols.set_error_BANG_(field,error);
});
/**
 * Clear field error
 */
re_frame_forms.core.clear_error_BANG_ = (function re_frame_forms$core$clear_error_BANG_(field){
return re_frame_forms.core.set_error_BANG_(field,null);
});
re_frame_forms.core.start_validation_BANG_ = (function re_frame_forms$core$start_validation_BANG_(this$){
return re_frame_forms.protocols.start_validation_BANG_(this$);
});
re_frame_forms.core.validation_in_progress_QMARK_ = (function re_frame_forms$core$validation_in_progress_QMARK_(this$){
return re_frame_forms.protocols.validation_in_progress_QMARK_(this$);
});
re_frame_forms.core.mark_ok_BANG_ = (function re_frame_forms$core$mark_ok_BANG_(this$){
return re_frame_forms.protocols.mark_ok_BANG_(this$);
});
re_frame_forms.core.mark_error_BANG_ = (function re_frame_forms$core$mark_error_BANG_(this$,error){
return re_frame_forms.protocols.mark_error_BANG_(this$,error);
});
/**
 * Get original value of the form/field
 */
re_frame_forms.core.original_value = (function re_frame_forms$core$original_value(form_or_field){
return re_frame_forms.protocols.original_value(form_or_field);
});
/**
 * Reset form/field to the original value, clear errors
 */
re_frame_forms.core.reset_value_BANG_ = (function re_frame_forms$core$reset_value_BANG_(form_or_field){
return re_frame_forms.protocols.reset_value_BANG_(form_or_field);
});
/**
 * Get reaction for current value converted to string
 */
re_frame_forms.core.str_value = (function re_frame_forms$core$str_value(field){
return re_frame_forms.protocols.str_value(field);
});
/**
 * Set current value by converting val from string
 */
re_frame_forms.core.set_str_value_BANG_ = (function re_frame_forms$core$set_str_value_BANG_(var_args){
var G__41842 = arguments.length;
switch (G__41842) {
case 2:
return re_frame_forms.core.set_str_value_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame_forms.core.set_str_value_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame_forms.core.set_str_value_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (field,value){
return re_frame_forms.protocols.set_str_value_BANG_(field,value,false);
}));

(re_frame_forms.core.set_str_value_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (field,value,retain_str_QMARK_){
return re_frame_forms.protocols.set_str_value_BANG_(field,value,retain_str_QMARK_);
}));

(re_frame_forms.core.set_str_value_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Get reaction for current field/form errors
 */
re_frame_forms.core.errors = (function re_frame_forms$core$errors(field){
return re_frame_forms.protocols.errors(field);
});
/**
 * Get reaction for current validation status of the form/field
 */
re_frame_forms.core.valid_QMARK_ = (function re_frame_forms$core$valid_QMARK_(form_or_field){
return re_frame_forms.protocols.valid_QMARK_(form_or_field);
});
/**
 * Touch the field/form
 */
re_frame_forms.core.touch_BANG_ = (function re_frame_forms$core$touch_BANG_(form_or_field){
return re_frame_forms.protocols.touch_BANG_(form_or_field);
});
/**
 * Get reaction with current touch status
 */
re_frame_forms.core.touched_QMARK_ = (function re_frame_forms$core$touched_QMARK_(form_or_field){
return re_frame_forms.protocols.touched_QMARK_(form_or_field);
});
re_frame_forms.core.make_field = (function re_frame_forms$core$make_field(var_args){
var G__41845 = arguments.length;
switch (G__41845) {
case 2:
return re_frame_forms.core.make_field.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame_forms.core.make_field.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return re_frame_forms.core.make_field.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame_forms.core.make_field.cljs$core$IFn$_invoke$arity$2 = (function (form,path){
return re_frame_forms.core.make_field.cljs$core$IFn$_invoke$arity$4(form,path,null,null);
}));

(re_frame_forms.core.make_field.cljs$core$IFn$_invoke$arity$3 = (function (form,path,type){
return re_frame_forms.core.make_field.cljs$core$IFn$_invoke$arity$4(form,path,type,null);
}));

(re_frame_forms.core.make_field.cljs$core$IFn$_invoke$arity$4 = (function (form,path,type,validator){
return re_frame_forms.impl.make_field(form,path,type,validator);
}));

(re_frame_forms.core.make_field.cljs$lang$maxFixedArity = 4);

re_frame_forms.core.make_form = (function re_frame_forms$core$make_form(var_args){
var G__41847 = arguments.length;
switch (G__41847) {
case 1:
return re_frame_forms.core.make_form.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame_forms.core.make_form.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame_forms.core.make_form.cljs$core$IFn$_invoke$arity$1 = (function (value){
return re_frame_forms.core.make_form.cljs$core$IFn$_invoke$arity$2(value,null);
}));

(re_frame_forms.core.make_form.cljs$core$IFn$_invoke$arity$2 = (function (value,validator){
return re_frame_forms.impl.make_form(value,validator);
}));

(re_frame_forms.core.make_form.cljs$lang$maxFixedArity = 2);

re_frame_forms.core.handle_str_value = (function re_frame_forms$core$handle_str_value(var_args){
var G__41850 = arguments.length;
switch (G__41850) {
case 1:
return re_frame_forms.core.handle_str_value.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame_forms.core.handle_str_value.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame_forms.core.handle_str_value.cljs$core$IFn$_invoke$arity$1 = (function (field){
return re_frame_forms.core.handle_str_value.cljs$core$IFn$_invoke$arity$2(field,false);
}));

(re_frame_forms.core.handle_str_value.cljs$core$IFn$_invoke$arity$2 = (function (field,retain_str_QMARK_){
return (function (p1__41848_SHARP_){
return re_frame_forms.core.set_str_value_BANG_.cljs$core$IFn$_invoke$arity$3(field,p1__41848_SHARP_.target.value,retain_str_QMARK_);
});
}));

(re_frame_forms.core.handle_str_value.cljs$lang$maxFixedArity = 2);

re_frame_forms.core.handle_checked_value = (function re_frame_forms$core$handle_checked_value(field){
return (function (p1__41851_SHARP_){
return re_frame_forms.core.set_value_BANG_(field,p1__41851_SHARP_.target.checked);
});
});
re_frame_forms.core.handle_valid_form = (function re_frame_forms$core$handle_valid_form(form,callback){
return (function (e){
re_frame_forms.core.touch_BANG_(form);

if(cljs.core.truth_(cljs.core.deref(re_frame_forms.core.valid_QMARK_(form)))){
var G__41852_41869 = cljs.core.deref(re_frame_forms.core.value.cljs$core$IFn$_invoke$arity$1(form));
(callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__41852_41869) : callback.call(null,G__41852_41869));
} else {
}

return e.preventDefault();
});
});

//# sourceMappingURL=re_frame_forms.core.js.map
