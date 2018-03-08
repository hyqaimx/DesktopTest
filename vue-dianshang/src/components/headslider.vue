<template>
	<div class="slider-contain" :style="topStyle">
	<div id="slider" class="mui-slider" >
		<div class="mui-slider-group mui-slider-loop">
			<!-- 额外增加的一个节点(循环轮播：第一个节点是最后一张轮播) -->
			<div class="mui-slider-item mui-slider-item-duplicate">
				<a href="#">
					<img src="src/assets/images/yuantiao.jpg">
				</a>
			</div>
			<!-- 第一张 -->
			<div class="mui-slider-item">
				<a href="#">
					<img src="src/assets/images/shuijiao.jpg">
				</a>
			</div>
			<!-- 第二张 -->
			<div class="mui-slider-item">
				<a href="#">
					<img src="src/assets/images/muwu.jpg">
				</a>
			</div>
			<!-- 第三张 -->
			<div class="mui-slider-item">
				<a href="#">
					<img src="src/assets/images/cbd.jpg">
				</a>
			</div>
			<!-- 第四张 -->
			<div class="mui-slider-item">
				<a href="#">
					<img src="src/assets/images/yuantiao.jpg">
				</a>
			</div>
			<!-- 额外增加的一个节点(循环轮播：最后一个节点是第一张轮播) -->
			<div class="mui-slider-item mui-slider-item-duplicate">
				<a href="#">
					<img src="src/assets/images/shuijiao.jpg">
				</a>
			</div>
		</div>
		<div class="mui-slider-indicator">
			<div class="mui-indicator mui-active"></div>
			<div class="mui-indicator"></div>
			<div class="mui-indicator"></div>
			<div class="mui-indicator"></div>
		</div>
	</div>
	</div>
</template>
<script>
	export default{
		name:'headslider',
		props:["topStyle"],
		data(){
			return {
				data:123
			}
		}
	}
</script>

<style scoped>
/*@import '../assets/css/mui.css'*/
	.slider-contain{
		margin-top: .5rem;
		padding: 0 .05rem 0rem .05rem;
		background: pink;
	}
	.slider-contain img{
		border-radius: 5px;
	}
</style>