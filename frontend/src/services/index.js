import axios from "axios";
let baseURL;

process.env.NODE_ENV === "production"
  ? // ? (baseURL = 'https://sheltered-dawn-07708.herokuapp.com')
    (baseURL = "window.location.origin")
  : (baseURL = "http://localhost:5000");

const service = axios.create({ withCredentials: true, baseURL });

const actions = {
  isLoggedIn: async () => {
    return await service.get("/is-logged-in");
  },
  signUp: async (user) => {
    return await service.post("/signup", user);
  },
  logIn: async (user) => {
    return await service.post("/login", user);
  },
  logOut: async () => {
    return await service.get("/logout");
  },
  getDogs: async () => {
    return await service.get("/dogs");
  },
  fosterDog: async () => {
    return await service.get("/foster");
  },
  adoptedDogs: async () => {
    return await service.get("/adopted");
  },

  vote: async (dog) => {
    return await service.post("/vote", dog);
  },
  editDog: async (dog) => {
    console.log("hiiii");
    return await service.post("/editDog", dog);
  },
  getOrganizations: async (group) => {
    return await service.get("/helpothers");
  },
};

export default actions;
