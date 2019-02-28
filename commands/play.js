const ytdl = require('ytdl-core');
const queue = require('../bot.js');

module.exports = {
    name: 'play',
    description: 'Plays a specified youtube link in voice channel.',
    usage: '<youtube link>',
    aliases: ['pl'],
    args: true,
    execute(message, args) {    
        if (message.channel.type !== 'text') return;

        const { voiceChannel } = message.member;
        const link = args[0]

        if (!voiceChannel) {
        	return message.reply('please join a voice channel first!');
       	}

        voiceChannel.join().then(connection => {
        	const stream = ytdl(link, { filter: 'audioonly' });
        	const dispatcher = connection.playStream(stream);
        	dispatcher.on('end', () => voiceChannel.leave());
        });
	}
};