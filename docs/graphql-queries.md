# Queries

```graphql

mutation CreateUserOperation {
  createUserOperation(
    input: {userId: "1234", username: "brianmgray", firstName: "Brian", lastName: "Gray", operation: CREATE}
  ) {
    userId
    username
    firstName
    lastName
    operation
    id
    createdAt
  }
}

mutation CreateTeam {
  createTeam(
    input: {city: "pittsburgh", name: "BG Test Team", type: PERFORMANCE, interests: [BOOKING], teamContactId: "595388af-2927-4b50-9966-068409251ab2"}
  ) {
    id
    city
    contact {
      id
      firstName
      lastName
      operation
      createdAt
    }
    interests
    name
    type
    createdAt
  }
}

query TeamsByCity {
  teamsByCity(city: "pittsburgh") {
    nextToken
    items {
      city
      contact {
        firstName
        lastName
        createdAt
      }
      createdAt
      interests
      id
      name
      type
      verification {
        firstName
        lastName
        updatedAt
      }
    }
  }
}

```
