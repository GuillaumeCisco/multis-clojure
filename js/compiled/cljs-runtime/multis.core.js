goog.provide('multis.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('multis.events');
goog.require('multis.views');
goog.require('multis.config');
multis.core.dev_setup = (function multis$core$dev_setup(){
if(multis.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
multis.core.mount_root = (function multis$core$mount_root(){
(re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0 ? re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0() : re_frame.core.clear_subscription_cache_BANG_.call(null));

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [multis.views.main_panel], null),document.getElementById("app"));
});
multis.core.init = (function multis$core$init(){
var G__45681_45683 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multis.events","initialize-db","multis.events/initialize-db",-1071245693)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__45681_45683) : re_frame.core.dispatch_sync.call(null,G__45681_45683));

multis.core.dev_setup();

return multis.core.mount_root();
});

//# sourceMappingURL=multis.core.js.map
