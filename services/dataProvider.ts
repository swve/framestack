import frameFile from "../data/frameworks.json";
import libFile from "../data/libraries.json";
import toolFile from "../data/tools.json";
var jmespath = require("jmespath");
let items = libFile.concat(frameFile, toolFile);

export class dataProvider {
  
  getAllWithLimit(limit) {
    function shuffle(array) {
      array.sort(() => Math.random() - 0.5);
    }
    shuffle(items);
    var data = items.slice(0, limit);
    return data;
  }

  getAll() {
    function shuffle(array) {
      array.sort(() => Math.random() - 0.5);
    }
    shuffle(items);
    return items;
  }

  getBy(tags, page, type) {
    // EDIT: will find a solution for the 0 array later
    var startArray = 0 + page * 10;
    var endArray = page * 10 + 10;

    var dataTags = jmespath.search(
      items,
      "[?tags.contains(@, '" +
        tags +
        "') && type.contains(@, '" +
        type +
        "') == `true`]"
    );
    var dataFinal = jmespath.search(
      dataTags,
      "[" + startArray + ":" + endArray + "]"
    );
    return { result: dataFinal, nbr: dataTags.length };
  }

  getByTagsOnly(tags, page) {
    // EDIT: will find a solution for the 0 array later
    var startArray = 0 + page * 10;
    var endArray = page * 10 + 10;

    var dataTags = jmespath.search(
      items,
      "[?tags.contains(@, '" + tags + "') == `true`]"
    );
    var dataFinal = jmespath.search(
      dataTags,
      "[" + startArray + ":" + endArray + "]"
    );
    return { result: dataFinal, nbr: dataTags.length };
  }

  getList(type, page) {
    var startArray = 0 + page * 10;
    var endArray = page * 10 + 10;
    var dataTags = jmespath.search(
      items,
      "[?type.contains(@, '" + type + "') == `true`]"
    );
    var dataFinal = jmespath.search(
      dataTags,
      "[" + startArray + ":" + endArray + "]"
    );
    return { result: dataFinal, nbr: dataTags.length };
  }
}
