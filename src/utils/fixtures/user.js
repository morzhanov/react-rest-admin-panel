import faker from 'faker'

export default {
  id: 0,
  name: faker.name.firstName(),
  email: faker.internet.email()
}
