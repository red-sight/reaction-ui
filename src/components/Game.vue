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
    <modal :show="showModal" />
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
      showModal: true
    }
  },

  components: {
    batak: () => import('./Batak.vue'),
    modal: () => import('./Modal.vue')
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
    background-image: url('../assets/img/bg-1.png')
    background-size: cover

.game-container_blurred
  filter: blur(2px) brightness(0.5)
</style>
