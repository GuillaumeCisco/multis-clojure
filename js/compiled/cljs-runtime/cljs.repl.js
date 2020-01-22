goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__51305){
var map__51306 = p__51305;
var map__51306__$1 = (((((!((map__51306 == null))))?(((((map__51306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51306.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51306):map__51306);
var m = map__51306__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51306__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51306__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__51309_51588 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__51310_51589 = null;
var count__51311_51590 = (0);
var i__51312_51591 = (0);
while(true){
if((i__51312_51591 < count__51311_51590)){
var f_51592 = chunk__51310_51589.cljs$core$IIndexed$_nth$arity$2(null,i__51312_51591);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_51592], 0));


var G__51593 = seq__51309_51588;
var G__51594 = chunk__51310_51589;
var G__51595 = count__51311_51590;
var G__51596 = (i__51312_51591 + (1));
seq__51309_51588 = G__51593;
chunk__51310_51589 = G__51594;
count__51311_51590 = G__51595;
i__51312_51591 = G__51596;
continue;
} else {
var temp__5735__auto___51597 = cljs.core.seq(seq__51309_51588);
if(temp__5735__auto___51597){
var seq__51309_51598__$1 = temp__5735__auto___51597;
if(cljs.core.chunked_seq_QMARK_(seq__51309_51598__$1)){
var c__4609__auto___51600 = cljs.core.chunk_first(seq__51309_51598__$1);
var G__51601 = cljs.core.chunk_rest(seq__51309_51598__$1);
var G__51602 = c__4609__auto___51600;
var G__51603 = cljs.core.count(c__4609__auto___51600);
var G__51604 = (0);
seq__51309_51588 = G__51601;
chunk__51310_51589 = G__51602;
count__51311_51590 = G__51603;
i__51312_51591 = G__51604;
continue;
} else {
var f_51605 = cljs.core.first(seq__51309_51598__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_51605], 0));


var G__51606 = cljs.core.next(seq__51309_51598__$1);
var G__51607 = null;
var G__51608 = (0);
var G__51609 = (0);
seq__51309_51588 = G__51606;
chunk__51310_51589 = G__51607;
count__51311_51590 = G__51608;
i__51312_51591 = G__51609;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_51611 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_51611], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_51611)))?cljs.core.second(arglists_51611):arglists_51611)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__51325_51612 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__51326_51613 = null;
var count__51327_51614 = (0);
var i__51328_51615 = (0);
while(true){
if((i__51328_51615 < count__51327_51614)){
var vec__51344_51616 = chunk__51326_51613.cljs$core$IIndexed$_nth$arity$2(null,i__51328_51615);
var name_51617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51344_51616,(0),null);
var map__51347_51618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51344_51616,(1),null);
var map__51347_51619__$1 = (((((!((map__51347_51618 == null))))?(((((map__51347_51618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51347_51618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51347_51618):map__51347_51618);
var doc_51620 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51347_51619__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_51621 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51347_51619__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_51617], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_51621], 0));

if(cljs.core.truth_(doc_51620)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_51620], 0));
} else {
}


var G__51623 = seq__51325_51612;
var G__51624 = chunk__51326_51613;
var G__51625 = count__51327_51614;
var G__51626 = (i__51328_51615 + (1));
seq__51325_51612 = G__51623;
chunk__51326_51613 = G__51624;
count__51327_51614 = G__51625;
i__51328_51615 = G__51626;
continue;
} else {
var temp__5735__auto___51627 = cljs.core.seq(seq__51325_51612);
if(temp__5735__auto___51627){
var seq__51325_51628__$1 = temp__5735__auto___51627;
if(cljs.core.chunked_seq_QMARK_(seq__51325_51628__$1)){
var c__4609__auto___51629 = cljs.core.chunk_first(seq__51325_51628__$1);
var G__51630 = cljs.core.chunk_rest(seq__51325_51628__$1);
var G__51631 = c__4609__auto___51629;
var G__51632 = cljs.core.count(c__4609__auto___51629);
var G__51633 = (0);
seq__51325_51612 = G__51630;
chunk__51326_51613 = G__51631;
count__51327_51614 = G__51632;
i__51328_51615 = G__51633;
continue;
} else {
var vec__51369_51634 = cljs.core.first(seq__51325_51628__$1);
var name_51635 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51369_51634,(0),null);
var map__51372_51636 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51369_51634,(1),null);
var map__51372_51637__$1 = (((((!((map__51372_51636 == null))))?(((((map__51372_51636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51372_51636.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51372_51636):map__51372_51636);
var doc_51638 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51372_51637__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_51639 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51372_51637__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_51635], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_51639], 0));

if(cljs.core.truth_(doc_51638)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_51638], 0));
} else {
}


var G__51641 = cljs.core.next(seq__51325_51628__$1);
var G__51642 = null;
var G__51643 = (0);
var G__51644 = (0);
seq__51325_51612 = G__51641;
chunk__51326_51613 = G__51642;
count__51327_51614 = G__51643;
i__51328_51615 = G__51644;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__51381 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__51382 = null;
var count__51383 = (0);
var i__51384 = (0);
while(true){
if((i__51384 < count__51383)){
var role = chunk__51382.cljs$core$IIndexed$_nth$arity$2(null,i__51384);
var temp__5735__auto___51645__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___51645__$1)){
var spec_51646 = temp__5735__auto___51645__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_51646)], 0));
} else {
}


var G__51647 = seq__51381;
var G__51648 = chunk__51382;
var G__51649 = count__51383;
var G__51650 = (i__51384 + (1));
seq__51381 = G__51647;
chunk__51382 = G__51648;
count__51383 = G__51649;
i__51384 = G__51650;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__51381);
if(temp__5735__auto____$1){
var seq__51381__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__51381__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__51381__$1);
var G__51651 = cljs.core.chunk_rest(seq__51381__$1);
var G__51652 = c__4609__auto__;
var G__51653 = cljs.core.count(c__4609__auto__);
var G__51654 = (0);
seq__51381 = G__51651;
chunk__51382 = G__51652;
count__51383 = G__51653;
i__51384 = G__51654;
continue;
} else {
var role = cljs.core.first(seq__51381__$1);
var temp__5735__auto___51655__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___51655__$2)){
var spec_51656 = temp__5735__auto___51655__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_51656)], 0));
} else {
}


var G__51659 = cljs.core.next(seq__51381__$1);
var G__51661 = null;
var G__51662 = (0);
var G__51664 = (0);
seq__51381 = G__51659;
chunk__51382 = G__51661;
count__51383 = G__51662;
i__51384 = G__51664;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__51684 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__51685 = cljs.core.ex_cause(t);
via = G__51684;
t = G__51685;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__51479 = datafied_throwable;
var map__51479__$1 = (((((!((map__51479 == null))))?(((((map__51479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51479.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51479):map__51479);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51479__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51479__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51479__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__51480 = cljs.core.last(via);
var map__51480__$1 = (((((!((map__51480 == null))))?(((((map__51480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51480.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51480):map__51480);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51480__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51480__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51480__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__51481 = data;
var map__51481__$1 = (((((!((map__51481 == null))))?(((((map__51481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51481.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51481):map__51481);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51481__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51481__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51481__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__51482 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__51482__$1 = (((((!((map__51482 == null))))?(((((map__51482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51482.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51482):map__51482);
var top_data = map__51482__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51482__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__51488 = phase;
var G__51488__$1 = (((G__51488 instanceof cljs.core.Keyword))?G__51488.fqn:null);
switch (G__51488__$1) {
case "read-source":
var map__51489 = data;
var map__51489__$1 = (((((!((map__51489 == null))))?(((((map__51489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51489.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51489):map__51489);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51489__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51489__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__51492 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__51492__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51492,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__51492);
var G__51492__$2 = (cljs.core.truth_((function (){var fexpr__51493 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__51493.cljs$core$IFn$_invoke$arity$1 ? fexpr__51493.cljs$core$IFn$_invoke$arity$1(source) : fexpr__51493.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__51492__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__51492__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51492__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__51492__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__51494 = top_data;
var G__51494__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51494,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__51494);
var G__51494__$2 = (cljs.core.truth_((function (){var fexpr__51495 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__51495.cljs$core$IFn$_invoke$arity$1 ? fexpr__51495.cljs$core$IFn$_invoke$arity$1(source) : fexpr__51495.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__51494__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__51494__$1);
var G__51494__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51494__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__51494__$2);
var G__51494__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51494__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__51494__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51494__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__51494__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__51496 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51496,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51496,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51496,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51496,(3),null);
var G__51500 = top_data;
var G__51500__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51500,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__51500);
var G__51500__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51500__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__51500__$1);
var G__51500__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51500__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__51500__$2);
var G__51500__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51500__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__51500__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51500__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__51500__$4;
}

break;
case "execution":
var vec__51501 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51501,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51501,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51501,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51501,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__51477_SHARP_){
var or__4185__auto__ = (p1__51477_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__51505 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__51505.cljs$core$IFn$_invoke$arity$1 ? fexpr__51505.cljs$core$IFn$_invoke$arity$1(p1__51477_SHARP_) : fexpr__51505.call(null,p1__51477_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__51506 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__51506__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51506,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__51506);
var G__51506__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51506__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__51506__$1);
var G__51506__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51506__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__51506__$2);
var G__51506__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51506__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__51506__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51506__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__51506__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51488__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__51510){
var map__51511 = p__51510;
var map__51511__$1 = (((((!((map__51511 == null))))?(((((map__51511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51511.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51511):map__51511);
var triage_data = map__51511__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51511__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51511__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51511__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51511__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51511__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51511__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51511__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51511__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__51517 = phase;
var G__51517__$1 = (((G__51517 instanceof cljs.core.Keyword))?G__51517.fqn:null);
switch (G__51517__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__51518 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__51519 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51520 = loc;
var G__51521 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__51522_51767 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__51523_51768 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__51524_51769 = true;
var _STAR_print_fn_STAR__temp_val__51525_51770 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__51524_51769);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__51525_51770);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51508_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__51508_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__51523_51768);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__51522_51767);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__51518,G__51519,G__51520,G__51521) : format.call(null,G__51518,G__51519,G__51520,G__51521));

break;
case "macroexpansion":
var G__51536 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__51537 = cause_type;
var G__51538 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51539 = loc;
var G__51540 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__51536,G__51537,G__51538,G__51539,G__51540) : format.call(null,G__51536,G__51537,G__51538,G__51539,G__51540));

break;
case "compile-syntax-check":
var G__51541 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__51542 = cause_type;
var G__51543 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51544 = loc;
var G__51545 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__51541,G__51542,G__51543,G__51544,G__51545) : format.call(null,G__51541,G__51542,G__51543,G__51544,G__51545));

break;
case "compilation":
var G__51547 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__51548 = cause_type;
var G__51549 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51550 = loc;
var G__51551 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__51547,G__51548,G__51549,G__51550,G__51551) : format.call(null,G__51547,G__51548,G__51549,G__51550,G__51551));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__51552 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__51553 = symbol;
var G__51554 = loc;
var G__51555 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__51556_51775 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__51557_51776 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__51558_51777 = true;
var _STAR_print_fn_STAR__temp_val__51559_51778 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__51558_51777);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__51559_51778);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51509_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__51509_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__51557_51776);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__51556_51775);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__51552,G__51553,G__51554,G__51555) : format.call(null,G__51552,G__51553,G__51554,G__51555));
} else {
var G__51562 = "Execution error%s at %s(%s).\n%s\n";
var G__51563 = cause_type;
var G__51564 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51565 = loc;
var G__51566 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__51562,G__51563,G__51564,G__51565,G__51566) : format.call(null,G__51562,G__51563,G__51564,G__51565,G__51566));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51517__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
