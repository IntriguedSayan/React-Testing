import { render, screen } from "@testing-library/react"
import Counter from "./Counter"
import '@testing-library/jest-dom'
import {toBeCalled,
    toBeCalledTimes,
    toBeInTheDocument,} from "@testing-library/jest-dom"

describe("Testing counter component",()=>{
    it("Should be present in the DOM",()=>{
        render(<Counter></Counter>)
        let counter=screen.getByTestId("counter")
        expect(counter).toBeInTheDocument()
    })
    it("Should have a add button",()=>{{
        render(<Counter></Counter>)
        let addBtn=screen.getByTestId("addBtn")
        expect(addBtn).toBeInTheDocument()
    }})
    it("Should have a reduce button",()=>{
        render(<Counter></Counter>)
        let reduceBtn=screen.getByTestId("reduceBtn")
        expect(reduceBtn).toBeInTheDocument()
    })

})