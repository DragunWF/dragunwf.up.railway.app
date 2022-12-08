import "dotenv/config";
import Discord from "discord.js";

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
const messageEmbedColor = "#50C878"; // Emerald Green
const testChannelId = "986967568453615616";
const mailReceiverChannelIds = [testChannelId, "987014510395142154"];

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
    .setFooter({ text: "dragunwf.up.railway.app" })
    .setTimestamp();
  return embed;
}

function sendMessageToChannel(channelId, formBody) {
  const mailEmbedMessage = createEmbedMessage(formBody.name, formBody.message);
  const channel = client.channels.cache.get(channelId);
  channel.send({ embeds: [mailEmbedMessage] });
}

function validateMessageForm(formBody) {
  const message = formBody.message.toUpperCase();
  const author = formBody.name.toUpperCase();
  return (
    !author.includes(process.env.SECRET_WORD) &&
    !message.includes(process.env.SECRET_WORD)
  );
}

function sendMessageForm(formBody) {
  const validMessageForm = validateMessageForm(formBody);
  if (validMessageForm)
    for (let channelId of mailReceiverChannelIds)
      sendMessageToChannel(channelId, formBody);
  else sendMessageToChannel(testChannelId, formBody);
}

client.login(process.env.BOT_TOKEN);

export default sendMessageForm;
