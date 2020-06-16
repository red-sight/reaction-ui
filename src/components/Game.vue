<template>
  <div class="fullscreen-container">
    <div
      class="game-container"
      :class="{ 'game-container_blurred': showModal }"
    >
      <batak
        :activeSensor="activeSensor"
        :status="status"
        :counter="time"
        :score="score"
        @start="startGame"
        @success="increaseScore"
      />
    </div>

    <modal :show.sync="showModal">
      <template v-slot:title>Супер! Ваш результат:</template>
      <template v-slot:content>
        <div>
          <img :src="scoreImg" alt="" class="score-image" />
        </div>
        <div>
          Вы набрали {{ score }} баллов! Поделитесь вашим результатом с
          друзьями:
        </div>
      </template>
      <template v-slot:actions>
        <a :href="shareURL.VK" target="_blank">Поделиться ВКонтакте</a>
      </template>
    </modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeSensor: null,
      demo: setInterval(this.setActiveSensor, 1000),
      score: 0,
      status: false,
      time: 21,
      timeCounter: null,
      showModal: false
    }
  },

  components: {
    batak: () => import('./Batak.vue'),
    modal: () => import('./Modal.vue')
  },

  computed: {
    scoreImg() {
      return `img/scores/${this.score}.png`
    },

    shareURL() {
      return {
        VK: `https://vk.com/share.php?url=${window.location.origin}&title=Игра&image=${window.location.origin}/img/scores/0.png`
      }
    }
  },

  mounted() {
    document.documentElement.requestFullscreen()
  },

  methods: {
    setActiveSensor() {
      this.activeSensor = Math.floor(10 * Math.random())
      // console.log(this.activeSensor)
    },

    startGame() {
      if (!this.status) {
        console.log('start')
        this.status = true
        this.score = 0
        clearInterval(this.demo)
        this.timeCounter = setInterval(() => {
          if (this.time > 0) {
            this.time--
          } else {
            this.endGame()
          }
        }, 1000)
        setTimeout(this.endGame, 21000)
        this.setActiveSensor()
      }
    },

    endGame() {
      clearInterval(this.timeCounter)
      console.log('Your score: ' + this.score)
      this.status = false
      this.time = 21
      this.demo = setInterval(this.setActiveSensor, 1000)
      this.showModal = true
    },

    increaseScore() {
      if (this.status === true) {
        this.score++
        this.setActiveSensor()
      }
    }
  }
}
</script>

<style lang="sass" scoped>

.fullscreen-container
    background-color: black
    height: 100vh
    width: 100vw
    display: flex
    align-items: center


.game-container
    width: 100vw
    background-image: url('/img/bg-1.jpg')
    background-size: cover

.game-container_blurred
  filter: blur(2px) brightness(0.5)

.score-image
  max-width: 100%
</style>
