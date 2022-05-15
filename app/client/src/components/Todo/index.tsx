import { Flex } from "@chakra-ui/react"
import { TaskList } from "../TaskList"
import { style } from "./style"

export const Todo = () => {
    return <>
        <Flex className="baguiu" {...style}>
            <TaskList />
        </Flex>

    </>
}