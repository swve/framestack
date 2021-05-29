import { dataProvider } from "../dataProvider";
const provider = new dataProvider();

test("getAll", () => {
  expect(provider.getAllWithLimit(9).length).toBe(9);
});


