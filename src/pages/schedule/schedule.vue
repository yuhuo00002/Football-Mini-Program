<template>
  <view class="page">
    <view class="header">
      <view class="header-top">
        <text class="ball-icon">⚽</text>
        <view class="header-text">
          <text class="title">2026年美加墨世界杯赛程</text>
          <text class="subtitle">USA · CANADA · MEXICO | 北京时间</text>
        </view>
        <text class="target-icon">🎯</text>
      </view>
    </view>

    <scroll-view class="date-scroll" scroll-x enable-flex>
      <view
        class="date-item"
        :class="{ active: selectedDate === item.id }"
        v-for="item in dateList"
        :key="item.id"
        @click="selectedDate = item.id"
      >
        <view class="today-tag" v-if="item.isToday">今天</view>
        <text class="weekday">{{ item.weekday }}</text>
        <text class="date-num">{{ item.date }}</text>
      </view>
    </scroll-view>

    <view class="filter-tabs">
      <view
        class="filter-tab"
        :class="{ active: activeFilter === tab.key }"
        v-for="tab in filterTabs"
        :key="tab.key"
        @click="activeFilter = tab.key"
      >
        {{ tab.label }}
      </view>
    </view>

    <scroll-view
      class="match-scroll"
      scroll-y
      refresher-enabled
      :refresher-triggered="refreshing"
      @refresherrefresh="onRefresh"
    >
      <view class="match-list">
        <view class="match-card" v-for="match in filteredMatches" :key="match.id">
          <view class="stage-bar">{{ match.stage }}</view>
          <view class="match-body">
            <view class="team-col">
              <text class="team-flag">{{ match.homeTeam.flag }}</text>
              <text class="team-name">{{ match.homeTeam.name }}</text>
              <text class="team-code">{{ match.homeTeam.code }}</text>
            </view>

            <view class="center-col">
              <text class="score" v-if="match.status === 'finished' || match.status === 'live'">
                {{ match.homeScore }} : {{ match.awayScore }}
              </text>
              <text class="time" v-else>{{ match.time }}</text>
              <view class="status-badge" :class="match.status">{{ match.statusText }}</view>
            </view>

            <view class="team-col right">
              <text class="team-flag">{{ match.awayTeam.flag }}</text>
              <text class="team-name">{{ match.awayTeam.name }}</text>
              <text class="team-code">{{ match.awayTeam.code }}</text>
            </view>
          </view>
          <view class="predict-btn" @click="openPrediction(match)">
            <text class="predict-icon">📊</text>
            <text>预测结果</text>
            <text class="arrow">›</text>
          </view>
        </view>

        <view class="empty-tip" v-if="!filteredMatches.length">
          <text>暂无比赛数据</text>
        </view>
      </view>

      <view class="pull-hint">↓ 下拉刷新数据</view>
    </scroll-view>

    <PredictionModal
      :visible="modalVisible"
      :match="selectedMatch"
      :predictions="predictions"
      @close="modalVisible = false"
    />
  </view>
</template>

<script setup>
import { ref, computed } from 'vue'
import PredictionModal from '@/components/PredictionModal/PredictionModal.vue'
import { DATE_LIST, FILTER_TABS, MATCH_LIST, PREDICTIONS } from '@/mock/data'

const dateList = DATE_LIST
const filterTabs = FILTER_TABS
const matchList = ref([...MATCH_LIST])
const predictions = PREDICTIONS

const selectedDate = ref('2026-06-12')
const activeFilter = ref('all')
const refreshing = ref(false)
const modalVisible = ref(false)
const selectedMatch = ref(null)

const filteredMatches = computed(() => {
  return matchList.value.filter((m) => {
    const dateMatch = m.date === selectedDate.value
    const statusMatch =
      activeFilter.value === 'all' || m.status === activeFilter.value
    return dateMatch && statusMatch
  })
})

function openPrediction(match) {
  selectedMatch.value = match
  modalVisible.value = true
}

function onRefresh() {
  refreshing.value = true
  setTimeout(() => {
    refreshing.value = false
    uni.showToast({ title: '刷新成功', icon: 'none' })
  }, 800)
}
</script>

<style lang="scss" scoped>
.page {
  min-height: 100vh;
  background: #0a121e;
  display: flex;
  flex-direction: column;
}

.header {
  padding: calc(env(safe-area-inset-top) + 24rpx) 32rpx 16rpx;
}

.header-top {
  display: flex;
  align-items: flex-start;
  gap: 16rpx;
}

.ball-icon,
.target-icon {
  font-size: 40rpx;
  flex-shrink: 0;
  margin-top: 4rpx;
}

.header-text {
  flex: 1;
}

.title {
  display: block;
  font-size: 34rpx;
  font-weight: 700;
  color: #fff;
  line-height: 1.4;
}

.subtitle {
  display: block;
  font-size: 22rpx;
  color: rgba(255, 255, 255, 0.55);
  margin-top: 6rpx;
}

.date-scroll {
  white-space: nowrap;
  padding: 16rpx 24rpx;
}

.date-item {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 120rpx;
  height: 100rpx;
  margin-right: 16rpx;
  border-radius: 16rpx;
  background: rgba(255, 255, 255, 0.92);
  position: relative;
  vertical-align: top;

  &.active {
    background: #1c2636;
    border: 2rpx solid #e53935;

    .weekday,
    .date-num {
      color: #fff;
    }
  }
}

.today-tag {
  position: absolute;
  top: -2rpx;
  right: -2rpx;
  background: #e53935;
  color: #fff;
  font-size: 18rpx;
  padding: 2rpx 10rpx;
  border-radius: 0 14rpx 0 10rpx;
}

.weekday {
  font-size: 24rpx;
  color: #666;
}

.date-num {
  font-size: 28rpx;
  font-weight: 600;
  color: #333;
  margin-top: 4rpx;
}

.filter-tabs {
  display: flex;
  gap: 16rpx;
  padding: 8rpx 32rpx 20rpx;
}

.filter-tab {
  padding: 12rpx 28rpx;
  border-radius: 32rpx;
  font-size: 26rpx;
  color: rgba(255, 255, 255, 0.7);
  background: rgba(255, 255, 255, 0.12);

  &.active {
    background: #fff;
    color: #1a1a2e;
    font-weight: 600;
  }
}

.match-scroll {
  flex: 1;
  height: calc(100vh - 340rpx);
}

.match-list {
  padding: 0 24rpx 24rpx;
}

.match-card {
  background: #fff;
  border-radius: 20rpx;
  overflow: hidden;
  margin-bottom: 24rpx;
}

.stage-bar {
  background: #f5f5f5;
  padding: 12rpx 24rpx;
  font-size: 24rpx;
  color: #666;
  text-align: center;
}

.match-body {
  display: flex;
  align-items: center;
  padding: 32rpx 24rpx;
}

.team-col {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  &.right {
    align-items: center;
  }
}

.team-flag {
  font-size: 56rpx;
  margin-bottom: 8rpx;
}

.team-name {
  font-size: 28rpx;
  font-weight: 600;
  color: #1a1a2e;
}

.team-code {
  font-size: 22rpx;
  color: #999;
  margin-top: 4rpx;
}

.center-col {
  width: 160rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.score {
  font-size: 44rpx;
  font-weight: 700;
  color: #1a1a2e;
}

.time {
  font-size: 40rpx;
  font-weight: 700;
  color: #1a1a2e;
}

.status-badge {
  margin-top: 12rpx;
  padding: 6rpx 20rpx;
  border-radius: 20rpx;
  font-size: 22rpx;

  &.finished {
    background: #f5f5f5;
    color: #999;
  }

  &.upcoming {
    background: #e3f2fd;
    color: #1565c0;
  }

  &.live {
    background: #fff3e0;
    color: #e65100;
  }
}

.predict-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8rpx;
  margin: 0 24rpx 24rpx;
  padding: 20rpx;
  border-radius: 16rpx;
  background: linear-gradient(135deg, #2979ff, #7c4dff);
  color: #fff;
  font-size: 28rpx;
  font-weight: 500;
}

.predict-icon {
  font-size: 28rpx;
}

.arrow {
  font-size: 32rpx;
  margin-left: 4rpx;
}

.empty-tip {
  text-align: center;
  padding: 80rpx 0;
  color: rgba(255, 255, 255, 0.5);
  font-size: 28rpx;
}

.pull-hint {
  text-align: center;
  padding: 24rpx 0 32rpx;
  font-size: 22rpx;
  color: rgba(255, 255, 255, 0.3);
}
</style>
