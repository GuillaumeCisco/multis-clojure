(ns multis.subs
  (:require
   [re-frame.core :as re-frame]))

(re-frame/reg-sub
 ::name
 (fn [db]
   (:name db)))

(re-frame/reg-sub
  :sender
  (fn [db _]
    (:sender db)))

(re-frame/reg-sub
  :ethereum-error
  (fn [db _]
    (:ethereum-error db)))


(re-frame/reg-sub
  :receipt
  (fn [db _]
    (:receipt db)))

(re-frame/reg-sub
  :transaction-error
  (fn [db _]
    (:transaction-error db)))


(re-frame/reg-sub
  :submitted
  (fn [db _]
    (:submitted db)))
