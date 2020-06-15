import Api from '../services/api'

export default {
  async popularMedia(context, type) {
    const { data } = await Api.get(`${type}/popular`)
    context.commit('setPopularMedia', data)
  },

  async upcomingMedia(context) {
    const { data } = await Api.get('movies/upcoming')
    context.commit('setUpcomingMedia', data)
  },

  async trendingMovies(context, timeWindow) {
    const { data } = await Api.get(`movies/trending/${timeWindow}`)
    context.commit('setTrendingMovies', data)
  },

  async trendingTv(context, timeWindow) {
    const { data } = await Api.get(`tv/trending/${timeWindow}`)
    context.commit('setTrendingTv', data)
  },
}
