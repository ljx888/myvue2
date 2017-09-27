<template>
	<div class="bindper">
		<p class="tit">绑定的银行卡的持卡人需与实名认证一致</p>
		<ul class="input">
			<li><span>持卡人</span><input type="text" value="231" readonly="true"></li>
			<li><span>卡号</span><input type="text" placeholder="请输入银行卡号"></li>
		</ul>
		<router-link to="/bindStep2">
			<div class="btn">下一步</div>
		</router-link>
	</div>
</template>

<script>
	export default {
		name:"bindPer",
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped>
	.tit{
		color: #666;
		font-size: .30rem;
		line-height: .9rem;
		text-indent: .2rem;
	}
	.input{
		width: 100%;
		background-color: #fff;
		color: #333;
		padding: 0 .2rem;
		line-height: .9rem;
		font-size: .28rem;
	}
	.input li span{
		display: inline-block;
		width: 15%;
	}
	.input li:first-child{
		border-bottom: .02rem solid #ededed;
	}
	.input input{
		border: none;
		outline: none;
		width: 80%;
		color: #666;
	}
	.btn{
		color: #fff;
		background-color: #ff6662;
		text-align: center;
		line-height: .9rem;
		width: 90%;
		margin: .2rem auto;
		font-size: .36rem;
		border-radius: .1rem;
	}
</style>