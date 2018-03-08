<template>
	<div class="headcontain">
		<div class="head-content">
			<div class="head-icon"><span class="mui-icon mui-icon-search"></span></div>
			<input type="text" name="" placeholder="搜索心动店家" @focus="showSubmit" @blur="hideSubmit">
		</div>
		<div class="head-submit">确认</div>
	</div>
</template>

<script>
	export default{
		name:'headslider',
		data(){
			return {
				show:false
			}
		},
		methods:{
			showSubmit:function(el){
				$(".head-content").css('width', '88%');
				$(".head-submit").css("right",'.08rem');
			},
			hideSubmit:function(el){
				$(".head-content").css('width', '100%');
				$(".head-submit").css("right",'-.5rem');
			}
		}
	}
</script>

<style scoped>
	.headcontain{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: .5rem;
		z-index: 3;
		padding: .1rem;
		background: pink;
	}
	.head-content{
		display: flex;
		background: white;
		align-items: center;
		border-radius: 15px;
		padding: 0 .1rem;
		width: 100%;
		transition: all .5s ease-in-out;
	}
	.head-icon{margin-right: .1rem;color: #AAA;}
	.head-content input{
		flex: 1;
		width: auto;
		height: .3rem;
		margin: 0;
		padding: 0;
		border:none;
		font-size: .15rem;
		color: #AAA;
	}
	.head-submit{
		position: absolute;
		top: .1rem;
		right: -.5rem;
		width: .5rem;
		height: .3rem;
		line-height: .3rem;
		text-align: center;
		padding: 0 .1rem;
		padding-right: 0;
		font-size: .15rem;
		transition: all .5s ease-in-out;
	}
	.headcontain-focus{
		display: flex;
		align-items: center;
	}
	.short-transition{
		transition: all .5s ease-in-out;
		display: flex;
		background: white;
		align-items: center;
		border-radius: 15px;
		padding: 0 .1rem;
		width: 100%;
	}
</style>