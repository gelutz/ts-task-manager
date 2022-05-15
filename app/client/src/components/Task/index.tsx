import React from "react";
import { Checkbox, Editable, EditableInput, EditablePreview, Flex } from '@chakra-ui/react'
import { style } from "../TaskList/style";

export type TaskType = {
    id: number
    title: string
    description?: string
}

export const Task: React.FC<TaskType> = ({ ...task }) => {
    return <>
        <Flex className="task" {...style.flex}>
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