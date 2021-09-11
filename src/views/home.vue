<template>
  <div>
    <div>Home page</div>
    <el-button @click="incrementHandler">increment</el-button>
    <div class="text">count: {{ counter }}</div>
  </div>
</template>
<script lang="ts">
import { useStore } from 'vuex'
import { computed } from 'vue'
import getHomeData from '../services/api'

export default {
  setup() {
    const store = useStore()

    const loadData = () => {
      getHomeData()
        .then(() => {})
        .catch((err) => {
          console.log('err', err)
        })
    }

    loadData()
    return {
      counter: computed(() => store.state.counter.count),
      incrementHandler: () => {
        store.commit('increment')
      }
    }
  }
}
</script>
<style lang="scss">
.text {
  margin-top: 20px;
}
</style>
