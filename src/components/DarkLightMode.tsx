import { HStack, Switch, useColorMode } from "@chakra-ui/react";

const DarkLightMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack paddingRight={"15px"}>
      <Switch
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        colorScheme={"green"}
        whiteSpace="nowrap"
      >
        {colorMode === "light" ? "Dark" : "Light"}
      </Switch>
    </HStack>
  );
};

export default DarkLightMode;
