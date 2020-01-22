(ns multis.styles)

(def main {:margin "0 auto" :width "980px"})

(def label {:display "block" :margin-top "10px"})

(def input {:margin-left "10px" :padding "6px" :width "350px" :border-radius "5px"})
(def input-number (merge input {:width "60px"}))

(def submit {
 :margin-top "35px"
 :background-color "#0cacf9"
 :color "white"
 :border-radius "12px"
 :padding "10px 14px"
 :border "none"
 :cursor "pointer"
 })

(def loading {
  :display "block"
  :margin-top "30px"
  :color "orange"
})

(def congrats {
  :display "block"
  :margin-top "30px"
  :color "green"
})

(def input-error {:border "1px solid red"})
(def error {:color "red"})
