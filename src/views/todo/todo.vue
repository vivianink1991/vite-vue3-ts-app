<template>
  <div class="todo">
    <ul>
      <li v-for="item in list" :key="item.value">{{ item.text }}</li>
    </ul>
    <ul>
      <li v-for="item in filterTags" :key="item" @click="changeFilter(item)">{{ item }}</li>
    </ul>
    <input type="text" v-model="inputField" />
    <button @click="addTodo">Add</button>
  </div>
</template>
<script lang="ts">
import { ref } from 'vue'
import useTodoList from './compositions/useTodoList'
import useFilterTodoList from './compositions/useFilterTodoList'

export default {
  setup() {
    const { todoList } = useTodoList()
    const { filter, filteredTodoList } = useFilterTodoList(todoList)
    const filterTags = ref(['all', 'done', 'undo'])

    const inputField = ref('')
    return {
      list: filteredTodoList,
      filter,
      filterTags,
      inputField,
      todoList
    }
  },
  methods: {
    changeFilter(type: string) {
      this.filter = type
    },
    addTodo() {
      this.todoList.push({
        text: this.inputField,
        value: this.inputField,
        status: 'undo'
      })
    }
  }
}
</script>
