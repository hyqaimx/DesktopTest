<template>
	<div class="mui-scroll">
		<ul class="mui-table-view mui-table-view-chevron">
			<li class="mui-table-view-cell mui-media">
				<img class="mui-pull-left head-img" :src="user.touxiang">
				<div class="mui-media-body">
					<div class="user-name">{{user.name}} <span>{{user.lightNum}}</span></div>
					<p class='mui-ellipsis'>ID:{{user.id}}</p>
					<p class='mui-ellipsis'><span>{{user.infoComplete}} </span><span>{{user.guanzhu?"已关注":"未关注"}}</span></p>
				</div>
			</li>
		</ul>
	</div>
</template>

<style scoped>
	.head-img{
		width: .7rem;
		height: .7rem;
		margin-right: .1rem;
	}
	.user-name{
		margin-top: .05rem;
	}
	.mx-margin{
		margin-top: .1rem;
	}
	.mui-scroll{
		position: static;
	}
</style>

<script>
	export default{
		name:"userInfo",
		props:["user"],
		data(){
			return {
				option:{img:'',size:'',outputType:'',full:'',canMove:'',canMoveBox:'',fixedBox:'',original:''}
			}
		}
	}
</script>