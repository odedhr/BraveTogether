export type Category = {
  name: string;
  imgName?: string;
};
export type Entities = {
  categories: Category[];
  selectedCategory: string[] | undefined;
};
export type Event = {
  long: number;
  lat: number;
  topic: string;
  hero: string;
  address: string;
  manager_id: string;
};
export type Events = {
  events: Event[];
  newEvent: Event | undefined;
};
export type Store = {
  entities: Entities;
  events: Events;
};
