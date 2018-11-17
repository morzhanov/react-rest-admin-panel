import faker from 'faker'

const users = []

Array.from(Array(30)).forEach((id, idx) =>
  users.push({
    id: idx + 1,
    name: faker.name.findName(),
    email: faker.internet.email()
  })
)

export default users
