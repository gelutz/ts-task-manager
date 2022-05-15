import { Flex } from '@chakra-ui/react'
import { Task } from '../Task'
import { style } from './style'

export const TaskList = () => {
    return <>
        <Flex {...style.flex}>
            <Task key={1} id={1} title={"Task #1"} description="Yeah" />
            <Task key={2} id={1} title={"Task #1"} description="Yeah" />

        </Flex>

    </>
}