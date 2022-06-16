import "dotenv/config";
import Discord from "discord.js";

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
const messageEmbedColor = "#50C878"; // Emerald Green
const mailReceiverChannelId = "986967568453615616";

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
  client.user.setActivity(`Dragun's Mails...`, {
    type: "WATCHING",
  });
});

function createEmbedMessage(author, message) {
  const embed = new Discord.MessageEmbed()
    .setColor(messageEmbedColor)
    .setTitle("Message Form Submission")
    .setAuthor({ name: author })
    .setDescription(message)
    .setFooter({ text: "dragunwf.herokuapp.com/contact/form" })
    .setTimestamp();
  return embed;
}

function sendMessageForm(formBody) {
  const channel = client.channels.cache.get(mailReceiverChannelId);
  const mailEmbedMessage = createEmbedMessage(formBody.name, formBody.message);
  channel.send({ embeds: [mailEmbedMessage] });
}

client.login(process.env.BOT_TOKEN);

export default sendMessageForm;
