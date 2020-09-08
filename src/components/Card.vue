<template>
<div class="card">
  <div class="card-header">
    <span :class="['status', statusOptions[data.status]]">
      <div class="days-number">{{data.days}}</div>
      <div class="days-label">Dias</div>
    </span>
    <span class="card-title">
      <div class="patient-name">{{data.patientName}}</div>
      <div class="patient-plan">Amil Saúde</div>
    </span>
    <span class="check-card">
      <input type="checkbox">
    </span>
  </div>
  <div class="card-body">
    <div class="patient-info">
      <div class="patient-info-item" v-for="({label, value}, index) in data.billSources" :key="`billSource${index}`">
        <label>{{label}}</label>
        <span class="item-value">{{value || 'N/A'}}</span>
      </div>
    </div>
    <div class="patient-billing">
      <div class="billing-value">{{mixinFormatMoney(this.data.value)}}</div>
      <div class="billing-pendencies">{{data.pendencies}} {{data.pendencies === 1 ? 'pendência' : 'pendências'}}</div>
    </div>
  </div>
  <div class="card-footer">
    <div class="bill-types">
      <div class="bill-types-item" v-for="(billType, index) in data.billTypes" :key="`billType${index}`">{{billType}}</div>
    </div>
    <div class="options">
      <span class="option-item" v-if="data.showAttachment">
        <CustomIcon name="attach-file" size=28 color="#4F576E" />
      </span>
      <span class="option-item" v-if="data.showDocument">
        <CustomIcon name="file-document" size=28 color="#4F576E" />
        <span class="badge" v-if="data.hasPendingDocument"></span>
      </span>
    </div>
  </div>
</div>
</template>

<script>
import {
  mainMixin
} from '@/mixins/index.mixins.js'

const normalizeStatus = {
  'DELAYED': 'delayed',
  'WARNING': 'warning',
  'GOOD': 'good'
}

export default {
  mixins: [mainMixin],
  props: {
    data: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },
  computed: {
    statusOptions() {
      return normalizeStatus
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.card {
  background-color: #FFFFFF;
  width: 340px;
  height: 210px;
  border-radius: 5px;
  box-shadow: 0 0 6px #00000020;
  padding: 20px;
  margin: 20px;

  .card-header {
    display: flex;

    .status {
      height: 60px;
      width: 60px;
      background-color: gray;
      color: white;
      border-radius: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      &.delayed {
        background-color: #FD5958;
      }

      &.warning {
        background-color: #FFC734;
      }

      &.good {
        background-color: #20BF6B;
      }

      .days-number {
        font-size: 24px;
        font-weight: 600;
        line-height: 22px;
      }

      .days-label {
        font-size: 11px;
      }
    }

    .card-title {
      display: flex;
      flex: 1;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      padding: 0px 0px 0px 15px;

      .patient-name {
        font-size: 20px;
        padding: 0px 0px 7px;
      }

      .patient-plan {
        font-size: 11px;
        font-weight: 300;
      }
    }

    .check-card {
      input[type="checkbox"] {
        cursor: pointer;
        width: 18px;
        height: 18px;
      }
    }
  }

  .card-body {
    padding: 12px 0px 6px;

    .patient-info {
      display: flex;
      justify-content: space-between;
      color: #585F75;

      .patient-info-item {

        label {
          font-size: 11px;
          display: flex;
          justify-content: flex-start;
        }

        .item-value {
          display: flex;
          justify-content: flex-start;
          font-size: 15px;
          font-weight: 500;
        }
      }

    }

    .patient-billing {
      margin: 12px 0px;
      padding: 12px;
      border-radius: 5px;
      background-color: #F5F6FA;
      display: flex;
      justify-content: space-between;
      color: #343742;

      .billing-value {
        font-size: 18px;
        align-self: center;
        color: #4F576E;
      }

      .billing-pendencies {
        padding: 5px 25px;
        border: 1px solid #2793FF;
        font-size: 13px;
        color: #2793FF;
        font-weight: bold;
        border-radius: 14px;
      }
    }
  }

  .card-footer {
    display: flex;
    justify-content: space-between;

    .bill-types {
      display: flex;

      .bill-types-item {
        border: 2px solid #4F576E;
        color: #4F576E;
        margin: 0px 2.5px;
        border-radius: 18px;
        width: 22px;
        height: 22px;
        font-size: 14px;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    .options {
      display: flex;

      .option-item {
        padding-left: 5px;
        position: relative;
        cursor: pointer;
      }

      .badge {
        position: absolute;
        right: 0px;
        padding: 6px 6px;
        border-radius: 50%;
        background-color: #FD5958;
      }
    }
  }
}
</style>
