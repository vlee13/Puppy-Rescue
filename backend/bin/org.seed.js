const Org = require("../models/Org.model");
const mongoose = require("mongoose");

const groups = [
  {
    name: "Hope For Paws",
    description:
      "They bring animals who are suffering–often from abuse, neglect, or injuries–off the streets and provide medical care. They also work to find forever homes for these animals. If you haven’t seen what they do yet, watch some of their videos and bring some tissues because you’ll probably break down in tears.",

    image:
      "https://d3n8a8pro7vhmx.cloudfront.net/hopeforpaws/pages/2180/attachments/original/1595004314/id_3413023_1.jpg?1595004314",
  },
  {
    name: "A Purposeful Rescue",
    description:
      "A Purposeful rescue that saves overlooked dogs from high-kill Los Angeles area shelters.",

    image:
      "https://images.squarespace-cdn.com/content/v1/52d7683be4b01d93542bf478/1436591719360-DR1VSMJOYX2OE44XMSF5/ke17ZwdGBToddI8pDm48kNBhxsR5AixTPaSt36FQjZRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIHEpb-MmdDNvFVgjmeoENIlexef176In2EgYPtI8R2-8KMshLAGzx4R3EDFOm1kBS/image-asset.jpeg?format=500w",
  },
  {
    name: "American Pit Bull Foundation",
    description:
      "The American Pit Bull Foundation works to educate and change the perception and stereotypes surrounding Pit Bulls. They want the public to see that these dogs are deserving of love despite how they are usually portrayed in the media. The foundation has Pit Bulls available for adoption to loving forever homes, and they have a program called Operation Sidekick that trains rescued Pit Bulls to be service dogs for veterans with PTSD and depression.",

    image:
      "https://apbf.dog/wp-content/uploads/2014/07/american-pit-bull-foundation-01.jpeg",
  },
  {
    name: "Animal Aid Unlimited",
    description:
      "Animal Aid Unlimited was founded by a family from Seattle who moved to India. They saw animals suffering in the streets, but there are very few animal hospitals in India. So they founded Animal Aid Unlimited, and the organization has grown rapidly. They take animals off the street who need medical attention and provide them with the care they need. Most of the treatment they provide is for minor wounds or illnesses, but you can see some of their more extreme cases on YouTube. Although they are based in India, they accept donations from the United States.",

    image:
      "https://www.animalaidunlimited.org/wp-content/uploads/2020/05/Hospital_02-copy-950x633.jpg",
  },
  {
    name: "Best Friends Animal Society",
    description:
      "Best Friends Animal Society is a group dedicated to bringing an end to the killing of shelter animals. They also run the nation’s largest no-kill animal sanctuary for companion animals. Through adoption events, education campaigns, and fundraisers, they work with other rescue organizations to find forever homes for dogs, cats, and other animals in need and raise awareness. They even helped several of the dogs involved in Michael Vick’s dogfighting ring get the care they needed.",

    image:
      "http://cdn.coverstand.com/12453/567365/iphonejpg/320/1847384955662842796790966244-00001.jpg",
  },
  {
    name: "Jameson Humane",
    description:
      "Not only do they rescue and find homes for dogs, but they care for cats, horses, chickens, and lots of other animals, as well. JARR has several programs to benefit the community, too. They offer assistance to low-income families with animals, people displaced by natural disasters, victims of abuse, senior citizens, and more. Swing by if you’re ever in Napa Valley and give them a hello from DogTime!",

    image:
      "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/115893652_2730433700511337_1441846265735219321_n.jpg?_nc_cat=111&_nc_sid=8bfeb9&_nc_ohc=z6L5CAqPKFkAX8mhPCe&_nc_ht=scontent-sjc3-1.xx&oh=92f45d43c6712beb364b737dd0300105&oe=5F4887D9",
  },
  {
    name: "Muttville",
    description:
      "Muttville Senior Dog Rescue is dedicated to finding homes or hospice for older dogs in need of help. They also spread information to the public about senior dogs and work to change the perception of old pups as undesirable–a perception which leads to many seniors being put down instead of being adopted. Older dogs are often the first to be euthanized in shelters to make space for more adoptable puppies and young dogs, but Muttville sees owners coming back for their second or third senior dog. Their success stories are truly heartwarming.",

    image: "https://muttville.org/images/s4s/margitta-and-shelly.jpg",
  },
  {
    name: "ASPCA",
    description:
      "The American Society for the Prevention of Cruelty to Animals (ASPCA) was the first humane society to exist in North America. They regularly assist in rescuing dogs from dog fighting rings, puppy mills, hoarding cases, and other neglectful or abusive situations.",

    image:
      "https://aspca.org/sites/default/files/about-us_animal-rescue_thumb_0.jpg",
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
    let res = await Org.insertMany(groups);
    console.log("insert all orgs", res);
  })
  .then(() => {
    mongoose.disconnect();
  })
  .catch((err) => console.error("Error connecting to mongo", err));
