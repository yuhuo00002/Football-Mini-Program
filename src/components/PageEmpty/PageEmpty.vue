<template>
  <view class="page-empty">
    <text class="icon">{{ icon }}</text>
    <text class="text">{{ text }}</text>
    <text class="tip" v-if="tip">{{ tip }}</text>
  </view>
</template>

<script setup>
defineProps({
  icon: { type: String, default: '📭' },
  text: { type: String, default: '暂无数据' },
  tip: { type: String, default: '' }
})
</script>

<style lang="scss" scoped>
.page-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 160rpx;
}

.icon {
  font-size: 80rpx;
  margin-bottom: 24rpx;
}

.text {
  font-size: 32rpx;
  color: #333;
  margin-bottom: 12rpx;
}

.tip {
  font-size: 24rpx;
  color: #999;
}
</style>