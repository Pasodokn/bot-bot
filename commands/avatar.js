module.exports = {
    name: 'avatar',
    description: 'Prints your avatar or the avatar of a specified user in channel.',
    usage: '<user>',
    aliases: ['icon', 'avi'],
    execute(message, args) {
        if (!message.mentions.users.size) {
        	return message.channel.send(`Your avatar: ${message.author.displayAvatarURL}`);
   		}
    	const avatarList = message.mentions.users.map(user => {
        	return `${user.username}'s avatar: ${user.displayAvatarURL}`;
    	});
    	message.channel.send(avatarList);
    }
};