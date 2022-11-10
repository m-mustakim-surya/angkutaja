import {ApolloClient, HttpLink, InMemoryCache, split} from '@apollo/client'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { getMainDefinition } from '@apollo/client/utilities';

const httpLink = new HttpLink({
    uri: "https://superb-primate-15.hasura.app/v1/graphql",
    headers:{
        'x-hasura-admin-secret': "owlMs1nawDzWlB2l7MW003PahiIMwcuUxKilEBq5NZp0X2dBqyMr1W0kd4dYGjUV"
    }
});

const wsLink = new GraphQLWsLink(createClient({
    url: 'wss://superb-primate-15.hasura.app/v1/graphql',
    connectionParams:{
        headers:{
            'x-hasura-admin-secret': "owlMs1nawDzWlB2l7MW003PahiIMwcuUxKilEBq5NZp0X2dBqyMr1W0kd4dYGjUV"
        }
    }
}));

const splitLink = split(
    ({query}) =>{
        const definition = getMainDefinition(query);
        return(
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        );
    },
    wsLink,
    httpLink,
);

const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
})

export default client;