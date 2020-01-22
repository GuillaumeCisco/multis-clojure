goog.provide('re_frame_forms.coerce');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('re_frame_forms.format');

/**
 * @interface
 */
re_frame_forms.coerce.Coercer = function(){};

re_frame_forms.coerce.to_str = (function re_frame_forms$coerce$to_str(this$,obj_value){
if((((!((this$ == null)))) && ((!((this$.re_frame_forms$coerce$Coercer$to_str$arity$2 == null)))))){
return this$.re_frame_forms$coerce$Coercer$to_str$arity$2(this$,obj_value);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (re_frame_forms.coerce.to_str[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(this$,obj_value) : m__4488__auto__.call(null,this$,obj_value));
} else {
var m__4485__auto__ = (re_frame_forms.coerce.to_str["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(this$,obj_value) : m__4485__auto__.call(null,this$,obj_value));
} else {
throw cljs.core.missing_protocol("Coercer.to-str",this$);
}
}
}
});

re_frame_forms.coerce.from_str = (function re_frame_forms$coerce$from_str(this$,str_value){
if((((!((this$ == null)))) && ((!((this$.re_frame_forms$coerce$Coercer$from_str$arity$2 == null)))))){
return this$.re_frame_forms$coerce$Coercer$from_str$arity$2(this$,str_value);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (re_frame_forms.coerce.from_str[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(this$,str_value) : m__4488__auto__.call(null,this$,str_value));
} else {
var m__4485__auto__ = (re_frame_forms.coerce.from_str["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(this$,str_value) : m__4485__auto__.call(null,this$,str_value));
} else {
throw cljs.core.missing_protocol("Coercer.from-str",this$);
}
}
}
});

re_frame_forms.coerce.valid_str_QMARK_ = (function re_frame_forms$coerce$valid_str_QMARK_(this$,str_value){
if((((!((this$ == null)))) && ((!((this$.re_frame_forms$coerce$Coercer$valid_str_QMARK_$arity$2 == null)))))){
return this$.re_frame_forms$coerce$Coercer$valid_str_QMARK_$arity$2(this$,str_value);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (re_frame_forms.coerce.valid_str_QMARK_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(this$,str_value) : m__4488__auto__.call(null,this$,str_value));
} else {
var m__4485__auto__ = (re_frame_forms.coerce.valid_str_QMARK_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(this$,str_value) : m__4485__auto__.call(null,this$,str_value));
} else {
throw cljs.core.missing_protocol("Coercer.valid-str?",this$);
}
}
}
});

re_frame_forms.coerce.normalize_num_str = (function re_frame_forms$coerce$normalize_num_str(s){
return clojure.string.replace_all(clojure.string.replace_all(s,/,/,"."),/\s/,"");
});

/**
* @constructor
 * @implements {re_frame_forms.coerce.Coercer}
*/
re_frame_forms.coerce.IntCoercer = (function (allow_blank_QMARK_,format,parse){
this.allow_blank_QMARK_ = allow_blank_QMARK_;
this.format = format;
this.parse = parse;
});
(re_frame_forms.coerce.IntCoercer.prototype.re_frame_forms$coerce$Coercer$ = cljs.core.PROTOCOL_SENTINEL);

(re_frame_forms.coerce.IntCoercer.prototype.re_frame_forms$coerce$Coercer$to_str$arity$2 = (function (_,obj){
var self__ = this;
var ___$1 = this;
if((obj == null)){
return "";
} else {
return (self__.format.cljs$core$IFn$_invoke$arity$1 ? self__.format.cljs$core$IFn$_invoke$arity$1(obj) : self__.format.call(null,obj));
}
}));

(re_frame_forms.coerce.IntCoercer.prototype.re_frame_forms$coerce$Coercer$from_str$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
if(clojure.string.blank_QMARK_(s)){
return null;
} else {
return (self__.parse.cljs$core$IFn$_invoke$arity$1 ? self__.parse.cljs$core$IFn$_invoke$arity$1(s) : self__.parse.call(null,s));
}
}));

(re_frame_forms.coerce.IntCoercer.prototype.re_frame_forms$coerce$Coercer$valid_str_QMARK_$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return cljs.core.boolean$((function (){var or__4185__auto__ = (function (){var and__4174__auto__ = self__.allow_blank_QMARK_;
if(cljs.core.truth_(and__4174__auto__)){
return clojure.string.blank_QMARK_(s);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.re_matches(/(\+|\-)?[\s\d]+/,s);
}
})());
}));

(re_frame_forms.coerce.IntCoercer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"allow-blank?","allow-blank?",1469456486,null),new cljs.core.Symbol(null,"format","format",333606761,null),new cljs.core.Symbol(null,"parse","parse",478366908,null)], null);
}));

(re_frame_forms.coerce.IntCoercer.cljs$lang$type = true);

(re_frame_forms.coerce.IntCoercer.cljs$lang$ctorStr = "re-frame-forms.coerce/IntCoercer");

(re_frame_forms.coerce.IntCoercer.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"re-frame-forms.coerce/IntCoercer");
}));

/**
 * Positional factory function for re-frame-forms.coerce/IntCoercer.
 */
re_frame_forms.coerce.__GT_IntCoercer = (function re_frame_forms$coerce$__GT_IntCoercer(allow_blank_QMARK_,format,parse){
return (new re_frame_forms.coerce.IntCoercer(allow_blank_QMARK_,format,parse));
});

re_frame_forms.coerce.int$ = (function re_frame_forms$coerce$int(var_args){
var G__41749 = arguments.length;
switch (G__41749) {
case 0:
return re_frame_forms.coerce.int$.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return re_frame_forms.coerce.int$.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame_forms.coerce.int$.cljs$core$IFn$_invoke$arity$0 = (function (){
return re_frame_forms.coerce.int$.cljs$core$IFn$_invoke$arity$1("0");
}));

(re_frame_forms.coerce.int$.cljs$core$IFn$_invoke$arity$1 = (function (format){
return re_frame_forms.coerce.__GT_IntCoercer(true,re_frame_forms.format.format.cljs$core$IFn$_invoke$arity$1(format),(function (p1__41747_SHARP_){
return parseInt(re_frame_forms.coerce.normalize_num_str(p1__41747_SHARP_));
}));
}));

(re_frame_forms.coerce.int$.cljs$lang$maxFixedArity = 1);


/**
* @constructor
 * @implements {re_frame_forms.coerce.Coercer}
*/
re_frame_forms.coerce.NumberCoercer = (function (allow_blank_QMARK_,format,parse){
this.allow_blank_QMARK_ = allow_blank_QMARK_;
this.format = format;
this.parse = parse;
});
(re_frame_forms.coerce.NumberCoercer.prototype.re_frame_forms$coerce$Coercer$ = cljs.core.PROTOCOL_SENTINEL);

(re_frame_forms.coerce.NumberCoercer.prototype.re_frame_forms$coerce$Coercer$to_str$arity$2 = (function (_,obj){
var self__ = this;
var ___$1 = this;
if((obj == null)){
return "";
} else {
return (self__.format.cljs$core$IFn$_invoke$arity$1 ? self__.format.cljs$core$IFn$_invoke$arity$1(obj) : self__.format.call(null,obj));
}
}));

(re_frame_forms.coerce.NumberCoercer.prototype.re_frame_forms$coerce$Coercer$from_str$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
if(clojure.string.blank_QMARK_(s)){
return null;
} else {
return (self__.parse.cljs$core$IFn$_invoke$arity$1 ? self__.parse.cljs$core$IFn$_invoke$arity$1(s) : self__.parse.call(null,s));
}
}));

(re_frame_forms.coerce.NumberCoercer.prototype.re_frame_forms$coerce$Coercer$valid_str_QMARK_$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return cljs.core.boolean$((function (){var or__4185__auto__ = (function (){var and__4174__auto__ = self__.allow_blank_QMARK_;
if(cljs.core.truth_(and__4174__auto__)){
return clojure.string.blank_QMARK_(s);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.re_matches(/(\+|\-)?[\s\d]+(?:(\.|,)[\s\d]+)?/,s);
}
})());
}));

(re_frame_forms.coerce.NumberCoercer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"allow-blank?","allow-blank?",1469456486,null),new cljs.core.Symbol(null,"format","format",333606761,null),new cljs.core.Symbol(null,"parse","parse",478366908,null)], null);
}));

(re_frame_forms.coerce.NumberCoercer.cljs$lang$type = true);

(re_frame_forms.coerce.NumberCoercer.cljs$lang$ctorStr = "re-frame-forms.coerce/NumberCoercer");

(re_frame_forms.coerce.NumberCoercer.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"re-frame-forms.coerce/NumberCoercer");
}));

/**
 * Positional factory function for re-frame-forms.coerce/NumberCoercer.
 */
re_frame_forms.coerce.__GT_NumberCoercer = (function re_frame_forms$coerce$__GT_NumberCoercer(allow_blank_QMARK_,format,parse){
return (new re_frame_forms.coerce.NumberCoercer(allow_blank_QMARK_,format,parse));
});

re_frame_forms.coerce.number = (function re_frame_forms$coerce$number(var_args){
var G__41752 = arguments.length;
switch (G__41752) {
case 0:
return re_frame_forms.coerce.number.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return re_frame_forms.coerce.number.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame_forms.coerce.number.cljs$core$IFn$_invoke$arity$0 = (function (){
return re_frame_forms.coerce.number.cljs$core$IFn$_invoke$arity$1("0.####");
}));

(re_frame_forms.coerce.number.cljs$core$IFn$_invoke$arity$1 = (function (format){
return re_frame_forms.coerce.__GT_NumberCoercer(true,re_frame_forms.format.format.cljs$core$IFn$_invoke$arity$1(format),(function (p1__41750_SHARP_){
return parseFloat(re_frame_forms.coerce.normalize_num_str(p1__41750_SHARP_));
}));
}));

(re_frame_forms.coerce.number.cljs$lang$maxFixedArity = 1);


/**
* @constructor
 * @implements {re_frame_forms.coerce.Coercer}
*/
re_frame_forms.coerce.BoolCoercer = (function (blank_as_false_QMARK_){
this.blank_as_false_QMARK_ = blank_as_false_QMARK_;
});
(re_frame_forms.coerce.BoolCoercer.prototype.re_frame_forms$coerce$Coercer$ = cljs.core.PROTOCOL_SENTINEL);

(re_frame_forms.coerce.BoolCoercer.prototype.re_frame_forms$coerce$Coercer$to_str$arity$2 = (function (_,obj){
var self__ = this;
var ___$1 = this;
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj);
}));

(re_frame_forms.coerce.BoolCoercer.prototype.re_frame_forms$coerce$Coercer$from_str$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var and__4174__auto__ = self__.blank_as_false_QMARK_;
if(cljs.core.truth_(and__4174__auto__)){
return clojure.string.blank_QMARK_(s);
} else {
return and__4174__auto__;
}
})())){
return false;
} else {
return cljs.core.boolean$(s);
}
}));

(re_frame_forms.coerce.BoolCoercer.prototype.re_frame_forms$coerce$Coercer$valid_str_QMARK_$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return true;
}));

(re_frame_forms.coerce.BoolCoercer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"blank-as-false?","blank-as-false?",856987020,null)], null);
}));

(re_frame_forms.coerce.BoolCoercer.cljs$lang$type = true);

(re_frame_forms.coerce.BoolCoercer.cljs$lang$ctorStr = "re-frame-forms.coerce/BoolCoercer");

(re_frame_forms.coerce.BoolCoercer.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"re-frame-forms.coerce/BoolCoercer");
}));

/**
 * Positional factory function for re-frame-forms.coerce/BoolCoercer.
 */
re_frame_forms.coerce.__GT_BoolCoercer = (function re_frame_forms$coerce$__GT_BoolCoercer(blank_as_false_QMARK_){
return (new re_frame_forms.coerce.BoolCoercer(blank_as_false_QMARK_));
});

re_frame_forms.coerce.bool = (function re_frame_forms$coerce$bool(){
return re_frame_forms.coerce.__GT_BoolCoercer(true);
});

/**
* @constructor
 * @implements {re_frame_forms.coerce.Coercer}
*/
re_frame_forms.coerce.KeywordCoercer = (function (){
});
(re_frame_forms.coerce.KeywordCoercer.prototype.re_frame_forms$coerce$Coercer$ = cljs.core.PROTOCOL_SENTINEL);

(re_frame_forms.coerce.KeywordCoercer.prototype.re_frame_forms$coerce$Coercer$to_str$arity$2 = (function (_,obj){
var self__ = this;
var ___$1 = this;
if((obj == null)){
return "";
} else {
return cljs.core.name(obj);
}
}));

(re_frame_forms.coerce.KeywordCoercer.prototype.re_frame_forms$coerce$Coercer$from_str$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
if(clojure.string.blank_QMARK_(s)){
return null;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(s);
}
}));

(re_frame_forms.coerce.KeywordCoercer.prototype.re_frame_forms$coerce$Coercer$valid_str_QMARK_$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return (!(clojure.string.blank_QMARK_(s)));
}));

(re_frame_forms.coerce.KeywordCoercer.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(re_frame_forms.coerce.KeywordCoercer.cljs$lang$type = true);

(re_frame_forms.coerce.KeywordCoercer.cljs$lang$ctorStr = "re-frame-forms.coerce/KeywordCoercer");

(re_frame_forms.coerce.KeywordCoercer.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"re-frame-forms.coerce/KeywordCoercer");
}));

/**
 * Positional factory function for re-frame-forms.coerce/KeywordCoercer.
 */
re_frame_forms.coerce.__GT_KeywordCoercer = (function re_frame_forms$coerce$__GT_KeywordCoercer(){
return (new re_frame_forms.coerce.KeywordCoercer());
});

re_frame_forms.coerce.keyword = (function re_frame_forms$coerce$keyword(){
return re_frame_forms.coerce.__GT_KeywordCoercer();
});

/**
* @constructor
 * @implements {re_frame_forms.coerce.Coercer}
*/
re_frame_forms.coerce.DateCoercer = (function (format,parse){
this.format = format;
this.parse = parse;
});
(re_frame_forms.coerce.DateCoercer.prototype.re_frame_forms$coerce$Coercer$ = cljs.core.PROTOCOL_SENTINEL);

(re_frame_forms.coerce.DateCoercer.prototype.re_frame_forms$coerce$Coercer$to_str$arity$2 = (function (_,obj){
var self__ = this;
var ___$1 = this;
if((obj == null)){
return "";
} else {
return (self__.format.cljs$core$IFn$_invoke$arity$1 ? self__.format.cljs$core$IFn$_invoke$arity$1(obj) : self__.format.call(null,obj));
}
}));

(re_frame_forms.coerce.DateCoercer.prototype.re_frame_forms$coerce$Coercer$from_str$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
if(clojure.string.blank_QMARK_(s)){
return null;
} else {
return (self__.parse.cljs$core$IFn$_invoke$arity$1 ? self__.parse.cljs$core$IFn$_invoke$arity$1(s) : self__.parse.call(null,s));
}
}));

(re_frame_forms.coerce.DateCoercer.prototype.re_frame_forms$coerce$Coercer$valid_str_QMARK_$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return cljs.core.boolean$(((clojure.string.blank_QMARK_(s)) || ((!(((self__.parse.cljs$core$IFn$_invoke$arity$1 ? self__.parse.cljs$core$IFn$_invoke$arity$1(s) : self__.parse.call(null,s)) == null))))));
}));

(re_frame_forms.coerce.DateCoercer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"format","format",333606761,null),new cljs.core.Symbol(null,"parse","parse",478366908,null)], null);
}));

(re_frame_forms.coerce.DateCoercer.cljs$lang$type = true);

(re_frame_forms.coerce.DateCoercer.cljs$lang$ctorStr = "re-frame-forms.coerce/DateCoercer");

(re_frame_forms.coerce.DateCoercer.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"re-frame-forms.coerce/DateCoercer");
}));

/**
 * Positional factory function for re-frame-forms.coerce/DateCoercer.
 */
re_frame_forms.coerce.__GT_DateCoercer = (function re_frame_forms$coerce$__GT_DateCoercer(format,parse){
return (new re_frame_forms.coerce.DateCoercer(format,parse));
});

re_frame_forms.coerce.date = (function re_frame_forms$coerce$date(pattern){
return re_frame_forms.coerce.__GT_DateCoercer(re_frame_forms.format.format_date.cljs$core$IFn$_invoke$arity$1(pattern),re_frame_forms.format.parse_date.cljs$core$IFn$_invoke$arity$1(pattern));
});
goog.object.set(re_frame_forms.coerce.Coercer,"null",true);

var G__41753_41783 = re_frame_forms.coerce.to_str;
var G__41754_41784 = "null";
var G__41755_41785 = (function (_,obj){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj);
});
goog.object.set(G__41753_41783,G__41754_41784,G__41755_41785);

var G__41756_41786 = re_frame_forms.coerce.from_str;
var G__41757_41787 = "null";
var G__41758_41788 = (function (_,s){
return s;
});
goog.object.set(G__41756_41786,G__41757_41787,G__41758_41788);

var G__41759_41789 = re_frame_forms.coerce.valid_str_QMARK_;
var G__41760_41790 = "null";
var G__41761_41791 = (function (_,___$1){
return true;
});
goog.object.set(G__41759_41789,G__41760_41790,G__41761_41791);

//# sourceMappingURL=re_frame_forms.coerce.js.map
