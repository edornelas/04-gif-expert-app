import {
  render,
  screen,
  fireEvent,
  renderHook,
  waitFor,
} from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

import { AddCategory } from "../src/components/AddCategory";

//jest.mock("../src/components/AddCategory");

describe("Pruebas en <GifExpertApp />", () => {
  test("Debe hacer match con snapshot", () => {
    const { container } = render(<GifExpertApp />);

    expect(container).toMatchSnapshot();
    //screen.debug();
  });

  test("Debe contener titulo GifExpertApp en h1", async () => {
    render(<GifExpertApp />);

    //screen.debug();
    const h1 = await screen.findByRole("heading", { level: 1 });
    //console.log(h1);

    expect(h1.innerHTML).toBe("GifExpertApp");

    //screen.debug();
  });

  test("Debe contener una forma y un campo de tipo text inicializado sin datos", () => {
    render(<GifExpertApp />);

    //screen.debug();
    const form = screen.getByRole("form");
    const input = screen.getByRole("textbox");
    expect(form).not.toBeNull();
    expect(input).not.toBeNull();
    expect(input.value).toBe("");

    //screen.debug();
  });

  test("Debe tener inicializada una categoria con título en h3", async () => {
    render(<GifExpertApp />);

    const h3 = await screen.findByRole("heading", { level: 3 });

    expect(h3.innerHTML).not.toBeUndefined();
  });

  test("Debe cargar 10 imagenes ", async () => {
    render(<GifExpertApp />);

    //screen.debug();
    //render(<GifExpertApp />);
  });

  test("Debe poder ingresar una categoría no existente", () => {
    render(<GifExpertApp />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");
    //console.log(input);

    fireEvent.input(input, { target: { value: "Saitama" } });
    fireEvent.submit(form);

    const elementsH3 = screen.getAllByRole("heading", { level: 3 });

    //console.log(elementsH3);

    expect(elementsH3.length).toBe(2);
    expect(elementsH3[0].innerHTML).toBe("Saitama");
    //screen.debug();
  });

  test("No Debe poder ingresar la misma categoría mas de una vez", () => {
    render(<GifExpertApp />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");
    //console.log(input);

    fireEvent.input(input, { target: { value: "Saitama" } });
    fireEvent.submit(form);
    fireEvent.input(input, { target: { value: "Saitama" } });
    fireEvent.submit(form);

    const elementsH3 = screen.getAllByRole("heading", { level: 3 });

    //console.log(elementsH3);

    expect(elementsH3.length).toBe(2);
    expect(elementsH3[0].innerHTML).toBe("Saitama");
    expect(screen.getAllByText("Saitama").length).toBe(1);
    //screen.debug();
  });
});
