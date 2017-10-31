<template>
	<div class="join">
		<div class="join_page" v-show="isShow">
			<div class="join_top">
				<img src="./images/partner_01.png" alt="">
				<img src="./images/partner_02.png" alt="">
			</div>
			<ul class="item">
				<li><img src="./images/partner_kaidian2.png" alt=""><p><span style="color: #ff6662;">一键代销</span><br>加盟我，一键代销我的商品，轻松赚取丰厚佣金。</p></li>
				<li><img src="./images/partner_baozhang2.png" alt=""><p><span style="color: #ff8e62;">单独费率（代理商权限）</span><br>我是代理商，加盟我，可获得低费率，增加收入，降低开店成本。</p></li>
				<li><img src="./images/partner_yi.png" alt=""><p><span style="color: #ffbe62;">一对一教学</span><br>盟主一对一教学，让你轻松成为赚钱老司机，快速主宰武林。</p></li>
			</ul>
			<div class="join_btn">加入此盟主</div>
		</div>
		<!-- 加盟店主信息短信验证 -->
		<div class="join_msg">
			<div class="top_tit">加盟我</div>
			<div class="main_msg">
				<img src="http://ojhq3mgil.bkt.clouddn.com/web/478/20170914/201709141442581468.jpg" alt="">
				<p><span>盟主杨天佑</span><br>账号：13166292893</p>
			</div>
			<ul>
				<li>您的手机号：<input type="text" placeholder="请输入您的手机号"></li>
				<li>短信验证码：<input class="inp_msg" type="text" placeholder="请输入验证码"><span class="btn_mgs">获取验证码</span></li>
			</ul>
			<div class="join_confirm_btn">确认加入</div>
			<p class="tip">一个手机号只能加入一个盟主哦~</p>
		</div>
	</div>
</template>

<script>
	export default {
		name:"join",
		data(){
			return{
				isShow:false
			}
		}
	}
</script>

<style scoped>
.join{
	background-color: #fff;
	height: 100%;
}
/* 加盟店主信息短信验证css */
.join_msg{
	background-color: #f3f3f3;
	height: 100%;
}
.join_msg .top_tit{
	height: 1rem;
	line-height: 1rem;
	text-align: center;
	font-size: .32rem;
	color: #fff;
	background-color: #ff6662;
}
.main_msg{
	display: flex;
	font-size: .28rem;
	padding: .4rem;
	background-color: #fff;
}
.main_msg img{
	width: 1.5rem;
	height: 1.5rem;
	border-radius: 50%;
}
.main_msg p{
	flex:1;
	padding-left: .2rem;
	color: #888;
	padding-top: .44rem;
}
.main_msg p span{
	font-size: .34rem;
	color: #333;
}
.join_msg ul{
	
	margin-top: 2px;
}
.join_msg li{
	background-color: #fff;
	height: 1.2rem;
	font-size: .28rem;
	color: #888;
	line-height: .8rem;
	padding:.2rem .4rem;
	margin-bottom: 1px;
}
.join_msg li input{
	border: none;
	outline: none;
	font-size: .28rem;
}
.join_msg li input.inp_msg{
	width: 40%;
}
.join_msg li .btn_mgs{
	display: inline-block;
	width: 30%;
	height: .8rem;
	background-color: #f3f3f3;
	border-radius: 20px;
	text-align: center;
}
.join_confirm_btn{
	width: 90%;
	height: .8rem;
	background-color: #ff6662;
	line-height: .8rem;
	font-size: .32rem;
	color: #fff;
	text-align: center;
	border-radius: 20px;
	margin: 0 auto;
	margin-top: .2rem;
}
.join_msg .tip{
	font-size: .24rem;
	color: #888;
	text-indent: .4rem;
	line-height: 1rem;
}






/* 加盟我css */
	.join_top{
		width: 100%;
		font-size: 0px;
	}
	.join_top img{
		width: 100%;
	}
	.item{
		font-size: .24rem;
		background-color: #fff;
	}
	.item li{
		height: 1.6rem;
		display: flex;
		padding: .3rem .4rem;
		border-bottom: 1px dashed #ededed;
	}
	.item li img{
		width: 1rem;
		height: 1rem;
	}
	.item li p{
		flex:1;
		color: #888;
		padding: 0 .4rem;
		line-height: .32rem;
	}
	.item li p span{
		font-size: .32rem;
	}
	.join_btn{
		width: 90%;
		margin: 0 auto;
		height: 1rem;
		line-height: 1rem;
		background-color: #ff6662;
		color: #fff;
		text-align: center;
		font-size: .32rem;
		border-radius: 30px;
		margin-top: .4rem;
	}
</style>