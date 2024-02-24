/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateTeam: OnCreateTeamSubscription;
  onUpdateTeam: OnUpdateTeamSubscription;
  onDeleteTeam: OnDeleteTeamSubscription;
  onCreateUserOperation: OnCreateUserOperationSubscription;
  onUpdateUserOperation: OnUpdateUserOperationSubscription;
  onDeleteUserOperation: OnDeleteUserOperationSubscription;
};

export type CreateTeamInput = {
  id?: string | null;
  city: string;
  interests?: Array<Interest | null> | null;
  name: string;
  type: TeamType;
  teamContactId?: string | null;
};

export enum Interest {
  BOOKING = "BOOKING",
  NEW_MEMBERS = "NEW_MEMBERS",
  NEW_COACH = "NEW_COACH"
}

export enum TeamType {
  PRACTICE = "PRACTICE",
  PERFORMANCE = "PERFORMANCE"
}

export type ModelTeamConditionInput = {
  city?: ModelStringInput | null;
  interests?: ModelInterestListInput | null;
  name?: ModelStringInput | null;
  type?: ModelTeamTypeInput | null;
  and?: Array<ModelTeamConditionInput | null> | null;
  or?: Array<ModelTeamConditionInput | null> | null;
  not?: ModelTeamConditionInput | null;
  teamContactId?: ModelIDInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelInterestListInput = {
  eq?: Array<Interest | null> | null;
  ne?: Array<Interest | null> | null;
  contains?: Interest | null;
  notContains?: Interest | null;
};

export type ModelTeamTypeInput = {
  eq?: TeamType | null;
  ne?: TeamType | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type Team = {
  __typename: "Team";
  id: string;
  city: string;
  contact?: UserOperation | null;
  interests?: Array<Interest | null> | null;
  name: string;
  type: TeamType;
  verification?: UserOperation | null;
  createdAt: string;
  updatedAt: string;
  teamContactId?: string | null;
};

export type UserOperation = {
  __typename: "UserOperation";
  userId: string;
  username?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  operation: Operation;
  team?: Team | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  userOperationTeamId?: string | null;
};

export enum Operation {
  CREATE = "CREATE",
  VERIFY = "VERIFY"
}

export type UpdateTeamInput = {
  id: string;
  city?: string | null;
  interests?: Array<Interest | null> | null;
  name?: string | null;
  type?: TeamType | null;
  teamContactId?: string | null;
};

export type DeleteTeamInput = {
  id: string;
};

export type CreateUserOperationInput = {
  userId: string;
  username?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  operation: Operation;
  id?: string | null;
  userOperationTeamId?: string | null;
};

export type ModelUserOperationConditionInput = {
  userId?: ModelStringInput | null;
  username?: ModelStringInput | null;
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  operation?: ModelOperationInput | null;
  and?: Array<ModelUserOperationConditionInput | null> | null;
  or?: Array<ModelUserOperationConditionInput | null> | null;
  not?: ModelUserOperationConditionInput | null;
  userOperationTeamId?: ModelIDInput | null;
};

export type ModelOperationInput = {
  eq?: Operation | null;
  ne?: Operation | null;
};

export type UpdateUserOperationInput = {
  userId?: string | null;
  username?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  operation?: Operation | null;
  id: string;
  userOperationTeamId?: string | null;
};

export type DeleteUserOperationInput = {
  id: string;
};

export type ModelTeamFilterInput = {
  id?: ModelIDInput | null;
  city?: ModelStringInput | null;
  interests?: ModelInterestListInput | null;
  name?: ModelStringInput | null;
  type?: ModelTeamTypeInput | null;
  and?: Array<ModelTeamFilterInput | null> | null;
  or?: Array<ModelTeamFilterInput | null> | null;
  not?: ModelTeamFilterInput | null;
  teamContactId?: ModelIDInput | null;
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export type ModelTeamConnection = {
  __typename: "ModelTeamConnection";
  items: Array<Team | null>;
  nextToken?: string | null;
};

export type ModelUserOperationFilterInput = {
  userId?: ModelStringInput | null;
  username?: ModelStringInput | null;
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  operation?: ModelOperationInput | null;
  and?: Array<ModelUserOperationFilterInput | null> | null;
  or?: Array<ModelUserOperationFilterInput | null> | null;
  not?: ModelUserOperationFilterInput | null;
  userOperationTeamId?: ModelIDInput | null;
};

export type ModelUserOperationConnection = {
  __typename: "ModelUserOperationConnection";
  items: Array<UserOperation | null>;
  nextToken?: string | null;
};

export type ModelSubscriptionTeamFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  city?: ModelSubscriptionStringInput | null;
  interests?: ModelSubscriptionStringInput | null;
  name?: ModelSubscriptionStringInput | null;
  type?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionTeamFilterInput | null> | null;
  or?: Array<ModelSubscriptionTeamFilterInput | null> | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionUserOperationFilterInput = {
  userId?: ModelSubscriptionStringInput | null;
  username?: ModelSubscriptionStringInput | null;
  firstName?: ModelSubscriptionStringInput | null;
  lastName?: ModelSubscriptionStringInput | null;
  operation?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionUserOperationFilterInput | null> | null;
  or?: Array<ModelSubscriptionUserOperationFilterInput | null> | null;
};

export type CreateTeamMutation = {
  __typename: "Team";
  id: string;
  city: string;
  contact?: {
    __typename: "UserOperation";
    userId: string;
    username?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    operation: Operation;
    id: string;
    createdAt: string;
    updatedAt: string;
    userOperationTeamId?: string | null;
  } | null;
  interests?: Array<Interest | null> | null;
  name: string;
  type: TeamType;
  verification?: {
    __typename: "UserOperation";
    userId: string;
    username?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    operation: Operation;
    id: string;
    createdAt: string;
    updatedAt: string;
    userOperationTeamId?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  teamContactId?: string | null;
};

export type UpdateTeamMutation = {
  __typename: "Team";
  id: string;
  city: string;
  contact?: {
    __typename: "UserOperation";
    userId: string;
    username?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    operation: Operation;
    id: string;
    createdAt: string;
    updatedAt: string;
    userOperationTeamId?: string | null;
  } | null;
  interests?: Array<Interest | null> | null;
  name: string;
  type: TeamType;
  verification?: {
    __typename: "UserOperation";
    userId: string;
    username?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    operation: Operation;
    id: string;
    createdAt: string;
    updatedAt: string;
    userOperationTeamId?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  teamContactId?: string | null;
};

export type DeleteTeamMutation = {
  __typename: "Team";
  id: string;
  city: string;
  contact?: {
    __typename: "UserOperation";
    userId: string;
    username?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    operation: Operation;
    id: string;
    createdAt: string;
    updatedAt: string;
    userOperationTeamId?: string | null;
  } | null;
  interests?: Array<Interest | null> | null;
  name: string;
  type: TeamType;
  verification?: {
    __typename: "UserOperation";
    userId: string;
    username?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    operation: Operation;
    id: string;
    createdAt: string;
    updatedAt: string;
    userOperationTeamId?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  teamContactId?: string | null;
};

export type CreateUserOperationMutation = {
  __typename: "UserOperation";
  userId: string;
  username?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  operation: Operation;
  team?: {
    __typename: "Team";
    id: string;
    city: string;
    interests?: Array<Interest | null> | null;
    name: string;
    type: TeamType;
    createdAt: string;
    updatedAt: string;
    teamContactId?: string | null;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  userOperationTeamId?: string | null;
};

export type UpdateUserOperationMutation = {
  __typename: "UserOperation";
  userId: string;
  username?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  operation: Operation;
  team?: {
    __typename: "Team";
    id: string;
    city: string;
    interests?: Array<Interest | null> | null;
    name: string;
    type: TeamType;
    createdAt: string;
    updatedAt: string;
    teamContactId?: string | null;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  userOperationTeamId?: string | null;
};

export type DeleteUserOperationMutation = {
  __typename: "UserOperation";
  userId: string;
  username?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  operation: Operation;
  team?: {
    __typename: "Team";
    id: string;
    city: string;
    interests?: Array<Interest | null> | null;
    name: string;
    type: TeamType;
    createdAt: string;
    updatedAt: string;
    teamContactId?: string | null;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  userOperationTeamId?: string | null;
};

export type GetTeamQuery = {
  __typename: "Team";
  id: string;
  city: string;
  contact?: {
    __typename: "UserOperation";
    userId: string;
    username?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    operation: Operation;
    id: string;
    createdAt: string;
    updatedAt: string;
    userOperationTeamId?: string | null;
  } | null;
  interests?: Array<Interest | null> | null;
  name: string;
  type: TeamType;
  verification?: {
    __typename: "UserOperation";
    userId: string;
    username?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    operation: Operation;
    id: string;
    createdAt: string;
    updatedAt: string;
    userOperationTeamId?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  teamContactId?: string | null;
};

export type ListTeamsQuery = {
  __typename: "ModelTeamConnection";
  items: Array<{
    __typename: "Team";
    id: string;
    city: string;
    interests?: Array<Interest | null> | null;
    name: string;
    type: TeamType;
    createdAt: string;
    updatedAt: string;
    teamContactId?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type GetUserOperationQuery = {
  __typename: "UserOperation";
  userId: string;
  username?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  operation: Operation;
  team?: {
    __typename: "Team";
    id: string;
    city: string;
    interests?: Array<Interest | null> | null;
    name: string;
    type: TeamType;
    createdAt: string;
    updatedAt: string;
    teamContactId?: string | null;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  userOperationTeamId?: string | null;
};

export type ListUserOperationsQuery = {
  __typename: "ModelUserOperationConnection";
  items: Array<{
    __typename: "UserOperation";
    userId: string;
    username?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    operation: Operation;
    id: string;
    createdAt: string;
    updatedAt: string;
    userOperationTeamId?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type TeamsByCityQuery = {
  __typename: "ModelTeamConnection";
  items: Array<{
    __typename: "Team";
    id: string;
    city: string;
    interests?: Array<Interest | null> | null;
    name: string;
    type: TeamType;
    createdAt: string;
    updatedAt: string;
    teamContactId?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type TeamsByTypeQuery = {
  __typename: "ModelTeamConnection";
  items: Array<{
    __typename: "Team";
    id: string;
    city: string;
    interests?: Array<Interest | null> | null;
    name: string;
    type: TeamType;
    createdAt: string;
    updatedAt: string;
    teamContactId?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateTeamSubscription = {
  __typename: "Team";
  id: string;
  city: string;
  contact?: {
    __typename: "UserOperation";
    userId: string;
    username?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    operation: Operation;
    id: string;
    createdAt: string;
    updatedAt: string;
    userOperationTeamId?: string | null;
  } | null;
  interests?: Array<Interest | null> | null;
  name: string;
  type: TeamType;
  verification?: {
    __typename: "UserOperation";
    userId: string;
    username?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    operation: Operation;
    id: string;
    createdAt: string;
    updatedAt: string;
    userOperationTeamId?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  teamContactId?: string | null;
};

export type OnUpdateTeamSubscription = {
  __typename: "Team";
  id: string;
  city: string;
  contact?: {
    __typename: "UserOperation";
    userId: string;
    username?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    operation: Operation;
    id: string;
    createdAt: string;
    updatedAt: string;
    userOperationTeamId?: string | null;
  } | null;
  interests?: Array<Interest | null> | null;
  name: string;
  type: TeamType;
  verification?: {
    __typename: "UserOperation";
    userId: string;
    username?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    operation: Operation;
    id: string;
    createdAt: string;
    updatedAt: string;
    userOperationTeamId?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  teamContactId?: string | null;
};

export type OnDeleteTeamSubscription = {
  __typename: "Team";
  id: string;
  city: string;
  contact?: {
    __typename: "UserOperation";
    userId: string;
    username?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    operation: Operation;
    id: string;
    createdAt: string;
    updatedAt: string;
    userOperationTeamId?: string | null;
  } | null;
  interests?: Array<Interest | null> | null;
  name: string;
  type: TeamType;
  verification?: {
    __typename: "UserOperation";
    userId: string;
    username?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    operation: Operation;
    id: string;
    createdAt: string;
    updatedAt: string;
    userOperationTeamId?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  teamContactId?: string | null;
};

export type OnCreateUserOperationSubscription = {
  __typename: "UserOperation";
  userId: string;
  username?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  operation: Operation;
  team?: {
    __typename: "Team";
    id: string;
    city: string;
    interests?: Array<Interest | null> | null;
    name: string;
    type: TeamType;
    createdAt: string;
    updatedAt: string;
    teamContactId?: string | null;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  userOperationTeamId?: string | null;
};

export type OnUpdateUserOperationSubscription = {
  __typename: "UserOperation";
  userId: string;
  username?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  operation: Operation;
  team?: {
    __typename: "Team";
    id: string;
    city: string;
    interests?: Array<Interest | null> | null;
    name: string;
    type: TeamType;
    createdAt: string;
    updatedAt: string;
    teamContactId?: string | null;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  userOperationTeamId?: string | null;
};

export type OnDeleteUserOperationSubscription = {
  __typename: "UserOperation";
  userId: string;
  username?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  operation: Operation;
  team?: {
    __typename: "Team";
    id: string;
    city: string;
    interests?: Array<Interest | null> | null;
    name: string;
    type: TeamType;
    createdAt: string;
    updatedAt: string;
    teamContactId?: string | null;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  userOperationTeamId?: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateTeam(
    input: CreateTeamInput,
    condition?: ModelTeamConditionInput
  ): Promise<CreateTeamMutation> {
    const statement = `mutation CreateTeam($input: CreateTeamInput!, $condition: ModelTeamConditionInput) {
        createTeam(input: $input, condition: $condition) {
          __typename
          id
          city
          contact {
            __typename
            userId
            username
            firstName
            lastName
            operation
            id
            createdAt
            updatedAt
            userOperationTeamId
          }
          interests
          name
          type
          verification {
            __typename
            userId
            username
            firstName
            lastName
            operation
            id
            createdAt
            updatedAt
            userOperationTeamId
          }
          createdAt
          updatedAt
          teamContactId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTeamMutation>response.data.createTeam;
  }
  async UpdateTeam(
    input: UpdateTeamInput,
    condition?: ModelTeamConditionInput
  ): Promise<UpdateTeamMutation> {
    const statement = `mutation UpdateTeam($input: UpdateTeamInput!, $condition: ModelTeamConditionInput) {
        updateTeam(input: $input, condition: $condition) {
          __typename
          id
          city
          contact {
            __typename
            userId
            username
            firstName
            lastName
            operation
            id
            createdAt
            updatedAt
            userOperationTeamId
          }
          interests
          name
          type
          verification {
            __typename
            userId
            username
            firstName
            lastName
            operation
            id
            createdAt
            updatedAt
            userOperationTeamId
          }
          createdAt
          updatedAt
          teamContactId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTeamMutation>response.data.updateTeam;
  }
  async DeleteTeam(
    input: DeleteTeamInput,
    condition?: ModelTeamConditionInput
  ): Promise<DeleteTeamMutation> {
    const statement = `mutation DeleteTeam($input: DeleteTeamInput!, $condition: ModelTeamConditionInput) {
        deleteTeam(input: $input, condition: $condition) {
          __typename
          id
          city
          contact {
            __typename
            userId
            username
            firstName
            lastName
            operation
            id
            createdAt
            updatedAt
            userOperationTeamId
          }
          interests
          name
          type
          verification {
            __typename
            userId
            username
            firstName
            lastName
            operation
            id
            createdAt
            updatedAt
            userOperationTeamId
          }
          createdAt
          updatedAt
          teamContactId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTeamMutation>response.data.deleteTeam;
  }
  async CreateUserOperation(
    input: CreateUserOperationInput,
    condition?: ModelUserOperationConditionInput
  ): Promise<CreateUserOperationMutation> {
    const statement = `mutation CreateUserOperation($input: CreateUserOperationInput!, $condition: ModelUserOperationConditionInput) {
        createUserOperation(input: $input, condition: $condition) {
          __typename
          userId
          username
          firstName
          lastName
          operation
          team {
            __typename
            id
            city
            interests
            name
            type
            createdAt
            updatedAt
            teamContactId
          }
          id
          createdAt
          updatedAt
          userOperationTeamId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUserOperationMutation>response.data.createUserOperation;
  }
  async UpdateUserOperation(
    input: UpdateUserOperationInput,
    condition?: ModelUserOperationConditionInput
  ): Promise<UpdateUserOperationMutation> {
    const statement = `mutation UpdateUserOperation($input: UpdateUserOperationInput!, $condition: ModelUserOperationConditionInput) {
        updateUserOperation(input: $input, condition: $condition) {
          __typename
          userId
          username
          firstName
          lastName
          operation
          team {
            __typename
            id
            city
            interests
            name
            type
            createdAt
            updatedAt
            teamContactId
          }
          id
          createdAt
          updatedAt
          userOperationTeamId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateUserOperationMutation>response.data.updateUserOperation;
  }
  async DeleteUserOperation(
    input: DeleteUserOperationInput,
    condition?: ModelUserOperationConditionInput
  ): Promise<DeleteUserOperationMutation> {
    const statement = `mutation DeleteUserOperation($input: DeleteUserOperationInput!, $condition: ModelUserOperationConditionInput) {
        deleteUserOperation(input: $input, condition: $condition) {
          __typename
          userId
          username
          firstName
          lastName
          operation
          team {
            __typename
            id
            city
            interests
            name
            type
            createdAt
            updatedAt
            teamContactId
          }
          id
          createdAt
          updatedAt
          userOperationTeamId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteUserOperationMutation>response.data.deleteUserOperation;
  }
  async GetTeam(id: string): Promise<GetTeamQuery> {
    const statement = `query GetTeam($id: ID!) {
        getTeam(id: $id) {
          __typename
          id
          city
          contact {
            __typename
            userId
            username
            firstName
            lastName
            operation
            id
            createdAt
            updatedAt
            userOperationTeamId
          }
          interests
          name
          type
          verification {
            __typename
            userId
            username
            firstName
            lastName
            operation
            id
            createdAt
            updatedAt
            userOperationTeamId
          }
          createdAt
          updatedAt
          teamContactId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTeamQuery>response.data.getTeam;
  }
  async ListTeams(
    id?: string,
    filter?: ModelTeamFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListTeamsQuery> {
    const statement = `query ListTeams($id: ID, $filter: ModelTeamFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listTeams(
          id: $id
          filter: $filter
          limit: $limit
          nextToken: $nextToken
          sortDirection: $sortDirection
        ) {
          __typename
          items {
            __typename
            id
            city
            interests
            name
            type
            createdAt
            updatedAt
            teamContactId
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (id) {
      gqlAPIServiceArguments.id = id;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTeamsQuery>response.data.listTeams;
  }
  async GetUserOperation(id: string): Promise<GetUserOperationQuery> {
    const statement = `query GetUserOperation($id: ID!) {
        getUserOperation(id: $id) {
          __typename
          userId
          username
          firstName
          lastName
          operation
          team {
            __typename
            id
            city
            interests
            name
            type
            createdAt
            updatedAt
            teamContactId
          }
          id
          createdAt
          updatedAt
          userOperationTeamId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUserOperationQuery>response.data.getUserOperation;
  }
  async ListUserOperations(
    filter?: ModelUserOperationFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListUserOperationsQuery> {
    const statement = `query ListUserOperations($filter: ModelUserOperationFilterInput, $limit: Int, $nextToken: String) {
        listUserOperations(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            userId
            username
            firstName
            lastName
            operation
            id
            createdAt
            updatedAt
            userOperationTeamId
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListUserOperationsQuery>response.data.listUserOperations;
  }
  async TeamsByCity(
    city: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelTeamFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<TeamsByCityQuery> {
    const statement = `query TeamsByCity($city: String!, $sortDirection: ModelSortDirection, $filter: ModelTeamFilterInput, $limit: Int, $nextToken: String) {
        teamsByCity(
          city: $city
          sortDirection: $sortDirection
          filter: $filter
          limit: $limit
          nextToken: $nextToken
        ) {
          __typename
          items {
            __typename
            id
            city
            interests
            name
            type
            createdAt
            updatedAt
            teamContactId
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      city
    };
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <TeamsByCityQuery>response.data.teamsByCity;
  }
  async TeamsByType(
    type: TeamType,
    sortDirection?: ModelSortDirection,
    filter?: ModelTeamFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<TeamsByTypeQuery> {
    const statement = `query TeamsByType($type: TeamType!, $sortDirection: ModelSortDirection, $filter: ModelTeamFilterInput, $limit: Int, $nextToken: String) {
        teamsByType(
          type: $type
          sortDirection: $sortDirection
          filter: $filter
          limit: $limit
          nextToken: $nextToken
        ) {
          __typename
          items {
            __typename
            id
            city
            interests
            name
            type
            createdAt
            updatedAt
            teamContactId
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      type
    };
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <TeamsByTypeQuery>response.data.teamsByType;
  }
  OnCreateTeamListener(
    filter?: ModelSubscriptionTeamFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTeam">>
  > {
    const statement = `subscription OnCreateTeam($filter: ModelSubscriptionTeamFilterInput) {
        onCreateTeam(filter: $filter) {
          __typename
          id
          city
          contact {
            __typename
            userId
            username
            firstName
            lastName
            operation
            id
            createdAt
            updatedAt
            userOperationTeamId
          }
          interests
          name
          type
          verification {
            __typename
            userId
            username
            firstName
            lastName
            operation
            id
            createdAt
            updatedAt
            userOperationTeamId
          }
          createdAt
          updatedAt
          teamContactId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTeam">>
    >;
  }

  OnUpdateTeamListener(
    filter?: ModelSubscriptionTeamFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTeam">>
  > {
    const statement = `subscription OnUpdateTeam($filter: ModelSubscriptionTeamFilterInput) {
        onUpdateTeam(filter: $filter) {
          __typename
          id
          city
          contact {
            __typename
            userId
            username
            firstName
            lastName
            operation
            id
            createdAt
            updatedAt
            userOperationTeamId
          }
          interests
          name
          type
          verification {
            __typename
            userId
            username
            firstName
            lastName
            operation
            id
            createdAt
            updatedAt
            userOperationTeamId
          }
          createdAt
          updatedAt
          teamContactId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTeam">>
    >;
  }

  OnDeleteTeamListener(
    filter?: ModelSubscriptionTeamFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTeam">>
  > {
    const statement = `subscription OnDeleteTeam($filter: ModelSubscriptionTeamFilterInput) {
        onDeleteTeam(filter: $filter) {
          __typename
          id
          city
          contact {
            __typename
            userId
            username
            firstName
            lastName
            operation
            id
            createdAt
            updatedAt
            userOperationTeamId
          }
          interests
          name
          type
          verification {
            __typename
            userId
            username
            firstName
            lastName
            operation
            id
            createdAt
            updatedAt
            userOperationTeamId
          }
          createdAt
          updatedAt
          teamContactId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTeam">>
    >;
  }

  OnCreateUserOperationListener(
    filter?: ModelSubscriptionUserOperationFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateUserOperation">>
  > {
    const statement = `subscription OnCreateUserOperation($filter: ModelSubscriptionUserOperationFilterInput) {
        onCreateUserOperation(filter: $filter) {
          __typename
          userId
          username
          firstName
          lastName
          operation
          team {
            __typename
            id
            city
            interests
            name
            type
            createdAt
            updatedAt
            teamContactId
          }
          id
          createdAt
          updatedAt
          userOperationTeamId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onCreateUserOperation">
      >
    >;
  }

  OnUpdateUserOperationListener(
    filter?: ModelSubscriptionUserOperationFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateUserOperation">>
  > {
    const statement = `subscription OnUpdateUserOperation($filter: ModelSubscriptionUserOperationFilterInput) {
        onUpdateUserOperation(filter: $filter) {
          __typename
          userId
          username
          firstName
          lastName
          operation
          team {
            __typename
            id
            city
            interests
            name
            type
            createdAt
            updatedAt
            teamContactId
          }
          id
          createdAt
          updatedAt
          userOperationTeamId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onUpdateUserOperation">
      >
    >;
  }

  OnDeleteUserOperationListener(
    filter?: ModelSubscriptionUserOperationFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteUserOperation">>
  > {
    const statement = `subscription OnDeleteUserOperation($filter: ModelSubscriptionUserOperationFilterInput) {
        onDeleteUserOperation(filter: $filter) {
          __typename
          userId
          username
          firstName
          lastName
          operation
          team {
            __typename
            id
            city
            interests
            name
            type
            createdAt
            updatedAt
            teamContactId
          }
          id
          createdAt
          updatedAt
          userOperationTeamId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onDeleteUserOperation">
      >
    >;
  }
}
