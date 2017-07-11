<template>
  <section>
    <div class="detail-footer">
      <div class="c-line">
        <a class="check-content">
          查看合同文件
        </a>
      </div>
      <!-- <section>
        <div class="check-line">
          合同文件
        </div>
        <table class="contract-list">
          <thead>
            <tr>
              <td>序号</td>
              <td>成交时间</td>
              <td>转让份额(份)</td>
              <td>转让价格(元)</td>
              <td>合同文件</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>2017.06.21</td>
              <td>1000</td>
              <td>100.11</td>
              <td><span type="button" class="contract-list__button">查看</span></td>
            </tr>
            <tr>
              <td>1</td>
              <td>2017.06.21</td>
              <td>1000</td>
              <td>100.11</td>
              <td><span type="button" class="contract-list__button">查看</span></td>
            </tr>
          </tbody>
        </table>
        <div class="gap"></div>
      </section> -->
      <div class="check-line">
        <a class="check-content">
          查看产品详情
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="less" scoped>
  @import "../../../style/variables";

  .detail-footer {
    margin-bottom: 1.3rem;
  }

  .c-line {
    padding: .3rem;
    background: @bg-white;
    .font-size-medium;
    border-bottom: 1px solid @line-color;
    position: relative;

    &:last-child {
      border-bottom: none;
    }
  }

  .check-content {
    &:after {
      top: 50%;
      margin-top: -4px;
      right: 12px;
      border: 1px solid transparent;
      border-top-color: #ccc;
      border-right-color: #ccc;
      content: " ";
      height: 10px;
      width: 10px;
      position: absolute;
      -webkit-transform: rotate(45deg);
      -moz-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      -o-transform: rotate(45deg);
    }
  }

  .contract-list {
    background: @bg-white;
    text-align: center;
    width: 100%;
    border-spacing: 0;
    padding: 0 .2rem;
    td{
      text-align: center;
      padding: .3rem 0;
      border-bottom: 1px solid @line-color;
    }

    > thead > tr {
      .font-size-smaller;
    }

    > tbody > tr:last-child > td {
      border-bottom: none;
    }

    &__button {
      border: 1px solid @font-color-blue;
      border-radius: 15px;
      color: @font-color-blue;
      padding: .05rem .2rem;
    }
  }

</style>
