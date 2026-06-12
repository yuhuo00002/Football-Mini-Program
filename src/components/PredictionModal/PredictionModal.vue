<template>
  <view class="modal-mask" v-if="visible" @click="onClose">
    <view class="modal-panel" @click.stop>
      <view class="modal-header">
        <view class="modal-title-row">
          <text class="globe-icon">🌐</text>
          <text class="modal-title">国内外模型预测</text>
        </view>
        <view class="modal-actions">
          <text class="action-icon">🏆</text>
          <text class="close-btn" @click="onClose">✕</text>
        </view>
      </view>

      <view class="match-summary" v-if="match">
        <view class="flags-row">
          <text class="flag">{{ match.homeTeam.flag }}</text>
          <text class="vs-text">vs</text>
          <text class="flag">{{ match.awayTeam.flag }}</text>
        </view>
        <text class="match-name">{{ match.homeTeam.name }} vs {{ match.awayTeam.name }}</text>
        <view class="score-badge" v-if="match.status === 'finished'">
          <text>{{ match.homeScore }}-{{ match.awayScore }}</text>
        </view>
        <text class="match-meta">{{ match.datetime }} · 小组赛</text>
      </view>

      <scroll-view class="prediction-list" scroll-y>
        <view class="prediction-item" v-for="item in predictions" :key="item.id">
          <view class="prediction-main">
            <text class="prediction-text">
              {{ item.result }} | 胜率: {{ item.winRate }}% | {{ item.score }}
            </text>
            <text class="status-icon" :class="item.correct ? 'correct' : 'wrong'">
              {{ item.correct ? '✓' : '✕' }}
            </text>
          </view>
          <view class="model-row">
            <view class="model-logo" :style="{ background: item.logoColor }">
              <text>{{ item.model.charAt(0) }}</text>
            </view>
            <text class="model-name">{{ item.model }}</text>
            <text class="model-country">{{ item.country }}</text>
            <text class="model-company">{{ item.company }}</text>
          </view>
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<script setup>
defineProps({
  visible: { type: Boolean, default: false },
  match: { type: Object, default: null },
  predictions: { type: Array, default: () => [] }
})

const emit = defineEmits(['close'])

function onClose() {
  emit('close')
}
</script>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  align-items: flex-end;
}

.modal-panel {
  width: 100%;
  max-height: 78vh;
  background: #fff;
  border-radius: 32rpx 32rpx 0 0;
  padding: 32rpx 32rpx 48rpx;
  display: flex;
  flex-direction: column;
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 28rpx;
}

.modal-title-row {
  display: flex;
  align-items: center;
  gap: 12rpx;
}

.globe-icon {
  font-size: 36rpx;
}

.modal-title {
  font-size: 34rpx;
  font-weight: 600;
  color: #1a1a2e;
}

.modal-actions {
  display: flex;
  align-items: center;
  gap: 24rpx;
}

.action-icon {
  font-size: 32rpx;
}

.close-btn {
  font-size: 32rpx;
  color: #999;
  padding: 8rpx;
}

.match-summary {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 28rpx;
  border-bottom: 1rpx solid #f0f0f0;
  margin-bottom: 16rpx;
}

.flags-row {
  display: flex;
  align-items: center;
  gap: 24rpx;
  margin-bottom: 12rpx;
}

.flag {
  font-size: 48rpx;
}

.vs-text {
  font-size: 24rpx;
  color: #999;
}

.match-name {
  font-size: 32rpx;
  font-weight: 600;
  color: #1a1a2e;
  margin-bottom: 12rpx;
}

.score-badge {
  padding: 6rpx 24rpx;
  background: #fce4ec;
  border-radius: 12rpx;
  margin-bottom: 8rpx;

  text {
    font-size: 28rpx;
    font-weight: 600;
    color: #c62828;
  }
}

.match-meta {
  font-size: 24rpx;
  color: #999;
}

.prediction-list {
  flex: 1;
  max-height: 52vh;
}

.prediction-item {
  padding: 24rpx 0;
  border-bottom: 1rpx solid #f5f5f5;

  &:last-child {
    border-bottom: none;
  }
}

.prediction-main {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12rpx;
}

.prediction-text {
  flex: 1;
  font-size: 28rpx;
  font-weight: 600;
  color: #1a1a2e;
}

.status-icon {
  width: 40rpx;
  height: 40rpx;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22rpx;
  font-weight: 700;
  flex-shrink: 0;
  margin-left: 16rpx;

  &.correct {
    background: #e8f5e9;
    color: #2e7d32;
  }

  &.wrong {
    background: #ffebee;
    color: #c62828;
  }
}

.model-row {
  display: flex;
  align-items: center;
  gap: 12rpx;
}

.model-logo {
  width: 36rpx;
  height: 36rpx;
  border-radius: 8rpx;
  display: flex;
  align-items: center;
  justify-content: center;

  text {
    font-size: 20rpx;
    color: #fff;
    font-weight: 600;
  }
}

.model-name {
  font-size: 24rpx;
  color: #333;
  font-weight: 500;
}

.model-country {
  font-size: 22rpx;
}

.model-company {
  font-size: 22rpx;
  color: #999;
}
</style>
