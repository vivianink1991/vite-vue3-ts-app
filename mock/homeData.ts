export default {
  url: '/api/home/list',
  method: 'get',
  response: () => {
    return {
      code: 0,
      data: {
        name: 'Lily'
      }
    }
  }
}
