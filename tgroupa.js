var ServerID = "499939108521639966";// اي دي الروم
var ChannelID = "499967544912773120";

const Discord = require('discord.js');
const client1 = new Discord.client1();


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

	      var interval = setInterval (function () {
client1.channels.get('502231555163553792').send('لا إله الا الله, سبحان الله, الحمدالله, الله اكبر');		  }, 100000);
  
	      var interval1 = setInterval (function () {
  client1.channels.get('499967544912773120').send('#daily');
  client1.channels.get('499967544912773120').send('#rep <@401053902168129556>');  
		  }, 86000000);
  
	      var interval2 = setInterval (function () {
client1.channels.get('499967544912773120').send('t!daily <@401053902168129556>');
client1.channels.get('499967544912773120').send('t!rep <@401053902168129556>');
		  }, 61360000);
});

client1.login(process.env.BOT_TOKEN); 


const client1 = new Discord.client1();


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

	      var interval = setInterval (function () {
client1.channels.get('502231555163553792').send('لا إله الا الله, سبحان الله, الحمدالله, الله اكبر');		  }, 100000);
  
	      var interval1 = setInterval (function () {
  client1.channels.get('499967544912773120').send('#daily');
  client1.channels.get('499967544912773120').send('#rep <@401053902168129556>');  
		  }, 86000000);
  
	      var interval2 = setInterval (function () {
client1.channels.get('499967544912773120').send('t!daily <@401053902168129556>');
client1.channels.get('499967544912773120').send('t!rep <@401053902168129556>');
		  }, 61360000);
});

client1.login(process.env.STARK_BOT70); 