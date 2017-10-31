<template>
	<div class="shop">
		<div class="top_contant" v-bind:style="{backgroundImage:'url('+shopData.shopBackground+')'}">
				<div class="dp_img">
					<img v-bind:src=shopData.logo>	
				</div>
				<div class="contant_info">
					<div class="info_left">
						<div class="dpmc">
							<span class="dpmc_name">{{shopData.title}}</span>
							<div class="fbh">
								<div class="fbh_leve">{{shopData.greade}}</div>
								<div class="fbh_num"><img v-for='n in shopData.greade' src='../../assets/images/icon_star.png'></div>
							</div>
						</div>
						<div class="dpms">{{shopData.shopDesc}}</div>
						<div class="dpbq">
							<img v-for='item in shopData.shopLabelList' v-bind:src=item.shopLabelImg alt="">
						</div>
					</div>
					<div class="info_right">
						<div class="shoucang">
							<input id="gzhulx" type="hidden" value="1">
							<div class="sc_bt share" id="gzhu">+关注</div>
						</div>
						<div class="fensi">
							粉丝 <font class="yellow" id="dfen">{{shopData.favorite}}</font>
						</div>
						<img class="img_line" src="../../assets/images/shop_line.png">
						<div class="daimai">
							代卖 <font class="yellow" id="zamai">{{shopData.distribuctionNum}}</font>
						</div>
						<img class="img_line" src="../../assets/images/shop_line.png">
						<div class="shangping">
							商品 <font class="yellow" id="bbsl">{{shopData.productQty}}</font>
						</div>
					</div>
				</div>
			</div>
			<ul class="nav">
				<li><router-link to="/shop/shopIndex" replace><img src="./images/dianpu_fenlei_home.png" alt=""><br>店铺首页</router-link></li>
				<li><router-link to="/shop/selfproduct" replace><img src="./images/dianpu_fenlei_cp.png" alt=""><br>自营产品</router-link></li>
				<li @click.stop="showClassFun"><a><img src="./images/dianpu_iocn_fenlei.png" alt=""><br>店家分类</a></li>
				<li><router-link to="/shop/shopData" replace><img src="./images/dianpu_fenlei_jianjie.png" alt=""><br>店家资料</router-link></li>
			</ul>
		<router-view></router-view>
		<ul class="footer">
			<li v-on:click="toPay" class="toPay"><img src="./images/shop_maidan.png" alt="">我要买单</li>
			<li  v-on:click="toJoin"><img src="./images/bot_jiameng.png" alt=""><br>加盟我</li>
			<li v-on:click="toShopCar" class="shopCar"><img src="./images/bot_shoppingcar.png" alt=""><br>购物车</li>
			<li><img src="./images/icon_wode.png" alt=""><br>我的</li>
		</ul>
		<div class="classList" v-show="showClass">
			<div class="content">
				<div @click.stop="showClassFun" class="close_btn">
					<img src="./images/icon_store_close.png" alt="">
				</div>
				<ul>
					<li v-on:click.stop="toClassification">十里桃花</li>
					<li v-on:click.stop="toClassification">电子配件</li>
					<li v-on:click.stop="toClassification">手机首饰</li>
					<li v-on:click.stop="toClassification">日常加护</li>
					<li v-on:click.stop="toClassification">十里桃花</li>
					<li v-on:click.stop="toClassification">电子配件</li>
					<li v-on:click.stop="toClassification">手机首饰</li>
					<li v-on:click.stop="toClassification">日常加护</li>
					<li v-on:click.stop="toClassification">十里桃花</li>
					<li v-on:click.stop="toClassification">电子配件</li>
					<li v-on:click.stop="toClassification">手机首饰</li>
					<li v-on:click.stop="toClassification">日常加护</li>
					<li v-on:click.stop="toClassification">十里桃花</li>
					<li v-on:click.stop="toClassification">电子配件</li>
					<li v-on:click.stop="toClassification">手机首饰</li>
					<li v-on:click.stop="toClassification">日常加护</li>
				</ul>
			</div>
			
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		name:"shop",
		data(){
			return{
				shopData:{},
				showClass:false
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
					url:'shopCentral/getCentralData',
					data:{}
				})
				.then(function (response) {
					console.log(response);
					if (response.data.code == '999997') {
						setTimeout(function(){
							that.$router.push('/Login')
						},500)
					}else if(response.data.code == '000000'){
						that.shopData = response.data.data
					};
					console.log(that.shopData)
				})
				.catch(function (error) {
					console.log(error);
				});
			},
			showClassFun:function(){
				this.showClass = !this.showClass;
			},
			toClassification:function(){
				this.$router.push("/goodsclassification");
			},
			toPay:function(){
				this.$router.push("/toPay");
			},
			toJoin:function(){
				this.$router.push("/join");
			},
			toShopCar:function(){
				this.$router.push("/shopCar");
			}
		}
	}
</script>

<style scoped>
	.shop{
		padding-bottom: 1.2rem;
		background-color: #f3f3f3;
	}
	.nav{
		display: flex;
		font-size: .28rem;
		text-align: center;
		background-color: #fff;
		margin-bottom: .2rem;
	}
	.nav li{
		flex:1;
	}
	.nav li img{
		width: .6rem;
		height: .6rem;
	}
	.nav a{
		display: inline-block;
		color: #666;
		padding: .2rem 0;
	}
	.nav a.router-link-active{
		border-bottom: 1px solid red;
    width: 100%;
	}
	.footer{
		position: fixed;
		bottom:0;
		width: 100%;
		display: flex;
		text-align: center;
		font-size: .26rem;
		height: 1rem;
		
		background-color: #fff;
	}
	.footer li{
		flex:1;
		color: #666;
	}
	.footer .toPay{
		flex:3;
		background-color: #ff6662;
		color: #fff;
		line-height: 1rem;
	}
	.footer li img{
		width: .55rem;
	}
	.footer .toPay img{
		width: .35rem;
		vertical-align: sub;
	}
	.footer .shopCar{
		border-right:1px solid #ededed; 
		border-left:1px solid #ededed; 
	}
	.classList{
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background-color: rgba(0,0,0,0.5);
		z-index: 10;
	}
	.classList .content{
		position: fixed;
    width: 80%;
    height: 60%;
    background-color: #fff;
    z-index: 3;
    transform: translateX(-50%);
    margin-left: 50%;
    top: 20%;
    border-radius: 8px;
	}
	.classList ul{
		padding: 0 .2rem;
		width: 100%;
		height: 100%;
		overflow: auto;
	}
	.classList ul li{
		height: 1rem;
		font-size: .3rem;
		line-height: 1rem;
		color: #555;
		border-bottom: 1px solid #e0e0e0;
		text-indent: .1rem;
	}
	.classList .close_btn{
		position: absolute;
		top: -.8rem;
		right: 0;
		width: .6rem;
		height: .6rem;
		line-height: .6rem;
	}
	.classList .close_btn img{
		width: 100%;
		height: 100%;
	}
</style>