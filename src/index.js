import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'

import { InMemoryCache } from 'apollo-cache-inmemory'

import { HttpLink } from 'apollo-link-http'

import { ApolloLink } from 'apollo-link'

// import { setContext } from 'apollo-link-context';

// import { CachePersistor } from 'apollo-cache-persist';

// import { RetryLink } from "apollo-link-retry";

import { createBrowserHistory } from 'history';

const http = new HttpLink({ uri:  'http://localhost:3000/graphql/' })


const client = new ApolloClient({
    link: ApolloLink.from([
        // retryLink,
        // authLink.concat(http),
        http
    ]),
    // uri: process.env.API_URl,
    cache: new InMemoryCache(),
    onError: err => {console.log(err)}
});


export const history = createBrowserHistory({
    basename: process.env.PUBLIC_URL
});



ReactDOM.render((
    <ApolloProvider client={client} addTypename={false}>
        <App/>
    </ApolloProvider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
