import "dotenv/config";
import Discord from "discord.js";

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
const mailReceiverChannelId = "";

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
  client.user.setActivity(`Dragun's Mails...`, {
    type: "WATCHING",
  });
});

function sendMessageForm(formBody) {}

export default sendMessageForm;
