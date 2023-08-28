import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";

// Smoke Test
it("renders without crashing", function () {
    render (<Card />);
  });


// Snapshot Test
const{asFragment} = render(<Card />);
expect(asFragment()).toMatchSnapshot();  