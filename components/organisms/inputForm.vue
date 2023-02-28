<template>
  <div>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
          <v-textarea
            v-model="text"
            counter
            solo
            name="textarea"
            label="ここに文章を入力してください。※280字以内"
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
