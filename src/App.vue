<template>
  <v-app>
    <v-toolbar>
      <Toolbar />
    </v-toolbar>

    <v-content>
      <Home/>
      <Result/>
    </v-content>
  </v-app>
</template>

<script>
import Home from './components/Home'
import Toolbar from './components/Toolbar'
import Result from './components/Result'

export default {
  name: 'App',
  components: {
    Home,
    Toolbar,
    Result
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style>
  v-content {
    width: 100%;
  }

  v-toolbar {
    background: #FFF !important;
  }
</style>
