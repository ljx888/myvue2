<template>
	<div class="wrap">
		<div class="adMsg">
			<p class="name"><span><img src="./images/member_list_character.png" alt="">收 货 人：</span>某某人</p>
			<p class="tel"><span><img src="./images/member_list_tel.png" alt="">联系电话：</span>13166292893</p>
			<div class="ad"><span><img src="./images/member_list_address.png" alt="">收货地址：</span>
				<p>上海市徐汇区漕河泾开发区虹梅路1535号星联科研大厦2#9层</p>
			</div>
		</div>
		<div class="goodsmsg">
			<div class="pic"><img src="http://ojhq3mgil.bkt.clouddn.com/web/478/20170914/201709141442581468.jpg" alt=""><span>自营</span></div>
			<div class="text">
				<p class="goods_name">充电宝常常待机不断电出游必备刚发好地方哈迪斯返回的手机卡发的发生和规范健康大好时光接口富商大贾</p>
				<p class="type">规格：黑色（12000mh）</p>
				<p class="price">￥90.00 <span>×2</span></p>
			</div>
		</div>
		<div class="goodsmsg">
			<div class="pic"><img src="http://ojhq3mgil.bkt.clouddn.com/web/478/20170914/201709141442581468.jpg" alt=""><span>自营</span></div>
			<div class="text">
				<p class="goods_name">充电宝常常待机不断电出游必备</p>
				<p class="type">规格：黑色（12000mh）</p>
				<p class="price">￥90.00 <span>×2</span></p>
			</div>
		</div>
		<div class="order">
			<p>订单编号：10002064</p>
			<p>支付方式：支付宝网页支付</p>
			<p>运&emsp;&emsp;费：￥0.00</p>
			<p>物流公司：中通快递</p>
			<p>物流单号：10002456489856</p>
			<p>订单状态：<span>订单收货</span></p>
			<p>订单说明：周一到周五送达，禁止挤压</p>
		</div>
		<div class="allIncome">
			<p>总收入：<span>￥0.00</span></p>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		name:"memberorderdetail",
		data(){
			return{

			}
		}
	}
</script>

<style scoped>
	.wrap{
		padding-bottom: 1.1rem;
		background-color: #f3f3f3;
	}
	.adMsg{
		width: 100%;
		background-color: #fff;
		padding: .2rem;
		font-size: .28rem;
		line-height: .4rem;
		color: #333;
	}
	.adMsg span{
		width: 2rem;
		display: inline-block;
		color: #666;
	}
	.adMsg span img{
		width: .32rem;
    vertical-align: bottom;
    margin-right: .1rem;
	}
	.adMsg .ad{
		display: flex;
	}
	.adMsg .ad p{
		flex:1;
	}
	.adMsg .tel{
		margin:.1rem auto;
	}
	.goodsmsg{
		display: flex;
		width:100%;
		background-color: #fff;
		padding: .2rem;
		font-size: .28rem;
		margin-top: .1rem;
	}
	.goodsmsg .pic{
		width: 1.6rem;
		height: 1.6rem;
		position: relative;
		margin-right: .1rem;
	}
	.goodsmsg .pic img{
		width: 100%;
		height: 100%;
	}
	.goodsmsg .pic span{
		display: block;
		padding: .1rem;
		background-color: rgba(0,0,0,0.5);
		color: #fff;
		font-size: .24rem;
		position: absolute;
		right: 0;
		bottom: 0;
	}
	.goodsmsg .text{
		flex:1;
		position: relative;
		height: 1.6rem;
	}
	.goodsmsg .text .goods_name{
		overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-all;
    color: #333;
    line-height: .36rem;
	}
	.goodsmsg .text .type{
		color: #8c8c8c;
		margin-top: .2rem;
	}
	.goodsmsg .text .price{
		position: absolute;
		bottom: 0;
		width: 100%;
		color: #ff6662;
		font-size: .32rem;
	}
	.goodsmsg .text .price span{
		float: right;
		margin-right: .2rem;
		color: #666;
	}
	.order{
		width:100%;
		background-color: #fff;
		padding: .2rem;
		font-size: .28rem;
		margin-top: .1rem;
		font-weight: 600;
		color: #666;
	}
	.allIncome{
		position: fixed;
		bottom: 0;
		width: 100%;
		background-color: #fff;
		font-size: .28rem;
		height: 1rem;
		line-height: 1rem;
		padding: 0 .2rem;
	}
	.allIncome span{
		float: right;
		color: #ff6662;
	}
</style>