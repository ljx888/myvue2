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
			<div class="pic"><img src="" alt=""></div>
			<div class="text">
				<p class="goods_name">充电宝常常待机不断电出游必备</p>
				<p class="type">规格：黑色（12000mh）</p>
				<p class="price">￥90.00 <span>X2</span></p>
			</div>
		</div>
		<div class="order">
			<p>订单编号：10002064</p>
			<p>支付方式：支付宝网页支付</p>
			<p>运费：￥0.00</p>
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
</style>