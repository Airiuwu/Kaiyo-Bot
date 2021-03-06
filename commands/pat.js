const Discord = require('discord.js');
const config = require("../config.json")
const prefix = config.bot.prefix;
const { patGifs, messages } = require("../constants/const")

module.exports = function (client) {
    client.on("message", async message => {
        if (message.content.startsWith(prefix + 'pat')) {
            let args = message.content.slice(prefix.length).trim().split(' ');
            let mention = message.mentions.users.first();
            args[0] = mention
            if (!args[0]) return message.channel.send("please mention someone....");
                var randomMessage = messages[Math.round(Math.random() * (messages.length - 1))];
            if (mention === message.author) return message.channel.send(randomMessage)

                var gif = patGifs[Math.round(Math.random() * (patGifs.length - 1))];
            try {
                const embed = new Discord.RichEmbed()
                .setTitle(`${message.author.username} has patted ${mention.username} cute...`)
                .setImage(gif)
                .setColor('#00ffb3')
                message.channel.send({embed})
            } catch (e) {
                return message.channel.send("a problem has occured, please contact a staff member!")
            }

        }
    })
}