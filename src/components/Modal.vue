<template>
  <div v-show="show" class="modal-backdrop">
    <div class="modal">
      <div class="modal__title">
        Супер! Ваш результат:
      </div>
      <div class="modal__content">
        content
        <menu-icon />
      </div>
    </div>
  </div>
</template>

<script>
import MenuIcon from 'icons/Menu.vue'

export default {
  components: {
    MenuIcon
  },
  props: {
    show: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="sass" scoped>
.modal-backdrop
  position: absolute
  width: 100vw
  height: 100vh
  display: flex
  align-items: center
  justify-content: center

.modal
  width: 300px

.modal__title
  font-weight: bold
  text-transform: uppercase
  text-align: left
  background-color: $primary
  color: white
  padding: 10px 15px
  border-top-left-radius: 5px
  border-top-right-radius: 5px

.modal__content
  padding: 10px
  background-color: white
</style>
