<template>
  <section class="section">
    <div class="container">
      <h2 class="h2">{{ t('contact.title') }}</h2>

      <div class="contact-grid">
        <div class="panel">
          <div class="field">
            <label class="label">{{ t('contact.office') }}</label>
            <input class="input" placeholder="City, Country" />
          </div>

          <div class="info">
            <div><b>{{ t('contact.hotline') }}</b>: +84 xxx xxxx</div>
            <div><b>Email</b>: info@demo.local</div>
            <div><b>Email</b>: sales@demo.local</div>
          </div>

          <div class="field"><input class="input" placeholder="Full name" /></div>
          <div class="field"><input class="input" placeholder="Fruit type / quantity" /></div>
          <div class="field"><input class="input" placeholder="Email" /></div>

          <button class="btn btn-dark w100">{{ t('contact.send') }}</button>
        </div>

        <div class="panel">
          <div class="map-box big">Map Placeholder</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from '~/i18n'
const { t } = useI18n()
</script>
