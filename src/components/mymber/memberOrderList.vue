<template>
	<div class="wrap">
		<mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded"  @top-status-change="handleTopChange" ref="loadmore" :auto-fill="false">
			<ul>
				<li class="item" @click="toDetail" v-for="item in dataList">
					<div class="pic">
						<img :src="item.productImg" alt="">
					</div>
					<div class="right">
						<div class="tit">
							<span class="tag" v-show="item.tag != null">#{{item.tag}}#</span>{{item.productName}}
						</div>
						<p class="spec" v-if="item.specDesc != ''">规格：{{item.specDesc}}</p>
						<p class="spec2" v-else></p>
						<p class="price">{{item.price | changePrice2money}}</p>
						<p class="time"><img src="./images/member_list_time.png" alt="">{{item.createTime}}</p>
					</div>
				</li>
			</ul>
			<div v-show="dataList.length == 0" class="noData">
				<img src="./images/icon_bitmap.png" alt=""><br>
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
		name:"memberorderList",
		data(){
			return{
				dataList:[],
				customerId:'',
				memberType:'',
				page:1,
				pageCount:"",
				allLoaded:false,
				topStatus: ''
			}
		},
		created:function(){
			this.customerId = this.$route.query.customerId;
			this.memberType = this.$route.query.memberType;
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
					url:'member/memberOrderListData',
					data:{"page":that.page,"memberType":that.memberType,"customerId":that.customerId}
				})
				.then(function (response) {
					console.log(response);
					if (response.data.code == '999997') {
						setTimeout(function(){
							that.$router.push('/Login')
						},500)
					}else if(response.data.code == '000000'){
						that.pageCount = response.data.data.count;
						that.dataList = that.dataList.concat(response.data.data.customerOrderList)
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
      },
      toDetail:function(){
      	this.$router.push("/memberOrderDetail")
      }
		}
	}
</script>

<style scoped>
	.wrap{
		background-color: #f3f3f3;
		padding: .1rem;
	}
	.item{
		display: flex;
		height: 2.3rem;
		background-color: #fff;
		font-size: .24rem;
		margin-bottom: .1rem;
	}
	.pic{
		width: 2.3rem;
		height: 2.3rem;
		margin-right: .2rem;
	}
	.pic img{
		width: 2.3rem;
		height: 2.3rem;
	}
	.right{
		padding: .2rem 0;
		position: relative;
		color: #666;
		flex:1;
		overflow: hidden;
	}
	.tit{
		font-size: .28rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-all;
	}
	.tag{
		color: #ff6662;
	}
	.spec{
		color: #ccc;
		overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: .6rem;
    height: .6rem;
	}
	.spec2{
		height: .4rem;
	}
	.price{
		color: #ff6662;
		font-size: .32rem;
	}
	.time{
		position: absolute;
		bottom: .1rem;
	}
	.time img{
		width: .32rem;
		vertical-align: sub;
		margin-right: .1rem;
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