const Discord = require('discord.js');
const client = new Discord.Client();
const { prefixo } = require('./config.json);

client.on('ready', () => {
  console.log('Estou Online!')
});

client.on('message', message => {
     if (message.author.bot) return;
     if (message.channel.type == 'dm') return;
     if (!message.content.toLowerCase().startsWith(prefixo.toLowerCase())) return;
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

    const args = message.content
        .trim().slice(prefixo.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();


    try {
        const commandFile = require(`./commands/${command}.js`)
        commandFile.run(client, message, args, database);
    } catch (err) {
    console.error('Erro:' + err);
    let embed = new Discord.MessageEmbed()
    .setTitle('Erro!')
    .setDescription('Esse comando não existe!')
    .setColor('RANDOM')
    .setTimestamp()
    .setFooter(client.user.username)
    message.channel.send(embed)
  }

});

client.login(process.env.TOKEN)
