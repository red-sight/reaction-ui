<template>
  <div class="app-container">
    <app-drawer :show.sync="showDrawer" />
    <app-header @showDrawer="showDrawer = true" />
    <div class="page-width page">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    AppHeader: () => import('@/components/AppHeader.vue'),
    AppDrawer: () => import('@/components/AppDrawer.vue')
  },

  data() {
    return {
      showDrawer: false
    }
  }
}
</script>

<style lang="sass" scoped>
// .app-container
//   background-color: $page-color

.page
  padding: 20px 0
  text-align: left
  line-height: 1.5em
</style>
