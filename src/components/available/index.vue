<template>
	<div class="available">
		<div class="header">
			<img src="./images/shouru_jinbi.png">
			<p>可用余额</p>
			<h3>{{(availableData.totalAmount + availableData.posBalance) | changePrice2money}}</h3>
		</div>
		<template v-for="item in userBCList">
			<div class="list">
				<div class="left">
					<img v-bind:src=item.logo>{{item.payName}}
				</div>
				<div class="right">
					<p><span>金额：</span>{{item.amount | changePrice2money}}</p>
					<p class="daozhang"><span>到账：</span>{{item.arrivalAmt | changePrice2money}}</p>
				</div>
			</div>
		</template>
		<div class="button">
			提现
		</div>
	</div>
</template>

<script type="text/javascript">
import ResetData from './indexJs.js'
	export default{
		name:'available',
		data(){
			return{
				availableData:{},
				userBCList:[]
			}
		},
		created:function(){
			var that = this;
			this.$axios({
				method:"POST",
				headers: {'X-Requested-With': 'XMLHttpRequest'},
				url:'income/availableData',
				data:{}
			})
			.then(function (response) {
				//console.log(response);
				if (response.data.code == '999997') {
					setTimeout(function(){
						that.$router.push('/Login')
					},500)
				}else if(response.data.code == '000000'){
					that.availableData = response.data.data;
					that.userBCList = ResetData.ResetData(response.data.data.userBCList)
				};
				//console.log(that.availableData)
			})
			.catch(function (error) {
				console.log(error);
			});
		}
	}
</script>

<style scoped>
	.available{
		background-color: #f3f3f3;
		padding-bottom: .2rem;
	}
	.header{
		width: 100%;
		height: 4.4rem;
		background-color: #ff6662;
		color: #fff;
		text-align: center;
		padding-top: .8rem;
	}
	.header img{
		width: 1.4rem;
		height: 1.4rem;
	}
	.header p{
		font-size:.32rem ;
		line-height: .4rem;
	}
	.header h3{
		font-size: .6rem;
	}
	.list{
		display: flex;
		width: 100%;
		height: 1.5rem;
		font-size: .28rem;
		background-color: #fff;
		padding: .2rem;
		color: #666;
		margin-bottom: .1rem;
	}
	.left{
		line-height: 1.1rem;
		flex:1;
	}
	.left img{
		width: .8rem;
		vertical-align: middle;
		margin-right: .1rem;
	}
	.right{
		flex:1;
		text-align: right;
		line-height: .55rem;
	}
	.right span{
		color: #999;
	}
	.right .daozhang{
		color: #09bb07;
	}
	.button{
		width: 96%;
		height: 1rem;
		text-align: center;
		color: #fff;
		font-size: .4rem;
		line-height: 1rem;
		background-color: #ff6662;
		border-radius: .1rem;
		margin: 0 auto;
	}
</style>
