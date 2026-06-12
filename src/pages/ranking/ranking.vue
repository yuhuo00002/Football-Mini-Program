<template>
  <view class="page">
    <view class="header">
      <text class="title">全球模型预测正确场次排名</text>
      <view class="search-bar">
        <text class="search-icon">🔍</text>
        <text class="search-text">小吴看球</text>
      </view>
    </view>

    <scroll-view class="rank-scroll" scroll-y>
      <view class="rank-list">
        <view class="rank-card" v-for="(item, index) in rankingList" :key="item.id">
          <view class="rank-left">
            <view class="medal" v-if="index < 3">
              <text class="medal-icon">{{ ['🥇', '🥈', '🥉'][index] }}</text>
            </view>
            <view class="rank-num" v-else>
              <text>{{ index + 1 }}</text>
            </view>
          </view>

          <view class="model-info">
            <view class="model-logo" :style="{ background: item.logoColor }">
              <text>{{ item.model.charAt(0) }}</text>
            </view>
            <view class="model-text">
              <text class="model-name">{{ item.model }}</text>
              <text class="model-company">{{ item.company }}</text>
            </view>
          </view>

          <view class="score-col">
            <text class="score-num">{{ item.score }}</text>
            <text class="score-unit">场</text>
          </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script setup>
import { ref } from 'vue'
import { RANKING_LIST } from '@/mock/data'

const rankingList = ref([...RANKING_LIST])
</script>

<style lang="scss" scoped>
.page {
  min-height: 100vh;
  background: #0a121e;
  display: flex;
  flex-direction: column;
}

.header {
  padding: calc(env(safe-area-inset-top) + 32rpx) 32rpx 24rpx;
}

.title {
  display: block;
  font-size: 36rpx;
  font-weight: 700;
  color: #fff;
  text-align: center;
  margin-bottom: 28rpx;
  line-height: 1.4;
}

.search-bar {
  display: flex;
  align-items: center;
  gap: 12rpx;
  padding: 18rpx 28rpx;
  border-radius: 40rpx;
  background: rgba(255, 255, 255, 0.1);
}

.search-icon {
  font-size: 28rpx;
}

.search-text {
  font-size: 26rpx;
  color: rgba(255, 255, 255, 0.45);
}

.rank-scroll {
  flex: 1;
  height: calc(100vh - 240rpx);
}

.rank-list {
  padding: 8rpx 24rpx 32rpx;
}

.rank-card {
  display: flex;
  align-items: center;
  padding: 28rpx 24rpx;
  margin-bottom: 16rpx;
  border-radius: 20rpx;
  background: #fefaf0;
}

.rank-left {
  width: 64rpx;
  flex-shrink: 0;
}

.medal-icon {
  font-size: 44rpx;
}

.rank-num {
  width: 48rpx;
  height: 48rpx;
  border-radius: 50%;
  background: #e8e8e8;
  display: flex;
  align-items: center;
  justify-content: center;

  text {
    font-size: 26rpx;
    font-weight: 600;
    color: #666;
  }
}

.model-info {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 16rpx;
  margin: 0 16rpx;
}

.model-logo {
  width: 64rpx;
  height: 64rpx;
  border-radius: 16rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  text {
    font-size: 28rpx;
    color: #fff;
    font-weight: 700;
  }
}

.model-text {
  display: flex;
  flex-direction: column;
}

.model-name {
  font-size: 28rpx;
  font-weight: 600;
  color: #1a1a2e;
}

.model-company {
  font-size: 22rpx;
  color: #999;
  margin-top: 4rpx;
}

.score-col {
  display: flex;
  align-items: baseline;
  flex-shrink: 0;
}

.score-num {
  font-size: 44rpx;
  font-weight: 700;
  color: #2979ff;
}

.score-unit {
  font-size: 24rpx;
  color: #2979ff;
  margin-left: 4rpx;
}
</style>
