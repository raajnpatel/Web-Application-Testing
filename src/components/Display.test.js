import React from "react";
import { render } from "@testing-library/react";
import Display from "./Display.js";
import "@testing-library/react";

describe("<Display />", () => {
    it("renders without crashing", () => {
        render(<Display />);
    });
    it("props work", () => {
        const display = render(<Display strike={1} ball={2} />);
        display.getByText(/ball score: 2/);
        display.getByText(/strike score: 1/);
    });
});
