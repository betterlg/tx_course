<template>
	<div class="course-item">
		<a :href="'https://ke.qq.com/course/' + data.id">
			<img :src="data.img" :alt="data.course_name" />
			<h1>{{data.course_name}}</h1>
			<p>￥{{data.price}}.00</p>
		</a>
	</div>
</template>

<script>
	export default {
		name: 'CourseItem',
		props: {
			data: Object
		}
	}
</script>

<style lang="scss" scoped>
	.course-item {
		width: 50%;
		margin-bottom: .1rem;
		padding: .05rem;
		box-sizing: border-box;

		h1 {
			display: -webkit-box;
			font-size: .14rem;
			margin: .05rem 0;
			line-height: .18rem;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			text-overflow: ellipsis;
			overflow: hidden;
		}

		p {
			font-size: .16rem;
			color: #f40;
		}
	}
</style>










