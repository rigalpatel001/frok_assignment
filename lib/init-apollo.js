import { ApolloClient, InMemoryCache, HttpLink ,ApolloLink} from 'apollo-boost'
import fetch from 'isomorphic-unfetch'


let apolloClient = null

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch
}


const httpLink = new HttpLink({ uri: 'http://localhost:8500/graphql' ,credentials: 'same-origin',});

	const authLink = new ApolloLink((operation, forward) => {
		// Retrieve the authorization token from local storage.
		const token = localStorage.getItem('token');
		// Use the setContext method to set the HTTP headers.
		operation.setContext({
			headers: {
				'x-token': token ? token : '',
			},
		});

		// Call the next link in the middleware chain.
		return forward(operation);
	});



function create (initialState) {
  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    //link: authLink.concat(httpLink),
    link: new HttpLink({
			uri: 'http://localhost:8500/graphql', // Server URL (must be absolute)
			credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
		}), 
    cache: new InMemoryCache().restore(initialState || {})
  })
}

export default function initApollo (initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState)
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState)
  }

  return apolloClient
}