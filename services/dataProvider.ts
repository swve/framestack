import frameFile from "../data/frameworks.json";
import libFile from "../data/libraries.json";
import toolFile from "../data/tools.json";
import * as jmespath from "jmespath";

const items = libFile.concat(frameFile, toolFile);

interface SearchInterface {
  keyword: string;
  type: "tools" | "libraries" | "frameworks" | "*";
  page?: number;
}

export class dataProvider {
  /**
   * Get all ressources randomly
   * @param limit
   * @returns
   */
  getAllWithLimit(limit) {
    function shuffle(array) {
      array.sort(() => Math.random() - 0.5);
    }
    shuffle(items);
    const data = items.slice(0, limit);
    return data;
  }

  /**
   * Get all ressources
   * @returns
   */
  getAll() {
    function shuffle(array) {
      array.sort(() => Math.random() - 0.5);
    }
    shuffle(items);
    return items;
  }

  /**
   * Get By Tags, Page and type
   * @param tags
   * @param page
   * @param type
   * @returns
   */
  getBy(tags, page, type) {
    const startArray = 0 + page * 10;
    const endArray = page * 10 + 10;

    const dataTags = jmespath.search(
      items,
      "[?tags.contains(@, '" +
        tags +
        "') && type.contains(@, '" +
        type +
        "') == `true`]"
    );
    const dataFinal = jmespath.search(
      dataTags,
      "[" + startArray + ":" + endArray + "]"
    );
    return { result: dataFinal, nbr: dataTags.length };
  }

  /**
   * Get by tags only
   * @param tags
   * @param page
   * @returns
   */
  getByTags(tags, page) {
    const startArray = 0 + page * 10;
    const endArray = page * 10 + 10;

    const dataTags = jmespath.search(
      items,
      "[?tags.contains(@, '" + tags + "') == `true`]"
    );
    const dataFinal = jmespath.search(
      dataTags,
      "[" + startArray + ":" + endArray + "]"
    );
    return { result: dataFinal, nbr: dataTags.length };
  }

  /**
   * Get by Type
   * @param type
   * @param page
   * @returns
   */
  getByType(type, page) {
    const startArray = 0 + page * 10;
    const endArray = page * 10 + 10;
    const dataTags = jmespath.search(
      items,
      "[?type.contains(@, '" + type + "') == `true`]"
    );
    const dataFinal = jmespath.search(
      dataTags,
      "[" + startArray + ":" + endArray + "]"
    );
    return { result: dataFinal, nbr: dataTags.length };
  }

  /**
   * Search
   * @param SearchObject
   */
  search(SearchObject: SearchInterface) {
    const startArray = 0 + SearchObject.page * 10;
    const endArray = SearchObject.page * 10 + 10;
    if (SearchObject.type == "*") {
      let search = jmespath.search(
        items,
        "[?mini_desc.contains(@, '" +
          SearchObject.keyword +
          "') || tags.contains(@, '" +
          SearchObject.keyword +
          "') || name.contains(@, '" +
          SearchObject.keyword +
          "') == `true`]"
      );
      const dataFinal = jmespath.search(
        search,
        "[" + startArray + ":" + endArray + "]"
      );
      return { result: dataFinal, nbr: search.length };
    } else {
      let byKeyword = jmespath.search(
        items,
        "[?mini_desc.contains(@, '" +
          SearchObject.keyword +
          "') || tags.contains(@, '" +
          SearchObject.keyword +
          "') || name.contains(@, '" +
          SearchObject.keyword +
          "') == `true`]"
      );
      let byType = jmespath.search(
        byKeyword,
        "[?type.contains(@, '" +
          SearchObject.type +
          "') == `true`]"
      );
      const dataFinal = jmespath.search(
        byType,
        "[" + startArray + ":" + endArray + "]"
      );
      return { result: dataFinal, nbr: byType.length };
    }
  }
}
