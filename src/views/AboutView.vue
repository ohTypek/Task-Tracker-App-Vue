<template>
  <div>
    <div style="text-align: center; margin: 20px; margin-top: 40px;">
      <p>
        Zrobiono z poradnikem z Youtube, stworzonym przez Traversy Media. <br>
        Przetłumaczone przez{{ owner }} <br>
        Naprawiono kod za pomocą StackOverflow.
      </p>
      <div>
        <a href="https://github.com/ohTypek" target="_blank">
          <i class="fa-brands fa-github" @click="href"> </i>
        </a>
        <a href="https://twitter.com/OhTypek" target="_blank">
          <i class="fa-brands fa-twitter" style="margin-left: 10px;"> </i>
        </a>
      </div>
      <router-link to="/">
        <Button style="margin-top: 25px;" text="Wróć" color="blue" class="btn" />
      </router-link>
    </div>
    <h3 style="text-align: end;">Version 1.0.0</h3>
  </div>
</template>

<script>
import ButtonC from '../components/ButtonC.vue'

export default {
  data() {
    return {
      owner: ' ohTypek' // start with space | it's a feature, you can remove if you want
    }
  },
  components: {
    Button: ButtonC
  }
}
</script>

<style scoped>
  i {
    font-size: 175%;
    margin-top: 10px;
  }
  a {
    color: #000;
  }
  p {
    font-size: 110%;
  }
</style>