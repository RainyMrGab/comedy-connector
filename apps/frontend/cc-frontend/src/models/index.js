// @ts-check
import { initSchema } from 'aws-amplify/datastore';
import { schema } from './schema';

const TeamType = {
  "PRACTICE": "PRACTICE",
  "PERFORMANCE": "PERFORMANCE"
};

const Operation = {
  "CREATE": "CREATE",
  "VERIFY": "VERIFY"
};

const Interest = {
  "BOOKING": "BOOKING",
  "NEW_MEMBERS": "NEW_MEMBERS",
  "NEW_COACH": "NEW_COACH"
};

const { Team, UserOperation } = initSchema(schema);

export {
  Team,
  UserOperation,
  TeamType,
  Operation,
  Interest
};
