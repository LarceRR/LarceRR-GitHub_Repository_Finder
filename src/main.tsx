import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Provider } from 'react-redux';
import { store } from './store/store.tsx';


export const headers = {
	"header": "HERE IS YOUR KEY. don't forget to add bearer firstly"
};

// Инициализация Apollo клиента, для возможности создавать GraphQL запросы
const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers
});

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>,
)
