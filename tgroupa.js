var ServerID = "499939108521639966";// اي دي الروم
var ChannelID = "ChannelID";

const Discord = require('discord.js');
const client1 = new Discord.client();


client1.on('warn', console.warn);

client1.on('error', console.error);



client1.on('ready', () => console.log('ProBot Credits Miner Discord.js Script'));

client1.on('disconnect', () => console.log('PROBOT credits miner had disconnected!'));

client1.on('reconnecting', () => console.log('PROBOT credits miner is reconnecting...'));


function timerFunc() {
    client1.on('message', msg => {
        client1.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7))


    });
}
  
var timer = setTimeout(timerFunc, 1000);
client1.on("ready", () => {

	      var interval1 = setInterval (function () {
  client1.guilds.get(ServerID).channels.get(ChannelID).send('#daily');
  client1.guilds.get(ServerID).channels.get(ChannelID).send('#rep <@401053902168129556>');  
		  }, 86000000);
  
	      var interval2 = setInterval (function () {
client1.guilds.get(ServerID).channels.get(ChannelID).send('t!daily <@401053902168129556>');
client1.guilds.get(ServerID).channels.get(ChannelID).send('t!rep <@401053902168129556>');
		  }, 61360000);
});

client1.login(process.env.BOT_TOKEN); 


const client2 = new Discord.client();


function timerFunc() {
    client2.on('message', msg => {
        client2.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7))


    });
}
  
var timer = setTimeout(timerFunc, 1000);
client2.on("ready", () => {

	   
	      var interval1 = setInterval (function () {
  client2.guilds.get(ServerID).channels.get(ChannelID).send('#daily');
  client2.guilds.get(ServerID).channels.get(ChannelID).send('#rep <@401053902168129556>');  
		  }, 86000000);
  
	      var interval2 = setInterval (function () {
client2.guilds.get(ServerID).channels.get(ChannelID).send('t!daily <@401053902168129556>');
client2.guilds.get(ServerID).channels.get(ChannelID).send('t!rep <@401053902168129556>');
		  }, 61360000);
});

client2.login(process.env.STARK_BOT70); 
