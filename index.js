const Discord = require ('discord.js')

const client = new Discord.Client();

const prefix = '~';
let connection = '=';
client.login('ODM5MjE1NzM4NzkxMjY0MzE4.YJGakA.Qi7kE0gp0A7Vq2vsqlQMKCx8c5c');
async function play() {
    console.log("ready")
	connection = await client.channels.cache.get('828939518937006100').join();
	
}
client.on('ready' ,play); 



async function memberhandle(oldMember, newMember) {
    let newUserChannel = newMember.channel 
    
    let oldUserChannel = oldMember.channel
    //console.log(!oldUserChannel);
    //console.log(!newUserChannel);
    if(newUserChannel) {
        if (newUserChannel.id !== '828939518937006100') return;
        //console.log('test');
        if (newMember.member.user == client.user) return;
        const dispatcher = connection.play('ali.mp3');

        

    }
}
client.on('voiceStateUpdate', memberhandle );
