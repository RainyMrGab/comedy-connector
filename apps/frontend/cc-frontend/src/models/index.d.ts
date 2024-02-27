import { ModelInit, MutableModel, __modelMeta__, OptionallyManagedIdentifier, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-expect-error - generated file
import { LazyLoading, LazyLoadingDisabled, AsyncItem } from "aws-amplify/datastore";

export enum TeamType {
  PRACTICE = "PRACTICE",
  PERFORMANCE = "PERFORMANCE"
}

export enum Operation {
  CREATE = "CREATE",
  VERIFY = "VERIFY"
}

export enum Interest {
  BOOKING = "BOOKING",
  NEW_MEMBERS = "NEW_MEMBERS",
  NEW_COACH = "NEW_COACH"
}



type EagerTeam = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<Team, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly city: string;
  readonly contact?: UserOperation | null;
  readonly interests?: (Interest | null)[] | Array<keyof typeof Interest> | null;
  readonly name: string;
  readonly type: TeamType | keyof typeof TeamType;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly teamContactId?: string | null;
}

type LazyTeam = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<Team, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly city: string;
  readonly contact: AsyncItem<UserOperation | undefined>;
  readonly interests?: (Interest | null)[] | Array<keyof typeof Interest> | null;
  readonly name: string;
  readonly type: TeamType | keyof typeof TeamType;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly teamContactId?: string | null;
}

export declare type Team = LazyLoading extends LazyLoadingDisabled ? EagerTeam : LazyTeam

export declare const Team: (new (init: ModelInit<Team>) => Team) & {
  copyOf(source: Team, mutator: (draft: MutableModel<Team>) => MutableModel<Team> | void): Team;
}

type EagerUserOperation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserOperation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId: string;
  readonly username?: string | null;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly operation: Operation | keyof typeof Operation;
  readonly team?: Team | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userOperationTeamId?: string | null;
}

type LazyUserOperation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserOperation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId: string;
  readonly username?: string | null;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly operation: Operation | keyof typeof Operation;
  readonly team: AsyncItem<Team | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userOperationTeamId?: string | null;
}

export declare type UserOperation = LazyLoading extends LazyLoadingDisabled ? EagerUserOperation : LazyUserOperation

export declare const UserOperation: (new (init: ModelInit<UserOperation>) => UserOperation) & {
  copyOf(source: UserOperation, mutator: (draft: MutableModel<UserOperation>) => MutableModel<UserOperation> | void): UserOperation;
}
