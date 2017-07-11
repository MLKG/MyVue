<template>
  <div>
    <form class="form" @submit.prevent="submit">
      <div class="upload-content">
        <p class="title">身份证正面</p>
        <div v-show="!frontImage" class="image-area">
          <img src="../../../images/puyipay/card-front.png">
          <p class="text">点击添加照片</p>
          <input type="file" accept="image/*" @change="changeFront($event.target.files[0])">
        </div>
        <div v-show="frontImage" class="image-preview">
          <img :src="frontImage" >
          <a class="close-image" @click="frontImage = ''">x</a>
        </div>
        <p class="title">身份证反面</p>
        <div v-show="!backImage" class="image-area">
          <img src="../../../images/puyipay/card-back.png">
          <p class="text">点击添加照片</p>
          <input type="file" accept="image/*" @change="changeBack($event.target.files[0])">
        </div>
        <div v-show="backImage" class="image-preview">
          <img :src="backImage" >
          <a class="close-image" @click="backImage = ''">x</a>
        </div>
      </div>
      <p class="form-info hidden"></p>
      <button class="main-button" type="submit" :disabled="isDisabled">下一步</button>
    </form>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    data () {
      return {
        frontImage: '',
        backImage: '',
        urlParams: location.href.split('upload?')[1],
        maxSize: 200 * 1024
      }
    },
    computed: {
      isDisabled () {
        return !this.frontImage || !this.backImage
      }
    },
    methods: {
      ...mapActions({
        uploadImages: 'puyipay/register/uploadImages'
      }),
      submit () {
        let param = {frontImage: this.frontImage, backImage: this.backImage}
        this.uploadImages(param).then((res) => {
          if (res.status === 'success') {
            const imageFront = res.data.imageFront
            const imageBack = res.data.imageBack
            const imagePath1 = res.data.imagePath1
            const imagePath2 = res.data.imagePath2
            sessionStorage.setItem('openAccountUpload', JSON.stringify({imageFront, imageBack, imagePath1, imagePath2}))
            this.$router.replace({path: '/puyipay/openaccount/verify?' + this.urlParams})
          }
        })
      },
      changeFront (file) {
        let reader = new FileReader()
        reader.onload = (e) => {
          var uploadImages = e.target.result
          if (uploadImages.length < this.maxSize) {
            this.frontImage = uploadImages
          } else {
            this._compressImage(uploadImages, data => {
              this.frontImage = data
            })
          }
        }
        reader.readAsDataURL(file)
      },
      changeBack (file) {
        let reader = new FileReader()
        reader.onload = (e) => {
          var uploadImages = e.target.result
          if (uploadImages.length < this.maxSize) {
            this.backImage = uploadImages
          } else {
            this._compressImage(uploadImages, data => {
              this.backImage = data
            })
          }
        }
        reader.readAsDataURL(file)
      }
    },
    mounted () {
      sessionStorage.removeItem('openAccountUpload')
    }
  }
</script>
