<template>
  <div id="proDetail">
      <Header-nav></Header-nav>
      <!-- 详情 -->
      <div class="pro-wrap">
          <div class="pro-lf">
              <img :src="proItem.proImg" alt="">
          </div>
          <div class="pro-rt">
              <ul>
                  <li>{{proItem.proDetail}}</li>
                  <li>价格:{{proItem.proPrice}}</li>
                  <li>销量:{{proItem.proSales}}</li>
              </ul>
          </div>
      </div>
  </div>
</template>
<script>
    import HeaderNav from '../components/HeaderNav.vue'
    export default {
        data(){
            return {
                proItem:this.$route.params.proItem
            }
        },
        components:{HeaderNav},
        created(){
            console.log(proItem)
        }
    }
</script>
<style>
    .pro-wrap{
        max-width: 1100px;
        margin: 0 auto;
        overflow: hidden;
        display: -webkit-flex;
        display: flex;
        padding-top: 20px;
    }
    .pro-wrap .pro-lf{
        width: 200px;
        margin-right: 50px;
    }
    .pro-wrap .pro-lf>img{
        width: 100%;
    }
</style>

