goog.provide('district0x.re_frame.web3_fx');
goog.require('cljs.core');
goog.require('cljs_web3.eth');
goog.require('cljs.spec.alpha');
goog.require('re_frame.core');
district0x.re_frame.web3_fx._STAR_listeners_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
district0x.re_frame.web3_fx.block_filter_opts_QMARK_ = (function district0x$re_frame$web3_fx$block_filter_opts_QMARK_(x){
return ((cljs.core.map_QMARK_(x)) || (typeof x === 'string') || ((x == null)));
});
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","instance","district0x.re-frame.web3-fx/instance",688922441),cljs.core.list(new cljs.core.Symbol("cljs.core","complement","cljs.core/complement",-498493640,null),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),cljs.core.complement(cljs.core.nil_QMARK_));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","dispatch","district0x.re-frame.web3-fx/dispatch",2099750196),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","contract-fn-arg","district0x.re-frame.web3-fx/contract-fn-arg",-1779842421),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","address","district0x.re-frame.web3-fx/address",-2004050011),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","watch?","district0x.re-frame.web3-fx/watch?",528384771),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null)),cljs.spec.alpha.nilable_impl(new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","block-filter-opts","district0x.re-frame.web3-fx/block-filter-opts",1054601333),new cljs.core.Symbol("district0x.re-frame.web3-fx","block-filter-opts?","district0x.re-frame.web3-fx/block-filter-opts?",-1491416411,null),district0x.re_frame.web3_fx.block_filter_opts_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","web3","district0x.re-frame.web3-fx/web3",-1442805499),cljs.core.list(new cljs.core.Symbol("cljs.core","complement","cljs.core/complement",-498493640,null),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),cljs.core.complement(cljs.core.nil_QMARK_));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","event-ids","district0x.re-frame.web3-fx/event-ids",171623322),new cljs.core.Symbol("cljs.core","sequential?","cljs.core/sequential?",1777854658,null),cljs.core.sequential_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","fn","district0x.re-frame.web3-fx/fn",-1887505567),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))),(function (p1__41278_SHARP_){
return ((cljs.core.fn_QMARK_(p1__41278_SHARP_)) || ((p1__41278_SHARP_ instanceof cljs.core.Keyword)) || (typeof p1__41278_SHARP_ === 'string'));
}));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","args","district0x.re-frame.web3-fx/args",-119160355),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("district0x.re-frame.web3-fx","contract-fn-arg","district0x.re-frame.web3-fx/contract-fn-arg",-1779842421)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("district0x.re-frame.web3-fx","contract-fn-arg","district0x.re-frame.web3-fx/contract-fn-arg",-1779842421),new cljs.core.Keyword("district0x.re-frame.web3-fx","contract-fn-arg","district0x.re-frame.web3-fx/contract-fn-arg",-1779842421),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__41284){
return cljs.core.coll_QMARK_(G__41284);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("district0x.re-frame.web3-fx","contract-fn-arg","district0x.re-frame.web3-fx/contract-fn-arg",-1779842421))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280),new cljs.core.Keyword("district0x.re-frame.web3-fx","dispatch","district0x.re-frame.web3-fx/dispatch",2099750196),new cljs.core.Keyword("district0x.re-frame.web3-fx","dispatch","district0x.re-frame.web3-fx/dispatch",2099750196));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387),new cljs.core.Keyword("district0x.re-frame.web3-fx","dispatch","district0x.re-frame.web3-fx/dispatch",2099750196),new cljs.core.Keyword("district0x.re-frame.web3-fx","dispatch","district0x.re-frame.web3-fx/dispatch",2099750196));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-hash","district0x.re-frame.web3-fx/on-tx-hash",-1256571327),new cljs.core.Keyword("district0x.re-frame.web3-fx","dispatch","district0x.re-frame.web3-fx/dispatch",2099750196),new cljs.core.Keyword("district0x.re-frame.web3-fx","dispatch","district0x.re-frame.web3-fx/dispatch",2099750196));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-hash-error","district0x.re-frame.web3-fx/on-tx-hash-error",267549671),new cljs.core.Keyword("district0x.re-frame.web3-fx","dispatch","district0x.re-frame.web3-fx/dispatch",2099750196),new cljs.core.Keyword("district0x.re-frame.web3-fx","dispatch","district0x.re-frame.web3-fx/dispatch",2099750196));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-receipt","district0x.re-frame.web3-fx/on-tx-receipt",692783820),new cljs.core.Keyword("district0x.re-frame.web3-fx","dispatch","district0x.re-frame.web3-fx/dispatch",2099750196),new cljs.core.Keyword("district0x.re-frame.web3-fx","dispatch","district0x.re-frame.web3-fx/dispatch",2099750196));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-success","district0x.re-frame.web3-fx/on-tx-success",-915344735),new cljs.core.Keyword("district0x.re-frame.web3-fx","dispatch","district0x.re-frame.web3-fx/dispatch",2099750196),new cljs.core.Keyword("district0x.re-frame.web3-fx","dispatch","district0x.re-frame.web3-fx/dispatch",2099750196));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-error","district0x.re-frame.web3-fx/on-tx-error",-869700419),new cljs.core.Keyword("district0x.re-frame.web3-fx","dispatch","district0x.re-frame.web3-fx/dispatch",2099750196),new cljs.core.Keyword("district0x.re-frame.web3-fx","dispatch","district0x.re-frame.web3-fx/dispatch",2099750196));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","tx-opts","district0x.re-frame.web3-fx/tx-opts",-2112810848),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","event","district0x.re-frame.web3-fx/event",-1226065613),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.keyword_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","event-id","district0x.re-frame.web3-fx/event-id",2011956357),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","event-filter-opts","district0x.re-frame.web3-fx/event-filter-opts",-1195151124),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),cljs.spec.alpha.nilable_impl(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","block-filter-opts","district0x.re-frame.web3-fx/block-filter-opts",1054601333),new cljs.core.Symbol("district0x.re-frame.web3-fx","block-filter-opts?","district0x.re-frame.web3-fx/block-filter-opts?",-1491416411,null),district0x.re_frame.web3_fx.block_filter_opts_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","tx-hashes","district0x.re-frame.web3-fx/tx-hashes",89248703),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),cljs.core.string_QMARK_,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__41289){
return cljs.core.coll_QMARK_(G__41289);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","fns","district0x.re-frame.web3-fx/fns",558354789),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","args","district0x.re-frame.web3-fx/args",-119160355),new cljs.core.Keyword("district0x.re-frame.web3-fx","tx-opts","district0x.re-frame.web3-fx/tx-opts",-2112810848),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-hash","district0x.re-frame.web3-fx/on-tx-hash",-1256571327),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-hash-error","district0x.re-frame.web3-fx/on-tx-hash-error",267549671),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-receipt","district0x.re-frame.web3-fx/on-tx-receipt",692783820),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-success","district0x.re-frame.web3-fx/on-tx-success",-915344735),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-error","district0x.re-frame.web3-fx/on-tx-error",-869700419),new cljs.core.Keyword("district0x.re-frame.web3-fx","fn","district0x.re-frame.web3-fx/fn",-1887505567),new cljs.core.Keyword("district0x.re-frame.web3-fx","instance","district0x.re-frame.web3-fx/instance",688922441)], null)))),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("s","nilable","s/nilable",-812128520,null),cljs.core.list(new cljs.core.Symbol("s","keys","s/keys",-1586011188,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","args","district0x.re-frame.web3-fx/args",-119160355),new cljs.core.Keyword("district0x.re-frame.web3-fx","tx-opts","district0x.re-frame.web3-fx/tx-opts",-2112810848),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-hash","district0x.re-frame.web3-fx/on-tx-hash",-1256571327),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-hash-error","district0x.re-frame.web3-fx/on-tx-hash-error",267549671),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-receipt","district0x.re-frame.web3-fx/on-tx-receipt",692783820),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-success","district0x.re-frame.web3-fx/on-tx-success",-915344735),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-error","district0x.re-frame.web3-fx/on-tx-error",-869700419),new cljs.core.Keyword("district0x.re-frame.web3-fx","fn","district0x.re-frame.web3-fx/fn",-1887505567),new cljs.core.Keyword("district0x.re-frame.web3-fx","instance","district0x.re-frame.web3-fx/instance",688922441)], null))),cljs.spec.alpha.nilable_impl(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","args","district0x.re-frame.web3-fx/args",-119160355),new cljs.core.Keyword("district0x.re-frame.web3-fx","tx-opts","district0x.re-frame.web3-fx/tx-opts",-2112810848),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-hash","district0x.re-frame.web3-fx/on-tx-hash",-1256571327),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-hash-error","district0x.re-frame.web3-fx/on-tx-hash-error",267549671),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-receipt","district0x.re-frame.web3-fx/on-tx-receipt",692783820),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-success","district0x.re-frame.web3-fx/on-tx-success",-915344735),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-error","district0x.re-frame.web3-fx/on-tx-error",-869700419),new cljs.core.Keyword("district0x.re-frame.web3-fx","fn","district0x.re-frame.web3-fx/fn",-1887505567),new cljs.core.Keyword("district0x.re-frame.web3-fx","instance","district0x.re-frame.web3-fx/instance",688922441)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","args","district0x.re-frame.web3-fx/args",-119160355),new cljs.core.Keyword("district0x.re-frame.web3-fx","tx-opts","district0x.re-frame.web3-fx/tx-opts",-2112810848),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-hash","district0x.re-frame.web3-fx/on-tx-hash",-1256571327),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-hash-error","district0x.re-frame.web3-fx/on-tx-hash-error",267549671),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-receipt","district0x.re-frame.web3-fx/on-tx-receipt",692783820),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-success","district0x.re-frame.web3-fx/on-tx-success",-915344735),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-error","district0x.re-frame.web3-fx/on-tx-error",-869700419),new cljs.core.Keyword("district0x.re-frame.web3-fx","fn","district0x.re-frame.web3-fx/fn",-1887505567),new cljs.core.Keyword("district0x.re-frame.web3-fx","instance","district0x.re-frame.web3-fx/instance",688922441)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__41300){
return cljs.core.map_QMARK_(G__41300);
})], null),(function (G__41300){
return cljs.core.map_QMARK_(G__41300);
}),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"tx-opts","tx-opts",1753016225),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.Keyword(null,"on-error","on-error",1728533530),new cljs.core.Keyword(null,"on-tx-hash","on-tx-hash",-1483327666),new cljs.core.Keyword(null,"on-tx-hash-error","on-tx-hash-error",-161520922),new cljs.core.Keyword(null,"on-tx-receipt","on-tx-receipt",280949197),new cljs.core.Keyword(null,"on-tx-success","on-tx-success",1626127272),new cljs.core.Keyword(null,"on-tx-error","on-tx-error",1904038852),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"instance","instance",-2121349050)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","args","district0x.re-frame.web3-fx/args",-119160355),new cljs.core.Keyword("district0x.re-frame.web3-fx","tx-opts","district0x.re-frame.web3-fx/tx-opts",-2112810848),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-hash","district0x.re-frame.web3-fx/on-tx-hash",-1256571327),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-hash-error","district0x.re-frame.web3-fx/on-tx-hash-error",267549671),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-receipt","district0x.re-frame.web3-fx/on-tx-receipt",692783820),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-success","district0x.re-frame.web3-fx/on-tx-success",-915344735),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-error","district0x.re-frame.web3-fx/on-tx-error",-869700419),new cljs.core.Keyword("district0x.re-frame.web3-fx","fn","district0x.re-frame.web3-fx/fn",-1887505567),new cljs.core.Keyword("district0x.re-frame.web3-fx","instance","district0x.re-frame.web3-fx/instance",688922441)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])),null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__41293){
return cljs.core.coll_QMARK_(G__41293);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","args","district0x.re-frame.web3-fx/args",-119160355),new cljs.core.Keyword("district0x.re-frame.web3-fx","tx-opts","district0x.re-frame.web3-fx/tx-opts",-2112810848),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-hash","district0x.re-frame.web3-fx/on-tx-hash",-1256571327),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-hash-error","district0x.re-frame.web3-fx/on-tx-hash-error",267549671),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-receipt","district0x.re-frame.web3-fx/on-tx-receipt",692783820),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-success","district0x.re-frame.web3-fx/on-tx-success",-915344735),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-error","district0x.re-frame.web3-fx/on-tx-error",-869700419),new cljs.core.Keyword("district0x.re-frame.web3-fx","fn","district0x.re-frame.web3-fx/fn",-1887505567),new cljs.core.Keyword("district0x.re-frame.web3-fx","instance","district0x.re-frame.web3-fx/instance",688922441)], null))))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","call","district0x.re-frame.web3-fx/call",-644577399),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","web3","district0x.re-frame.web3-fx/web3",-1442805499),new cljs.core.Keyword("district0x.re-frame.web3-fx","fns","district0x.re-frame.web3-fx/fns",558354789)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","web3","district0x.re-frame.web3-fx/web3",-1442805499),new cljs.core.Keyword("district0x.re-frame.web3-fx","fns","district0x.re-frame.web3-fx/fns",558354789)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__41310){
return cljs.core.map_QMARK_(G__41310);
}),(function (G__41310){
return cljs.core.contains_QMARK_(G__41310,new cljs.core.Keyword(null,"web3","web3",-879451640));
}),(function (G__41310){
return cljs.core.contains_QMARK_(G__41310,new cljs.core.Keyword(null,"fns","fns",1185138786));
})], null),(function (G__41310){
return ((cljs.core.map_QMARK_(G__41310)) && (cljs.core.contains_QMARK_(G__41310,new cljs.core.Keyword(null,"web3","web3",-879451640))) && (cljs.core.contains_QMARK_(G__41310,new cljs.core.Keyword(null,"fns","fns",1185138786))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","web3","district0x.re-frame.web3-fx/web3",-1442805499),new cljs.core.Keyword("district0x.re-frame.web3-fx","fns","district0x.re-frame.web3-fx/fns",558354789)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"web3","web3",-879451640),new cljs.core.Keyword(null,"fns","fns",1185138786)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"web3","web3",-879451640))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"fns","fns",1185138786)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","events","district0x.re-frame.web3-fx/events",-2058694130),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","instance","district0x.re-frame.web3-fx/instance",688922441),new cljs.core.Keyword("district0x.re-frame.web3-fx","event","district0x.re-frame.web3-fx/event",-1226065613)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857),new cljs.core.Keyword("district0x.re-frame.web3-fx","event-filter-opts","district0x.re-frame.web3-fx/event-filter-opts",-1195151124),new cljs.core.Keyword("district0x.re-frame.web3-fx","block-filter-opts","district0x.re-frame.web3-fx/block-filter-opts",1054601333),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387)], null)))),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("s","nilable","s/nilable",-812128520,null),cljs.core.list(new cljs.core.Symbol("s","keys","s/keys",-1586011188,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","instance","district0x.re-frame.web3-fx/instance",688922441),new cljs.core.Keyword("district0x.re-frame.web3-fx","event","district0x.re-frame.web3-fx/event",-1226065613)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857),new cljs.core.Keyword("district0x.re-frame.web3-fx","event-filter-opts","district0x.re-frame.web3-fx/event-filter-opts",-1195151124),new cljs.core.Keyword("district0x.re-frame.web3-fx","block-filter-opts","district0x.re-frame.web3-fx/block-filter-opts",1054601333),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387)], null))),cljs.spec.alpha.nilable_impl(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","instance","district0x.re-frame.web3-fx/instance",688922441),new cljs.core.Keyword("district0x.re-frame.web3-fx","event","district0x.re-frame.web3-fx/event",-1226065613)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857),new cljs.core.Keyword("district0x.re-frame.web3-fx","event-filter-opts","district0x.re-frame.web3-fx/event-filter-opts",-1195151124),new cljs.core.Keyword("district0x.re-frame.web3-fx","block-filter-opts","district0x.re-frame.web3-fx/block-filter-opts",1054601333),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","instance","district0x.re-frame.web3-fx/instance",688922441),new cljs.core.Keyword("district0x.re-frame.web3-fx","event","district0x.re-frame.web3-fx/event",-1226065613)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857),new cljs.core.Keyword("district0x.re-frame.web3-fx","event-filter-opts","district0x.re-frame.web3-fx/event-filter-opts",-1195151124),new cljs.core.Keyword("district0x.re-frame.web3-fx","block-filter-opts","district0x.re-frame.web3-fx/block-filter-opts",1054601333),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387)], null),null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__41324){
return cljs.core.map_QMARK_(G__41324);
}),(function (G__41324){
return cljs.core.contains_QMARK_(G__41324,new cljs.core.Keyword(null,"instance","instance",-2121349050));
}),(function (G__41324){
return cljs.core.contains_QMARK_(G__41324,new cljs.core.Keyword(null,"event","event",301435442));
})], null),(function (G__41324){
return ((cljs.core.map_QMARK_(G__41324)) && (cljs.core.contains_QMARK_(G__41324,new cljs.core.Keyword(null,"instance","instance",-2121349050))) && (cljs.core.contains_QMARK_(G__41324,new cljs.core.Keyword(null,"event","event",301435442))));
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"event-filter-opts","event-filter-opts",2125928439),new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.Keyword(null,"on-error","on-error",1728533530)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","instance","district0x.re-frame.web3-fx/instance",688922441),new cljs.core.Keyword("district0x.re-frame.web3-fx","event","district0x.re-frame.web3-fx/event",-1226065613)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instance","instance",-2121349050),new cljs.core.Keyword(null,"event","event",301435442)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857),new cljs.core.Keyword("district0x.re-frame.web3-fx","event-filter-opts","district0x.re-frame.web3-fx/event-filter-opts",-1195151124),new cljs.core.Keyword("district0x.re-frame.web3-fx","block-filter-opts","district0x.re-frame.web3-fx/block-filter-opts",1054601333),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"instance","instance",-2121349050))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"event","event",301435442)))], null),null])),null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__41323){
return cljs.core.coll_QMARK_(G__41323);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","instance","district0x.re-frame.web3-fx/instance",688922441),new cljs.core.Keyword("district0x.re-frame.web3-fx","event","district0x.re-frame.web3-fx/event",-1226065613)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857),new cljs.core.Keyword("district0x.re-frame.web3-fx","event-filter-opts","district0x.re-frame.web3-fx/event-filter-opts",-1195151124),new cljs.core.Keyword("district0x.re-frame.web3-fx","block-filter-opts","district0x.re-frame.web3-fx/block-filter-opts",1054601333),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387)], null))))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","watch-events","district0x.re-frame.web3-fx/watch-events",-1055414721),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","events","district0x.re-frame.web3-fx/events",-2058694130)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","events","district0x.re-frame.web3-fx/events",-2058694130)], null),null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__41343){
return cljs.core.map_QMARK_(G__41343);
}),(function (G__41343){
return cljs.core.contains_QMARK_(G__41343,new cljs.core.Keyword(null,"events","events",1792552201));
})], null),(function (G__41343){
return ((cljs.core.map_QMARK_(G__41343)) && (cljs.core.contains_QMARK_(G__41343,new cljs.core.Keyword(null,"events","events",1792552201))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","events","district0x.re-frame.web3-fx/events",-2058694130)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"events","events",1792552201)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"events","events",1792552201)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","transactions","district0x.re-frame.web3-fx/transactions",-2121303651),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","tx-hash","district0x.re-frame.web3-fx/tx-hash",122755499)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-receipt","district0x.re-frame.web3-fx/on-tx-receipt",692783820),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-success","district0x.re-frame.web3-fx/on-tx-success",-915344735),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-error","district0x.re-frame.web3-fx/on-tx-error",-869700419),new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857)], null)))),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("s","nilable","s/nilable",-812128520,null),cljs.core.list(new cljs.core.Symbol("s","keys","s/keys",-1586011188,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","tx-hash","district0x.re-frame.web3-fx/tx-hash",122755499)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-receipt","district0x.re-frame.web3-fx/on-tx-receipt",692783820),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-success","district0x.re-frame.web3-fx/on-tx-success",-915344735),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-error","district0x.re-frame.web3-fx/on-tx-error",-869700419),new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857)], null))),cljs.spec.alpha.nilable_impl(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","tx-hash","district0x.re-frame.web3-fx/tx-hash",122755499)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-receipt","district0x.re-frame.web3-fx/on-tx-receipt",692783820),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-success","district0x.re-frame.web3-fx/on-tx-success",-915344735),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-error","district0x.re-frame.web3-fx/on-tx-error",-869700419),new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","tx-hash","district0x.re-frame.web3-fx/tx-hash",122755499)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-receipt","district0x.re-frame.web3-fx/on-tx-receipt",692783820),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-success","district0x.re-frame.web3-fx/on-tx-success",-915344735),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-error","district0x.re-frame.web3-fx/on-tx-error",-869700419),new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__41354){
return cljs.core.map_QMARK_(G__41354);
}),(function (G__41354){
return cljs.core.contains_QMARK_(G__41354,new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200));
})], null),(function (G__41354){
return ((cljs.core.map_QMARK_(G__41354)) && (cljs.core.contains_QMARK_(G__41354,new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200))));
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-tx-receipt","on-tx-receipt",280949197),new cljs.core.Keyword(null,"on-tx-success","on-tx-success",1626127272),new cljs.core.Keyword(null,"on-tx-error","on-tx-error",1904038852),new cljs.core.Keyword(null,"id","id",-1388402092)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","tx-hash","district0x.re-frame.web3-fx/tx-hash",122755499)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-receipt","district0x.re-frame.web3-fx/on-tx-receipt",692783820),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-success","district0x.re-frame.web3-fx/on-tx-success",-915344735),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-error","district0x.re-frame.web3-fx/on-tx-error",-869700419),new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200)))], null),null])),null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__41353){
return cljs.core.coll_QMARK_(G__41353);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","tx-hash","district0x.re-frame.web3-fx/tx-hash",122755499)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-receipt","district0x.re-frame.web3-fx/on-tx-receipt",692783820),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-success","district0x.re-frame.web3-fx/on-tx-success",-915344735),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-error","district0x.re-frame.web3-fx/on-tx-error",-869700419),new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857)], null))))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","watch-transactions","district0x.re-frame.web3-fx/watch-transactions",-1867553294),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","web3","district0x.re-frame.web3-fx/web3",-1442805499),new cljs.core.Keyword("district0x.re-frame.web3-fx","transactions","district0x.re-frame.web3-fx/transactions",-2121303651)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","web3","district0x.re-frame.web3-fx/web3",-1442805499),new cljs.core.Keyword("district0x.re-frame.web3-fx","transactions","district0x.re-frame.web3-fx/transactions",-2121303651)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__41361){
return cljs.core.map_QMARK_(G__41361);
}),(function (G__41361){
return cljs.core.contains_QMARK_(G__41361,new cljs.core.Keyword(null,"web3","web3",-879451640));
}),(function (G__41361){
return cljs.core.contains_QMARK_(G__41361,new cljs.core.Keyword(null,"transactions","transactions",-1425846118));
})], null),(function (G__41361){
return ((cljs.core.map_QMARK_(G__41361)) && (cljs.core.contains_QMARK_(G__41361,new cljs.core.Keyword(null,"web3","web3",-879451640))) && (cljs.core.contains_QMARK_(G__41361,new cljs.core.Keyword(null,"transactions","transactions",-1425846118))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","web3","district0x.re-frame.web3-fx/web3",-1442805499),new cljs.core.Keyword("district0x.re-frame.web3-fx","transactions","district0x.re-frame.web3-fx/transactions",-2121303651)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"web3","web3",-879451640),new cljs.core.Keyword(null,"transactions","transactions",-1425846118)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"web3","web3",-879451640))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"transactions","transactions",-1425846118)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","addresses","district0x.re-frame.web3-fx/addresses",-634807771),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","address","district0x.re-frame.web3-fx/address",-2004050011),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387),new cljs.core.Keyword("district0x.re-frame.web3-fx","watch?","district0x.re-frame.web3-fx/watch?",528384771),new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857)], null)))),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("s","nilable","s/nilable",-812128520,null),cljs.core.list(new cljs.core.Symbol("s","keys","s/keys",-1586011188,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","address","district0x.re-frame.web3-fx/address",-2004050011),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387),new cljs.core.Keyword("district0x.re-frame.web3-fx","watch?","district0x.re-frame.web3-fx/watch?",528384771),new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857)], null))),cljs.spec.alpha.nilable_impl(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","address","district0x.re-frame.web3-fx/address",-2004050011),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387),new cljs.core.Keyword("district0x.re-frame.web3-fx","watch?","district0x.re-frame.web3-fx/watch?",528384771),new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","address","district0x.re-frame.web3-fx/address",-2004050011),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387),new cljs.core.Keyword("district0x.re-frame.web3-fx","watch?","district0x.re-frame.web3-fx/watch?",528384771),new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857)], null),null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__41369){
return cljs.core.map_QMARK_(G__41369);
}),(function (G__41369){
return cljs.core.contains_QMARK_(G__41369,new cljs.core.Keyword(null,"address","address",559499426));
}),(function (G__41369){
return cljs.core.contains_QMARK_(G__41369,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
})], null),(function (G__41369){
return ((cljs.core.map_QMARK_(G__41369)) && (cljs.core.contains_QMARK_(G__41369,new cljs.core.Keyword(null,"address","address",559499426))) && (cljs.core.contains_QMARK_(G__41369,new cljs.core.Keyword(null,"on-success","on-success",1786904109))));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-error","on-error",1728533530),new cljs.core.Keyword(null,"watch?","watch?",-1976903168),new cljs.core.Keyword(null,"id","id",-1388402092)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","address","district0x.re-frame.web3-fx/address",-2004050011),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Keyword(null,"on-success","on-success",1786904109)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387),new cljs.core.Keyword("district0x.re-frame.web3-fx","watch?","district0x.re-frame.web3-fx/watch?",528384771),new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"address","address",559499426))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"on-success","on-success",1786904109)))], null),null])),null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__41368){
return cljs.core.coll_QMARK_(G__41368);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","address","district0x.re-frame.web3-fx/address",-2004050011),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387),new cljs.core.Keyword("district0x.re-frame.web3-fx","watch?","district0x.re-frame.web3-fx/watch?",528384771),new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857)], null))))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","get-balances","district0x.re-frame.web3-fx/get-balances",1560627875),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","addresses","district0x.re-frame.web3-fx/addresses",-634807771),new cljs.core.Keyword("district0x.re-frame.web3-fx","web3","district0x.re-frame.web3-fx/web3",-1442805499)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","addresses","district0x.re-frame.web3-fx/addresses",-634807771),new cljs.core.Keyword("district0x.re-frame.web3-fx","web3","district0x.re-frame.web3-fx/web3",-1442805499)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__41370){
return cljs.core.map_QMARK_(G__41370);
}),(function (G__41370){
return cljs.core.contains_QMARK_(G__41370,new cljs.core.Keyword(null,"addresses","addresses",-559529694));
}),(function (G__41370){
return cljs.core.contains_QMARK_(G__41370,new cljs.core.Keyword(null,"web3","web3",-879451640));
})], null),(function (G__41370){
return ((cljs.core.map_QMARK_(G__41370)) && (cljs.core.contains_QMARK_(G__41370,new cljs.core.Keyword(null,"addresses","addresses",-559529694))) && (cljs.core.contains_QMARK_(G__41370,new cljs.core.Keyword(null,"web3","web3",-879451640))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","addresses","district0x.re-frame.web3-fx/addresses",-634807771),new cljs.core.Keyword("district0x.re-frame.web3-fx","web3","district0x.re-frame.web3-fx/web3",-1442805499)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"addresses","addresses",-559529694),new cljs.core.Keyword(null,"web3","web3",-879451640)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"addresses","addresses",-559529694))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"web3","web3",-879451640)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("district0x.re-frame.web3-fx","listen","district0x.re-frame.web3-fx/listen",-1948149550),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387),new cljs.core.Keyword("district0x.re-frame.web3-fx","web3","district0x.re-frame.web3-fx/web3",-1442805499),new cljs.core.Keyword("district0x.re-frame.web3-fx","block-filter-opts","district0x.re-frame.web3-fx/block-filter-opts",1054601333)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387),new cljs.core.Keyword("district0x.re-frame.web3-fx","web3","district0x.re-frame.web3-fx/web3",-1442805499),new cljs.core.Keyword("district0x.re-frame.web3-fx","block-filter-opts","district0x.re-frame.web3-fx/block-filter-opts",1054601333)], null),null,null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__41371){
return cljs.core.map_QMARK_(G__41371);
}),(function (G__41371){
return cljs.core.contains_QMARK_(G__41371,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
}),(function (G__41371){
return cljs.core.contains_QMARK_(G__41371,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
}),(function (G__41371){
return cljs.core.contains_QMARK_(G__41371,new cljs.core.Keyword(null,"web3","web3",-879451640));
}),(function (G__41371){
return cljs.core.contains_QMARK_(G__41371,new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672));
})], null),(function (G__41371){
return ((cljs.core.map_QMARK_(G__41371)) && (cljs.core.contains_QMARK_(G__41371,new cljs.core.Keyword(null,"on-success","on-success",1786904109))) && (cljs.core.contains_QMARK_(G__41371,new cljs.core.Keyword(null,"on-error","on-error",1728533530))) && (cljs.core.contains_QMARK_(G__41371,new cljs.core.Keyword(null,"web3","web3",-879451640))) && (cljs.core.contains_QMARK_(G__41371,new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387),new cljs.core.Keyword("district0x.re-frame.web3-fx","web3","district0x.re-frame.web3-fx/web3",-1442805499),new cljs.core.Keyword("district0x.re-frame.web3-fx","block-filter-opts","district0x.re-frame.web3-fx/block-filter-opts",1054601333)], null),null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.Keyword(null,"on-error","on-error",1728533530),new cljs.core.Keyword(null,"web3","web3",-879451640),new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"on-success","on-success",1786904109))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"on-error","on-error",1728533530))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"web3","web3",-879451640))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672)))], null),null])));
district0x.re_frame.web3_fx.dispach_fn = (function district0x$re_frame$web3_fx$dispach_fn(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41527 = arguments.length;
var i__4790__auto___41528 = (0);
while(true){
if((i__4790__auto___41528 < len__4789__auto___41527)){
args__4795__auto__.push((arguments[i__4790__auto___41528]));

var G__41529 = (i__4790__auto___41528 + (1));
i__4790__auto___41528 = G__41529;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return district0x.re_frame.web3_fx.dispach_fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(district0x.re_frame.web3_fx.dispach_fn.cljs$core$IFn$_invoke$arity$variadic = (function (on_success,on_error,args){
return (function (err,res){
if(cljs.core.truth_(err)){
var G__41375 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(on_error,cljs.core.cons(err,args)));
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__41375) : re_frame.core.dispatch.call(null,G__41375));
} else {
var G__41376 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(on_success,cljs.core.cons(res,args)));
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__41376) : re_frame.core.dispatch.call(null,G__41376));
}
});
}));

(district0x.re_frame.web3_fx.dispach_fn.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(district0x.re_frame.web3_fx.dispach_fn.cljs$lang$applyTo = (function (seq41372){
var G__41373 = cljs.core.first(seq41372);
var seq41372__$1 = cljs.core.next(seq41372);
var G__41374 = cljs.core.first(seq41372__$1);
var seq41372__$2 = cljs.core.next(seq41372__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41373,G__41374,seq41372__$2);
}));

district0x.re_frame.web3_fx.contract_event_dispach_fn = (function district0x$re_frame$web3_fx$contract_event_dispach_fn(on_success,on_error){
return (function (err,res){
if(cljs.core.truth_(err)){
var G__41377 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(on_error,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [err], null)));
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__41377) : re_frame.core.dispatch.call(null,G__41377));
} else {
var G__41378 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(on_success,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(res),res], null)));
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__41378) : re_frame.core.dispatch.call(null,G__41378));
}
});
});
district0x.re_frame.web3_fx.stop_listener_BANG_ = (function district0x$re_frame$web3_fx$stop_listener_BANG_(id){
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(district0x.re_frame.web3_fx._STAR_listeners_STAR_),id);
if(cljs.core.truth_(temp__5735__auto__)){
var filters = temp__5735__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(district0x.re_frame.web3_fx._STAR_listeners_STAR_,cljs.core.dissoc,id);

var seq__41379 = cljs.core.seq(filters);
var chunk__41380 = null;
var count__41381 = (0);
var i__41382 = (0);
while(true){
if((i__41382 < count__41381)){
var filter = chunk__41380.cljs$core$IIndexed$_nth$arity$2(null,i__41382);
cljs_web3.eth.stop_watching_BANG_.cljs$core$IFn$_invoke$arity$variadic(filter,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (seq__41379,chunk__41380,count__41381,i__41382,filter,filters,temp__5735__auto__){
return (function (){
return null;
});})(seq__41379,chunk__41380,count__41381,i__41382,filter,filters,temp__5735__auto__))
], 0));


var G__41530 = seq__41379;
var G__41531 = chunk__41380;
var G__41532 = count__41381;
var G__41533 = (i__41382 + (1));
seq__41379 = G__41530;
chunk__41380 = G__41531;
count__41381 = G__41532;
i__41382 = G__41533;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__41379);
if(temp__5735__auto____$1){
var seq__41379__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__41379__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__41379__$1);
var G__41534 = cljs.core.chunk_rest(seq__41379__$1);
var G__41535 = c__4609__auto__;
var G__41536 = cljs.core.count(c__4609__auto__);
var G__41537 = (0);
seq__41379 = G__41534;
chunk__41380 = G__41535;
count__41381 = G__41536;
i__41382 = G__41537;
continue;
} else {
var filter = cljs.core.first(seq__41379__$1);
cljs_web3.eth.stop_watching_BANG_.cljs$core$IFn$_invoke$arity$variadic(filter,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (seq__41379,chunk__41380,count__41381,i__41382,filter,seq__41379__$1,temp__5735__auto____$1,filters,temp__5735__auto__){
return (function (){
return null;
});})(seq__41379,chunk__41380,count__41381,i__41382,filter,seq__41379__$1,temp__5735__auto____$1,filters,temp__5735__auto__))
], 0));


var G__41538 = cljs.core.next(seq__41379__$1);
var G__41539 = null;
var G__41540 = (0);
var G__41541 = (0);
seq__41379 = G__41538;
chunk__41380 = G__41539;
count__41381 = G__41540;
i__41382 = G__41541;
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
});
district0x.re_frame.web3_fx.start_listener_BANG_ = (function district0x$re_frame$web3_fx$start_listener_BANG_(p__41383){
var map__41384 = p__41383;
var map__41384__$1 = (((((!((map__41384 == null))))?(((((map__41384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41384.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41384):map__41384);
var web3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41384__$1,new cljs.core.Keyword(null,"web3","web3",-879451640));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41384__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var block_filter_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41384__$1,new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672));
var callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41384__$1,new cljs.core.Keyword(null,"callback","callback",-705136228));
var id__$1 = (cljs.core.truth_(id)?id:callback);
district0x.re_frame.web3_fx.stop_listener_BANG_(id__$1);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(district0x.re_frame.web3_fx._STAR_listeners_STAR_,cljs.core.update,id__$1,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs_web3.eth.filter.cljs$core$IFn$_invoke$arity$variadic(web3,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block_filter_opts,callback], 0))], 0));

return id__$1;
});
district0x.re_frame.web3_fx.start_event_listener_BANG_ = (function district0x$re_frame$web3_fx$start_event_listener_BANG_(p__41386){
var map__41387 = p__41386;
var map__41387__$1 = (((((!((map__41387 == null))))?(((((map__41387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41387.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41387):map__41387);
var instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41387__$1,new cljs.core.Keyword(null,"instance","instance",-2121349050));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41387__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41387__$1,new cljs.core.Keyword(null,"event","event",301435442));
var event_filter_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41387__$1,new cljs.core.Keyword(null,"event-filter-opts","event-filter-opts",2125928439));
var block_filter_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41387__$1,new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672));
var callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41387__$1,new cljs.core.Keyword(null,"callback","callback",-705136228));
var id__$1 = (cljs.core.truth_(id)?id:callback);
district0x.re_frame.web3_fx.stop_listener_BANG_(id__$1);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(district0x.re_frame.web3_fx._STAR_listeners_STAR_,cljs.core.update,id__$1,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs_web3.eth.contract_call.cljs$core$IFn$_invoke$arity$variadic(instance,event,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([event_filter_opts,block_filter_opts,callback], 0))], 0));

return id__$1;
});
district0x.re_frame.web3_fx.dispatch_on_tx_receipt_fn = (function district0x$re_frame$web3_fx$dispatch_on_tx_receipt_fn(p__41391){
var map__41392 = p__41391;
var map__41392__$1 = (((((!((map__41392 == null))))?(((((map__41392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41392.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41392):map__41392);
var on_tx_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41392__$1,new cljs.core.Keyword(null,"on-tx-error","on-tx-error",1904038852));
var tx_hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41392__$1,new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200));
var web3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41392__$1,new cljs.core.Keyword(null,"web3","web3",-879451640));
var on_tx_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41392__$1,new cljs.core.Keyword(null,"on-tx-success","on-tx-success",1626127272));
var on_tx_receipt_n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41392__$1,new cljs.core.Keyword(null,"on-tx-receipt-n","on-tx-receipt-n",-563945750));
var on_tx_receipt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41392__$1,new cljs.core.Keyword(null,"on-tx-receipt","on-tx-receipt",280949197));
var on_tx_success_n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41392__$1,new cljs.core.Keyword(null,"on-tx-success-n","on-tx-success-n",-1316147475));
var on_tx_error_n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41392__$1,new cljs.core.Keyword(null,"on-tx-error-n","on-tx-error-n",2086396560));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41392__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return (function (err){
if(cljs.core.truth_(err)){
return null;
} else {
return cljs_web3.eth.get_transaction_receipt.cljs$core$IFn$_invoke$arity$variadic(web3,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tx_hash,(function (_,receipt){
if(cljs.core.truth_(new cljs.core.Keyword(null,"block-number","block-number",-935510961).cljs$core$IFn$_invoke$arity$1(receipt))){
district0x.re_frame.web3_fx.stop_listener_BANG_(id);

if(cljs.core.truth_(on_tx_receipt)){
var G__41394_41542 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(on_tx_receipt),receipt);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__41394_41542) : re_frame.core.dispatch.call(null,G__41394_41542));
} else {
}

var pred__41395 = (function (p1__41389_SHARP_,p2__41390_SHARP_){
return cljs.core.contains_QMARK_(p1__41389_SHARP_,p2__41390_SHARP_);
});
var expr__41396 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(receipt);
if(pred__41395(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(0),null,"0x00",null,"0x0",null], null), null),expr__41396)){
if(cljs.core.truth_(on_tx_error)){
var G__41398_41543 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(on_tx_error),receipt);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__41398_41543) : re_frame.core.dispatch.call(null,G__41398_41543));
} else {
}

if(cljs.core.truth_(on_tx_error_n)){
var seq__41399 = cljs.core.seq(on_tx_error_n);
var chunk__41400 = null;
var count__41401 = (0);
var i__41402 = (0);
while(true){
if((i__41402 < count__41401)){
var callback = chunk__41400.cljs$core$IIndexed$_nth$arity$2(null,i__41402);
var G__41405_41544 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(callback),receipt);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__41405_41544) : re_frame.core.dispatch.call(null,G__41405_41544));


var G__41545 = seq__41399;
var G__41546 = chunk__41400;
var G__41547 = count__41401;
var G__41548 = (i__41402 + (1));
seq__41399 = G__41545;
chunk__41400 = G__41546;
count__41401 = G__41547;
i__41402 = G__41548;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41399);
if(temp__5735__auto__){
var seq__41399__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41399__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__41399__$1);
var G__41549 = cljs.core.chunk_rest(seq__41399__$1);
var G__41550 = c__4609__auto__;
var G__41551 = cljs.core.count(c__4609__auto__);
var G__41552 = (0);
seq__41399 = G__41549;
chunk__41400 = G__41550;
count__41401 = G__41551;
i__41402 = G__41552;
continue;
} else {
var callback = cljs.core.first(seq__41399__$1);
var G__41406_41553 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(callback),receipt);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__41406_41553) : re_frame.core.dispatch.call(null,G__41406_41553));


var G__41554 = cljs.core.next(seq__41399__$1);
var G__41555 = null;
var G__41556 = (0);
var G__41557 = (0);
seq__41399 = G__41554;
chunk__41400 = G__41555;
count__41401 = G__41556;
i__41402 = G__41557;
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
if(pred__41395(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,"0x1",null,"0x01",null], null), null),expr__41396)){
if(cljs.core.truth_(on_tx_success)){
var G__41407_41558 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(on_tx_success),receipt);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__41407_41558) : re_frame.core.dispatch.call(null,G__41407_41558));
} else {
}

if(cljs.core.truth_(on_tx_success_n)){
var seq__41408 = cljs.core.seq(on_tx_success_n);
var chunk__41409 = null;
var count__41410 = (0);
var i__41411 = (0);
while(true){
if((i__41411 < count__41410)){
var callback = chunk__41409.cljs$core$IIndexed$_nth$arity$2(null,i__41411);
var G__41414_41559 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(callback),receipt);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__41414_41559) : re_frame.core.dispatch.call(null,G__41414_41559));


var G__41560 = seq__41408;
var G__41561 = chunk__41409;
var G__41562 = count__41410;
var G__41563 = (i__41411 + (1));
seq__41408 = G__41560;
chunk__41409 = G__41561;
count__41410 = G__41562;
i__41411 = G__41563;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41408);
if(temp__5735__auto__){
var seq__41408__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41408__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__41408__$1);
var G__41564 = cljs.core.chunk_rest(seq__41408__$1);
var G__41565 = c__4609__auto__;
var G__41566 = cljs.core.count(c__4609__auto__);
var G__41567 = (0);
seq__41408 = G__41564;
chunk__41409 = G__41565;
count__41410 = G__41566;
i__41411 = G__41567;
continue;
} else {
var callback = cljs.core.first(seq__41408__$1);
var G__41415_41568 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(callback),receipt);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__41415_41568) : re_frame.core.dispatch.call(null,G__41415_41568));


var G__41569 = cljs.core.next(seq__41408__$1);
var G__41570 = null;
var G__41571 = (0);
var G__41572 = (0);
seq__41408 = G__41569;
chunk__41409 = G__41570;
count__41410 = G__41571;
i__41411 = G__41572;
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__41396)].join('')));
}
}
} else {
return null;
}
})], 0));
}
});
});
district0x.re_frame.web3_fx.contract_state_call_callback = (function district0x$re_frame$web3_fx$contract_state_call_callback(p__41416){
var map__41417 = p__41416;
var map__41417__$1 = (((((!((map__41417 == null))))?(((((map__41417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41417.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41417):map__41417);
var on_tx_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41417__$1,new cljs.core.Keyword(null,"on-tx-error","on-tx-error",1904038852));
var on_tx_hash_error_n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41417__$1,new cljs.core.Keyword(null,"on-tx-hash-error-n","on-tx-hash-error-n",369462502));
var on_tx_hash_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41417__$1,new cljs.core.Keyword(null,"on-tx-hash-error","on-tx-hash-error",-161520922));
var web3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41417__$1,new cljs.core.Keyword(null,"web3","web3",-879451640));
var on_tx_hash_n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41417__$1,new cljs.core.Keyword(null,"on-tx-hash-n","on-tx-hash-n",-1946600856));
var on_tx_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41417__$1,new cljs.core.Keyword(null,"on-tx-success","on-tx-success",1626127272));
var on_tx_receipt_n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41417__$1,new cljs.core.Keyword(null,"on-tx-receipt-n","on-tx-receipt-n",-563945750));
var on_tx_receipt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41417__$1,new cljs.core.Keyword(null,"on-tx-receipt","on-tx-receipt",280949197));
var on_tx_success_n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41417__$1,new cljs.core.Keyword(null,"on-tx-success-n","on-tx-success-n",-1316147475));
var on_tx_hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41417__$1,new cljs.core.Keyword(null,"on-tx-hash","on-tx-hash",-1483327666));
var on_tx_error_n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41417__$1,new cljs.core.Keyword(null,"on-tx-error-n","on-tx-error-n",2086396560));
return (function (err,tx_hash){
if(cljs.core.truth_(err)){
if(cljs.core.truth_(on_tx_hash_error)){
var G__41419_41573 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(on_tx_hash_error),err);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__41419_41573) : re_frame.core.dispatch.call(null,G__41419_41573));
} else {
}

if(cljs.core.truth_(on_tx_hash_error_n)){
var seq__41420 = cljs.core.seq(on_tx_hash_error_n);
var chunk__41421 = null;
var count__41422 = (0);
var i__41423 = (0);
while(true){
if((i__41423 < count__41422)){
var callback = chunk__41421.cljs$core$IIndexed$_nth$arity$2(null,i__41423);
var G__41426_41574 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(callback),err);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__41426_41574) : re_frame.core.dispatch.call(null,G__41426_41574));


var G__41575 = seq__41420;
var G__41576 = chunk__41421;
var G__41577 = count__41422;
var G__41578 = (i__41423 + (1));
seq__41420 = G__41575;
chunk__41421 = G__41576;
count__41422 = G__41577;
i__41423 = G__41578;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41420);
if(temp__5735__auto__){
var seq__41420__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41420__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__41420__$1);
var G__41579 = cljs.core.chunk_rest(seq__41420__$1);
var G__41580 = c__4609__auto__;
var G__41581 = cljs.core.count(c__4609__auto__);
var G__41582 = (0);
seq__41420 = G__41579;
chunk__41421 = G__41580;
count__41422 = G__41581;
i__41423 = G__41582;
continue;
} else {
var callback = cljs.core.first(seq__41420__$1);
var G__41427_41583 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(callback),err);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__41427_41583) : re_frame.core.dispatch.call(null,G__41427_41583));


var G__41584 = cljs.core.next(seq__41420__$1);
var G__41585 = null;
var G__41586 = (0);
var G__41587 = (0);
seq__41420 = G__41584;
chunk__41421 = G__41585;
count__41422 = G__41586;
i__41423 = G__41587;
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
if(cljs.core.truth_(on_tx_hash)){
var G__41428_41588 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(on_tx_hash),tx_hash);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__41428_41588) : re_frame.core.dispatch.call(null,G__41428_41588));
} else {
}

if(cljs.core.truth_(on_tx_hash_n)){
var seq__41429_41589 = cljs.core.seq(on_tx_hash_n);
var chunk__41430_41590 = null;
var count__41431_41591 = (0);
var i__41432_41592 = (0);
while(true){
if((i__41432_41592 < count__41431_41591)){
var callback_41593 = chunk__41430_41590.cljs$core$IIndexed$_nth$arity$2(null,i__41432_41592);
var G__41435_41594 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(callback_41593),tx_hash);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__41435_41594) : re_frame.core.dispatch.call(null,G__41435_41594));


var G__41595 = seq__41429_41589;
var G__41596 = chunk__41430_41590;
var G__41597 = count__41431_41591;
var G__41598 = (i__41432_41592 + (1));
seq__41429_41589 = G__41595;
chunk__41430_41590 = G__41596;
count__41431_41591 = G__41597;
i__41432_41592 = G__41598;
continue;
} else {
var temp__5735__auto___41599 = cljs.core.seq(seq__41429_41589);
if(temp__5735__auto___41599){
var seq__41429_41600__$1 = temp__5735__auto___41599;
if(cljs.core.chunked_seq_QMARK_(seq__41429_41600__$1)){
var c__4609__auto___41601 = cljs.core.chunk_first(seq__41429_41600__$1);
var G__41602 = cljs.core.chunk_rest(seq__41429_41600__$1);
var G__41603 = c__4609__auto___41601;
var G__41604 = cljs.core.count(c__4609__auto___41601);
var G__41605 = (0);
seq__41429_41589 = G__41602;
chunk__41430_41590 = G__41603;
count__41431_41591 = G__41604;
i__41432_41592 = G__41605;
continue;
} else {
var callback_41606 = cljs.core.first(seq__41429_41600__$1);
var G__41436_41607 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(callback_41606),tx_hash);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__41436_41607) : re_frame.core.dispatch.call(null,G__41436_41607));


var G__41608 = cljs.core.next(seq__41429_41600__$1);
var G__41609 = null;
var G__41610 = (0);
var G__41611 = (0);
seq__41429_41589 = G__41608;
chunk__41430_41590 = G__41609;
count__41431_41591 = G__41610;
i__41432_41592 = G__41611;
continue;
}
} else {
}
}
break;
}
} else {
}

var listener_id = cljs.core.rand.cljs$core$IFn$_invoke$arity$1((9999999));
return district0x.re_frame.web3_fx.start_listener_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"web3","web3",-879451640),web3,new cljs.core.Keyword(null,"id","id",-1388402092),listener_id,new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672),"latest",new cljs.core.Keyword(null,"callback","callback",-705136228),district0x.re_frame.web3_fx.dispatch_on_tx_receipt_fn(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-tx-error","on-tx-error",1904038852),new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),new cljs.core.Keyword(null,"web3","web3",-879451640),new cljs.core.Keyword(null,"on-tx-success","on-tx-success",1626127272),new cljs.core.Keyword(null,"on-tx-receipt-n","on-tx-receipt-n",-563945750),new cljs.core.Keyword(null,"on-tx-receipt","on-tx-receipt",280949197),new cljs.core.Keyword(null,"on-tx-success-n","on-tx-success-n",-1316147475),new cljs.core.Keyword(null,"on-tx-error-n","on-tx-error-n",2086396560),new cljs.core.Keyword(null,"id","id",-1388402092)],[on_tx_error,tx_hash,web3,on_tx_success,on_tx_receipt_n,on_tx_receipt,on_tx_success_n,on_tx_error_n,listener_id]))], null));
}
});
});
var G__41437_41612 = new cljs.core.Keyword("web3","watch-events","web3/watch-events",-1449844963);
var G__41438_41613 = (function (p__41439){
var map__41440 = p__41439;
var map__41440__$1 = (((((!((map__41440 == null))))?(((((map__41440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41440.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41440):map__41440);
var params = map__41440__$1;
var events = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41440__$1,new cljs.core.Keyword(null,"events","events",1792552201));
if(cljs.core.truth_(cljs.spec.alpha._STAR_compile_asserts_STAR_)){
if(cljs.core.truth_(cljs.core.deref(new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},new cljs.core.Symbol("cljs.spec.alpha","*runtime-asserts*","cljs.spec.alpha/*runtime-asserts*",-1060443587,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"*runtime-asserts*","*runtime-asserts*",1632801956,null),"cljs/spec/alpha.cljs",(20),(1),true,(1477),(1479),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]))))){
cljs.spec.alpha.assert_STAR_(new cljs.core.Keyword("district0x.re-frame.web3-fx","watch-events","district0x.re-frame.web3-fx/watch-events",-1055414721),params);
} else {
}
} else {
}

var seq__41442 = cljs.core.seq(events);
var chunk__41443 = null;
var count__41444 = (0);
var i__41445 = (0);
while(true){
if((i__41445 < count__41444)){
var map__41450 = chunk__41443.cljs$core$IIndexed$_nth$arity$2(null,i__41445);
var map__41450__$1 = (((((!((map__41450 == null))))?(((((map__41450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41450.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41450):map__41450);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41450__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41450__$1,new cljs.core.Keyword(null,"instance","instance",-2121349050));
var block_filter_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41450__$1,new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672));
var event_filter_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41450__$1,new cljs.core.Keyword(null,"event-filter-opts","event-filter-opts",2125928439));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41450__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41450__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41450__$1,new cljs.core.Keyword(null,"event","event",301435442));
district0x.re_frame.web3_fx.start_event_listener_BANG_(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"instance","instance",-2121349050),instance,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"event-filter-opts","event-filter-opts",2125928439),event_filter_opts,new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672),block_filter_opts,new cljs.core.Keyword(null,"callback","callback",-705136228),district0x.re_frame.web3_fx.contract_event_dispach_fn(on_success,on_error)], null));


var G__41614 = seq__41442;
var G__41615 = chunk__41443;
var G__41616 = count__41444;
var G__41617 = (i__41445 + (1));
seq__41442 = G__41614;
chunk__41443 = G__41615;
count__41444 = G__41616;
i__41445 = G__41617;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41442);
if(temp__5735__auto__){
var seq__41442__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41442__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__41442__$1);
var G__41618 = cljs.core.chunk_rest(seq__41442__$1);
var G__41619 = c__4609__auto__;
var G__41620 = cljs.core.count(c__4609__auto__);
var G__41621 = (0);
seq__41442 = G__41618;
chunk__41443 = G__41619;
count__41444 = G__41620;
i__41445 = G__41621;
continue;
} else {
var map__41452 = cljs.core.first(seq__41442__$1);
var map__41452__$1 = (((((!((map__41452 == null))))?(((((map__41452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41452.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41452):map__41452);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41452__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41452__$1,new cljs.core.Keyword(null,"instance","instance",-2121349050));
var block_filter_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41452__$1,new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672));
var event_filter_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41452__$1,new cljs.core.Keyword(null,"event-filter-opts","event-filter-opts",2125928439));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41452__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41452__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41452__$1,new cljs.core.Keyword(null,"event","event",301435442));
district0x.re_frame.web3_fx.start_event_listener_BANG_(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"instance","instance",-2121349050),instance,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"event-filter-opts","event-filter-opts",2125928439),event_filter_opts,new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672),block_filter_opts,new cljs.core.Keyword(null,"callback","callback",-705136228),district0x.re_frame.web3_fx.contract_event_dispach_fn(on_success,on_error)], null));


var G__41622 = cljs.core.next(seq__41442__$1);
var G__41623 = null;
var G__41624 = (0);
var G__41625 = (0);
seq__41442 = G__41622;
chunk__41443 = G__41623;
count__41444 = G__41624;
i__41445 = G__41625;
continue;
}
} else {
return null;
}
}
break;
}
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__41437_41612,G__41438_41613) : re_frame.core.reg_fx.call(null,G__41437_41612,G__41438_41613));
var G__41454_41626 = new cljs.core.Keyword("web3","watch-transactions","web3/watch-transactions",-1296047084);
var G__41455_41627 = (function (p__41456){
var map__41457 = p__41456;
var map__41457__$1 = (((((!((map__41457 == null))))?(((((map__41457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41457.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41457):map__41457);
var params = map__41457__$1;
var web3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41457__$1,new cljs.core.Keyword(null,"web3","web3",-879451640));
var transactions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41457__$1,new cljs.core.Keyword(null,"transactions","transactions",-1425846118));
if(cljs.core.truth_(cljs.spec.alpha._STAR_compile_asserts_STAR_)){
if(cljs.core.truth_(cljs.core.deref(new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},new cljs.core.Symbol("cljs.spec.alpha","*runtime-asserts*","cljs.spec.alpha/*runtime-asserts*",-1060443587,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"*runtime-asserts*","*runtime-asserts*",1632801956,null),"cljs/spec/alpha.cljs",(20),(1),true,(1477),(1479),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]))))){
cljs.spec.alpha.assert_STAR_(new cljs.core.Keyword("district0x.re-frame.web3-fx","watch-transactions","district0x.re-frame.web3-fx/watch-transactions",-1867553294),params);
} else {
}
} else {
}

var seq__41459 = cljs.core.seq(transactions);
var chunk__41460 = null;
var count__41461 = (0);
var i__41462 = (0);
while(true){
if((i__41462 < count__41461)){
var map__41467 = chunk__41460.cljs$core$IIndexed$_nth$arity$2(null,i__41462);
var map__41467__$1 = (((((!((map__41467 == null))))?(((((map__41467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41467.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41467):map__41467);
var tx_hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41467__$1,new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200));
var on_tx_receipt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41467__$1,new cljs.core.Keyword(null,"on-tx-receipt","on-tx-receipt",280949197));
var on_tx_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41467__$1,new cljs.core.Keyword(null,"on-tx-success","on-tx-success",1626127272));
var on_tx_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41467__$1,new cljs.core.Keyword(null,"on-tx-error","on-tx-error",1904038852));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41467__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var listener_id_41628 = (function (){var or__4185__auto__ = id;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.rand.cljs$core$IFn$_invoke$arity$1((9999999));
}
})();
district0x.re_frame.web3_fx.start_listener_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"web3","web3",-879451640),web3,new cljs.core.Keyword(null,"id","id",-1388402092),listener_id_41628,new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672),"latest",new cljs.core.Keyword(null,"callback","callback",-705136228),district0x.re_frame.web3_fx.dispatch_on_tx_receipt_fn(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),listener_id_41628,new cljs.core.Keyword(null,"on-tx-receipt","on-tx-receipt",280949197),on_tx_receipt,new cljs.core.Keyword(null,"on-tx-success","on-tx-success",1626127272),on_tx_success,new cljs.core.Keyword(null,"on-tx-error","on-tx-error",1904038852),on_tx_error,new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),tx_hash,new cljs.core.Keyword(null,"web3","web3",-879451640),web3], null))], null));


var G__41629 = seq__41459;
var G__41630 = chunk__41460;
var G__41631 = count__41461;
var G__41632 = (i__41462 + (1));
seq__41459 = G__41629;
chunk__41460 = G__41630;
count__41461 = G__41631;
i__41462 = G__41632;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41459);
if(temp__5735__auto__){
var seq__41459__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41459__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__41459__$1);
var G__41633 = cljs.core.chunk_rest(seq__41459__$1);
var G__41634 = c__4609__auto__;
var G__41635 = cljs.core.count(c__4609__auto__);
var G__41636 = (0);
seq__41459 = G__41633;
chunk__41460 = G__41634;
count__41461 = G__41635;
i__41462 = G__41636;
continue;
} else {
var map__41469 = cljs.core.first(seq__41459__$1);
var map__41469__$1 = (((((!((map__41469 == null))))?(((((map__41469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41469.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41469):map__41469);
var tx_hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41469__$1,new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200));
var on_tx_receipt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41469__$1,new cljs.core.Keyword(null,"on-tx-receipt","on-tx-receipt",280949197));
var on_tx_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41469__$1,new cljs.core.Keyword(null,"on-tx-success","on-tx-success",1626127272));
var on_tx_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41469__$1,new cljs.core.Keyword(null,"on-tx-error","on-tx-error",1904038852));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41469__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var listener_id_41637 = (function (){var or__4185__auto__ = id;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.rand.cljs$core$IFn$_invoke$arity$1((9999999));
}
})();
district0x.re_frame.web3_fx.start_listener_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"web3","web3",-879451640),web3,new cljs.core.Keyword(null,"id","id",-1388402092),listener_id_41637,new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672),"latest",new cljs.core.Keyword(null,"callback","callback",-705136228),district0x.re_frame.web3_fx.dispatch_on_tx_receipt_fn(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),listener_id_41637,new cljs.core.Keyword(null,"on-tx-receipt","on-tx-receipt",280949197),on_tx_receipt,new cljs.core.Keyword(null,"on-tx-success","on-tx-success",1626127272),on_tx_success,new cljs.core.Keyword(null,"on-tx-error","on-tx-error",1904038852),on_tx_error,new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),tx_hash,new cljs.core.Keyword(null,"web3","web3",-879451640),web3], null))], null));


var G__41638 = cljs.core.next(seq__41459__$1);
var G__41639 = null;
var G__41640 = (0);
var G__41641 = (0);
seq__41459 = G__41638;
chunk__41460 = G__41639;
count__41461 = G__41640;
i__41462 = G__41641;
continue;
}
} else {
return null;
}
}
break;
}
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__41454_41626,G__41455_41627) : re_frame.core.reg_fx.call(null,G__41454_41626,G__41455_41627));
var G__41471_41642 = new cljs.core.Keyword("web3","call","web3/call",-479653525);
var G__41472_41643 = (function (p__41473){
var map__41474 = p__41473;
var map__41474__$1 = (((((!((map__41474 == null))))?(((((map__41474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41474.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41474):map__41474);
var params = map__41474__$1;
var web3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41474__$1,new cljs.core.Keyword(null,"web3","web3",-879451640));
var fns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41474__$1,new cljs.core.Keyword(null,"fns","fns",1185138786));
if(cljs.core.truth_(cljs.spec.alpha._STAR_compile_asserts_STAR_)){
if(cljs.core.truth_(cljs.core.deref(new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},new cljs.core.Symbol("cljs.spec.alpha","*runtime-asserts*","cljs.spec.alpha/*runtime-asserts*",-1060443587,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"*runtime-asserts*","*runtime-asserts*",1632801956,null),"cljs/spec/alpha.cljs",(20),(1),true,(1477),(1479),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]))))){
cljs.spec.alpha.assert_STAR_(new cljs.core.Keyword("district0x.re-frame.web3-fx","call","district0x.re-frame.web3-fx/call",-644577399),params);
} else {
}
} else {
}

var seq__41476 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,fns));
var chunk__41477 = null;
var count__41478 = (0);
var i__41479 = (0);
while(true){
if((i__41479 < count__41478)){
var map__41484 = chunk__41477.cljs$core$IIndexed$_nth$arity$2(null,i__41479);
var map__41484__$1 = (((((!((map__41484 == null))))?(((((map__41484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41484.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41484):map__41484);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41484__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var tx_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41484__$1,new cljs.core.Keyword(null,"tx-opts","tx-opts",1753016225));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41484__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var on_tx_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41484__$1,new cljs.core.Keyword(null,"on-tx-error","on-tx-error",1904038852));
var instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41484__$1,new cljs.core.Keyword(null,"instance","instance",-2121349050));
var on_tx_hash_error_n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41484__$1,new cljs.core.Keyword(null,"on-tx-hash-error-n","on-tx-hash-error-n",369462502));
var on_tx_hash_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41484__$1,new cljs.core.Keyword(null,"on-tx-hash-error","on-tx-hash-error",-161520922));
var on_tx_hash_n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41484__$1,new cljs.core.Keyword(null,"on-tx-hash-n","on-tx-hash-n",-1946600856));
var on_tx_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41484__$1,new cljs.core.Keyword(null,"on-tx-success","on-tx-success",1626127272));
var on_tx_receipt_n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41484__$1,new cljs.core.Keyword(null,"on-tx-receipt-n","on-tx-receipt-n",-563945750));
var on_tx_receipt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41484__$1,new cljs.core.Keyword(null,"on-tx-receipt","on-tx-receipt",280949197));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41484__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_tx_success_n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41484__$1,new cljs.core.Keyword(null,"on-tx-success-n","on-tx-success-n",-1316147475));
var on_tx_hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41484__$1,new cljs.core.Keyword(null,"on-tx-hash","on-tx-hash",-1483327666));
var on_tx_error_n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41484__$1,new cljs.core.Keyword(null,"on-tx-error-n","on-tx-error-n",2086396560));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41484__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
if(cljs.core.truth_(instance)){
if(cljs.core.truth_(tx_opts)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs_web3.eth.contract_call,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instance,fn], null),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx_opts], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [district0x.re_frame.web3_fx.contract_state_call_callback(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-tx-error","on-tx-error",1904038852),new cljs.core.Keyword(null,"on-tx-hash-error-n","on-tx-hash-error-n",369462502),new cljs.core.Keyword(null,"on-tx-hash-error","on-tx-hash-error",-161520922),new cljs.core.Keyword(null,"web3","web3",-879451640),new cljs.core.Keyword(null,"on-tx-hash-n","on-tx-hash-n",-1946600856),new cljs.core.Keyword(null,"on-tx-success","on-tx-success",1626127272),new cljs.core.Keyword(null,"on-tx-receipt-n","on-tx-receipt-n",-563945750),new cljs.core.Keyword(null,"on-tx-receipt","on-tx-receipt",280949197),new cljs.core.Keyword(null,"on-tx-success-n","on-tx-success-n",-1316147475),new cljs.core.Keyword(null,"on-tx-hash","on-tx-hash",-1483327666),new cljs.core.Keyword(null,"on-tx-error-n","on-tx-error-n",2086396560)],[on_tx_error,on_tx_hash_error_n,on_tx_hash_error,web3,on_tx_hash_n,on_tx_success,on_tx_receipt_n,on_tx_receipt,on_tx_success_n,on_tx_hash,on_tx_error_n]))], null)], 0)));
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs_web3.eth.contract_call,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instance,fn], null),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [district0x.re_frame.web3_fx.dispach_fn(on_success,on_error)], null)], 0)));
}
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(fn,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [web3], null),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [district0x.re_frame.web3_fx.dispach_fn(on_success,on_error)], null)], 0)));
}


var G__41644 = seq__41476;
var G__41645 = chunk__41477;
var G__41646 = count__41478;
var G__41647 = (i__41479 + (1));
seq__41476 = G__41644;
chunk__41477 = G__41645;
count__41478 = G__41646;
i__41479 = G__41647;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41476);
if(temp__5735__auto__){
var seq__41476__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41476__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__41476__$1);
var G__41648 = cljs.core.chunk_rest(seq__41476__$1);
var G__41649 = c__4609__auto__;
var G__41650 = cljs.core.count(c__4609__auto__);
var G__41651 = (0);
seq__41476 = G__41648;
chunk__41477 = G__41649;
count__41478 = G__41650;
i__41479 = G__41651;
continue;
} else {
var map__41486 = cljs.core.first(seq__41476__$1);
var map__41486__$1 = (((((!((map__41486 == null))))?(((((map__41486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41486.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41486):map__41486);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41486__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var tx_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41486__$1,new cljs.core.Keyword(null,"tx-opts","tx-opts",1753016225));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41486__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var on_tx_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41486__$1,new cljs.core.Keyword(null,"on-tx-error","on-tx-error",1904038852));
var instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41486__$1,new cljs.core.Keyword(null,"instance","instance",-2121349050));
var on_tx_hash_error_n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41486__$1,new cljs.core.Keyword(null,"on-tx-hash-error-n","on-tx-hash-error-n",369462502));
var on_tx_hash_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41486__$1,new cljs.core.Keyword(null,"on-tx-hash-error","on-tx-hash-error",-161520922));
var on_tx_hash_n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41486__$1,new cljs.core.Keyword(null,"on-tx-hash-n","on-tx-hash-n",-1946600856));
var on_tx_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41486__$1,new cljs.core.Keyword(null,"on-tx-success","on-tx-success",1626127272));
var on_tx_receipt_n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41486__$1,new cljs.core.Keyword(null,"on-tx-receipt-n","on-tx-receipt-n",-563945750));
var on_tx_receipt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41486__$1,new cljs.core.Keyword(null,"on-tx-receipt","on-tx-receipt",280949197));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41486__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_tx_success_n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41486__$1,new cljs.core.Keyword(null,"on-tx-success-n","on-tx-success-n",-1316147475));
var on_tx_hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41486__$1,new cljs.core.Keyword(null,"on-tx-hash","on-tx-hash",-1483327666));
var on_tx_error_n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41486__$1,new cljs.core.Keyword(null,"on-tx-error-n","on-tx-error-n",2086396560));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41486__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
if(cljs.core.truth_(instance)){
if(cljs.core.truth_(tx_opts)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs_web3.eth.contract_call,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instance,fn], null),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx_opts], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [district0x.re_frame.web3_fx.contract_state_call_callback(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-tx-error","on-tx-error",1904038852),new cljs.core.Keyword(null,"on-tx-hash-error-n","on-tx-hash-error-n",369462502),new cljs.core.Keyword(null,"on-tx-hash-error","on-tx-hash-error",-161520922),new cljs.core.Keyword(null,"web3","web3",-879451640),new cljs.core.Keyword(null,"on-tx-hash-n","on-tx-hash-n",-1946600856),new cljs.core.Keyword(null,"on-tx-success","on-tx-success",1626127272),new cljs.core.Keyword(null,"on-tx-receipt-n","on-tx-receipt-n",-563945750),new cljs.core.Keyword(null,"on-tx-receipt","on-tx-receipt",280949197),new cljs.core.Keyword(null,"on-tx-success-n","on-tx-success-n",-1316147475),new cljs.core.Keyword(null,"on-tx-hash","on-tx-hash",-1483327666),new cljs.core.Keyword(null,"on-tx-error-n","on-tx-error-n",2086396560)],[on_tx_error,on_tx_hash_error_n,on_tx_hash_error,web3,on_tx_hash_n,on_tx_success,on_tx_receipt_n,on_tx_receipt,on_tx_success_n,on_tx_hash,on_tx_error_n]))], null)], 0)));
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs_web3.eth.contract_call,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instance,fn], null),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [district0x.re_frame.web3_fx.dispach_fn(on_success,on_error)], null)], 0)));
}
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(fn,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [web3], null),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [district0x.re_frame.web3_fx.dispach_fn(on_success,on_error)], null)], 0)));
}


var G__41652 = cljs.core.next(seq__41476__$1);
var G__41653 = null;
var G__41654 = (0);
var G__41655 = (0);
seq__41476 = G__41652;
chunk__41477 = G__41653;
count__41478 = G__41654;
i__41479 = G__41655;
continue;
}
} else {
return null;
}
}
break;
}
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__41471_41642,G__41472_41643) : re_frame.core.reg_fx.call(null,G__41471_41642,G__41472_41643));
var G__41488_41656 = new cljs.core.Keyword("web3","get-balances","web3/get-balances",-152059131);
var G__41489_41657 = (function (p__41490){
var map__41491 = p__41490;
var map__41491__$1 = (((((!((map__41491 == null))))?(((((map__41491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41491.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41491):map__41491);
var params = map__41491__$1;
var addresses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41491__$1,new cljs.core.Keyword(null,"addresses","addresses",-559529694));
var web3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41491__$1,new cljs.core.Keyword(null,"web3","web3",-879451640));
if(cljs.core.truth_(cljs.spec.alpha._STAR_compile_asserts_STAR_)){
if(cljs.core.truth_(cljs.core.deref(new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},new cljs.core.Symbol("cljs.spec.alpha","*runtime-asserts*","cljs.spec.alpha/*runtime-asserts*",-1060443587,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"*runtime-asserts*","*runtime-asserts*",1632801956,null),"cljs/spec/alpha.cljs",(20),(1),true,(1477),(1479),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]))))){
cljs.spec.alpha.assert_STAR_(new cljs.core.Keyword("district0x.re-frame.web3-fx","get-balances","district0x.re-frame.web3-fx/get-balances",1560627875),params);
} else {
}
} else {
}

var seq__41493 = cljs.core.seq(addresses);
var chunk__41494 = null;
var count__41495 = (0);
var i__41496 = (0);
while(true){
if((i__41496 < count__41495)){
var map__41501 = chunk__41494.cljs$core$IIndexed$_nth$arity$2(null,i__41496);
var map__41501__$1 = (((((!((map__41501 == null))))?(((((map__41501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41501):map__41501);
var address = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41501__$1,new cljs.core.Keyword(null,"address","address",559499426));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41501__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41501__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var watch_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41501__$1,new cljs.core.Keyword(null,"watch?","watch?",-1976903168));
var instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41501__$1,new cljs.core.Keyword(null,"instance","instance",-2121349050));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41501__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.not(instance)){
cljs_web3.eth.get_balance.cljs$core$IFn$_invoke$arity$variadic(web3,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([address,district0x.re_frame.web3_fx.dispach_fn(on_success,on_error)], 0));
} else {
cljs_web3.eth.contract_call.cljs$core$IFn$_invoke$arity$variadic(instance,new cljs.core.Keyword(null,"balance-of","balance-of",-1311809266),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([address,district0x.re_frame.web3_fx.dispach_fn(on_success,on_error)], 0));
}

if(cljs.core.truth_((function (){var and__4174__auto__ = watch_QMARK_;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.seq(addresses);
} else {
return and__4174__auto__;
}
})())){
if(cljs.core.not(instance)){
district0x.re_frame.web3_fx.start_listener_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"web3","web3",-879451640),web3,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672),"latest",new cljs.core.Keyword(null,"callback","callback",-705136228),((function (seq__41493,chunk__41494,count__41495,i__41496,map__41501,map__41501__$1,address,on_success,on_error,watch_QMARK_,instance,id,map__41491,map__41491__$1,params,addresses,web3,G__41488_41656){
return (function (err){
if(cljs.core.truth_(err)){
return null;
} else {
return cljs_web3.eth.get_balance.cljs$core$IFn$_invoke$arity$variadic(web3,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([address,district0x.re_frame.web3_fx.dispach_fn(on_success,on_error)], 0));
}
});})(seq__41493,chunk__41494,count__41495,i__41496,map__41501,map__41501__$1,address,on_success,on_error,watch_QMARK_,instance,id,map__41491,map__41491__$1,params,addresses,web3,G__41488_41656))
], null));
} else {
district0x.re_frame.web3_fx.start_event_listener_BANG_(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"instance","instance",-2121349050),instance,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"Transfer","Transfer",1300822108),new cljs.core.Keyword(null,"event-filter-opts","event-filter-opts",2125928439),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),address], null),new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672),"latest",new cljs.core.Keyword(null,"callback","callback",-705136228),((function (seq__41493,chunk__41494,count__41495,i__41496,map__41501,map__41501__$1,address,on_success,on_error,watch_QMARK_,instance,id,map__41491,map__41491__$1,params,addresses,web3,G__41488_41656){
return (function (){
return cljs_web3.eth.contract_call.cljs$core$IFn$_invoke$arity$variadic(instance,new cljs.core.Keyword(null,"balance-of","balance-of",-1311809266),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([address,district0x.re_frame.web3_fx.dispach_fn(on_success,on_error)], 0));
});})(seq__41493,chunk__41494,count__41495,i__41496,map__41501,map__41501__$1,address,on_success,on_error,watch_QMARK_,instance,id,map__41491,map__41491__$1,params,addresses,web3,G__41488_41656))
], null));

district0x.re_frame.web3_fx.start_event_listener_BANG_(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"instance","instance",-2121349050),instance,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"Transfer","Transfer",1300822108),new cljs.core.Keyword(null,"event-filter-opts","event-filter-opts",2125928439),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),address], null),new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672),"latest",new cljs.core.Keyword(null,"callback","callback",-705136228),((function (seq__41493,chunk__41494,count__41495,i__41496,map__41501,map__41501__$1,address,on_success,on_error,watch_QMARK_,instance,id,map__41491,map__41491__$1,params,addresses,web3,G__41488_41656){
return (function (){
return cljs_web3.eth.contract_call.cljs$core$IFn$_invoke$arity$variadic(instance,new cljs.core.Keyword(null,"balance-of","balance-of",-1311809266),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([address,district0x.re_frame.web3_fx.dispach_fn(on_success,on_error)], 0));
});})(seq__41493,chunk__41494,count__41495,i__41496,map__41501,map__41501__$1,address,on_success,on_error,watch_QMARK_,instance,id,map__41491,map__41491__$1,params,addresses,web3,G__41488_41656))
], null));
}
} else {
}


var G__41658 = seq__41493;
var G__41659 = chunk__41494;
var G__41660 = count__41495;
var G__41661 = (i__41496 + (1));
seq__41493 = G__41658;
chunk__41494 = G__41659;
count__41495 = G__41660;
i__41496 = G__41661;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41493);
if(temp__5735__auto__){
var seq__41493__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41493__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__41493__$1);
var G__41662 = cljs.core.chunk_rest(seq__41493__$1);
var G__41663 = c__4609__auto__;
var G__41664 = cljs.core.count(c__4609__auto__);
var G__41665 = (0);
seq__41493 = G__41662;
chunk__41494 = G__41663;
count__41495 = G__41664;
i__41496 = G__41665;
continue;
} else {
var map__41503 = cljs.core.first(seq__41493__$1);
var map__41503__$1 = (((((!((map__41503 == null))))?(((((map__41503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41503.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41503):map__41503);
var address = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41503__$1,new cljs.core.Keyword(null,"address","address",559499426));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41503__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41503__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var watch_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41503__$1,new cljs.core.Keyword(null,"watch?","watch?",-1976903168));
var instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41503__$1,new cljs.core.Keyword(null,"instance","instance",-2121349050));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41503__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.not(instance)){
cljs_web3.eth.get_balance.cljs$core$IFn$_invoke$arity$variadic(web3,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([address,district0x.re_frame.web3_fx.dispach_fn(on_success,on_error)], 0));
} else {
cljs_web3.eth.contract_call.cljs$core$IFn$_invoke$arity$variadic(instance,new cljs.core.Keyword(null,"balance-of","balance-of",-1311809266),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([address,district0x.re_frame.web3_fx.dispach_fn(on_success,on_error)], 0));
}

if(cljs.core.truth_((function (){var and__4174__auto__ = watch_QMARK_;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.seq(addresses);
} else {
return and__4174__auto__;
}
})())){
if(cljs.core.not(instance)){
district0x.re_frame.web3_fx.start_listener_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"web3","web3",-879451640),web3,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672),"latest",new cljs.core.Keyword(null,"callback","callback",-705136228),((function (seq__41493,chunk__41494,count__41495,i__41496,map__41503,map__41503__$1,address,on_success,on_error,watch_QMARK_,instance,id,seq__41493__$1,temp__5735__auto__,map__41491,map__41491__$1,params,addresses,web3,G__41488_41656){
return (function (err){
if(cljs.core.truth_(err)){
return null;
} else {
return cljs_web3.eth.get_balance.cljs$core$IFn$_invoke$arity$variadic(web3,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([address,district0x.re_frame.web3_fx.dispach_fn(on_success,on_error)], 0));
}
});})(seq__41493,chunk__41494,count__41495,i__41496,map__41503,map__41503__$1,address,on_success,on_error,watch_QMARK_,instance,id,seq__41493__$1,temp__5735__auto__,map__41491,map__41491__$1,params,addresses,web3,G__41488_41656))
], null));
} else {
district0x.re_frame.web3_fx.start_event_listener_BANG_(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"instance","instance",-2121349050),instance,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"Transfer","Transfer",1300822108),new cljs.core.Keyword(null,"event-filter-opts","event-filter-opts",2125928439),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),address], null),new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672),"latest",new cljs.core.Keyword(null,"callback","callback",-705136228),((function (seq__41493,chunk__41494,count__41495,i__41496,map__41503,map__41503__$1,address,on_success,on_error,watch_QMARK_,instance,id,seq__41493__$1,temp__5735__auto__,map__41491,map__41491__$1,params,addresses,web3,G__41488_41656){
return (function (){
return cljs_web3.eth.contract_call.cljs$core$IFn$_invoke$arity$variadic(instance,new cljs.core.Keyword(null,"balance-of","balance-of",-1311809266),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([address,district0x.re_frame.web3_fx.dispach_fn(on_success,on_error)], 0));
});})(seq__41493,chunk__41494,count__41495,i__41496,map__41503,map__41503__$1,address,on_success,on_error,watch_QMARK_,instance,id,seq__41493__$1,temp__5735__auto__,map__41491,map__41491__$1,params,addresses,web3,G__41488_41656))
], null));

district0x.re_frame.web3_fx.start_event_listener_BANG_(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"instance","instance",-2121349050),instance,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"Transfer","Transfer",1300822108),new cljs.core.Keyword(null,"event-filter-opts","event-filter-opts",2125928439),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),address], null),new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672),"latest",new cljs.core.Keyword(null,"callback","callback",-705136228),((function (seq__41493,chunk__41494,count__41495,i__41496,map__41503,map__41503__$1,address,on_success,on_error,watch_QMARK_,instance,id,seq__41493__$1,temp__5735__auto__,map__41491,map__41491__$1,params,addresses,web3,G__41488_41656){
return (function (){
return cljs_web3.eth.contract_call.cljs$core$IFn$_invoke$arity$variadic(instance,new cljs.core.Keyword(null,"balance-of","balance-of",-1311809266),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([address,district0x.re_frame.web3_fx.dispach_fn(on_success,on_error)], 0));
});})(seq__41493,chunk__41494,count__41495,i__41496,map__41503,map__41503__$1,address,on_success,on_error,watch_QMARK_,instance,id,seq__41493__$1,temp__5735__auto__,map__41491,map__41491__$1,params,addresses,web3,G__41488_41656))
], null));
}
} else {
}


var G__41666 = cljs.core.next(seq__41493__$1);
var G__41667 = null;
var G__41668 = (0);
var G__41669 = (0);
seq__41493 = G__41666;
chunk__41494 = G__41667;
count__41495 = G__41668;
i__41496 = G__41669;
continue;
}
} else {
return null;
}
}
break;
}
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__41488_41656,G__41489_41657) : re_frame.core.reg_fx.call(null,G__41488_41656,G__41489_41657));
var G__41505_41670 = new cljs.core.Keyword("web3","watch-blocks","web3/watch-blocks",98499474);
var G__41506_41671 = (function (p__41507){
var map__41508 = p__41507;
var map__41508__$1 = (((((!((map__41508 == null))))?(((((map__41508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41508.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41508):map__41508);
var config = map__41508__$1;
var web3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41508__$1,new cljs.core.Keyword(null,"web3","web3",-879451640));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41508__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var block_filter_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41508__$1,new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41508__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41508__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
if(cljs.core.truth_(cljs.spec.alpha._STAR_compile_asserts_STAR_)){
if(cljs.core.truth_(cljs.core.deref(new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},new cljs.core.Symbol("cljs.spec.alpha","*runtime-asserts*","cljs.spec.alpha/*runtime-asserts*",-1060443587,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"*runtime-asserts*","*runtime-asserts*",1632801956,null),"cljs/spec/alpha.cljs",(20),(1),true,(1477),(1479),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]))))){
cljs.spec.alpha.assert_STAR_(new cljs.core.Keyword("district0x.re-frame.web3-fx","listen","district0x.re-frame.web3-fx/listen",-1948149550),config);
} else {
}
} else {
}

return district0x.re_frame.web3_fx.start_listener_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"web3","web3",-879451640),web3,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672),block_filter_opts,new cljs.core.Keyword(null,"callback","callback",-705136228),district0x.re_frame.web3_fx.dispach_fn(on_success,on_error)], null));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__41505_41670,G__41506_41671) : re_frame.core.reg_fx.call(null,G__41505_41670,G__41506_41671));
var G__41510_41672 = new cljs.core.Keyword("web3","stop-watching","web3/stop-watching",-1379727666);
var G__41511_41673 = (function (p__41512){
var map__41513 = p__41512;
var map__41513__$1 = (((((!((map__41513 == null))))?(((((map__41513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41513):map__41513);
var ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41513__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var seq__41515 = cljs.core.seq(ids);
var chunk__41516 = null;
var count__41517 = (0);
var i__41518 = (0);
while(true){
if((i__41518 < count__41517)){
var id = chunk__41516.cljs$core$IIndexed$_nth$arity$2(null,i__41518);
district0x.re_frame.web3_fx.stop_listener_BANG_(id);


var G__41674 = seq__41515;
var G__41675 = chunk__41516;
var G__41676 = count__41517;
var G__41677 = (i__41518 + (1));
seq__41515 = G__41674;
chunk__41516 = G__41675;
count__41517 = G__41676;
i__41518 = G__41677;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41515);
if(temp__5735__auto__){
var seq__41515__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41515__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__41515__$1);
var G__41678 = cljs.core.chunk_rest(seq__41515__$1);
var G__41679 = c__4609__auto__;
var G__41680 = cljs.core.count(c__4609__auto__);
var G__41681 = (0);
seq__41515 = G__41678;
chunk__41516 = G__41679;
count__41517 = G__41680;
i__41518 = G__41681;
continue;
} else {
var id = cljs.core.first(seq__41515__$1);
district0x.re_frame.web3_fx.stop_listener_BANG_(id);


var G__41682 = cljs.core.next(seq__41515__$1);
var G__41683 = null;
var G__41684 = (0);
var G__41685 = (0);
seq__41515 = G__41682;
chunk__41516 = G__41683;
count__41517 = G__41684;
i__41518 = G__41685;
continue;
}
} else {
return null;
}
}
break;
}
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__41510_41672,G__41511_41673) : re_frame.core.reg_fx.call(null,G__41510_41672,G__41511_41673));
var G__41519_41686 = new cljs.core.Keyword("web3","stop-watching-all","web3/stop-watching-all",-2047858581);
var G__41520_41687 = (function (){
var seq__41521 = cljs.core.seq(cljs.core.keys(cljs.core.deref(district0x.re_frame.web3_fx._STAR_listeners_STAR_)));
var chunk__41522 = null;
var count__41523 = (0);
var i__41524 = (0);
while(true){
if((i__41524 < count__41523)){
var id = chunk__41522.cljs$core$IIndexed$_nth$arity$2(null,i__41524);
district0x.re_frame.web3_fx.stop_listener_BANG_(id);


var G__41688 = seq__41521;
var G__41689 = chunk__41522;
var G__41690 = count__41523;
var G__41691 = (i__41524 + (1));
seq__41521 = G__41688;
chunk__41522 = G__41689;
count__41523 = G__41690;
i__41524 = G__41691;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41521);
if(temp__5735__auto__){
var seq__41521__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41521__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__41521__$1);
var G__41692 = cljs.core.chunk_rest(seq__41521__$1);
var G__41693 = c__4609__auto__;
var G__41694 = cljs.core.count(c__4609__auto__);
var G__41695 = (0);
seq__41521 = G__41692;
chunk__41522 = G__41693;
count__41523 = G__41694;
i__41524 = G__41695;
continue;
} else {
var id = cljs.core.first(seq__41521__$1);
district0x.re_frame.web3_fx.stop_listener_BANG_(id);


var G__41696 = cljs.core.next(seq__41521__$1);
var G__41697 = null;
var G__41698 = (0);
var G__41699 = (0);
seq__41521 = G__41696;
chunk__41522 = G__41697;
count__41523 = G__41698;
i__41524 = G__41699;
continue;
}
} else {
return null;
}
}
break;
}
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__41519_41686,G__41520_41687) : re_frame.core.reg_fx.call(null,G__41519_41686,G__41520_41687));

//# sourceMappingURL=district0x.re_frame.web3_fx.js.map
