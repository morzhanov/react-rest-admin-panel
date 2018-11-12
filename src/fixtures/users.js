import faker from 'faker'

const users = []

Array.from(Array(30)).forEach(id =>
  users.push({
    id,
    name: faker.name.findName(),
    email: faker.internet.email()
  })
)

export default users
