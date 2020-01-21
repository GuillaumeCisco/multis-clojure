(ns multis.subs
  (:require
   [re-frame.core :as re-frame]))

(re-frame/reg-sub
 ::name
 (fn [db]
   (:name db)))

(re-frame/reg-sub
 ::new-bet
 (fn [db]
   (:new-bet db)))

;(re-frame/reg-sub
; ::w3
; (fn [db]
;   (:w3 db)))
