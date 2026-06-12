export const DATE_LIST = [
  { id: '2026-06-12', weekday: '周五', date: '06-12', isToday: true },
  { id: '2026-06-13', weekday: '周六', date: '06-13', isToday: false },
  { id: '2026-06-14', weekday: '周日', date: '06-14', isToday: false },
  { id: '2026-06-15', weekday: '周一', date: '06-15', isToday: false },
  { id: '2026-06-16', weekday: '周二', date: '06-16', isToday: false },
  { id: '2026-06-17', weekday: '周三', date: '06-17', isToday: false },
  { id: '2026-06-18', weekday: '周四', date: '06-18', isToday: false }
]

export const FILTER_TABS = [
  { key: 'all', label: '全部' },
  { key: 'upcoming', label: '未开赛' },
  { key: 'live', label: '进行中' },
  { key: 'finished', label: '已结束' }
]

export const MATCH_LIST = [
  {
    id: 1,
    date: '2026-06-12',
    stage: '小组赛 · A组',
    homeTeam: { name: '墨西哥', code: 'MEX', flag: '🇲🇽' },
    awayTeam: { name: '南非', code: 'RSA', flag: '🇿🇦' },
    homeScore: 2,
    awayScore: 0,
    time: '03:00',
    status: 'finished',
    statusText: '已结束',
    datetime: '2026-06-12 03:00'
  },
  {
    id: 2,
    date: '2026-06-12',
    stage: '小组赛 · A组',
    homeTeam: { name: '韩国', code: 'KOR', flag: '🇰🇷' },
    awayTeam: { name: '丹麦', code: 'DEN', flag: '🇩🇰' },
    homeScore: null,
    awayScore: null,
    time: '10:00',
    status: 'upcoming',
    statusText: '未开赛',
    datetime: '2026-06-12 10:00'
  },
  {
    id: 3,
    date: '2026-06-13',
    stage: '小组赛 · B组',
    homeTeam: { name: '加拿大', code: 'CAN', flag: '🇨🇦' },
    awayTeam: { name: '卡塔尔', code: 'QAT', flag: '🇶🇦' },
    homeScore: null,
    awayScore: null,
    time: '06:00',
    status: 'upcoming',
    statusText: '未开赛',
    datetime: '2026-06-13 06:00'
  },
  {
    id: 4,
    date: '2026-06-13',
    stage: '小组赛 · B组',
    homeTeam: { name: '瑞士', code: 'SUI', flag: '🇨🇭' },
    awayTeam: { name: '喀麦隆', code: 'CMR', flag: '🇨🇲' },
    homeScore: 1,
    awayScore: 1,
    time: '09:00',
    status: 'live',
    statusText: '进行中',
    datetime: '2026-06-13 09:00'
  }
]

export const PREDICTIONS = [
  {
    id: 1,
    result: '墨西哥胜',
    winRate: 78,
    score: '2-0',
    correct: true,
    model: 'DeepSeek-V4-Pro',
    company: 'DeepSeek',
    country: '🇨🇳',
    logoColor: '#4d6bfe'
  },
  {
    id: 2,
    result: '墨西哥胜',
    winRate: 72,
    score: '2-1',
    correct: false,
    model: 'GPT-5.4',
    company: 'OpenAI',
    country: '🇺🇸',
    logoColor: '#10a37f'
  },
  {
    id: 3,
    result: '南非不败',
    winRate: 58,
    score: '1-1',
    correct: false,
    model: 'MiniMax-M3',
    company: 'MiniMax',
    country: '🇨🇳',
    logoColor: '#6366f1'
  },
  {
    id: 4,
    result: '墨西哥胜',
    winRate: 75,
    score: '2-0',
    correct: true,
    model: 'claude-opus-4.8',
    company: 'Anthropic',
    country: '🇺🇸',
    logoColor: '#d97706'
  },
  {
    id: 5,
    result: '墨西哥胜',
    winRate: 70,
    score: '1-0',
    correct: false,
    model: 'Gemini-3.5',
    company: 'Google',
    country: '🇺🇸',
    logoColor: '#4285f4'
  },
  {
    id: 6,
    result: '墨西哥胜',
    winRate: 76,
    score: '2-0',
    correct: true,
    model: 'GLM-5.1',
    company: '智谱AI',
    country: '🇨🇳',
    logoColor: '#1a56db'
  },
  {
    id: 7,
    result: '墨西哥胜',
    winRate: 71,
    score: '2-1',
    correct: false,
    model: 'qwen3.7',
    company: '阿里巴巴',
    country: '🇨🇳',
    logoColor: '#ff6a00'
  },
  {
    id: 8,
    result: '墨西哥胜',
    winRate: 69,
    score: '2-0',
    correct: true,
    model: 'MiMo-V2.5',
    company: '小米',
    country: '🇨🇳',
    logoColor: '#ff6700'
  }
]

export const RANKING_LIST = [
  { id: 1, model: 'DeepSeek-V4-Pro', company: 'DeepSeek', score: 1, logoColor: '#4d6bfe' },
  { id: 2, model: 'claude-opus-4.8', company: 'Anthropic', score: 1, logoColor: '#d97706' },
  { id: 3, model: 'GLM-5.1', company: '智谱AI', score: 1, logoColor: '#1a56db' },
  { id: 4, model: 'qwen3.7', company: '阿里巴巴', score: 1, logoColor: '#ff6a00' },
  { id: 5, model: 'MiMo-V2.5', company: '小米', score: 1, logoColor: '#ff6700' },
  { id: 6, model: 'doubao-seed-2.0', company: '字节跳动', score: 1, logoColor: '#3370ff' },
  { id: 7, model: 'GPT-5.4', company: 'OpenAI', score: 1, logoColor: '#10a37f' },
  { id: 8, model: 'Gemini-3.5', company: 'Google', score: 0, logoColor: '#4285f4' },
  { id: 9, model: 'kimi-k2.6', company: '月之暗面', score: 0, logoColor: '#000000' },
  { id: 10, model: 'MiniMax-M3', company: 'MiniMax', score: 0, logoColor: '#6366f1' }
]

export const DISCLAIMER_SECTIONS = [
  {
    icon: '📌',
    title: '数据用途说明',
    content: '本小程序提供的比赛信息、比分预测等数据仅供学习交流、娱乐参考，不构成任何投资建议或赌博建议。'
  },
  {
    icon: '⚽',
    title: '比赛的不确定性',
    content: '足球比赛结果受球员伤病、天气、裁判判罚等多种因素影响，具有高度不确定性，任何预测均无法保证准确。'
  },
  {
    icon: '🚫',
    title: '严禁赌博行为',
    content: '请严格遵守国家法律法规，严禁利用本小程序数据进行任何形式的非法赌博活动。赌博有害身心健康，可能导致严重的财务损失。'
  },
  {
    icon: '⚖️',
    title: '法律责任与风险',
    content: '用户因参与赌博或其他违法行为所产生的一切后果，本平台不承担任何法律责任。请用户自觉遵守法律法规，远离赌博。'
  },
  {
    icon: '🌿',
    title: '文明观赛倡议',
    content: '倡导理性、文明观赛，享受足球运动的魅力，共同营造健康积极的体育文化氛围。'
  }
]
