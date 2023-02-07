import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://sa-east-1.cdn.hygraph.com/content/cldsriiu04jjr01uoa1s4h8tm/master",
  cache: new InMemoryCache(),
});
