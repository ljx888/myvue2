<template>
	<div class="wrap">
		<div class="sea_wrap">
			<div class="search">
				<input type="text" placeholder="搜索商品名"><span class="search_btn"><img src="./images/home_top_search.png" alt=""></span>
			</div>
		</div>
		

		<div class="goods">
			<div>
				<div class="pic">
					<img src="http://ojhq3mgil.bkt.clouddn.com/web/16/20170419/201704191836325745.jpg?imageMogr2/thumbnail/360x" alt="">
				</div>
				<div class="bottom_msg">
					<div class="name_wrap">
						<p class="name"><span>#高档电子配件#</span>笔记本电脑配件fsdfasdafdsafasdf发郭德个</p>
					</div>
					<p class="now_price">￥45.00</p>
					<p class="old_price">￥56.00 <span class="sell">销量：28件</span></p>
				</div>
			</div>

			<div>
				<div class="pic">
					<img src="http://ojhq3mgil.bkt.clouddn.com/web/16/20170419/201704191836325745.jpg?imageMogr2/thumbnail/360x" alt="">
				</div>
				<div class="bottom_msg">
					<div class="name_wrap">
						<p class="name"><span>#高档电子配件#</span>笔记本电脑配件fsdfasdafdsafasdf发郭德个</p>
					</div>
					<p class="now_price">￥45.00</p>
					<p class="old_price">￥56.00 <span class="sell">销量：28件</span></p>
				</div>
			</div>
			
			<div>
				<div class="pic">
					<img src="http://ojhq3mgil.bkt.clouddn.com/web/16/20170419/201704191836325745.jpg?imageMogr2/thumbnail/360x" alt="">
				</div>
				<div class="bottom_msg">
					<div class="name_wrap">
						<p class="name"><span>#高档电子配件#</span>笔记本电脑配件fsdfasdafdsafasdf发郭德个</p>
					</div>
					<p class="now_price">￥45.00</p>
					<p class="old_price">￥56.00 <span class="sell">销量：28件</span></p>
				</div>
			</div>

			<div>
				<div class="pic">
					<img src="http://ojhq3mgil.bkt.clouddn.com/web/16/20170419/201704191836325745.jpg?imageMogr2/thumbnail/360x" alt="">
				</div>
				<div class="bottom_msg">
					<div class="name_wrap">
						<p class="name"><span>#高档电子配件#</span>笔记本电脑配件fsdfasdafdsafasdf发郭德个</p>
					</div>
					<p class="now_price">￥45.00</p>
					<p class="old_price">￥56.00 <span class="sell">销量：28件</span></p>
				</div>
			</div>

		</div>



	</div>
</template>

<script>
	export default {
		name:'selfproduct',
		data(){
			return{

			}
		}
	}
</script>

<style scoped>
	.wrap{
		background-color: #fff;
	}
	.sea_wrap{
		padding: .2rem;
	}
	.search{
		width: 100%;
		height: .8rem;
		line-height: .8rem;
		border: 1px solid #ccc;
		border-radius: 4px;
		padding-left: 1px;
	}
	.search input{
		height: 100%;
		width: 85%;
		border: none;
		outline: none;
		text-indent: .1rem;
		vertical-align: top;
		font-size: .28rem;
	}
	.search_btn{
		display: inline-block;
		width: 1rem;
		height: 100%;
		float: right;
		text-align: center;
		line-height: .7rem;
		border-left: 1px solid #ccc;
	}
	.search_btn img{
		width: 60%;
	}
	.goods{
		overflow: hidden;
	}
	.goods .pic{
		line-height: 0;
	}
	.goods>div{
		width: 50%;
		float: left;
		padding: 0 .1rem 0.2rem .2rem;
	}
	.goods>div:nth-child(even){
		padding: 0 .2rem 0.2rem .1rem;
	}
	.goods img{
		width: 100%;
	}
	.goods .name{
		font-size: .28rem;
		color: #8a8c7e;
		word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
	}
	.goods .name_wrap{
		height: .8rem;
		border-bottom: 1px dashed #d4d4d4;
		padding: .1rem 0;
	}
	.goods .name span{
		color: #ff6662;
	}
	.goods .now_price{
		color: #ff6662;
		font-size: .36rem;
		line-height: .6rem;
	}
	.goods .old_price{
		color: #999;
		font-size: .24rem;
		text-decoration: line-through;
	}
	.goods .old_price .sell{
		float: right;
	}
	.goods .bottom_msg{
		border: 1px solid #f1f1f1;
		border-top: none;
		padding:.1rem;
	}
</style>