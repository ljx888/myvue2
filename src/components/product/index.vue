<template>
	<div class="product">
		<div class="picswipe">
			<div class="nav">
				<ul>
					<li><img src="./images/icon_arrow.png" alt=""></li>
					<li><img src="./images/icon_jb@3x.png" alt=""></li>
					<li><img src="./images/icon_cart.png" alt=""></li>
					<li><img src="./images/icon_aixin.png" alt=""></li>
				</ul>
			</div>
			<mt-swipe :auto="4000">
				<mt-swipe-item><img src="http://ojhq3mgil.bkt.clouddn.com/478/20170706/201707061105262227.jpg?imageMogr2/thumbnail/360x" alt=""></mt-swipe-item>
				<mt-swipe-item><img src="http://ojhq3mgil.bkt.clouddn.com/478/20170706/201707061028256756.jpg?imageMogr2/thumbnail/360x" alt=""></mt-swipe-item>
				<mt-swipe-item><img src="http://ojhq3mgil.bkt.clouddn.com/478/20160816/201608160107081131.jpg?imageMogr2/thumbnail/160x" alt=""></mt-swipe-item>
			</mt-swipe>
			<div class="picdetail">图文<br>详情</div>
		</div>
		<div class="goosMsg">
			<p class="goodsname"><span>#法国葡萄酒#</span>长城干红葡萄干哈密瓜啤酒厂家直销</p>
			<p class="price"><span class="now">￥45.00</span><span class="old">￥56.00</span><img src="./images/icon_temai.png" alt=""></p>
			<p class="goodsDisc">
				好酒好喝寄回家克劳福德三机个哦哦凉快喽健康快乐就看见了看 级风快到了撒娇
			</p>
		</div>
		<ul class="sale_list">
			<li>10人在卖</li>
			<li>已售出：28</li>
			<li>运费：免运费</li>
		</ul>
		<div class="shopMsg">
			<div class="shop_top">
				<div class="pic"><img src="http://ojhq3mgil.bkt.clouddn.com/web/478/20170914/201709141442581468.jpg" alt=""></div>
				<div class="right">
					<p class="shop_name">哇哈哈小店</p>
					<p class="label">
						<img src="http://ojhq3mgil.bkt.clouddn.com/admin/20161028/201610281822325408.jpg" alt="">
						<img src="http://ojhq3mgil.bkt.clouddn.com/admin/20161028/201610281822400505.jpg" alt="">
						<img src="http://ojhq3mgil.bkt.clouddn.com/admin/20161028/201610281822482974.jpg" alt="">
					</p>
				</div>
			</div>
			<ul class="shop_middle">
				<li>12<br>商品数</li>
				<li>16<br>分销会员</li>
				<li>13<br>关注数</li>
			</ul>
			<ul class="shop_bottom">
				<li class="guanzhu_btn"><img src="./images/icon_follow.png" alt="">关注店铺</li>
				<li class="guanzhu_btn"><img src="./images/icon_shop.png" alt="">进店逛逛</li>
			</ul>
		</div>
		<div class="hotGoods">
			<p class="hot_title"><img src="./images/line.png" alt="">&emsp;热销产品&emsp;<img src="./images/line02.png"></p>
			<div class="hot_wrap">
				<mt-swipe :auto="4000">
					<mt-swipe-item>
						<p>
							<img src="http://ojhq3mgil.bkt.clouddn.com/478/20170706/201707061105262227.jpg?imageMogr2/thumbnail/360x" alt=""><br>小学肉很好吃
						</p>
						<p>
							<img src="http://ojhq3mgil.bkt.clouddn.com/478/20170706/201707061028256756.jpg?imageMogr2/thumbnail/360x" alt=""><br>北京烤鸭，买仨送俩好吃不贵护肤干点啥
						</p>
						<p>
							<img src="http://ojhq3mgil.bkt.clouddn.com/478/20160816/201608160107081131.jpg?imageMogr2/thumbnail/160x" alt=""><br>大鹏烧烤，考啥都好吃
						</p>
					</mt-swipe-item>
					<mt-swipe-item>
						<p>
							<img src="http://ojhq3mgil.bkt.clouddn.com/478/20170706/201707061028256756.jpg?imageMogr2/thumbnail/360x" alt=""><br>北京烤鸭，买仨送俩
						</p>
						<p>
							<img src="http://ojhq3mgil.bkt.clouddn.com/478/20170706/201707061105262227.jpg?imageMogr2/thumbnail/360x" alt=""><br>小学肉很好吃接口黄齑淡饭发个单身狗
						</p>
					</mt-swipe-item>
				</mt-swipe>
			</div>
		</div>
		<div class="detail">
			<p class="hot_title"><img src="./images/line.png" alt="">&emsp;热销产品&emsp;<img src="./images/line02.png"></p>
			<img src="http://ojhq3mgil.bkt.clouddn.com/web/478/20170407/201704071806117276.jpg?imageMogr2/thumbnail/720x" alt="">
		</div>
		<ul class="bottom">
			<li><img src="./images/icon_service.png" alt=""></li>
			<li>分销此商品</li>
			<li>加入购物车</li>
			<li>立即购买</li>
		</ul>
	</div>
</template>

<script type="text/javascript">
	export default {
		name:"product",
		data(){
			return{

			}
		}
	}
</script>

<style scoped>
	.product{
		width: 100%;
		background-color: #f3f3f3;
		padding-bottom: 1rem;
	}
	.picswipe{
		width: 100%;
		height:7.2rem;
		position: relative;
	}
	.picswipe img{
		width: 100%;
	}
	.picdetail{
		padding: .04rem .2rem;
		border-radius: 50%;
		font-size: .28rem;
		text-align: center;
		line-height: .44rem;
		background-color: #f3f3f3;
		opacity: 0.5;
		color: #666;
		position: absolute;
		right: .2rem;
		bottom: .4rem;
	}
	.nav{
		position: fixed;
		width: 100%;
		z-index: 2;
		height: 1rem;
		background-color: rgba(255,255,255,0.5);
	}
	.nav ul{
		display: flex;
		height: 1rem;
	}
	.nav li{
		flex:1;
	}
	.nav li:first-child{
		flex:3;
	}
	.nav li img{
		width: .5rem;
		height:.5rem;
		margin: .2rem;
	}
	.goosMsg{
		padding: .2rem;
		background-color: #fff;
	}
	.goodsname{
		font-size: .32rem;
		margin-bottom: .2rem;
	}
	.goodsname span{
		color: #ff6662;
	}
	.price{
		font-size: .24rem;
	}
	.price .now{
		font-size: .32rem;
		color: #ff6662;
		font-weight: 600;
	}
	.price .old{
		text-decoration: line-through;
		font-size: .26rem;
		margin:0 .2rem;
	}
	.price img{
		width: .6rem;
	}
	.goodsDisc{
		font-size: .24rem;
		line-height: .32rem;
    margin-top: .2rem;
    color: #ff6662;
	}
	ul.sale_list {
		display: flex;
		border-top: 1px solid #ededed;
		background-color: #fff;
	}
	.sale_list li{
		flex:1;
		height: 1rem;
		line-height: 1rem;
		text-align: center;
		color: #888;
		font-size: .28rem;
	}
	.sale_list li:nth-child(2){
		border-right: 1px solid #ededed;
		border-left: 1px solid #ededed;
	}
	.shopMsg{
		background-color: #fff;
		color: #666;
		margin-top: .2rem;
		padding-bottom: .1rem;
	}
	.shop_top{
		display: flex;
		padding: .2rem;
	}
	.shop_top .pic{
		width: 1.2rem;
		height: 1.2rem;
		margin-right: .2rem;
	}
	.shop_top .pic img{
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
	.shop_top .right{
		flex:1;
		padding-top: .2rem;
	}
	.shop_name{
		font-size: .28rem;
		margin-bottom: .2rem;
	}
	.label img{
		float: left;
		width: 1rem;
	}
	.shop_middle{
		display: flex;
	}
	.shop_middle li{
		flex:1;
		font-size: .28rem;
		text-align: center;
		line-height: .5rem;
	}
	.shop_middle li:nth-child(2){
		border-right: 1px solid #ededed;
		border-left: 1px solid #ededed;
	}
	.shop_bottom{
		font-size: .30rem;
		overflow: hidden;
		margin: .2rem;
	}
	.shop_bottom li{
		float: left;
		height: .6rem;
		line-height: .6rem;
		text-align: center;
		width: 40%;
		margin:0 5%;
		border: 1px solid #666;
		border-radius: 4px;
	}
	.shop_bottom img{
		width: .4rem;
		vertical-align: sub;
	}
	.hotGoods{
		margin-top: .2rem;
    background-color: #fff;
	}
	.hot_title{
		text-align: center;
    line-height: .8rem;
    font-size: .36rem;
    background-color: #fff;
	}
	.hot_title img{
		width: 30%;
		vertical-align: middle;
	}
	.hot_wrap{
		height: 3.5rem;
	}
	.hot_wrap p{
		float: left;
		width: 30%;
		margin: 0 1.5%;
		font-size: .24rem;
		color: #333;
		overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    word-break: break-all;
	}
	.hot_wrap p img{
		width: 100%;
	}
	.detail{
		margin-top: .2rem;
	}
	.detail>img{
		width: 100%;
	}
	.bottom{
		display: flex;
		font-size: .36rem;
		position: fixed;
		width: 100%;
		bottom: 0;
		background-color: #666;
		color: #fff;
	}
	.bottom li{
		height: 1rem;
		flex:2;
		text-align: center;
		line-height: 1rem;
		border-right: 1px solid #fff;
	}
	.bottom li img{
		width: 74%;
		vertical-align: middle;
	}
	.bottom li:first-child{
		flex:1;
	}
	.bottom li:last-child{
		background-color: #ff6662;
	}
</style>