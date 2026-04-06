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
    password: "temp-demo-001",
    plan: "Shared JP Mono",
    trafficUsed: 38,
    trafficTotal: 100,
    subscriptionLabel: "akira-main",
    importUrl: "https://portal.example.com/sub/akira.yaml",
    oneClickUrl:
      "clash://install-config?url=https%3A%2F%2Fportal.example.com%2Fsub%2Fakira.yaml",
    status: "Healthy",
    lastSeen: "5 min ago",
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
    password: "temp-demo-002",
    plan: "Shared JP Mono",
    trafficUsed: 72,
    trafficTotal: 120,
    subscriptionLabel: "mori-main",
    importUrl: "https://portal.example.com/sub/mori.yaml",
    oneClickUrl:
      "clash://install-config?url=https%3A%2F%2Fportal.example.com%2Fsub%2Fmori.yaml",
    status: "Stable",
    lastSeen: "18 min ago",
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
  "账户登录后查看自己的订阅、流量和最近状态",
  "一键复制订阅地址或调起 Clash Verge 导入",
  "展示节点位置、延迟、健康度和剩余流量",
  "接入 ping0.cc 纯净度检测结果和历史快照",
];
