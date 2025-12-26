
import { watch } from 'vue'
import debounce from 'lodash.debounce'

export function useAutoSave(form:any, fn:()=>void) {
  const d = debounce(fn, 3000)
  watch(form, () => d(), { deep:true })
}
