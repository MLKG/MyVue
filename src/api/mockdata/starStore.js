const general = {
  status: 'success',
  data: {
    general: {
      rankLevel: 2,
      investorCount: 1,
      checkStartDate: '2017-06-30',
      checkEndDate: '2017-12-31',
      lastArchive: 100,
      dhtArchive: 200,
      psArchive: 300,
      totalArchive: 600,
      upgradeDistance: 1600,
      maintainDistance: 800,
      flag: 0,
      investorDistance: 5,
      cardPrivilege: 1,
      holidayPrivilege: 1,
      dressUpPrivilege: 1,
      servicePrivilege: 0
    },
    couponGeneral: {
      currentCount: 50,
      shareCount: 2
    },
    // wechatImg: null
    wechatImg: 'http://wx.qlogo.cn/mmopen/Q3auHgzwzM7VXaFDx6icNhOefA6brpdpJiaJU9M1Vqib7aAEHCb0LZE9hY5yXJ73u19qhQmVvFPaopodSzRsuicogDnqiaWgD4nicicRlnuUqBJOXs/0'
  }
}

const starLevel = {
  status: 'success',
  data: {
    starLevel: {
      total: 15,
      rows: []
    }
  }
}

const starLevelRow = {
  checkStartDate: '2017-12-31',
  checkEndDate: '2018-06-30',
  totalArchive: 1000,
  lastRestArchive: 500,
  halfDhtArchive: 300,
  halfPsArchive: 200,
  newRank: 1,
  investorCount: 2,
  rankChangeType: 1
}

const couponUsedGeneral = {
  status: 'success',
  data: {
    couponUsedGeneral: {
      cardCount: 20,
      cardRate: 0.5,
      cardUsed: 10,
      investAmount: 10000
    }
  }
}

const couponsUsedDetail = {
  status: 'success',
  data: {
    couponsUsedDetail: {
      total: 15,
      rows: []
    }
  }
}

const couponsUsedDetailRow = {
  year: '2016',
  month: '06',
  cardUsed: 10,
  investAmount: 999,
  ownCard: 20,
  shareCard: 50
}

const starSystem = {
  status: 'success',
  data: {
    general: general.data.general,
    wechatImg: general.data.wechatImg,
    starSystem: {
      levels: [
        {
          rankLevel: 0,
          maintainAward: 0,
          upgradeAward: 0,
          minInvestCount: 0,
          minInvestAmount: 0
        },
        {
          rankLevel: 1,
          maintainAward: 100,
          upgradeAward: 150,
          minInvestCount: 10,
          minInvestAmount: 1000
        },
        {
          rankLevel: 2,
          maintainAward: 200,
          upgradeAward: 250,
          minInvestCount: 20,
          minInvestAmount: 10000
        },
        {
          rankLevel: 3,
          maintainAward: 300,
          upgradeAward: 350,
          minInvestCount: 30,
          minInvestAmount: 50000
        },
        {
          rankLevel: 4,
          maintainAward: 400,
          upgradeAward: 450,
          minInvestCount: 40,
          minInvestAmount: 100000
        },
        {
          rankLevel: 5,
          maintainAward: 500,
          upgradeAward: 550,
          minInvestCount: 50,
          minInvestAmount: 500000
        }
      ],
      hongbao: {
        values: [5, 10, 20, 70, 100],
        counts: [
          [0, 0, 0, 0, 0],
          [1, 1, 0, 0, 0],
          [1, 1, 1, 1, 0],
          [1, 1, 1, 1, 1],
          [2, 2, 2, 2, 2],
          [3, 3, 3, 3, 3]
        ]
      }
    }
  }
}

export default {
  general: () => general,
  starLevel (param) {
    let rows = starLevel.data.starLevel.rows
    if (param.page === 1) {
      rows.length = 10
    } else if (param.page === 2) {
      rows.length = 5
    } else {
      rows.length = 0
    }
    rows.fill(starLevelRow)
    return starLevel
  },
  couponUsedGeneral: () => couponUsedGeneral,
  couponsUsedDetail (param) {
    let rows = couponsUsedDetail.data.couponsUsedDetail.rows
    if (param.page === 1) {
      rows.length = 10
    } else if (param.page === 2) {
      rows.length = 5
    } else {
      rows.length = 0
    }
    rows.fill(couponsUsedDetailRow)
    return couponsUsedDetail
  },
  starSystem: () => starSystem
}
