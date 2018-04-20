<template>
	<div id="newPro">
		<Header-Nav></Header-Nav>
		{{msg}}
	</div>
</template>
<script type="text/javascript">
	import HeaderNav from '../components/HeaderNav.vue'
	export default {
		data(){
			return {
				msg:'新品'
			}
		},
		components:{
			HeaderNav
		},
	}
</script>