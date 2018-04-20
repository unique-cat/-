<template>
	<div id="member">
		<Header-Nav></Header-Nav>
		{{msg}}
	</div>
</template>
<script type="text/javascript">
	import HeaderNav from '../components/HeaderNav.vue'
	export default {
		data(){
			return {
				msg:'会员'
			}
		},
		components:{
			HeaderNav
		},
	}
</script>