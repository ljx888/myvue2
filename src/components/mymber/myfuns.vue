<template>
	<div class="wrap">
		<mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded"  @top-status-change="handleTopChange" ref="loadmore" :auto-fill="false">
			<ul class="list">
				<li class="item" v-for="item in dataList">
					<div class="pho">
						<img :src="item.icon" alt="">
					</div>
					<div class="msg">
						<p class="name"><span><img src="./images/member_list_character.png" alt=""></span> {{item.customerName}}</p>
						<p class="tel"><span><img src="./images/member_list_tel.png" alt=""></span> {{item.mobile}}</p>
					</div>
				</li>
				
			</ul>
			<div v-show="dataList.length == 0" class="noData">
				<img src="./images/icon_member.png" alt=""><br>
				暂无数据
			</div>
			<div slot="bottom" class="mint-loadmore-bottom">
      	<span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">释放加载更多数据</span>
      	<span v-show="topStatus === 'loading'">Loading...</span>
    	</div>
		</mt-loadmore>
	</div>
</template>

<script type="text/javascript">
	export default {
		name:"myfuns",
		data(){
			return{
				userName:'',
				dataList:[],
				page:1,
				pageCount:"",
				allLoaded:false,
				topStatus: ''
			}
		},
		props:['userName','issearch'],
		watch:{
			issearch:function(){
				this.dataList = [];
				this.page = 1;
				this.allLoaded = false;
				this.getData();
			}
		},
		mounted(){
			this.getData();
		},
		methods:{
			getData:function(){
    		var that = this;
				this.$axios({
					method:"POST",
					headers: {'X-Requested-With': 'XMLHttpRequest'},
					url:'member/memberListData',
					data:{"page":that.page,"memberType":'30',"userName":that.userName}
				})
				.then(function (response) {
					console.log(response);
					if (response.data.code == '999997') {
						setTimeout(function(){
							that.$router.push('/Login')
						},500)
					}else if(response.data.code == '000000'){
						that.pageCount = response.data.data.pageCount;
						that.dataList = that.dataList.concat(response.data.data.leaguerList)
					};
					console.log(that.dataList)
				})
				.catch(function (error) {
					console.log(error);
				});
    	},
			loadBottom:function(){
				this.getMore();
				this.$refs.loadmore.onBottomLoaded();
			},
			handleTopChange(status) {  //获取上拉状态
        this.topStatus = status; //自定义上拉提示
      },
      getMore:function(){
      	this.page = parseInt(this.page) + 1;
				this.getData();
				if (this.page >= this.pageCount) {
					this.allLoaded = true;  //关闭上拉
				};
      }
		}
	}
</script>

<style scoped>
	li.item:nth-child(even){
  	background-color: rgb(249, 249, 249);
  }
	.item{
		display: flex;
		height: 1.5rem;
		background-color: #fff;
		padding:.2rem;
		position: relative;
	}
	.pho{
		width:1rem ;
		height: 1rem;
		margin: .05rem .1rem 0 0;
	}
	.pho img{
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
	.msg{
		flex:1;
		font-size: .28rem;
	}
	.msg img{
		width: .28rem;
	}
	.name{
		color: #333;
		margin-top: .2rem;
	}
	.tel{
		color: #ff6662;
		margin: .09rem auto;
	}
	.mint-loadmore-bottom{
		font-size: .24rem;
		text-align: center;
		color: #666;
	}
	.noData{
		text-align: center;
		color: #666;
		font-size: .28rem;
	}
	.noData img{
		width: 3rem;
	}
</style>