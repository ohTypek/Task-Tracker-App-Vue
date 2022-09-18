<template>
  <div id="app">
    <div v-for="task in tasks" :key="task.id" >
      <Task @toggle-reminder="$emit('toggle-reminder', task.id)" :task="task" @delete-task="$emit('delete-task', task.id)" />
    </div>
  </div>
</template>

<script>
import TaskC from './TaskC.vue'

export default {
  name: 'TaskC',
  props: {
    tasks: []
  },
  components: {
    Task: TaskC
  },
  emits: ['delete-task', 'toggle-reminder']
}
</script>
