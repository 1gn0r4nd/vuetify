import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/src/styles/main.sass'

import { createVuetify } from 'vuetify/src/framework'
import * as directives from 'vuetify/src/directives'
import { VuetifyDateAdapter } from 'vuetify/src/labs/date/adapters/vuetify'
import datefnssv from 'date-fns/locale/sv'
import datefnsen from 'date-fns/locale/en-US'
import DateIoDateFnsAdapter from '@date-io/date-fns'

import date from './vuetify/date'
import defaults from './vuetify/defaults'
import icons from './vuetify/icons'
import locale from './vuetify/locale'

export default createVuetify({
  date: {
    adapter: VuetifyDateAdapter,
  },
  directives,
  ssr: !!process.env.VITE_SSR,
  date,
  defaults,
  icons,
  locale,
})
