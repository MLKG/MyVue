<template>
  <div>
    <form class="form" @submit.prevent="submit">
      <div class="form-group">
        <label for="cusName">真实姓名</label>
        <input type="text" id="cusName" v-model="cusName" disabled>
      </div>
      <div class="form-group">
        <label for="certNo">证件号码</label>
        <input type="text" id="certNo" v-model="certNo" disabled>
      </div>
      <div class="form-group">
        <label for="phoneNo">手机号码</label>
        <input type="text" id="phoneNo" v-model="phoneNo" disabled>
      </div>
      <div class="form-group">
        <label for="email">邮箱地址</label>
        <input type="text" id="email" v-model="email" placeholder="请输入邮箱地址" @focus="clearErrMsg" >
      </div>
      <div class="form-group">
        <label for="province">联系地址</label>
        <select id="province" v-model="province">
          <option disabled>省</option>
          <option v-for="option in provinceList">{{option.n}}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="city">&nbsp;</label>
        <select id="city" v-model="city">
          <option disabled>市</option>
          <option v-for="option in cityList">{{option.n}}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="areaCode">&nbsp;</label>
        <select id="areaCode" class="areaCode" v-model="areaCode">
          <option disabled>区</option>
          <option v-for="option in areaCodeList">{{option.n}}</option>
        </select>
      </div>
      <div class="form-group form-textarea">
        <label for="address">详细地址</label>
        <textarea  type="text" id="address" placeholder="请输入详细地址" v-model="address" @focus="clearErrMsg" ></textarea>
      </div>

      <div class="form-gap"></div>

      <div class="form-group">
        <label for="residentSource">居民类型</label>
        <select id="residentSource" v-model="residentSource">
          <option disabled>请选择居民类型</option>
          <option v-for="option in residentSourceList">{{option.name}}</option>
        </select>
      </div>

      <div class="form-group">
        <label for="workCode">职业</label>
        <select id="workCode" v-model="workCode">
          <option disabled>请选择职业</option>
          <option v-for="option in jobList">{{option.job}}</option>
        </select>
      </div>

      <div class="form-group form-select">
        <label for="yearStart">身份证有效期</label>
        <select id="yearStart" v-model="yearStart">
          <option disabled>年</option>
          <option v-for="option in yearStartList">{{option}}</option>
        </select>
        <span>年</span>
        <select id="monthStart" v-model="monthStart">
          <option disabled>月</option>
          <option v-for="option in monthStartList">{{option}}</option>
        </select>
        <span>月</span>
        <select id="dayStart" v-model="dayStart">
          <option disabled>日</option>
          <option v-for="option in dayStartList">{{option}}</option>
        </select>
        <span>日</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span>至</span>
      </div>
      <div class="form-group form-select">
        <label for="year">&nbsp;</label>
        <select id="year" v-model="year">
          <option disabled>年</option>
          <option v-for="option in yearList">{{option}}</option>
        </select>
        <span>年</span>
        <select id="month" v-model="month">
          <option disabled>月</option>
          <option v-for="option in monthList">{{option}}</option>
        </select>
        <span>月</span>
        <select id="day" v-model="day">
          <option disabled>日</option>
          <option v-for="option in dayList">{{option}}</option>
        </select>
        <span>日</span>
      </div>
      <div class="form-group certNo">
        <label for="vaEndDate">证件长期有效
          <input type="checkbox" id="vaEndDate" value="1" v-model="vaEndDate">
        </label>
      </div>

      <div class="form-group">
        <label for="zipCode">邮政编码</label>
        <input type="text" id="zipCode" placeholder="请输入邮政编码" v-model="zipCode" @focus="clearErrMsg" >
      </div>
      <div class="form-group">
        <label for="income">年收入(万元)</label>
        <input type="text" id="income" placeholder="请输入年收入" v-model="income" @focus="clearErrMsg" >
      </div>

      <div class="form-gap"></div>

      <div class="form-group">
        <label for="time">生效时间</label>
        <input type="text" id="time" v-model="time" disabled>
      </div>
      <div class="form-group">
        <label for="pay">支付方式</label>
        <input type="text" id="pay" v-model="pay" disabled>
      </div>
      <div class="form-group">
        <label for="tradeShare">购买份数</label>
        <input type="text" id="tradeShare" v-model="tradeShare" disabled>
      </div>

      <label for="read" class="read">
        <input type="checkbox" id="read" v-model="read">
        我已阅读并同意<span @click="showTerms()">服务协议</span>
      </label>

      <p class="form-info">{{errMsg}}</p>

      <button type="submit" class="main-button" :disabled="isDisabled">立即购买</button>
    </form>
    <div class="product-purchase">
      <div class="product-purchase_title">
        温馨提示：
      </div>
      <div class="product-purchase_content">
        受益人：法定受益人<br />
        如需更改，请您携带书面申请（需有被保险人亲笔签字）、投保人及被保人身份证原件到营业厅机构申请办理。<br />
        如核保失败，请联系客服4008308003。
      </div>
      <div class="product-purchase_tip">- 本服务由广发银行提供 -</div>
    </div>

    <product-terms v-show="showTermsTip" @hideTerms="showTerms()"></product-terms>
  </div>
</template>

<script>
  import ProductTerms from 'page/Ttl/ProductTerms'
  import { mapActions } from 'vuex'

  export default {
    data () {
      return {
        cusName: '',   // 姓名
        certNo: '',  // 证件号码
        phoneNo: '',  // 手机号码
        email: '',  // 邮箱地址
        province: '省',  // 省
        city: '市',        // 市
        areaCode: '区',      // 区
        address: '',         // 详细地址
        provinceValue: '',  // 省值
        provinceLocalValue: '',
        cityValue: '',        // 市值
        cityLocalValue: '',
        areaCodeValue: '',      // 区值
        provinceLocalList: [],  // 省列表
        cityLocalList: [],       // 城市列表
        areaCodeLocalList: [],      // 区
        residentSource: '请选择居民类型',
        residentSourceList: [{name: '城镇', value: '0'}, {name: '农村', value: '1'}],
        workCode: '请选择职业',
        jobList: [],
        yearStart: '',
        monthStart: '',
        dayStart: '',
        year: '',
        month: '',
        day: '',
        endDate: '',
        vaEndDate: false, // 证件长期有效
        zipCode: '',
        income: '',
        time: '投保成功后次日零时',
        pay: '银行卡',
        tradeShare: this.$route.query.tradeShare + '份',
        read: false,
        errMsg: '',
        showTermsTip: false
      }
    },
    computed: {
      yearStartList () {
        let currentYear = new Date().getFullYear()
        let yearStartLength = 50    // 定义年限长度
        let yearStartList = []
        for (let i = 0; i < yearStartLength; i++) {
          yearStartList.push(currentYear - yearStartLength + i + 1)
        }
        return yearStartList
      },
      monthStartList () {
        let currentYear = new Date().getFullYear()
        let currentMonth = new Date().getMonth() + 1
        let monthStartList = []
        if (parseInt(this.yearStart) === parseInt(currentYear)) {
          for (let i = 1; i <= currentMonth; i++) {
            monthStartList.push(i)
          }
          if (this.monthStart > currentMonth) {
            this.monthStart = ''
            this.dayStart = ''
          }
        } else {
          for (let i = 0; i < 12; i++) {
            monthStartList.push(i + 1)
          }
        }
        return monthStartList
      },
      dayStartList () {
        let currentYear = new Date().getFullYear()
        let currentMonth = new Date().getMonth() + 1
        let currentDay = new Date(this.yearStart, this.monthStart, 0).getDate()
        let nowDay = new Date().getDate()
        let dayStartList = []
        if (this.dayStart > currentDay) {
          this.dayStart = ''
        }
        if (parseInt(this.yearStart) === parseInt(currentYear) && parseInt(this.monthStart) === parseInt(currentMonth)) {
          for (let i = 1; i <= nowDay; i++) {
            dayStartList.push(i)
          }
        } else {
          for (let i = 0; i < currentDay; i++) {
            dayStartList.push(i + 1)
          }
        }
        return dayStartList
      },
      yearList () {
        let currentYear = new Date().getFullYear()
        let yearLength = 50    // 定义年限长度
        let yearList = []
        for (let i = 0; i < yearLength; i++) {
          yearList.push(currentYear + i)
        }
        return yearList
      },
      monthList () {
        let currentYear = new Date().getFullYear()
        let currentMonth = new Date().getMonth() + 1
        let monthList = []
        if (parseInt(this.year) === parseInt(currentYear)) {
          for (let i = currentMonth; i <= 12; i++) {
            monthList.push(i)
          }
          if (this.month < currentMonth) {
            this.month = ''
            this.day = ''
          }
        } else {
          for (let i = 0; i < 12; i++) {
            monthList.push(i + 1)
          }
        }
        return monthList
      },
      dayList () {
        let currentYear = new Date().getFullYear()
        let currentMonth = new Date().getMonth() + 1
        let currentDay = new Date(this.year, this.month, 0).getDate()
        let nowDay = new Date().getDate()
        let dayList = []
        if (this.day > currentDay) {
          this.day = ''
        }
        if (parseInt(this.year) === parseInt(currentYear) && parseInt(this.month) === parseInt(currentMonth)) {
          for (let i = nowDay; i <= currentDay; i++) {
            dayList.push(i)
          }
        } else {
          for (let i = 0; i < currentDay; i++) {
            dayList.push(i + 1)
          }
        }
        return dayList
      },
      provinceList () {
        if (this.provinceValue) {
          let provinceItem = this.filterObj(this.provinceLocalList, 'c', this.provinceValue)
          // 如果上次填入的省份对于该产品没有网点，则重置该省市区及地址的填写
          if (provinceItem.length === 1) {
            this.province = this.filterObj(this.provinceLocalList, 'c', this.provinceValue)[0].n
          } else {
            this.address = ''
          }
        }
        return this.provinceLocalList
      },
      cityList () {
        if (this.province !== '省') {
          // console.log(this.province !== this.provinceLocalValue)
          this.provinceValue = this.filterObj(this.provinceLocalList, 'n', this.province)[0].c
          if (this.cityValue) {
            let cityItem = this.filterObj(this.cityLocalList, 'c', this.cityValue)
            if (cityItem.length === 1) {
              this.city = this.filterObj(this.cityLocalList, 'c', this.cityValue)[0].n
            }
          }
          if (this.provinceLocalValue && this.province !== this.provinceLocalValue) {
            this.city = '市'
            this.areaCode = '区'
            this.cityLocalValue = '市'
          }
          this.provinceLocalValue = this.province
          // console.log(this.provinceLocalValue)
          // console.log(this.provinceValue)
          // console.log(this.province)
          // console.log('市的监听')
          return this.filterObj(this.cityLocalList, 'p', this.provinceValue)
        }
      },
      areaCodeList () {
        if (this.city !== '市') {
          this.cityValue = this.filterObj(this.filterObj(this.cityLocalList, 'n', this.city), 'p', this.provinceValue)[0].c
          if (this.areaCodeValue) {
            let areaCodeItem = this.filterObj(this.areaCodeLocalList, 'c', this.areaCodeValue)
            if (areaCodeItem.length === 1) {
              this.areaCode = this.filterObj(this.areaCodeLocalList, 'c', this.areaCodeValue)[0].n
            }
          }
          if (this.cityLocalValue && this.city !== this.cityLocalValue) {
            this.areaCode = '区'
          }
          this.cityLocalValue = this.city
          // console.log(this.cityLocalValue)
          // console.log(this.cityValue)
          // console.log(this.city)
          // console.log('区的监听')
          return this.filterObj(this.areaCodeLocalList, 'p', this.cityValue)
        }
      },
      isDisabled () {
        return !this.email || (this.province === '省') || (this.city === '市') || (this.areaCode === '区') || !this.address || (this.residentSource === '请选择居民类型') || (this.workCode === '请选择职业') || (this.yearStart === '') || (this.monthStart === '') || (this.dayStart === '') || (!this.vaEndDate && ((this.year === '') || (this.month === '') || (this.day === ''))) || !this.zipCode || !this.income || !this.read
      }
    },
    methods: {
      ...mapActions({
        getProductRecord: 'ttl/productPurchase/getProductRecord',
        checkExamine: 'ttl/productPurchase/checkExamine'
      }),
      submit () {
        let endDateValue
        if (this.vaEndDate) {
          endDateValue = '99991231'
        } else {
          endDateValue = String(this.year) + (this.month < 10 ? '0' + this.month : this.month) + (this.day < 10 ? '0' + this.day : this.day)
        }
        let effectDateValue = String(this.yearStart) + (this.monthStart < 10 ? '0' + this.monthStart : this.monthStart) + (this.dayStart < 10 ? '0' + this.dayStart : this.dayStart)
        let params = {
          productId: this.$route.query.productId,
          email: this.email,
          province: this.provinceValue,
          city: this.cityValue,
          areaCode: this.filterObj(this.filterObj(this.areaCodeLocalList, 'n', this.areaCode), 'p', this.cityValue)[0].c,
          address: this.address,
          residentSource: this.filterObj(this.residentSourceList, 'name', this.residentSource)[0].value,
          workCode: this.filterObj(this.jobList, 'job', this.workCode)[0].jobCode,
          endDate: endDateValue,
          cbsEffectDate: effectDateValue,
          zipCode: this.zipCode,
          income: this.income * 10000,
          tradeShare: this.$route.query.tradeShare
        }
        if (!this._validation.isEmail(params.email)) {
          this.errMsg = '请输入正确的邮箱地址'
        } else if (!this._validation.isZipCode(params.zipCode)) {
          this.errMsg = '请输入正确的邮政编码'
        } else if (!this._validation.isInteger(params.income)) {
          this.errMsg = '请输入正确的年收入'
        } else {
          this.checkExamine(params).then(res => {
            sessionStorage.setItem('payInfo', JSON.stringify(res.data.insuranceInfo))
            this.$router.replace({path: '/puyipay/payment', query: {productId: this.$route.query.productId}})
          }, err => {
            this.errMsg = err.message
          })
        }
      },
      clearErrMsg () {
        this.errMsg = ''
      },
      showTerms () {
        this.showTermsTip = !this.showTermsTip
      }
    },
    mounted: function () {
      sessionStorage.removeItem('payInfo')
      let params = {productId: this.$route.query.productId}
      this.getProductRecord(params).then(res => {
        let data = res.cgbUser
        this.provinceValue = data.province
        this.cityValue = data.city
        this.areaCodeValue = data.areaCode
        this.provinceLocalList = res.allCity.provinces
        this.cityLocalList = res.allCity.citys
        this.areaCodeLocalList = res.allCity.countys
        this.jobList = res.jobList
        this.cusName = data.cusName // 姓名
        this.certNo = data.certNo // 证件号码
        this.phoneNo = data.phoneNo // 手机号码
        this.email = data.email // 邮箱地址
        this.address = data.address       // 详细地址
        if (data.residentSource === '0' || data.residentSource === '1') {        // 居民类型
          this.residentSource = this.filterObj(this.residentSourceList, 'value', data.residentSource)[0].name
        }
        if (data.workCode) {
          this.workCode = this.filterObj(this.jobList, 'jobCode', data.workCode)[0].job
        }
        this.yearStart = data.cbsEffectDate ? parseInt(data.cbsEffectDate.slice(0, 4)) : ''
        this.monthStart = data.cbsEffectDate ? parseInt(data.cbsEffectDate.slice(4, 6)) : ''
        this.dayStart = data.cbsEffectDate ? parseInt(data.cbsEffectDate.slice(6, 8)) : ''
        if (data.endDate === '99991231') {               // 证件有效期
          this.vaEndDate = true
        } else {
          this.year = data.endDate ? parseInt(data.endDate.slice(0, 4)) : ''
          this.month = data.endDate ? parseInt(data.endDate.slice(4, 6)) : ''
          this.day = data.endDate ? parseInt(data.endDate.slice(6, 8)) : ''
        }
        this.zipCode = data.zipCode     // 邮编
        this.income = data.income ? parseFloat(data.income) / 10000 : data.income     // 年收入
      })
    },
    components: {
      ProductTerms
    }
  }
</script>

<style lang="less" scoped>
  @import "../../../style/variables";

  .form {
    .certNo{
      label {
        flex: 0 0 4.6rem;
        text-align: right;
      }
      input {
        flex: 0 0 0.5rem;
        position: relative;
        top: 0.08rem;
      }
    }

    & .form-select{
      align-items: center;
      select {
        &#yearStart,&#year {
          flex: 0 0 0.6rem;
          padding-right: 0.1rem;
        }

        &#monthStart,&#month,&#dayStart,&#day {
          flex: 0 0 0;
          padding-left: 0.2rem;
          padding-right: 0.1rem;
        }
      }
      span {
        font-size: @font-size-medium;
      }
    }

    select {
      appearance: none;
      border: none;
      background: transparent;
    }
  }

  .product-purchase {
    padding: 0.5rem 0.3rem 0;

    &_title {
      font-weight: 600;
      margin-bottom: 0.2rem;
    }

    &_content {
      line-height: 0.4rem;
    }

    &_tip {
      text-align: center;
      margin-top: 0.5rem;
      color: @font-color-gray;
      padding-bottom: 0.3rem;
    }
  }
</style>
