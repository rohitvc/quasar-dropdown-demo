import Vue from 'vue'

import './styles/quasar.scss'
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import { Quasar, QSelect, QItem, QItemSection } from 'quasar'

Vue.use(Quasar, {
  components: {
    QSelect,
    QItem,
    QItemSection
  },
  config: {},
  plugins: {
  }
})
