<template>
	<div class="order">
		<div class="top">
			<p>
				<img src="./images/member_list_character.png" alt="">张三 
				<img src="./images/member_list_tel.png" alt="">13166292893
			</p>
			<p class="address"><img src="./images/member_list_address.png" alt=""><span>[默认]上海市徐汇区漕河泾开发区星联科研大厦2号楼9层</span></p>
		</div>
		<div class="shop_list">
			<p class="shop_name"><img src="http://ojhq3mgil.bkt.clouddn.com/web/523/20170221/201702211907425525.jpg" alt="">吉利宝小店</p>
			<div class="product_list">
				<img src="http://ojhq3mgil.bkt.clouddn.com/web/523/20170221/201702211907425525.jpg" alt="">
				<div class="right">
					<p class="goods_name"><span>#红富士#</span>红红火火红苹果新疆克拉玛依特产就是甜，就是好吃买三送二还包邮超划算呀</p>
					<p class="guige">规格：红富士（大箱）</p>
					<p class="price">￥48.80 <span>×1</span></p>
				</div>
			</div>
			<div class="msg">
				<p class="msg_text">买家留言：<textarea placeholder="给卖家留言（30字以内）"></textarea></p>
				<p class="total">共计1件商品 合计：<span>￥48.80</span></p>
			</div>
		</div>
		<div class="footer">
			<div class="right">
				<p>
					总计：￥1.00
					<br>
					免运费
				</p>
				<span>提交订单</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'order',
		data(){
			return{

			}
		}
	}
</script>

<style scoped>
	.order{
		background-color: #f3f3f3;
		padding-bottom: 1.1rem;
	}
	.order .top{
		padding: .2rem;
		font-size: .28rem;
		line-height: .4rem;
		color: #333;
		background-color: #fff;
		position: relative;
	}
	.order .top img{
		width: .3rem;
		height: .3rem;
		vertical-align: middle;
		margin-right: .1rem;
	}
	.order .address{
		display: inline-flex;
		margin-top: .1rem;
	}
	.order .address span{
		width: 85%;
	}
	/*箭头*/
	.order .top:after,  .order .top:before {
	  border: .2rem solid transparent;
	  border-left: .2rem solid #fff;
	  width: 0;
	  height: 0;
	  position: absolute;
	  top: 50%;
	  right: 2px;
	  content: ' ';
	  margin-top: -.2rem;
	}
	.order .top:before {
	  border-left-color: #666;
	  right: 1px;
	}
	.order .shop_list{
		font-size: .28rem;
		background-color: #fff;
		margin-top: .1rem;
	}
	.order .shop_name{
		line-height: 1rem;
		color: #7a7a7a;
		border-bottom: 1px solid #f3f3f3;
		padding-left: .2rem;
	}
	.order .shop_name img{
		width: .5rem;
		height: .5rem;
		vertical-align: middle;
		border-radius: 50%;
		margin-right: .1rem;
	}
	.order .product_list{
		padding: .2rem;
		display: flex;
		font-size: .24rem;
		line-height: .32rem;
	}
	.order .product_list img{
		width: 1.8rem;
		height: 1.8rem;
		margin-right: .1rem;
	}
	.order .right{
		position: relative;
		flex:1;
	}
	.order .right .price{
		position: absolute;
		bottom: 0;
		color: #666;
		width: 100%;
		font-size: .32rem;
	}
	.order .right .price span{
		float: right;
	}
	.order .guige{
		position: absolute;
		bottom: .6rem;
		color: #ccc;
		word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
	}
	.order .goods_name{
		word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
	}
	.order .goods_name span{
		color: #ff6662;
	}
	.order .shop_list .msg{
		border-top: 1px solid #f3f3f3;
		font-size: .24rem;
	}
	.msg_text{
		display: flex;
		padding: .2rem;
		color: #333;
	}
	.msg_text textarea{
		resize:none;
		border: none;
		outline: none;
		flex:1;
	}
	.total{
		height: .8rem;
		line-height: .8rem;
		border-top: 1px solid #f3f3f3;
		border-bottom: 1px solid #f3f3f3;
		text-align: right;
		padding-right: .2rem;
		color: #7a7a7a;
	}
	.total span{
		color: #ff6662;
	}
	.footer{
		width: 100%;
		height: 1rem;
		display: flex;
		color: #7a7a7a;
		background-color: #fff;
		position: fixed;
		bottom: 0;
		z-index: 2;
	}
	.footer .left{
		font-size: .28rem;
		flex:1;
		line-height: 1rem;
		padding-left: .2rem;
	}
	.footer .left img{
		width: .3rem;
		height: .3rem;
		vertical-align: sub;
	}
	.footer .right{
		flex:2;
		display: flex;
	}
	.footer .right p{
		font-size: .26rem;
		flex:1;
		line-height: .5rem;
    text-align-last: end;
    padding-right: .2rem;
	}
	.footer .right span{
		display: inline-block;
		width: 2rem;
		height: 1rem;
		line-height: 1rem;
		text-align: center;
		font-size: .36rem;
		color: #fff;
		background-color: #ff6662;
	}
</style>