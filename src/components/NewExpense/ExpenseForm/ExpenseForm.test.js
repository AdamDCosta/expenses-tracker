import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ExpenseForm from "./ExpenseForm"

describe("Testing the ExpenseForm component", () => {

  it("should not render the form on page load", () => {
    // ARRANGE
    render(<ExpenseForm />)
    // ACT
    const form = screen.queryByRole("form")
    // ASSERT
    expect(form).not.toBeInTheDocument();
  })

  
})

