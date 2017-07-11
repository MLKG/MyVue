<template>
  <div>
    <div class="header">
      <p class="title">平衡型</p>
      <p class="date">有效期至: <span>2018-02-15</span></p>
    </div>
    <div class="content"><span class="space">&nbsp;</span>我们需要对投资者进行风险等级评测，请根据您的风险偏好确认自己的风险承受力，在购买普益投平台上基金、银行理财等投资产品时，系统会对您的风险承受力和产品风险等级进行匹配，如果产品风险等级大于您的风险承受力，系统会做出提示。
为了给您提供个性化的理财服务，我们需要对您的理财需求倾向进行评估，烦请完成如下问题，提交之后我们会向您公布测试结果。
      <p class="blue">请仔细阅读下面题目，选出每个题目中最适合您的选项。</p>
    </div>
    <div class="btn-box"><a href="" class="btn">重新测试</a></div>
  </div>
</template>

<style lang="less" scoped>
  @import "../../../style/variables";

  * {
    box-sizing: border-box;
  }

  .header {
    background-image: url("../../../images/puyitou/risk-header.png");
    background-size: 100% 100%;
    min-height: 2.6rem;
    padding: .35rem .2rem;
    width: 100%;
    font-size: @font-size-medium;
    color: #fce6e6;
    text-align: center;

    .title {
      font-size: @font-size-biggest;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, .5);
    }
  }

  .content {
    padding-top: .6rem;
    padding-left: .3rem;
    padding-right: .3rem;
    line-height: 2;
    margin-bottom: 1.34rem;

    .space {
      margin-right: .75rem;
    }

    .blue {
      color: @font-color-blue;
    }
  }

  .btn-box {
    text-align: center;
  }

  .btn {
    font-size: @font-size-medium;
    color: @font-color-white;
    background-color: @bg-red;
    padding: .3rem 2.4rem;
    border-radius: 5px;
  }
</style>
