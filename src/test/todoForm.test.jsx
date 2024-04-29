import { render,screen } from "@testing-library/react";
import { expect, test, vitest } from "vitest";
import { TodoForm } from "../components/TodoForm";
import { TodoWrapper } from "../components/TodoWrapper";
import userEvent from "@testing-library/user-event";
//1-form render correct
test("item form renders correctly",()=> {
    render(<TodoWrapper/>)
    const title = screen.getByTestId("app-title")
    const input = screen.getByTestId("task-name")
    const button = screen.getByTestId("task-add-btn")
    expect(title).toBeInTheDocument()
    expect(input).toBeInTheDocument()
    expect(button).toBeInTheDocument()

})
//2-when user type value in text box the value should be chnaged
test("input value should be change",async()=> {
    const mock = vitest.fn()
    render(<TodoForm todos={[]} setTodos={mock}/>)
    const input = screen.getByTestId("task-name")
    await userEvent.type(input,"task1")
    expect(input).toHaveValue("task1")
})
//3-when user click in submit if the input empty the error msg is display
test("when user click in submit if the input empty the error msg is display",async()=> {
    const mock = vitest.fn()
    render(<TodoForm todos={[]} setTodos={mock}/>)
    const button = screen.getByTestId("task-add-btn")
    await userEvent.click(button)
    const error = screen.getByTestId("error-message")
    expect(error).toBeInTheDocument()
    screen.debug()
})
//4-when user click add button the item is added 
test("when user click add button the item is added",async()=> {
    const mock = vitest.fn()
    render(<TodoForm todos={[]} setTodos={mock}/>)
    const input = screen.getByTestId("task-name")
    const button = screen.getByTestId("task-add-btn")
    await userEvent.type(input,"feras")
    await userEvent.click(button)
    expect(mock).toHaveBeenCalled()
} )
//5-when user click add button the textbox is empty
test("when user click add button the textbox is empty",async()=> {
    const mock = vitest.fn()
    render(<TodoForm todos={[]} setTodos={mock}/>)
    const input = screen.getByTestId("task-name")
    const button = screen.getByTestId("task-add-btn")
    await userEvent.type(input,"feras")
    await userEvent.click(button)
    expect(input).toHaveValue("")
})