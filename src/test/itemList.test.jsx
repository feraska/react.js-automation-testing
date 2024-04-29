import { render,screen } from "@testing-library/react";
import ItemList from "../components/ItemList"
import { expect, test, vitest } from "vitest";
import userEvent from "@testing-library/user-event";
//1-check if component render 0 tasks
test("check if component render 0 tasks",async()=> {
    const mock = vitest.fn()
    render(<ItemList todos={[]} setTodos={mock}/>)
    const tasks = screen.queryAllByTestId("task")
    expect(tasks).toHaveLength(0)
})
//2-1-check if component render multiple tasks
test("check if component render multiple tasks",async()=> {
    const tasks = [
        {
            id:"1",
            task:"run",
            completed:false,
            isedisEditing:false
        },
        {
            id:"2",
            task:"eat",
            completed:false,
            isedisEditing:false
        },
        {
            id:"3",
            task:"go",
            completed:false,
            isedisEditing:false
        }
    ]
    const mock = vitest.fn()
    render(<ItemList todos={tasks} setTodos={mock}/>)
    const tasksQuery = screen.queryAllByTestId("task")
    expect(tasksQuery).toHaveLength(3)
})
//3-render edit-form
test("render edit-form",async()=> {
    const tasks = [{
        id:"1",
        task:"run",
        completed:false,
        isedisEditing:false
    }]
    const mock = vitest.fn()
    render(<ItemList todos={tasks} setTodos={mock}/>)
    const editBtn = screen.getByTestId("edit-btn")
    await userEvent.click(editBtn)
    const editFrom = screen.getByTestId("edit-form")
    expect(editFrom).toBeInTheDocument()
})
