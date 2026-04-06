export const portalSummary = {
  brand: "JP Shared Node",
  location: "Japan VPS",
  entry: "103.25.100.166:443",
  stack: "Xray · VLESS + REALITY · TCP",
  os: "Debian 12 (bookworm)",
  cpu: "2 vCPU",
  memory: "1967 MB RAM",
  disk: "20 GB disk · 16 GB free",
  activeSlots: 5,
  observedToday: "9,146 accepted requests",
  xrayStatus: "active since 2026-04-03 21:04 CST",
  xrayMemory: "26.4 MB RSS",
  snapshotAt: "2026-04-06 21:45 CST",
};

export const memberSlots = [
  {
    code: "ULNCLH",
    slot: "Slot 01",
    status: "Active today",
    activity: "Heavy",
    todayObserved: 9146,
    totalObserved: 10502,
    lastSeen: "2026-04-06 21:45 CST",
  },
  {
    code: "FZD04U",
    slot: "Slot 02",
    status: "No traffic observed",
    activity: "Idle",
    todayObserved: 0,
    totalObserved: 0,
    lastSeen: "No activity observed as of 2026-04-06",
  },
  {
    code: "Z7CGBX",
    slot: "Slot 03",
    status: "No traffic observed",
    activity: "Idle",
    todayObserved: 0,
    totalObserved: 0,
    lastSeen: "No activity observed as of 2026-04-06",
  },
  {
    code: "CIKTPH",
    slot: "Slot 04",
    status: "No traffic observed",
    activity: "Idle",
    todayObserved: 0,
    totalObserved: 0,
    lastSeen: "No activity observed as of 2026-04-06",
  },
  {
    code: "9JDTQB",
    slot: "Slot 05",
    status: "No traffic observed",
    activity: "Idle",
    todayObserved: 0,
    totalObserved: 0,
    lastSeen: "No activity observed as of 2026-04-06",
  },
];

export const installGuides = [
  {
    id: "windows",
    title: "Windows",
    app: "Clash Verge Rev",
    summary: "最省事的桌面方案。支持订阅导入、一键更新和系统代理切换。",
    steps: [
      "下载并安装 Clash Verge Rev。",
      "向管理员拿到订阅链接，进入 Profiles 或 订阅 页面导入。",
      "回到 Proxies 选择节点，再打开 System Proxy。",
      "如果浏览器没走代理，检查 TUN 或系统代理状态。",
    ],
  },
  {
    id: "macos",
    title: "macOS",
    app: "Clash Verge Rev",
    summary: "和 Windows 基本一致，适合日常主力机。",
    steps: [
      "安装 Clash Verge Rev。",
      "导入管理员私发的订阅链接或一键导入链接。",
      "在 Proxies 里选中节点，启用系统代理。",
      "如果某些应用不生效，额外开启 TUN 模式。",
    ],
  },
  {
    id: "linux",
    title: "Linux",
    app: "Clash Verge Rev / Mihomo",
    summary: "图形桌面建议 Clash Verge Rev，纯命令行可直接用 Mihomo。",
    steps: [
      "桌面环境安装 Clash Verge Rev，或手动安装 Mihomo 核心。",
      "导入订阅后先验证节点延迟，再切到全局或规则模式。",
      "桌面环境检查系统代理是否被接管。",
      "服务器或命令行环境则直接用本地监听端口配合终端工具。",
    ],
  },
  {
    id: "ios",
    title: "iPhone / iPad",
    app: "Shadowrocket",
    summary: "移动端用小火箭最直接，导入订阅后即可启用。",
    steps: [
      "安装 Shadowrocket。",
      "在 Safari 里打开管理员私发的一键导入链接，或手动粘贴订阅地址。",
      "导入后信任 VPN 配置，回到首页开启连接。",
      "首连失败时先切蜂窝和 Wi-Fi 各试一次，再刷新订阅。",
    ],
  },
];

export const quickNotes = [
  "订阅链接和一键导入链接只私下分发，不公开贴到网页或群公告。",
  "Windows 和 macOS 首先检查系统代理是否开启，很多“不能用”其实是没接管系统流量。",
  "Linux 图形环境优先用 Clash Verge Rev，纯命令行环境再考虑直接跑 Mihomo。",
  "iPhone 上的小火箭第一次启用会弹系统 VPN 权限，这是正常行为。",
  "页面里的活跃度统计来自 Xray access.log 的连接接入次数，不等于精确流量 GB。",
];

export const faqItems = [
  {
    question: "导入后节点显示红色或超时怎么办？",
    answer: "先刷新订阅，再切换网络环境。如果还是不通，优先把错误截图和系统版本发给管理员。",
  },
  {
    question: "为什么浏览器能用，但某些应用不走代理？",
    answer: "通常是系统代理或 TUN 没开。桌面端先检查系统代理，再看是否需要启用 TUN 模式。",
  },
  {
    question: "一键导入打不开怎么办？",
    answer: "先确认本机已经安装对应客户端。打不开时，退一步直接复制 subscription URL 手动导入。",
  },
  {
    question: "能不能多人共用一个订阅？",
    answer: "不建议。分开用更容易排查问题，也方便单独轮换失效链接。",
  },
];

export const usageTimeline = [
  { day: "03/31", value: 0 },
  { day: "04/01", value: 0 },
  { day: "04/02", value: 0 },
  { day: "04/03", value: 340 },
  { day: "04/04", value: 1016 },
  { day: "04/05", value: 0 },
  { day: "04/06", value: 9168 },
];

export const featureList = [
  "服务器真实配置：Debian 12，2 vCPU，1967 MB 内存，20 GB 磁盘",
  "代理入口真实配置：103.25.100.166:443，Xray + VLESS + REALITY，无自有域名",
  "Windows、macOS、Linux 统一以 Clash Verge Rev 为主，iPhone / iPad 用 Shadowrocket",
  "公开页只展示真实快照和教程，真实订阅链接仍然由管理员私下分发",
];
