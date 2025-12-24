<script setup lang="ts">
import { useCart } from '~/store/cart'
import { useRouter } from 'vue-router'
import { useI18n } from '~/i18n'

const cart = useCart()
const router = useRouter()
const { t } = useI18n()
</script>

<template>
  <div class="bg-[#f4f1ea] py-14 min-h-[60vh]">
    <div class="max-w-7xl mx-auto px-6">

      <h1 class="text-3xl font-extrabold mb-10">
        {{ t('cart.title') }}
      </h1>

      <!-- EMPTY -->
      <div
        v-if="cart.items.length === 0"
        class="text-center text-gray-600 py-24">
        {{ t('cart.empty') }}
      </div>

      <!-- CART CONTENT -->
      <div
        v-else
        class="grid lg:grid-cols-3 gap-10">

        <!-- ITEMS -->
        <div class="lg:col-span-2 space-y-4">

          <TransitionGroup
            name="cart"
            tag="div"
            class="space-y-4">

            <div
              v-for="item in cart.items"
              :key="item.id"
              class="bg-white rounded-2xl p-5 shadow-lg
                     flex gap-5 items-center">

              <!-- IMAGE -->
              <img
                :src="item.image"
                class="w-24 h-20 rounded-xl object-cover" />

              <!-- INFO -->
              <div class="flex-1">
                <h3 class="font-bold">
                  {{ item.name }}
                </h3>
                <p class="text-sm text-gray-500">
                  {{ t('products.pricePerKg', { price: item.price.toFixed(2) }) }}
                </p>

                <!-- QTY -->
                <div class="mt-3 flex items-center gap-3">
                  <button
                    @click="cart.updateQty(item.id, item.qty - 1)"
                    class="w-8 h-8 rounded-full border
                           hover:bg-gray-100">
                    −
                  </button>

                  <span class="w-6 text-center font-semibold">
                    {{ item.qty }}
                  </span>

                  <button
                    @click="cart.updateQty(item.id, item.qty + 1)"
                    class="w-8 h-8 rounded-full border
                           hover:bg-gray-100">
                    +
                  </button>
                </div>
              </div>

              <!-- LINE TOTAL -->
              <div class="text-right">
                <p class="font-bold text-[#134b39]">
                  ${{ (item.price * item.qty).toFixed(2) }}
                </p>

                <button
                  @click="cart.remove(item.id)"
                  class="mt-3 text-xs text-red-500 hover:underline">
                  {{ t('cart.remove') }}
                </button>
              </div>

            </div>
          </TransitionGroup>
        </div>

        <!-- SUMMARY -->
        <aside
          class="bg-white rounded-2xl p-6 shadow-xl h-fit">

          <h2 class="text-lg font-bold mb-6">
            {{ t('cart.title') }}
          </h2>

          <div class="flex justify-between mb-3 text-sm">
            <span>{{ t('cart.items') }}</span>
            <span>{{ cart.totalItems }}</span>
          </div>

          <div class="flex justify-between mb-6 text-sm">
            <span>{{ t('cart.total') }}</span>
            <span class="font-semibold">
              ${{ cart.totalPrice }}
            </span>
          </div>

          <button
            @click="router.push('/checkout')"
            class="w-full py-3 rounded-xl
                   bg-[#134b39] text-white font-semibold
                   hover:bg-[#0f3c2d]
                   transition shadow-lg">
            {{ t('cart.proceedToCheckout') }}
          </button>
        </aside>
      </div>

    </div>
  </div>
</template>

<style scoped>
.cart-enter-active,
.cart-leave-active {
  transition: all 0.35s ease;
}
.cart-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.cart-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
