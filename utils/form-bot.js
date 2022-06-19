import "dotenv/config";
import Discord from "discord.js";

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
const messageEmbedColor = "#50C878"; // Emerald Green
const mailReceiverChannelIds = ["986967568453615616", "987014510395142154"];

client.on("ready", () => {
  console.log(`Bot Online: Logged in as ${client.user.tag}`);
  client.user.setActivity(`DragunWF's Mails`, {
    type: "WATCHING",
  });
});

function createEmbedMessage(author, message) {
  const descriptionContent = `**Author:**\n${author}\n\n**Message:**\n${message}`;
  const embed = new Discord.MessageEmbed()
    .setColor(messageEmbedColor)
    .setTitle("Message Form Submission")
    .setDescription(descriptionContent)
    .setFooter({ text: "dragunwf.herokuapp.com" })
    .setTimestamp();
  return embed;
}

function sendMessageForm(formBody) {
  const mailEmbedMessage = createEmbedMessage(formBody.name, formBody.message);
  for (let channelId of mailReceiverChannelIds) {
    const channel = client.channels.cache.get(channelId);
    channel.send({ embeds: [mailEmbedMessage] });
  }
}

client.login(process.env.BOT_TOKEN);

export default sendMessageForm;
