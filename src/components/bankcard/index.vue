<template>
	<div class="list_index">
		<ul class="nav">
			<li><span>
				<router-link :to="'/bankCard/perList'" replace>
					个人银行
				</router-link>
			</span></li>
			<li><span>
				<router-link :to="'/bankCard/comList'" replace>
					企业银行
				</router-link>
			</span></li>
		</ul>
		<router-view></router-view>
	</div>
</template>

<script type="text/javascript">
	export default {
		name:'bankCard',
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped>
.list_index{
	height: 100%;
}
	.nav{
		display: flex;
		width: 100%;
		height: 1rem;
		line-height: 1rem;
		font-size: .28rem;
		text-align: center;
	}
	.nav li{
		flex:1;
		background-color: #fff !important;
	}
	.nav span a{
		padding: .34rem;
		color: #000;
	}
	.nav .router-link-active{
		color: #ff6662;
    border-bottom: .02rem solid #ff6662;
	}
</style>