<template>
  <v-app dark>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-toolbar-title class="app-title" @click="$router.push('/')">{{ title }}</v-toolbar-title>
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false,
      fixed: false,
      title: '映画れこめんでーたー'
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@800&display=swap');
.app-title {
  font-family: 'Shippori Mincho', serif;
  cursor: pointer;
}
</style>
