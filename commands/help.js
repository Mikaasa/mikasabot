const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

  let helpembed = new Discord.RichEmbed()
  .setDescription("Help Menu")
  .setColor("#F03434")
  .addField("Member Commands", "help, ping, serverinfo, botinfo, ~~userinfo~~, and report.");

  message.channel.send(helpembed);

  if(message.member.hasPermission("MANAGE_MESSAGES")){
  let modembed = new Discord.RichEmbed()
  .setDescription("Mod Help Menu")
  .setColor("#F03434")
  .addField("Mod Commands", "~~lockdown~~, addrole, removerole, kick, ban, warn, warnlevel, and mute.")

   try{
     await message.author.send(modembed)
     message.react("447846291305922560")
   }catch(e){
     message.reply("Your DMs are locked. I cannot send you the mod commands.");
     message.react("447846307386884096")
   }
}
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "0"
};

exports.help = {
  name: "help",
  //category: "Miscellaneous",
  description: "Displays all available commands for your permission level.",
  usage: "help"
};