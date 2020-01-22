goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___51063 = arguments.length;
var i__4790__auto___51064 = (0);
while(true){
if((i__4790__auto___51064 < len__4789__auto___51063)){
args__4795__auto__.push((arguments[i__4790__auto___51064]));

var G__51065 = (i__4790__auto___51064 + (1));
i__4790__auto___51064 = G__51065;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq50573){
var G__50574 = cljs.core.first(seq50573);
var seq50573__$1 = cljs.core.next(seq50573);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50574,seq50573__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__50610){
var map__50611 = p__50610;
var map__50611__$1 = (((((!((map__50611 == null))))?(((((map__50611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50611.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50611):map__50611);
var src = map__50611__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50611__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50611__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4185__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__50639 = cljs.core.seq(sources);
var chunk__50640 = null;
var count__50641 = (0);
var i__50642 = (0);
while(true){
if((i__50642 < count__50641)){
var map__50675 = chunk__50640.cljs$core$IIndexed$_nth$arity$2(null,i__50642);
var map__50675__$1 = (((((!((map__50675 == null))))?(((((map__50675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50675):map__50675);
var src = map__50675__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50675__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50675__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50675__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50675__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e50677){var e_51073 = e50677;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_51073);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_51073.message)].join('')));
}

var G__51074 = seq__50639;
var G__51075 = chunk__50640;
var G__51076 = count__50641;
var G__51077 = (i__50642 + (1));
seq__50639 = G__51074;
chunk__50640 = G__51075;
count__50641 = G__51076;
i__50642 = G__51077;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__50639);
if(temp__5735__auto__){
var seq__50639__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50639__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__50639__$1);
var G__51078 = cljs.core.chunk_rest(seq__50639__$1);
var G__51079 = c__4609__auto__;
var G__51080 = cljs.core.count(c__4609__auto__);
var G__51081 = (0);
seq__50639 = G__51078;
chunk__50640 = G__51079;
count__50641 = G__51080;
i__50642 = G__51081;
continue;
} else {
var map__50678 = cljs.core.first(seq__50639__$1);
var map__50678__$1 = (((((!((map__50678 == null))))?(((((map__50678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50678):map__50678);
var src = map__50678__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50678__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50678__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50678__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50678__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e50680){var e_51084 = e50680;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_51084);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_51084.message)].join('')));
}

var G__51085 = cljs.core.next(seq__50639__$1);
var G__51086 = null;
var G__51087 = (0);
var G__51088 = (0);
seq__50639 = G__51085;
chunk__50640 = G__51086;
count__50641 = G__51087;
i__50642 = G__51088;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__50683 = cljs.core.seq(js_requires);
var chunk__50684 = null;
var count__50685 = (0);
var i__50686 = (0);
while(true){
if((i__50686 < count__50685)){
var js_ns = chunk__50684.cljs$core$IIndexed$_nth$arity$2(null,i__50686);
var require_str_51089 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_51089);


var G__51090 = seq__50683;
var G__51091 = chunk__50684;
var G__51092 = count__50685;
var G__51093 = (i__50686 + (1));
seq__50683 = G__51090;
chunk__50684 = G__51091;
count__50685 = G__51092;
i__50686 = G__51093;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__50683);
if(temp__5735__auto__){
var seq__50683__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50683__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__50683__$1);
var G__51094 = cljs.core.chunk_rest(seq__50683__$1);
var G__51095 = c__4609__auto__;
var G__51096 = cljs.core.count(c__4609__auto__);
var G__51097 = (0);
seq__50683 = G__51094;
chunk__50684 = G__51095;
count__50685 = G__51096;
i__50686 = G__51097;
continue;
} else {
var js_ns = cljs.core.first(seq__50683__$1);
var require_str_51098 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_51098);


var G__51099 = cljs.core.next(seq__50683__$1);
var G__51100 = null;
var G__51101 = (0);
var G__51102 = (0);
seq__50683 = G__51099;
chunk__50684 = G__51100;
count__50685 = G__51101;
i__50686 = G__51102;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__50688 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__50688) : callback.call(null,G__50688));
} else {
var G__50689 = shadow.cljs.devtools.client.env.files_url();
var G__50690 = (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});
var G__50691 = "POST";
var G__50692 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__50693 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__50689,G__50690,G__50691,G__50692,G__50693);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__50696){
var map__50697 = p__50696;
var map__50697__$1 = (((((!((map__50697 == null))))?(((((map__50697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50697.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50697):map__50697);
var msg = map__50697__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50697__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50697__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__50699 = info;
var map__50699__$1 = (((((!((map__50699 == null))))?(((((map__50699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50699.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50699):map__50699);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50699__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50699__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50701(s__50702){
return (new cljs.core.LazySeq(null,(function (){
var s__50702__$1 = s__50702;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50702__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__50707 = cljs.core.first(xs__6292__auto__);
var map__50707__$1 = (((((!((map__50707 == null))))?(((((map__50707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50707):map__50707);
var src = map__50707__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50707__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50707__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__50702__$1,map__50707,map__50707__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__50699,map__50699__$1,sources,compiled,map__50697,map__50697__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50701_$_iter__50703(s__50704){
return (new cljs.core.LazySeq(null,((function (s__50702__$1,map__50707,map__50707__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__50699,map__50699__$1,sources,compiled,map__50697,map__50697__$1,msg,info,reload_info){
return (function (){
var s__50704__$1 = s__50704;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__50704__$1);
if(temp__5735__auto____$1){
var s__50704__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50704__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__50704__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__50706 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__50705 = (0);
while(true){
if((i__50705 < size__4581__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__50705);
cljs.core.chunk_append(b__50706,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__51114 = (i__50705 + (1));
i__50705 = G__51114;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50706),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50701_$_iter__50703(cljs.core.chunk_rest(s__50704__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50706),null);
}
} else {
var warning = cljs.core.first(s__50704__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50701_$_iter__50703(cljs.core.rest(s__50704__$2)));
}
} else {
return null;
}
break;
}
});})(s__50702__$1,map__50707,map__50707__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__50699,map__50699__$1,sources,compiled,map__50697,map__50697__$1,msg,info,reload_info))
,null,null));
});})(s__50702__$1,map__50707,map__50707__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__50699,map__50699__$1,sources,compiled,map__50697,map__50697__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50701(cljs.core.rest(s__50702__$1)));
} else {
var G__51115 = cljs.core.rest(s__50702__$1);
s__50702__$1 = G__51115;
continue;
}
} else {
var G__51116 = cljs.core.rest(s__50702__$1);
s__50702__$1 = G__51116;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(sources);
})()));
var seq__50709_51117 = cljs.core.seq(warnings);
var chunk__50710_51118 = null;
var count__50711_51119 = (0);
var i__50712_51120 = (0);
while(true){
if((i__50712_51120 < count__50711_51119)){
var map__50720_51121 = chunk__50710_51118.cljs$core$IIndexed$_nth$arity$2(null,i__50712_51120);
var map__50720_51122__$1 = (((((!((map__50720_51121 == null))))?(((((map__50720_51121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50720_51121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50720_51121):map__50720_51121);
var w_51123 = map__50720_51122__$1;
var msg_51124__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50720_51122__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_51125 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50720_51122__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_51126 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50720_51122__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_51127 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50720_51122__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_51127)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_51125),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_51126),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_51124__$1)].join(''));


var G__51130 = seq__50709_51117;
var G__51131 = chunk__50710_51118;
var G__51132 = count__50711_51119;
var G__51133 = (i__50712_51120 + (1));
seq__50709_51117 = G__51130;
chunk__50710_51118 = G__51131;
count__50711_51119 = G__51132;
i__50712_51120 = G__51133;
continue;
} else {
var temp__5735__auto___51134 = cljs.core.seq(seq__50709_51117);
if(temp__5735__auto___51134){
var seq__50709_51135__$1 = temp__5735__auto___51134;
if(cljs.core.chunked_seq_QMARK_(seq__50709_51135__$1)){
var c__4609__auto___51136 = cljs.core.chunk_first(seq__50709_51135__$1);
var G__51137 = cljs.core.chunk_rest(seq__50709_51135__$1);
var G__51138 = c__4609__auto___51136;
var G__51139 = cljs.core.count(c__4609__auto___51136);
var G__51140 = (0);
seq__50709_51117 = G__51137;
chunk__50710_51118 = G__51138;
count__50711_51119 = G__51139;
i__50712_51120 = G__51140;
continue;
} else {
var map__50722_51141 = cljs.core.first(seq__50709_51135__$1);
var map__50722_51142__$1 = (((((!((map__50722_51141 == null))))?(((((map__50722_51141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50722_51141.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50722_51141):map__50722_51141);
var w_51143 = map__50722_51142__$1;
var msg_51144__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50722_51142__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_51145 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50722_51142__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_51146 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50722_51142__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_51147 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50722_51142__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_51147)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_51145),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_51146),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_51144__$1)].join(''));


var G__51148 = cljs.core.next(seq__50709_51135__$1);
var G__51149 = null;
var G__51150 = (0);
var G__51151 = (0);
seq__50709_51117 = G__51148;
chunk__50710_51118 = G__51149;
count__50711_51119 = G__51150;
i__50712_51120 = G__51151;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__50742){
var map__50743 = p__50742;
var map__50743__$1 = (((((!((map__50743 == null))))?(((((map__50743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50743.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50743):map__50743);
var src = map__50743__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50743__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50743__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__50748){
var map__50749 = p__50748;
var map__50749__$1 = (((((!((map__50749 == null))))?(((((map__50749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50749.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50749):map__50749);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50749__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__50751){
var map__50752 = p__50751;
var map__50752__$1 = (((((!((map__50752 == null))))?(((((map__50752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50752):map__50752);
var rc = map__50752__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50752__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.env.module_is_active_QMARK_(module)));
}),sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__50695_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__50695_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__50759){
var map__50760 = p__50759;
var map__50760__$1 = (((((!((map__50760 == null))))?(((((map__50760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50760.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50760):map__50760);
var msg = map__50760__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50760__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__50762 = cljs.core.seq(updates);
var chunk__50764 = null;
var count__50765 = (0);
var i__50766 = (0);
while(true){
if((i__50766 < count__50765)){
var path = chunk__50764.cljs$core$IIndexed$_nth$arity$2(null,i__50766);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__50848_51161 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__50851_51162 = null;
var count__50852_51163 = (0);
var i__50853_51164 = (0);
while(true){
if((i__50853_51164 < count__50852_51163)){
var node_51165 = chunk__50851_51162.cljs$core$IIndexed$_nth$arity$2(null,i__50853_51164);
var path_match_51166 = shadow.cljs.devtools.client.browser.match_paths(node_51165.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51166)){
var new_link_51167 = (function (){var G__50881 = node_51165.cloneNode(true);
G__50881.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51166),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50881;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51166], 0));

goog.dom.insertSiblingAfter(new_link_51167,node_51165);

goog.dom.removeNode(node_51165);


var G__51168 = seq__50848_51161;
var G__51169 = chunk__50851_51162;
var G__51170 = count__50852_51163;
var G__51171 = (i__50853_51164 + (1));
seq__50848_51161 = G__51168;
chunk__50851_51162 = G__51169;
count__50852_51163 = G__51170;
i__50853_51164 = G__51171;
continue;
} else {
var G__51172 = seq__50848_51161;
var G__51173 = chunk__50851_51162;
var G__51174 = count__50852_51163;
var G__51175 = (i__50853_51164 + (1));
seq__50848_51161 = G__51172;
chunk__50851_51162 = G__51173;
count__50852_51163 = G__51174;
i__50853_51164 = G__51175;
continue;
}
} else {
var temp__5735__auto___51176 = cljs.core.seq(seq__50848_51161);
if(temp__5735__auto___51176){
var seq__50848_51177__$1 = temp__5735__auto___51176;
if(cljs.core.chunked_seq_QMARK_(seq__50848_51177__$1)){
var c__4609__auto___51178 = cljs.core.chunk_first(seq__50848_51177__$1);
var G__51179 = cljs.core.chunk_rest(seq__50848_51177__$1);
var G__51180 = c__4609__auto___51178;
var G__51181 = cljs.core.count(c__4609__auto___51178);
var G__51182 = (0);
seq__50848_51161 = G__51179;
chunk__50851_51162 = G__51180;
count__50852_51163 = G__51181;
i__50853_51164 = G__51182;
continue;
} else {
var node_51185 = cljs.core.first(seq__50848_51177__$1);
var path_match_51186 = shadow.cljs.devtools.client.browser.match_paths(node_51185.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51186)){
var new_link_51187 = (function (){var G__50886 = node_51185.cloneNode(true);
G__50886.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51186),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50886;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51186], 0));

goog.dom.insertSiblingAfter(new_link_51187,node_51185);

goog.dom.removeNode(node_51185);


var G__51188 = cljs.core.next(seq__50848_51177__$1);
var G__51189 = null;
var G__51190 = (0);
var G__51191 = (0);
seq__50848_51161 = G__51188;
chunk__50851_51162 = G__51189;
count__50852_51163 = G__51190;
i__50853_51164 = G__51191;
continue;
} else {
var G__51192 = cljs.core.next(seq__50848_51177__$1);
var G__51193 = null;
var G__51194 = (0);
var G__51195 = (0);
seq__50848_51161 = G__51192;
chunk__50851_51162 = G__51193;
count__50852_51163 = G__51194;
i__50853_51164 = G__51195;
continue;
}
}
} else {
}
}
break;
}


var G__51196 = seq__50762;
var G__51197 = chunk__50764;
var G__51198 = count__50765;
var G__51199 = (i__50766 + (1));
seq__50762 = G__51196;
chunk__50764 = G__51197;
count__50765 = G__51198;
i__50766 = G__51199;
continue;
} else {
var G__51200 = seq__50762;
var G__51201 = chunk__50764;
var G__51202 = count__50765;
var G__51203 = (i__50766 + (1));
seq__50762 = G__51200;
chunk__50764 = G__51201;
count__50765 = G__51202;
i__50766 = G__51203;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__50762);
if(temp__5735__auto__){
var seq__50762__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50762__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__50762__$1);
var G__51204 = cljs.core.chunk_rest(seq__50762__$1);
var G__51205 = c__4609__auto__;
var G__51206 = cljs.core.count(c__4609__auto__);
var G__51207 = (0);
seq__50762 = G__51204;
chunk__50764 = G__51205;
count__50765 = G__51206;
i__50766 = G__51207;
continue;
} else {
var path = cljs.core.first(seq__50762__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__50888_51208 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__50891_51209 = null;
var count__50892_51210 = (0);
var i__50893_51211 = (0);
while(true){
if((i__50893_51211 < count__50892_51210)){
var node_51212 = chunk__50891_51209.cljs$core$IIndexed$_nth$arity$2(null,i__50893_51211);
var path_match_51213 = shadow.cljs.devtools.client.browser.match_paths(node_51212.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51213)){
var new_link_51214 = (function (){var G__50931 = node_51212.cloneNode(true);
G__50931.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51213),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50931;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51213], 0));

goog.dom.insertSiblingAfter(new_link_51214,node_51212);

goog.dom.removeNode(node_51212);


var G__51215 = seq__50888_51208;
var G__51216 = chunk__50891_51209;
var G__51217 = count__50892_51210;
var G__51218 = (i__50893_51211 + (1));
seq__50888_51208 = G__51215;
chunk__50891_51209 = G__51216;
count__50892_51210 = G__51217;
i__50893_51211 = G__51218;
continue;
} else {
var G__51219 = seq__50888_51208;
var G__51220 = chunk__50891_51209;
var G__51221 = count__50892_51210;
var G__51222 = (i__50893_51211 + (1));
seq__50888_51208 = G__51219;
chunk__50891_51209 = G__51220;
count__50892_51210 = G__51221;
i__50893_51211 = G__51222;
continue;
}
} else {
var temp__5735__auto___51223__$1 = cljs.core.seq(seq__50888_51208);
if(temp__5735__auto___51223__$1){
var seq__50888_51224__$1 = temp__5735__auto___51223__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50888_51224__$1)){
var c__4609__auto___51225 = cljs.core.chunk_first(seq__50888_51224__$1);
var G__51226 = cljs.core.chunk_rest(seq__50888_51224__$1);
var G__51227 = c__4609__auto___51225;
var G__51228 = cljs.core.count(c__4609__auto___51225);
var G__51229 = (0);
seq__50888_51208 = G__51226;
chunk__50891_51209 = G__51227;
count__50892_51210 = G__51228;
i__50893_51211 = G__51229;
continue;
} else {
var node_51230 = cljs.core.first(seq__50888_51224__$1);
var path_match_51231 = shadow.cljs.devtools.client.browser.match_paths(node_51230.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51231)){
var new_link_51232 = (function (){var G__50933 = node_51230.cloneNode(true);
G__50933.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51231),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50933;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51231], 0));

goog.dom.insertSiblingAfter(new_link_51232,node_51230);

goog.dom.removeNode(node_51230);


var G__51233 = cljs.core.next(seq__50888_51224__$1);
var G__51234 = null;
var G__51235 = (0);
var G__51236 = (0);
seq__50888_51208 = G__51233;
chunk__50891_51209 = G__51234;
count__50892_51210 = G__51235;
i__50893_51211 = G__51236;
continue;
} else {
var G__51237 = cljs.core.next(seq__50888_51224__$1);
var G__51238 = null;
var G__51239 = (0);
var G__51240 = (0);
seq__50888_51208 = G__51237;
chunk__50891_51209 = G__51238;
count__50892_51210 = G__51239;
i__50893_51211 = G__51240;
continue;
}
}
} else {
}
}
break;
}


var G__51241 = cljs.core.next(seq__50762__$1);
var G__51242 = null;
var G__51243 = (0);
var G__51244 = (0);
seq__50762 = G__51241;
chunk__50764 = G__51242;
count__50765 = G__51243;
i__50766 = G__51244;
continue;
} else {
var G__51245 = cljs.core.next(seq__50762__$1);
var G__51246 = null;
var G__51247 = (0);
var G__51248 = (0);
seq__50762 = G__51245;
chunk__50764 = G__51246;
count__50765 = G__51247;
i__50766 = G__51248;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__50962){
var map__50964 = p__50962;
var map__50964__$1 = (((((!((map__50964 == null))))?(((((map__50964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50964.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50964):map__50964);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50964__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50964__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__50969,done){
var map__50970 = p__50969;
var map__50970__$1 = (((((!((map__50970 == null))))?(((((map__50970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50970):map__50970);
var msg = map__50970__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50970__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50970__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50970__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50970__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__50976){
var map__50977 = p__50976;
var map__50977__$1 = (((((!((map__50977 == null))))?(((((map__50977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50977.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50977):map__50977);
var src = map__50977__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50977__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4174__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4174__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e50980){var e = e50980;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__50986,done){
var map__50987 = p__50986;
var map__50987__$1 = (((((!((map__50987 == null))))?(((((map__50987.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50987.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50987):map__50987);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50987__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50987__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__50990){
var map__50991 = p__50990;
var map__50991__$1 = (((((!((map__50991 == null))))?(((((map__50991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50991.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50991):map__50991);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50991__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50991__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__50997,done){
var map__50998 = p__50997;
var map__50998__$1 = (((((!((map__50998 == null))))?(((((map__50998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50998.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50998):map__50998);
var msg = map__50998__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50998__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__51001_51266 = type;
var G__51001_51267__$1 = (((G__51001_51266 instanceof cljs.core.Keyword))?G__51001_51266.fqn:null);
switch (G__51001_51267__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__51013 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__51014 = (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});
var G__51015 = "POST";
var G__51016 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__51017 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__51013,G__51014,G__51015,G__51016,G__51017);
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var G__51028 = new cljs.core.Keyword(null,"init","init",-1875481434);
var fexpr__51027 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__51027.cljs$core$IFn$_invoke$arity$1 ? fexpr__51027.cljs$core$IFn$_invoke$arity$1(G__51028) : fexpr__51027.call(null,G__51028));
})())){
return (shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0 ? shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0() : shadow.cljs.devtools.client.browser.ws_connect_impl.call(null));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.maybe_reconnect = (function shadow$cljs$devtools$client$browser$maybe_reconnect(){
if(((cljs.core.not(cljs.core.deref(shadow.cljs.devtools.client.browser.stale_client_detected))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status),new cljs.core.Keyword(null,"init","init",-1875481434))))){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"init","init",-1875481434));

return setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(3000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect_impl = (function shadow$cljs$devtools$client$browser$ws_connect_impl(){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connecting","connecting",-1347943866));

try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connected","connected",-169833045));

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4185__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

shadow.cljs.devtools.client.env.reset_print_fns_BANG_();

return shadow.cljs.devtools.client.browser.maybe_reconnect();
}));

return (socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

shadow.cljs.devtools.client.browser.maybe_reconnect();

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e51041){var e = e51041;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___51270 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___51270)){
var s_51271 = temp__5735__auto___51270;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_51271.onclose = (function (e){
return null;
}));

s_51271.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4174__auto__ = document;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4174__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
