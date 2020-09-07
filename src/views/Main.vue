<template>
<div class="main">
  <Nav />
  {{activities}}
</div>
</template>

<script>
import Nav from '@/components/Nav'
import {
  getActivities
} from '@/services/activities.services'

export default {
  components: {
    Nav
  },
  data: () => ({
    activities: []
  }),
  created() {
    getActivities().then(({
      data
    }) => {
      this.activities = data
    })
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
