<template>
	<div class="shopCar">
		<div class="shopList" v-for="(shop_item,shop_index) in shopList">
			<p class="shop_name">
				<img v-on:click.stop="shopChoose(shop_index)" class="circle" :src="[shop_item.checked?icon_choose:icon_unchoose]">
				<img class="shop_pic" src="http://ojhq3mgil.bkt.clouddn.com/web/478/20170914/201709141442581468.jpg" alt="">吉利宝小店
			</p>
			<div class="goodsList" v-for="(goods_item,goods_index) in shop_item.goodsList">
				<div class="left">
					<img v-on:click.stop="goodsChoose(shop_index,goods_index)" class="circle" :src="[goods_item.checked?icon_choose:icon_unchoose]">
					<img class="goods_pic" src="http://ojhq3mgil.bkt.clouddn.com/613/20170420/201704200936376750.jpg" alt="">
				</div>
				<div class="right">
					<p class="goods_name">高档洗护用品这是回复都是煎熬恢复健康尽快恢复健康的更换即可反倒是分类看见个克劳福德</p>
					<p class="guige">规格：套装（大杯）</p>
					<p class="price">￥12.80</p>
					<ul>
						<li>-</li>
						<li><input type="text" value="1"></li>
						<li>+</li>
					</ul>
					<img class="delete" src="./images/shangpin_icon_delete.png" alt="">
				</div>
			</div>
		</div>


		


		
		<div class="footer">
			<div class="left">
				<img v-on:click="AllChoose" :src="[allCkecked?icon_choose:icon_unchoose]">
				全选
			</div>
			<div class="right">
				<p>
					总计：￥1.00
					<br>
					不含运费
				</p>
				<span @click="toOrder">立即结算</span>
			</div>
		</div>
	</div>
</template>

<script>
import icon_choose from "./images/iocn_circle_default.png"
import icon_unchoose from "./images/iocn_circle.png"
	export default{
		name:"shopCar",
		data(){
			return{
				icon_choose:require("./images/iocn_circle_default.png"),
				icon_unchoose:require("./images/iocn_circle.png"),
				allCkecked:false,
				shopList:[
					{
						checked:false,
						goodsList:[{checked:false}]
					},
					{
						checked:false,
						goodsList:[{checked:false},{checked:false}]
					}
				]
				
			}
		},
		methods:{
			AllChoose:function(){
				var flag = true;
				if(this.allCkecked){
					flag = false;
				}
				for(var i = 0; i < this.shopList.length; i++){
					this.shopList[i]['checked'] = flag;
					for(var j = 0; j < this.shopList[i]['goodsList'].length; j++){
						this.shopList[i]['goodsList'][j]['checked'] = flag;
					}
				}
				this.allCkecked = !this.allCkecked;
			},
			shopChoose:function(shop_index){
				var nowList = this.shopList[shop_index]['goodsList'];
				
				if(this.shopList[shop_index]['checked']){
					for(var i = 0; i < nowList.length; i++){
						nowList[i]['checked'] = false;
					}
				}else{
					for(var i = 0; i < nowList.length; i++){
						nowList[i]['checked'] = true;
					}
				}
				this.shopList[shop_index]['checked'] = !this.shopList[shop_index]['checked'];
				this.isAllChoose(); // 判断全部商品是否全选
			},
			goodsChoose:function(shop_index,goods_index){
				var nowList = this.shopList[shop_index]['goodsList'];
				
				if(nowList[goods_index]['checked']){
					this.shopList[shop_index]['checked'] = false;
					this.allCkecked = false;
					nowList[goods_index]['checked'] = !nowList[goods_index]['checked'];
				}else{
					nowList[goods_index]['checked'] = !nowList[goods_index]['checked'];
					//判断当前店铺是否全选
					var flag = true;
					for(var i = 0; i < nowList.length; i++){
						if(nowList[i]['checked'] == false){
							flag = false;
							break;
						}
					}
					flag == true ? this.shopList[shop_index]['checked'] = true : this.shopList[shop_index]['checked'] = false
				}
				this.isAllChoose(); // 判断全部商品是否全选
			},
			isAllChoose:function(){ // 判断全部商品是否全选
				var flag2 = true;
				for (var i = 0; i < this.shopList.length; i++) {
					if(this.shopList[i]['checked'] == false){
						flag2 = false;
						break;
					}
				}
				flag2 == true ? this.allCkecked = true : this.allCkecked = false;
			},
			toOrder:function(){
				this.$router.push("/order");
			}

		}
	}
</script>

<style scoped>
.shopCar{
	background-color: #f3f3f3;
	padding-bottom: 1rem;
}
.shopList{
	color: #333;
	background-color: #fff;
	margin-bottom: .2rem;
}
	.shop_name{
		padding: 0 .2rem;
		height: .8rem;
		line-height: .8rem;
		font-size: .28rem;
	}
	.shop_name .circle{
		vertical-align: middle;
		width: .3rem;
		height: .3rem;
	}
	.shop_name .shop_pic{
		width: .5rem;
		height: .5rem;
		vertical-align: middle;
		border-radius: 50%;
	}
	.goodsList{
		display: flex;
		padding:  .2rem;
		border-top: 1px solid #ededed;
	}
	.goodsList .left{
		width: 2.4rem;
		height: 2rem;
		font-size: 0;
	}
	.goodsList .goods_pic{
		width: 2rem;
		height: 2rem;
		vertical-align: middle;
	}
	.goodsList .circle{
		width: .3rem;
		height: .3rem;
		vertical-align: middle;
		margin-right: .1rem;
	}
	.goodsList .right{
		flex:1;
		font-size: .26rem;
		margin-left: .1rem;
		position: relative;
	}
	.goodsList .goods_name{
		word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
	}
	.goodsList .guige{
		word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    position: absolute;
    bottom: 1rem;
    color: #ccc;
	}
	.goodsList .price{
		color: #ff6662;
		position: absolute;
		bottom: .6rem;
	}
	.goodsList .right ul{
		display: inline-flex;
		width: 3rem;
		border: 1px solid #ededed;
		position: absolute;
		bottom: 0;
	}
	.goodsList .right li{
		flex:1;
		height: .4rem;
		text-align: center;
		line-height: .4rem;
	}
	.goodsList .right li:nth-child(2){
		flex:2;
		border-left: 1px solid #ededed;
		border-right: 1px solid #ededed;
	}
	.goodsList .right li input{
		width: 100%;
		height: 100%;
		border: none;
		outline: none;
		text-align: center;
		vertical-align: bottom;
	}
	.delete{
		width: .4rem;
		height: .4rem;
		vertical-align: sub;
		position: absolute;
		bottom: 0;
		right: .1rem;
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