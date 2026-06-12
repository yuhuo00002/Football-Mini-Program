<template>
  <view class="page">
    <view class="header">
      <text class="warn-icon">⚠️</text>
      <text class="title">免责声明</text>
    </view>

    <scroll-view class="content-scroll" scroll-y>
      <view class="card-list">
        <view class="disclaimer-card" v-for="item in sections" :key="item.title">
          <view class="card-title-row">
            <text class="card-icon">{{ item.icon }}</text>
            <text class="card-title">{{ item.title }}</text>
          </view>
          <text class="card-content">{{ item.content }}</text>
        </view>
      </view>

      <text class="footer-tip">数据仅供娱乐 · 远离赌博 · 文明观赛</text>
    </scroll-view>
  </view>
</template>

<script setup>
import { DISCLAIMER_SECTIONS } from '@/mock/data'

const sections = DISCLAIMER_SECTIONS
</script>

<style lang="scss" scoped>
.page {
  min-height: 100vh;
  background: #0f171e;
  display: flex;
  flex-direction: column;
}

.header {
  display: flex;
  align-items: center;
  gap: 12rpx;
  padding: calc(env(safe-area-inset-top) + 32rpx) 32rpx 24rpx;
}

.warn-icon {
  font-size: 36rpx;
}

.title {
  font-size: 36rpx;
  font-weight: 700;
  color: #fff;
}

.content-scroll {
  flex: 1;
  height: calc(100vh - 120rpx);
}

.card-list {
  padding: 0 24rpx;
}

.disclaimer-card {
  background: #1c262f;
  border-radius: 20rpx;
  padding: 32rpx;
  margin-bottom: 20rpx;
}

.card-title-row {
  display: flex;
  align-items: center;
  gap: 12rpx;
  margin-bottom: 16rpx;
}

.card-icon {
  font-size: 32rpx;
}

.card-title {
  font-size: 30rpx;
  font-weight: 600;
  color: #fff;
}

.card-content {
  font-size: 26rpx;
  color: #a0aab2;
  line-height: 1.7;
}

.footer-tip {
  display: block;
  text-align: center;
  padding: 32rpx 24rpx 48rpx;
  font-size: 22rpx;
  color: rgba(255, 255, 255, 0.3);
}
</style>
