const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true})


client.on('message', message => { 

if (!message.guild) return; 

if (message.content === 'batman') { 
 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
if (message.member.voiceChannel) { 

message.member.voiceChannel.join() 

.then(connection => { 


}) 

.catch(console.log); 

} else { 

message.reply('**ئەگەر بەخۆت نێیە ڤۆیس ئەمنیش نایێم😂**'); 

} 

} 

});


client.on("message" , message => {

if(message.channel.type === 'dm') {

if (message.content.startsWith("https://discord.gg/")) {
    
  message.author.send(`ڕیکلامەکەکراتۆش ئەم سێرڤەرەدانێhttps://discord.gg/ZrUGYCsJAw`) // لینکی سێرڤەری خۆت لیرە دابنی بە هەتا هەتای بێت
    
  client.channels.get("793531558710607947").send(
`> <:ARBELE_UPUP:791411050238836766> By: <@${message.author.id}> ✅ 
${message.content}`)
}
    }
        })




client.on('ready', () => {
console.log(`ON ${client.guilds.size} Servers`);
console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`BY BATMAN`,"") 
});




client.login("Nzk4NjEzOTI0MDI2MjUzMzcz.X_3lLQ.GUI6EC0JNmr6DhFqpNZojbhbKiI");//تۆکین لێرە دانێ
