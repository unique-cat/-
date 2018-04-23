<template>
	<div id="headerNav">
		<div class="hN-header" :style="'backgroundImage:url('+navBg+')'">
			<ul class="hN-nav">
				<li class="hN-logo">
					<img src="../resource/img/logo.jpg">
				</li>
				<li><router-link to="/">首页</router-link></li>
				<li><router-link to="product">所有产品</router-link></li>
				<li><router-link to="hotSell">热门</router-link></li>
				<li><router-link to="spicyStrip">辣条</router-link></li>
				<li><router-link to="meat">肉类</router-link></li>
				<li><router-link to="newProduct">新品</router-link></li>
				<li><router-link to="member">会员</router-link></li>
			</ul>
		</div>
	</div>
</template>
<script type="text/javascript">
	import navBg from '../resource/img/navBg.jpg';
	export default {
		data (){
			return {
				navBg
			}
		},
		methods:{

		}
	}
</script>
<style>
@import '../resource/css/common.css';
	.hN-header{
		height: 90px;
		background-size: 100%;
		background-repeat: no-repeat;
	}
	.hN-nav{
		max-width:1100px;
		height: inherit;
		line-height: 90px;
		margin: 0 auto;
		overflow: hidden;
		display: flex;
		background-color: #000;
	}
	.hN-nav>li{
		flex: 1;
		height: inherit;
		text-align: center;
	}
	.hN-nav>li>a{
		color: #fff;
		display: inline-block;
		height: inherit;
		width: 100%;
	}
</style>