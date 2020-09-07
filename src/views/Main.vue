<template>
<div class="main">
  <Nav />
  {{activities}}
</div>
</template>

<script>
import Nav from '@/components/Nav'
import {
  mapGetters
} from 'vuex'

export default {
  components: {
    Nav
  },
  computed: {
    ...mapGetters('activities', [
      'activities'
    ])
  },
  mounted() {
    this.$store.dispatch('activities/fetchActivities')
  }
}
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  height: 100%;
  width: 100%;
}
</style>
