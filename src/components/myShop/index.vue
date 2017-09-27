<template>
	<div class="myShop" v-bind:class="{ overflowH: isshowSelect }">
		<ul class="top_nav">
			<li><router-link :to="'/classification'"><img src="./images/icon_store_fenlei.png"/><br>分类管理</router-link></li>
			<li><router-link :to="'/todayIncome'"><img src="./images/icon_store_fenxiang.png"/><br>分享</router-link></li>
			<li><router-link :to="'/shop/shopIndex'"><img src="./images/icon_store_yulan.png"/><br>预览</router-link></li>
		</ul>
		<ul class="bar">
			<li>
				<router-link :to="'/myShop/onsell'" replace>
					<span>销售中</span>
				</router-link>
			</li>
			<li>
				<router-link :to="'/myShop/offShelves'" replace>
					<span>已下架</span>
				</router-link>
			</li>
			<li>
				<span class='bottom_arrow' v-on:click='showSelect'
				 v-bind:class="{top_arrow : isshowSelect}">筛选</span>
			</li>
		</ul>
		<ul class="select" v-show="isshowSelect">
			<li @click="selectFun(1)" v-on:click="showSelect">自营</li>
			<li @click="selectFun(2)" v-on:click="showSelect">分销</li>
		</ul>
		<router-view :flag="selectItem"></router-view>
		<div class="mask" v-show="isshowSelect"></div>
		
	</div>
</template>

<script type="text/javascript">
	export default {
		name:'myShop',
		data(){
			return{
				isshowSelect:false,
				selectItem:""
			}
		},
		methods:{
			showSelect:function(){
				this.isshowSelect = !this.isshowSelect;
			},
			selectFun:function(val){
				this.selectItem = val;
			}
		}
	}
</script>

<style scoped>
.myShop{
	background-color: #f3f3f3;
}
.overflowH{
	overflow: hidden;
	height: 100%;
}
.top_nav{
	display: flex;
	font-size: .28rem;
	height: 1.2rem;
	background-color: #fff;
	text-align: center;
}
.top_nav li{
	flex:1;
}
.top_nav img{
	width: .5rem;
	height: .5rem;
	margin-top: .21rem;
}
.top_nav li a{
	color: #666;
}

.bar{
	display: flex;
	height: 1rem;
	background-color: #fff;
	text-align: center;
	margin-top: .1rem;
	line-height: 1rem;
}
.bar li{
	flex:1;
	font-size: .28rem;
}
.bar li span{
	color: #666;
	padding: .32rem;
}
.bar li .router-link-active span{
	border-bottom: 2px solid #ff6662;
	color: #ff6662;
}
.select li{
	font-size: .24rem;
	line-height: .8rem;
	text-indent: .4rem;
	background: #fff;
	color: #666;
	border-top: 1px solid #f3f3f3;
	position: relative;
}
.select li:after, .select li:before {
  border: .2rem solid transparent;
  border-left: .2rem solid #fff;
  width: 0;
  height: 0;
  position: absolute;
  top: .2rem;
  right: 2px;
  content: ' '
}

.select li:before {
  border-left-color: #666;
  right: 1px;
}
.top_nav,.bar,.select{
	position: relative;
	z-index: 2;
}
.mask{
	width: 100%;
	min-height: 100%;
	position: fixed;
	z-index: 1;
	top: 1.4rem;
	bottom: 0;
	background-color: rgba(0,0,0,0.5);
}
/* 箭头 */
.bottom_arrow:after{
	border: .16rem solid transparent;
  border-top: .16rem solid #666;
  width: 0;
  height: 0;
  position: absolute;
  content: ' ';
  top: .5rem;
}
.top_arrow:after{
	border: .16rem solid transparent;
  border-bottom: .16rem solid #666;
  width: 0;
  height: 0;
  position: absolute;
  content: ' ';
  top: .3rem;
}
</style>