<template>
    <Surah/>
</template>

<script lang="ts">
  import Surah from '../screens/surah-list.vue'
  export default {
    components : {
      Surah: Surah
    },
    data() {
      return {
        msg: 'Hello World!'
      }
    }
  }
</script>