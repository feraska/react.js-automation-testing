import { render, screen } from "@testing-library/react"
import { expect, test, vitest } from "vitest"
import { EditTodoForm } from "../components/EditTodoForm"
import userEvent from "@testing-library/user-event"
import { toContainerCount } from "./customMacher"
//1-when user type value in text box the value should be chnaged
test("input value should be change",async()=> {
    const mock = vitest.fn()
    const task = {
            id:"1",
            task:"run",
            completed:false,
            isEditing:false
    }
    render(<EditTodoForm task={task} editTodo={mock}/>)
    const input = screen.getByTestId("edit-input")
    await userEvent.clear(input)
    await userEvent.type(input,"task1")
    expect(input).toHaveValue("task1")
})

//2-when cancel button
test("cancel button",async()=> {
    const mock = vitest.fn()
    const task = {
            id:"1",
            task:"run",
            completed:false,
            isEditing:false
    }
    render(<EditTodoForm task={task} editTodo={mock}/>)
    const input =  screen.getByTestId("edit-input")
    const cancelbtn = screen.getByTestId("cancel-btn")
    await userEvent.type(input,"feras")
    await userEvent.click(cancelbtn)
    expect(mock).toBeCalledWith(task.task,task.id)
})

//3-add button
test("add button",async()=> {
    const mock = vitest.fn()
    const task = {
            id:"1",
            task:"run",
            completed:false,
            isEditing:false
    }
    render(<EditTodoForm task={task} editTodo={mock}/>)
    const input =  screen.getByTestId("edit-input")
    const submit = screen.getByTestId("submit")
    userEvent.clear(input)
    await userEvent.type(input,"feras")
    await userEvent.click(submit)
    expect(mock).toHaveBeenCalled("feras",task.id)
    
})
