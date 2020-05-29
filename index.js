const Discord = require('discord.js');
const client = new Discord.Client(); 
const { Client, Collection } = require("discord.js");
const { prefix, token } = require('./config.json');
const path = require('path');
const fs = require('fs')
client.commands = new Discord.Collection();



client.on("ready", () => {
    console.log(`Hi, ${client.user.username} is now online!`);
    
client.user.setActivity('.pog help | Dm Skiez#6055 for assistance ', { type: 'PLAYING' });

});

client.on("message", async message => {
    const prefix = "-";

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    if (command) 
        command.run(client, message, args);
});













client.on('message', msg=>{
  if(msg.content === "ALBINO DICK"){
    msg.reply('ALBINO GOAT')
  }
})

client.on('message', msg=>{
  if(msg.content === "ALBINO GOAT"){
    msg.reply('ALBINO DICK')
  }
})



client.on('message', msg=>{
  if(msg.content === "<@701497942024126586> wanna have sex"){
    msg.reply('No faggot. Go fuck someone else')
  }
})


client.on('nessage', msg => {
   if(msg.content === "oh stick it inside daddy and flood me with your hot juices!"){
     msg.reply('shut the fuck up')
   }
})



require('events').EventEmitter.defaultMaxListeners = 99


client.on('message', msg=>{
  if(msg.content === ".pog alex"){
    msg.reply('CONC3RT MAMN AYEEE IM SAD ::(((((( OHH WEEE WEE BTW UR A CONCERT OWO UWU https://giphy.com/gifs/bighavi-concert-crowd-control-big-havi-LoU1CkLzNTERSwvwim')
  }
})


client.on('message', msg=>{
  if(msg.content === ".tiny"){
    msg.reply('tiny aye aye aye yuH UJR SDKSO GOYNR OHGN Y I WENTR TNJTTINGT OMG TINY IS SO HJYTOTY AYEE AYEWE AYEE LES S SNMAYE EOMHG WHJERS OHT AYEWEE https://giphy.com/gifs/lil-uzi-vert-you-was-right-ZRZ5yyCBcrTm8')
  }
})





client.on('message', msg=>{
  if(msg.content === ".pog rape <@701497942024126586>'"){
    msg.reply('so you really want to fuck me? Fuck off and fuck someone else ')
  }
})


client.on('message', msg=>{
  if(msg.content === ".pog tiny"){
    msg.reply('tiny aye aye aye yuH UJR SDKSO GOYNR OHGN Y I WENTR TNJTTINGT OMG TINY IS SO HJYTOTY AYEE AYEWE AYEE LES S SNMAYE EOMHG WHJERS OHT AYEWEE https://giphy.com/gifs/lil-uzi-vert-you-was-right-ZRZ5yyCBcrTm8')
  }
})





client.on('message', msg=>{
  if(msg.content === ".pog help"){
    msg.reply('Hi! Welcome to Pog Bot! A bot developed by Skiez#6055! Here are the commands this bot can do! \n \n .pog log - check what happepend on the latest update on pog bot! \n \n.pog ban - ban a user \n \n .pog kick - kick a user \n \n .pog alex - hes a concert lmfao \n \n .pog almerd - the flat whore \n \n .pog skiez - the developer of Pog bot! \n \n .pog rape - rape/fuck/sex a user! \n \n .pog date - date a user! \n \n .pog kiss - kiss a user! \n \n .pog sendchildporn - send a user child porn! (they arent actually getting sent child porn \n \n .pog rip - REST IN PEACE DESHAUN :Depressed6: \n \n .pog misu - {Description} ! \n \n .pog nelson - King simp! \n \n .pog - Yo \n \n .pog marry - Marry a user! \n \n .pog whoop = whoop a user! \n \n .pog suicide = kill ur self ! \n \n .pog rule 9 - skiez u straight faggot stop \n \n .pog shev - Shevy The Whev! \n \n There will be more fun and moderating commands in the future!'
    
    
    
    )
  }
})




client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith('.tiny touch')) {
    const user = message.mentions.users.first();
    if (user) {
      message.reply(`**Welcome to our new command list! .tiny!** TINY JUST TOUCHED @${user.tag} OHHH WEEE BRUDA https://giphy.com/gifs/JrkogBt7NqHJ94GFaz`);
    const member = message.guild.member(user);
    
  } else {
    // Otherwise, if no user was mentioned
    message.reply("tag a person to make tiny touchie wouhie oh uwu teheheh >W<");
  }
 
  }});











client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith('.pog marry')) {
    const user = message.mentions.users.first();
    if (user) {
      message.reply(`CONGRATULTIONS MOTHERFUCKER.... YOU AND MOTHERFUCKING @${user.tag} ARE NOW FUCKIN E-MARRIED LITTLE SHITS https://giphy.com/gifs/lPdi6znTjG6TvnGus8 `);
    const member = message.guild.member(user);
    
  } else {
    // Otherwise, if no user was mentioned
    message.reply("tag a person to marry you horny shit kys faggot!");
  }
 
  }});


  client.on('message', msg=>{
    if(msg.content === ".pog suicide"){
      msg.reply('Nice faggot. You killed your self https://giphy.com/gifs/PmRRs0tT0C6KbUQShT')
    }
  })
  
  client.on('message', msg=>{
    if(msg.content === ".pog log"){
      msg.reply('**Update on May 29th 2020 04:36:00 PM** \n \n Pogbot has a host! You dont need to wait for the owner to be online to use it! \n \n Removed the .pog butter and .pog rule 9 command.')
    }
  })





  client.on('message', message => {
    if (!message.guild) return;
    if (message.content.startsWith('.pog whoop')) {
      const user = message.mentions.users.first();
      if (user) {
        message.reply(`WOW FAGGOR U JUST WHOOPED @${user.tag} IN DA ASS AYE https://giphy.com/gifs/JRsVJo5aq4KPvXiX5n`);
      const member = message.guild.member(user);
      
    } else {
      // Otherwise, if no user was mentioned
      message.reply("tag a person to whoop you fucking faggot!");
    }
   
    }});
  
    

    client.on('message', msg=>{
      if(msg.content === ".pog ban <@699746785547124737>"){
        msg.reply('you cant ban the owner of POG bot fuck you niggar')
      }
    })
    

    client.on('message', msg=>{
      if(msg.content === ":OkayChamp::thumbsup:"){
        msg.reply('happy ching chong')
      }
    })
    



  


client.on('message', msg=>{
  if(msg.content === ".pog almerd"){
    msg.reply('so flat that you cant cum AYE AND SHE A COUCH *WHAT* https://tenor.com/view/national-lazy-day-happy-lazy-day-couch-gif-12313902')
  }
})

client.on('message', msg=>{
  if(msg.content === ".pog skiez"){
    msg.reply('the owner of POG Bot! (Ps. he stan dead rappers')
  }
})


client.on('message', msg=>{
  if(msg.content === "FUCK OFF POG BOT"){
    msg.reply('NO!')
  }
})

client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith('.pog rape')) {
    const user = message.mentions.users.first();
    if (user) {
      message.reply(`MMMM YEAA IM RAPING ${user.tag} OOOHOHHHHH https://giphy.com/gifs/mFqcqBBoukllURx6Et `);
    const member = message.guild.member(user);
  } else {
    // Otherwise, if no user was mentioned
    message.reply("tag a person to fuck");
  }
 
  }});
  


  client.on('message', message => {
    if (!message.guild) return;
    if (message.content.startsWith('.pog date')) {
      const user = message.mentions.users.first();
      if (user) {
        message.reply(`YOU AND  @${user.tag} ARE NOW OFFICALLY EDATING LIKE FAGGOTS https://giphy.com/gifs/iG4fHQC9Dfc06k2Z4B `);
      const member = message.guild.member(user);
      
    } else {
      // Otherwise, if no user was mentioned
      message.reply("tag a person to edate!");
    }
   
    }});


    client.on('message', message => {
      if (!message.guild) return;
      if (message.content.startsWith('.pog kiss')) {
        const user = message.mentions.users.first();
        if (user) {
          message.reply(`OMG WOW! YOU KISSED @${user.tag}! the e-dating poggers! https://giphy.com/gifs/gEvemiG07hKrCty2Lo `);
        const member = message.guild.member(user);
        
      } else {
        // Otherwise, if no user was mentioned
        message.reply("tag a person to kiss you horny fuck FUCK YOU AYE");
      }
     
      }});



   

    client.on('message', message => {
      if (!message.guild) return;
      if (message.content.startsWith('.pog sendchildporn')) {
        const user = message.mentions.users.first();
        if (user) {
          message.reply(`YO I SENT  @${user.tag} THE CHILD PORN AYE https://giphy.com/gifs/ZB9Bjx4wbb7vcjSPyY `);
        const member = message.guild.member(user);
      } else {
        // Otherwise, if no user was mentioned
        message.reply("tag a person to send the child porny worny!!");
      }
     
      }});
  
  








client.on('message', msg=>{
  if(msg.content === ".pog cosmic"){
    msg.reply('OH YEAH LOOK AT ME. I HAVE A EFAINCE OH YEAH I LOVE HER SO FUCKIN NUCH YERAHHHHHHH')
  }
})


client.on('message', msg=>{
  if(msg.content === ".pog"){
    msg.reply('NICE COCK. MAY ME HELP U TODAY? OWO UWU AH HA OWO UHU >W<')
  }
})




client.on('message', msg=>{
  if(msg.content === ".pog rip"){
    msg.reply('REST IN PEACE DESHAUN https://cdn.discordapp.com/attachments/700464762173128804/705075124851965982/image0.jpg')
  }
})





client.on('message', msg=>{
  if(msg.content === "niggar"){
    msg.reply('bro xero stfu ')
  }
})















client.on('message', msg=>{
  if(msg.content === "boohoo niggar"){
    msg.reply('SHUT THE FUCK UP XERO')
  }
})


client.on('message', msg=>{
  if(msg.content === "FUCK OFF"){
    msg.reply('NO NIGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AYE')
  }
})




client.on('message', msg=>{
  if(msg.content === ".pog misu"){
    msg.reply('OH WEE WEE HAHAHABA FD DOF GOIG AHYGO9HY0TY SIAU7EEWE4E A7EEEEE AYE AYE AYW EYA E LOOK ITS TINY AND ALEX HAVING SEX https://tenor.com/view/lil-baby-music-video-singing-gif-13507257')
  }
})

client.on('message', msg=>{
  if(msg.content === "Shup"){
    msg.reply('suck me dick flame! Arrr!')
  }
})


client.on('message', msg=>{
  if(msg.content === "shup"){
    msg.reply('suck me dick flame! Arrr!')
  }
})


client.on('message', msg=>{
  if(msg.content === ".pog buggy"){
    msg.reply('BUGSTER OHH TEHEHE HE KINDA KINKY THO :flushed: https://tenor.com/view/dancing-jamming-grooving-ayy-jack-harlow-gif-16352684 ')
  }
})





client.on('message', msg=>{
  if(msg.content === ".pog shev"){
    msg.reply('Shevy Whevy fuck you https://tenor.com/view/frankreynolds-iasip-dannydevito-alwayssunny-gif-5351820')
    let response 
  }
})


client.on('message', msg=>{
  if(msg.content === ".pog nelson"){
    msg.reply('King simp :Horny6: HES ALSO A FUCKING SHOE LMAOOOO https://tenor.com/view/nike-shoe-spin-commercial-gif-8989594')
    let response 
  }
})



client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // if the message content starts with "!ban"
  if (message.content.startsWith('.pog ban')) {
   
    
      const user = message.mentions.users.first();
      
      if (!message.member.hasPermission("BAN_MEMBERS", "ADMINISTRATOR")) return message.channel.send("You cant use this command you dumb fuck")

      // If we have a user mentioned
      if (user) {
        // Now we get the member from the user
        const member = message.guild.member(user);
        // If the member is in the guild
        if (member) {
          /**
           * Ban the member
           * Make sure you run this on a member, not a user!
           * There are big differences between a user and a member
           * Read more about what ban options there are over at
           * https://discord.js.org/#/docs/main/master/class/GuildMember?scrollTo=ban
           */
          member
            .ban({
              reason: 'They were bad!',
            })
            .then(() => {
              // We let the message author know we were able to ban the person
              message.reply(`I BANNED THE  ${user.tag} IN DA ASS ***AYE*** https://cdn.discordapp.com/attachments/700464762173128804/711074125854277662/zpvX4t2j.gif`);
            })
            .catch(err => {
              // An error happened
              // This is generally due to the bot not being able to ban the member,
              // either due to missing permissions or role hierarchy
              message.reply('for fuvck sakes. I COULDNT BAN THIS MAN, TREY AGAIN MATE');
              // Log the error
              console.error(err);
            });
        } else {
          // The mentioned user isn't in this guild
          message.reply("GUILD WRONG AND IDFK WHAT THAT MEANS");
        }
      } else {
        // Otherwise, if no user was mentioned
        message.reply("uh, makle sure you typed that tag correctly you dumb mother fucker. YOU KNOW WHAT? FUCK YOU LITTLE SHIT! FUCK YOU!");
      }
     



    
    }});



    client.on('message', message => {
      // Ignore messages that aren't from a guild
      if (!message.guild) return;
    
      // If the message content starts with "!kick"
      if (message.content.startsWith('.pog kick')) {
        // Assuming we mention someone in the message, this will return the user
        // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
        const user = message.mentions.users.first();
        // If we have a user mentioned
        if (user) {
          // Now we get the member from the user
          const member = message.guild.member(user);
          // If the member is in the guild
          if (member) {
            /**
             * Kick the member
             * Make sure you run this on a member, not a user!
             * There are big differences between a user and a member
             */
            member
              .kick('Optional reason that will display in the audit logs')
              .then(() => {
                // We let the message author know we were able to kick the person
                message.reply(`LMFAO. I  kicked ${user.tag} IN DA ASS WHAT A FAGGOT ***AYE*** https://giphy.com/gifs/XeYxHSPGRXKvIC5WGF`);
              })
              .catch(err => {
                // An error happened
                // This is generally due to the bot not being able to kick the member,
                // either due to missing permissions or role hierarchy
                message.reply('FUCK. I WAS UNABNL;E TO KICK DIS MAN');
                // Log the error
                console.error(err);
              });
          } else {
            // The mentioned user isn't in this guild
            message.reply("That user isn't in this guild! AHAHAHAHA FUNNY RIGFHYT?");
          }
          // Otherwise, if no user was mentioned
        } else {
          message.reply("YOU DUMB MOTHERCVUDKR. U WILL NEED TO MENTION A USER TO KICK DUMMY DUM DUM AYE");
        }
      }
    });
                                                                              
    
















client.login(token);


      
