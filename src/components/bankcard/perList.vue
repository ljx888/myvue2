<template>
	<div class="page">
		<ul class="item_wrap">
			<li class="item" v-for="item in dataList">
				<div class="left">
					<img :src="item.imgPath">
					<div class="bank">
						<p class="name">{{item.cardName}}</p>
						<p class="cardtype" v-if="item.type == 01">借记卡</p>
						<p class="cardtype" v-if="item.type == 02">信用卡</p>
					</div>
				</div>
				<div class="right">
					<p class="right_top"><span class="itemtype">个人银行</span><span class="unbind" v-on:click='unbindFun(item.cardId)'>解绑</span></p>
					<p class="card_num">{{item.cardNo}}</p>
				</div>
			</li>
			
		</ul>
		<router-link :to="'/bindPer'">
			<div class="footer">
				<span>+</span>绑定银行卡
			</div>
		</router-link>
	</div>
</template>

<script type="text/javascript">
	export default {
		name:'perList',
		data(){
			return{
				page:1,
				dataList:[]
			}
		},
		created:function(){
			this.getData();
		},
		methods:{
			unbindFun:function(id){
				alert('解绑'+id)
			},
			getData:function(){
				var that = this;
				this.$axios({
					method:"POST",
					headers: {'X-Requested-With': 'XMLHttpRequest'},
					url:'bankCard/bankCardListData',
					data:{'page':that.page}
				})
				.then(function (response) {
					//console.log(response);
					if (response.data.code == '999997') {
						setTimeout(function(){
								that.$router.push('/Login')
							},500)
					}else if(response.data.code == '0000'){
							that.dataList = that.dataList.concat(response.data.data)
					}else{
						
					};
					console.log(that.dataList)
				})
				.catch(function (error) {
					console.log(error);
				});
			}//,
			/*loadBottom:function(){
				this.getMore();
				this.$refs.loadmore.onBottomLoaded();
			},
			handleTopChange(status) {  //获取上拉状态
        this.topStatus = status; //自定义上拉提示
      },
			loadMore:function(){

			}*/
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
	flex:1;
	display: flex;
}
.item .left img{
	width: .8rem;
	height: .8rem;
	margin-top: .15rem;
	margin-right: .15rem;
}
.item .left .bank{
	line-height: .55rem;
}
.item .left .name{
	color: rgb(102,102,102);
}
.item .left .cardtype{
	color: rgb(153,153,153);
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