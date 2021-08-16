<template>
	<li 
	  :class="['tab-item', {current: index === tabIndex}]"
    @click="onTabClick"
	>
		{{data.field_name}}
	</li>
</template>

<script>
  import { scrollToPosition } from 'utils/tools';

	export default {
		name: 'TabItem',
		props: {
			data: Object,
			index: Number,
			tabIndex: Number
		},
		methods: {
			onTabClick (field, index) {
				scrollToPosition(arguments[0].target);
				this.$emit('onTabClick', field, index);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.tab-item {
		float: left;
		width: 1.2rem;
    height: 100%;
    font-size: .14rem;
    text-align: center;
    line-height: .35rem;
    box-sizing: border-box;

    &.current {
    	color: #23b8ff;
    	border-bottom: 2px solid #23b8ff;
    }
	}
</style>






