const Dog = require("../models/Dog.model");
const mongoose = require("mongoose");

const dogs = [
  {
    name: "Mattie",
    shelterID: "A1018511",
    age: 12,
    weight: 68,
    location: "West Los Angeles Shelter",
    description:
      "My name is Mattie. I am a mixed breed spayed female, and I have been at the shelter since May 26, 2019.",
    votes: 0,
    image: "../public/images/A1018511.png",
  },
  {
    name: "Lady",
    shelterID: "A1048146",
    age: 12,
    weight: 89,
    location: "South Los Angeles Shelter",
    description:
      "My name is Lady. I am a mixed breed spayed female, and I have been at the shelter since July 2, 2020.",
    votes: 0,
    image: "../public/images/A1048146.png",
  },
  {
    name: "Bodhi",
    shelterID: "A1802060",
    age: 7,
    weight: 78,
    location: "West Los Angeles Shelter",
    description:
      "My name is Bodhi. I am a mixed breed neutered male, and I have been at the shelter since June 3, 2019.",
    votes: 0,
    image: "../public/images/A1802060.png",
  },
  {
    name: "Jackson",
    shelterID: "A1828753",
    age: 7,
    weight: 78,
    location: "South Los Angeles Shelter",
    description:
      "My name is Jackson. I am a mixed breed neutered male, and I have been at the shelter since January 31, 2019.",
    votes: 0,
    image: "../public/images/A1828753.png",
  },
  {
    name: "Sosa",
    shelterID: "A1830962",
    age: 6,
    weight: 60,
    location: "South Los Angeles Shelter",
    description:
      "My name is Sosa. I am a mixed breed neutered male, and I have been at the shelter since November 6, 2019.",
    votes: 0,
    image: "../public/images/A1830962.png",
  },
  {
    name: "Chica",
    shelterID: "A1834003",
    age: 5,
    weight: 65,
    location: "West Los Angeles Shelter",
    description:
      "My name is Chica. I am a mixed breed spayed female, and I have been at the shelter since January 13, 2019.",
    votes: 0,
    image: "../public/images/A1834003.png",
  },
  {
    name: "Moe",
    shelterID: "A1852697",
    age: 5,
    weight: 87,
    location: "West Los Angeles Shelter",
    description:
      "My name is Moe. I am a mixed breed neutered male, and I have been at the shelter since April 23, 2019.",
    votes: 0,
    image: "../public/images/A1852697.png",
  },
  {
    name: "Leeloo",
    shelterID: "A1865318",
    age: 8,
    weight: 60,
    location: "South Los Angeles Shelter",
    description:
      "My name is Leeloo. I am a mixed breed spayed female, and I have been at the shelter since June 6, 2019.",
    votes: 0,
    image: "../public/images/A1865318.png",
  },
  {
    name: "Kongo",
    shelterID: "A1898996",
    age: 10,
    weight: 12,
    location: "East Valley Shelter",
    description:
      "My name is Kongo. I am a mixed breed unalterd male, and I have been at the shelter since July 17, 2020.",
    votes: 0,
    image: "../public/images/A1944927.png",
  },
  {
    name: "Chispa",
    shelterID: "A1945866",
    age: 13,
    weight: 54,
    location: "South Los Angeles Shelter",
    description:
      "My name is Chispa. I am a mixed breed unaltered female, and I have been at the shelter since July 25, 2020.",
    votes: 0,
    image: "../public/images/A1945866.png",
  },
];

const MONGODB_URI =
  //   process.env.MONGODB_URI || "mongodb://localhost/deploymentExample";
  // console.log("Connecting DB to ", MONGODB_URI);
  "mongodb+srv://val:pnv050212@cluster0.mgb3j.mongodb.net/Dogs?retryWrites=true&w=majority";

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((self) => {
    console.log(
      `Connected to Mongo! Database name: "${self.connections[0].name}"`
    );
    // return self.connection.dropDatabase();
    // Dog.insertMany(dogs).then((res) => {
    //   console.log(res);
    //   mongoose.disconnect();
    // });
  })
  .then(async () => {
    let res = await Dog.insertMany(dogs);
    console.log("insert all dogs", res);
  })
  .then(() => {
    mongoose.disconnect();
  })
  .catch((err) => console.error("Error connecting to mongo", err));
