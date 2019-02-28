module.exports = {
    name: 'server',
    description: 'Prints server information in chat.',
    args: false,
    aliases: ['s'],
    execute(message) {
        message.channel.send(`-\nServer name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}\nCreation Date: ${message.guild.createdAt}\nServer Region: ${message.guild.region}`);
    }
};