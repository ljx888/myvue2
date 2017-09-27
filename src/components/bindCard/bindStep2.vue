<template>
	<div class="bindStep2">
		<div class="type">
			<span>卡类型</span><input type="text" value="农业银行-借记卡" readonly="true">
		</div>
		<ul class="list">
			<li><span>身份证号</span><input type="text" value="612*********3425" readonly="true"></li>
			<li><span>CVN2</span><input type="text" placeholder="卡背面后三位"></li>
			<li><span>有效期</span><input type="text" placeholder="银行卡有效期（类似0220）"></li>
			<li><span>手机号</span><input type="text" placeholder="银行预留手机号码"></li>
		</ul>
		<div class="btn">下一步</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		name:"bindStep2",
		data(){
			return{

			}
		}
	}
</script>

<style scoped>
	.bindStep2{
		font-size: .30rem;
		color: #666;
		line-height: .9rem;
	}
	.type{
		background-color: #fff;
		margin-bottom: .2rem;
		padding: 0 .2rem;
	}
	.bindStep2 span{
		width: 20%;
		display: inline-block;
	}
	.bindStep2 input{
		width: 80%;
		outline: none;
		border: none;
		color: #666;
	}
	.list{
		background-color: #fff;
		padding: 0 .2rem;
	}
	.list li{
		border-bottom: .02rem solid #ededed;
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