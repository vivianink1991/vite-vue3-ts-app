import { ref, onMounted } from 'vue'

export default function useTodoList() {
  const todoList = ref([])
  const getTodoList = async () => {
    todoList.value = await Promise.resolve([
      {
        text: 'Singing',
        value: 'singing',
        status: 'done'
      },
      {
        text: 'Swimming',
        value: 'swimming',
        status: 'undo'
      }
    ])
  }

  onMounted(() => {
    getTodoList()
  })

  return {
    todoList,
    getTodoList
  }
}
