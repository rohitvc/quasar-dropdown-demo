<template>
  <div class="todos-dropdown-container">
    <q-select
      ref="todos-dropdown"
      v-model="todo"
      use-input
      hide-selected
      fill-input
      input-debounce="400"
      label="Todos"
      :options="options"
      option-value="title"
      option-label="title"
      emit-value
      @filter="filterFn"
      @input="emitSelectedTodo"
      color="secondary"
      class="q-mr-lg"
      style="max-width=300px;"
    >
      <template v-slot:no-option>
        <q-item>
          <q-item-section class="text-grey"> No results </q-item-section>
        </q-item>
      </template>
    </q-select>
  </div>
</template>

<script>
import axios from '../server'
import { attachImport } from '../utils/helper'
import '../quasar'

export default {
  data () {
    return {
      todo: '',
      options: [],
      todos: []
    }
  },
  props: {
    token: {
      type: String
    }
  },
  created () {
    axios.defaults.headers.common.Authorization = `Bearer ${this.token}`
  },
  mounted () {
    attachImport(
      'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons'
    )
    attachImport(
      'https://cdn.jsdelivr.net/npm/quasar@1.9.12/dist/quasar.min.css'
    )
  },
  watch: {
    token (value) {
      axios.defaults.headers.common.Authorization = `Bearer ${value}`
    }
  },
  methods: {
    async filterFn (val, update, abort) {
      try {
        const response = await axios.get('/todos')
        this.todos = response.data
        console.log(this.$refs['todos-dropdown'])
        update(() => {
          this.options = response.data
        })
      } catch (e) {
        console.log('inside catch', e)
      }
    },
    emitSelectedTodo (value) {
      const [selectedTodo = {}] = this.todos.filter(
        (todo) => todo.title === value
      )
      console.log('selected todo', selectedTodo)
      this.$emit('selected-todo', selectedTodo)
    }
  }
}
</script>

<style lang="scss">
@import "@/styles/quasar.variables.scss";
@import "~@/styles/quasar.scss";
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
.todos-dropdown-container {
  max-width: 300px;
}
</style>
