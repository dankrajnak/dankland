import { GraphQLClient } from "graphql-request";

const endpoint = "https://graphql.fauna.com/graphql";

export const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer fnAEA3pNaLACBqPgXfxZt8FCaqCmHhmaH4k6jhFd`,
  },
});
