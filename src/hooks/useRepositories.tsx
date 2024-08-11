import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/requests/get_repositories';

// Хук, выполняющий запрос и возвращающий ответ с GraphQL сервера.
export const useRepository = (request: string, before: string, after: string) => {
	const { loading, error, data } = useQuery(GET_REPOSITORIES, {
		variables: {
			request: request,
			before: before,
			after: after
		},
	});

	const repositories = data;

	return { loading, error, repositories };
};