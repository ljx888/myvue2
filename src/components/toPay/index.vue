<template>
	<div class="toPay">
		<div class="pageTopWrap">
			<div class="pageTop">
				<div class="shop">
					<div class="shopPic">
						<img src="http://ojhq3mgil.bkt.clouddn.com/web/478/20170914/201709141442581468.jpg" alt="">
					</div>
					<div class="shopMsg">
						<p class="name">苹果专卖店</p>
						<p class="tel">131****2893</p>
					</div>
				</div>
				<div class="count">
					<span>金额（元）</span>
					<p>￥{{amount}}</p>
				</div>
				<p class="tip">请向收银员询问应付金额，并核对收款商户。</p>
			</div>
		</div>
		

		<div class="table-box">
			<table>
 				<tr>
 					<td @click="inputAmt">1</td>
 					<td @click="inputAmt">2</td>
 					<td @click="inputAmt">3</td>
 					<td @click="inputAmt" rowspan="2" class="arrow-back"></td>
 				</tr>
 				<tr>
 					<td @click="inputAmt">4</td>
 					<td @click="inputAmt">5</td>
 					<td @click="inputAmt">6</td>
 				</tr>
 				<tr>
 					<td @click="inputAmt">7</td>
 					<td @click="inputAmt">8</td>
 					<td @click="inputAmt">9</td>
 					<td rowspan="2" class="table-box-btn"><p>确定支付</p></td>
 				</tr>
 				<tr>
 					<td @click="inputAmt">.</td>
 					<td @click="inputAmt">0</td>
 					<td @click="inputAmt">00</td>
 				</tr>
 			</table>
		</div>
	</div>
</template>

<script>
	export default {
		name:"toPay",
		data(){
			return{
				amount:''
			}
		},
		methods:{
			inputAmt:function(event){
				if(event.target.textContent == ''){
					this.amount = this.amount.slice(0,-1);
				}
				if(!/^([1-9][\d]{0,7}|0?)([.\d]{1,2})?$/.test(this.amount) && this.amount != ''){
					return;
				}
				this.amount = this.amount + event.target.textContent;
				console.log(this.amount);
			}
		}
	}
</script>

<style scoped>
.toPay{
	background-color: #f3f3f3;
	height: 100%;
	padding-bottom: 7rem;
}
.pageTopWrap{
	min-height: 100%;
}
	.pageTop{
		padding: 0 .2rem;
		background-color: #fff;
		color: #999;
	}
	.shop{
		display: flex;
		padding: .4rem 0;
		border-bottom: 1px solid #ededed;
	}
	.shopPic{
		width:1rem ;
		height: 1rem;
		margin-right: .2rem;
	}
	.shopPic img{
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
	.shopMsg{
		flex:1;
	}
	.shopMsg .name{
		margin-top: .1rem;
		font-size: .36rem;
		color: #666;
	}
	.shopMsg .tel{
		font-size: .28rem;
	}
	.count{
		padding: .2rem 0;
		border-bottom: 1px solid #ededed;
		font-size: 0;
	}
	.count span{
		font-size: .24rem;
		line-height: .8rem;
	}
	.count p{
		font-size: .6rem;
		color: #666;
		line-height: .8rem;
	}
	.tip{
		font-size: .24rem;
		line-height: 1rem;
	}

	.table-box {
	width: 100%;
	margin-top: 1rem;
	background: #fff;
	color: #666;
    font-size: .8rem;
}
.table-box table {
	width: 100%;
	text-align: center;
	border-collapse:collapse;
}
.table-box table tr {
	/*border: 1px solid #e9e9e9;*/
}
.table-box table tr td {
	width: 26%;
	height: 1.5rem;
	border: 1px solid #e9e9e9;
}
.table-box table tr td.arrow-back {
	background: url("./images/h5_maidan_sc.png") no-repeat center center;
	background-size: 1rem .5rem;
}
.table-box-p{
	width: 0.8rem;
    margin-left: 50%;
	transform:translateX(-50%);
	-ms-transform:translateX(-50%); 	
	-moz-transform:translateX(-50%); 	
	-webkit-transform:translateX(-50%); 
	-o-transform:translateX(-50%);
	display: block;
    height: 5.5rem;
    border: none;
    outline: none;
    background-color: #ff6662;
    color: #fff;
    font-size: 0.8rem;
}
.table-box-btn{
	background-color: #ff6662;
    color: #fff;
    font-size: 0.8rem;
}
.table-box-btn p{
	width: .4rem;
	margin: 0 auto;
	font-size: .4rem;
}
</style>