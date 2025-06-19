const Contest = require("../models/contests");
const axios = require("axios");

const processContests = async () => {
 
  const { data } = await axios.get(
    "https://codeforces.com/api/contest.list?gym=false"
  );

    const allContests = data.result.slice(0, 30);
    let cutoffIndex = 30;
  for (let i = 0; i < 30; i++) {
    if (allContests[i].phase !== "BEFORE") {
      cutoffIndex = Math.min(i + 3, 30);
      break;
    }
  }

  const contestsToSave = allContests.slice(0, cutoffIndex).map((contest) => ({
    id: contest.id,
    name: contest.name,
    phase: contest.phase,
    startTime: new Date(contest.startTimeSeconds * 1000),
    relativeStart: contest.relativeTimeSeconds,
  }));

  await Contest.deleteMany({});
  await Contest.insertMany(contestsToSave);

  return contestsToSave;
};

module.exports = { processContests };
