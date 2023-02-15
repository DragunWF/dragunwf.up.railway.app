import "dotenv/config";
import Discord from "discord.js";

class FormBot {
  static #client = new Discord.Client({
    intents: ["GUILDS", "GUILD_MESSAGES"],
  });
  static #embedMessageColor = "#50C878"; // Emerald Green
  static #testChannelId = "986967568453615616";
  static #mailDestinationChannelIds = [
    this.#testChannelId,
    "987014510395142154",
  ];

  static onReady() {
    this.#client.on("ready", () => {
      console.log(`Bot Online: Logged in as ${this.#client.user.tag}`);
      this.#client.user.setActivity(`DragunWF's Mails`, {
        type: "WATCHING",
      });
    });
    this.#client.login(process.env.BOT_TOKEN);
  }

  static sendMessageForm(formBody) {
    if (!formBody) {
      throw new Error("Missing argument!");
    }

    const validMessageForm = this.#validateMessageForm(formBody);
    if (validMessageForm) {
      for (let channelId of this.#mailDestinationChannelIds) {
        this.#sendMessageToChannel(channelId, formBody);
      }
    } else {
      this.#sendMessageToChannel(this.#testChannelId, formBody);
    }
  }

  static #createEmbedMessage(author, message) {
    if (!author || !message) {
      throw new Error("Missing arguments!");
    }

    const descriptionContent = `**Author:**\n${author}\n\n**Message:**\n${message}`;
    const embed = new Discord.MessageEmbed()
      .setColor(this.#embedMessageColor)
      .setTitle("Message Form Submission")
      .setDescription(descriptionContent)
      .setFooter({ text: "dragunwf.up.railway.app" })
      .setTimestamp();
    return embed;
  }

  static #sendMessageToChannel(channelId, formBody) {
    if (!channelId || !formBody) {
      throw new Error("Missing arguments!");
    }

    const mailEmbedMessage = this.#createEmbedMessage(
      formBody.name,
      formBody.message
    );
    const channel = this.#client.channels.cache.get(channelId);
    channel.send({ embeds: [mailEmbedMessage] });
  }

  static #validateMessageForm(formBody) {
    if (!formBody) {
      throw new Error("Missing argument!");
    }

    const message = formBody.message.toUpperCase();
    const author = formBody.name.toUpperCase();
    return (
      !author.includes(process.env.SECRET_WORD) &&
      !message.includes(process.env.SECRET_WORD)
    );
  }
}

FormBot.onReady();

export default FormBot;
