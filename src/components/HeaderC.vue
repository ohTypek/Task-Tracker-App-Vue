<template>
  <header>
    <h1>{{ title }}</h1>
    <Button @btn-click="$emit('toggle-add-task')" :text="showAddTask ? 'Close' : 'Add Task'" :color="showAddTask ? 'red' : 'green' "/>
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