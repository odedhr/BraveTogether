import { Hero } from "../components/Form/TeacherCardForm";

export type Category = {
  name: string;
  imgName: string;
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
  pic: File;
  tags: string[];
  reward: number;
};
export type Events = {
  events: Event[];
  newEvent: Event | undefined;
};
export type User = {
  firstName: string | undefined;
  lastName: string | undefined;
  email: string | undefined;
  phone: string | undefined;
  CriminalBackGroundCheck: boolean | undefined;
  userAgreement: boolean | undefined;
  id: string | undefined;
  token: string | undefined;
  is_manager: boolean;
};
export type Store = {
  entities: Entities;
  events: Events;
  user: User;
  hero: Hero;
};
