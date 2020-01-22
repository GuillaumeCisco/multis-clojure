goog.provide('re_frame_forms.format');
goog.require('cljs.core');
goog.require('goog.i18n.NumberFormat');
goog.require('goog.i18n.DateTimeFormat');
goog.require('goog.i18n.DateTimeParse');
var memo_41233 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
re_frame_forms.format.make_number_format = (function re_frame_forms$format$make_number_format(var_args){
var G__40880 = arguments.length;
switch (G__40880) {
case 1:
return re_frame_forms.format.make_number_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame_forms.format.make_number_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame_forms.format.make_number_format.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame_forms.format.make_number_format.cljs$core$IFn$_invoke$arity$1 = (function (pattern){
return re_frame_forms.format.make_number_format.cljs$core$IFn$_invoke$arity$3(pattern,null,null);
}));

(re_frame_forms.format.make_number_format.cljs$core$IFn$_invoke$arity$2 = (function (pattern,opt_currency){
return re_frame_forms.format.make_number_format.cljs$core$IFn$_invoke$arity$3(pattern,opt_currency,null);
}));

(re_frame_forms.format.make_number_format.cljs$core$IFn$_invoke$arity$3 = (function (pattern,opt_currency,opt_currencyStyle){
var path = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.LOCALE,pattern,opt_currency,opt_currencyStyle], null);
var format = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(memo_41233),path);
if((format == null)){
var format__$1 = (new goog.i18n.NumberFormat(pattern,opt_currency,opt_currencyStyle));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(memo_41233,cljs.core.assoc_in,path,format__$1);

return format__$1;
} else {
return format;
}
}));

(re_frame_forms.format.make_number_format.cljs$lang$maxFixedArity = 3);

var memo_41278 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
re_frame_forms.format.make_datetime_format = (function re_frame_forms$format$make_datetime_format(var_args){
var G__41054 = arguments.length;
switch (G__41054) {
case 1:
return re_frame_forms.format.make_datetime_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame_forms.format.make_datetime_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame_forms.format.make_datetime_format.cljs$core$IFn$_invoke$arity$1 = (function (pattern){
return re_frame_forms.format.make_datetime_format.cljs$core$IFn$_invoke$arity$2(pattern,null);
}));

(re_frame_forms.format.make_datetime_format.cljs$core$IFn$_invoke$arity$2 = (function (pattern,opt_dateTimeSymbols){
var path = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.LOCALE,pattern,opt_dateTimeSymbols], null);
var format = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(memo_41278),path);
if((format == null)){
var format__$1 = (new goog.i18n.DateTimeFormat(pattern,opt_dateTimeSymbols));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(memo_41278,cljs.core.assoc_in,path,format__$1);

return format__$1;
} else {
return format;
}
}));

(re_frame_forms.format.make_datetime_format.cljs$lang$maxFixedArity = 2);

var memo_41307 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
re_frame_forms.format.make_datetime_parser = (function re_frame_forms$format$make_datetime_parser(var_args){
var G__41066 = arguments.length;
switch (G__41066) {
case 1:
return re_frame_forms.format.make_datetime_parser.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame_forms.format.make_datetime_parser.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame_forms.format.make_datetime_parser.cljs$core$IFn$_invoke$arity$1 = (function (pattern){
return re_frame_forms.format.make_datetime_parser.cljs$core$IFn$_invoke$arity$2(pattern,null);
}));

(re_frame_forms.format.make_datetime_parser.cljs$core$IFn$_invoke$arity$2 = (function (pattern,opt_dateTimeSymbols){
var path = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.LOCALE,pattern,opt_dateTimeSymbols], null);
var format = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(memo_41307),path);
if((format == null)){
var format__$1 = (new goog.i18n.DateTimeParse(pattern,opt_dateTimeSymbols));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(memo_41307,cljs.core.assoc_in,path,format__$1);

return format__$1;
} else {
return format;
}
}));

(re_frame_forms.format.make_datetime_parser.cljs$lang$maxFixedArity = 2);

re_frame_forms.format.formatter = (function re_frame_forms$format$formatter(pattern){
return re_frame_forms.format.make_number_format.cljs$core$IFn$_invoke$arity$1(pattern);
});
re_frame_forms.format.int_format = (function re_frame_forms$format$int_format(){
return re_frame_forms.format.make_number_format.cljs$core$IFn$_invoke$arity$1("#,##0");
});
re_frame_forms.format.decimal_format = (function re_frame_forms$format$decimal_format(){
return re_frame_forms.format.make_number_format.cljs$core$IFn$_invoke$arity$1(goog.i18n.NumberFormat.Format.DECIMAL);
});
re_frame_forms.format.currency_format = (function re_frame_forms$format$currency_format(){
return re_frame_forms.format.make_number_format.cljs$core$IFn$_invoke$arity$1(goog.i18n.NumberFormat.Format.CURRENCY);
});
re_frame_forms.format.percent_format = (function re_frame_forms$format$percent_format(){
return re_frame_forms.format.make_number_format.cljs$core$IFn$_invoke$arity$1(goog.i18n.NumberFormat.Format.PERCENT);
});
re_frame_forms.format.format = (function re_frame_forms$format$format(var_args){
var G__41131 = arguments.length;
switch (G__41131) {
case 1:
return re_frame_forms.format.format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame_forms.format.format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame_forms.format.format.cljs$core$IFn$_invoke$arity$1 = (function (pattern){
return (function (n){
return re_frame_forms.format.format.cljs$core$IFn$_invoke$arity$2(pattern,n);
});
}));

(re_frame_forms.format.format.cljs$core$IFn$_invoke$arity$2 = (function (pattern,n){
return re_frame_forms.format.make_number_format.cljs$core$IFn$_invoke$arity$1(pattern).format(n);
}));

(re_frame_forms.format.format.cljs$lang$maxFixedArity = 2);

re_frame_forms.format.parse = (function re_frame_forms$format$parse(var_args){
var G__41142 = arguments.length;
switch (G__41142) {
case 1:
return re_frame_forms.format.parse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame_forms.format.parse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame_forms.format.parse.cljs$core$IFn$_invoke$arity$1 = (function (pattern){
return (function (s){
return re_frame_forms.format.parse.cljs$core$IFn$_invoke$arity$2(pattern,s);
});
}));

(re_frame_forms.format.parse.cljs$core$IFn$_invoke$arity$2 = (function (pattern,s){
return re_frame_forms.format.make_number_format.cljs$core$IFn$_invoke$arity$1(pattern).parse(s);
}));

(re_frame_forms.format.parse.cljs$lang$maxFixedArity = 2);

re_frame_forms.format.format_int = (function re_frame_forms$format$format_int(n){
return re_frame_forms.format.int_format().format(n);
});
re_frame_forms.format.parse_int = (function re_frame_forms$format$parse_int(n){
return re_frame_forms.format.int_format().parse(n);
});
re_frame_forms.format.format_decimal = (function re_frame_forms$format$format_decimal(n){
return re_frame_forms.format.decimal_format().format(n);
});
re_frame_forms.format.parse_decimal = (function re_frame_forms$format$parse_decimal(n){
return re_frame_forms.format.decimal_format().parse(n);
});
re_frame_forms.format.format_currency = (function re_frame_forms$format$format_currency(n){
return re_frame_forms.format.currency_format().format(n);
});
re_frame_forms.format.parse_currency = (function re_frame_forms$format$parse_currency(n){
return re_frame_forms.format.currency_format().parse(n);
});
re_frame_forms.format.format_percent = (function re_frame_forms$format$format_percent(n){
return re_frame_forms.format.currency_format().format(n);
});
re_frame_forms.format.parse_percent = (function re_frame_forms$format$parse_percent(n){
return re_frame_forms.format.currency_format().parse(n);
});
re_frame_forms.format.format_date = (function re_frame_forms$format$format_date(var_args){
var G__41179 = arguments.length;
switch (G__41179) {
case 1:
return re_frame_forms.format.format_date.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame_forms.format.format_date.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame_forms.format.format_date.cljs$core$IFn$_invoke$arity$1 = (function (pattern){
return (function (value){
return re_frame_forms.format.format_date.cljs$core$IFn$_invoke$arity$2(pattern,value);
});
}));

(re_frame_forms.format.format_date.cljs$core$IFn$_invoke$arity$2 = (function (pattern,d){
return re_frame_forms.format.make_datetime_format.cljs$core$IFn$_invoke$arity$1(pattern).format(d);
}));

(re_frame_forms.format.format_date.cljs$lang$maxFixedArity = 2);

re_frame_forms.format.parse_date = (function re_frame_forms$format$parse_date(var_args){
var G__41208 = arguments.length;
switch (G__41208) {
case 1:
return re_frame_forms.format.parse_date.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame_forms.format.parse_date.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame_forms.format.parse_date.cljs$core$IFn$_invoke$arity$1 = (function (pattern){
return (function (value){
return re_frame_forms.format.parse_date.cljs$core$IFn$_invoke$arity$2(pattern,value);
});
}));

(re_frame_forms.format.parse_date.cljs$core$IFn$_invoke$arity$2 = (function (pattern,d){
var date = (new Date((0)));
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),re_frame_forms.format.make_datetime_parser.cljs$core$IFn$_invoke$arity$1(pattern).strictParse(d,date))))){
if((date.getYear() > (-900))){
return date;
} else {
return null;
}
} else {
return null;
}
}));

(re_frame_forms.format.parse_date.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=re_frame_forms.format.js.map
