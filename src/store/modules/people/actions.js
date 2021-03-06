import Api from '../../../services/api'

export default {
  async search({ rootState, commit }, searchValue) {
    const { data } = await Api.get(`search/person/${searchValue || rootState.searchValue}`)
    commit('setSearchResult', data)
  },

  async popular(context, pageNumber) {
    const page = pageNumber > 0 ? pageNumber : 1
    const { data } = await Api.get(`person/popular?page=${page}`)
    context.commit('setPopular', data)
  },

  async show(context, id) {
    const { data } = await Api.get(`person/${id}`)
    context.commit('setCurrent', data)
    context.commit('sortCast')
    context.commit('sortCrew')
  },
}
