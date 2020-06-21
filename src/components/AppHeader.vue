<template>
  <div class="app-header">
    <div class="page-width">
      <div class="app-header__top">
        <div class="app-header__logo" />
        <!-- <router-link to="/game" class="app-header-btn btn btn_pill">
          <launch-icon />
          Играть
        </router-link> -->
      </div>
      <div class="app-header__links">
        <router-link to="/">Главная</router-link>
        <router-link to="about">Все новости</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    // LaunchIcon: () => import('icons/Launch.vue')
  }
}
</script>

<style lang="sass" scoped>
.app-header
    background-color: $primary
    color: white
    *
        color: white

.app-header__top
    height: 60px
    justify-content: center

.app-header__logo
    flex-grow: 2
    background-image: url('/img/logo_white.svg')
    height: 30px
    background-repeat: no-repeat
    background-position: center

.app-header-btn
    background-color: $success

.app-header__links
    a
        text-decoration: none
        padding: 4px 20px
        border-top-left-radius: $border-radius
        border-top-right-radius: $border-radius
        &.router-link-active, &.router-link-active:hover
            background-color: white
            color: $primary
        &:hover
            background-color: $darker

.app-header__top, .app-header__links
    display: flex
    align-items: center


@media screen and (max-width: 480px)
    .app-header__top
        height: 50px

    .app-header__logo
        background-image: url('/img/logo_white_mini.svg')
        height: 20px
        background-position: left
</style>
