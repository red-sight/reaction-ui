<template>
  <div class="app-container">
    <app-header></app-header>
    <div class="page-width page">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    AppHeader: () => import('@/components/AppHeader.vue')
  }
}
</script>

<style lang="sass" scoped>
.app-container
  // background-color: $page-color

.page
  background-color: white
</style>
