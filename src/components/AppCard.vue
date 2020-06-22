<template>
  <div class="card">
    <div class="card__img" v-if="img">
      <img :src="img" alt="" />
    </div>
    <div class="card__content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="sass" scoped>
.card
    display: flex
    .card__img
        img
            width: 100px
            padding-right: 20px

@media screen and (max-width: 480px)
    .card
        flex-wrap: wrap
        .card__img
            img
                width: 100%
                padding-right: unset
</style>
