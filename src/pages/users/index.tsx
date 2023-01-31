import { Box, Button, Checkbox, Flex, Heading, Icon, Link, Spinner, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { RiAddLine } from "react-icons/ri";
import { Pagination } from "../../components/Pagination";
import { getUsers, GetUsersResponse, useUsers } from "../../services/hooks/useUsers";
import { useState } from "react";
import NextLink from "next/link";
import { queryClient } from "../../services/queryClient";
import { api } from "../../services/api";
import { GetServerSideProps } from "next";


export default function UserList({ users }: GetUsersResponse) {
  const [page, setPage] = useState(1);
  const { data, isLoading, isFetching, error } = useUsers(page, {
    initialData: users,
  })

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  async function handlePrefetchUser(userId: string) {
    await queryClient.prefetchQuery(['user', userId], async () => {
      const response = await api.get(`${process.env.API_URL}/users/${userId}`)

      return response.data;
    }, {
      staleTime: 1000 * 60 * 10, // os dados ficam 10 min com o status fresh
    })
  }

    return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
              <Heading size="lg" fontWeight="normal">
                Usuários

                { !isLoading && isFetching && <Spinner size="sm" color="gray.500" ml="4"/>}
              </Heading>

            <NextLink href="/users/create" passHref>
            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="pink"
              leftIcon={ <Icon as={RiAddLine} fontSize="20"/> }
            >
              Criar novo usuário
              </Button>
            </NextLink>
          </Flex>

          {isLoading || data === undefined ? (
            <Flex justify='center'>
              <Spinner />
            </Flex>
          ) : error ? (
              <Flex justify='center'>
                <Text>Falha ao carregar dados dos usuários</Text>
            </Flex>
            ) : (
              <>
                <Table colorScheme="whiteAlpha">
                  <Thead>
                    <Tr>
                      <Th px={["4", "4", "6"]} color="gray.300" width="8">
                        <Checkbox px="6" colorScheme="pink" />
                      </Th>
                      <Th>Usuário</Th>
                      { isWideVersion && <Th>Data de cadastro</Th> }
                      <Th width="8"></Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                      {data.users.map(user => {
                        return (
                          <Tr key={user.id}>
                            <Td px={["4", "4", "6"]}>
                              <Checkbox px="6" colorScheme="pink" />
                            </Td>
                            <Td>
                              <Box>
                                <Link color="purple.400" onMouseEnter={() => handlePrefetchUser(user.id)}>
                                  <Text fontWeight="bold">{user.name}</Text>
                                </Link>
                                <Text fontSize="sm" color="gray.300">{user.email}</Text>

                              </Box>
                            </Td>
                            {isWideVersion && <Td>{user.createdAt}</Td> }
                          </Tr>
                      )
                    })}
                  </Tbody>
                </Table>

                <Pagination
                  totalCountRegisters={data.totalCount}
                  currentPage={page}
                  onPageChange={setPage}
                />
              </>
          )}

        </Box>
      </Flex>
    </Box>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { users, totalCount } = await getUsers(1)
  return {
    props: {

    }
  }
}
