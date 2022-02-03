export const MOCK_LOGINS = [
  {
    email: "test@example.com",
    username: "test",
    password: "test123",
  },
  {
    email: "test@test.pl",
    username: "testpl",
    password: "testpl123",
    name: "name",
    lastName: "last name",
    street: "street",
    houseNumber: 525,
    flatNumber: 353,
    zipCode: 79549,
    city: "city",
    country: "country",
    phoneNumber: 565746564,
    favourite: [1, 3, 5, 7],
    orders: [
      {
        id: 1,
        scooters: [
          {
            scooterId: 1,
            amount: 2,
          },
          {
            scooterId: 3,
            amount: 1,
          },
        ],
      },
    ],
  },
];
