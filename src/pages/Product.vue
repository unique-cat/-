<template>
	<div id="product">
		<Header-Nav></Header-Nav>
		{{msg}}
	</div>
</template>
<script type="text/javascript">
	import HeaderNav from '../components/HeaderNav.vue'
	export default {
		data(){
			return {
				msg:'所有产品'
			}
		},
		components:{
			HeaderNav
		},
	}
</script>