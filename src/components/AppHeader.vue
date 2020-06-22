<template>
  <div class="app-header">
    <div class="page-width">
      <div class="app-header__top">
        <div class="app-header__logo" />
        <!-- <router-link to="/game" class="app-header-btn btn btn_pill">
          <launch-icon />
          Играть
        </router-link> -->
        <div class="app-header__page-name">{{ pageName }}</div>
        <menu-icon class="app-header__menu-icon" @click="showDrawer" />
      </div>
      <app-links class="app-header__links"></app-links>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    // LaunchIcon: () => import('icons/Launch.vue')
    MenuIcon: () => import('icons/Menu.vue'),
    AppLinks: () => import('@/components/AppLinks.vue')
  },

  computed: {
    pageName() {
      return this.$route.name
    }
  },

  methods: {
    showDrawer() {
      this.$emit('showDrawer')
    }
  }
}
</script>

<style lang="sass">
.app-header
    background-color: $primary
    color: white
    *
        color: white

.app-header__page-name
  flex-grow: 2
  display: none


.app-header__top
    height: 60px
    justify-content: center

.app-header__logo
    flex-grow: 2
    background-image: url('../assets/img/logo_white.svg')
    height: 30px
    background-repeat: no-repeat
    background-position: center

.app-header-btn
    background-color: $success



.app-header__top
    display: flex
    align-items: center

.app-header__menu-icon
  display: none
  cursor: pointer
  font-size: 28px
  padding: 2px
  border-radius: 100%
  &:hover
    background-color: $darker

.app-header__links.app-links
  display: flex
  a
    color: white
    text-decoration: none
    padding: 4px 20px
    border-top-left-radius: $border-radius
    border-top-right-radius: $border-radius
    &.router-link-exact-active, &.router-link-exact-active:hover
        background-color: white
        color: $primary
    &:hover
        background-color: $darker

@media screen and (max-width: 480px)
  .app-header__top
    height: 50px

  .app-header__links.app-links
    display: none

  .app-header__menu-icon
    display: inline-flex

  .app-header__logo
    background-image: url('../assets/img/logo_white_mini.svg')
    height: 20px
    background-position: left
    flex-grow: 1

  .app-header__page-name
    display: block
</style>
