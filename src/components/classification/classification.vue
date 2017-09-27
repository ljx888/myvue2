<template>
	<div class="classify">
		<mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded"  @top-status-change="handleTopChange" ref="loadmore" :auto-fill="false">
			<ul class="wrap">
				<li @click="goedit(dataList.defaultCustomizeid,dataList.defaultCustomizeName)">{{dataList.defaultCustomizeName}}<span>(当前{{dataList.defaultCustomizeProductCount}}件商品)</span></li>
				<li @click="goedit(item.customizeId,item.customizeName)" v-for="item in dataList.KindList">
					<img  v-on:click.stop="chooseClass(item.customizeId)" v-if="isActive == item.customizeId" src="./images/iocn_circle_default.png">
					<img  v-on:click.stop="chooseClass(item.customizeId)" v-else src="./images/iocn_circle.png">{{item.customizeName}}<span>(当前{{item.count}}件商品)</span>
				</li>
			</ul>
			<!-- <div v-show="dataList.length == 0" class="noData">暂无数据</div> -->
			<div slot="bottom" class="mint-loadmore-bottom">
	      <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">释放加载更多数据</span>
	      <span v-show="topStatus === 'loading'">Loading...</span>
	    </div>
		</mt-loadmore>
		<div class="footer">
			<div @click="deleteClass(isActive)"><img src="./images/shangpin_fenlei_delete.png" alt="">删除分类</div>
			<div><img src="./images/shangpin_fenlei_plus.png" alt="">添加分类</div>
		</div>
	</div>
</template>

<script type="text/javascript">
import { Toast } from 'mint-ui';
	export default {
		name:"classification",
		data(){
			return{
				dataList:{},
				isActive:'',
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
			deleteClass:function(id){
				if (this.isActive == '') {
					Toast("请选择要删除的分类");
				}else{
					alert("删除"+id);
					this.deleFun(id);
				};
			},
			chooseClass:function(id){
				var that = this;
				if (that.isActive == id) {
					that.isActive = '';
				}else{
					this.isActive = id;
				};
			},
			deleFun:function(id){
				var that = this;
				var time = new Date();//时间戳
				var d=time.getTime(); //时间戳
				this.$axios({
					method:"POST",
					headers: {'X-Requested-With': 'XMLHttpRequest'},
					url:'product/deleteCustomizeKind',
					data:{'requestId':d,'id':id}
				})
				.then(function (response) {
					if (response.data.code == '999997') {
						setTimeout(function(){
								that.$router.push('/Login')
							},500)
					}else if(response.data.code == '000000'){
							Toast("删除分类成功");
							var Pindex = '';
							that.dataList.KindList.forEach(function(k,v){
								if(k.customizeId == id){
									Pindex = v;
									return;
								}
							})
							that.dataList.KindList.splice(Pindex,1);
					}else{
						
					};
					console.log(that.dataList)
				})
				.catch(function (error) {
					console.log(error);
				});
			},
			goedit:function(id,name){
				this.$router.push({path:'/classedit',query:{customizeId:id,customizeName:name}});
			},
			getData:function(){
				var that = this;
				var time = new Date();//时间戳
				var d=time.getTime(); //时间戳
				this.$axios({
					method:"POST",
					headers: {'X-Requested-With': 'XMLHttpRequest'},
					url:'product/selectCustomizeTypeList',
					data:{'requestId':d}
				})
				.then(function (response) {
					if (response.data.code == '999997') {
						setTimeout(function(){
								that.$router.push('/Login')
							},500)
					}else if(response.data.code == '000000'){
						that.dataList = response.data.data;
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
	.wrap{
		font-size: .28rem;
		line-height: .9rem;
		color: #666;
		background-color: #f3f3f3;
		padding-bottom: 1rem;
	}
	.wrap li{
		background-color: #fff;
		margin-bottom: .1rem;
		padding: 0 .2rem;
		position: relative;
	}
	.wrap li img{
		width: .30rem;
		vertical-align: middle;
		margin: .1rem;
	}
	.wrap li span{
		color: #ccc;
		font-size: .24rem;
	}
	/*箭头*/
	.wrap li:after,  .wrap li:before {
	  border: .2rem solid transparent;
	  border-left: .2rem solid #fff;
	  width: 0;
	  height: 0;
	  position: absolute;
	  top: .2rem;
	  right: 2px;
	  content: ' '
	}
	 .wrap li:before {
	  border-left-color: #666;
	  right: 1px;
	}
	.footer{
		position: fixed;
		bottom: 0;
		display: flex;
		background-color: #fff;
		color: #ff6662;
		font-size: .28rem;
		line-height: .9rem;
		width: 100%;
	}
	.footer div{
		flex:1;
		text-align: center;
	}
	.footer img{
		width: .4rem;
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
	}
</style>