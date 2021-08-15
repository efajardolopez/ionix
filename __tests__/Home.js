/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from "react";
import { render } from "@testing-library/react-native";
// import App from "../index";
// import AppStack from "../App";
import Item from "../src/pages/home/components/item";
// import Home from "../src/pages/home";

let component;

describe("<Item/>", () => {
  beforeEach(() => {
    component = render(
      <Item
        index={1}
        item={{
          title: "Titulo",
          url: "https://www.google.com",
          score: 10,
          num_comments: 30,
        }}
      />
    );
  });

  it("Renderiza correctamente", () => {
    expect(component).toBeDefined();
  });
});
