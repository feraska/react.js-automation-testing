import { render, screen } from "@testing-library/react";
import { expect, test, vitest } from "vitest";
import { Todo } from "../components/Todo";
import userEvent from "@testing-library/user-event";
//1-check if component renders one item
test("check if component renders one item",async()=> {
    const item = {
        id:"1",
        task:"run",
        completed:false,
        isedisEditing:false
    }
    render(<Todo task={item}/>)
    const itemElement = screen.getByTestId("task-item")
    expect(itemElement).toBeInTheDocument()

})
//2- toggle button correctly
test("toggle button correctly",async()=> {
        const item = {
            id:"1",
            task:"run",
            completed:false,
            isedisEditing:false
        }
        const mockToggle = vitest.fn()
        render(<Todo task={item} toggleComplete={mockToggle}/>)
        const toggle = screen.getByTestId("toggle")
        await userEvent.click(toggle)
        expect(mockToggle).toBeCalledWith(item.id)
})

//3- edit button correctly
test("edit button correctly",async()=> {
    const item = {
        id:"1",
        task:"run",
        completed:false,
        isedisEditing:false
    }
    const mockEditToDo = vitest.fn()
    render(<Todo task={item} editTodo={mockEditToDo}/>)
    const editBtn = screen.getByTestId("edit-btn")
    await userEvent.click(editBtn)
    expect(mockEditToDo).toBeCalledWith(item.id)
})
//4- delete button correctly
test("delete button correctly",async()=> {
    const item = {
        id:"1",
        task:"run",
        completed:false,
        isedisEditing:false
    }
    const mockDeleteTodo = vitest.fn()
    render(<Todo task={item} deleteTodo={mockDeleteTodo}/>)
    const editBtn = screen.getByTestId("delete-btn")
    await userEvent.click(editBtn)
    expect(mockDeleteTodo).toBeCalledWith(item.id)
})
