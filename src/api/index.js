import { get } from '@/utils/request'

export function fetchScheduleList(params) {
  return get('/schedule/list', params)
}

export function fetchRankingList(params) {
  return get('/ranking/list', params)
}