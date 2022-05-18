import { Flex } from '@chakra-ui/react'
import { Task, TaskType } from '../Task'
import { style } from './style'

export const TaskList: React.FC<{ tasks: TaskType[] }> = ({ tasks }) => {
    return <>
        <Flex {...style}>
            {tasks && tasks.map((el) => {
                return <Task {...el} />
            })}
        </Flex>

    </>
}