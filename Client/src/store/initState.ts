import { Store } from "./storeTypes";

export default {
  entities: {
    categories: [
      { name: "שחמט", imgName: "chess" },
      { name: "נגינה", imgName: "music" },
      { name: "שפות", imgName: "language" },
      { name: "בישול ואפייה", imgName: "chef" },
      { name: "לימודים לבגרות", imgName: "study" },
    ],
    selectedCategory: undefined,
  },
  events: {
    events: [],
    newEvent: undefined,
  },
} as Store;
