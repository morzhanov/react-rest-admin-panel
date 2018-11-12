import faker from 'faker'

const tasks = []

Array.from(Array(30)).forEach(id =>
  tasks.push({
    id,
    name: faker.random.word(),
    description: faker.random.words(),
    created: faker.date.recent(),
    updated: faker.internet.email(),
    status: id % 2
  })
)

export default tasks
