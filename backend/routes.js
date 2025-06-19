const express = require("express");
const router = express.Router();
const axios = require("axios");
const Account = require("./models/accounts");

router.post("/", async (req, res) => {
  const { platform, username } = req.body;

  let rating = null;
  let title = null;
  try {
    try {
      if (platform === "Codeforces") {
        const cf = await axios.get(
          `https://codeforces.com/api/user.info?handles=${username}`
        );
        const userData = cf.data.result[0];
        rating = userData.rating || "Unrated";
        title = userData.rank || "None";
      } else if (platform === "CodeChef") {
        //   const cc = await axios.get(
        //     `https://codechef-api.vercel.app/handle/${username}`
        //   );
        // console.log(cc.data);
        //const userData = cc.result[0];
        rating = "Unable to fetch";
        title = "Unable to fetch";
      } else if (platform === "LeetCode") {
        const { data: badgesData } = await axios.get(
          `https://alfa-leetcode-api.onrender.com/${username}/badges`
        );
        const { data: contestData } = await axios.get(
          `https://alfa-leetcode-api.onrender.com/${username}/contest`
        );

        const guardianBadge = badgesData.badges?.find((badge) =>
          badge.displayName.includes("Guardian")
        );
        const knightBadge = badgesData.badges?.find((badge) =>
          badge.displayName.includes("Knight")
        );

        if (guardianBadge) title = "Guardian";
        else if (knightBadge) title = "Knight";
        else title = "None";

        rating = contestData.contestRating
          ? Math.floor(contestData.contestRating).toString()
          : "0";
      }
    } catch (error) {
      console.error("Error fetching platform data:", error);
      title = "Error";
      rating = "0";
    }

    const account = new Account({ platform, username, rating, title });
    await account.save();
    res.status(201).json(account);
  } catch (err) {
    console.error(err.message);
    res
      .status(400)
      .json({ error: "Failed to fetch user data or save account" });
  }
});




router.get("/", async (req, res) => {
  try {
    const accounts = await Account.find({});
    res.json(accounts);
  } catch (err) {
    res.status(500).json({ error: err.status });
  }
});


router.delete("/:id", async (req, res) => {
  try {
    const deletedAccount = await Account.findByIdAndDelete(req.params.id);

    if (!deletedAccount) {
      return res.status(404).json({ error: "Account not found" });
    }

    res.json({ message: "Account deleted successfully", deletedAccount });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete account" });
  }
});

module.exports = router;
