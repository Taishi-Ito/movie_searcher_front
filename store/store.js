import axios from 'axios'

export const state = () => ({
  similarMovies: [],
  movieDetail: {}
})

export const getters = ({
  similarMovies: state => state.similarMovies,
  movieDetail: state => state.movieDetail,
})

export const mutations = {
  updateSimilarMovies: function(state, payload) {
    state.similarMovies = payload
  },
  updateMovieDetail: function(state, payload) {
    state.movieDetail = payload
  }
}

export const actions = {
  async FetchSimilarMovies(context, text) {
    const url = `${process.env.movieSearcherUrl}/api/similar`;
    const requestBody = JSON.stringify({"text": text})
    await axios.post(url, requestBody, {headers: {'Content-Type': 'application/json'}})
      .then((res) =>{
        context.commit('updateSimilarMovies', res.data)
      })
      .catch( e => {
        console.log('【e】', e)
      })
  },
  async FetchMovieDetail(context, id) {
    const url = `${process.env.movieSearcherUrl}/api/show/${id}`;
    await axios.get(url)
      .then((res) =>{
        context.commit('updateMovieDetail', res.data)
      })
      .catch( e => {
        console.log('【e】', e)
      })
  }
}
