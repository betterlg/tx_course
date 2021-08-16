<template>
	<div class="swiper-container">
		<div class="swiper-wrapper">
			<swiper :options="swiperOption" ref="indexSwiper">

				<swiper-slide 
				  v-for="(item, index) of swiperData" 
				  :key="index">

					<slider-inner 
					  :data="item"
					></slider-inner>

				</swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>
			</swiper>

		</div>
	</div>
</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper';
	import 'swiper/dist/css/swiper.min.css';

	import SliderInner from './SliderInner';

	export default {
		name: 'IndexSwiper',
		props: {
      swiperData: Array
		},
		components: {
			swiper,
			swiperSlide,
			SliderInner
		},
		data () {
			return {
				swiperOption: {
          pagination: {
          	el: '.swiper-pagination',
          	clickable: true
          },
          loop: true,
          loopedSlides: 1,
          autoplay: true 
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.swiper-wrapper >>> .swiper-pagination-bullet-active {
		background-color: #fff;
	}
</style>