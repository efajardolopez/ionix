/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from "react";
import { render } from "@testing-library/react-native";

import Item from "../src/pages/slides/components/item";

let component;
// const imagePath = require("../src/assets/img/camera.png");

describe("<Slide/>", () => {
  beforeEach(() => {
    component = render(
      <Item
        index={1}
        item={{
          title: "Slide 1",
          description: "Description del primer slide",
          image: 123,
          key: "1",
        }}
        requestPermission={() => console.log("request permission")}
        nextSlide={() => console.log("next slide")}
      />
    );
  });

  it("Renderiza correctamente", () => {
    expect(component).toBeDefined();
  });
});
