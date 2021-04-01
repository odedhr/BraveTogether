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
    heroes: [],
  },

  user: {
    firstName: undefined,
    lastName: undefined,
    email: undefined,
    phone: undefined,
    CriminalBackGroundCheck: undefined,
    userAgreement: undefined,
    id: undefined,
    token: undefined,
    is_manager: false,
  },

  hero: {
    description: undefined,
    fullName: undefined,
    location: undefined,
    manager_id: undefined,
    speciality: undefined,
    id: undefined,
  },
} as Store;
