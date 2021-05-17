import { dataProvider } from "../dataProvider";
const linkCheck = require("link-check");
import isUrl from "is-url";

test("getAll", () => {
  const provider = new dataProvider();
  expect(provider.getAllWithLimit(9).length).toBe(9);
});

test("productImagesTest", () => {
  const provider = new dataProvider();
  const products = provider.getAll();
  products.forEach((product) => {
    if (isUrl(product.img_url) == true) {
      linkCheck(product.img_url, function (err, result) {
        if (err) {
          console.error(err);
          return;
        }
        console.log(`${result.link} is ${result.status}`);
      });
    }
  });
});
