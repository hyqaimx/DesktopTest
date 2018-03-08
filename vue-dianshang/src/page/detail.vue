<template>
	<div>
		<header id="header" class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">商家信息</h1>
		</header>
		<slider :topStyle='topstyle'></slider>
		<div class="row first-row">
            <div class="img-contain">
                <img src="src/assets/images/1.png" width="100%">
            </div>
            <div class="store-name">{{storeInfo.name}}</div>
            <div class="store-share">分享有赏</div>
        </div>
        <div class="row">
            <div class="location">
            	<span class="mui-icon mui-icon-location" style="font-size: .3rem; color: #AAA;"></span>
                <div class="location-name">北京市石景山区中惠国际大厦B座底商（万达广场南侧）</div>
            </div>
            <div class="phone">
                <span class="mui-icon mui-icon-phone" style="font-size: .3rem; color: #AAA;"></span>
                <div class="phone-name" @click="callPhone">{{storeInfo.phone}}</div>
            </div>
        </div>
        <div class="row">
            <div class="photo-contain-title">照片墙</div>
            <div class="photo-contain">
            	<template v-for="(item,index) in imgLists" v-if="index<3">
            		<div>
                    	<img :src="item.src" @click="showPic">
                	</div>
            	</template>
            </div>
            <div class="photo-more">查看更多<i class="mui-icon mui-icon-arrowright" style="font-size: .2rem; color: #F34347;font-weight:600;"></i></div>
        </div>
        <div class="rules">
            <div class="rules-title">优惠&活动</div>
            <div class="rules-content">
            	分享至微信朋友圈，领取分享赏金
                <br/>分享至微信朋友圈，领取分享赏金
                <br/>分享至微信朋友圈，领取分享赏金

            </div>
        </div>
        <transition name='opticy'>
        <template v-if="showPicture">
        	<div class="shade" @click="hidePic">
        		<div class="picture-container" @click.stop="stopBubble">
        			<template v-for="item in imgLists">
        				<div class="picture-contain">
        					<img :src= "item.src">
        					<div class="picture-note">{{item.note}}</div>
        				</div>
        			</template>
        			<div class="handler-left" @click="pictureLeft">
        				<div class="handler-left-arrow"></div>
        			</div>
        			<div class="handler-right" @click="pictureRight">
        				<div class="handler-right-arrow"></div>
        			</div>
        		</div>
        	</div>
        </template>
        </transition>
	</div>
</template>

<style scoped>
	.row{display: flex;align-items:center;flex-wrap:wrap;background: white;margin-bottom: .1rem;}
	.first-row{margin-bottom: 0;}
	.img-contain{width: .5rem;padding: .1rem;height: .51.2rem;}
	.img-contain img{width: .4rem;height: .4rem;border-radius: 50%;}
	.store-name{flex:1;padding-left: .1rem;font-size: .18rem;font-weight: 600;}
	.store-share{width: .8rem;margin-right: .2rem; color: #f34347;height: .3rem;line-height: .3rem;font-size: .15rem;text-align: center;border:1px solid #f34347;border-radius: 3px;}
	.location{padding: 0 .1rem;display: flex;align-items:center;padding-bottom: .1rem;}
	.location-name{padding-left: .1rem;font-size: .15rem;}
	.phone{padding: 0 .1rem;display: flex;align-items:center;padding-bottom: .1rem;}
	.phone-name{padding-left: .1rem;font-size: .15rem;color: #48C0FC;}
	.phone{padding: 0 .1rem;display: flex;align-items:center;padding-bottom: .1rem;}
	.phone-name{padding-left: .1rem;font-size: .15rem;}
	.photo-contain-title{padding: .1rem;font-weight: 600;color: #F34347;font-size: .15rem;}
	.photo-contain{display: flex;align-items:center;}
	.photo-contain div{flex:1;padding-left: .05rem;font-size: .15rem;}
	.photo-contain div img{width: 100%;max-height: .6rem;}
	.photo-contain div img:last-child{padding-right: .05rem;}
	.photo-more{width: 100%; text-align: center;padding: .05rem 0;font-size: .16rem;font-weight: 600;color: #F34347;}
	.rules{background: white;}
	.rules-title{padding: .05rem .1rem;font-weight: 600;color: #F34347;border-bottom: 1px dashed #F5F5F5;font-size: .15rem;}
	.rules-content{padding: .05rem .1rem;color: #AAA;font-size: .14rem;}

	/*图片预览*/
	.shade{position: fixed;top: 0;left: 0;width: 100%;height: 100%;background: rgba(0,0,0,.9);z-index: 11;transition: all 1s ease-in-out;}
	.picture-container{width: 100%; position: relative;top: 50%;left: 50%;transform: translate(-50%,-50%);overflow: hidden;display: flex;}
	.picture-contain{width: 100%;margin: 0 auto;flex-shrink: 0;transition: all 1s ease-in-out;}
	.picture-contain img{width: 90%;display: block;margin: 0 auto;}
	.picture-note{width: 90%;margin: 0 auto; text-align: center;color: white;background: rgba(0,0,0,.5);padding: .03rem;font-size: .14rem;}
	.handler-right{color: white;position: absolute;right: 0;top: 50%;transform: translateY(-50%);}
	.handler-left{color: white;position: absolute;left: 0;top: 50%;transform: translateY(-50%);}
	.handler-left-arrow,.handler-right-arrow{width: .3rem;height: .3rem;border-top:4px solid #DCDCDC;border-right: 4px solid #DCDCDC;border-radius: 5px;}
	.handler-left-arrow{transform: translate(.3rem,0) rotate(-135deg);}
	.handler-right-arrow{transform: translate(-.3rem,0) rotate(45deg);}
	/*动画过渡*/
	.opticy-enter{opacity: 0;}
	.opticy-enter-active{-webkit-transition: all .3s ease-in-out;transition: all .3s ease-in-out;}
	.opticy-enter-to{opacity: 1;}
	.opticy-leave{opacity: 1;}
	.opticy-leave-active{-webkit-transition: all .5s ease-in-out;transition: all .5s ease-in-out;}
	.opticy-leave-to{opacity: 0;}
</style>

<script>
import slider from '@/components/headslider'
	export default{
		name:'detail',
		data(){
			return {
				topstyle:{
					marginTop: '44px',
					padding:0
				},
				phoneNum:'010-5369 7526',
				storeInfo:{},
				imgLists:[
					{src:'src/assets/images/shuijiao.jpg',note:'图片1'},
					{src:'src/assets/images/yuantiao.jpg',note:'图片2'},
					{src:'src/assets/images/muwu.jpg',note:'图片3'},
					{src:'src/assets/images/shuijiao.jpg',note:'图片4'},
					{src:'src/assets/images/shuijiao.jpg',note:'图片5'},
					{src:'src/assets/images/yuantiao.jpg',note:'图片6'},
					{src:'src/assets/images/muwu.jpg',note:'图片7'},
				],
				showPicture:false,
				page:1
			}
		},
		methods:{
			callPhone:function(){
				window.location.href='tel://'+this.storeInfo.phone
			},
			showPic:function(){
				this.showPicture=true;
			},
			hidePic:function(){
				this.showPicture=false;
			},
			stopBubble:function(){
			},
			pictureRight:function(){
				var s=$(".picture-container").find('.picture-contain').length;
				if(this.page<s){
					$(".picture-contain").css('transform', 'translate(-'+this.page*100+'%,0%)');
					this.page++;
				}else{
					this.page=1;
					$(".picture-contain").css('transform', 'translate(0%,0%)');
				}
			},
			pictureLeft:function(){
				var s=$(".picture-container").find('.picture-contain').length;
				if(this.page==1){
					$(".picture-contain").css('transform', 'translate(-'+(s-1)*100+'%,0%)');
					this.page=s;
				}else if(this.page>1&&this.page<=s){
					this.page--;
					$(".picture-contain").css('transform', 'translate(-'+(this.page-1)*100+'%,0%)');
				}
			}
		},
		mounted:function (){
			this.storeInfo=this.$route.params.item
		},
		components:{
			slider
		}
	}
</script>