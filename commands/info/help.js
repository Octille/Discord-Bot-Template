const fs = require('fs');
const path = require('path');
const discord = require('discord.js');
const { readdirSync } = require("fs");

module.exports = {
    name: 'help',
    aliases: ["h"],
    description: 'send this message',
    async execute(Discord, client, message, args) {
        if(!args.length){
            const noargsembed = new Discord.MessageEmbed()
            .setTitle(`My Commands`)
            .addField(`💡misc`, `\`!help misc\``, true)
            .addField(`📋info`, `\`!help info\``, true)
            .setFooter(`for even more info you can do !help (command name)`)
            .setColor("BLUE")
            return message.channel.send(noargsembed)
       
}
let title;
if (args[0].toLowerCase() === 'misc') title = `💡Misc commands`;
if (args[0].toLowerCase() === 'info') title = `📋Info commands`;
if(args[0]){
    fs.readdir(path.join(__dirname, '..', `${args[0].toLowerCase()}`), (err1, files1, dir) => {
        const cmd = files1.map(file => `\`${file}\``)
    const category = new Discord.MessageEmbed()
    .setTitle(title)
    .setDescription(`${cmd.toString()
    .replace(/[{()}]/g, '')
    .replace(/.js/g, '')
    .replace(/,/g, ', ')}`)
    return message.channel.send(category)
    });
    }

const data = [];
const { commands } = message.client;
const name = args[0].toLowerCase();
const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));
if (!command) {
    return 
}
if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
if (command.description) data.push(`**Description:** ${command.description}`);
if (command.usage) data.push(`**Usage:** !${command.name} ${command.usage}`);
const helpembed = new Discord.MessageEmbed()
.setTitle(command.name)
.setDescription(data)
.setColor("RANDOM")
message.channel.send(helpembed);
console.log(data);
}

}
