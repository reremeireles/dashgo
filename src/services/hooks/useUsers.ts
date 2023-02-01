import { useQuery, UseQueryOptions } from "react-query";
import { api } from "../../services/api";

export type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

export type GetUsersResponse = {
  totalCount: number;
  users: User[];
}

let countError = 0;
let countSuccess = 0;
export async function getUsers(page: number): Promise<GetUsersResponse> {
  try {
    const { data, headers } = await api.get(process.env.API_URL + '/users', {
      params: {
          page,
        }
    })

  const totalCount = Number(headers['x-total-count'])

    const users: User[] = data.users.map((user: { id: any; name: any; email: any; createdAt: string | number | Date; }) => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
          day: '2-digit',
          month: 'long',
          year: 'numeric'
        })
      };
    });

  return {
    users,
    totalCount,
  };
  } catch (error) {
    return {} as GetUsersResponse;
  }
}

export function useUsers(page: number, options: any) {
  return useQuery<GetUsersResponse, any, GetUsersResponse>(['users', page], () => getUsers(page), {
    staleTime: 1000 * 60 * 10, // os dados ficam 10 min com o status fresh
    ...options
  })
}
