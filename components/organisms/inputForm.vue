<template>
  <div>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
          <h3 class="explanation">どんな映画を観たいか入力してください。※280字以内</h3>
          <p class="example">例)みんなで感動して泣ける映画</p>
          <p class="example">例)悪役が活躍するけど、結末はハッピーエンド</p>
          <v-textarea
            v-model="text"
            counter
            solo
            name="textarea"
            label="ここに入力してください"
            light
          ></v-textarea>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-btn @click="FetchSimilarMovies()" :disabled="isValid" >検索</v-btn>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
      isValid: true
    }
  },
  watch: {
    text(val) {
      if (val.length > 280 || val.length < 1) {
        this.isValid = true
      } else {
        this.isValid = false
      }
    }
  },

  methods: {
    FetchSimilarMovies() {
      this.$store.dispatch('store/FetchSimilarMovies', this.text)
    }
  }
}
</script>

<style scoped>
.explanation {
  margin-bottom: 20px;
}
.example {
  color: #757575;
  font-size: 14px;
}
</style>
