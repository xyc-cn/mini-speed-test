<template>
  <div>
   <p @click="clicked"> {{ motto }} </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      motto: 'Hello miniprograme'
    }
  },
  methods: {
    clicked () {
      const d = Date.now()
      global.tttt = d
      console.log(d)
      this.motto = 'test'
    }
  }
}
</script>