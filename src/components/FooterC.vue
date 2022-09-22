<template>
  <footer>
    <p>Copyright &copy; 2022</p>
    <router-link to="/about">O aplikacji</router-link>
  </footer>
</template>

<script>
export default {
  name: 'FooterC'
}
</script>

<style scoped>
  router-link {
    color: #1c1c60;
  }
  footer {
    margin-top: 30px;
    text-align: center;
  }
</style>