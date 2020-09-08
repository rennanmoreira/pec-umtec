<template>
<div class="card">
  <div class="card-header">
    <span class="status">
      <div class="days-number">27</div>
      <div class="days-label">Dias</div>
    </span>
    <span class="card-title">
      <div class="patient-name">Sudanka Bakalowits</div>
      <div class="patient-plan">Amil Saúde</div>
    </span>
    <span class="check-card">
      <input type="checkbox">
    </span>
  </div>
  <div class="card-body">
    <div class="patient-info">
      <div>
        <label>Conta</label>
        <span class="item-value">7929215</span>
      </div>
      <div>
        <label>Atend.</label>
        <span class="item-value">AT893701</span>
      </div>
      <div>
        <label>Remessa</label>
        <span class="item-value">893701</span>
      </div>
      <div>
        <label>Lote</label>
        <span class="item-value">893701</span>
      </div>
    </div>
    <div class="patient-billing">
      <div class="billing-value">R$ 5.789,97</div>
      <div class="billing-pendencies">5 pendências</div>
    </div>
  </div>
  <div class="card-footer">
    <div class="bill-types">
      <div class="bill-types-item">Q</div>
      <div class="bill-types-item">R</div>
    </div>
    <div class="options">
      <span>
        <CustomIcon name="attach-file" size=28 color="#4F576E" />
      </span>
      <span>
        <CustomIcon name="file-document" size=28 color="#4F576E" />
      </span>
    </div>
  </div>
</div>
</template>

<script>
export default {

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

  .card-header {
    display: flex;

    .status {
      height: 60px;
      width: 60px;
      background-color: #FD5958;
      color: white;
      border-radius: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

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
        padding: 0px 0px 4px;
      }

      .patient-plan {
        font-size: 11px;
        font-weight: 300;
      }
    }

    .check-card {
      input[type="checkbox"] {
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

      label {
        font-size: 11px;
        display: flex;
        justify-content: flex-start;
      }

      .item-value {
        font-size: 15px;
        font-weight: 500;
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

      span {
        padding-left: 5px;
      }
    }
  }
}
</style>
