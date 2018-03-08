<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <transition name="fade">
    	<router-view></router-view>
	  </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted:function(){
      this.data=this.$store.state.count
  },
  data(){
    return {
      data:''
    }
  }
}
</script>

<style>
*{margin: 0;padding: 0;box-sizing: border-box;}
body{background: #efeff4;}
#app {
  color: #2c3e50;
}
.fade-enter{
  transform: translateX(-100%);
}
.fade-enter-active{
  -webkit-transition: all .5s ease-in-out .5s;
     -moz-transition: all .5s ease-in-out .5s;
      -ms-transition: all .5s ease-in-out .5s;
       -o-transition: all .5s ease-in-out .5s;
          transition: all .5s ease-in-out .5s;
}
.fade-enter-to{
  transform: translateX(0);
}
.fade-leave{
  transform: translateX(0);
}
.fade-leave-active{
  -webkit-transition: all .5s ease-in-out;
     -moz-transition: all .5s ease-in-out;
      -ms-transition: all .5s ease-in-out;
       -o-transition: all .5s ease-in-out;
          transition: all .5s ease-in-out;
}
.fade-leave-to{
  transform: translateX(100%);
}
</style>
