<template>
	<div id="product">
		<Header-Nav></Header-Nav>
		<div class="pro-wrap">
			<ul class="pro-choose-list">
				<li>
					<div>品牌</div>
					<div>卫龙</div>
				</li>
				<li>
					<div>产地</div>
					<div>中国大陆</div>
				</li>
				<li>
					<div>包装方式</div>
					<div>包装 &nbsp;&nbsp; 散装</div>
				</li>
			</ul>
			<ul class="pro-list">
				<li class="pro-item" @click="goProDetail(item)" v-for="(item,index) in proLists" :key="index">
					<img class="pro-img" :src="item.proImg" alt="">
					<div class="pro-price">￥{{item.proPrice}}</div>
					<p class="pro-detail">{{item.proDetail}}</p>
					<div class="pro-item-bot">
						<div class="pro-sales">
							<span>总销量:</span>
							<span class="pro-sales-red">{{item.proSales}}</span>
						</div>|
						<div class="pro-evaluate">
							<span class="pro-eval-title">评价:</span>
							<span class="pro-eval-num">{{item.proEvaluate}}</span>
						</div>
					</div>
				</li>
			</ul>
		</div>
		<div class="footer"><p>卫龙官网 - 卫龙旗舰店 | 辣条 - 网站地图 - 微淘 - 移动版 - 站长统计</p></div>
	</div>
</template>
<style>

	.pro-list{
		overflow: hidden;
	}
	.pro-list .pro-item{float: left;width: 200px;box-sizing: border-box;margin:0 10px 30px 10px;cursor: pointer;}
	.pro-list .pro-img{width: 100%;}
	.pro-list .pro-price{color: red;font-weight: bold;margin:5px 0 20px 0;}
	.pro-list .pro-detail{
		width:200px;
		color:#666;
		font-size:14px;
		margin:10px 0;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis
	}
	.pro-item-bot{font-size: 14px;display: -webkit-flex;color: #999}
	.pro-item-bot>div{flex: 1;}
	.pro-sales-red{color: #c49173;}
	.pro-evaluate{color: #38b}

	.pro-wrap{
		max-width: 1100px;
		margin: 0 auto;
		overflow: hidden;
		margin-top: 40px;
	}
	.pro-choose-list{
		overflow: hidden;
		border: 1px solid #ddd;
		border-bottom: 0;
		margin-bottom: 30px;
	}
	.pro-choose-list>li{
		text-align: center;
		border-bottom: 1px solid #ddd;
		display: -webkit-flex;
		display: flex;
	}
	.pro-choose-list>li>div{
		padding: 5px 0;
	}
	.pro-choose-list>li>div:first-child{
		width: 200px;
		background-color:#f2f2f2;
		border-right: 1px solid #ddd; 
	}
	.pro-choose-list>li>div:last-child{
		text-indent: 1.5em;
	}
	.footer{
    margin-top: 50px;
  }
  .footer>p{max-width: 1100px;text-align: center;margin: 0 auto;color: #888}
</style>

<script type="text/javascript">
	import HeaderNav from '../components/HeaderNav.vue'
	import pro_1 from '../resource/img/pro_1.jpg'
	import pro_2 from '../resource/img/pro_2.jpg'
	import pro_3 from '../resource/img/pro_3.jpg'
	import pro_4 from '../resource/img/pro_4.jpg'
	import pro_5 from '../resource/img/pro_5.jpg'
	export default {
		data(){
			return {
				proLists:[
					{
						id:1,
						proImg:pro_1,
						proPrice:24.5,
						proDetail:'【卫龙旗舰店】辣条零食大礼包魔芋',
						proSales:30900,
						proEvaluate:8767
					},{
						id:2,
						proImg:pro_2,
						proPrice:34.5,
						proDetail:'【卫龙旗舰店】亲嘴烧麻辣零食刀肉',
						proSales:3459,
						proEvaluate:6592
					},{
						id:3,
						proImg:pro_3,
						proPrice:54.2,
						proDetail:'【卫龙旗舰店】魔芋爽毛肚香辣零食',
						proSales:5435,
						proEvaluate:5643
					},{
						id:4,
						proImg:pro_4,
						proPrice:34.5,
						proDetail:'【卫龙旗舰店】山药脆片好吃的薯片',
						proSales:6754,
						proEvaluate:456
					},{
						id:5,
						proImg:pro_5,
						proPrice:14.5,
						proDetail:'【卫龙旗舰店】亲嘴豆排豆干零食香辣味',
						proSales:332,
						proEvaluate:2341
					},{
						id:2,
						proImg:pro_2,
						proPrice:34.5,
						proDetail:'【卫龙旗舰店】亲嘴烧麻辣零食刀肉',
						proSales:3459,
						proEvaluate:6592
					},{
						id:3,
						proImg:pro_3,
						proPrice:54.2,
						proDetail:'【卫龙旗舰店】魔芋爽毛肚香辣零食',
						proSales:5435,
						proEvaluate:5643
					},{
						id:4,
						proImg:pro_4,
						proPrice:34.5,
						proDetail:'【卫龙旗舰店】山药脆片好吃的薯片',
						proSales:6754,
						proEvaluate:456
					},{
						id:5,
						proImg:pro_5,
						proPrice:14.5,
						proDetail:'【卫龙旗舰店】亲嘴豆排豆干零食香辣味',
						proSales:332,
						proEvaluate:2341
					},{
						id:3,
						proImg:pro_3,
						proPrice:54.2,
						proDetail:'【卫龙旗舰店】魔芋爽毛肚香辣零食',
						proSales:5435,
						proEvaluate:5643
					},{
						id:4,
						proImg:pro_4,
						proPrice:34.5,
						proDetail:'【卫龙旗舰店】山药脆片好吃的薯片',
						proSales:6754,
						proEvaluate:456
					},{
						id:5,
						proImg:pro_5,
						proPrice:14.5,
						proDetail:'【卫龙旗舰店】亲嘴豆排豆干零食香辣味',
						proSales:332,
						proEvaluate:2341
					},{
						id:2,
						proImg:pro_2,
						proPrice:34.5,
						proDetail:'【卫龙旗舰店】亲嘴烧麻辣零食刀肉',
						proSales:3459,
						proEvaluate:6592
					},{
						id:3,
						proImg:pro_3,
						proPrice:54.2,
						proDetail:'【卫龙旗舰店】魔芋爽毛肚香辣零食',
						proSales:5435,
						proEvaluate:5643
					},{
						id:4,
						proImg:pro_4,
						proPrice:34.5,
						proDetail:'【卫龙旗舰店】山药脆片好吃的薯片',
						proSales:6754,
						proEvaluate:456
					},{
						id:5,
						proImg:pro_5,
						proPrice:14.5,
						proDetail:'【卫龙旗舰店】亲嘴豆排豆干零食香辣味',
						proSales:332,
						proEvaluate:2341
					},{
						id:2,
						proImg:pro_2,
						proPrice:34.5,
						proDetail:'【卫龙旗舰店】亲嘴烧麻辣零食刀肉',
						proSales:3459,
						proEvaluate:6592
					}
				]
			}
		},
		components:{
			HeaderNav
		},
		methods:{
			goProDetail(item){
				debugger
				this.$router.push({
					name:'productDetail',
					params:{
						proItem:item
					}
				})
			}
		}
	}
</script>