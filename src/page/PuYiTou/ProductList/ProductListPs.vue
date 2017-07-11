<template>
  <div>
    <div class="product-list">
      <div class="product-list__title">
        <span class="product-list__title_name">磐石理财2号0030期<span class="new">新手专享</span></span> <!-- new  activity -->
        <span class="product-list__title_right"><span>50万</span>元起投</span> <!-- font-color-gray -->
      </div>
      <div class="product-list__content">
        <div class="product-list__content_left">
          <div class="rate"><span class="font-size-biggest">6.0%</span><span class="font-size-largest">+1.0%</span></div>
          <div class="name">预期年化收益率</div>
        </div>
        <div class="product-list__content_right">
          <div class="apply"><span class="apply_name">到期日</span><span class="font-size-large">2018-18-18</span></div>
          <div class="apply"><span class="apply_name">募集进度</span><span class="font-size-large">75%</span></div>
          <!-- 进度条 -->
          <div class="product-list__content_progress">
            <div class="gray"></div>
            <div class="blue" :style="{'width': '75%'}"></div>
          </div>
        </div>
      </div>
      <div class="product-list__button">
        <button type="button" class="product-list__button_click">立即投资</button>
      </div>
    </div>
    <div class="product-list">
      <div class="product-list__title">
        <span class="product-list__title_name">磐石理财2号0030期<span class="activity">五一活动</span></span> <!-- new  activity -->
        <span class="product-list__title_right"><span>20万</span>元起投</span> <!-- font-color-gray -->
      </div>
      <div class="product-list__content">
        <div class="product-list__content_left">
          <div class="rate"><span class="font-size-biggest">6.0%</span><span class="font-size-largest">+1.0%</span></div>
          <div class="name">预期年化收益率</div>
        </div>
        <div class="product-list__content_right">
          <div class="apply"><span class="apply_name">到期日</span><span class="font-size-large">2018-18-18</span></div>
          <div class="apply"><span class="apply_name">募集进度</span><span class="font-size-large">25%</span></div>
          <!-- 进度条 -->
          <div class="product-list__content_progress">
            <div class="gray"></div>
            <div class="blue" :style="{'width': '25%'}"></div>
          </div>
        </div>
      </div>
      <div class="product-list__button">
        <button type="button" class="product-list__button_click">立即投资</button>
      </div>
    </div>
    <div class="product-list">
      <div class="product-list__title">
        <span class="product-list__title_name">磐石理财2号0030期<span class="new">新手专享</span></span> <!-- new  activity -->
        <span class="product-list__title_right font-color-gray"><span>5万</span>元起投</span> <!-- font-color-gray -->
      </div>
      <div class="product-list__content">
        <div class="product-list__content_left">
          <div class="rate"><span class="font-size-biggest">6.0%</span><span class="font-size-largest">+1.0%</span></div>
          <div class="name">预期年化收益率</div>
        </div>
        <div class="product-list__content_right">
          <div class="apply"><span class="apply_name">到期日</span><span class="font-size-large">2018-18-18</span></div>
          <div class="apply"><span class="apply_name">募集进度</span><span class="font-size-large">15%</span></div>
          <!-- 进度条 -->
          <div class="product-list__content_progress">
            <div class="gray"></div>
            <div class="blue" :style="{'width': '15%'}"></div>
          </div>
        </div>
      </div>
      <div class="product-list__button">
        <button type="button" class="product-list__button_click" disabled>已经抢光了</button>
      </div>
    </div>
    <div class="product-list">
      <div class="product-list__title">
        <span class="product-list__title_name">磐石理财2号0030期<span class="new">新手专享</span></span> <!-- new  activity -->
        <span class="product-list__title_right font-color-gray"><span>6万</span>元起投</span> <!-- font-color-gray -->
      </div>
      <div class="product-list__content">
        <div class="product-list__content_left">
          <div class="rate"><span class="font-size-biggest">6.0%</span><span class="font-size-largest">+1.0%</span></div>
          <div class="name">预期年化收益率</div>
        </div>
        <div class="product-list__content_right">
          <div class="apply"><span class="apply_name">到期日</span><span class="font-size-large">2018-18-18</span></div>
          <div class="apply"><span class="apply_name">募集进度</span><span class="font-size-large">15%</span></div>
          <!-- 进度条 -->
          <div class="product-list__content_progress">
            <div class="gray"></div>
            <div class="blue" :style="{'width': '15%'}"></div>
          </div>
        </div>
      </div>
      <div class="product-list__button">
        <button type="button" class="product-list__button_click" disabled>已经抢光了</button>
      </div>
    </div>
    <div class="product-list">
      <div class="product-list__title">
        <span class="product-list__title_name">磐石理财2号0030期<span class="new">新手专享</span></span> <!-- new  activity -->
        <span class="product-list__title_right font-color-gray"><span>1,000元</span>元起投</span> <!-- font-color-gray -->
      </div>
      <div class="product-list__content">
        <div class="product-list__content_left">
          <div class="rate"><span class="font-size-biggest">6.0%</span><span class="font-size-largest">+1.0%</span></div>
          <div class="name">预期年化收益率</div>
        </div>
        <div class="product-list__content_right">
          <div class="apply"><span class="apply_name">到期日</span><span class="font-size-large">2018-18-18</span></div>
          <div class="apply"><span class="apply_name">募集进度</span><span class="font-size-large">15%</span></div>
          <!-- 进度条 -->
          <div class="product-list__content_progress">
            <div class="gray"></div>
            <div class="blue" :style="{'width': '15%'}"></div>
          </div>
        </div>
      </div>
      <div class="product-list__button">
        <button type="button" class="product-list__button_click" disabled>已经抢光了</button>
      </div>
    </div>
    <div class="product-list_placeholder"></div>
  </div>
</template>

<style lang="less" scoped>
   @import "../../../style/variables";

   .product-list {
      margin-top: 0.3rem;
      padding-left: 0.25rem;
      padding-right: 0.25rem;
      background-color: @bg-white;
      position: relative;

      &__title {
        height: 0.9rem;
        display: flex;
        align-items: center;

        .new {
          border: 1px solid @font-color-yellowish;
          border-radius: 2px;
          color: @font-color-yellowish;
          font-size: @font-size-smaller;
          padding: 0.04rem 0.1rem;
          margin-left: 0.2rem;
        }

        .activity {
          border: 1px solid @font-color-blue;
          border-radius: 2px;
          color: @font-color-blue;
          font-size: @font-size-smaller;
          padding: 0.04rem 0.1rem;
          margin-left: 0.2rem;
        }

        &_name {
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          width: 5.5rem;
          font-size: @font-size-large;
          height: 0.5rem;
          line-height: 0.5rem;
        }

        &_right {
          position: absolute;
          right: 0.25rem;
          top: 0.25rem;
        }
      }

      &__content {
        padding: 0.2rem 0;
        display: flex;

        &_left {
          flex: 0 0 3.0rem;
          height: 1.68rem;
          color: @font-color-gray;
          border-right: 1px solid @line-color;

          & .rate {
            color: @font-color-red;
            margin-top: 0.1rem;
            display: flex;
            height: 0.8rem;
          }

          & .name {
            margin-top: 0.1rem;
          }
        }

        &_right {
          flex: 1;
          height: 1.68rem;
          padding-left: 0.5rem;

          & .apply {
            display: flex;
            align-items: center;
            margin-top: 0.12rem;
            margin-bottom: 0.1rem;
            height: 0.46rem;

            &_name {
              flex: 0 0 1.3rem;
              color: @font-color-gray;
            }
          }
        }

        &_progress {
          position: relative;
          margin-top: 0.2rem;

          & .gray {
            height: 0.1rem;
            background-color: @bg-gray-light;
            border-radius: 0.05rem;
          }

          & .blue {
            position: absolute;
            background-color: @font-color-blue;
            left: 0;
            top: 0;
            height: 0.1rem;
            border-radius: 0.05rem;
          }
        }
      }

      &__button {
        padding-bottom: 0.25rem;

        &_click {
          display: inline-block;
          width: 100%;
          border: none;
          background-color: @bg-red;
          color: @font-color-white;
          height: 0.72rem;
          font-size: @font-size-medium;
          border-radius: 3px;

          &:disabled {
            background-color: @bg-gray;
          }
        }
      }

      &_placeholder {
        height: 0.25rem;
      }
   }
</style>
