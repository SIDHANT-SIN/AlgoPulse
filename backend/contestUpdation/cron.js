const cron = require("node-cron");
const { processContests } = require("./contestServices");

const updateContests = async () => {
  try {
    await processContests();

  } catch (err) {
    console.error("Error updating contests:", err.message);
  }
}

cron.schedule("0 0 * * *", updateContests);


