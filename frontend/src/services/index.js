import axios from "axios";
let baseURL;
console.log("koala");
process.env.NODE_ENV === "production"
  ? (baseURL = "https://houseofpaws.herokuapp.com/api")
  : // (baseURL = "window.location.origin")
    (baseURL = "http://localhost:5000/api");
console.log(process.env);
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

  clearVotes: async (dog) => {
    return await service.post("/adminpage", dog);
  },

  editDog: async (dog) => {
    console.log("hiiii");
    return await service.post("/editDog", dog);
  },
  addDog: async (dog) => {
    return await service.post("/addDogs", dog);
  },

  getOrganizations: async (group) => {
    return await service.get("/helpothers");
  },

  sendMail: async (email) => {
    return await service.post("/sendmail", email);
  },
};

export default actions;
