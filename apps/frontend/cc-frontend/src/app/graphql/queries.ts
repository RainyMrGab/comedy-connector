/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./cc-graphql.service";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getTeam = /* GraphQL */ `query GetTeam($id: ID!) {
  getTeam(id: $id) {
    id
    city
    contact {
      userId
      username
      firstName
      lastName
      operation
      id
      createdAt
      updatedAt
      userOperationTeamId
      __typename
    }
    interests
    name
    type
    verification {
      userId
      username
      firstName
      lastName
      operation
      id
      createdAt
      updatedAt
      userOperationTeamId
      __typename
    }
    createdAt
    updatedAt
    teamContactId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetTeamQueryVariables, APITypes.GetTeamQuery>;
export const listTeams = /* GraphQL */ `query ListTeams(
  $id: ID
  $filter: ModelTeamFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listTeams(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      city
      interests
      name
      type
      createdAt
      updatedAt
      teamContactId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListTeamsQueryVariables, APITypes.ListTeamsQuery>;
export const getUserOperation = /* GraphQL */ `query GetUserOperation($id: ID!) {
  getUserOperation(id: $id) {
    userId
    username
    firstName
    lastName
    operation
    team {
      id
      city
      interests
      name
      type
      createdAt
      updatedAt
      teamContactId
      __typename
    }
    id
    createdAt
    updatedAt
    userOperationTeamId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserOperationQueryVariables,
  APITypes.GetUserOperationQuery
>;
export const listUserOperations = /* GraphQL */ `query ListUserOperations(
  $filter: ModelUserOperationFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserOperations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      userId
      username
      firstName
      lastName
      operation
      id
      createdAt
      updatedAt
      userOperationTeamId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserOperationsQueryVariables,
  APITypes.ListUserOperationsQuery
>;
export const teamsByCity = /* GraphQL */ `query TeamsByCity(
  $city: String!
  $sortDirection: ModelSortDirection
  $filter: ModelTeamFilterInput
  $limit: Int
  $nextToken: String
) {
  teamsByCity(
    city: $city
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      city
      interests
      name
      type
      createdAt
      updatedAt
      teamContactId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.TeamsByCityQueryVariables,
  APITypes.TeamsByCityQuery
>;
export const teamsByType = /* GraphQL */ `query TeamsByType(
  $type: TeamType!
  $sortDirection: ModelSortDirection
  $filter: ModelTeamFilterInput
  $limit: Int
  $nextToken: String
) {
  teamsByType(
    type: $type
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      city
      interests
      name
      type
      createdAt
      updatedAt
      teamContactId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.TeamsByTypeQueryVariables,
  APITypes.TeamsByTypeQuery
>;
