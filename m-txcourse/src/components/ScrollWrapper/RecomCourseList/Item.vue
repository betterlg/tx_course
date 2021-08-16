<template>
	<div class="course-item">
		<a :href="'https://ke.qq.com/course/' + data.course_id">
			<div class="img-wrap">
				<img :src="data.course_img" :alt="data.course_name" />
			</div>
			<div class="info-wrap">
				<h1 class="course-name">{{data.course_name}}</h1>
				<p class="teacher-info">
					<img :src="data.teacher_img" :alt="data.teacher_name" />
					<span>{{data.teacher_name}}</span>
				</p>
				<p class="course-price">￥{{data.price}}.00</p>
			</div>
		</a>
	</div>
</template>

<script>
	export default {
		name: 'RecomCourseItem',
		props: {
			data: Object
		}
	}
</script>

<style lang="scss" scoped>
	.course-item {
		position: relative;
		display: flex;
		height: .8rem;
		margin-bottom: .1rem;
		background-color: #fff;
		border-bottom: 1px solid #eee;

		.img-wrap {
			width: 1.43rem;
			height: 100%;
		}

		.info-wrap {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			padding: .05rem .1rem .05rem 1.53rem;
			box-sizing: border-box;

			.course-name {
				font-size: .14rem;
				line-height: .18rem;
				text-overflow: ellipsis;
				white-space: nowrap;
				overflow: hidden;
			}

			.teacher-info {
				margin-top: .03rem;
				img {
					width: .25rem;
					height: .25rem;
					border-radius: 50%;
				}

				span {
					font-size: .12rem;
					color: #666;
					vertical-align: middle;
				}
			}

			.course-price {
				margin-top: .06rem;
				font-size: .14rem;
				color: #f40;
			}
		}
	}
</style>











