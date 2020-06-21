<template>
  <div v-show="show" class="app-drawer">
    <div class="close" @click="hideDrawer">
      <close-icon />
    </div>
    <app-links />
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: true
    }
  },

  components: {
    CloseIcon: () => import('icons/Close.vue'),
    AppLinks: () => import('@/components/AppLinks.vue')
  },

  methods: {
    hideDrawer() {
      this.$emit('update:show', false)
    }
  }
}
</script>

<style lang="sass">
.app-drawer
  z-index: 100000
  position: absolute
  width: 100vw
  height: 100vh
  background-color: white

.app-drawer
  .close
    font-size: 28px
    cursor: pointer
    display: flex
    height: 50px
    justify-content: flex-end
    padding: 0 10px
    .close-icon
      border-radius: 100%
      &:hover
        background-color: $darker
      .material-design-icon__svg
        bottom: auto

  .app-links
    display: flex
    flex-direction: column
    a
      line-height: 50px
      text-align: right
      padding: 0 10px
      color: $primary
      text-decoration: none
      &:hover
        background-color: $darker
      &.router-link-active
        background-color: $primary
        color: white
</style>
