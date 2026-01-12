---
layout: page
sidebar: false
prev: false
next: false
---

<script setup>
const plans = [
  {
    name: 'Community',
    monthlyPrice: 'Free',
    annualPrice: null,
    buttonText: 'Get started',
    summary: 'All free and open-source.',
    purchaseLink: '/download',
    features: [
      'Support m3u8 format',
      'Support mpd format',
      'Batch download'
    ]
  },
  {
    name: 'Pro',
    monthlyPrice: '$3',
    annualPrice: null,
    buttonText: 'Buy plan',
    summary: 'More features, great value',
    popular: true,
    purchaseLink: 'https://afdian.com/item/c81f799aeebe11f0b5a752540025c377',
    features: [
      'Bind to 1 PC',
      'Support m3u8 format',
      'Support mpd format',
      'Batch download',
      'API calls support',
      'Compatible with Cat Catch plugin',
      'Customer group service',
    ]
  },
  {
    name: 'Gold',
    monthlyPrice: '$5',
    annualPrice: null,
    buttonText: 'Buy plan',
    summary: 'Pay once, use forever',
    purchaseLink: 'https://afdian.com/item/c81f799aeebe11f0b5a752540025c377',
    features: [
      'Bind to 2 PC',
      'Support m3u8 format',
      'Support mpd format',
      'Batch download',
      'API calls support',
      'Compatible with Cat Catch plugin',
      'Customer group service',
      'Lifetime access'
    ]
  }
]

const text = {
  label: 'Pricing',
  title: 'Pricing that grows with you',
  subtitle: 'Choose an affordable plan that\'s packed with the best features for engaging your audience, creating customer loyalty, and driving sales.',
  popular: 'Most Popular'
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

.plan-summary {
  font-size: 14px;
  color: var(--vp-c-text-2);
  margin-bottom: 22px;
  margin-top: 0;
  line-height: 1.5;
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
