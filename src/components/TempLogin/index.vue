<template>
  <div class="login">
    <form class="form" @submit.prevent="submit">
      <div class="form-group" v-delete="phoneNo">
        <label for="phoneNo">手机号码</label>
        <input type="text" id="phoneNo" v-model="phoneNo" placeholder="请输入手机号码" >
        <span id="phoneNoDelete" class="hide" @click="deleteFun($event)">X</span>
      </div>
      <div class="form-group" v-delete="email">
        <label for="email">邮箱地址</label>
        <input type="text" id="email" v-model="email" placeholder="请输入邮箱地址" >
        <span id="emailDelete" class="hide" @click="deleteFun($event)">X</span>
      </div>
      <div class="form-group">
        <label for="password">交易密码</label>
        <input type="password" id="password" v-model="password" placeholder="请输入交易密码" >
        <span id="passwordShowHide" @click="passwordFun($event)">~</span>
      </div>
    </form>
    <button @click="login()" class="login">登录</button>
    <br/>
    <br/>
    <button @click="loginOut()">注销</button>
    <br/>
    <br/>
    <button>
      <router-link to="/shop">网店</router-link>
    </button>
    <button>
      <router-link to="/puyipay">广发电子账户</router-link>
    </button>
    <button>
      <router-link to="/ttl/productlist">产品列表</router-link>
    </button>
    <button>
      <router-link to="/ttl/myInsurance">保险理财</router-link>
    </button>
    <br/>
    <br/>
    <p>{{ userInfo }}</p>
    <button @click="open()">打开图片</button>
    <button @click="upload()">上传图片</button>
    <br />
    <br />
    <button @click="goBack()">返回上一页</button>
    <!-- <div class="login">
      <swiper :options="swiperOption">
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div> -->
    <!-- <swiper :options="bannerOption">
      <swiper-slide>
        <img class="home-header_img" src="../../images/puyitou/banner0.jpg" />
      </swiper-slide>
      <swiper-slide>
        <img class="home-header_img" src="../../images/puyitou/banner1.jpg" />
      </swiper-slide>
      <swiper-slide>
        <img class="home-header_img" src="../../images/puyitou/banner2.jpg" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper> -->
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    name: 'User',
    components: {
      swiper,
      swiperSlide
    },
    data () {
      return {
        phoneNo: '',
        email: '',
        password: '',
        imgSrc: '',
        showDelete: true,
        swiperOption: {
          pagination: '.swiper-pagination',
          slidesPerView: 'auto',
          paginationClickable: true,
          spaceBetween: 15
        },
        swiperSlides: [1, 2, 3, 4, 5],
        bannerOption: {
          autoplay: 3000,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          loop: true
        }
      }
    },
    computed: {
      ...mapGetters({
        userInfo: 'userInfo'
      })
    },
    methods: {
      ...mapActions({
        ulogin: 'temp/user/login',
        info: 'temp/user/me',
        ulogout: 'temp/user/logout',
        passwordFun: 'passwordFun'
      }),
      login () {
        let o = {name: '15818140055', pass: 'pyt000000'}
        this.ulogin(o).then(() => this.info())
      },
      loginOut () {
        this.ulogout()
      },
      open () {
        alert('ddd')
        this._chooseImage((list) => {
          // this.imgSrc = list[0]
        })
      },
      upload () {
        this._uploadImage(this.imgSrc, (serverId) => {
          alert(serverId)
        })
      },
      goBack () {
        window.history.back()
      },
      deleteFun (event) {
        let id = event.srcElement.id.replace('Delete', '')
        this[id] = ''
      }
    },
    mounted () {
      // setInterval(() => {
      //   console.log('simulate async data')
      //   let swiperSlides = this.swiperSlides
      //   if (swiperSlides.length < 10) swiperSlides.push(swiperSlides.length + 1)
      // }, 3000)
    }
  }
</script>

<style lang="less" scoped>
  @import "../../style/variables";
  .login {
    margin-top: 0.3rem;
  }
  /*.swiper-slide {
    width: 90% !important;
    height: 3rem !important;
    background-color: @bg-red;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }*/

  .form-group {
    position: relative;

    span {
      position: absolute;
      right: 0.3rem;
      top: 0.2rem;
      font-size: 20px;
      width: 0.5rem;
      text-align: center;
    }
  }
</style>
