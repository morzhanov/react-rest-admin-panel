import faker from 'faker'

export const task = []

Array.from(Array(62)).forEach((id, idx) =>
  task.push({
    id: idx + 1,
    name: faker.random.word(),
    desc: faker.random.words(),
    status: idx % 3 ? 'Created' : idx % 5 ? 'In progress' : 'Closed',
    importance: idx % 4 ? 'Medium' : idx % 7 ? 'High' : 'Low'
  })
)

export const taskFilters = [
  { name: 'status', options: ['Created', 'In progress', 'Closed'] },
  { name: 'importance', options: ['Low', 'Medium', 'High'] }
]
