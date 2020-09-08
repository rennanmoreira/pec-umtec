<template>
<div class="main">
  <Nav />
  <div class="page-layout">
    <Card />

  </div>
</div>
</template>

<script>
import Nav from '@/components/Nav'
import Card from '@/components/Card'
import {
  mapGetters
} from 'vuex'

export default {
  components: {
    Nav,
    Card
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

  .page-layout {
    padding: 40px;
  }
}
</style>
