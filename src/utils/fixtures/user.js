import faker from 'faker'

export const user = []

Array.from(Array(31)).forEach((id, idx) =>
  user.push({
    id: idx + 1,
    name: faker.name.findName(),
    email: faker.internet.email(),
    type: idx % 2 ? 'Author' : 'Client',
    isManager: !!(idx % 2)
  })
)

export const userFilters = [{ name: 'type', options: ['Client', 'Author'] }]
