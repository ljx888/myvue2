<template>
	<div class="wrap">
		<ul class="list">
			<li class="item"><img src="./images/dianpu_fuwu.png" alt="">服务电话</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name:"shopData",
		data(){
			return{

			}
		}
	}
</script>

<style scoped>
	.wrap .list{
		background-color: #fff;
		color: #333;
		font-size: .36rem;
		height: 1rem;
		line-height: 1rem;
	}
	.wrap .list img{
		width: .8rem;
		vertical-align: middle;
	}
	/*箭头*/
	.wrap .list li{
		position: relative;
	}
	.wrap .list li:after,  .wrap .list li:before {
	  border: .2rem solid transparent;
	  border-left: .2rem solid #fff;
	  width: 0;
	  height: 0;
	  position: absolute;
	  top: .3rem;
	  right: 2px;
	  content: ' '
	}
	 .wrap .list li:before {
	  border-left-color: #666;
	  right: 1px;
	}
</style>