import axios from 'axios'

export const state = () => ({
  similarMovies: [],
  movieDetail: {},
  isLoading: false
})

export const getters = ({
  similarMovies: state => state.similarMovies,
  movieDetail: state => state.movieDetail,
  isLoading: state => state.isLoading,
})

export const mutations = {
  updateSimilarMovies: function(state, payload) {
    state.similarMovies = payload
  },
  updateMovieDetail: function(state, payload) {
    state.movieDetail = payload
  },
  switchLoading: function(state) {
    state.isLoading = !state.isLoading
  }
}

export const actions = {
  async FetchSimilarMovies(context, text) {
    context.commit('switchLoading')
    const url = `${process.env.movieSearcherUrl}/api/similar`;
    const requestBody = JSON.stringify({"text": text})
    await axios.post(url, requestBody, {headers: {'Content-Type': 'application/json'}})
      .then((res) =>{
        context.commit('updateSimilarMovies', res.data)
        context.commit('switchLoading')
      })
      .catch( e => {
        context.commit('switchLoading')
        alert(e)
      })
  },
  async FetchMovieDetail(context, id) {
    const url = `${process.env.movieSearcherUrl}/api/show/${id}`;
    await axios.get(url)
      .then((res) =>{
        context.commit('updateMovieDetail', res.data)
      })
      .catch( e => {
        context.commit('switchLoading')
        alert(e)
      })
  }
}
