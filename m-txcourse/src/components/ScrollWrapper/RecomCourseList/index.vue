<template>
	<div class="recom-course-board">
		<recom-course-item
      v-for="(item, index) of recomCourseData"
      :key="index"
      :data="item"
		></recom-course-item>
	</div>
</template>

<script>
  import RecomCourseItem from './Item';

	export default {
		name: 'RecomCourseList',
		props: {
      recomCourseData: Array
		},
    components: {
    	RecomCourseItem
    }
	}
</script>

<style lang="scss" scoped></style>