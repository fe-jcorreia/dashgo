import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Fernando Correia</Text>
          <Text color="gray.300" fontSize="small">
            fe.jcorreia@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Fernando Correia"
        src="https://github.com/fe-jcorreia.png"
      />
    </Flex>
  );
}
