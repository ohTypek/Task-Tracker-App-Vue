<template>
  <header>
    <h1>{{ title }}</h1>
    <Button v:show="homePage" @btn-click="$emit('toggle-add-task')" :text="showAddTask ? 'Zamknij' : 'Dodaj Zadanie'" :color="showAddTask ? 'red' : 'green' "/>
  </header>
</template>

<script>
import ButtonC from './ButtonC.vue';

export default {
  name: 'HeaderPart',
  props: {
    title: String,
    showAddTask: Boolean,
  },
  components: {
    Button: ButtonC
  },
  computed: {
    homePage() {
      if (this.$router.currentRoute === '/') {
        return true
      } else {
        return false
      }
    }
  },
  emits: ['toggle-add-task']
}
</script>

<style scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
</style>