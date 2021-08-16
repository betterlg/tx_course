<template>
	<div class="course-list-board">
		<course-item
      v-for="(item, index) of courseData"
      :key="index"
      :data="item"
		></course-item>
	</div>
</template>

<script>
	import CourseItem from './Item';

	export default {
		name: 'CourseList',
		props: {
      courseData: Array
		},
		components: {
			CourseItem
		}
	}
</script>

<style lang="scss" scoped>
	.course-list-board {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
    padding: .05rem;
    background-color: #fff;
    box-sizing: border-box;
	}
</style>





