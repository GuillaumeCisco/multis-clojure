goog.provide('multis.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('multis.db');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("multis.events","initialize-db","multis.events/initialize-db",-1071245693),(function (_,___$1){
return multis.db.default_db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"submitted","submitted",-131658962),(function (db,p__45307){
var vec__45308 = p__45307;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45308,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45308,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"submitted","submitted",-131658962),value);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ethereum-init","ethereum-init",-237090611),(function (db,p__45311){
var vec__45312 = p__45311;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45312,(0),null);
var accounts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45312,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"sender","sender",1557303285),cljs.core.first(accounts));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ethereum-error","ethereum-error",133884724),(function (db,p__45315){
var vec__45316 = p__45315;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45316,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45316,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"ethereum-error","ethereum-error",133884724),error);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"transaction-validated","transaction-validated",1319497774),(function (db,p__45319){
var vec__45320 = p__45319;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45320,(0),null);
var receipt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45320,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"receipt","receipt",1871350913),receipt);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"transaction-failed","transaction-failed",-1725711267),(function (db,p__45323){
var vec__45324 = p__45323;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45324,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45324,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"transaction-error","transaction-error",69206135),error);
}));

//# sourceMappingURL=multis.events.js.map
