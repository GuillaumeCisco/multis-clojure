goog.provide('cljs_web3.settings');
goog.require('cljs.core');
cljs_web3.settings.settings = (function cljs_web3$settings$settings(web3){
return (web3["settings"]);
});
cljs_web3.settings.default_account = (function cljs_web3$settings$default_account(web3){
return (web3["settings"]["defaultAccount"]);
});
cljs_web3.settings.set_default_account_BANG_ = (function cljs_web3$settings$set_default_account_BANG_(web3,hex_str){
return (cljs_web3.settings.settings(web3)["defaultAccount"] = hex_str);
});
cljs_web3.settings.default_block = (function cljs_web3$settings$default_block(web3){
return (web3["settings"]["defaultBlock"]);
});
cljs_web3.settings.set_default_block_BANG_ = (function cljs_web3$settings$set_default_block_BANG_(web3,block){
return (cljs_web3.settings.settings(web3)["defaultBlock"] = block);
});

//# sourceMappingURL=cljs_web3.settings.js.map
