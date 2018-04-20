<template>
	<div id="meat">	
		<Header-Nav></Header-Nav>
		{{msg}}
	</div>
</template>
<script type="text/javascript">
import HeaderNav from '../components/HeaderNav.vue'
	export default {
		data(){
			return {
				msg:'肉类'
			}
		},
		components:{
			HeaderNav
		},
	}
</script>