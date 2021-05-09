module.exports = (Discord, client, message) => {
    const prefix = '!'

    if(message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();
    
    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));
    if (!command) return message.channel.send('command not found please refer to \`!help\`');
    if(command) command.execute(Discord, client, message, args);
    
}

