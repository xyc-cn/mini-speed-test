<template>
  <div class="cnt">
    <p @click="clicked"> {{text}}</p>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'Home',
  data() {
    return {
      text: 'kbone'
    }
  },
  methods: {
    clicked() {
      const d = Date.now()
      global.tttt = d
      console.log(d)
      this.text = 'test'
    }
  }
})
</script>
