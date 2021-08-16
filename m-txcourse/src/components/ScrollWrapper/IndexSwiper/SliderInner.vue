<template>
	<a :href="'https://ke.qq.com/course/' + data.course_id">
		<img :src="data.img" :alt="data.course_name" />
	</a>
</template>

<script>
	export default {
		name: 'SliderInner',
		props: {
			data: Object
		}
	}
</script>

<style lang="scss" scoped></style>