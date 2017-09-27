<template>
	<div class="rule">
		<div class="wrap">
			<h1>到账规则:</h1>
			<p>1、T1:当天收入，次日的16:00到账；</p>
			<p>2、T0:当天收入，实时到账；</p>
		</div>
		<div class="close"  v-on:click='colsePage'>
			<img src="./images/icon_store_close.png" alt="">
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		name: 'rule',
		data () {
			return {
				
			}
		},
		methods:{
			colsePage:function(){
				this.$emit('isshowpage',false)
			}
		}
	}
</script>

<style scoped>
	.rule{
		position: fixed;
		top:0;
		bottom: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,0.5);
		color: #fff;
	}
	.wrap{
		min-height: 100%;
		padding-bottom: 2rem;
	}
	.rule h1{
		font-size: .36rem;
		width: 97%;
		height: .8rem;
		line-height: .8rem;
		border-bottom: .02rem #ededed solid;
		margin: 0 auto;
		font-weight: 500;
	}
	.rule p{
		font-size: .28rem;
		width: 97%;
		line-height: .6rem;
		margin: 0 auto;
	}
	.close{
		margin-top: -2rem;
		text-align: center;
	}
	.close img{
		width: .8rem;
	}
</style>