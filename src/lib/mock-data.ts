export const portalSummary = {
  brand: "NaikoCloud JP",
  location: "Tokyo Edge",
  nodeIp: "103.25.100.166",
  activeUsers: 5,
  monthlyTraffic: "186.4 GB",
  avgLatency: "71 ms",
  cleanlinessScore: 92,
};

export const sampleAccounts = [
  {
    username: "akira",
    plan: "Shared JP Mono",
    status: "Healthy",
    lastSeen: "5 min ago",
    delivery: "Delivered privately",
    cleanliness: {
      score: 95,
      dns: "Clean",
      stream: "Available",
      payment: "Mostly clean",
      source: "ping0.cc",
    },
  },
  {
    username: "mori",
    plan: "Shared JP Mono",
    status: "Stable",
    lastSeen: "18 min ago",
    delivery: "Delivered privately",
    cleanliness: {
      score: 89,
      dns: "Clean",
      stream: "Available",
      payment: "Needs recheck",
      source: "ping0.cc",
    },
  },
];

export const usageTimeline = [
  { day: "Mon", value: 22 },
  { day: "Tue", value: 34 },
  { day: "Wed", value: 28 },
  { day: "Thu", value: 46 },
  { day: "Fri", value: 52 },
  { day: "Sat", value: 39 },
  { day: "Sun", value: 30 },
];

export const dashboardCards = [
  {
    label: "Active Sessions",
    value: "4",
    detail: "2 desktop · 2 mobile",
  },
  {
    label: "Traffic This Month",
    value: "38.2 GB",
    detail: "62 GB remaining",
  },
  {
    label: "Node Health",
    value: "99.98%",
    detail: "Last reboot 1 day ago",
  },
  {
    label: "Purity Score",
    value: "95",
    detail: "Checked with ping0.cc",
  },
];

export const featureList = [
  "公开页面只展示节点位置、延迟、健康度和基础说明",
  "真实订阅链接由管理员私下分发，不在 GitHub Pages 公网展示",
  "Clash Verge 通过私发的一键导入链接或订阅地址接入",
  "纯净度和用量先展示静态快照，后续再接真实数据源",
];
