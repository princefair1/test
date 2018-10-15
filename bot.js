const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
client.user.setActivity(",",{type: 'PLAYING'})
	      var interval = setInterval (function () {
client.channels.get('499967504534470676').send('لا إله الا الله, سبحان الله, الحمدالله, الله اكبر');
		  }, 120000);
  
  	      var interval1 = setInterval (function () {
  client.channels.get('499967504534470676').send('#daily');
  client.channels.get('499967504534470676').send('#rep <@401053902168129556>');  
		  }, 86800000);
	      var interval2 = setInterval (function () {
client.channels.get('499967504534470676').send('t!daily <@401053902168129556>');
client.channels.get('499967504534470676').send('t!rep <@401053902168129556>');
		  }, 61360000);
});
client.login(process.env.BOT_TOKEN);

// //
