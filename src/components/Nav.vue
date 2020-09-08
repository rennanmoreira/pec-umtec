<template>
<div class="nav">
  <div class="logo" @click="$router.push('/')">
    <img src="@/assets/images/PEG_Contas.png" alt="P.E.G. Logo">
  </div>
  <div :class="['nav-item', {'active': navItem.active}]" v-for="(navItem, navItemIndex) in navItems" :key="`navItemIndex${navItemIndex}`" @click="accessItem(navItem, navItemIndex)">
    <div class="nav-item-box">
      <CustomIcon :name="navItem.name" size=18 />
      <span class="nav-item-text">{{navItem.title}}</span>
    </div>
  </div>
</div>
</template>

<script>
const menuItems = [{
  name: 'note-outline',
  title: 'Minhas atividades',
  active: true,
  route: '/my-activities'
}, {
  name: 'view-agenda-outline',
  title: 'Todas as contas',
  active: false,
  route: '/all-accounts'
}, {
  name: 'account-outline',
  title: 'Usuários',
  active: false,
  route: '/users'
}, {
  name: 'poll',
  title: 'Desempenho',
  active: false,
  route: '/performance'
}, {
  name: 'timer',
  title: 'Dashboard',
  active: false,
  route: '/dashboard'
}]

export default {
  data: () => ({
    navItems: menuItems
  }),
  methods: {
    accessItem(item, itemIndex) {
      this.navItems.forEach(i => i.active = false)

      this.navItems[itemIndex].active = true

      this.$router.push(item.route)
    }
  }
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
    box-shadow: 0 0 4px #00000052;
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
      padding-top: 2px;

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
