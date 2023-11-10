import { Button } from "@chakra-ui/react";

export default function ClearAll({ clearAllTask }) {
  const handleClearAll = () => {
    clearAllTask();
  };

  return (
    <Button  
      onClick={handleClearAll}
      backgroundColor="red"
      color="white"
      size="md"
      w="70px"
      h="30px"
      padding="20px"

    >
      Clear All
    </Button>
  );
}
