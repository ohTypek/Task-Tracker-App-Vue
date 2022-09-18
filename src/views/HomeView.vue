<template>
  <div>
    <AddTask v-show="showAddTask" @add-task="addTask" />
    <Tasks :tasks="tasks" @delete-task="deleteTask" @toggle-reminder="toggleReminder"/>
  </div>
</template>

<script>
import TaskC from '../components/TasksC.vue'
import AddTaskC from '../components/AddTask.vue'

export default {
  data() {
    return {
      tasks: [],
    }
  },
  props: {
    showAddTask: Boolean
  },
  components: {
    Tasks: TaskC,
    AddTask: AddTaskC,
  },
  methods: {
    async addTask(task) {
      const res = await fetch('api/tasks', {
        method: "POST",
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(task)
      })

      const data = await res.json()

      this.tasks = [...this.tasks, data]
    },
    async deleteTask(id) {
      if (confirm('Czy jesteś pewny?')) {
        const res = await fetch(`api/tasks/${id}`, {
          method: 'DELETE'
        })

        res.status === 200 ? (this.tasks = this.tasks.filter((task) => task.id !== id)) : alert('Error while deleting task')
      }
    },
    async toggleReminder(id) {
      const taskTotoggle = await this.fetchTask(id)
      const updTask = { ...taskTotoggle, reminder: !taskTotoggle.reminder }

      const res = await fetch(`api/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(updTask)
      })

      const data = await res.json()

      this.tasks = this.tasks.map((task) => task.id === id ? {...task, reminder: !data.reminder} : task)
    },
    async fetchTasks() {
      const res = await fetch('api/tasks')

      const data = await res.json()

      return data
    },
    async fetchTask(id) {
      const res = await fetch(`api/tasks/${id}`)

      const data = await res.json()

      return data
    },
  },
  async created() {
    this.tasks = await this.fetchTasks()
  }
}
</script>