const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("User has MANAGE_MESSAGES permissions, noob.");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply("Couldn't find that user o3o");
  let warnlevel = warns[wUser.id].warns;

  message.reply(`<@${wUser.id}> has ${warnlevel} warnings.`);

}

module.exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: [],
      permLevel: 2
};  
  
module.exports.help = {
    name: 'warnlevel',
    description: 'Displays the mentioned users warnings.',
    usage: 'warnlevel [mention]'
};