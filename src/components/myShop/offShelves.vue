<template>
	<div class="offShelves">
		<mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded"  @top-status-change="handleTopChange" ref="loadmore" :auto-fill="false">
			<template v-for="item in dataList">
				<div class="item" @click="goProduct()">
					<div class="pic">
						<img :src="item.imgPath">
						<span v-if="item.flag == 1">自营</span>
						<span v-if="item.flag == 2">分销</span>
					</div>
					<div class="msg">
						<p class="tit"><span class='tag' v-show="item.tag!=null">#{{item.tag}}#</span>{{item.name}}</p>
						<p class="price">
							<span class='sell_price'>{{item.price | changePrice2money}}</span>
							<span class='commission'>佣金{{item.commission1st | changePrice2money}}</span>
						</p>
						<div class="num">
							<span class='stock' v-if="item.stock.length>=5">库存{{item.stock.split("").reverse().join("").substring(3).split("").reverse().join("")/10}}万</span>
								<span class='stock' v-else>库存{{item.stock}}</span>
								<span class='sell_num' v-if="item.saleQty.length>=5">销量{{item.saleQty.split("").reverse().join("").substring(3).split("").reverse().join("")/10}}万</span>
								<span class='sell_num' v-else>销量{{item.saleQty}}</span>
							<span class="edit" v-on:click.stop='showEdit(item.productId)'><img src="./images/icon_modify.png" alt=""></span>
						</div>
					</div>
				</div>
				<ul class="edit_menu" v-show="isshowEdit === item.productId">
					<li><img src="./images/shangpin_icon_edit.png" alt=""><br>编辑</li>
					<li @click="deleteProduct(item.productId,30)"><img src="./images/shangpin_icon_delete.png" alt=""><br>删除</li>
					<li @click="onsell(item.productId,10)"><img src="./images/shangpin_icon_shangjia.png" alt=""><br>上架</li>
					<li><img src="./images/shangpin_icon_replace.png" alt=""><br>更换分类</li>
				</ul>
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
	export default {
		name:'offShelves',
		data(){
			return{
				isshowEdit:false,
				dataList:[],
				page:1,
				pageCount:"",
				allLoaded:false,
				topStatus: ''
			}
		},
		props:['flag'],
		created:function(){
			this.getData();
		},
		watch:{
			flag:function(){
				this.dataList = [];
				this.page = 1;
				this.allLoaded = false;
				this.getData();
			}
		},
		methods:{
			showEdit:function(id){
				if(this.isshowEdit === id){
					this.isshowEdit = !this.isshowEdit
				}else{
					this.isshowEdit = id;
				}
			},
			getData:function(){
				var that = this;
				var time = new Date();//时间戳
				var d=time.getTime(); //时间戳
				this.$axios({
					method:"POST",
					headers: {'X-Requested-With': 'XMLHttpRequest'},
					url:'product/productManageList',
					data:{
								"page":that.page,
								"status":20,
								"pageSize":10,
								"requestId":d,
								"flag":that.flag
							}
				})
				.then(function (response) {
					console.log(response);
					if (response.data.code == '999997') {
						setTimeout(function(){
								that.$router.push('/Login')
							},500)
					}else if(response.data.code == '000000'){
							that.pageCount = response.data.data.pageCount;
							response.data.data.productInfo.forEach(function(k,v){
								k.imgPath = k.imgPath+'?imageMogr2/thumbnail/160x'
							})
							that.dataList = that.dataList.concat(response.data.data.productInfo)
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
      },
      goProduct:function(){  //商品详情
      	this.$router.push('/product');
      },
      onsell:function(id,status){
      	this.changeStatus(id,status);
      },
      deleteProduct:function(id,status){
      	this.changeStatus(id,status);
      },
      changeStatus:function(id,status){ 
      	var that = this;
      	var time = new Date();//时间戳
				var d=time.getTime(); //时间戳
      	this.$axios({
					method:"POST",
					headers: {'X-Requested-With': 'XMLHttpRequest'},
					url:'product/updateProductStatus',
					data:{
								"productId":id,
								"status":status,
								"requestId":d,
							}
				})
				.then(function (response) {
					console.log(response);
					if (response.data.code == '999997') {
						setTimeout(function(){
								that.$router.push('/Login')
							},500)
					}else if(response.data.code == '000000'){
							var Pindex = '';
							that.dataList.forEach(function(k,v){
								if(k.productId == id){
									Pindex = v;
									return;
								}
							})
							that.dataList.splice(Pindex,1);
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
.item{
	display: flex;
	height: 2.3rem;
	background-color: #fff;
	margin: .08rem .1rem;
}
.item .pic{
	width: 2.3rem;
	height: 2.3rem;
	position: relative;
}
.item .pic span{
	position: absolute;
	bottom: 0;
	right: 0;
	font-size: .24rem;
	color: #fff;
	background-color: rgba(0,0,0,0.5);
	padding: .1rem;
}
.item .pic img{
	width: 100%;
	height: 100%;
}
.item .msg{
	font-size: .3rem;
	flex:1;
	padding: .1rem;
	position: relative;
	height: 2.3rem;
}
.item .tit{
		color: #333;
	  overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-all;
}
.item .tag{
	color: #ff6662;
}
.item .price{
	font-size: .26rem;
	position: absolute;
	bottom: 1rem;
}
.item .num{
	font-size: .24rem;
	color: #999;
	position: absolute;
	bottom: .1rem;
	width: 96%;
}
.item .commission{
	color: #ff6662;
}
.item .sell_price{
	  border-right: 1px solid #000;
    color: #666;
    padding-right: .1rem;
}
.item .stock{
	margin-right: 4px;
	display: inline-block;
  padding-top: .2rem;
}
.item .edit{
	  display: inline-block;
    width: .48rem;
    height: .48rem;
    float: right;
    margin-right: .4rem;
}
.item .edit img{
	width: 100%;
	height: 100%;
}
.edit_menu{
	width: 100%;
	display: flex;
	height: 1rem;
	background-color: #f3f3f3;
}
.edit_menu li{
	flex:1;text-align: center;
	font-size: .28rem;
	line-height: .4rem;
  padding-top: .1rem;
  color: #666;
}
.edit_menu img{
	width: .28rem;
	height: .28rem;
	vertical-align: middle;
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