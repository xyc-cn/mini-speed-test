<template>
	<view class="content">
		<view>
            <text class="title" @click="clicked">{{title}}</text>
        </view>
	</view>
</template>

<script lang="ts">
    import Vue from 'vue';
	export default Vue.extend({
		data() {
			return {
				title: 'Hello'
			}
		},
		methods: {
		  clicked () {
            const d = Date.now()
            //@ts-ignore
            global.tttt = d
            console.log(d)
            //@ts-ignore
            this.title = 'test'
            }
		}
	});
</script>

