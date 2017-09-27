<template>
	<div class="wrap">
		<div class="search">
			<span @click="goBack" class="back_btn"></span>
			<input type="text" v-model='searchName' placeholder="搜索姓名或联系电话">
			<span @click="searchFun" class="sea_btn"><img src="./images/home_top_search.png" alt=""></span>
		</div>
		<ul class="nav">
			<li><router-link to="/mymber/mydistribution" replace>我的分销会员</router-link></li>
			<li><router-link to="/mymber/mycustomer" replace>我的顾客会员</router-link></li>
			<li><router-link to="/mymber/myfuns" replace>关注我的</router-link></li>
		</ul>
		<router-view :userName='searchName,issearch'></router-view>
	</div>
</template>

<script type="text/javascript">
	export default {
		name:"mymber",
		data(){
			return{
				searchName:'',
				issearch:''
			}
		},
		methods:{
			searchFun:function(){
				this.issearch ++;
			},
			goBack:function(){
				this.$router.go(-1);
			}
		}
	}
</script>

<style scoped>
	.search{
		background-color: #fff;
		line-height: .9rem;
		position: relative;
		font-size: .28rem;
		text-align: center;
	}
	.back_btn{
		padding: 0.3rem;
    position: absolute;
    top: .1rem;
    left: 4px;
    z-index: 2;
	}
	.sea_btn{
		position: absolute;
		right: .2rem;
		top: .15rem;
		display: inline-block;
		width: .48rem;
		height: .48rem;
	}
	.sea_btn img{
		width: 100%;
	}
	.search input{
		outline: none;
		border: none;
		width: 60%;
		height: .6rem;
		text-align: center;
		background-color: #ededed;
		border-radius: 4px;
		font-size: .28rem;
	}
	.search:after, .search:before {
	  border: .2rem solid transparent;
	  border-right: .2rem solid #fff;
	  width: 0;
	  height: 0;
	  position: absolute;
	  top: .2rem;
	  left: 2px;
	  content: ' '
	}
	.search:before {
	  border-right-color: #666;
	  left: 1px;
	}
	.nav{
		display: flex;
		background-color: #fff;
		font-size: .28rem;
		text-align: center;
		line-height: .9rem;
		margin: .2rem auto;
	}
	.nav a{
		color: #666;
		display: block;
	}
	.nav a.router-link-active{
		color: #ff6662;
		border-bottom: .02rem solid red;
	}
	.nav li{
		flex:1;
	}
</style>