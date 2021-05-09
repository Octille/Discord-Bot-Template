const Discord = require('discord.js');

module.exports = {
    name : 'test',
    description : 'sends a funny chat',
    execute(Discord, client, message, args) {
        message.channel.send('test!')
    }
}