<template>
  <div>
    <p>Copyright &copy; 2022</p>
    <router-link go="/about">About</router-link>
  </div>
</template>

<script>
export default {
  name: 'FooterC'
}
</script>

<style>
  a {
    color: #333;
  }
  footer {
    margin-top: 30px;
    text-align: center;
  }
</style>