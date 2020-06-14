import Vue from 'vue'
import Moment from 'moment'

Vue.filter('formatDate', (value) => Moment(value).format('MMM Do YYYY'))
Vue.filter('formatRate', (value) => {
  if (!value) return 'NA'
  value = value.toString()
  return value.length === 1 ? `${value}.0` : value
})