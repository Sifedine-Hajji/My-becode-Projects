import React from "react";
import { Flex, Link, Heading, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <Flex
      flexDir="column"
      width="100%"
      height="30vh"
      alignItems="center"
      justifyContent="center"
      backgroundImage="url(/img/background.jpg)"
    >
      <Heading as="h1" size="3xl" width="100%" textAlign="center" color="white">
        Becode Projects
      </Heading>
      <Text
        color="white"
        marginTop="10px"
        backgroundColor="rgba(0,0,0,0.5)"
        p="1"
      >
        This is a website that regroups some projects made during my formation
        at{" "}
        <Link href="https://becode.org/" target="_BLANK" color="blue.300">
          Becode.org
        </Link>{" "}
      </Text>
    </Flex>
  );
}
