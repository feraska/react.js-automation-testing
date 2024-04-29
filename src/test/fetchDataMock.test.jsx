import { render, screen } from "@testing-library/react";
import { expect, test, vitest } from "vitest";
import FetchData from "../components/FetchData";
import { getPosts } from "../api/api";

test("have h1",async()=> {
    render(<FetchData/>)
    const ele = await screen.findAllByRole("heading")
    screen.debug()
     expect(ele[0]).toBeInTheDocument()

})