<template>
<div class="nav">
  <div class="logo">
    <img src="@/assets/images/PEG_Contas.png" alt="P.E.G. Logo">
  </div>
  <div :class="['nav-item', {'active': navItem.active}]" v-for="(navItem, navItemIndex) in navItems" :key="`navItemIndex${navItemIndex}`">
    <div class="nav-item-box">
      <CustomIcon name="note-outline" size=18 />
      <router-link class="nav-item-text" :to="navItem.route">{{navItem.title}}</router-link>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data: () => ({
    navItems: [{
      name: 'myActivities',
      title: 'Minhas atividades',
      active: true,
      route: ''
    }, {
      name: 'allAccounts',
      title: 'Todas as contas',
      active: false,
      route: ''
    }, {
      name: 'users',
      title: 'Usuários',
      active: false,
      route: ''
    }, {
      name: 'performance',
      title: 'Desempenho',
      active: false,
      route: ''
    }, {
      name: 'dashboard',
      title: 'Dashboard',
      active: false,
      route: ''
    }]
  })
}
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 90px;
  background-color: #E7EBF7;

  .logo {
    width: 100%;
    height: 70px;
    background-color: #2793FF;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }

  .nav-item {
    height: 50px;
    margin: 5px 0px;
    padding: 5px 10px;
    cursor: pointer;

    &.active {
      color: #2793FF;
      border-radius: 0px 5px 5px 0;
      position: relative;

      &:after {
        content: '';
        height: 100%;
        border: 3px solid #2793FF;
        position: absolute;
        border-top: 0;
        border-left: 0;
        border-radius: 0 5px 5px 0;
        left: 0px;
        top: 0px;
      }

      .nav-item-box {
        .nav-item-text {
          color: #2793FF;
        }

        ::v-deep .custom-icon>path {
          fill: #2793FF;
        }
      }
    }

    .nav-item-box {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      .nav-item-text {
        font-size: 11px;
        padding-top: 6px;
        color: #9BA8C5;
        text-decoration: initial;
      }

      ::v-deep .custom-icon>path {
        fill: #9BA8C5;
      }
    }
  }
}
</style>
