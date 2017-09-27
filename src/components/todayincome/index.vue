<template>
	<div class="toDayIncome">
    <div class="topwaper" v-bind:class="{ filter: showRule }">
      <div class="top">
        <div class="top-conter">
          <div class="item-wrap">
            <h2>今日收入</h2>
            <h1>{{incomeData.todayAmt | changePrice2money}}</h1>
            <h3><span v-on:click='showRulePage'>到账规则</span></h3>
          </div>
        </div>
      </div>
      <div class="middle">
        <ul>
          <li>
            <router-link :to="'available'">
              <p>{{(incomeData.withdrawals + incomeData.posBalance) | changePrice2money}}</p>
              <span>可用余额</span>
            </router-link>
          </li>
          <li>
            <router-link :to="'general'">
              <p>{{incomeData.totalIncome | changePrice2money}}</p>
              <span>累计收入</span>
            </router-link>
          </li>
          <li>
            <router-link :to="'stayAccount'">
              <p>{{incomeData.stayAccount  | changePrice2money}}</p>
              <span>待到账金额</span>
            </router-link>
          </li>
          <li>
            <router-link :to="'withdrawCash'">
              <p>{{incomeData.withdrawedAmt | changePrice2money}}</p>
              <span>已提现金额</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    

    <div class="foot" v-bind:class="{ filter: showRule }">
      <ul>
        <li>
          <router-link :to="'bankCard/perList'">
            <span class='bankCard'></span>银行卡（{{incomeData.bankCardCount}}）
          </router-link>
        </li>
        <span class='line'></span>
        <li><span class='tixian'></span>立即提现</li>
      </ul>
    </div>
    <rulePage v-show=showRule @isshowpage='getClose'></rulePage>
  </div>
</template>

<script>
import rulePage from './rule'
export default {
  name: 'todayIncome',
  data () {
  	return {
  		incomeData:{},
      showRule:false
  	}
  },
  created:function(){
  	var that = this;
    this.$axios({
        method:"POST",
        headers: {'X-Requested-With': 'XMLHttpRequest'},
        url:'income/incomeHomeData',
        data:{}
    })
    .then(function (response) {
        if (response.data.code == '999997') {
          setTimeout(function(){
            that.$router.push('/Login')
          },500)
        }else if(response.data.code == '000000'){
          that.incomeData = response.data.data
        };
    })
    .catch(function (error) {
       console.log(error);
    });
  },
  methods:{
  	showRulePage:function(){
      this.showRule = true;
    },
    getClose:function(msg){
      this.showRule = msg;
    }
  },
  components:{
    rulePage
  }
}
</script>

<style scoped>
  .toDayIncome{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    overflow: auto;
  }
  .topwaper{
    min-height: 100%;
    padding-bottom: 1.2rem;
  }
  .top-conter{
    width: 100%;
    height: 100%;
    background: url(./images/shouru_circle.png) no-repeat;
    background-size: 85%;
    background-position: center;
    padding-top: 1.5rem;
    color: #fff;
  }
	.top{
    background-color: #ff6662;
    width: 7.5rem;
    height: 4.8rem;
  }
  .item-wrap{
    text-align: center;
  }
  .item-wrap h2{
    font-size: .36rem;
  }
  .item-wrap h1{
    font-size: .6rem;
    margin: .6rem 0;
  }
  .item-wrap h3{
    font-size: .24rem;
  }
  .item-wrap h3 span{
    padding: .1rem;
    border-bottom: .02rem solid #fff;
  }

  .middle{
    width: 7.5rem;
    height: 4.4rem;
    font-size: .28rem;
    background-color: #fff;
  }
  .middle ul{
    overflow: hidden;
  }
  .middle ul li{
    float: left;
    width: 50%;
    height: 2.2rem;
    text-align: center;
    padding-top: 0.6rem;
  }
  .middle ul li:nth-child(odd){
    border-right: 0.02rem #f3f3f3 solid;
  }
  .middle ul li:nth-child(even){
    border-left: 0.02rem #f3f3f3 solid;
  }
  .middle ul li:nth-child(1){
    border-bottom: 0.02rem #f3f3f3 solid;
  }
  .middle ul li:nth-child(2){
    border-bottom: 0.02rem #f3f3f3 solid;
  }
  .middle ul li:nth-child(3){
    border-top: 0.02rem #f3f3f3 solid;
  }
  .middle ul li:nth-child(4){
    border-top: 0.02rem #f3f3f3 solid;
  }
  .middle ul li span{
    color: #ff6662;
    display: inline-block;
    background: url(./images/shouru_arrow.png) no-repeat;
    background-size: contain;
    padding: 0 .4rem;
    background-position: 100% 0;
    margin-top: .2rem;
  }
   
  .foot{
    position: absolute;
    width: 7.5rem;
    height: 1rem;
    margin: -1rem auto 0 auto;
    clear: both;
    background-color: #fff;
  }
  .foot ul{
    display: flex;
  }
  .foot ul li{
    flex:1;
    font-size: .28rem;
    text-align: center;
    line-height: 1rem;
  }
  .foot span.line{
    display: inline-block;
    width: .025rem;
    height: 0.5rem;
    background-color: #f3f3f3;
    margin-top: .25rem;
  }
  .foot li span{
    display: inline-block;
    width: .4rem;
    height: .4rem;
    vertical-align: middle;
    margin-right: .1rem;
  }
  .foot .bankCard{
    background: url('./images/my_Bankcard.png') no-repeat;
    background-size: contain;
  }
  .foot .tixian{
    background: url('./images/my_qianbao.png') no-repeat;
    background-size: contain;
  }
  .filter{
    filter: blur(8px);
  }
</style>