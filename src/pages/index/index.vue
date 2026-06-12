<template>
  <view class="page">
    <view class="hero">
      <text class="hero-icon">⚽</text>
      <text class="hero-title">2026美加墨世界杯</text>
      <text class="hero-desc">AI 模型预测 · 赛程一览 · 精彩赛事</text>
    </view>

    <view class="card-list">
      <view class="card" v-for="item in quickEntries" :key="item.path" @click="goPage(item.path)">
        <text class="card-icon">{{ item.icon }}</text>
        <view class="card-info">
          <text class="card-title">{{ item.title }}</text>
          <text class="card-desc">{{ item.desc }}</text>
        </view>
        <text class="card-arrow">›</text>
      </view>
    </view>
  </view>
</template>

<script setup>
const quickEntries = [
  { icon: '🏆', title: '查看赛程', desc: '2026世界杯比赛安排', path: '/pages/schedule/schedule' },
  { icon: '📊', title: '预测排行', desc: '全球模型预测排名', path: '/pages/ranking/ranking' },
  { icon: '📋', title: '免责声明', desc: '使用须知与风险提示', path: '/pages/about/about' }
]

function goPage(path) {
  uni.switchTab({ url: path })
}
</script>

<style lang="scss" scoped>
.page {
  min-height: 100vh;
  padding: 32rpx;
  background: #0a121e;
}

.hero {
  padding: 48rpx 32rpx;
  margin-bottom: 32rpx;
  border-radius: 24rpx;
  background: linear-gradient(135deg, #1a237e, #2979ff);
  color: #fff;
  text-align: center;
}

.hero-icon {
  display: block;
  font-size: 80rpx;
  margin-bottom: 16rpx;
}

.hero-title {
  display: block;
  font-size: 44rpx;
  font-weight: 700;
  margin-bottom: 16rpx;
}

.hero-desc {
  display: block;
  font-size: 26rpx;
  opacity: 0.8;
}

.card-list {
  display: flex;
  flex-direction: column;
  gap: 20rpx;
}

.card {
  display: flex;
  align-items: center;
  padding: 32rpx;
  border-radius: 20rpx;
  background: #1c262f;
}

.card-icon {
  font-size: 44rpx;
  margin-right: 24rpx;
}

.card-info {
  flex: 1;
}

.card-title {
  display: block;
  font-size: 32rpx;
  font-weight: 600;
  color: #fff;
  margin-bottom: 8rpx;
}

.card-desc {
  display: block;
  font-size: 24rpx;
  color: #a0aab2;
}

.card-arrow {
  font-size: 40rpx;
  color: #666;
}
</style>