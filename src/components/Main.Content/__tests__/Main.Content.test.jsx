import React from "react";
import { render, screen } from "@testing-library/react";
import MainContent from "../Main.Content";

vi.mock("../../Search/Search", () => ({
  default: () => <div data-testid="search-component">Search</div>,
}));

vi.mock("../../Table/Table", () => ({
  default: () => <div data-testid="table-component">Table</div>,
}));

describe("MainContent Component", () => {
  beforeEach(() => {
    render(<MainContent />);
  });

  test("renders without crashing", () => {
    const welcomeText = screen.getByText("Welcome to WeatherNow 🌍");
    expect(welcomeText).toBeInTheDocument();
    expect(welcomeText).toBeVisible();
  });

  test("displays the heading and description text", () => {
    expect(screen.getByText("Welcome to WeatherNow 🌍")).toBeInTheDocument();
    expect(
      screen.getByText(
        /Designed for travel enthusiasts who love exploring the world with confidence/i
      )
    ).toBeInTheDocument();
  });

  test("renders the Search component", () => {
    expect(screen.getByTestId("search-component")).toBeInTheDocument();
    expect(screen.getByTestId("search-component")).toBeVisible();
  });

  test("renders the Table component", () => {
    expect(screen.getByTestId("table-component")).toBeInTheDocument();
    expect(screen.getByTestId("table-component")).toBeVisible();
  });
});