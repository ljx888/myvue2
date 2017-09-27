<template>
	<div class="page">
		<ul class="item_wrap">
			<li class="item" v-for="item in dataList">
				<div class="left">
					<img src="./images/bankIcon/f_card_bank_logo.png" alt="">
					<div class="bank">
						<p class="name">{{item.cardName}}</p>
						<p class="cardtype">对公账户</p>
					</div>
				</div>
				<div class="right">
					<p class="right_top"><span class="itemtype">企业银行</span><span class="unbind" v-on:click='unbindFun(item.cardId)'>解绑</span></p>
					<p class="card_num">{{item.cardNo}}</p>
				</div>
			</li>
			
		</ul>
		<router-link :to="'/bindCom'">
			<div class="footer">
				<span>+</span>绑定银行卡
			</div>
		</router-link>
	</div>
</template>

<script type="text/javascript">
import UnBind from './indexJs.js'
	export default {
		name:'comList',
		data(){
			return{
				dataList:[],
				page:1
			}
		},
		created:function(){
			this.getData();
		},
		methods:{
			unbindFun:function(id){
				alert('解绑'+id)
				/*var that = this;
				this.$axios({
					method:"POST",
					headers: {'X-Requested-With': 'XMLHttpRequest'},
					url:'bankCard/unBindAcc',
					data:{'cardId':id}
				})
				.then(function (response) {
					//console.log(response);
					if (response.data.code != '000000') {
						
					}else if(response.data.code == '999997'){
							setTimeout(function(){
								that.$router.push('/Login')
							},500)
					}else{
						UnBind.unBindAcc(that.dataList);
					};
					console.log(that.dataList)
				})
				.catch(function (error) {
					console.log(error);
				});*/
			},
			getData:function(){
				var that = this;
				this.$axios({
					method:"POST",
					headers: {'X-Requested-With': 'XMLHttpRequest'},
					url:'bankCard/corAccList',
					data:{'page':that.page}
				})
				.then(function (response) {
					//console.log(response);
					if (response.data.code == '999997') {
						setTimeout(function(){
								that.$router.push('/Login')
							},500)
					}else if(response.data.code == '000000'){
							that.dataList = that.dataList.concat(response.data.data)
					}else{
						
					};
					console.log(that.dataList)
				})
				.catch(function (error) {
					console.log(error);
				});
			}
		}
	}
</script>

<style scoped>
.page{
	height: 100%;
}
.item_wrap{
	width: 100%;
	min-height: 100%;
	padding: 1rem 0;
	margin-top: -1rem;
	background-color: #f3f3f3;
}
.item{
	width: 96%;
	height: 1.5rem;
	background-color: #fff;
	font-size: .28rem;
	display: flex;
	padding: .2rem;
	margin: .2rem auto;
}
.item .left{
	flex:2;
	display: flex;
	padding-top: .15rem;
}
.item .left img{
	width: .8rem;
	height: .8rem;
	margin-right: .15rem;
}
.item .left .bank{
	position: relative;
}
.item .left .name{
	color: rgb(102,102,102);
}
.item .left .cardtype{
	color: rgb(153,153,153);
	position: absolute;
  bottom: 0;
}
.item .right{
	flex:1;
	line-height: .55rem;
	text-align: right;
}
.item .right_top{
	color: #ff6662;
}
.item .itemtype{
	padding: 2px;
	margin-right: .1rem;
	border: 1px solid #ff6662;
}
.item .unbind{
	padding: .2rem;
}
.item .card_num{
	color: rgb(153,153,153);
}
.footer{
	position: absolute;
	font-size: .32rem;
	text-align: center;
	line-height: 1rem;
	margin-top: -1rem;
	width: 100%;
	background-color: #fff;
	color: #666;
}
.footer span{
	font-size: .72rem;
	display: inline-block;
  vertical-align: bottom;
  margin-right: .1rem;
}
</style>