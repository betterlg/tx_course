<template>
	<div class="scroll-wrapper" ref="wrapper">
		<div class="scroll-content">
			<course-list
        :courseData="courseData"
			></course-list>
		</div>
	</div>
</template>

<script>
	import BetterScroll from 'better-scroll';

	import CourseList from './CourseList';

	export default {
		name: 'ListScrollWrapper',
		props: {
      courseData: Array
		},
		components: {
			CourseList
		},
		mounted () {
			this.scroll = new BetterScroll(this.$refs.wrapper, {
        mouseWheel: true,
        click: true,
        tap: true
			});
		}
	}
</script>

<style lang="scss" scoped>
	
</style>