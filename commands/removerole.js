const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("The user has MANAGE_MEMBERS permissions! Nice try though lul");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply(":rolling_eyes: You either didn't mention someone or the person isn't in the Discord.");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Specify a role, noob!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("That role doesn't exist, you idiot.");

  if(!rMember.roles.has(gRole.id)) return message.reply("They don't even have that role, how do you expect me to remove it?");
  await(rMember.removeRole(gRole.id));

  try{
    await rMember.send(`RIP, you lost the ${gRole.name} role.`)
  }catch(e){
    message.channel.send(`RIP! <@${rMember.id}> has lost the role: ${gRole.name}. We tried to DM them, but their DMs are locked.`)
  }
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 2
};  

exports.help = {
    name: 'removerole',
    description: 'Removes a role from the mentioned user.',
    usage: 'removerole [mention] [role]'
  };