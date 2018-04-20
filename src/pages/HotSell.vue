<template>
	<div id="hotSell">
	<Header-Nav></Header-Nav>
		{{msg}}
	</div>
</template>
<script type="text/javascript">
import HeaderNav from '../components/HeaderNav.vue'
	export default {
		data(){
			return {
				msg:'热销'
			}
		},
		components:{
			HeaderNav
		},
	}
</script>