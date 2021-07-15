import { render, screen, waitFor } from "@testing-library/react";
import Launches from "./Launches";

describe("Launches", () => {
  test("should list launches with videos", async () => {
    render(<Launches />);
    await waitFor(() => screen.getByText("Vargus I"));

    const listOfVideos = screen.getAllByTestId("launchBox");
    const ourLaunch = screen.getByText("Vargus I");

    expect(ourLaunch).toBeInTheDocument();
    expect(listOfVideos.length).toEqual(3);
  });
});
