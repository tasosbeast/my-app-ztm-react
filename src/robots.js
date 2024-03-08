import { faker } from "https://esm.sh/@faker-js/faker";

export const robots = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  name: faker.person.fullName(),
  username: faker.internet.userName(),
  email: faker.internet.email(),
}));
