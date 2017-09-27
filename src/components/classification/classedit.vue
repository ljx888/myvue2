<template>
	<div class="classedit">
		<div class="classname">
			<input v-if="customizeName == '默认分类'" type="text" v-model="customizeName" readonly="true">
			<input id="name_inp" v-else type="text" v-model="customizeName">
			<span v-if="customizeName == '默认分类'" v-show="isshowSave"></span>
			<span v-else v-show="isshowSave" @click="changeClassName" class="save"><img src="./images/icon_success.png" alt=""></span>
		</div>
		<mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded"  @top-status-change="handleTopChange" ref="loadmore" :auto-fill="false">
			<ul class="list">
				<div class="own">本类商品</div>
				<li class="item" v-for="item in dataList">
					<div class="pic">
						<img :src="item.imgPath" alt="">
						<span v-show="item.flag == '1'" class="type">自营</span>
						<span v-show="item.flag == '2'" class="type">分销</span>
					</div>
					<div class="msg">
						<p><span v-show="item.tag != null" class="tag">#{{item.tag}}#</span>{{item.name}}</p>
						<div class="reBtn"><img src="./images/shangpin_icon_replace.png" alt="">更换分类</div>
					</div>
				</li>
				
			</ul>
			<div v-show="dataList.length == 0" class="noData">暂无数据</div>
			<div slot="bottom" class="mint-loadmore-bottom">
	      <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">释放加载更多数据</span>
	      <span v-show="topStatus === 'loading'">Loading...</span>
	    </div>
		</mt-loadmore>
	</div>
</template>

<script type="text/javascript">
	import { Toast } from 'mint-ui';
	export default {
		name:"classedit",
		data(){
			return{
				customizeName:'',
				customizeId:'',
				isshowSave:false,
				dataList:[],
				page:1,
				pageCount:"",
				allLoaded:false,
				topStatus: ''
			}
		},
		mounted(){
			this.customizeId = this.$route.query.customizeId;
			this.customizeName = this.$route.query.customizeName;
			this.getData();
			document.getElementById('name_inp').focus();
		},
		watch:{
			customizeName:function(){
				this.isshowSave = true;
			}
		},
		methods:{
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
						"pageSize":10,
						"requestId":d,
						"customizeId":that.customizeId,
						"status":10
					}
				})
				.then(function (response) {
					if (response.data.code == '999997') {
						setTimeout(function(){
								that.$router.push('/Login')
							},500)
					}else if(response.data.code == '000000'){
						that.pageCount = response.data.data.pageCount;
						that.dataList = that.dataList.concat(response.data.data.productInfo);
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
			changeClassName:function(){
				this.isshowSave = !this.isshowSave; 
				var that = this;
				var time = new Date();//时间戳
				var d=time.getTime(); //时间戳
				this.$axios({
					method:"POST",
					headers: {'X-Requested-With': 'XMLHttpRequest'},
					url:'product/updateCustomizeKind',
					data:{
						"name":that.customizeName,
						"requestId":d,
						"id":that.customizeId
					}
				})
				.then(function (response) {
					if (response.data.code == '999997') {
						setTimeout(function(){
								that.$router.push('/Login')
							},500)
					}else if(response.data.code == '000000'){
						Toast("修改分类名成功");
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
	.classname{
		color: #666;
		font-size: .32rem;
		line-height: .9rem;
		background-color: #fff;
		margin-bottom: .2rem;
		text-indent: .2rem;
		position: relative;
	}
	.classname input{
		width: 95%;
    height: .9rem;
    color: #666;
    font-size: .32rem;
    border: none;
    outline: none;
	}
	.save{
		text-indent: 0;
		position: absolute;
		display: inline-block;
		height: .9rem;
		width: .9rem;
		background-color:#093;
		top: 0;
		right: 0; 
		z-index: 2;
	}
	.save img{
		width: 100%;
		height: 100%;
	}
	.list{
		background-color: #fff;
		color: #666;
	}
	.own{
		font-size: .30rem;
		line-height: .9rem;
		border-bottom: .02rem solid #ededed;
		text-indent: .2rem;
	}
	.item{
		display: flex;
		font-size: .24rem;
		padding-bottom: .2rem;
		margin: .2rem;
		border-bottom: .02rem solid #ededed;
	}
	.pic{
		width: 1.2rem;
		height: 1.2rem;
		margin-right: .2rem;
		position: relative;
	}
	.pic .type{
		position: absolute;
		bottom: 0;
		right: 0;
		padding: .1rem;
		background-color: rgba(0,0,0,0.5);
		color: #fff;
	}
	.pic img{
		width: 100%;
		height: 100%;
	}
	.msg{
		flex:1;
		position: relative;
	}
	.msg p{
		overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-all;
	}
	.msg .tag{
		color: #ff6662;
	}
	.msg .reBtn{
		position: absolute;
		right: 0;
		bottom: 0;
		padding: .05rem;
	}
	.msg .reBtn img{
		width: .24rem;
		height: .24rem;
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