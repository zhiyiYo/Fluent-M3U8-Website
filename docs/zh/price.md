---
layout: page
sidebar: false
prev: false
next: false
---

<script setup>
const plans = [
  {
    name: '社区版',
    monthlyPrice: '免费',
    annualPrice: null,
    buttonText: '开始使用',
    summary: '免费且开源，开箱即用',
    purchaseLink: '/zh/download',
    features: [
      '支持 m3u8 格式',
      '支持 mpd 格式',
      '支持批量下载',
    ]
  },
  {
    name: '专业版',
    monthlyPrice: '￥16',
    annualPrice: null,
    buttonText: '立即购买',
    summary: '更多功能特性，仅需一杯奶茶的价格',
    popular: true,
    purchaseLink: 'https://item.taobao.com/item.htm?id=1010809611951',
    features: [
      '绑定 1 台电脑',
      '支持 m3u8 格式',
      '支持 mpd 格式',
      '支持批量下载',
      '支持断点续传',
      '支持 API 调用，适配猫抓插件',
      '专属官方交流群服务'
    ]
  },
  {
    name: '至尊版',
    monthlyPrice: '￥29',
    annualPrice: null,
    buttonText: '立即购买',
    summary: '一次购买，终身享受',
    purchaseLink: 'https://item.taobao.com/item.htm?id=1010809611951',
    features: [
      '绑定 2 台电脑',
      '支持 m3u8 格式',
      '支持 mpd 格式',
      '支持批量下载',
      '支持断点续传',
      '支持 API 调用，适配猫抓插件',
      '专属官方交流群服务'
    ]
  }
]

const text = {
  label: '价格',
  title: '为不同用户量身定制的方案',
  subtitle: '选择一个最适合您的价格方案，其他的功能细节放心交给我们',
  popular: '最受欢迎'
}
</script>

<div class="pricing-page">
  <div class="pricing-header">
    <div class="pricing-label">{{ text.label }}</div>
    <h1 class="pricing-title">{{ text.title }}</h1>
    <p class="pricing-subtitle">{{ text.subtitle }}</p>
  </div>

  <div class="pricing-plans">
    <div v-for="plan in plans" :key="plan.name" :class="['pricing-card', { 'popular': plan.popular }]">
      <div v-if="plan.popular" class="popular-badge">{{ text.popular }}</div>
      <div :class="['plan-name', { 'popular-name': plan.popular }]">{{ plan.name }}</div>
      <div class="plan-summary">{{ plan.summary }}</div>
      <div class="plan-price">
        <span class="price-amount">{{ plan.monthlyPrice }}</span>
      </div>
      <div v-if="plan.annualPrice" class="plan-annual">{{ plan.annualPrice }}</div>
      <a :href="plan.purchaseLink" :class="['plan-button', { 'popular-button': plan.popular }]">{{ plan.buttonText }}</a>
      <ul class="plan-features">
        <li v-for="feature in plan.features" :key="feature" class="feature-item">
          <span class="checkmark">✓</span>
          <span>{{ feature }}</span>
        </li>
      </ul>
    </div>
  </div>
</div>

<style scoped>
.pricing-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 24px;
}

.pricing-header {
  text-align: center;
  margin-bottom: 64px;
}

.pricing-label {
  color: #8b5cf6;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 16px;
}

.pricing-title {
  font-size: 48px;
  font-weight: 700;
  line-height: 1.2;
  margin: 0 0 16px 0;
  color: var(--vp-c-text-1);
}

.pricing-subtitle {
  font-size: 18px;
  line-height: 1.6;
  color: var(--vp-c-text-2);
  max-width: 700px;
  margin: 0 auto;
}

.pricing-plans {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-top: 48px;
}

.pricing-card {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s, box-shadow 0.2s;
  position: relative;
  height: 100%;
}

.pricing-card.popular {
  border: 2px solid #8b5cf6;
  box-shadow: 0 4px 12px rgba(139, 92, 246, 0.15);
}

.pricing-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
}

.pricing-card.popular:hover {
  box-shadow: 0 12px 24px rgba(139, 92, 246, 0.25);
}

.popular-badge {
  position: absolute;
  top: 16px;
  right: 16px;
  background: rgba(139, 92, 246, 0.15);
  color: #8b5cf6;
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  z-index: 1;
}

.plan-name {
  font-size: 24px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 22px;
  margin-top: 0;
}

.plan-name.popular-name {
  color: #8b5cf6;
}

.plan-price {
  margin-bottom: 27px;
}

.price-amount {
  font-size: 48px;
  font-weight: 700;
  color: var(--vp-c-text-1);
  line-height: 1;
}

.plan-annual {
  font-size: 14px;
  color: var(--vp-c-text-2);
  margin-bottom: 16px;
}

.plan-summary {
  font-size: 14px;
  color: var(--vp-c-text-2);
  margin-bottom: 22px;
  margin-top: 0;
  line-height: 1.5;
}

.plan-features {
  list-style: none;
  padding: 0;
  margin: 0;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 8px;
  font-size: 14px;
  color: var(--vp-c-text-1);
  line-height: 1.5;
}

.checkmark {
  color: #8b5cf6;
  font-weight: 700;
  margin-right: 8px;
  flex-shrink: 0;
  font-size: 16px;
}

.plan-button {
  background: white;
  color: #8b5cf6;
  border: 1px solid #8b5cf6;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 27px;
  margin-top: 0;
  transition: all 0.2s;
  width: 100%;
  display: block;
  text-align: center;
  text-decoration: none;
}

.plan-button:hover {
  background: #f5f3ff;
}

.plan-button.popular-button {
  background: #8b5cf6;
  color: white;
  border: 1px solid #8b5cf6;
}

.plan-button.popular-button:hover {
  background: #7c3aed;
  border-color: #7c3aed;
}

@media (max-width: 960px) {
  .pricing-plans {
    grid-template-columns: 1fr;
    gap: 24px;
  }
}

@media (max-width: 768px) {
  .pricing-page {
    padding: 40px 16px;
  }

  .pricing-title {
    font-size: 36px;
  }
}
</style>
