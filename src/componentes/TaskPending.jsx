import { Box } from "@chakra-ui/react";

export default function TaskPending({ tareasIncompletas }) {
  return (
    <Box pos="relative" left="150" top="0" >
      You have {tareasIncompletas()} pending tasks
    </Box>
  );
}
