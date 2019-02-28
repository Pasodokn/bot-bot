const { prefix } = require('../config.json');
const bot = require('../bot.js');

module.exports = {
    name: 'queue',
    description: 'View the music bot queue.',
    aliases: ['q'],
    args: false,
    execute(message) {    
            var queue = [];
            if (queue[message.guild.id] === undefined) return message.channel.send(`Add some songs to the queue first with ${prefix}add`);
            let tosend = [];
            queue[message.guild.id].songs.forEach((song, i) => { tosend.push(`${i+1}. ${song.title} - Requested by: ${song.requester}`);});
            message.channel.send(`__**${message.guild.name}'s Music Queue:**__ Currently **${tosend.length}** songs queued ${(tosend.length > 15 ? '*[Only next 15 shown]*' : '')}\n\`\`\`${tosend.slice(0,15).join('\n')}\`\`\``);
    }
};