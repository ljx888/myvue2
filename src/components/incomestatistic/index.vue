<template>
	<div class="wrap">
		<div class="top">
			<span>累计收入</span>
			<p>{{todayAmt | changePrice2money}}</p>
		</div>
		<ul class="list" v-for="item in dataArr">
			<li class="item">
				<div class="item_name">
					<span :style="{backgroundColor:item.bgcolor}"></span>{{item.name}}
				</div>
				<span class="num">{{item.val | changePrice2money}}</span>
				<span class="percent">{{item.per}}%</span>
			</li>
			
		</ul>
		<div id="pie"  :style="{width:'300px',height:'300px',margin:'0 auto'}"></div>
	</div>
</template>

<script type="text/javascript">
	import echarts from 'echarts/lib/echarts'
	import 'echarts/lib/chart/pie'
	export default {
		name:'incomeStatistics',
		data(){
			return{
				dataArr:[],
				todayAmt:''
			}
		},
		mounted (){
			this.getData();
			var that = this;
      var myChart = echarts.init(document.getElementById('pie'));
      myChart.setOption({
          series: [{
              type: 'pie',
              data: ['494005', '0', '127', '1715', '101624'], //自营、分销、分享赚、合伙人、其他
		          labelLine:{
	              normal:{
	                show:false
	              }
		          }
          }],
          color:["#ff6662","#ff8c67","#a566b5","#7384ca","#79ca73"]
      });
    },
    methods:{
    	getData:function(){
    		var that = this;
				this.$axios({
					method:"POST",
					headers: {'X-Requested-With': 'XMLHttpRequest'},
					url:'income/incomeStatistics',
					data:JSON.stringify({"requstId":"1"})
				})
				.then(function (response) {
					console.log(response);
					if (response.data.code == '999997') {
						setTimeout(function(){
							that.$router.push('/Login')
						},500)
					}else if(response.data.code == '000000'){
						that.todayAmt = response.data.data.todayAmt;
						var all = parseInt(response.data.data.selfBusiness)+parseInt(response.data.data.distribution)+parseInt(response.data.data.consignment)+parseInt(response.data.data.parten)+parseInt(response.data.data.otherAmt);

						that.dataArr.push({name:'自营收入',val:parseInt(response.data.data.selfBusiness),bgcolor:"#ff6662",per:(parseInt(response.data.data.selfBusiness)/all*100).toFixed(2)});
						that.dataArr.push({name:'分销收入',val:parseInt(response.data.data.distribution),bgcolor:"#ff8c67",per:(parseInt(response.data.data.distribution)/all*100).toFixed(2)});
						that.dataArr.push({name:'分享赚收入',val:parseInt(response.data.data.consignment),bgcolor:"#a566b5",per:(parseInt(response.data.data.consignment)/all*100).toFixed(2)});
						that.dataArr.push({name:'合伙人收入',val:parseInt(response.data.data.parten),bgcolor:"#7384ca",per:(parseInt(response.data.data.parten)/all*100).toFixed(2)});
						that.dataArr.push({name:'其他收入',val:parseInt(response.data.data.otherAmt),bgcolor:"#79ca73",per:(parseInt(response.data.data.otherAmt)/all*100).toFixed(2)});
					};
					console.log(that.dataArr)
				})
				.catch(function (error) {
					console.log(error);
				});
    	}
    }

	}
</script>

<style scoped>
	.top{
		height: 3rem;
		background-color: #ff6662;
		text-align: center;
		color: #fff;
	}
	.top span{
		font-size: .32rem;
	}
	.top p{
		font-size: .8rem;
		margin-top: .2rem;
	}
	.list{
		padding: 0 .2rem;
	}
	.item{
		line-height: .4rem;
		font-size: .24rem;
		color: #666;
		margin-top: .1rem;
		display: flex;
	}
	.item_name{
		display: inline-block;
		flex:1;
	}
	.item_name span{
		display: inline-block;
		width: .4rem;
		height: .24rem;
		vertical-align: sub;
		margin-right: .1rem;
	}
	.num{
		flex:1;
	}
	.percent{
		flex:1;
	}
</style>