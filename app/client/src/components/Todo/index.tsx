import { Flex, VStack } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { TaskType } from "../Task"
import { TaskList } from "../TaskList"
import { style } from "./style"

export const Todo = () => {

    const [tasks, setTasks] = useState<TaskType[]>([])

    useEffect(() => {
        setTasks([
            { title: 'Teste', 'description': 'none', id: 1 },
            { title: 'Teste #2', 'description': 'smtelse', id: 2 },
        ])
    }, [])

    return <>
        <VStack p={"4"}>
            <Flex {...style}>
                <TaskList tasks={tasks} />
                {/* <AddTask /> */}
            </Flex>
        </VStack>

    </>
}