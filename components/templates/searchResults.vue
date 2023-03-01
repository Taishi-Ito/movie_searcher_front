<template>
  <div>
    <h2 class="result-title" v-if="similarMovies.length > 0">検索結果</h2>
    <div v-for="movie in similarMovies">
      <MoleculesResultCard
        :id="movie.id"
        :title="movie.Title"
        :CosineSimilarity="movie.CosineSimilarity"
        :year="movie.Year"
      ></MoleculesResultCard>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    similarMovies() {
      return this.$store.getters["store/similarMovies"]
    }
  }
}
</script>

<style scoped>
.result-title {
  text-align: center;
  margin-top: 50px;
}
</style>
