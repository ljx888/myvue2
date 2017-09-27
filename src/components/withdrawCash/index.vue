<template>
	<div class="wrap">
		<mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded"  @top-status-change="handleTopChange" ref="loadmore" :auto-fill="false">
			<template v-for="item in dataList">
				<div class="item">
					<div class="left">
						<p>提现银行：<span>{{item.bankName}}({{item.bankCard}})</span></p>
						<p>提现时间：<span>{{item.time}}</span></p>
					</div>
					<div class="right">
						<p>{{item.actualAmt | changePrice2money}}</p>
						<p class="type_color" :style="{color:item.fontColor}">{{item.recordStatusDesA}}</p>
					</div>
				</div>
			</template>
			<div v-show="dataList.length == 0" class="noData">暂无数据</div>
				<div slot="bottom" class="mint-loadmore-bottom">
	      	<span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">释放加载更多数据</span>
	      	<span v-show="topStatus === 'loading'">Loading...</span>
	    </div>
		</mt-loadmore>
	</div>
</template>

<script type="text/javascript">
import ResetData from './indexJs.js'
	export default{
		name:'withdrawCash',
		data(){
			return{
				dataList:[],
				page:1,
				pageCount:"",
				allLoaded:false,
				topStatus: ''
			}
		},
		created:function(){
			this.getData();
		},
		methods:{
			getData:function(){
				var that = this;
				this.$axios({
					method:"POST",
					headers: {'X-Requested-With': 'XMLHttpRequest'},
					url:'income/userBalanceQuery',
					data:{'page':that.page,'sort':20,'userId':that.myStore.getStorage('userId')}
				})
				.then(function (response) {
					//console.log(response);
					if (response.data.code == '999997') {
						setTimeout(function(){
								that.$router.push('/Login')
							},500)
					}else if(response.data.code == '000000'){
						that.pageCount = parseInt(response.data.data.pageCount)
						that.dataList = that.dataList.concat(ResetData.ResetData(response.data.data.balanceRecord))
					}else{
						
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
	.item{
		width: 100%;
		height: 1.5rem;
		padding: .2rem;
		background-color: #fff;
		display: flex;
		line-height: .55rem;
		font-size: .28rem;
		margin-bottom: .1rem;
	}
	.item .left{
		flex:2;

	}
	.item .left p{
		color: rgb(153,153,153);
	}
	.item .left p span{
		color: rgb(102,102,102);
	}
	.item .right{
		flex:1;
		text-align: right;
		color: rgb(102,102,102);
	}
	.type_color{
		color: rgb(240,26,55);
	}
	.mint-loadmore-bottom{
		font-size: .24rem;
		text-align: center;
		color: #666;
	}
	.noData{
		text-align: center;
		color: #666;
	}
</style>