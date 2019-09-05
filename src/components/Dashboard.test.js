import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Display from "./Display.js";
import "@testing-library/react";
import Dashboard from "./Dashboard";

describe("<Dashboard />", () => {
    it("renders without crashing", () => {
        render(<Display />);
    });
    it('strike', () => {
        let clicked = false;
        const { getByText } = render(<Dashboard strike={() => clicked = true} />);
        const strikeButton = getByText(/strike/i);
        fireEvent.click(strikeButton);
        expect(clicked).toBe(false);
    });
});
