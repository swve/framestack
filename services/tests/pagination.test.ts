import  pagination  from '../pagination';


test("pagination", () => {
  const paginator = new pagination;
  console.log(paginator.paginateBy(10,5));
});
