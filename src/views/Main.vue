<template>
<div class="main">
  <Nav />
  <div class="page-layout">

    <div class="card-list">
      <Card v-for="(card, index) in cards" :key="`card${index}`" :data="card" />
    </div>

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
  data: () => ({
    actualOrganization: 'organizeByPrioritySLA',
    organizationOptions: ['organizeByPrioritySLA', 'organizeByReceiveDocuments']
  }),
  computed: {
    ...mapGetters('activities', [
      'activities'
    ]),
    ...mapGetters('cards', [
      'organizeByPrioritySLA',
      'organizeByReceiveDocuments'
    ]),
    cards() {
      return this[this.actualOrganization]
    }
  },
  methods: {
    changeCardsOrganization(index) {
      this.actualOrganization = this.organizationOptions[index]
    }
  },
  mounted() {
    this.$store.dispatch('activities/fetchActivities')
    this.$store.dispatch('cards/fetchCards')
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
    overflow: auto;

    .card-list {
      display: flex;
      flex-wrap: wrap;
    }
  }
}
</style>
