// 我的保险理财-当前持有
const holdList = {
  status: 'success',
  data: {
    holdList: {
      total: 15,
      rows: []
    }
  }
}

const holdListRow = {
  csvCompanyName: '公司名称',
  applNo: 1,
  nsurName: '1',
  status: '可提款',
  busiDate: '2017-06-06',
  premium: 5000,
  chargeYear: 10,
  loadFlag: 0,
  isupSurrender: 'Y',
  leastExp: 0.6,
  proCode: 5001,
  insurCode: '12563'
}

// 我的保险理财-历史持有
const historyList = {
  status: 'success',
  data: {
    historyList: {
      total: 15,
      rows: []
    }
  }
}

const historyListRow = {
  applNo: 4,
  nsurName: '保险名称',
  status: '可提款',
  busiDate: '2017-06-06',
  premium: 5000,
  csvCompanyName: '公司名称'
}

// 我的保险理财-已质押

const loanList = {
  status: 'success',
  data: {
    loanList: {
      total: 15,
      rows: []
    }
  }
}

const loanListRow = {
  applNo: '5000000000000000',
  applyNo: '5001',
  insuredAmount: 1000,
  operateDate: '2017-06-06',
  applyStatus: '可提款',
  businessSum: 1000,
  putoutAmount: 1000,
  businessRate: 0.6,
  maturityDate: '2017-06-15',
  mainReturnType: 'yicixing',
  recAccount: '548155522'
}

export default {
  holdList (param) {
    let rows = holdList.data.holdList.rows
    if (param.page === 0) {
      rows.length = 10
    } else if (param.page === 1) {
      rows.length = 5
    } else {
      rows.length = 0
    }
    rows.fill(holdListRow)
    return holdList
  },
  historyList (param) {
    let rows = historyList.data.historyList.rows
    if (param.page === 0) {
      rows.length = 10
    } else if (param.page === 1) {
      rows.length = 5
    } else {
      rows.length = 0
    }
    rows.fill(historyListRow)
    return historyList
  },
  loanList (param) {
    let rows = loanList.data.loanList.rows
    if (param.page === 0) {
      rows.length = 10
    } else if (param.page === 1) {
      rows.length = 5
    } else {
      rows.length = 0
    }
    rows.fill(loanListRow)
    return loanList
  }
}

