<template>
	<div class="list-item-contain">
		<template v-for="(item,index) in shoplists">
		<div class="list-item" @click="showDetail(item,'showDetail')">
			<div class="list-item-img">
				<img :src="[item.imgSrc]">
			</div>
			<div class="list-item-content">
				<div class="list-item-name">{{item.name}}</div>
				<div class="list-item-mid">{{item.mid}}</div>
				<div class="list-item-other">
					<div class="list-item-phone" v-if="item.phone">联系电话:{{item.phone}}</div>
					<div class="list-item-info" v-if="item.info">{{item.info}}</div>
					<div class="list-item-total" v-if="item.total">数量:{{item.total}}</div>
					<div class="list-item-jifen" v-if="item.jifen">积分:{{item.jifen}}</div>
				</div>
			</div>
			<div class="list-item-right" :class="[item.state==1?'list-item-active':'']" v-if="item.state">
				{{item.state==1?'已点亮':"未点亮"}}
			</div>
		</div>
		</template>
		<template v-if="showTag">
			<div class="shade">
				<div class="Tag">
					<div class="Tag-top">
						<img :src="[tagInfo.imgSrc]">
						<div class="Tag-info">
							<div class="Tag-name">{{tagInfo.name}}</div>
							<div class="Tag-total">库存 : <span>{{tagInfo.total}}</span></div>
						</div>
					</div>
					<div class="Tag-content">
						<div class="Tag-content-title">产品详情</div>
						<div class="Tag-content-info">
							{{tagInfo.introduce}}
						</div>
					</div>
					<div class="Tag-price">商品价格:<span>{{tagInfo.jifen}}</span>积分</div>
					<div class="Tag-btn">
						<div class="Tag-cancel" @click="closeDetail()">取消</div>
						<div class="Tag-submit">兑换</div>
					</div>
				</div>
			</div>
		</template>
	</div>
</template>

<script>
	export default{
		name:"shopList",
		props:["shoplists"],
		data(){
			return {
				showTag:false,
				tagInfo:{}
			}
		},
		methods:{
			showDetail:function(el){
				if(el.clickEvent){
					this.showTag=true;
					// console.log(this.showTag);
					this.tagInfo=el
				}else if(el.routerLink){
					this.$router.history.push({name:'detail',params:{item:el}});
				}else{
					console.log("无事件");
				}
			},
			closeDetail:function(){
				this.showTag=false;
			}
		}
	}
</script>

<style scoped>
	.list-item-contain{
		background: white;
	}
	.list-item{
		padding: .1rem;
		display: flex;
		align-items: center;
	}
	.list-item:not(:last-child){
		border-bottom: 1px solid #F5F5F5;
	}
	.list-item-img img{
		width: .6rem;
		height: .6rem;
		border-radius: 5px;
		margin-right: .1rem;
		display: block;
	}
	.list-item-content{
		flex: 1;
	}
	.list-item-name{
		font-size: .18rem;
		font-weight: 600;
		color: #333;
		margin-bottom: .1rem;
		overflow: hidden;
		text-overflow:ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
	}
	.list-item-other{
		display: flex;
		font-size: .14rem;
		color: #AAA;
	}
	.list-item-phone,.list-item-jifen,.list-item-total,.list-item-info{
		flex:1;
	}
	.list-item-right{
		font-size: .15rem;
		width: .6rem;
		text-align: center;
		height: .3rem;
		line-height: .3rem;
		background: #FFFFFF;
		border:1px solid #C9C9C9;
		color: #888;
	}
	.list-item-active{
		border:none;
		background: pink;
		color: white;
		box-shadow: 1px 1px 5px #C9C9C9;
	}
	.shade{
		position: fixed;
		background: rgba(0,0,0,.5);
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
	.Tag{
		position: fixed;
		width: 80%;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		background: rgba(0,0,0,.8);
		padding: .1rem;
		color: white;
	}
	.Tag-top{
		display: flex;
		align-items: center;
	}
	.Tag-top img{
		width: .6rem;
		height: .6rem;
		border-radius: 3px;
		display: block;
		margin-right: .1rem;
	}
	.Tag-info{
		flex: 1;
	}
	.Tag-name{
		font-size: .18rem;
		font-weight: 600;
		margin-bottom: .1rem;
	}
	.Tag-total span{
		color: #00baff;
	}
	.Tag-content-title{
		padding: .05rem 0;
		text-align: center;
		color: #00baff;
	}
	.Tag-content-info{
		text-indent: .3rem;
		padding-bottom: .1rem;
	}
	.Tag-price{
		font-size: .15rem;
	}
	.Tag-price span{
		color: #00baff;
		font-size: .18rem;
		padding: 0 .05rem;
		font-weight: 600;
		letter-spacing: 2px;
	}
	.Tag-btn{
		padding: .1rem 0;
	}
	.Tag-cancel,.Tag-submit{
		display: inline-block;
		width: 1rem;
		height: .3rem;
		line-height: .3rem;
		background: #00baff;
		color: white;
		text-align: center;
		letter-spacing: 2px;
		border-radius: 5px;
	}
	.Tag-cancel{
		margin-right: .5rem;
		margin-left: .1rem;
	}
</style>