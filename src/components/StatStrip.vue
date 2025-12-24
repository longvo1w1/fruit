<template>
  <section class="stats">
    <div class="container stats-inner">
      <div class="stat">
        <div class="stat-icon">🌍</div>
        <div class="stat-text">{{ t('stats.s1') }}</div>
      </div>
      <div class="stat">
        <div class="stat-icon">✅</div>
        <div class="stat-text">{{ t('stats.s3') }}</div>
      </div>
      <div class="stat">
        <div class="stat-icon">🌿</div>
        <div class="stat-text">{{ t('stats.s2') }}</div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from '~/i18n'
const { t } = useI18n()
</script>
