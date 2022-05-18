import React from "react";
import { Checkbox, Editable, EditableInput, EditablePreview, Flex } from '@chakra-ui/react'
import { style } from "./style";

export type TaskType = {
    id: number
    title: string
    description?: string
}

export const Task: React.FC<TaskType> = ({ ...task }) => {
    return <>
        <Flex {...style}>
            <Flex w="3rem" align={"center"} justify={"center"}>
                <Checkbox />
            </Flex>
            <div className="task-info">
                <Editable placeholder="Título..." value={task.title}>
                    <EditablePreview />
                    <EditableInput />
                </Editable>
                <Editable placeholder="..." value={task.description}>
                    <EditablePreview />
                    <EditableInput />
                </Editable>
            </div>
        </Flex>
    </>
}