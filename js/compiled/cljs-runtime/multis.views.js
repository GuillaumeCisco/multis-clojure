goog.provide('multis.views');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('cljs.core.async');
goog.require('multis.subs');
goog.require('multis.events');
goog.require('multis.styles');
goog.require('cljsjs.web3');
goog.require('cljs_web3.core');
goog.require('cljs_web3.eth');
goog.require('bignumber.core');
goog.require('promesa.core');
goog.require('re_frame_forms.core');
goog.require('re_frame_forms.input');
goog.require('re_frame_forms.coerce');
goog.require('multis.timestampSchedulerABI');
/**
 * calc Endowment
 */
multis.views.calcEndowment = (function multis$views$calcEndowment(callGas,callValue,gasPrice,fee,bounty){
return ((((bignumber.core.number(bounty) + bignumber.core.number(fee)) + (bignumber.core.number(callGas) * gasPrice)) + (bignumber.core.number(gasPrice) * (180000))) + bignumber.core.number(callValue));
});
multis.views.sleep = (function multis$views$sleep(f,ms){
return setTimeout(f,ms);
});
/**
 * txReceiptAsync
 */
multis.views.txReceiptAsync = (function multis$views$txReceiptAsync(web3,txHash,resolve,reject){
return web3.eth.getTransactionReceipt(txHash,(function (err,receipt){
console.log("receipt:",receipt);

if(cljs.core.truth_(err)){
return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(err) : reject.call(null,err));
} else {
if((receipt == null)){
return multis.views.sleep((function (){
return (multis.views.txReceiptAsync.cljs$core$IFn$_invoke$arity$4 ? multis.views.txReceiptAsync.cljs$core$IFn$_invoke$arity$4(web3,txHash,resolve,reject) : multis.views.txReceiptAsync.call(null,web3,txHash,resolve,reject));
}),(500));
} else {
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(receipt) : resolve.call(null,receipt));
}
}
}));
});
/**
 * waitForTransactionToBeMined
 */
multis.views.waitForTransactionToBeMined = (function multis$views$waitForTransactionToBeMined(web3,txHash){
return promesa.core.create.cljs$core$IFn$_invoke$arity$1((function (resolve,reject){
return multis.views.txReceiptAsync(web3,txHash,resolve,reject);
}));
});
/**
 * sendDelayedTransaction
 */
multis.views.sendDelayedTransaction = (function multis$views$sendDelayedTransaction(amount,h,toAddress){
multis.views.sender = cljs.core.deref((function (){var G__45667 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sender","sender",1557303285)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45667) : re_frame.core.subscribe.call(null,G__45667));
})());

multis.views.web3 = (function (){var or__4185__auto__ = (window["web3"]);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.truth_(goog.DEBUG)){
return cljs_web3.core.web3();
} else {
return cljs_web3.core.create_web3.cljs$core$IFn$_invoke$arity$1("https://morden.infura.io/metamask");
}
}
})();

multis.views.tSchedulerAddress = "0x44b28e47fe781eabf8095a2a21449a82a635745b";

multis.views.timestampScheduler = cljs_web3.eth.contract_at.cljs$core$IFn$_invoke$arity$variadic(multis.views.web3,multis.timestampSchedulerABI.TimestampSchedulerABI,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([multis.views.tSchedulerAddress], 0));

multis.views.callValue = multis.views.web3.toWei(amount,"ether");

multis.views.windowSize = ((15) * (60));

multis.views.windowStart = ((new Date()).getTime() + (((h * (60)) * (60)) * (1000)));

multis.views.callGas = "21000";

multis.views.gasPrice = multis.views.web3.toWei("10","gwei");

multis.views.fee = multis.views.web3.toWei("0","finney");

multis.views.bounty = multis.views.web3.toWei("0.01","ether");

multis.views.requiredDeposit = multis.views.web3.toWei("0","finney");

multis.views.endowment = multis.views.calcEndowment(multis.views.callGas,multis.views.callValue,multis.views.gasPrice,multis.views.fee,multis.views.bounty);

return multis.views.timestampScheduler.schedule(toAddress,"",[multis.views.callGas,multis.views.callValue,multis.views.windowSize,multis.views.windowStart,multis.views.gasPrice,multis.views.fee,multis.views.bounty,multis.views.requiredDeposit],({"from": multis.views.sender, "gas": (30000), "gasPrice": null, "value": multis.views.endowment}),(function (err,txHash){
if(cljs.core.truth_(err)){
var G__45668 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"submitted","submitted",-131658962),false], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45668) : re_frame.core.dispatch.call(null,G__45668));
} else {
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(multis.views.waitForTransactionToBeMined(multis.views.web3,txHash),(function (result){
var G__45669_45682 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transaction-validated","transaction-validated",1319497774),result], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45669_45682) : re_frame.core.dispatch.call(null,G__45669_45682));

var G__45670 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"submitted","submitted",-131658962),false], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45670) : re_frame.core.dispatch.call(null,G__45670));
})),(function (error){
var G__45671_45684 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transaction-failed","transaction-failed",-1725711267),error], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45671_45684) : re_frame.core.dispatch.call(null,G__45671_45684));

var G__45672 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"submitted","submitted",-131658962),false], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45672) : re_frame.core.dispatch.call(null,G__45672));
}));
}
}));
});
if((typeof ethereum !== 'undefined')){
promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(ethereum.enable(),(function (v){
var G__45673 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ethereum-init","ethereum-init",-237090611),v], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45673) : re_frame.core.dispatch.call(null,G__45673));
})),(function (v){
var G__45674 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ethereum-error","ethereum-error",133884724),v], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45674) : re_frame.core.dispatch.call(null,G__45674));
}));
} else {
var G__45675_45685 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ethereum-error","ethereum-error",133884724),"Please install metamask extension"], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45675_45685) : re_frame.core.dispatch.call(null,G__45675_45685));
}
/**
 * Handle form
 */
multis.views.handleForm = (function multis$views$handleForm(values){
var G__45676_45686 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"submitted","submitted",-131658962),true], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45676_45686) : re_frame.core.dispatch.call(null,G__45676_45686));

return multis.views.sendDelayedTransaction(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(values),new cljs.core.Keyword(null,"hours","hours",58380855).cljs$core$IFn$_invoke$arity$1(values),new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(values));
});
multis.views.main_panel = (function multis$views$main_panel(){
var name = (function (){var G__45677 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multis.subs","name","multis.subs/name",-886724222)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45677) : re_frame.core.subscribe.call(null,G__45677));
})();
var ethereum_error = (function (){var G__45678 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ethereum-error","ethereum-error",133884724)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45678) : re_frame.core.subscribe.call(null,G__45678));
})();
var submitted = (function (){var G__45679 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"submitted","submitted",-131658962)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45679) : re_frame.core.subscribe.call(null,G__45679));
})();
var receipt = (function (){var G__45680 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"receipt","receipt",1871350913)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45680) : re_frame.core.subscribe.call(null,G__45680));
})();
var form = re_frame_forms.core.make_form.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"amount","amount",364489504),0.01,new cljs.core.Keyword(null,"hours","hours",58380855),(1),new cljs.core.Keyword(null,"address","address",559499426),"0xd8c6F58BbF71E0739E4CCfe9f9721a07285bB895"], null));
var amount = re_frame_forms.core.make_field.cljs$core$IFn$_invoke$arity$3(form,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"amount","amount",364489504)], null),re_frame_forms.coerce.number.cljs$core$IFn$_invoke$arity$0());
var hours = re_frame_forms.core.make_field.cljs$core$IFn$_invoke$arity$3(form,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hours","hours",58380855)], null),re_frame_forms.coerce.int$.cljs$core$IFn$_invoke$arity$0());
var address = re_frame_forms.core.make_field.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"address","address",559499426)], null));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),multis.styles.main], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Multis Delayed Transaction"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Choose the amount and the delayed time (in hours) to send your transaction to a specified address"], null),(((!((cljs.core.deref(ethereum_error) == null))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),multis.styles.error], null),cljs.core.deref(ethereum_error)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),re_frame_forms.core.handle_valid_form(form,multis.views.handleForm)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),multis.styles.label], null),"Amount:",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame_forms.input.input,amount,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"step","step",1288888124),"0.001",new cljs.core.Keyword(null,"style","style",-496642736),(cljs.core.truth_(cljs.core.deref(re_frame_forms.core.valid_QMARK_(amount)))?multis.styles.input_number:cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([multis.styles.input_number,multis.styles.input_error], 0)))], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),multis.styles.label], null),"Delayed by (in hours):",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame_forms.input.input,hours,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"style","style",-496642736),(cljs.core.truth_(cljs.core.deref(re_frame_forms.core.valid_QMARK_(hours)))?multis.styles.input_number:cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([multis.styles.input_number,multis.styles.input_error], 0)))], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),multis.styles.label], null),"to Address:",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame_forms.input.input,address,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"style","style",-496642736),(cljs.core.truth_(cljs.core.deref(re_frame_forms.core.valid_QMARK_(address)))?multis.styles.input:cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([multis.styles.input,multis.styles.input_error], 0)))], null)], null)], null),((cljs.core.not(cljs.core.deref(submitted)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"style","style",-496642736),multis.styles.submit,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.deref(submitted)], null),"Submit"], null):null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(submitted),true))?(((!((cljs.core.deref(receipt) == null))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),multis.styles.congrats], null),"Congratulations transaction has been commited"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),multis.styles.loading], null),"loading... Please wait until transaction has been commited"], null)):null)], null))], null);
});

//# sourceMappingURL=multis.views.js.map
