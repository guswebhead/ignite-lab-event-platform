import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4nlfx880atf01xpcl9d2pxm/master',
    cache: new InMemoryCache()
})