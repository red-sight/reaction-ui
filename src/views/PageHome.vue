<template>
  <div>
    <h3>Добро пожаловать!</h3>

    <card :img="cardImgSrc">
      Данный проект посвящен тренажеру "Реакция", являющийся разновидностью
      игровой конструкции "Батак", представленный посетителям тренингов
      <a href="https://dsflford.ru/" target="_blank"
        >"Академия Безопасного Вождения Ford"</a
      >. На нашем сайте вы можете поиграть в онлайн-версию тренажера и
      поделиться вашим результатом с друзьями!
    </card>

    <div class="play-btn-banner">
      <router-link class="btn" to="Game">
        <div class="icon"><play-icon /></div>
        <div class="title">Играть</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    Card: () => import('@/components/AppCard.vue'),
    PlayIcon: () => import('icons/GamepadVariant.vue')
  },

  computed: {
    cardImgSrc: () => `img/circle.png`
  }
}
</script>

<style lang="sass" scoped>
h3
  padding-bottom: 20px

.play-btn-banner
  width: 100%
  height: 150px
  display: flex
  border-radius: 5px
  position: relative
  align-items: center
  justify-content: center
  background: rgba(256, 256, 256,0.5)
  margin: 10px 0
  &::before
    content: ''
    background-image: url('/img/bg-1.jpg')
    background-size: cover
    border-radius: 5px
    width: 100%
    height: 150px
    position: absolute
    filter: opacity(0.5)
  .btn
    z-index: 100
    display: flex
    .icon
      font-size: 2em
      svg
        bottom: 0
    .title
      padding-left: 5px
      display: flex
      align-items: center
</style>
