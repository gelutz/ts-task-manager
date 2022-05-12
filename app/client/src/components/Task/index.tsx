import React from "react";
import { Checkbox, Editable, EditableInput, EditablePreview, Flex } from '@chakra-ui/react'

export type TaskType = {
    id: number
    title: string
    description?: string
}

export const Task: React.FC<TaskType> = ({ ...task }) => {
    return <>
        <Flex className="task" w="100%" borderBottom={"1px solid grey"}>
            <Flex w="3rem" align={"center"} justify={"center"}>
                <Checkbox />

            </Flex>
            <div className="task-info">

                <Editable placeholder="Título...">
                    <EditablePreview />
                    <EditableInput />
                </Editable>
                <Editable placeholder="...">
                    <EditablePreview />
                    <EditableInput />
                </Editable>
            </div>
        </Flex>
    </>
}