import { Flex } from "@chakra-ui/react"
import { TaskList } from "../TaskList"

export const Todo = () => {
    return <>
        <Flex w="100vw" h="100hw" justify={"center"}>
            <TaskList />
        </Flex>

    </>
}