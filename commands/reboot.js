module.exports = {
    name: 'reboot',
    description: 'Reboots the bot.',
    args: false,
    execute(message) {    
        (msg) => {
            if (msg.author.id == ownerID) process.exit(); //Requires a node module like Forever to work.
        }
    }
};