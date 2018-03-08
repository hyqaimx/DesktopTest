<template>
	<div class="container">
		<nav class="mui-bar mui-bar-tab">
			<template v-for="(item,index) in tabItems">
				<a class="mui-tab-item" :class="item.active?'mui-active':''" :href="['#tab'+(index+1)]">
					<span class="mui-icon" :class="item.icon" :style="{fontSize:item.fontSize+'px'}"></span>
					<span class="mui-tab-label">{{item.itemName}}</span>
				</a>
			</template>
		</nav>
		<div class="mui-content">
			<div id="tab1" class="mui-control-content mui-active">
				<mxheader></mxheader><!-- 头部固定导航 -->
				<slider></slider><!-- 轮播图 -->
				<!-- 公告开始 -->
				<div class="swiper-contain">
					<div class="swiper-contain-title">
						公告:
					</div>
					<div class="swiper-contain-content">
						<swiper :options="swiperOption" ref='mySwiper' id='slide-contain'>
							<template v-for="item in sliders">
								<swiper-slide><a class="slide-link" :href="item.href">{{item.content}}</a></swiper-slide>
							</template>
						</swiper>
					</div>
				</div>
				<!-- 公告结束 -->
				<!-- 列表标题开始 -->
				<div class="list-title">
					<div class="list-title-content">- 活动商家 -</div>
				</div>
				<!-- 列表标题结束 -->
				<medialist :shoplists="lists"></medialist><!-- 列表页面 -->				
			</div>
			<div id="tab2" class="mui-control-content">
				<img src="src/assets/images/adver.png" class="adver">
				<medialist :shoplists="giftlists"></medialist><!-- 列表页面 -->
			</div>
			<div id="tab3" class="mui-control-content">
				<userinfo :user='userInfo'></userinfo>
				<div>
					<ul class="mui-table-view mui-table-view-chevron mx-margin">
						<li class="mui-table-view-cell">
							<a class="mui-navigate-right"><span class="mui-icon mui-icon-compose" style="color:pink;margin-right:.1rem;font-size:.26rem;"></span>修改个人信息</a>
						</li>
					</ul>
					<ul class="mui-table-view mui-table-view-chevron mx-margin">
						<li class="mui-table-view-cell">
							<a class="mui-navigate-right"><span class="mui-icon-extra mui-icon-extra-gift" style="color:pink;margin-right:.1rem;font-size:.2rem;"></span>礼品兑换</a>
						</li>
						<li class="mui-table-view-cell">
							<a class="mui-navigate-right"><span class="mui-icon-extra mui-icon-extra-heart-filled" style="color:pink;margin-right:.1rem;font-size:.2rem;"></span>完善信息，点亮专属图标</a>
						</li>
					</ul>
				</div>
				<div class="my-icons">
					<div class="my-icons-title">我的图标</div>
					<div class="my-icon-contain">
						<template v-for="item in lists">
							<div class="icon-item">
								<img :src="item.imgSrc">
							</div>
						</template>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import slider from '@/components/headslider';
import mxheader from '@/components/mxheader';
import medialist from '@/components/shopList';
import userinfo from '@/components/userInfo';
export default {
  name: 'HelloWorld',
  data () {
    return {
      tabItems:[
      	{itemName:"首页",icon:"mui-icon-home",fontSize:22,content:"",active:true},
      	{itemName:"礼品",icon:"mui-icon-extra mui-icon-extra-gift",fontSize:20,content:"",active:false},
      	{itemName:"我",icon:"mui-icon-person",fontSize:26,content:"",active:false}
      ],
      // sliderHeight:$(".swiper-contain").height(),
      sliders:[
      	{href:'#',content:"关于开展秋冬季文化惠民消费季活动的通知"},
      	{href:'#',content:"今冬明春森林草原防火工作通知"},
      	{href:'#',content:'国庆节安全生产大检查工作总结'}
      ],
      lists:[
		{id:1, imgSrc:'src/assets/images/logo.png',name:'民客佳大鸡排',phone:'18635024586',state:"1",clickEvent:false,routerLink:true},
		{id:2, imgSrc:'src/assets/images/1.png',name:'民客佳小鸡排',phone:'18635024586',state:"2",clickEvent:false,routerLink:true},
		{id:3, imgSrc:'src/assets/images/2.png',name:'西山创客咖啡',phone:'18635024586',state:"1",clickEvent:false,routerLink:true},
		{id:4, imgSrc:'src/assets/images/5.png',name:'东山创客咖啡',phone:'18635024586',state:"2",clickEvent:false,routerLink:true},
		{id:5, imgSrc:'src/assets/images/6.png',name:'地道小馆',phone:'18635024586',state:"1",clickEvent:false,routerLink:true},
		{id:6, imgSrc:'src/assets/images/2.jpg',name:'好伦哥（冯村店）',phone:'18635024586',state:"1",clickEvent:false,routerLink:true}
	  ],
	  giftlists:[
		{id:1, imgSrc:'src/assets/images/logo.png',name:'礼品信息1',jifen:'86',total:"30",introduce:"商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1",clickEvent:true},
		{id:2, imgSrc:'src/assets/images/1.png',name:'礼品信息2',jifen:'24',total:"433",introduce:"商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1",clickEvent:true},
		{id:3, imgSrc:'src/assets/images/2.png',name:'礼品信息3',jifen:'86',total:"345",introduce:"商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1",clickEvent:true},
		{id:4, imgSrc:'src/assets/images/5.png',name:'礼品信息4',jifen:'24',total:'12',introduce:"商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1",clickEvent:true},
		{id:5, imgSrc:'src/assets/images/6.png',name:'礼品信息5',jifen:'586',total:"32",introduce:"商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1",clickEvent:true},
		{id:6, imgSrc:'src/assets/images/2.jpg',name:'礼品信息6',jifen:'186',total:"90",introduce:"商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1",clickEvent:true}
	  ],
	  userInfo:{touxiang:"src/assets/images/logo.png",id:"756273547",name:"马骁",sex:"1",infoComplete:"信息已完善",guanzhu:true,lightNum:"12"},
      swiperOption:{
      	direction:'vertical',
      	autoplay:true,
      	height:35,
      	loop:true
      }
    }
  },
  computed:{
  	swiper(){
  		return this.$refs.mySwiper.swiper
  	}
  },
  // mounted(){
  // 	console.log('this is current swiper instance object', this.swiper)
  //   this.swiper.slideTo(3, 1000, false)
  // },
  components:{
  	slider,
  	mxheader,
  	medialist,
  	userinfo
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	/*@import '../assets/css/mui.css';
	@import '../assets/css/icons-extra.css';*/
	.title{
		margin: 20px 15px 10px;
		color: #6d6d72;
		font-size: 15px;
	}
			
	.oa-contact-cell.mui-table .mui-table-cell {
		padding: 11px 0;
		vertical-align: middle;
	}
			
	.oa-contact-cell {
		position: relative;
		margin: -11px 0;
	}
	
	.oa-contact-avatar {
		width: 75px;
	}
	.oa-contact-avatar img {
		border-radius: 50%;
	}
	.oa-contact-content {
		width: 100%;
	}
	.oa-contact-name {
		margin-right: 20px;
	}
	.oa-contact-name, oa-contact-position {
		float: left;
	}
	.swiper-contain{
		display: flex;
		width: 100%;
		align-items: center;
		height: .35rem;
		line-height: .35rem;
		padding: 0 .1rem;
		background: #FFF0CC;
		position: relative;
		z-index: 1;
	}
	.swiper-contain:after{
		content: "";
		width: 100%;
		height: .2rem;
		position: absolute;
		top: -.07rem;
		left: 0;
		z-index: -1;
		border-radius: 40%;
		background: linear-gradient(0deg,#FFF0CC 0%,#FFF0CC 30%,#FFFFFF 70%)
	}
	.swiper-contain-title{
		width: .45rem;
		font-size: .15rem;
		font-weight: 600;
		padding-right: .05rem;
	}
	.swiper-contain-content{
		flex: 1;
		height: .35rem;
		overflow: hidden;
	}
	#slider-contain{
		height: .35rem;
		overflow: hidden;
	}
	.slide-link{
		font-size: .15rem;
		color: #333;
		text-decoration: underline;
		overflow: hidden;
		text-overflow:ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
	}
	.list-title{
		border-bottom: 1px solid pink;
		background: white;
		padding: .08rem 0;
		text-align: center;
		color: pink;
		font-weight: 600;
		font-size: .16rem;
	}
	.adver{
		width: 100%;
	}
	.mx-margin{
		margin-top: .1rem;
	}
	.my-icons{
		width: 100%;
		font-size: .16rem;
		margin-top: .1rem;
		background: white;
		box-shadow: 0px 0px 2px #C9C9C9;
	}
	.my-icons-title{
		text-align: center;
		font-weight: 600;
		color: pink;
		padding: .08rem 0;
		letter-spacing: 2px;
		border-bottom: 1px solid #E8E8E8;
	}
	.my-icon-contain{
		width: 100%;
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		padding-top: .1rem;
		padding-right: .1rem;
	}
	.icon-item{
		width: 20%;
		padding: 0 0  .1rem .15rem;
	}
	.icon-item img{
		width: 100%;
		border-radius: 50%;
	}
</style>
