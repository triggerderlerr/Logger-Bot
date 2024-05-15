const { Client, GatewayIntentBits, Partials } = require("discord.js");
const version = require("../package.json").version;
const { Logger } = require("term-logger");
const { readdir } = require("fs");
require("dotenv").config();

const express = require('express');
const server = express();
 
server.all('/', (req, res) => {
  res.send(`OK`)
})
 
function keepAlive() {
  server.listen(3000, () => { console.log("Server is Ready!!" + Date.now()) });
}

module.exports = keepAlive;

process.title = `Server Logger Bot | ${version}`;
console.clear();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildEmojisAndStickers,
    GatewayIntentBits.GuildIntegrations,
    GatewayIntentBits.GuildInvites,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildMessageTyping,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildScheduledEvents,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildWebhooks,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.DirectMessageTyping,
    GatewayIntentBits.DirectMessageReactions,
    GatewayIntentBits.MessageContent,
  ],
  partials: [
    Partials.Channel,
    Partials.GuildMember,
    Partials.GuildScheduledEvent,
    Partials.Message,
    Partials.Reaction,
    Partials.ThreadMember,
    Partials.User,
  ],
  allowedMentions: {
    parse: ["everyone", "roles", "users"],
  },
});

// Use term-logger globally
client.log = Logger;

readdir("./src/events", (err, files) => {
  let eventFiles = files.filter((t) => t.split(".").pop() === "js");

  if (err) {
    return Logger.error(err);
  }

  eventFiles.forEach((file) => {
    let eventName = file.split(".")[0];
    let event = require(`./events/${eventName}`);
    client.on(eventName, event.bind(null, client));

    Logger.event(`Successfully registered event ${eventName}.js`);
  });
});

client.login(process.env.TOKEN);
