export default class pagination {

  paginateBy(elements: number, number: number) {
    let pageNbr: number = elements / number;
    let tabPages = [];
    for (let index = 0; index < pageNbr; index++) {
      tabPages.push(index);
    }
    return tabPages;
  }

  
}
