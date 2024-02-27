/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTeamInput = {
  id?: string | null,
  city: string,
  interests?: Array< Interest | null > | null,
  name: string,
  type: TeamType,
  teamContactId?: string | null,
};

export enum Interest {
  BOOKING = "BOOKING",
  NEW_MEMBERS = "NEW_MEMBERS",
  NEW_COACH = "NEW_COACH",
}


export enum TeamType {
  PRACTICE = "PRACTICE",
  PERFORMANCE = "PERFORMANCE",
}


export type ModelTeamConditionInput = {
  city?: ModelStringInput | null,
  interests?: ModelInterestListInput | null,
  name?: ModelStringInput | null,
  type?: ModelTeamTypeInput | null,
  and?: Array< ModelTeamConditionInput | null > | null,
  or?: Array< ModelTeamConditionInput | null > | null,
  not?: ModelTeamConditionInput | null,
  teamContactId?: ModelIDInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
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
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelInterestListInput = {
  eq?: Array< Interest | null > | null,
  ne?: Array< Interest | null > | null,
  contains?: Interest | null,
  notContains?: Interest | null,
};

export type ModelTeamTypeInput = {
  eq?: TeamType | null,
  ne?: TeamType | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Team = {
  __typename: "Team",
  id: string,
  city: string,
  contact?: UserOperation | null,
  interests?: Array< Interest | null > | null,
  name: string,
  type: TeamType,
  verification?: UserOperation | null,
  createdAt: string,
  updatedAt: string,
  teamContactId?: string | null,
};

export type UserOperation = {
  __typename: "UserOperation",
  userId: string,
  username?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  operation: Operation,
  team?: Team | null,
  id: string,
  createdAt: string,
  updatedAt: string,
  userOperationTeamId?: string | null,
};

export enum Operation {
  CREATE = "CREATE",
  VERIFY = "VERIFY",
}


export type UpdateTeamInput = {
  id: string,
  city?: string | null,
  interests?: Array< Interest | null > | null,
  name?: string | null,
  type?: TeamType | null,
  teamContactId?: string | null,
};

export type DeleteTeamInput = {
  id: string,
};

export type CreateUserOperationInput = {
  userId: string,
  username?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  operation: Operation,
  id?: string | null,
  userOperationTeamId?: string | null,
};

export type ModelUserOperationConditionInput = {
  userId?: ModelStringInput | null,
  username?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  operation?: ModelOperationInput | null,
  and?: Array< ModelUserOperationConditionInput | null > | null,
  or?: Array< ModelUserOperationConditionInput | null > | null,
  not?: ModelUserOperationConditionInput | null,
  userOperationTeamId?: ModelIDInput | null,
};

export type ModelOperationInput = {
  eq?: Operation | null,
  ne?: Operation | null,
};

export type UpdateUserOperationInput = {
  userId?: string | null,
  username?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  operation?: Operation | null,
  id: string,
  userOperationTeamId?: string | null,
};

export type DeleteUserOperationInput = {
  id: string,
};

export type ModelTeamFilterInput = {
  id?: ModelIDInput | null,
  city?: ModelStringInput | null,
  interests?: ModelInterestListInput | null,
  name?: ModelStringInput | null,
  type?: ModelTeamTypeInput | null,
  and?: Array< ModelTeamFilterInput | null > | null,
  or?: Array< ModelTeamFilterInput | null > | null,
  not?: ModelTeamFilterInput | null,
  teamContactId?: ModelIDInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelTeamConnection = {
  __typename: "ModelTeamConnection",
  items:  Array<Team | null >,
  nextToken?: string | null,
};

export type ModelUserOperationFilterInput = {
  userId?: ModelStringInput | null,
  username?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  operation?: ModelOperationInput | null,
  and?: Array< ModelUserOperationFilterInput | null > | null,
  or?: Array< ModelUserOperationFilterInput | null > | null,
  not?: ModelUserOperationFilterInput | null,
  userOperationTeamId?: ModelIDInput | null,
};

export type ModelUserOperationConnection = {
  __typename: "ModelUserOperationConnection",
  items:  Array<UserOperation | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionTeamFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  city?: ModelSubscriptionStringInput | null,
  interests?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTeamFilterInput | null > | null,
  or?: Array< ModelSubscriptionTeamFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionUserOperationFilterInput = {
  userId?: ModelSubscriptionStringInput | null,
  username?: ModelSubscriptionStringInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  operation?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserOperationFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserOperationFilterInput | null > | null,
};

export type CreateTeamMutationVariables = {
  input: CreateTeamInput,
  condition?: ModelTeamConditionInput | null,
};

export type CreateTeamMutation = {
  createTeam?:  {
    __typename: "Team",
    id: string,
    city: string,
    contact?:  {
      __typename: "UserOperation",
      userId: string,
      username?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      operation: Operation,
      id: string,
      createdAt: string,
      updatedAt: string,
      userOperationTeamId?: string | null,
    } | null,
    interests?: Array< Interest | null > | null,
    name: string,
    type: TeamType,
    verification?:  {
      __typename: "UserOperation",
      userId: string,
      username?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      operation: Operation,
      id: string,
      createdAt: string,
      updatedAt: string,
      userOperationTeamId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    teamContactId?: string | null,
  } | null,
};

export type UpdateTeamMutationVariables = {
  input: UpdateTeamInput,
  condition?: ModelTeamConditionInput | null,
};

export type UpdateTeamMutation = {
  updateTeam?:  {
    __typename: "Team",
    id: string,
    city: string,
    contact?:  {
      __typename: "UserOperation",
      userId: string,
      username?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      operation: Operation,
      id: string,
      createdAt: string,
      updatedAt: string,
      userOperationTeamId?: string | null,
    } | null,
    interests?: Array< Interest | null > | null,
    name: string,
    type: TeamType,
    verification?:  {
      __typename: "UserOperation",
      userId: string,
      username?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      operation: Operation,
      id: string,
      createdAt: string,
      updatedAt: string,
      userOperationTeamId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    teamContactId?: string | null,
  } | null,
};

export type DeleteTeamMutationVariables = {
  input: DeleteTeamInput,
  condition?: ModelTeamConditionInput | null,
};

export type DeleteTeamMutation = {
  deleteTeam?:  {
    __typename: "Team",
    id: string,
    city: string,
    contact?:  {
      __typename: "UserOperation",
      userId: string,
      username?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      operation: Operation,
      id: string,
      createdAt: string,
      updatedAt: string,
      userOperationTeamId?: string | null,
    } | null,
    interests?: Array< Interest | null > | null,
    name: string,
    type: TeamType,
    verification?:  {
      __typename: "UserOperation",
      userId: string,
      username?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      operation: Operation,
      id: string,
      createdAt: string,
      updatedAt: string,
      userOperationTeamId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    teamContactId?: string | null,
  } | null,
};

export type CreateUserOperationMutationVariables = {
  input: CreateUserOperationInput,
  condition?: ModelUserOperationConditionInput | null,
};

export type CreateUserOperationMutation = {
  createUserOperation?:  {
    __typename: "UserOperation",
    userId: string,
    username?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    operation: Operation,
    team?:  {
      __typename: "Team",
      id: string,
      city: string,
      interests?: Array< Interest | null > | null,
      name: string,
      type: TeamType,
      createdAt: string,
      updatedAt: string,
      teamContactId?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    userOperationTeamId?: string | null,
  } | null,
};

export type UpdateUserOperationMutationVariables = {
  input: UpdateUserOperationInput,
  condition?: ModelUserOperationConditionInput | null,
};

export type UpdateUserOperationMutation = {
  updateUserOperation?:  {
    __typename: "UserOperation",
    userId: string,
    username?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    operation: Operation,
    team?:  {
      __typename: "Team",
      id: string,
      city: string,
      interests?: Array< Interest | null > | null,
      name: string,
      type: TeamType,
      createdAt: string,
      updatedAt: string,
      teamContactId?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    userOperationTeamId?: string | null,
  } | null,
};

export type DeleteUserOperationMutationVariables = {
  input: DeleteUserOperationInput,
  condition?: ModelUserOperationConditionInput | null,
};

export type DeleteUserOperationMutation = {
  deleteUserOperation?:  {
    __typename: "UserOperation",
    userId: string,
    username?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    operation: Operation,
    team?:  {
      __typename: "Team",
      id: string,
      city: string,
      interests?: Array< Interest | null > | null,
      name: string,
      type: TeamType,
      createdAt: string,
      updatedAt: string,
      teamContactId?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    userOperationTeamId?: string | null,
  } | null,
};

export type GetTeamQueryVariables = {
  id: string,
};

export type GetTeamQuery = {
  getTeam?:  {
    __typename: "Team",
    id: string,
    city: string,
    contact?:  {
      __typename: "UserOperation",
      userId: string,
      username?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      operation: Operation,
      id: string,
      createdAt: string,
      updatedAt: string,
      userOperationTeamId?: string | null,
    } | null,
    interests?: Array< Interest | null > | null,
    name: string,
    type: TeamType,
    verification?:  {
      __typename: "UserOperation",
      userId: string,
      username?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      operation: Operation,
      id: string,
      createdAt: string,
      updatedAt: string,
      userOperationTeamId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    teamContactId?: string | null,
  } | null,
};

export type ListTeamsQueryVariables = {
  id?: string | null,
  filter?: ModelTeamFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListTeamsQuery = {
  listTeams?:  {
    __typename: "ModelTeamConnection",
    items:  Array< {
      __typename: "Team",
      id: string,
      city: string,
      interests?: Array< Interest | null > | null,
      name: string,
      type: TeamType,
      createdAt: string,
      updatedAt: string,
      teamContactId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserOperationQueryVariables = {
  id: string,
};

export type GetUserOperationQuery = {
  getUserOperation?:  {
    __typename: "UserOperation",
    userId: string,
    username?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    operation: Operation,
    team?:  {
      __typename: "Team",
      id: string,
      city: string,
      interests?: Array< Interest | null > | null,
      name: string,
      type: TeamType,
      createdAt: string,
      updatedAt: string,
      teamContactId?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    userOperationTeamId?: string | null,
  } | null,
};

export type ListUserOperationsQueryVariables = {
  filter?: ModelUserOperationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserOperationsQuery = {
  listUserOperations?:  {
    __typename: "ModelUserOperationConnection",
    items:  Array< {
      __typename: "UserOperation",
      userId: string,
      username?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      operation: Operation,
      id: string,
      createdAt: string,
      updatedAt: string,
      userOperationTeamId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type TeamsByCityQueryVariables = {
  city: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTeamFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type TeamsByCityQuery = {
  teamsByCity?:  {
    __typename: "ModelTeamConnection",
    items:  Array< {
      __typename: "Team",
      id: string,
      city: string,
      interests?: Array< Interest | null > | null,
      name: string,
      type: TeamType,
      createdAt: string,
      updatedAt: string,
      teamContactId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type TeamsByTypeQueryVariables = {
  type: TeamType,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTeamFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type TeamsByTypeQuery = {
  teamsByType?:  {
    __typename: "ModelTeamConnection",
    items:  Array< {
      __typename: "Team",
      id: string,
      city: string,
      interests?: Array< Interest | null > | null,
      name: string,
      type: TeamType,
      createdAt: string,
      updatedAt: string,
      teamContactId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTeamSubscriptionVariables = {
  filter?: ModelSubscriptionTeamFilterInput | null,
};

export type OnCreateTeamSubscription = {
  onCreateTeam?:  {
    __typename: "Team",
    id: string,
    city: string,
    contact?:  {
      __typename: "UserOperation",
      userId: string,
      username?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      operation: Operation,
      id: string,
      createdAt: string,
      updatedAt: string,
      userOperationTeamId?: string | null,
    } | null,
    interests?: Array< Interest | null > | null,
    name: string,
    type: TeamType,
    verification?:  {
      __typename: "UserOperation",
      userId: string,
      username?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      operation: Operation,
      id: string,
      createdAt: string,
      updatedAt: string,
      userOperationTeamId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    teamContactId?: string | null,
  } | null,
};

export type OnUpdateTeamSubscriptionVariables = {
  filter?: ModelSubscriptionTeamFilterInput | null,
};

export type OnUpdateTeamSubscription = {
  onUpdateTeam?:  {
    __typename: "Team",
    id: string,
    city: string,
    contact?:  {
      __typename: "UserOperation",
      userId: string,
      username?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      operation: Operation,
      id: string,
      createdAt: string,
      updatedAt: string,
      userOperationTeamId?: string | null,
    } | null,
    interests?: Array< Interest | null > | null,
    name: string,
    type: TeamType,
    verification?:  {
      __typename: "UserOperation",
      userId: string,
      username?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      operation: Operation,
      id: string,
      createdAt: string,
      updatedAt: string,
      userOperationTeamId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    teamContactId?: string | null,
  } | null,
};

export type OnDeleteTeamSubscriptionVariables = {
  filter?: ModelSubscriptionTeamFilterInput | null,
};

export type OnDeleteTeamSubscription = {
  onDeleteTeam?:  {
    __typename: "Team",
    id: string,
    city: string,
    contact?:  {
      __typename: "UserOperation",
      userId: string,
      username?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      operation: Operation,
      id: string,
      createdAt: string,
      updatedAt: string,
      userOperationTeamId?: string | null,
    } | null,
    interests?: Array< Interest | null > | null,
    name: string,
    type: TeamType,
    verification?:  {
      __typename: "UserOperation",
      userId: string,
      username?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      operation: Operation,
      id: string,
      createdAt: string,
      updatedAt: string,
      userOperationTeamId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    teamContactId?: string | null,
  } | null,
};

export type OnCreateUserOperationSubscriptionVariables = {
  filter?: ModelSubscriptionUserOperationFilterInput | null,
};

export type OnCreateUserOperationSubscription = {
  onCreateUserOperation?:  {
    __typename: "UserOperation",
    userId: string,
    username?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    operation: Operation,
    team?:  {
      __typename: "Team",
      id: string,
      city: string,
      interests?: Array< Interest | null > | null,
      name: string,
      type: TeamType,
      createdAt: string,
      updatedAt: string,
      teamContactId?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    userOperationTeamId?: string | null,
  } | null,
};

export type OnUpdateUserOperationSubscriptionVariables = {
  filter?: ModelSubscriptionUserOperationFilterInput | null,
};

export type OnUpdateUserOperationSubscription = {
  onUpdateUserOperation?:  {
    __typename: "UserOperation",
    userId: string,
    username?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    operation: Operation,
    team?:  {
      __typename: "Team",
      id: string,
      city: string,
      interests?: Array< Interest | null > | null,
      name: string,
      type: TeamType,
      createdAt: string,
      updatedAt: string,
      teamContactId?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    userOperationTeamId?: string | null,
  } | null,
};

export type OnDeleteUserOperationSubscriptionVariables = {
  filter?: ModelSubscriptionUserOperationFilterInput | null,
};

export type OnDeleteUserOperationSubscription = {
  onDeleteUserOperation?:  {
    __typename: "UserOperation",
    userId: string,
    username?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    operation: Operation,
    team?:  {
      __typename: "Team",
      id: string,
      city: string,
      interests?: Array< Interest | null > | null,
      name: string,
      type: TeamType,
      createdAt: string,
      updatedAt: string,
      teamContactId?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    userOperationTeamId?: string | null,
  } | null,
};
