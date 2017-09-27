<template>
	<div class="msglogin">
		<div class="main msgLogin">
			<div class="login01_head">
				<span>登录</span>
			</div>
			<div class="login">
				<ul>
					<li><label class="l_add">手机号：</label> <input id="mobile" class="mobileMsg" placeholder="请输入手机号"
						type="text" value="" maxlength="11" onkeyup="replaceAndSetPos(this,/\D/gi,'')"/></li>
					<li><label class="l_add">验证码：</label> <input id="codes" placeholder="请输入验证码"
						type="text" value="" style="width: 30%;" maxlength="6" onkeyup="replaceAndSetPos(this,/\D/gi,'')"/> 
						<input type="button" onclick="getCode3(this)" value="获取验证码" class="login_btnn" readOnly="true">
					</li>
					<input type="submit" onclick="loginSubmitMdGo3()" value="登录" />
				</ul>
			</div>
			<div class="login_footer">
				<div class="login-foot">
					<p>Copyright@2016-2017 上海聚熠电子商务有限公司    All Right Reserved</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'msglogin'
}
</script>

<style scoped>
	.main{margin:0 auto;background-color: #fff;}
.login_btnn{
	color:#717171; 
	font-size:12px; 
	width:30%;
	cursor:pointer; 
	background-color:#f3f3f3; 
	border-radius:20px; 
	text-align:center;
	border:1px solid #f0f0f0;
	line-height:23px;
	margin-top:-8px;
	height:35px;
	margin-left:0px;
}
.login_btnn a{color:#555; font-size:14px; text-align:center; padding-left:30px;}

.login{ width:100%; float:left;}
.login ul{float:left; margin:0; padding:0; width:100%;}
.login ul li{position: relative; padding:6% 5%; border-bottom: solid 1px #f3f3f3; overflow: hidden; background-color:#fff;}
.login ul li *{ float: left;}
.login ul li .l_add{ width: 30%; font-size:16px;color: #7a7a7a;font-weight: 100!important;}
.login ul li input[type="text"]{ width: 60%; border: none;font-size:14px;color: #9e9e9e; margin-top:2px;}
.login ul li input[type="button"]{line-height:25px;}
.login ul li input[type="tel"]{ width: 60%; border: none;font-size:16px; color: #666;}
.login ul li input[disabled="disabled"]{ background-color:#FFF;color:#333;}
.login ul li select { border: none;font-size:16px;  background-color:#fff;padding-right:4%; padding-left:3%;}
.login_red{color:#F00; text-align:center;}
input[type="submit"]{}
.login ul li textarea { border: none;font-size:16px;  color: #666; background-color: #fff;}
input:focus, textarea:focus { outline: none;}
.login ul li input[type="checkbox"] {opacity: 0; position: absolute; right:5%; top:40%;}
.login ul li h3{font-weight: normal; text-align: center; font-size:16px; color: #f12035; width: 100%;
}
.login input[type=submit]{ width: 90%; margin:3% 5%; padding: 3% 0; font-size: 16px; color: #fff; background-color: #f12035; border: none; border-radius: 1.2em;} 
.login01_head{width:100%;  background-color:#f12035; height:50px; text-align:center;/*border-radius:20px 0px;*/float:left; }
.login01_head span{text-align:center; font-size:18px; line-height:45px; color:#fff;}

.login-foot{
	/* height:100px; */
	margin-top:0px;
	width: 100%;
	float:left;
	padding:0 1%;
	position: absolute;
    bottom: 10px;
}

.login-foot p{text-align:center;
	width: 100%;
	color:#7a7a7a;
	font-size:12px;
	line-height:18px;
}
.login_footer {
	/* height: 100px;
	overflow: hidden;
    width: 100%;
    float: left;
    margin-top: 30%; */
}
.overlay-hugeinc.open{
	background-color:#fff;
	z-index:10000;
}
</style>
