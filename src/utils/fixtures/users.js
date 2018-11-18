import faker from 'faker'

export const users = []

Array.from(Array(0)).forEach((id, idx) =>
  users.push({
    id: idx + 1,
    name: faker.name.findName(),
    email: faker.internet.email(),
    type: idx % 2 ? 'Author' : 'Client'
  })
)

export const usersFilters = [{ name: 'type', options: ['Client', 'Author'] }]
