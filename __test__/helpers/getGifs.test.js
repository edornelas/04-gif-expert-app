import { getGifs } from "../../src/helpers/getGifs";

describe("Pruebas en getGifs()", () => {
  const category = "spiderverse";
  test("Debe retornar un arreglo de gifts", async () => {
    const gifs = await getGifs(category);

    //console.log(gifs);

    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
