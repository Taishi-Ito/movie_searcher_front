<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
        <v-card>
          <v-card-title class="text-h5 justify-center">{{title}}({{year}})</v-card-title>
          <v-card-subtitle class="sub-title">スコア:{{CosineSimilarity}}</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    CosineSimilarity: {
      type: Number,
      required: true
    },
    year: {
      type: Number,
      required: true
    }
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@800&display=swap');
.v-card {
  padding: 5px;
  background: linear-gradient(135deg,#FAFAFA,#E0E0E0);
}
.v-card__title {
  width: 100%;
  font-family: 'Shippori Mincho', serif !important;
}
.sub-title {
  padding-top: 5px;
  font-weight: bold;
  text-align: center;
}
</style>
