goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__48066 = coll;
var G__48067 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__48066,G__48067) : shadow.dom.lazy_native_coll_seq.call(null,G__48066,G__48067));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4185__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__48095 = arguments.length;
switch (G__48095) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__48098 = arguments.length;
switch (G__48098) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__48106 = arguments.length;
switch (G__48106) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__48114 = arguments.length;
switch (G__48114) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__48126 = arguments.length;
switch (G__48126) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__48129 = document;
var G__48130 = shadow.dom.dom_node(el);
return goog.dom.contains(G__48129,G__48130);
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__48140 = shadow.dom.dom_node(parent);
var G__48141 = shadow.dom.dom_node(el);
return goog.dom.contains(G__48140,G__48141);
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__48147 = shadow.dom.dom_node(el);
var G__48148 = cls;
return goog.dom.classlist.add(G__48147,G__48148);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__48156 = shadow.dom.dom_node(el);
var G__48157 = cls;
return goog.dom.classlist.remove(G__48156,G__48157);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__48161 = arguments.length;
switch (G__48161) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__48162 = shadow.dom.dom_node(el);
var G__48163 = cls;
return goog.dom.classlist.toggle(G__48162,G__48163);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e48166){if((e48166 instanceof Object)){
var e = e48166;
return console.log("didnt support attachEvent",el,e);
} else {
throw e48166;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__48174 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__48175 = null;
var count__48176 = (0);
var i__48177 = (0);
while(true){
if((i__48177 < count__48176)){
var el = chunk__48175.cljs$core$IIndexed$_nth$arity$2(null,i__48177);
var handler_48811__$1 = ((function (seq__48174,chunk__48175,count__48176,i__48177,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__48174,chunk__48175,count__48176,i__48177,el))
;
var G__48193_48812 = el;
var G__48194_48813 = cljs.core.name(ev);
var G__48195_48814 = handler_48811__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__48193_48812,G__48194_48813,G__48195_48814) : shadow.dom.dom_listen.call(null,G__48193_48812,G__48194_48813,G__48195_48814));


var G__48815 = seq__48174;
var G__48816 = chunk__48175;
var G__48817 = count__48176;
var G__48818 = (i__48177 + (1));
seq__48174 = G__48815;
chunk__48175 = G__48816;
count__48176 = G__48817;
i__48177 = G__48818;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48174);
if(temp__5735__auto__){
var seq__48174__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48174__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__48174__$1);
var G__48819 = cljs.core.chunk_rest(seq__48174__$1);
var G__48820 = c__4609__auto__;
var G__48821 = cljs.core.count(c__4609__auto__);
var G__48822 = (0);
seq__48174 = G__48819;
chunk__48175 = G__48820;
count__48176 = G__48821;
i__48177 = G__48822;
continue;
} else {
var el = cljs.core.first(seq__48174__$1);
var handler_48823__$1 = ((function (seq__48174,chunk__48175,count__48176,i__48177,el,seq__48174__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__48174,chunk__48175,count__48176,i__48177,el,seq__48174__$1,temp__5735__auto__))
;
var G__48200_48824 = el;
var G__48201_48825 = cljs.core.name(ev);
var G__48202_48826 = handler_48823__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__48200_48824,G__48201_48825,G__48202_48826) : shadow.dom.dom_listen.call(null,G__48200_48824,G__48201_48825,G__48202_48826));


var G__48827 = cljs.core.next(seq__48174__$1);
var G__48828 = null;
var G__48829 = (0);
var G__48830 = (0);
seq__48174 = G__48827;
chunk__48175 = G__48828;
count__48176 = G__48829;
i__48177 = G__48830;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__48205 = arguments.length;
switch (G__48205) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__48210 = shadow.dom.dom_node(el);
var G__48211 = cljs.core.name(ev);
var G__48212 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__48210,G__48211,G__48212) : shadow.dom.dom_listen.call(null,G__48210,G__48211,G__48212));
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__48213 = shadow.dom.dom_node(el);
var G__48214 = cljs.core.name(ev);
var G__48215 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__48213,G__48214,G__48215) : shadow.dom.dom_listen_remove.call(null,G__48213,G__48214,G__48215));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__48219 = cljs.core.seq(events);
var chunk__48220 = null;
var count__48221 = (0);
var i__48222 = (0);
while(true){
if((i__48222 < count__48221)){
var vec__48233 = chunk__48220.cljs$core$IIndexed$_nth$arity$2(null,i__48222);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48233,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48233,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48835 = seq__48219;
var G__48836 = chunk__48220;
var G__48837 = count__48221;
var G__48838 = (i__48222 + (1));
seq__48219 = G__48835;
chunk__48220 = G__48836;
count__48221 = G__48837;
i__48222 = G__48838;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48219);
if(temp__5735__auto__){
var seq__48219__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48219__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__48219__$1);
var G__48839 = cljs.core.chunk_rest(seq__48219__$1);
var G__48840 = c__4609__auto__;
var G__48841 = cljs.core.count(c__4609__auto__);
var G__48842 = (0);
seq__48219 = G__48839;
chunk__48220 = G__48840;
count__48221 = G__48841;
i__48222 = G__48842;
continue;
} else {
var vec__48238 = cljs.core.first(seq__48219__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48238,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48238,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48843 = cljs.core.next(seq__48219__$1);
var G__48844 = null;
var G__48845 = (0);
var G__48846 = (0);
seq__48219 = G__48843;
chunk__48220 = G__48844;
count__48221 = G__48845;
i__48222 = G__48846;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__48242 = cljs.core.seq(styles);
var chunk__48243 = null;
var count__48244 = (0);
var i__48245 = (0);
while(true){
if((i__48245 < count__48244)){
var vec__48266 = chunk__48243.cljs$core$IIndexed$_nth$arity$2(null,i__48245);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48266,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48266,(1),null);
var G__48269_48848 = dom;
var G__48270_48849 = cljs.core.name(k);
var G__48271_48850 = (((v == null))?"":v);
goog.style.setStyle(G__48269_48848,G__48270_48849,G__48271_48850);


var G__48851 = seq__48242;
var G__48852 = chunk__48243;
var G__48853 = count__48244;
var G__48854 = (i__48245 + (1));
seq__48242 = G__48851;
chunk__48243 = G__48852;
count__48244 = G__48853;
i__48245 = G__48854;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48242);
if(temp__5735__auto__){
var seq__48242__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48242__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__48242__$1);
var G__48856 = cljs.core.chunk_rest(seq__48242__$1);
var G__48857 = c__4609__auto__;
var G__48858 = cljs.core.count(c__4609__auto__);
var G__48859 = (0);
seq__48242 = G__48856;
chunk__48243 = G__48857;
count__48244 = G__48858;
i__48245 = G__48859;
continue;
} else {
var vec__48275 = cljs.core.first(seq__48242__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48275,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48275,(1),null);
var G__48279_48860 = dom;
var G__48280_48861 = cljs.core.name(k);
var G__48281_48862 = (((v == null))?"":v);
goog.style.setStyle(G__48279_48860,G__48280_48861,G__48281_48862);


var G__48863 = cljs.core.next(seq__48242__$1);
var G__48864 = null;
var G__48865 = (0);
var G__48866 = (0);
seq__48242 = G__48863;
chunk__48243 = G__48864;
count__48244 = G__48865;
i__48245 = G__48866;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__48286_48867 = key;
var G__48286_48868__$1 = (((G__48286_48867 instanceof cljs.core.Keyword))?G__48286_48867.fqn:null);
switch (G__48286_48868__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_48871 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_48871,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_48871,"aria-");
}
})())){
el.setAttribute(ks_48871,value);
} else {
(el[ks_48871] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__48294 = shadow.dom.dom_node(el);
var G__48295 = cls;
return goog.dom.classlist.contains(G__48294,G__48295);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__48302){
var map__48303 = p__48302;
var map__48303__$1 = (((((!((map__48303 == null))))?(((((map__48303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48303.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48303):map__48303);
var props = map__48303__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48303__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__48305 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48305,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48305,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48305,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__48308 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__48308,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__48308;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__48310 = arguments.length;
switch (G__48310) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__48311){
var vec__48312 = p__48311;
var seq__48313 = cljs.core.seq(vec__48312);
var first__48314 = cljs.core.first(seq__48313);
var seq__48313__$1 = cljs.core.next(seq__48313);
var nn = first__48314;
var first__48314__$1 = cljs.core.first(seq__48313__$1);
var seq__48313__$2 = cljs.core.next(seq__48313__$1);
var np = first__48314__$1;
var nc = seq__48313__$2;
var node = vec__48312;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__48315 = nn;
var G__48316 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__48315,G__48316) : create_fn.call(null,G__48315,G__48316));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__48317 = nn;
var G__48318 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__48317,G__48318) : create_fn.call(null,G__48317,G__48318));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__48319 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48319,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48319,(1),null);
var seq__48322_48880 = cljs.core.seq(node_children);
var chunk__48323_48881 = null;
var count__48324_48882 = (0);
var i__48325_48883 = (0);
while(true){
if((i__48325_48883 < count__48324_48882)){
var child_struct_48884 = chunk__48323_48881.cljs$core$IIndexed$_nth$arity$2(null,i__48325_48883);
var children_48886 = shadow.dom.dom_node(child_struct_48884);
if(cljs.core.seq_QMARK_(children_48886)){
var seq__48357_48887 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48886));
var chunk__48359_48888 = null;
var count__48360_48889 = (0);
var i__48361_48890 = (0);
while(true){
if((i__48361_48890 < count__48360_48889)){
var child_48891 = chunk__48359_48888.cljs$core$IIndexed$_nth$arity$2(null,i__48361_48890);
if(cljs.core.truth_(child_48891)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48891);


var G__48893 = seq__48357_48887;
var G__48894 = chunk__48359_48888;
var G__48895 = count__48360_48889;
var G__48896 = (i__48361_48890 + (1));
seq__48357_48887 = G__48893;
chunk__48359_48888 = G__48894;
count__48360_48889 = G__48895;
i__48361_48890 = G__48896;
continue;
} else {
var G__48898 = seq__48357_48887;
var G__48899 = chunk__48359_48888;
var G__48900 = count__48360_48889;
var G__48901 = (i__48361_48890 + (1));
seq__48357_48887 = G__48898;
chunk__48359_48888 = G__48899;
count__48360_48889 = G__48900;
i__48361_48890 = G__48901;
continue;
}
} else {
var temp__5735__auto___48902 = cljs.core.seq(seq__48357_48887);
if(temp__5735__auto___48902){
var seq__48357_48903__$1 = temp__5735__auto___48902;
if(cljs.core.chunked_seq_QMARK_(seq__48357_48903__$1)){
var c__4609__auto___48904 = cljs.core.chunk_first(seq__48357_48903__$1);
var G__48905 = cljs.core.chunk_rest(seq__48357_48903__$1);
var G__48906 = c__4609__auto___48904;
var G__48907 = cljs.core.count(c__4609__auto___48904);
var G__48908 = (0);
seq__48357_48887 = G__48905;
chunk__48359_48888 = G__48906;
count__48360_48889 = G__48907;
i__48361_48890 = G__48908;
continue;
} else {
var child_48909 = cljs.core.first(seq__48357_48903__$1);
if(cljs.core.truth_(child_48909)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48909);


var G__48910 = cljs.core.next(seq__48357_48903__$1);
var G__48911 = null;
var G__48912 = (0);
var G__48913 = (0);
seq__48357_48887 = G__48910;
chunk__48359_48888 = G__48911;
count__48360_48889 = G__48912;
i__48361_48890 = G__48913;
continue;
} else {
var G__48914 = cljs.core.next(seq__48357_48903__$1);
var G__48915 = null;
var G__48916 = (0);
var G__48917 = (0);
seq__48357_48887 = G__48914;
chunk__48359_48888 = G__48915;
count__48360_48889 = G__48916;
i__48361_48890 = G__48917;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48886);
}


var G__48918 = seq__48322_48880;
var G__48919 = chunk__48323_48881;
var G__48920 = count__48324_48882;
var G__48921 = (i__48325_48883 + (1));
seq__48322_48880 = G__48918;
chunk__48323_48881 = G__48919;
count__48324_48882 = G__48920;
i__48325_48883 = G__48921;
continue;
} else {
var temp__5735__auto___48922 = cljs.core.seq(seq__48322_48880);
if(temp__5735__auto___48922){
var seq__48322_48923__$1 = temp__5735__auto___48922;
if(cljs.core.chunked_seq_QMARK_(seq__48322_48923__$1)){
var c__4609__auto___48924 = cljs.core.chunk_first(seq__48322_48923__$1);
var G__48925 = cljs.core.chunk_rest(seq__48322_48923__$1);
var G__48926 = c__4609__auto___48924;
var G__48927 = cljs.core.count(c__4609__auto___48924);
var G__48928 = (0);
seq__48322_48880 = G__48925;
chunk__48323_48881 = G__48926;
count__48324_48882 = G__48927;
i__48325_48883 = G__48928;
continue;
} else {
var child_struct_48929 = cljs.core.first(seq__48322_48923__$1);
var children_48930 = shadow.dom.dom_node(child_struct_48929);
if(cljs.core.seq_QMARK_(children_48930)){
var seq__48371_48932 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48930));
var chunk__48373_48933 = null;
var count__48374_48934 = (0);
var i__48375_48935 = (0);
while(true){
if((i__48375_48935 < count__48374_48934)){
var child_48936 = chunk__48373_48933.cljs$core$IIndexed$_nth$arity$2(null,i__48375_48935);
if(cljs.core.truth_(child_48936)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48936);


var G__48937 = seq__48371_48932;
var G__48938 = chunk__48373_48933;
var G__48939 = count__48374_48934;
var G__48940 = (i__48375_48935 + (1));
seq__48371_48932 = G__48937;
chunk__48373_48933 = G__48938;
count__48374_48934 = G__48939;
i__48375_48935 = G__48940;
continue;
} else {
var G__48941 = seq__48371_48932;
var G__48942 = chunk__48373_48933;
var G__48943 = count__48374_48934;
var G__48944 = (i__48375_48935 + (1));
seq__48371_48932 = G__48941;
chunk__48373_48933 = G__48942;
count__48374_48934 = G__48943;
i__48375_48935 = G__48944;
continue;
}
} else {
var temp__5735__auto___48945__$1 = cljs.core.seq(seq__48371_48932);
if(temp__5735__auto___48945__$1){
var seq__48371_48946__$1 = temp__5735__auto___48945__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48371_48946__$1)){
var c__4609__auto___48947 = cljs.core.chunk_first(seq__48371_48946__$1);
var G__48948 = cljs.core.chunk_rest(seq__48371_48946__$1);
var G__48949 = c__4609__auto___48947;
var G__48950 = cljs.core.count(c__4609__auto___48947);
var G__48951 = (0);
seq__48371_48932 = G__48948;
chunk__48373_48933 = G__48949;
count__48374_48934 = G__48950;
i__48375_48935 = G__48951;
continue;
} else {
var child_48952 = cljs.core.first(seq__48371_48946__$1);
if(cljs.core.truth_(child_48952)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48952);


var G__48953 = cljs.core.next(seq__48371_48946__$1);
var G__48954 = null;
var G__48955 = (0);
var G__48956 = (0);
seq__48371_48932 = G__48953;
chunk__48373_48933 = G__48954;
count__48374_48934 = G__48955;
i__48375_48935 = G__48956;
continue;
} else {
var G__48958 = cljs.core.next(seq__48371_48946__$1);
var G__48959 = null;
var G__48960 = (0);
var G__48961 = (0);
seq__48371_48932 = G__48958;
chunk__48373_48933 = G__48959;
count__48374_48934 = G__48960;
i__48375_48935 = G__48961;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48930);
}


var G__48963 = cljs.core.next(seq__48322_48923__$1);
var G__48964 = null;
var G__48965 = (0);
var G__48966 = (0);
seq__48322_48880 = G__48963;
chunk__48323_48881 = G__48964;
count__48324_48882 = G__48965;
i__48325_48883 = G__48966;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__48393 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__48393);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__48399 = cljs.core.seq(node);
var chunk__48400 = null;
var count__48401 = (0);
var i__48402 = (0);
while(true){
if((i__48402 < count__48401)){
var n = chunk__48400.cljs$core$IIndexed$_nth$arity$2(null,i__48402);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48975 = seq__48399;
var G__48976 = chunk__48400;
var G__48977 = count__48401;
var G__48978 = (i__48402 + (1));
seq__48399 = G__48975;
chunk__48400 = G__48976;
count__48401 = G__48977;
i__48402 = G__48978;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48399);
if(temp__5735__auto__){
var seq__48399__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48399__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__48399__$1);
var G__48979 = cljs.core.chunk_rest(seq__48399__$1);
var G__48980 = c__4609__auto__;
var G__48981 = cljs.core.count(c__4609__auto__);
var G__48982 = (0);
seq__48399 = G__48979;
chunk__48400 = G__48980;
count__48401 = G__48981;
i__48402 = G__48982;
continue;
} else {
var n = cljs.core.first(seq__48399__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48983 = cljs.core.next(seq__48399__$1);
var G__48984 = null;
var G__48985 = (0);
var G__48986 = (0);
seq__48399 = G__48983;
chunk__48400 = G__48984;
count__48401 = G__48985;
i__48402 = G__48986;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__48405 = shadow.dom.dom_node(new$);
var G__48406 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__48405,G__48406);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__48408 = arguments.length;
switch (G__48408) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__48411 = arguments.length;
switch (G__48411) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__48414 = arguments.length;
switch (G__48414) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4185__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4795__auto__ = [];
var len__4789__auto___48998 = arguments.length;
var i__4790__auto___48999 = (0);
while(true){
if((i__4790__auto___48999 < len__4789__auto___48998)){
args__4795__auto__.push((arguments[i__4790__auto___48999]));

var G__49000 = (i__4790__auto___48999 + (1));
i__4790__auto___48999 = G__49000;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__48424_49004 = cljs.core.seq(nodes);
var chunk__48425_49005 = null;
var count__48426_49006 = (0);
var i__48427_49007 = (0);
while(true){
if((i__48427_49007 < count__48426_49006)){
var node_49008 = chunk__48425_49005.cljs$core$IIndexed$_nth$arity$2(null,i__48427_49007);
fragment.appendChild(shadow.dom._to_dom(node_49008));


var G__49009 = seq__48424_49004;
var G__49010 = chunk__48425_49005;
var G__49011 = count__48426_49006;
var G__49012 = (i__48427_49007 + (1));
seq__48424_49004 = G__49009;
chunk__48425_49005 = G__49010;
count__48426_49006 = G__49011;
i__48427_49007 = G__49012;
continue;
} else {
var temp__5735__auto___49013 = cljs.core.seq(seq__48424_49004);
if(temp__5735__auto___49013){
var seq__48424_49014__$1 = temp__5735__auto___49013;
if(cljs.core.chunked_seq_QMARK_(seq__48424_49014__$1)){
var c__4609__auto___49015 = cljs.core.chunk_first(seq__48424_49014__$1);
var G__49016 = cljs.core.chunk_rest(seq__48424_49014__$1);
var G__49017 = c__4609__auto___49015;
var G__49018 = cljs.core.count(c__4609__auto___49015);
var G__49019 = (0);
seq__48424_49004 = G__49016;
chunk__48425_49005 = G__49017;
count__48426_49006 = G__49018;
i__48427_49007 = G__49019;
continue;
} else {
var node_49020 = cljs.core.first(seq__48424_49014__$1);
fragment.appendChild(shadow.dom._to_dom(node_49020));


var G__49021 = cljs.core.next(seq__48424_49014__$1);
var G__49022 = null;
var G__49023 = (0);
var G__49024 = (0);
seq__48424_49004 = G__49021;
chunk__48425_49005 = G__49022;
count__48426_49006 = G__49023;
i__48427_49007 = G__49024;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq48419){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48419));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__48436_49029 = cljs.core.seq(scripts);
var chunk__48437_49030 = null;
var count__48438_49031 = (0);
var i__48439_49032 = (0);
while(true){
if((i__48439_49032 < count__48438_49031)){
var vec__48449_49033 = chunk__48437_49030.cljs$core$IIndexed$_nth$arity$2(null,i__48439_49032);
var script_tag_49034 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48449_49033,(0),null);
var script_body_49035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48449_49033,(1),null);
eval(script_body_49035);


var G__49036 = seq__48436_49029;
var G__49037 = chunk__48437_49030;
var G__49038 = count__48438_49031;
var G__49039 = (i__48439_49032 + (1));
seq__48436_49029 = G__49036;
chunk__48437_49030 = G__49037;
count__48438_49031 = G__49038;
i__48439_49032 = G__49039;
continue;
} else {
var temp__5735__auto___49041 = cljs.core.seq(seq__48436_49029);
if(temp__5735__auto___49041){
var seq__48436_49042__$1 = temp__5735__auto___49041;
if(cljs.core.chunked_seq_QMARK_(seq__48436_49042__$1)){
var c__4609__auto___49043 = cljs.core.chunk_first(seq__48436_49042__$1);
var G__49044 = cljs.core.chunk_rest(seq__48436_49042__$1);
var G__49045 = c__4609__auto___49043;
var G__49046 = cljs.core.count(c__4609__auto___49043);
var G__49047 = (0);
seq__48436_49029 = G__49044;
chunk__48437_49030 = G__49045;
count__48438_49031 = G__49046;
i__48439_49032 = G__49047;
continue;
} else {
var vec__48454_49050 = cljs.core.first(seq__48436_49042__$1);
var script_tag_49051 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48454_49050,(0),null);
var script_body_49052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48454_49050,(1),null);
eval(script_body_49052);


var G__49054 = cljs.core.next(seq__48436_49042__$1);
var G__49055 = null;
var G__49056 = (0);
var G__49057 = (0);
seq__48436_49029 = G__49054;
chunk__48437_49030 = G__49055;
count__48438_49031 = G__49056;
i__48439_49032 = G__49057;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__48458){
var vec__48459 = p__48458;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48459,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48459,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__48466 = shadow.dom.dom_node(el);
var G__48467 = cls;
return goog.dom.getAncestorByClass(G__48466,G__48467);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__48470 = arguments.length;
switch (G__48470) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__48471 = shadow.dom.dom_node(el);
var G__48472 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__48471,G__48472);
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__48473 = shadow.dom.dom_node(el);
var G__48474 = cljs.core.name(tag);
var G__48475 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__48473,G__48474,G__48475);
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__48476 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__48476);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__48477 = shadow.dom.dom_node(dom);
var G__48478 = value;
return goog.dom.forms.setValue(G__48477,G__48478);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__48483 = cljs.core.seq(style_keys);
var chunk__48484 = null;
var count__48486 = (0);
var i__48487 = (0);
while(true){
if((i__48487 < count__48486)){
var it = chunk__48484.cljs$core$IIndexed$_nth$arity$2(null,i__48487);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__49086 = seq__48483;
var G__49087 = chunk__48484;
var G__49088 = count__48486;
var G__49089 = (i__48487 + (1));
seq__48483 = G__49086;
chunk__48484 = G__49087;
count__48486 = G__49088;
i__48487 = G__49089;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48483);
if(temp__5735__auto__){
var seq__48483__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48483__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__48483__$1);
var G__49091 = cljs.core.chunk_rest(seq__48483__$1);
var G__49092 = c__4609__auto__;
var G__49093 = cljs.core.count(c__4609__auto__);
var G__49094 = (0);
seq__48483 = G__49091;
chunk__48484 = G__49092;
count__48486 = G__49093;
i__48487 = G__49094;
continue;
} else {
var it = cljs.core.first(seq__48483__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__49097 = cljs.core.next(seq__48483__$1);
var G__49098 = null;
var G__49099 = (0);
var G__49100 = (0);
seq__48483 = G__49097;
chunk__48484 = G__49098;
count__48486 = G__49099;
i__48487 = G__49100;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k48492,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__48496 = k48492;
var G__48496__$1 = (((G__48496 instanceof cljs.core.Keyword))?G__48496.fqn:null);
switch (G__48496__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48492,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__48497){
var vec__48498 = p__48497;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48498,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48498,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48491){
var self__ = this;
var G__48491__$1 = this;
return (new cljs.core.RecordIter((0),G__48491__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__48505 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__48505(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48493,other48494){
var self__ = this;
var this48493__$1 = this;
return (((!((other48494 == null)))) && ((this48493__$1.constructor === other48494.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48493__$1.x,other48494.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48493__$1.y,other48494.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48493__$1.__extmap,other48494.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__48491){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__48507 = cljs.core.keyword_identical_QMARK_;
var expr__48508 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__48510 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__48511 = expr__48508;
return (pred__48507.cljs$core$IFn$_invoke$arity$2 ? pred__48507.cljs$core$IFn$_invoke$arity$2(G__48510,G__48511) : pred__48507.call(null,G__48510,G__48511));
})())){
return (new shadow.dom.Coordinate(G__48491,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48512 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__48513 = expr__48508;
return (pred__48507.cljs$core$IFn$_invoke$arity$2 ? pred__48507.cljs$core$IFn$_invoke$arity$2(G__48512,G__48513) : pred__48507.call(null,G__48512,G__48513));
})())){
return (new shadow.dom.Coordinate(self__.x,G__48491,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__48491),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__48491){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__48491,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__48495){
var extmap__4478__auto__ = (function (){var G__48532 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48495,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__48495)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48532);
} else {
return G__48532;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__48495),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__48495),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__48534 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__48534);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__48537 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__48537);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__48539 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__48539);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k48542,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__48554 = k48542;
var G__48554__$1 = (((G__48554 instanceof cljs.core.Keyword))?G__48554.fqn:null);
switch (G__48554__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48542,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__48557){
var vec__48558 = p__48557;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48558,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48558,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Size{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48541){
var self__ = this;
var G__48541__$1 = this;
return (new cljs.core.RecordIter((0),G__48541__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__48568 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__48568(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48543,other48544){
var self__ = this;
var this48543__$1 = this;
return (((!((other48544 == null)))) && ((this48543__$1.constructor === other48544.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48543__$1.w,other48544.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48543__$1.h,other48544.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48543__$1.__extmap,other48544.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__48541){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__48572 = cljs.core.keyword_identical_QMARK_;
var expr__48573 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__48576 = new cljs.core.Keyword(null,"w","w",354169001);
var G__48577 = expr__48573;
return (pred__48572.cljs$core$IFn$_invoke$arity$2 ? pred__48572.cljs$core$IFn$_invoke$arity$2(G__48576,G__48577) : pred__48572.call(null,G__48576,G__48577));
})())){
return (new shadow.dom.Size(G__48541,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48578 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__48579 = expr__48573;
return (pred__48572.cljs$core$IFn$_invoke$arity$2 ? pred__48572.cljs$core$IFn$_invoke$arity$2(G__48578,G__48579) : pred__48572.call(null,G__48578,G__48579));
})())){
return (new shadow.dom.Size(self__.w,G__48541,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__48541),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__48541){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__48541,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__48545){
var extmap__4478__auto__ = (function (){var G__48586 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48545,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__48545)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48586);
} else {
return G__48586;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__48545),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__48545),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__48596 = shadow.dom.dom_node(el);
return goog.style.getSize(G__48596);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4663__auto__ = opts;
var l__4664__auto__ = a__4663__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4664__auto__)){
var G__49229 = (i + (1));
var G__49230 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__49229;
ret = G__49230;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__48601){
var vec__48602 = p__48601;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48602,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48602,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__48606 = arguments.length;
switch (G__48606) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__48608_49243 = new_node;
var G__48609_49244 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__48608_49243,G__48609_49244);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__48611_49245 = new_node;
var G__48612_49246 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__48611_49245,G__48612_49246);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__49250 = ps;
var G__49251 = (i + (1));
el__$1 = G__49250;
i = G__49251;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__48622 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__48622);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__48628 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__48628);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__48631 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__48631);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__48633 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48633,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48633,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48633,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__48638_49254 = cljs.core.seq(props);
var chunk__48639_49255 = null;
var count__48640_49256 = (0);
var i__48641_49257 = (0);
while(true){
if((i__48641_49257 < count__48640_49256)){
var vec__48655_49259 = chunk__48639_49255.cljs$core$IIndexed$_nth$arity$2(null,i__48641_49257);
var k_49260 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48655_49259,(0),null);
var v_49261 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48655_49259,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_49260);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_49260),v_49261);


var G__49266 = seq__48638_49254;
var G__49267 = chunk__48639_49255;
var G__49268 = count__48640_49256;
var G__49269 = (i__48641_49257 + (1));
seq__48638_49254 = G__49266;
chunk__48639_49255 = G__49267;
count__48640_49256 = G__49268;
i__48641_49257 = G__49269;
continue;
} else {
var temp__5735__auto___49270 = cljs.core.seq(seq__48638_49254);
if(temp__5735__auto___49270){
var seq__48638_49271__$1 = temp__5735__auto___49270;
if(cljs.core.chunked_seq_QMARK_(seq__48638_49271__$1)){
var c__4609__auto___49272 = cljs.core.chunk_first(seq__48638_49271__$1);
var G__49273 = cljs.core.chunk_rest(seq__48638_49271__$1);
var G__49274 = c__4609__auto___49272;
var G__49275 = cljs.core.count(c__4609__auto___49272);
var G__49276 = (0);
seq__48638_49254 = G__49273;
chunk__48639_49255 = G__49274;
count__48640_49256 = G__49275;
i__48641_49257 = G__49276;
continue;
} else {
var vec__48660_49277 = cljs.core.first(seq__48638_49271__$1);
var k_49278 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48660_49277,(0),null);
var v_49279 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48660_49277,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_49278);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_49278),v_49279);


var G__49282 = cljs.core.next(seq__48638_49271__$1);
var G__49283 = null;
var G__49284 = (0);
var G__49285 = (0);
seq__48638_49254 = G__49282;
chunk__48639_49255 = G__49283;
count__48640_49256 = G__49284;
i__48641_49257 = G__49285;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__48677 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48677,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48677,(1),null);
var seq__48681_49294 = cljs.core.seq(node_children);
var chunk__48683_49295 = null;
var count__48684_49296 = (0);
var i__48685_49297 = (0);
while(true){
if((i__48685_49297 < count__48684_49296)){
var child_struct_49298 = chunk__48683_49295.cljs$core$IIndexed$_nth$arity$2(null,i__48685_49297);
if((!((child_struct_49298 == null)))){
if(typeof child_struct_49298 === 'string'){
var text_49303 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_49303),child_struct_49298].join(''));
} else {
var children_49305 = shadow.dom.svg_node(child_struct_49298);
if(cljs.core.seq_QMARK_(children_49305)){
var seq__48716_49307 = cljs.core.seq(children_49305);
var chunk__48718_49308 = null;
var count__48719_49309 = (0);
var i__48720_49310 = (0);
while(true){
if((i__48720_49310 < count__48719_49309)){
var child_49314 = chunk__48718_49308.cljs$core$IIndexed$_nth$arity$2(null,i__48720_49310);
if(cljs.core.truth_(child_49314)){
node.appendChild(child_49314);


var G__49315 = seq__48716_49307;
var G__49316 = chunk__48718_49308;
var G__49317 = count__48719_49309;
var G__49318 = (i__48720_49310 + (1));
seq__48716_49307 = G__49315;
chunk__48718_49308 = G__49316;
count__48719_49309 = G__49317;
i__48720_49310 = G__49318;
continue;
} else {
var G__49320 = seq__48716_49307;
var G__49321 = chunk__48718_49308;
var G__49322 = count__48719_49309;
var G__49323 = (i__48720_49310 + (1));
seq__48716_49307 = G__49320;
chunk__48718_49308 = G__49321;
count__48719_49309 = G__49322;
i__48720_49310 = G__49323;
continue;
}
} else {
var temp__5735__auto___49324 = cljs.core.seq(seq__48716_49307);
if(temp__5735__auto___49324){
var seq__48716_49325__$1 = temp__5735__auto___49324;
if(cljs.core.chunked_seq_QMARK_(seq__48716_49325__$1)){
var c__4609__auto___49326 = cljs.core.chunk_first(seq__48716_49325__$1);
var G__49328 = cljs.core.chunk_rest(seq__48716_49325__$1);
var G__49329 = c__4609__auto___49326;
var G__49330 = cljs.core.count(c__4609__auto___49326);
var G__49331 = (0);
seq__48716_49307 = G__49328;
chunk__48718_49308 = G__49329;
count__48719_49309 = G__49330;
i__48720_49310 = G__49331;
continue;
} else {
var child_49334 = cljs.core.first(seq__48716_49325__$1);
if(cljs.core.truth_(child_49334)){
node.appendChild(child_49334);


var G__49335 = cljs.core.next(seq__48716_49325__$1);
var G__49336 = null;
var G__49337 = (0);
var G__49338 = (0);
seq__48716_49307 = G__49335;
chunk__48718_49308 = G__49336;
count__48719_49309 = G__49337;
i__48720_49310 = G__49338;
continue;
} else {
var G__49339 = cljs.core.next(seq__48716_49325__$1);
var G__49340 = null;
var G__49341 = (0);
var G__49342 = (0);
seq__48716_49307 = G__49339;
chunk__48718_49308 = G__49340;
count__48719_49309 = G__49341;
i__48720_49310 = G__49342;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_49305);
}
}


var G__49343 = seq__48681_49294;
var G__49344 = chunk__48683_49295;
var G__49345 = count__48684_49296;
var G__49346 = (i__48685_49297 + (1));
seq__48681_49294 = G__49343;
chunk__48683_49295 = G__49344;
count__48684_49296 = G__49345;
i__48685_49297 = G__49346;
continue;
} else {
var G__49348 = seq__48681_49294;
var G__49349 = chunk__48683_49295;
var G__49350 = count__48684_49296;
var G__49351 = (i__48685_49297 + (1));
seq__48681_49294 = G__49348;
chunk__48683_49295 = G__49349;
count__48684_49296 = G__49350;
i__48685_49297 = G__49351;
continue;
}
} else {
var temp__5735__auto___49352 = cljs.core.seq(seq__48681_49294);
if(temp__5735__auto___49352){
var seq__48681_49354__$1 = temp__5735__auto___49352;
if(cljs.core.chunked_seq_QMARK_(seq__48681_49354__$1)){
var c__4609__auto___49356 = cljs.core.chunk_first(seq__48681_49354__$1);
var G__49358 = cljs.core.chunk_rest(seq__48681_49354__$1);
var G__49359 = c__4609__auto___49356;
var G__49360 = cljs.core.count(c__4609__auto___49356);
var G__49361 = (0);
seq__48681_49294 = G__49358;
chunk__48683_49295 = G__49359;
count__48684_49296 = G__49360;
i__48685_49297 = G__49361;
continue;
} else {
var child_struct_49362 = cljs.core.first(seq__48681_49354__$1);
if((!((child_struct_49362 == null)))){
if(typeof child_struct_49362 === 'string'){
var text_49363 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_49363),child_struct_49362].join(''));
} else {
var children_49364 = shadow.dom.svg_node(child_struct_49362);
if(cljs.core.seq_QMARK_(children_49364)){
var seq__48728_49366 = cljs.core.seq(children_49364);
var chunk__48730_49367 = null;
var count__48731_49368 = (0);
var i__48732_49369 = (0);
while(true){
if((i__48732_49369 < count__48731_49368)){
var child_49370 = chunk__48730_49367.cljs$core$IIndexed$_nth$arity$2(null,i__48732_49369);
if(cljs.core.truth_(child_49370)){
node.appendChild(child_49370);


var G__49372 = seq__48728_49366;
var G__49373 = chunk__48730_49367;
var G__49374 = count__48731_49368;
var G__49375 = (i__48732_49369 + (1));
seq__48728_49366 = G__49372;
chunk__48730_49367 = G__49373;
count__48731_49368 = G__49374;
i__48732_49369 = G__49375;
continue;
} else {
var G__49378 = seq__48728_49366;
var G__49379 = chunk__48730_49367;
var G__49380 = count__48731_49368;
var G__49381 = (i__48732_49369 + (1));
seq__48728_49366 = G__49378;
chunk__48730_49367 = G__49379;
count__48731_49368 = G__49380;
i__48732_49369 = G__49381;
continue;
}
} else {
var temp__5735__auto___49383__$1 = cljs.core.seq(seq__48728_49366);
if(temp__5735__auto___49383__$1){
var seq__48728_49384__$1 = temp__5735__auto___49383__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48728_49384__$1)){
var c__4609__auto___49385 = cljs.core.chunk_first(seq__48728_49384__$1);
var G__49386 = cljs.core.chunk_rest(seq__48728_49384__$1);
var G__49387 = c__4609__auto___49385;
var G__49388 = cljs.core.count(c__4609__auto___49385);
var G__49389 = (0);
seq__48728_49366 = G__49386;
chunk__48730_49367 = G__49387;
count__48731_49368 = G__49388;
i__48732_49369 = G__49389;
continue;
} else {
var child_49390 = cljs.core.first(seq__48728_49384__$1);
if(cljs.core.truth_(child_49390)){
node.appendChild(child_49390);


var G__49391 = cljs.core.next(seq__48728_49384__$1);
var G__49392 = null;
var G__49393 = (0);
var G__49394 = (0);
seq__48728_49366 = G__49391;
chunk__48730_49367 = G__49392;
count__48731_49368 = G__49393;
i__48732_49369 = G__49394;
continue;
} else {
var G__49396 = cljs.core.next(seq__48728_49384__$1);
var G__49397 = null;
var G__49398 = (0);
var G__49399 = (0);
seq__48728_49366 = G__49396;
chunk__48730_49367 = G__49397;
count__48731_49368 = G__49398;
i__48732_49369 = G__49399;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_49364);
}
}


var G__49400 = cljs.core.next(seq__48681_49354__$1);
var G__49401 = null;
var G__49402 = (0);
var G__49403 = (0);
seq__48681_49294 = G__49400;
chunk__48683_49295 = G__49401;
count__48684_49296 = G__49402;
i__48685_49297 = G__49403;
continue;
} else {
var G__49404 = cljs.core.next(seq__48681_49354__$1);
var G__49405 = null;
var G__49406 = (0);
var G__49407 = (0);
seq__48681_49294 = G__49404;
chunk__48683_49295 = G__49405;
count__48684_49296 = G__49406;
i__48685_49297 = G__49407;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__48750_49411 = shadow.dom._to_svg;
var G__48751_49412 = "string";
var G__48752_49413 = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});
goog.object.set(G__48750_49411,G__48751_49412,G__48752_49413);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__48756_49422 = shadow.dom._to_svg;
var G__48757_49423 = "null";
var G__48758_49424 = (function (_){
return null;
});
goog.object.set(G__48756_49422,G__48757_49423,G__48758_49424);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___49427 = arguments.length;
var i__4790__auto___49429 = (0);
while(true){
if((i__4790__auto___49429 < len__4789__auto___49427)){
args__4795__auto__.push((arguments[i__4790__auto___49429]));

var G__49430 = (i__4790__auto___49429 + (1));
i__4790__auto___49429 = G__49430;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq48761){
var G__48763 = cljs.core.first(seq48761);
var seq48761__$1 = cljs.core.next(seq48761);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48763,seq48761__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__48769 = arguments.length;
switch (G__48769) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
var G__48777_49436 = shadow.dom.dom_node(el);
var G__48778_49437 = cljs.core.name(event);
var G__48779_49438 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__48777_49436,G__48778_49437,G__48779_49438) : shadow.dom.dom_listen.call(null,G__48777_49436,G__48778_49437,G__48779_49438));

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__46406__auto___49440 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46407__auto__ = (function (){var switch__46338__auto__ = (function (state_48787){
var state_val_48788 = (state_48787[(1)]);
if((state_val_48788 === (1))){
var state_48787__$1 = state_48787;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48787__$1,(2),once_or_cleanup);
} else {
if((state_val_48788 === (2))){
var inst_48783 = (state_48787[(2)]);
var inst_48785 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_48787__$1 = (function (){var statearr_48789 = state_48787;
(statearr_48789[(7)] = inst_48783);

return statearr_48789;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48787__$1,inst_48785);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__46339__auto__ = null;
var shadow$dom$state_machine__46339__auto____0 = (function (){
var statearr_48792 = [null,null,null,null,null,null,null,null];
(statearr_48792[(0)] = shadow$dom$state_machine__46339__auto__);

(statearr_48792[(1)] = (1));

return statearr_48792;
});
var shadow$dom$state_machine__46339__auto____1 = (function (state_48787){
while(true){
var ret_value__46340__auto__ = (function (){try{while(true){
var result__46341__auto__ = switch__46338__auto__(state_48787);
if(cljs.core.keyword_identical_QMARK_(result__46341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46341__auto__;
}
break;
}
}catch (e48793){if((e48793 instanceof Object)){
var ex__46342__auto__ = e48793;
var statearr_48794_49441 = state_48787;
(statearr_48794_49441[(5)] = ex__46342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48793;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49442 = state_48787;
state_48787 = G__49442;
continue;
} else {
return ret_value__46340__auto__;
}
break;
}
});
shadow$dom$state_machine__46339__auto__ = function(state_48787){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__46339__auto____0.call(this);
case 1:
return shadow$dom$state_machine__46339__auto____1.call(this,state_48787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__46339__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__46339__auto____0;
shadow$dom$state_machine__46339__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__46339__auto____1;
return shadow$dom$state_machine__46339__auto__;
})()
})();
var state__46408__auto__ = (function (){var statearr_48797 = (f__46407__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46407__auto__.cljs$core$IFn$_invoke$arity$0() : f__46407__auto__.call(null));
(statearr_48797[(6)] = c__46406__auto___49440);

return statearr_48797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46408__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
