<template>
	<div class="main-title">
		<h1>{{data.field_name}}</h1>
		<div class="link-wrap" @click="onRouteTo(data.field)">
			<span>更多课程 <i class="iconfont icon-arrow-right"></i></span>
		</div>
	</div>
</template>

<script>
  import { mapMutations } from 'vuex';

	export default {
		name: 'MainTitle',
		props: {
			data: Object
		},
		methods: {
			...mapMutations(['selectField']),
			onRouteTo (field) {
				this.selectField(field);
				this.$router.push('/list');
			}
		}
	}
</script>

<style lang="scss" scoped>
	.main-title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: .44rem;
		padding: 0 .1rem;
		box-sizing: border-box;
		line-height: .44rem;

		.link-wrap {
			margin-top: -.05rem;
		}

    h1 {
    	font-size: .16rem;
    }

    span {
    	font-size: .12rem;
    	color: #999;

    	.iconfont {
    		font-size: .1rem;
    	}
    }
	}
</style>






