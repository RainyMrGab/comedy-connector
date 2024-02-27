/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./cc-graphql.service";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createTeam = /* GraphQL */ `mutation CreateTeam(
  $input: CreateTeamInput!
  $condition: ModelTeamConditionInput
) {
  createTeam(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateTeamMutationVariables,
  APITypes.CreateTeamMutation
>;
export const updateTeam = /* GraphQL */ `mutation UpdateTeam(
  $input: UpdateTeamInput!
  $condition: ModelTeamConditionInput
) {
  updateTeam(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateTeamMutationVariables,
  APITypes.UpdateTeamMutation
>;
export const deleteTeam = /* GraphQL */ `mutation DeleteTeam(
  $input: DeleteTeamInput!
  $condition: ModelTeamConditionInput
) {
  deleteTeam(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteTeamMutationVariables,
  APITypes.DeleteTeamMutation
>;
export const createUserOperation = /* GraphQL */ `mutation CreateUserOperation(
  $input: CreateUserOperationInput!
  $condition: ModelUserOperationConditionInput
) {
  createUserOperation(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserOperationMutationVariables,
  APITypes.CreateUserOperationMutation
>;
export const updateUserOperation = /* GraphQL */ `mutation UpdateUserOperation(
  $input: UpdateUserOperationInput!
  $condition: ModelUserOperationConditionInput
) {
  updateUserOperation(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserOperationMutationVariables,
  APITypes.UpdateUserOperationMutation
>;
export const deleteUserOperation = /* GraphQL */ `mutation DeleteUserOperation(
  $input: DeleteUserOperationInput!
  $condition: ModelUserOperationConditionInput
) {
  deleteUserOperation(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserOperationMutationVariables,
  APITypes.DeleteUserOperationMutation
>;
