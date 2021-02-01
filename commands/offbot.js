// Desliga o bot.
const Discord = require('discord.js');

exports.run = async (client, message, args) => {
if (message.author.id === 'ID DO DONO DO BOT') { // limita o comando a uma só pessoa
let embed = new Discord.MessageEmbed()
.setTitle('Desligado!')
.setDescription('O bot client.user.username foi desligado com sucesso!')
.setColor('RANDOM')
await message.channel.send(embed)
  process.exit();
}
}
