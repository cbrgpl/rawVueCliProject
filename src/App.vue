<template>
	<div id="app">
		hey
		<router-view />
	</div>
</template>

<script>
export default {
	name: "App",
}
</script>

<style lang="scss">
// It need to be there because of webpack doesnt load scss styles
custom {
	color: red;
}
</style>
