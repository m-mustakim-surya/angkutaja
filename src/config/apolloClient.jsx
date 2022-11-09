import {ApolloClient, InMemoryCache} from '@apollo/client'

const client = new ApolloClient({
    uri: "https://superb-primate-15.hasura.app/v1/graphql",
    cache: new InMemoryCache(),
    headers:{
        'x-hasura-admin-secret': "owlMs1nawDzWlB2l7MW003PahiIMwcuUxKilEBq5NZp0X2dBqyMr1W0kd4dYGjUV"
    }
})

export default client;