<template>
	<div class="scroll-wrapper" ref="wrapper">
		<div class="scroll-content">
			<index-swiper
        :swiperData="swiperData"
			></index-swiper>
      
      <!-- http://localhost:8080/#/list?field=all -->
			<main-title
        :data="{field_name: '推荐课程', field: 'all'}"
			></main-title>

			<recom-course-list
        :recomCourseData="recomCourseData"
			></recom-course-list>

			<div v-if="fieldData.length > 0 && courseData.length > 0">
        
        <!-- http://localhost:8080/#/list?field=0 -->
				<main-title
	        :data="fieldData[0]"
				></main-title>

        <course-list
          :courseData="courseData | filterCourseData('0')"
        ></course-list>
        
        <!-- http://localhost:8080/#/list?field=1 -->
				<main-title
	        :data="fieldData[1]"
				></main-title>

				<course-list
          :courseData="courseData | filterCourseData('1')"
        ></course-list>
        
        <!-- http://localhost:8080/#/list?field=2 -->
				<main-title
	        :data="fieldData[2]"
				></main-title>

				<course-list
          :courseData="courseData | filterCourseData('2')"
        ></course-list>
        
        <!-- http://localhost:8080/#/list?field=3 -->
				<main-title
	        :data="fieldData[3]"
				></main-title>

				<course-list
          :courseData="courseData | filterCourseData('3')"
        ></course-list>
			</div>

		</div>
	</div>
</template>

<script>
  import BetterScroll from 'better-scroll';

  import { PULL_DOWN_TEXT } from 'utils/config';

  import IndexSwiper from './IndexSwiper';
  import MainTitle from './MainTitle';
  import RecomCourseList from './RecomCourseList';
  import CourseList from './CourseList';

  import IndexModel from 'models/Index';

  const indexModel = new IndexModel();

	export default {
		name: 'IndexScrollWrapper',
		components: {
      IndexSwiper,
      MainTitle,
      RecomCourseList,
      CourseList
		},
		data () {
			return {
				swiperData: [],
				fieldData: [],
				courseData: [],
				recomCourseData: []
			}
		},
		mounted () {
			this.getCourseDatas();
			this.scroll = new BetterScroll(this.$refs.wrapper, {
        mouseWheel: true,
        click: true,
        tap: true,
        pullDownRefresh: {
        	threshold: 50,
        	stop: 50
        }
			});

			this.scroll.on('pullingDown', this.onPullingDown);
		},
		methods: {
			async getCourseDatas () {
				const data = await indexModel.getCourseDatas(),
				      res = data.result;

        this.swiperData =res.swipers;
        this.fieldData = res.fields;
        this.courseData = res.courses;
        this.recomCourseData = res.recomCourses;
			},
			onPullingDown () {
				this.$emit('onPullingDown', PULL_DOWN_TEXT.PULLING);
				this.getCourseDatas();

				setTimeout(() => {
          this.$emit('onFinishedPullDown', PULL_DOWN_TEXT.FINISHED);

          setTimeout(() => {
          	this.$emit('onResetLoadingText', PULL_DOWN_TEXT.ORIGIN);
						this.scroll.finishPullDown();
					}, 500);
				}, 1500);
			}
		}
	}
</script>

<style lang="scss" scoped></style>









