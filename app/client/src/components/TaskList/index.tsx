import { Flex } from '@chakra-ui/react'
import { Task } from '../Task'


export const TaskList = () => {

    return <>
        <Flex align={"center"} justify={"center"} w="40rem" direction={"column"} borderRadius="md" border={"1px solid lightgrey"}>
            <Task key={1} id={1} title={"Task #1"} description="Yeah" />
            <Task key={2} id={1} title={"Task #1"} description="Yeah" />

        </Flex>

    </>
}