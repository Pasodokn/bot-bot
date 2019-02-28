module.exports = {
    name: 'kick',
    description: 'Kicks a user from the server.',
    usage: '<user>',
    guildOnly: true,
    execute(message, args) {
        if (!message.mentions.users.size) {
    		return message.reply('you need to tag a user in order to kick them!');
    	}

    	const taggedUser = message.mentions.users.first();

    	message.channel.send(`${taggedUser.username} has been kicked from the server.`);
    },
};