(ns multis.events
  (:require
   [re-frame.core :as re-frame]
   [multis.db :as db]
   ))

(re-frame/reg-event-db
 ::initialize-db
 (fn [_ _]
   db/default-db))

(re-frame/reg-event-db
  :submitted
  (fn [db [_ value]]
    (assoc db :submitted value) ; put default account in db
    ))

(re-frame/reg-event-db
  :ethereum-init
  (fn [db [_ accounts]]
    (assoc db :sender (first accounts)) ; put default account in db
    ))

(re-frame/reg-event-db
  :ethereum-error
  (fn [db [_ error]]
    (assoc db :ethereum-error error)
    ))

(re-frame/reg-event-db
  :transaction-validated
  (fn [db [_ receipt]]
    (assoc db :receipt receipt)
    ))

(re-frame/reg-event-db
  :transaction-failed
  (fn [db [_ error]]
    (assoc db :transaction-error error)
    ))
