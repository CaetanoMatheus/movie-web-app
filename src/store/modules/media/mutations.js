export default {
  setCurrent(state, media) {
    state.current = media
  },

  clearCurrent(state) {
    state.current = []
  },

  setPopular(state, media) {
    state.popular = media
  },

  setSearchMoviesResult(state, result) {
    state.searchMoviesResult = result
  },

  setSearchTvResult(state, result) {
    state.searchTvResult = result
  },

  setUpcoming(state, media) {
    state.upcoming = media
  },

  setTrendingMovies(state, movies) {
    state.trendingMovies = movies
  },

  setTrendingTvShows(state, TvShows) {
    state.trendingTvShows = TvShows
  },
}
