<template>
  <div class="container">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="10" md="8">
        <h1 class="title">{{ movieDetail.Title }}</h1>
        <v-simple-table>
          <template>
            <thead>
              <tr>
                <th class="text-left" width="30%">
                  項目名
                </th>
                <th class="text-left">
                  内容
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>タイトル</td>
                <td>{{ movieDetail.Title }}</td>
              </tr>
              <tr>
                <td>年</td>
                <td>{{ movieDetail.Year }}</td>
              </tr>
              <tr>
                <td>あらすじ</td>
                <td>{{ movieDetail.Summary }}</td>
              </tr>
              <tr>
                <td>IMDBランキング順位</td>
                <td>{{ movieDetail.ImdbRank }}</td>
              </tr>
              <tr>
                <td>PrimeVideo評価</td>
                <td>{{ movieDetail.PrimeRating }}</td>
              </tr>
              <tr>
                <td>IMDB評価</td>
                <td>{{ movieDetail.ImdbRating }}</td>
              </tr>
              <tr>
                <td>PrimeVideo・IMDB平均評価</td>
                <td>{{ movieDetail.AverageRating }}</td>
              </tr>
              <tr>
                <td>PrimeVideoレビュー数</td>
                <td>{{ movieDetail.PrimeReviewNum }}</td>
              </tr>
              <tr>
                <td>映画の長さ</td>
                <td>{{ movieDetail.FilmLength }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
    <v-row class="justify-center">
      <v-btn :to="'/'">戻る</v-btn>
    </v-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        movieId: this.$route.params.id,
      }
    },
    computed: {
      movieDetail() {
        return this.$store.getters["store/movieDetail"]
      }
    },
    created() {
      this.$store.dispatch('store/FetchMovieDetail', this.$route.params.id)
    }
  }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@800&display=swap');
.container {
  margin-top: 20px;
}
.title {
  text-align: center;
  font-family: 'Shippori Mincho', serif !important;
}
</style>
