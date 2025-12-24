<script setup lang="ts">
import { reactive, computed, ref } from 'vue'
import { useCart } from '~/store/cart'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const cart = useCart()
const router = useRouter()
const { t } = useI18n()
/* ---------------- FORM STATE ---------------- */
const form = reactive({
  name: '',
  email: '',
  address: '',
  note: ''
})

const submitting = ref(false)
const success = ref(false)
const error = ref('')

/* ---------------- VALIDATION ---------------- */
const isEmailValid = computed(() =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
)

const isFormValid = computed(() =>
  form.name &&
  form.email &&
  isEmailValid.value &&
  form.address &&
  cart.items.length > 0
)

/* ---------------- SUBMIT ---------------- */
async function submit() {
  if (!isFormValid.value) return

  submitting.value = true
  error.value = ''

  try {
    // 👉 Sau này thay bằng API call
    await new Promise(r => setTimeout(r, 1200))

    success.value = true
    cart.items.splice(0) // clear cart
  } catch (e) {
    error.value = 'Checkout failed. Please try again.'
  } finally {
    submitting.value = false
  }
}
</script>

<template>
  <div class="bg-[#f4f1ea] py-16 min-h-[70vh]">
    <div class="max-w-7xl mx-auto px-6">

      <h1 class="text-3xl font-extrabold mb-10">
        {{ t('checkout.title') }}
      </h1>

      <!-- EMPTY CART -->
      <div
        v-if="cart.items.length === 0 && !success"
        class="bg-white rounded-2xl shadow-lg p-12 text-center">
        <p class="text-gray-600 mb-6">
          {{ t('cart.empty') }}
        </p>
        <button
          @click="router.push('/fruit/products')"
          class="px-6 py-3 rounded-xl
                 bg-[#134b39] text-white font-semibold
                 hover:bg-[#0f3c2d] transition">
          {{ t('checkout.backToProducts') }}
        </button>
      </div>

      <!-- SUCCESS -->
      <div
        v-else-if="success"
        class="bg-white rounded-2xl shadow-lg p-12 text-center">
        <h2 class="text-2xl font-bold text-[#134b39] mb-4">
          {{ t('checkout.successTitle') }}
        </h2>
        <p class="text-gray-600 mb-8">
          {{ t('checkout.successDesc') }}
        </p>
        <button
          @click="router.push('/fruit')"
          class="px-6 py-3 rounded-xl
                 bg-[#134b39] text-white font-semibold
                 hover:bg-[#0f3c2d] transition">
          {{ t('checkout.backToHome') }}
        </button>
      </div>

      <!-- CHECKOUT CONTENT -->
      <div
        v-else
        class="grid lg:grid-cols-3 gap-10">

        <!-- FORM -->
        <div class="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8">
          <h2 class="text-xl font-bold mb-6">
            {{ t('checkout.customerInfo') }}
          </h2>

          <div class="space-y-4">
            <input
              v-model="form.name"
              :placeholder="t('checkout.fullName')"
              class="w-full px-4 py-3 rounded-xl
                     border border-gray-300
                     focus:outline-none
                     focus:ring-2 focus:ring-[#b99a5f]" />

            <input
              v-model="form.email"
              type="email"
              :placeholder="t('checkout.email')"
              class="w-full px-4 py-3 rounded-xl
                     border border-gray-300
                     focus:outline-none
                     focus:ring-2 focus:ring-[#b99a5f]" />

            <p
              v-if="form.email && !isEmailValid"
              class="text-sm text-red-500">
              {{ t('checkout.invalidEmail') }}
            </p>

            <input
              v-model="form.address"
              :placeholder="t('checkout.address')"
              class="w-full px-4 py-3 rounded-xl
                     border border-gray-300
                     focus:outline-none
                     focus:ring-2 focus:ring-[#b99a5f]" />

            <textarea
              v-model="form.note"
              rows="3"
              :placeholder="t('checkout.note')"
              class="w-full px-4 py-3 rounded-xl
                     border border-gray-300
                     focus:outline-none
                     focus:ring-2 focus:ring-[#b99a5f]" />
          </div>
        </div>

        <!-- SUMMARY -->
        <aside class="bg-white rounded-2xl shadow-xl p-6 h-fit">
          <h2 class="text-lg font-bold mb-6">
            {{ t('cart.title') }}
          </h2>

          <div class="space-y-4 mb-6">
            <div
              v-for="item in cart.items"
              :key="item.id"
              class="flex justify-between text-sm">
              <span>
                {{ item.name }} × {{ item.qty }}
              </span>
              <span class="font-semibold">
                ${{ item.price * item.qty }}
              </span>
            </div>
          </div>

          <div class="border-t pt-4 flex justify-between font-bold">
            <span>{{ t('cart.total') }}</span>
            <span class="text-[#134b39]">
              ${{ cart.totalPrice }}
            </span>
          </div>

          <button
            @click="submit"
            :disabled="!isFormValid || submitting"
            class="mt-6 w-full py-3 rounded-xl
                   bg-[#134b39] text-white font-semibold
                   hover:bg-[#0f3c2d]
                   disabled:opacity-50
                   disabled:cursor-not-allowed
                   transition">
            <span v-if="!submitting">
              {{ t('checkout.placeOrder') }}
            </span>
            <span v-else>
              {{ t('checkout.processing') }}
            </span>
          </button>

          <p
            v-if="error"
            class="mt-4 text-sm text-red-500">
            {{ error }}
          </p>
        </aside>
      </div>
    </div>
  </div>
</template>