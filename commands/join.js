module.exports = {
    name: 'join',
    description: 'Joins your channel for music streaming.',
    args: false,
    execute(message) {    
        (msg) => {
            return new Promise((resolve, reject) => {
                const voiceChannel = msg.member.voiceChannel;
                if (!voiceChannel || voiceChannel.type !== 'voice') return msg.reply('I couldn\'t connect to your voice channel...');
                voiceChannel.join().then(connection => resolve(connection)).catch(err => reject(err));
            });
        }
	}
};