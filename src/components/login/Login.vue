<template>
  <div class="login_pwd" v-show="true">
    <div class="main" v-show='isshowlogin'>
      <div class="login01_head">
        <span>登录</span>
      </div>
      <input type="hidden" id="publicKey" value=""/>
      <div class="login">
        <ul>
          <li><label class="l_add">手机号：</label> <input id="mobile" placeholder="请输入手机号"
            type="text" value="" maxlength="11"/></li>
          <li>
            <label class="l_add">密&emsp;码：</label> 
            <input id="l_add"type="password" value="" placeholder="请输入密码" minlength="6" maxlength="16"/>  
          </li>
          <li class="zhuche">
              <a v-on:click='showregister'>快速注册</a>
              <a v-on:click='showmsglogin'>短信登录</a>
          </li>
          <input type="submit" v-on:click="loginFun" value="登录" />
        </ul>
      </div>
      <div class="login_footer">
        <div class="login-foot">
          <p>Copyright@2016-2017 上海聚熠电子商务有限公司   All Right Reserved</p>
        </div>
      </div>
    </div>
      <register v-show='isshowregister'></register>
      <msglogin v-show='isshowmsglogin'></msglogin>
  </div>
</template>

<script>
import register from './Register'
import msglogin from './msglogin'
import md5 from 'js-md5'
//import {JSEncrypt} from '../../assets/js/jsencrypt.min.js'

export default {
  name: 'Login',
  data () {
    return {
      isshowregister: false,
      isshowmsglogin:false,
      isshowlogin:true,
      userName:'13166292893',
      userPwd:'111111'
    }
  },
  created:function(){
    
  },
  methods: {
    showregister: function () {
      this.isshowregister = true;
      this.isshowlogin = false;
    },
    showmsglogin:function () {
      this.isshowmsglogin = true;
      this.isshowlogin = false;
    },
    getPswlegth:function (lable1,lable2) {
      var len = lable1.length + lable2.length;
      var xml = "QWERTYUIOPASDFGHJKLASDFGHJKLOL";
      var str = xml.substring(len, xml.length);
      return str;
    },
    loginFun:function(){
      this.getPublicKey();
    },
    getPublicKey:function(){
      var that = this;
      var pubK;
      this.$axios({
        url : "login/getPublicKey",
        method : "POST",
        headers: {'X-Requested-With': 'XMLHttpRequest'},
        data : JSON.stringify({"mobile":""})
      })
      .then(function (response) {
          console.log(response);
          if('000000'==response.data.code){
            pubK = response.data.data;
            that.axiosLogin(pubK);
          }else{
            pubK = "0";
          }
      });
    },
    axiosLogin:function(pubK){
        var that = this;
        var mobile = that.userName;
        var pwd = that.userPwd;
        var pwdlen = that.getPswlegth(mobile,pwd);
        var encrypt = new JSEncrypt();
        encrypt.setPublicKey(pubK);
        pwdlen = mobile+pwd+pwdlen;
        var datas = JSON.stringify({
          "mobile":encodeURI(encrypt.encrypt(mobile)).replace(/\+/g,'%2B'),
          "pwd":encodeURI(encrypt.encrypt(md5(pwdlen).toLowerCase())).replace(/\+/g,'%2B')
        });
        console.log(datas)
        that.$axios({
            method:"POST",
            headers: {
              'X-Requested-With':'XMLHttpRequest',
              'Content-Type': 'application/json ; charset=utf-8'
            },
            url:'login/pwdexecute',
            data:datas
        })
        .then(function (response) {
            console.log(response);
            if (response.data.code == '000000') {
              localStorage.storeData = JSON.stringify({});
              that.myStore.setStorage('userId',response.data.data.id);
              that.$router.go(-1);
            };
        })
        .catch(function (error) {
           console.log(error);
        });
    }
  },
  components:{
    register,
    msglogin
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{margin:0 auto;background-color: #fff;}
.login_btnn{color:#717171; font-size:14px; cursor:pointer; background-color:#f3f3f3; border-radius:20px; width:32%; text-align:center;margin-left:2%; border:1px solid #f0f0f0;}
.login_btnn a{color:#555; font-size:14px; text-align:center; padding-left:30px;}

.login{ width:100%; float:left;}
.login ul{float:left; margin:0; padding:0; width:100%;}
.login ul li{position: relative; width:100%; padding:6% 5%; border-bottom: solid 1px #f3f3f3; overflow: hidden; background-color:#fff;}
.login ul li *{ float: left;}
.login ul li .l_add{ width: 30%; font-size:16px;color: #7a7a7a;font-weight: 100!important;}
.login ul li input[type="text"]{ width: 60%; border: none;font-size:14px;color: #9e9e9e; margin-top:2px;}
.login ul li input[type="button"]{line-height:25px;}
.login ul li input[type="tel"]{ width: 60%; border: none;font-size:16px; color: #666;}
.login ul li input[disabled="disabled"]{ background-color:#FFF;color:#333;}
.login ul li select { border: none;font-size:16px;  background-color:#fff;  padding-right:4%; padding-left:3%;}
.login_red{color:#F00; text-align:center;}

.login ul li textarea { border: none;font-size:16px;  color: #666; background-color: #fff;}
input:focus, textarea:focus { outline: none;}
.login ul li input[type="checkbox"] {opacity: 0; position: absolute; right:5%; top:40%;}
.login ul li h3{font-weight: normal; text-align: center; font-size:16px; color: #f12035; width: 100%;
}
.login input[type=submit]{ width: 90%; margin:3% 5%; padding: 3% 0; font-size: 16px; color: #fff; background-color: #f12035; border: none; border-radius: 1.2em;} 
.login01_head{width:100%;  background-color:#f12035; height:50px; text-align:center;/*border-radius:20px 0px;*/float:left; }
.login01_head span{text-align:center; font-size:18px; line-height:45px; color:#fff;}

.login-foot{
  /* height:100px;
  margin-top:130px; */
  width: 100%;
  float:left;
  padding: 0 1%;
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
  height: 100px;
}
.overlay-hugeinc.open{
  background-color:#fff;
  z-index:10000;
}
.zhuche a{
  width:50%;
  text-align:center;
  color:#7a7a7a !important;
  text-decoration:none;
  font-size:16px;
}
input#l_add{
  margin:0;
  padding:0;
  font-size:14px;
  margin-top:2px;
  width:60%;
  border:none;
}
</style>
