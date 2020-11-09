import { rule, shield } from 'graphql-shield';

const isAuthenticated = rule()((parent, args, { log, headers }) => {
  return false
});

const permissions = shield({
  Query: {
    createUser: isAuthenticated
  }
});

export default permissions;