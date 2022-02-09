<template>
  <view class="index">
    <text @tap="clicked"> {{ text }} </text>
  </view>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Index',
  data() {
    return {
      text: 'taro'
    }
  },
  methods: {
     clicked () {
      const d = Date.now()
      global.dddd = d
      console.log(d)
      this.text = 'test'
    }
  }
})
</script>
