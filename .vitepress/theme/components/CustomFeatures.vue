<template>
  <div class="VPFeatures">
    <div class="container">
      <div class="items">
        <div v-for="feature in features" :key="feature.title" class="item">
          <article class="VPFeature">
            <div class="icon-wrapper">
              <img
                :src="withBase(feature.icon)"
                :alt="feature.title"
                class="feature-icon"
                @error="handleImageError"
              />
            </div>
            <h2 class="title">{{ feature.title }}</h2>
            <p class="details">{{ feature.details }}</p>
            <a v-if="feature.link" :href="feature.link" target="_blank" class="link">
              Learn more →
            </a>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { withBase } from 'vitepress'

defineProps({
  features: {
    type: Array,
    required: true
  }
})

const handleImageError = (e) => {
  console.error('Failed to load image:', e.target.src)
}
</script>

<style scoped>
.VPFeatures {
  position: relative;
  padding: 0 24px;
}

@media (min-width: 640px) {
  .VPFeatures {
    padding: 0 48px;
  }
}

@media (min-width: 960px) {
  .VPFeatures {
    padding: 0 64px;
  }
}

.container {
  margin: 0 auto;
  max-width: 1152px;
}

.items {
  display: flex;
  flex-wrap: wrap;
  margin: -8px;
}

.item {
  padding: 8px;
  width: 100%;
}

@media (min-width: 640px) {
  .item {
    width: 50%;
  }
}

@media (min-width: 960px) {
  .item {
    width: 33.333%;
  }
}

.VPFeature {
  height: 100%;
  padding: 24px;
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  background-color: var(--vp-c-bg-soft);
  transition: border-color 0.25s, background-color 0.25s;
}

.VPFeature:hover {
  border-color: var(--vp-c-brand-1);
}

.icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  border-radius: 6px;
  background-color: var(--vp-c-default-soft);
  width: 64px;
  height: 64px;
  font-size: 48px;
  transition: background-color 0.25s;
}

.feature-icon {
  width: 48px;
  height: 48px;
  object-fit: contain;
}

.title {
  line-height: 24px;
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 12px;
}

.details {
  line-height: 24px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
  margin: 0;
}

.link {
  display: inline-block;
  margin-top: 12px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-brand-1);
  text-decoration: none;
  transition: color 0.25s;
}

.link:hover {
  color: var(--vp-c-brand-2);
}
</style>
