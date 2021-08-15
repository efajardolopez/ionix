/* eslint-disable no-undef */
import React from "react";
import { render } from "@testing-library/react-native";

import Loading from "../src/components/Loading";
import LinearGradientButton from "../src/components/LinearGradientButton";
import NoResults from "../src/components/NoResults";
import SearchInput from "../src/components/SearchInput";

let component;

/**
 * Caso de prueba de renderizado de componentes generales
 */
describe("<Loading/>", () => {
  beforeEach(() => {
    component = render(<Loading />);
  });

  it("Renderiza correctamente", () => {
    expect(component).toBeDefined();
  });
});

describe("<NoResults/>", () => {
  beforeEach(() => {
    component = render(<NoResults />);
  });

  it("Renderiza correctamente", () => {
    expect(component).toBeDefined();
  });
});

describe("<LinearGradientButton/>", () => {
  beforeEach(() => {
    component = render(
      <LinearGradientButton title="Submit" onClick={() => console.log("ok")} />
    );
  });

  it("Renderiza correctamente", () => {
    expect(component).toBeDefined();
  });
});

describe("<SearchInput/>", () => {
  beforeEach(() => {
    component = render(
      <SearchInput placeholder="Search" onChange={() => console.log("ok")} />
    );
  });

  it("Renderiza correctamente", () => {
    expect(component).toBeDefined();
  });
});
