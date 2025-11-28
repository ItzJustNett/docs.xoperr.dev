<template>
  <div class="VPFeatures vp-raw">
    <div class="container">
      <div class="items">
        <div class="item">
          <article class="VPFeature">
            <div class="icon-wrapper">
              <img :src="gemIcon" alt="BlissGems" class="feature-icon" />
            </div>
            <h2 class="title">BlissGems</h2>
            <p class="details">A Minecraft gem system plugin for Paper/Purpur 1.21+ servers. Players can equip gems in their offhand to gain passive abilities and activate special powers.</p>
            <a href="https://modrinth.com/plugin/blissgems" target="_blank" class="link">
              Learn more →
            </a>
          </article>
        </div>

        <div class="item">
          <article class="VPFeature">
            <div class="icon-wrapper">
              <img :src="pearlIcon" alt="BetterStasis" class="feature-icon" />
            </div>
            <h2 class="title">BetterStasis</h2>
            <p class="details">A Minecraft plugin for Paper 1.21+ that implements a pearl stasis chamber system with tons of customization.</p>
            <a href="https://modrinth.com/plugin/betterstasis" target="_blank" class="link">
              Learn more →
            </a>
          </article>
        </div>

        <div class="item">
          <article class="VPFeature">
            <div class="icon-wrapper">
              <img :src="geminiIcon" alt="GeminiMC" class="feature-icon" />
            </div>
            <h2 class="title">GeminiMC</h2>
            <p class="details">A powerful Minecraft plugin that integrates Google's Gemini AI to help server administrators manage their servers through natural language commands.</p>
            <a href="https://modrinth.com/plugin/geminimc" target="_blank" class="link">
              Learn more →
            </a>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import gemIcon from '../../public/icons/Gems.webp?url'
import pearlIcon from '../../public/icons/pearl.png?url'
import geminiIcon from '../../public/icons/GeminiMC-min.png?url'
</script>

<style scoped>
.VPFeatures {
  position: relative;
  padding: 0 24px;
  margin-top: 48px;
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
