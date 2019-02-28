const { prefix } = require('../config.json');
const yt = require('ytdl-core');
const queue = require('../bot.js');

module.exports = {
    name: 'add',
    description: 'Adds a song to the queue.',
    args: true,
    execute(message, args) {    
        let url = args[0];
        if (url == '' || url === undefined) return message.channel.send(`You must add a YouTube video url, or id after ${prefix}add`);
            yt.getInfo(url, (err, info) => {
                if(err) return message.channel.send('Invalid YouTube Link: ' + err);
                if (!queue.hasOwnProperty(message.guild.id)) queue[message.guild.id] = {}, queue[message.guild.id].playing = false, queue[message.guild.id].songs = [];
                queue[message.guild.id].songs.push({url: url, title: info.title, requester: message.author.username});
                message.channel.send(`added **${info.title}** to the queue`);
            });
    }
};