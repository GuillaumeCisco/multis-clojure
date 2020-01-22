goog.provide('cljs_web3.net');
goog.require('cljs.core');
goog.require('cljs_web3.utils');
/**
 * This property is read only and says whether the node is actively
 *   listening for network connections or not.
 * 
 *   Parameters:
 *   callback - callback with two parameters: error and result
 * 
 *   Returns true if the client is actively listening for network connections,
 *   otherwise false.
 * 
 *   Example:
 *   user> `(listening? (fn [err res] (when-not err (println res))))`
 *   nil
 *   user> true
 */
cljs_web3.net.listening_QMARK_ = cljs_web3.utils.prop_or_clb_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["net","listening"], 0));
/**
 * This property is read only and returns the number of connected peers.
 * 
 *   Returns the number of peers currently connected to the client.
 * 
 *   Example:
 *   user> `(peer-count (fn [err res] (when-not err (println res))))`
 *   nil
 *   user> 4
 */
cljs_web3.net.peer_count = cljs_web3.utils.prop_or_clb_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["net","peerCount"], 0));

//# sourceMappingURL=cljs_web3.net.js.map
