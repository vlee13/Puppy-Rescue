const router = require("express").Router();
const Dog = require("../models/Dog.model");
const User = require("../models/User");

router.get("/", (req, res, next) => {
  res.status(200).json({ msg: "Working" });
});

router.get("/dogs", (req, res, next) => {
  Dog.find().then((dogs) => {
    console.log(dogs);
    res.json({ dogs });
  });
});

router.post("/vote", isAuth, (req, res, next) => {
  console.log(req.body, "Hellooo", req.user);
  if (req.user.votes > 0) {
    Dog.findById(req.body._id).then((dog) => {
      if (dog.votes.includes(req.user._id)) {
        res.json({ error: "You already voted for this dog." });
      } else {
        dog.votes.push(req.user._id);
        dog.save();
        User.findByIdAndUpdate(
          req.user._id,
          { $inc: { votes: -1 } },
          { new: true }
        ).then((user) => {
          res.json({ dog, user });
        });
      }
    });
  } else {
    res.json({ error: "You're out of votes!" });
  }
});

router.post("/addDogs", (req, res, next) => {
  Dog.create(req.body).then((newdog) => {
    res.json({ newdog });
  });
});

function isAuth(req, res, next) {
  req.isAuthenticated()
    ? next()
    : res.status(401).json({ msg: "Log in first" });
}

module.exports = router;
