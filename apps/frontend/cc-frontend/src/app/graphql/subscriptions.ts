/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./cc-graphql.service";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateTeam = /* GraphQL */ `subscription OnCreateTeam($filter: ModelSubscriptionTeamFilterInput) {
  onCreateTeam(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTeamSubscriptionVariables,
  APITypes.OnCreateTeamSubscription
>;
export const onUpdateTeam = /* GraphQL */ `subscription OnUpdateTeam($filter: ModelSubscriptionTeamFilterInput) {
  onUpdateTeam(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTeamSubscriptionVariables,
  APITypes.OnUpdateTeamSubscription
>;
export const onDeleteTeam = /* GraphQL */ `subscription OnDeleteTeam($filter: ModelSubscriptionTeamFilterInput) {
  onDeleteTeam(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTeamSubscriptionVariables,
  APITypes.OnDeleteTeamSubscription
>;
export const onCreateUserOperation = /* GraphQL */ `subscription OnCreateUserOperation(
  $filter: ModelSubscriptionUserOperationFilterInput
) {
  onCreateUserOperation(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserOperationSubscriptionVariables,
  APITypes.OnCreateUserOperationSubscription
>;
export const onUpdateUserOperation = /* GraphQL */ `subscription OnUpdateUserOperation(
  $filter: ModelSubscriptionUserOperationFilterInput
) {
  onUpdateUserOperation(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserOperationSubscriptionVariables,
  APITypes.OnUpdateUserOperationSubscription
>;
export const onDeleteUserOperation = /* GraphQL */ `subscription OnDeleteUserOperation(
  $filter: ModelSubscriptionUserOperationFilterInput
) {
  onDeleteUserOperation(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserOperationSubscriptionVariables,
  APITypes.OnDeleteUserOperationSubscription
>;
