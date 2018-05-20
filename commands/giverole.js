const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("no");
  if(args[0] == "help"){
    message.reply("Usage: !giverole <user> <role>");
    return;
  }
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Doublecheck if you're mentioning someone in the server. :rolling_eyes:");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Specify a role, doofus! :rolling_eyes:");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Ugh what now :rolling_eyes:? Doublecheck if the role you specified exists.");

  if(rMember.roles.has(gRole.id)) return message.reply(`This is really getting old, :rolling_eyes:. You can't give <@${rMember.id}> the ${gRole.name} role because they already have it!`);
  await(rMember.addRole(gRole.id));

  try{
    await rMember.send(`Congrats, you have been given a role! The role you have been given is: ${gRole.name}`)
  }catch(e){
    console.log(e.stack);
    message.channel.send(`<@${rMember.id}>, has been given the role ${gRole.name}. This message would be sent to their DMs, however, their DMs are locked.`)
  }
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 2
};  

exports.help = {
    name: 'giverole',
    description: 'Gives a role to the mentioned user.',
    usage: 'giverole [mention] [role]'
  };