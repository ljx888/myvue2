<template>
	<div class="index">
		<div class="main_div">
			<div class="top_contant" v-bind:style="{backgroundImage:'url('+shopData.shopBackground+')'}">
				<div v-on:click="getData" class="dp_img">
					<img v-bind:src=shopData.logo>	
				</div>
				<div class="contant_info">
					<div class="info_left">
						<div class="dpmc">
							<span class="dpmc_name">{{shopData.title}}</span>
							<div class="fbh">
								<div class="fbh_leve">{{shopData.greade}}</div>
								<div class="fbh_num"><img v-for='n in shopData.greade' src='../assets/images/icon_star.png'></div>
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
							<div class="sc_bt share" id="gzhu">分享</div>
						</div>
						<div class="fensi">
							粉丝 <font class="yellow" id="dfen">{{shopData.favorite}}</font>
						</div>
						<img class="img_line" src="../assets/images/shop_line.png">
						<div class="daimai">
							代卖 <font class="yellow" id="zamai">{{shopData.distribuctionNum}}</font>
						</div>
						<img class="img_line" src="../assets/images/shop_line.png">
						<div class="shangping">
							商品 <font class="yellow" id="bbsl">{{shopData.productQty}}</font>
						</div>
					</div>
				</div>
			</div>
			<!-- 今日收入 -->
			<div class="today_income">
				<router-link :to="'todayIncome'">
				<p class="toDayIncome">
					<template v-if="shopData.todayAmt == 0">
						￥0.00
					</template>
					<template v-else>
						￥{{shopData.todayAmt/100}}
					</template>
				</p>
				<p class="today">今日收入</p>
			</router-link>	
		</div>
		<div class="withdraw">
			<ul>
				<router-link :to="'bankCard/perList'">
					<li><span class="my_Bankcard foot_icon"></span><span>银行卡</span><span class="bank_num" id="bankCardCount">({{shopData.bankCardCount}})</span></li>
				</router-link>
					
				<a  href="javascript:;">
					<li class="tixian"><span class="my_qianbao foot_icon"></span>立即提现</li>
				</a>
			</ul>
		</div>

		<!-- 店铺管理列表 -->
		<div class="manage_list">
			<mt-swipe :auto="0" :continuous='false'>
				<mt-swipe-item>
					<div class="manage_list_page">
						<ul>
							<router-link :to="'/myShop/onsell'">
								<li><img src="../assets/images/icon_shop_shop.png" alt=""><br>我的店铺</li>
							</router-link>
							<a href="/pages/order/seller_list/seller_ywc.jsp"><li><img src="../assets/images/icon_shop_order.png" alt=""><b class="orderBadge"></b><br>订单管理</li></a>
							<a ><li class="sales_link"><img src="../assets/images/icon_shop_ziying.png" alt=""><br>自营管理<input type="hidden" value="${sessionScope.session_user_bean.role}"/></li></a>


						</ul>
						<ul>
							<router-link :to="'/mymber/mydistribution'">
								<li><img src="../assets/images/icon_shop_member.png" alt=""><br>我的会员</li>
							</router-link>
							<router-link :to="'/incomestatistic'">
								<li><img src="../assets/images/icon_shop_statistics.png" alt=""><br>收入统计</li>
							</router-link>
							<a ><li class="partner"><img src="../assets/images/icon_shop_partner.png" alt=""><br>加盟管理</li></a>


						</ul>
					</div>
				</mt-swipe-item>
				<mt-swipe-item>
					<div class="manage_list_page">
						<ul>
							<a class="userstore"><li><img src="../assets/images/icon_shop_collection.png" alt=""><br>收藏店铺</li></a>
						</ul> 
					</div>
				</mt-swipe-item>
			</mt-swipe>
		</div>

	
</div>

<!-- 分享店铺页面样式 -->
<div class="layer share-layer">
	<i class="close-btn"></i>
	<div class="allShop">
		<ul>
			<li class="shopList">
				<img class="item-img" alt="" src="https://image.jlibom.com/icon_moren_dianpu.png">
				<span class="item-text">分享店铺1</span>
			</li>
		</ul>
	</div>
</div>
<!-- 滤镜层 -->
<div id="lvjing"></div>
<!-- 分享层 -->
<div id="shareImg"><img alt="" src="../assets/images/fenxiang_pic.png"></div>
<!-- 分享 -->
<div id="share">
	<div id="nativeShare"></div>
</div>	
</div>
</template>


<script>
	export default {
		name: 'index',
		data () {
			var that = this;
			return {
				shopData:{}
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
			}
		}
	}
	import '../assets/css/shop_top.css'
</script>


<style scoped>
	.index{background-color: #f3f3f3;}
	/*浠婃棩鏀跺叆*/
	.today_income{width: 100%;max-width: 72rem;height:2rem;text-align: center;background:#fff url() no-repeat 95% center;background-size:1.5rem 1.5rem;border-bottom:1px solid #f3f3f3;}
	.today_income a{width: 100%;height: 100%;text-align: center;font-size: .28rem;display: inline-block;position: relative;}
	.today_income a p{color: #666;}
	.today_income a .toDayIncome{font-size: .42rem;color: #ed1c17;padding-top: 0.5rem;display:inline-block !important;}

	/*搴楅嫪绠＄悊鍒楄〃*/
	.manage_list{width: 100%;height: 4.8rem;background-color: white;}
	.manage_list_page{width: 100%;float: left;overflow: hidden;}
	/*  .manage_list_page ul:nth-child(1){border-bottom: 1px solid #f2f2f2;} */
	.manage_list_page ul{overflow:hidden;}
	.manage_list_page ul li{padding: .4rem 0 .4rem 0;position:relative;}
	.manage_list_page ul a{width:33.333%;display: block;float: left;text-align: center;color: #333;font-size: .28rem;}
	.manage_list_page ul a img{width: 40%;}
	.manage_list_page ul .orderBadge{
		position:absolute; 
		top:16%;
		right:24%;
		display:inline-block;
		width:.4rem;
		height:.4rem;
		line-height:.4rem;
		border-radius:.2rem;
		color:#fff;
		background:#ff6662;
		text-align: center;
		font-size:.24rem;
		font-weight: normal;
		display:none;
	}

	.withdraw{width: 100%;margin-bottom:.5rem;font-size:.28rem;}
	.withdraw ul{background-color: white;overflow: hidden;}
	.withdraw ul li{width:50%;height: 2rem; float: left;line-height: 2rem;text-align: center;color: #303231;}
	.withdraw li .foot_icon{display: inline-block;width: .5rem;height: .5rem;background-size: .5rem auto;vertical-align: middle;margin-right: .1rem;}
	.withdraw ul li:first-child{border-right:0.02rem solid #f3f3f3;}
	.withdraw .my_Bankcard{background: url("../assets/images/my_Bankcard.png") 0 0 no-repeat;}
	.withdraw .my_qianbao{background: url("../assets/images/my_qianbao.png") 0 0 no-repeat;}
	.withdraw .bank_num{display: inline-block;margin-left: .1rem;font-weight: 500;line-height:100%;}

	article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary {  display: block;}
	audio,canvas,progress,video {  display: inline-block; /* 1 */
		vertical-align: baseline; /* 2 */
	}
	#ls_sts_bar{background:none;}
	#lvjing{position: fixed;top: 0;width: 100%;bottom: 0;background: rgba(0,0,0,0.5); z-index:1001; display:none;}
	#shareImg{position: fixed;top: 0;width: 100%;bottom: 0;z-index:999; display:none; }
	#shareImg img{width:100%;height:100%;}
	#share{width:100%; z-index:1002; display:none;  background-color:#fff; position: fixed; bottom: 0; float:left;}
	#share_title{width:100%; margin-top:4%;}
	#share_title img{width:100%;}

	#share_center{width:100%; float:left;}
	#share_center ul{width:100%; margin:0 auto; margin-top:4%;}
	#share_center ul li{width:25%; float:left; list-style:none; margin-bottom:5%;}
	#share_list{float:left; width:100%; text-align:center; font-size:12px; color:#666; line-height:20px;}
	#share_list img{width:45px;}

	/* 分享店铺弹层样式 */
	.layer {
		position: fixed;
		top: 0;
		bottom: 0;
		z-index: 889;
		display: none;
		width: 100%;
		background: rgba(0,0,0,.6); 
	}
	.layer .allShop {
		position: relative;
		margin: 50% auto 0;
		width: 80%;
		max-height: 216px;
		border-radius: 5px;
		background: #fff;
		overflow: auto;

	}
	.layer .close-btn {
		position: absolute;
		top: 24%;
		right: 10%;
		z-index: 102;
		display: inline-block;
		width: 30px;
		height: 30px;
		background: url('');
		background-size: 30px;
	}
	.layer .allShop .shopList {
		width: 86%;
		margin: 0 auto;
		border-bottom: 1px solid #f3f3f3;
		line-height: 70px;
	}
	.layer .allShop .item-img {
		margin-left: 12%;
		margin-right: 5%;
		width: 50px;
		height: 50px;
		border-radius: 50%;
		vertical-align: middle;

	}
	.layer .allShop .item-text {
		color: #ff6662;
		font-size: 16px;

	}

</style>
