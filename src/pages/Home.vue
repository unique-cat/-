<template>
  <div id="home">
    <Header-Nav></Header-Nav>
    <div class="block">
      <el-carousel height="700px">
        <el-carousel-item v-for="item in banners" :key="item">
          <img :src="item">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="home-body">
      <div class="home-body-list">
        <ul class="home-del-list">
          <li v-for="item in delList" :key="item"><img :src="item" /></li>
        </ul>
        <ul class="home-pro-list">
          <li v-for="item in proList" :key="item"><img :src="item" /></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderNav from '../components/HeaderNav.vue';
import banner_1 from '../resource/img/banner_1.jpg';
import banner_2 from '../resource/img/banner_2.jpg';
import banner_3 from '../resource/img/banner_3.jpg';
import you from '../resource/img/you.jpg';
import hongbao from '../resource/img/hongbao.jpg';
import hongbao_5 from '../resource/img/hongbao_5.jpg';
import info_1 from '../resource/img/info_1.jpg';
import info_2 from '../resource/img/info_2.jpg';
import info_3 from '../resource/img/info_3.jpg';
import info_4 from '../resource/img/info_4.jpg';
import info_5 from '../resource/img/info_5.jpg';
export default {
  data () {
    return {
      banners:[banner_1,banner_2,banner_3],
      delList:[you,hongbao,hongbao_5],
      proList:[info_1,info_2,info_3,info_5],
      info_4,
    }
  },
  components:{
    HeaderNav
  },
  methods:{
    goHotSell(){
      this.$router.push(
        {name: 'hotSell'}
      );
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
  .home-body{
    overflow: hidden;
    background-color:#fff; 
  }
  .home-body .home-body-list{
    max-width: 1100px;
    overflow: hidden;
    margin: 0 auto;
  }
  
  .home-body .home-del-list{
    display: flex;
    -webkit-display:flex;
  }
  .home-body .home-del-list>li{
    flex: 1;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #fff;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #fff;
  }
</style>
