import { ref, computed } from 'vue'

export default function useFilterTodoList(todoList) {
  const filter = ref('all')
  const filteredTodoList = computed(() => {
    if (filter.value === 'all') {
      return todoList.value
    }
    return todoList.value.filter((item) => {
      return item.status === filter.value
    })
  })

  return {
    filter,
    filteredTodoList
  }
}
