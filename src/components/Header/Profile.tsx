import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
        <Text>Rere Meireles</Text>
        <Text color="gray.300" fontSize="small">
          renatameirelesbatista@gmail.com
        </Text>
      </Box>
      )}

      <Avatar size="md"name="Renata Meireles" src="https://github.com/reremeireles.png"/>
    </Flex>

  );
}
