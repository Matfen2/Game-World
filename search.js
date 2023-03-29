const express = require("express");
const axios = require("axios");
const router = express.Router();

router.post("/", async function (req, res) {
  const game = req.body.searchGame;
  const apiKey = "8a8f8f46d74947e08c9afded658a20d5";

  const options = {
    method: "GET",
    url: "https://api.rawg.io/api/games/" + game + "?key=" + apiKey + "",
    params: {
      key: apiKey,
      name: game,
    },
  };

  try {
    const response = await axios.request(options);
    const description = response.data.description;
    res.render("result", { name: game, describe: description });
  } catch (error) {
    console.log(error);
    res.send("Error, no result found!");
  }
});

module.exports = router;
