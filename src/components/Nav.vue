<template>
<div class="nav">
  <div class="logo">
    <img src="@/assets/images/PEG_Contas.png" alt="P.E.G. Logo">
  </div>
  <div v-for="(navItem, navItemIndex) in navItems" :class="['nav-item', {'active': true}]" :key="`navItemIndex${navItemIndex}`">
    <router-link class="nav-item-text" :to="navItem.route">{{navItem.title}}</router-link>
  </div>
  <router-link to="/">Home</router-link> |
  <router-link to="/about">About</router-link>
</div>
</template>

<script>
export default {
  data: () => ({
    navItems: [{
      name: 'myActivities',
      title: 'Minhas atividades',
      route: ''
    }, {
      name: 'allAccounts',
      title: 'Todas as contas',
      route: ''
    }, {
      name: 'users',
      title: 'Usuários',
      route: ''
    }, {
      name: 'performance',
      title: 'Desempenho',
      route: ''
    }, {
      name: 'dashboard',
      title: 'Dashboard',
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
    padding: 10px 10px;
    height: 50px;
    font-size: 11px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    &.active {
      color: #2793FF;
      // border-left: 3px solid #2793FF;
      border-radius: 0px 5px 5px 0;
      position: relative;

      &:after {
        content: '';
        height: calc(100% - 20px);
        border: 3px solid #2793FF;
        position: absolute;
        border-top: 0;
        border-left: 0;
        border-radius: 0 5px 5px 0;
        left: 0px;
      }
    }

    .nav-item-text {
      color: #2793FF;
      text-decoration: initial;
    }

  }
}
</style>
