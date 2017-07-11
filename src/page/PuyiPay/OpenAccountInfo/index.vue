<template>
  <div>
    <form class="form" @submit.prevent="submit">
      <div class="form-group">
        <label for="userName">真实姓名</label>
        <input v-show="!isIdentityUser" type="text" id="userName" placeholder="请输入姓名" v-model="userName">
        <p v-show="isIdentityUser" class="content">{{ userInfo.displayName }}</p>
      </div>
      <div class="form-group">
        <label for="userIdentityCode">身份证号</label>
        <input v-show="!isIdentityUser" type="text" id="userIdentityCode" placeholder="请输入身份证号" v-model="userIdentityCode">
        <p v-show="isIdentityUser" class="content">{{ userInfo.certNoEncrypted }}</p>
      </div>
      <div class="form-group with-link" v-show="isIdentityUser && !modifyCardStatus && isSupportCard">
        <label for="BankName">银行</label>
        <p class="content">{{ userInfo.bankName }}</p>
        <a class="blue-link" @click="modifyCard">更换银行卡</a>
      </div>
      <div v-show="!isIdentityUser || modifyCardStatus || !isSupportCard" class="form-group">
        <label for="bankList">银行</label>
        <select id="bankList" v-model="bankName" :change="onChange(bankName)">
          <option value="0" disabled="disabled">选择银行</option>
          <option v-for="item in bankList" :value="item.bankCode + ',' + item.bankName">{{ item.bankName }}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="bankNum">卡号</label>
        <input v-show="!isIdentityUser || modifyCardStatus || !isSupportCard" type="text" id="bankNum" placeholder="仅限借记卡（储蓄卡）" v-model="bankNum">
        <p v-show="isIdentityUser" class="content">{{ userInfo.bankNoEncrypted }}</p>
      </div>
      <p class="form-info hidden"></p>
      <button class="main-button" type="submit" :disabled="isDisabled">下一步</button>
    </form>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapActions } from 'vuex'

  export default {
    data () {
      return {
        userName: '', // 真实姓名
        userIdentityCode: '', // 身份证号
        bankNum: '', // 银行卡号
        modifyCardStatus: false, // 实名用户修改银行卡
        urlParams: location.href.split('info?')[1],
        bankName: 0
      }
    },
    methods: {
      ...mapActions({
        isOpenAccount: 'puyipay/home/isOpenAccount',
        getBankList: 'puyipay/register/bankList'
      }),
      modifyCard () {
        this.modifyCardStatus = true
      },
      submit () {
        var cusName, certNo, cardNo
        if (this.isIdentityUser) {
          cusName = this.userInfo.displayName
          certNo = this.userInfo.certNo
          cardNo = (this.modifyCardStatus || !this.isSupportCard) ? this.bankNum : this.userInfo.bankNo
        } else {
          cusName = this.userName
          certNo = this.userIdentityCode
          cardNo = this.bankNum
        }
        const isIdentityUser = this.isIdentityUser  // 是否实名
        const bankPhone = this.userInfo.bankPhone // 银行预留手机号
        const bankPhoneEncrypted = this.userInfo.bankPhoneEncrypted // 银行预留手机号(屏蔽中间4位)
        const bankInfo = this.bankInfo
        sessionStorage.setItem('openAccountInfo', JSON.stringify({cusName, certNo, cardNo, isIdentityUser, bankPhone, bankPhoneEncrypted, bankInfo}))
        this.$router.replace({path: '/puyipay/openaccount/upload?' + this.urlParams})
      },
      onChange (value) {
        if (value) {
          var arr = value.split(',')
          this.bankInfo.code = arr[0]
          this.bankInfo.name = arr[1]
        }
      }
    },
    computed: {
      ...mapState({
        userInfo: 'userInfo'
      }),
      ...mapGetters({
        bankList: 'puyipay/register/bankList'
      }),
      bankInfo () {
        return {
          code: this.userInfo.bankCode,
          name: this.userInfo.bankName
        }
      },
      isIdentityUser () {
        return !!this.userInfo.certNo
      },
      isDisabled () {
        if (this.isIdentityUser) {
          if (this.isSupportCard) {
            return this.modifyCardStatus ? !this.bankNum || !this.bankName : false
          } else {
            return !this.bankNum || !this.bankName
          }
        } else {
          return !this.userName || !this.userIdentityCode || !this.bankNum || !this.bankName
        }
      },
      isSupportCard () {
        return this.bankList.some(item => item.bankName === this.userInfo.bankName)
      }
    },
    mounted () {
      this.isOpenAccount().then((res) => {
        if (res) {
          this.$router.push('/ttl/myinsurance')
        }
      })
      sessionStorage.removeItem('openAccountInfo')
      this.getBankList()
    }
  }
</script>
