const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (client, message, args) => {

  let user = message.author;

     const ajuda = new Discord.MessageEmbed()
     .setThumbnail(user.avatarURL({ dynamic: true, format: "png", size: 1024 }))
     .setTimestamp()
     .setTitle("Lista de comandos!")
     .setColor('RANDOM')
     .setDescription("Reaja de acordo com o que procura!\n\nEmoji 1 aqui - Comandos de ... \n Emoji 2 aqui - Comandos de ...\n Emoji 3 aqui - Comandos de ...")
 
   message.channel.send(ajuda).then(msg => {
       msg.react('Emoji 1 aqui').then(r => {
       msg.react('Emoji 2 aqui').then(r => {
       msg.react('Emoji 3 aqui').then(r => {
       })
       })
       })
      const infoFilter = (reaction, user) => reaction.emoji.name === 'Emoji 1 aqui' && user.id === message.author.id;
      const funFilter = (reaction, user) => reaction.emoji.name === 'Emoji 2 aqui' && user.id === message.author.id;
      const utilFilter = (reaction, user) => reaction.emoji.name === 'Emoji 3 aqui' && user.id === message.author.id;
 
      const info = msg.createReactionCollector(infoFilter);
      const fun = msg.createReactionCollector(funFilter);
      const util = msg.createReactionCollector(utilFilter);
      

      info.on('collect', r2 => {
        ajuda.setThumbnail(user.avatarURL({ dynamic: true, format: "png", size: 1024 }))
        ajuda.setTitle("Comandos de ...")
        ajuda.setDescription('Seus comandos aqui')
        ajuda.setTimestamp()
        msg.edit(ajuda)
      })
        fun.on('collect', r2 => {
        ajuda.setThumbnail(user.avatarURL({ dynamic: true, format: "png", size: 1024 }))
        ajuda.setColor('RANDOM')
        ajuda.setTitle("Commandos de ...")
        ajuda.setDescription('Seus comandos aqui')
        ajuda.setTimestamp()
        msg.edit(ajuda)
      })
      util.on('collect', r2 => {
        ajuda.setThumbnail(user.avatarURL({ dynamic: true, format: "png", size: 1024 }))
        ajuda.setTitle("Comandos de ...") 
        ajuda.setDescription('Seus comandos aqui')
        ajuda.setTimestamp()
        msg.edit(ajuda)
      })
})
}
