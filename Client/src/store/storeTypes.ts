export type Category = {
  name: string;
  imgName?: string;
};
export type Entities = {
  categories: Category[];
  selectedCategory: string[] | undefined;
};
export type Store = {
  entities: Entities;
};
