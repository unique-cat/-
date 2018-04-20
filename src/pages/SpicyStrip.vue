<template>
	<div id="spicyStrip">
		<Header-Nav></Header-Nav>
		{{msg}}
	</div>
</template>
<script type="text/javascript">
	import HeaderNav from '../components/HeaderNav.vue'
	export default {
		data(){
			return {
				msg:'辣条'
			}
		},
		components:{
			HeaderNav
		},
	}
</script>