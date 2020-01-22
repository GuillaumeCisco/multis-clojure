goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__52812 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__52813 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__52813);

try{try{var seq__52814 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__52815 = null;
var count__52816 = (0);
var i__52817 = (0);
while(true){
if((i__52817 < count__52816)){
var vec__52825 = chunk__52815.cljs$core$IIndexed$_nth$arity$2(null,i__52817);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52825,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52825,(1),null);
var temp__5733__auto___52883 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52883)){
var effect_fn_52884 = temp__5733__auto___52883;
(effect_fn_52884.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52884.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52884.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52885 = seq__52814;
var G__52886 = chunk__52815;
var G__52887 = count__52816;
var G__52888 = (i__52817 + (1));
seq__52814 = G__52885;
chunk__52815 = G__52886;
count__52816 = G__52887;
i__52817 = G__52888;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52814);
if(temp__5735__auto__){
var seq__52814__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52814__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52814__$1);
var G__52889 = cljs.core.chunk_rest(seq__52814__$1);
var G__52890 = c__4609__auto__;
var G__52891 = cljs.core.count(c__4609__auto__);
var G__52892 = (0);
seq__52814 = G__52889;
chunk__52815 = G__52890;
count__52816 = G__52891;
i__52817 = G__52892;
continue;
} else {
var vec__52831 = cljs.core.first(seq__52814__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52831,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52831,(1),null);
var temp__5733__auto___52893 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52893)){
var effect_fn_52894 = temp__5733__auto___52893;
(effect_fn_52894.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52894.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52894.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52895 = cljs.core.next(seq__52814__$1);
var G__52896 = null;
var G__52897 = (0);
var G__52898 = (0);
seq__52814 = G__52895;
chunk__52815 = G__52896;
count__52816 = G__52897;
i__52817 = G__52898;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__52503__auto___52899 = re_frame.interop.now();
var duration__52504__auto___52900 = (end__52503__auto___52899 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__52504__auto___52900,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__52503__auto___52899);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__52812);
}} else {
var seq__52835 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__52836 = null;
var count__52837 = (0);
var i__52838 = (0);
while(true){
if((i__52838 < count__52837)){
var vec__52845 = chunk__52836.cljs$core$IIndexed$_nth$arity$2(null,i__52838);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52845,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52845,(1),null);
var temp__5733__auto___52901 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52901)){
var effect_fn_52903 = temp__5733__auto___52901;
(effect_fn_52903.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52903.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52903.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52905 = seq__52835;
var G__52906 = chunk__52836;
var G__52907 = count__52837;
var G__52908 = (i__52838 + (1));
seq__52835 = G__52905;
chunk__52836 = G__52906;
count__52837 = G__52907;
i__52838 = G__52908;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52835);
if(temp__5735__auto__){
var seq__52835__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52835__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52835__$1);
var G__52909 = cljs.core.chunk_rest(seq__52835__$1);
var G__52910 = c__4609__auto__;
var G__52911 = cljs.core.count(c__4609__auto__);
var G__52912 = (0);
seq__52835 = G__52909;
chunk__52836 = G__52910;
count__52837 = G__52911;
i__52838 = G__52912;
continue;
} else {
var vec__52860 = cljs.core.first(seq__52835__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52860,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52860,(1),null);
var temp__5733__auto___52913 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52913)){
var effect_fn_52914 = temp__5733__auto___52913;
(effect_fn_52914.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52914.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52914.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52915 = cljs.core.next(seq__52835__$1);
var G__52916 = null;
var G__52917 = (0);
var G__52918 = (0);
seq__52835 = G__52915;
chunk__52836 = G__52916;
count__52837 = G__52917;
i__52838 = G__52918;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__52863 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__52864 = null;
var count__52865 = (0);
var i__52866 = (0);
while(true){
if((i__52866 < count__52865)){
var map__52871 = chunk__52864.cljs$core$IIndexed$_nth$arity$2(null,i__52866);
var map__52871__$1 = (((((!((map__52871 == null))))?(((((map__52871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52871.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52871):map__52871);
var effect = map__52871__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52871__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52871__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__52863,chunk__52864,count__52865,i__52866,map__52871,map__52871__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__52863,chunk__52864,count__52865,i__52866,map__52871,map__52871__$1,effect,ms,dispatch))
,ms);
}


var G__52921 = seq__52863;
var G__52922 = chunk__52864;
var G__52923 = count__52865;
var G__52924 = (i__52866 + (1));
seq__52863 = G__52921;
chunk__52864 = G__52922;
count__52865 = G__52923;
i__52866 = G__52924;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52863);
if(temp__5735__auto__){
var seq__52863__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52863__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52863__$1);
var G__52925 = cljs.core.chunk_rest(seq__52863__$1);
var G__52926 = c__4609__auto__;
var G__52927 = cljs.core.count(c__4609__auto__);
var G__52928 = (0);
seq__52863 = G__52925;
chunk__52864 = G__52926;
count__52865 = G__52927;
i__52866 = G__52928;
continue;
} else {
var map__52873 = cljs.core.first(seq__52863__$1);
var map__52873__$1 = (((((!((map__52873 == null))))?(((((map__52873.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52873.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52873):map__52873);
var effect = map__52873__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52873__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52873__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__52863,chunk__52864,count__52865,i__52866,map__52873,map__52873__$1,effect,ms,dispatch,seq__52863__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__52863,chunk__52864,count__52865,i__52866,map__52873,map__52873__$1,effect,ms,dispatch,seq__52863__$1,temp__5735__auto__))
,ms);
}


var G__52929 = cljs.core.next(seq__52863__$1);
var G__52930 = null;
var G__52931 = (0);
var G__52932 = (0);
seq__52863 = G__52929;
chunk__52864 = G__52930;
count__52865 = G__52931;
i__52866 = G__52932;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__52875 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__52876 = null;
var count__52877 = (0);
var i__52878 = (0);
while(true){
if((i__52878 < count__52877)){
var event = chunk__52876.cljs$core$IIndexed$_nth$arity$2(null,i__52878);
re_frame.router.dispatch(event);


var G__52935 = seq__52875;
var G__52936 = chunk__52876;
var G__52937 = count__52877;
var G__52938 = (i__52878 + (1));
seq__52875 = G__52935;
chunk__52876 = G__52936;
count__52877 = G__52937;
i__52878 = G__52938;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52875);
if(temp__5735__auto__){
var seq__52875__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52875__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52875__$1);
var G__52939 = cljs.core.chunk_rest(seq__52875__$1);
var G__52940 = c__4609__auto__;
var G__52941 = cljs.core.count(c__4609__auto__);
var G__52942 = (0);
seq__52875 = G__52939;
chunk__52876 = G__52940;
count__52877 = G__52941;
i__52878 = G__52942;
continue;
} else {
var event = cljs.core.first(seq__52875__$1);
re_frame.router.dispatch(event);


var G__52943 = cljs.core.next(seq__52875__$1);
var G__52944 = null;
var G__52945 = (0);
var G__52946 = (0);
seq__52875 = G__52943;
chunk__52876 = G__52944;
count__52877 = G__52945;
i__52878 = G__52946;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__52879 = cljs.core.seq(value);
var chunk__52880 = null;
var count__52881 = (0);
var i__52882 = (0);
while(true){
if((i__52882 < count__52881)){
var event = chunk__52880.cljs$core$IIndexed$_nth$arity$2(null,i__52882);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__52947 = seq__52879;
var G__52948 = chunk__52880;
var G__52949 = count__52881;
var G__52950 = (i__52882 + (1));
seq__52879 = G__52947;
chunk__52880 = G__52948;
count__52881 = G__52949;
i__52882 = G__52950;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52879);
if(temp__5735__auto__){
var seq__52879__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52879__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52879__$1);
var G__52951 = cljs.core.chunk_rest(seq__52879__$1);
var G__52952 = c__4609__auto__;
var G__52953 = cljs.core.count(c__4609__auto__);
var G__52954 = (0);
seq__52879 = G__52951;
chunk__52880 = G__52952;
count__52881 = G__52953;
i__52882 = G__52954;
continue;
} else {
var event = cljs.core.first(seq__52879__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__52955 = cljs.core.next(seq__52879__$1);
var G__52956 = null;
var G__52957 = (0);
var G__52958 = (0);
seq__52879 = G__52955;
chunk__52880 = G__52956;
count__52881 = G__52957;
i__52882 = G__52958;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
