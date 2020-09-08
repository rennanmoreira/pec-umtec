<template>
<div class="main">
  <Nav />
  <div class="page-layout">
    <div class="page-header">
      <div class="page-title">
        <h1 class="title">Unidade Internação I</h1>
        <div class="sub-title">Auditar contas</div>
      </div>
      <div class="cards-count">
        <div class="cards-count-group">
          <div class="cards-options">
            <div class="card-item delayed">
              <div class="card-color"></div>
              <div class="card-value">{{countStatus.delayed}} {{countStatus.delayed === 1 ? 'card' : 'cards' }}</div>
            </div>
            <div class="card-item warning">
              <div class="card-color"></div>
              <div class="card-value">{{countStatus.warning}} {{countStatus.warning === 1 ? 'card' : 'cards' }}</div>
            </div>
            <div class="card-item good">
              <div class="card-color"></div>
              <div class="card-value">{{countStatus.good}} {{countStatus.good === 1 ? 'card' : 'cards' }}</div>
            </div>
          </div>
        </div>
        <div class="cards-total">
          <span class="cards-total-label">Total: </span>
          <span class="cards-total-value"> {{countTotal}} {{countTotal === 1 ? 'conta' : 'contas' }}</span>
        </div>
      </div>

      <div class="select-filter">
        <label for="actualOrganization">Organizar por: </label>
        <select id="actualOrganization" v-model="actualOrganization">
          <option value="organizeByPrioritySLA">Prioridade (SLA)</option>
          <option value="organizeByReceiveDocuments">Receber documentos</option>
        </select>
      </div>
    </div>

    <div class="check-cards">
      <input id="checkAllCards" type="checkbox">
      <label for="checkAllCards">Selecionar tudo</label>
    </div>

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
      'countTotal',
      'countStatus',
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

    .page-header {
      display: flex;
      justify-content: space-between;
      margin: 20px 0px;
      padding: 0px 20px;

      .page-title {
        .title {
          font-size: 28px;
          font-weight: 400;
          margin: 0px;
        }

        .sub-title {
          font-size: 14px;
          font-weight: 300;
          text-align: left;
          color: #a7a9af;
        }
      }

      .cards-count {
        display: flex;
        flex-wrap: wrap;
        width: 270px;

        .cards-count-group {
          width: 100%;

          .cards-options {
            display: flex;
            justify-content: space-between;

            .card-item {
              display: flex;
              align-items: center;
              justify-content: space-between;

              .card-color {
                margin-right: 5px;
                width: 8px;
                height: 8px;
                border-radius: 50%;
              }

              &.delayed>.card-color {
                background-color: #FD5958;
              }

              &.warning>.card-color {
                background-color: #FFC734;
              }

              &.good>.card-color {
                background-color: #20BF6B;
              }
            }
          }
        }

        .cards-total {
          font-size: 12px;

          .cards-total-label {
            color: #a7a9af;
          }
        }
      }

      .select-filter {
        select {
          height: 40px;
          width: 250px;
          background: transparent;
          border: 2px solid #4d556c63;
          border-radius: 4px;
          padding: 5px;
        }
      }
    }

    .check-cards {
      padding: 0px 20px 10px;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      input[type="checkbox"] {
        cursor: pointer;
        width: 18px;
        height: 18px;
        background-color: transparent;
      }

      label {
        padding-left: 10px;
        font-weight: 500;
      }
    }

    .card-list {
      justify-content: space-between;
      display: flex;
      flex-wrap: wrap;
    }
  }
}
</style>
