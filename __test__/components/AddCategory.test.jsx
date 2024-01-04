import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Pruebas en <AddCategory />", () => {
  test("Debe cambiar el valor de la caja de texto", () => {
    render(<AddCategory onNewCategory={() => {}} />);
    //screen.debug();

    const input = screen.getByRole("textbox");
    //console.log(input);

    fireEvent.input(input, { target: { value: "Saitama" } });

    expect(input.value).toBe("Saitama");

    // screen.debug();
  });

  test("Debe llamar onNewCategory si el input tienen un valor", () => {
    const inputValue = "Goku";
    const onNewCAtegory = jest.fn();

    //TODO

    render(<AddCategory onNewCategory={onNewCAtegory} />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    //screen.debug();
    //Despues de enviarse el submit el campo debe ser vacio
    expect(input.value).toBe("");

    expect(onNewCAtegory).toHaveBeenCalled();
    expect(onNewCAtegory).toHaveBeenCalledTimes(1);
    expect(onNewCAtegory).toHaveBeenCalledWith(inputValue);
  });

  test("No debe llamar el onNewCategory si el input esta vacio", () => {
    const onNewCAtegory = jest.fn();
    render(<AddCategory onNewCategory={onNewCAtegory} />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    //fireEvent.input(input, { target: { value: "" } });
    fireEvent.submit(form);

    expect(onNewCAtegory).toHaveBeenCalledTimes(0);
    expect(onNewCAtegory).not.toHaveBeenCalled();
    expect(input.value).toBe("");
    screen.debug();
  });
});
