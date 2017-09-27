<template>
	<div class="bindcom">
		<ul class="item">
			<li><span>公司名称</span><input type="text" placeholder="例如:上海聚熠电子商务有限公司"></li>
			<li><span>银行账户</span><input type="text" placeholder="请输入银行账户"></li>
			<li class="name"><span>银行名称</span><input type="text" placeholder="请选择" readonly="true"></li>
			<li><span>开户行名称</span><input type="text" placeholder="例如:中信银行杭州文三路支行"></li>
		</ul>
		<div class="btn">确 定</div>
	</div>
</template>

<script>
	export default {
		name:"bindCom",
		data(){
			return{

			}
		}
	}
</script>

<style scoped>
	.bindcom{
		font-size: .28rem;
		color: #666;
		line-height: .9rem;
	}
	.item{
		background-color: #fff;
		padding: 0 .2rem;
	}
	.item span{
		display: inline-block;
		width: 20%;
	}
	.item input{
		width: 80%;
		border: none;
		outline: none;
	}
	.item li{
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
	li.name{
		position: relative;
	}
	/*箭头*/
	li.name:after,  li.name:before {
	  border: 10px solid transparent;
	  border-left: 10px solid #fff;
	  width: 0;
	  height: 0;
	  position: absolute;
	  top: .2rem;
	  right: 2px;
	  content: ' '
	}
	 li.name:before {
	  border-left-color: #666;
	  right: 1px;
	}
</style>