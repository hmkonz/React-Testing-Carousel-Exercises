import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";

// Smoke Test
it("renders without crashing", function () {
  render (<Carousel />);
});

// Snapshot Test
it("matches snapshot", function () {
const{asFragment} = render(<Carousel />);
expect(asFragment()).toMatchSnapshot();
});


it("works when you click on the right arrow", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();
});


it("works when you click on the left arrow", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

   // move forward in the carousel
   const rightArrow = queryByTestId("right-arrow");
   fireEvent.click(rightArrow);
 

  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();

  // move backward in the carousel
  const leftArrow = queryByTestId("left-arrow");
  fireEvent.click(leftArrow);

   // expect the first image to show but not the second
   expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
   expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

});

it('checks that left and right arrows are missing when on first and last images', function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // expect that the left arrow does not show when on first image
  expect(queryByTestId("left-arrow")).not.toBeInTheDocument();

  // move forward 2 images in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);
  fireEvent.click(rightArrow);

  // expect that the right arrow does not show when on last image
  expect(queryByTestId("right-arrow")).not.toBeInTheDocument(); 

});
