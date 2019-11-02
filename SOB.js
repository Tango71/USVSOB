// this is a live server! any changes made here are perminant.
// make a clone first so as to not break the bot

const Discord = require("discord.js");
const client = new Discord.Client();
//const config = require("./config.json");
const express = require("express");
const keepalive = require("express-glitch-keepalive");

const app = express();

app.use(keepalive);

app.get("/", (req, res) => {
  res.json("This bot should be online! Uptimerobot will keep it alive");
});
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);

client.on("ready", () => {
  console.log(
    `USVets Bot is now Online, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`
  );

  client.user.setActivity(`, Installed on ${client.guilds.size} server(s)`);
});

client.on("guildCreate", guild => {
  console.log(
    `New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`
  );
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on("guildDelete", guild => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on("guildMemberAdd", member => {
  member.guild.channels
    .get("631519503410528258")
    .send(
      `Welcome To USVets, ${member} You are In the Recruitment channel. Once approved, you will have access to our member area. As this is your first step, to speed up the process, please upload a copy of your DD214 or military ID with sensitive information blacked out. Allong with this, please include your Characters name and IDnumber. Once this is done, the commanders will review it and vote on it. Be advised this could take up to 3 days to complete.`
    );
  // Uncomment below to create a role
  // member.guild.createRole({
  //   name: "Recruit",
  //   color: "#ff0000",
  //   permissions: ["VIEW_CHANNEL", "SEND_MESSAGES", "ATTACH_FILES"]
  // });
  member
    .edit({
      nick: "Potential Member"
    })
    .then(console.log)
    .catch(console.error);
  // un comment to look for a specific role
  // Function;
  // var role = member.guild.roles.find("name", "Recruit");
  // member.addRole(role);
});

// Actual start of code for bot commands
client.on("message", async message => {
  if (message.author.bot) return;

  if (message.content.indexOf(process.env.prefix) !== 0) return;

  const args = message.content
    .slice(process.env.prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  // bot code for sops

  if (command === "help") {
    message.author.send(
      new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle("***___Command list for Bot___***")
        .setDescription("***___Help section for USVets SOPBOT___***")
        .addField("!ban", "will open the banquet sop")
        .addField("!Con", "will open the Construction sop")
        .addField("!g1", "Will open the General Info sop")
        .addField("!g2", "Will open the General Info sop")
        .addField("!g3", "Will open the General Info sop")
        .addField("!g4", "Will open the General Info sop")
        .addField("!awol", "will open the AWOL & LOA sop")
        .addField("!members", "will open the members & staff sop")
        .addField("!kids", "will open the offspring sop")
        .addField("!pa", "will open the personel activity sop")
        .addField("!pg", "will open the ranking sop")
        .addField("!rt", "will open the royal tribunal sop")
        .addField("!sd", "will open the staff duties sop")
        .addField("!zombies", "will open the zombies sop")
        .addField("!z_", "will inform command that zombie is dead. Replace _ with the number of zombie.")
        .addField(
          "!intel",
          "will open the directions on use of the intel form and calculator spreadsheet."
        )
        .addField("!academy", "Will inform everyone that a new academy has opened")

        
    );
    message.delete().catch(O_o => {});
  }

  if (command === "commandershelp") {
    message.author.send(
      new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle("***___Command list for USVets Command___***")
        .setDescription(
          "***___This Covers all Command for server moderators and administrators___***"
        )
        .addField(
          "!usvsay",
          "This command will allow you to appear as though you are speaking as the server bot."
        )
        .addField(
          "!latencyping",
          "This will ping the server to check the latency(if you have no idea what this is dont use it.)"
        )
        .addField("!usvkick", "This Kicks a player from the server.")
        .addField(
          "!usvban",
          "This command bans a member(must be a server admin to use)"
        )
        .addField(
          "!usvd",
          "deletes messages in the channel up to 100 must be less than 14 days old"
        )
        //      .addField("!", "")
        //      .addField("!", "")
        //      .addField("!", "")
        //      .addField("!", "")
        //      .addField("!", "")
        //      .addField("!", "")
        //      .addField("!", "")
        //      .addField("!", "")
        //      .addField("!", "")
        .addBlankField()
        //    .addField("!intel", "will open the directions on use of the intel form and calculator spreadsheet.")
        .addBlankField()

        .addField(
          "***Note***",
          "If an sop needs to be updated or revised please send approved, revised sop in DM to Tango71#0001"
        )
    );
    message.delete().catch(O_o => {});
  }

  //images  placeholder for zombies death

  if (command === "z1") {
       message.channel
          .send(new Discord.Attachment("./Images/z1.png", "z1.png"))
     message.channel.send('@Commanders Z1 Is Dead!')
      .catch(console.error);
   
  }

    if (command === "z2") {
       message.channel
          .send(new Discord.Attachment("./Images/z2.png", "z2.png"))
     message.channel.send('@Commanders Z2 Is Dead!')
      .catch(console.error);
   
  }
     if (command === "z3") {
       message.channel
          .send(new Discord.Attachment("./Images/z3.png", "z3.png"))
     message.channel.send('@Commanders Z3 Is Dead!')
      .catch(console.error);
   
  }
     if (command === "z4") {
       message.channel
          .send(new Discord.Attachment("./Images/z4.png", "z4.png"))
     message.channel.send('@Commanders Z4 Is Dead!')
      .catch(console.error);
   
  }
  
     if (command === "z5") {
       message.channel
          .send(new Discord.Attachment("./Images/z5.png", "z5.png"))
     message.channel.send('@Commanders Z5 Is Dead!')
      .catch(console.error);
   
  }
     if (command === "z6") {
       message.channel
          .send(new Discord.Attachment("./Images/z6.png", "z6.png"))
     message.channel.send('@Commanders Z6 Is Dead!')
      .catch(console.error);
   
  }
     if (command === "z7") {
       message.channel
          .send(new Discord.Attachment("./Images/z7.png", "z7.png"))
     message.channel.send('@Commanders Z7 Is Dead!')
      .catch(console.error);
   
  }
     if (command === "z8") {
       message.channel
          .send(new Discord.Attachment("./Images/z8.png", "z8.png"))
     message.channel.send('@Commanders Z8 Is Dead!')
      .catch(console.error);
   
  }
  // notice for academy
     if (command === "academy") {
       message.channel
          .send(new Discord.Attachment("./Images/academy.png", "academy.png"))
     message.channel.send('@everyone A New Academy is now Open!')
      .catch(console.error);
   
  }
  
  
  //********************************START OF SOPS*******************************************
  //banquet sop
  if (command === "ban") {
    message.author.send(
      new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle("***___USVets Banquet SOP___***")
        .setDescription(
          "***___Standard operating procedures for entering banquets___***"
        )
        .addField(
          "Objective",
          "to maximize Alliance members efforts to increase banquet points"
        )
        .addField("Directives", "See numbered directives below")
        .addBlankField()
        .addField(
          "1",
          "ONLY banquets of 10-seats that will be given priority due to this requiring the least amount of gold to open being the cheapest to prioritize."
        )
        .addField(
          "2",
          "Banquet priority will be on a first come, first serve basis."
        )
        .addField(
          "3",
          "Members will need post in Drill Hall when they will open banquet to get priority and it must be a 10 seat banquet."
        )
        .addField(
          "4",
          "Member who post first will have priority until they have a completed banquet"
        )
        .addField(
          "5",
          "Once banquet is completed an update needs to be posted saying such by the member."
        )
        .addField(
          "6",
          "No other member is to open a banquet during an active banquet priority session."
        )
        .addBlankField()

        .addField(
          "***Note***",
          "If an sop needs to be updated or revised please send approved, revised sop in DM to Tango71#0001"
        )
    );
    message.delete().catch(O_o => {});
  }
  //Start of code for general_info
  if (command === "g1") {
    message.author.send(
      new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle("***___USVets general_information___***")
        .setDescription("***___General information on game details___***")
        .addField(
          "Objective",
          "To provide alliance members with helpful information regarding the game."
        )
        .addBlankField()
        .addField("Retainer Upgrade Costs for each promotion.", ":")
        .addField("Cost for 1-100", "13.68m", true)
        .addField("Cost for 101-150", "53.29m", true)
        .addField("Cost for 151-200", "141.62m", true)
        .addField("Cost for 201-250", "728.17m", true)
        .addField("Cost for 251-300", "2,643.09m", true)
        .addField("Cost for 301-350", "6,519.86m", true)
        .addField("Cost for 351-400", "81,784.40m", true)
        .addBlankField()
        .addField(
          "Retainer strength attack formula for dungeons lvl and str apt for dungeon ",
          "ATK formula = (5000 * level * strength aptitude) + strength Attr"
        )
        .addBlankField()
        .addField(
          "***Note***",
          "If an sop needs to be updated or revised please send approved, revised sop in DM to Tango71#0001"
        )
    );
    message.delete().catch(O_o => {});
  }
  if (command === "g2") {
    message.author.send(
      new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle("Races/event with titles")
        .addField(
          "Prince of Chivalry",
          "Alliance Exp (Member get Duke of Chivalry)",
          true
        )
        .addField("Prince of Civility ", "Local Intimacy", true)
        .addField("Prince Regent", "Prince Regent", true)
        .addField("Prince of Justice", "Evil Queen", true)
        .addField("Prince of Guandong", "Local Tribunal", true)
        .addField("Prince of Yunnan", "Campaign", true)
        .addField(
          "Prince of Jiangxi",
          "Alliance Tribunal (Member get Duke of Jiangxi)",
          true
        )
        .addField(
          "Prince of Leisure",
          " Alliance Intimacy (Member get Duke of Leisure)",
          true
        )
        .addField(
          "Prince of Virtue",
          "Alliance Power (Member get Duke of Virtue)",
          true
        )
        .addField("King of Virtue", "Cross Server Intimacy", true)
        .addField("King of Valiant", "Cross Server Tribunal", true)
        .addField("King of Vision", "Cross Server Power", true)
        .addField("King of Loyalty", "Alliance Cross Server Tribunal", true)
        .addField("King of Etiquette", "Alliance Cross Server Intimacy", true)
        .addField("King of Mercy", "Alliance Cross Server Power", true)
        .addField("Duke of Wealth", "Money used", true)
        .addField("Duke of Vision ", "Food consumed", true)
        .addField("Duke of Guardian", "Troops used", true)
        .addField("Duke of Excellence", "Banquet ", true)
        .addBlankField()
        .addField(
          "***Note***",
          "If an sop needs to be updated or revised please send approved, revised sop in DM to Tango71#0001"
        )
    );
    message.delete().catch(O_o => {});
  }
  if (command === "g3") {
    message.author.send(
      new Discord.RichEmbed()
        .setColor("RANDOM")
        .addField("Evil queen target health", ":")
        .addField("Palace Maid", "Health: 10 million", true)
        .addField("Eunuch", "50 million", true)
        .addField("Senior Eunuch", "100 million", true)
        .addField("Imperial Inquisitor", "500 million", true)
        .addField("Imperial Guard", "2 billion", true)
        .addField("Head Eunuch", "5 billion", true)
        .addField("Empress Cixi", "100 billion", true)
        .addBlankField()
        .addField("Cost in gold", "offspring")
        .addField("Number 1 Scholar", "1000 gold ", true)
        .addField("1st Runner up", "700 gold.", true)
        .addField("2nd Runner up", "560 gold", true)
        .addField("Raised Man", "450 gold", true)
        .addField("Promoted Scholar", "320 gold", true)
        .addBlankField()
        .addField(
          "***Note***",
          "If an sop needs to be updated or revised please send approved, revised sop in DM to Tango71#0001"
        )
    );
    message.delete().catch(O_o => {});
  }
  if (command === "g4") {
    message.author.send(
      new Discord.RichEmbed()
        .setTitle(`General_Information`)
        .addField(`Promotion items info`, `Promotion clothes `, true)
        .addField(`3 green(Barron)`, `1 blue`, true)
        .addField(`3 blue`, `1 purple`, true)
        .addField(`4 purple`, `1 red`, true)
        .addField(`5 red`, `1 yellow`, true)
        .addField(`6 yellow`, `1 gold`, true)

        .addField(
          "***Note***",
          "If an sop needs to be updated or revised please send approved, revised sop in DM to Tango71#0001"
        )
    );
    message.delete().catch(O_o => {});
  }
  //Members & Staff
  if (command === "members") {
    message.author.send(
      new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle("Command and staff positions SOP")
        .addField(
          "Command Structure",
          "-------------------------------------------------------------------------------------"
        )
        .addField(`Leader`, `Major O4`, true)
        .addField(`Vice Leader`, `Captain O3`, true)
        .addField(`Elites`, `2LT O1 & 1LT O2`, true)
        .addField(`Members`, `Enlisted E1, E4-E9`, true)
        .addField(
          "Staff Positions",
          "------------------------------------------------------------------------------------"
        )
        .addField(`Public Relations(PR)`, `Vice Leader`, true)
        .addField(`Recruiting (PR)`, `Elite`, true)
        .addField(`Public Affairs`, `Elite`, true)
        .addField("Combat Operations", "Vice Leader", true)
        .addField("Event Operations", "Elite", true)
        .addField("Intel Operations", "Elite", true)
        .addField(
          "Current Reporting and Directive Structure",
          "------------------------------------------------------------------------------------"
        )
        .addField(
          "Leader CJ has overall say in all matters and gives team directives to Vice leaders.",
          "-"
        )
        .addField(
          "Vice Leader Addalong reports directly to Leader CJ. Provides additional directives as needed and has overall say in all matters in Leader CJ's absence. Vice Leader Addalong is Section leader for Public Relations and assigned staff.",
          "-"
        )
        .addField(
          "Vice Leader Darke reports directly to Leader CJ. Provides additional directives as needed and has overall say in all matters in the absence of both Vice Leader Addalong and Leader CJ. Vice Leader Darke is Section leader for Operations and assigned staff. ",
          "-"
        )
        .addField(
          "Elites must have a 75% collective agreement on all matters in the absence of both Vice Leaders and the Leader (voting reports required). Elites will filter all members concerns to appropriate section and provide general team guidence.",
          "-"
        )
        .addField(
          "Members will follow Elites for guidance on all matters of concern and general team operations.",
          "-"
        )
      //        .addfield("-", "Questions or concerns refer to Command")

      // .addField(
      //   "***Note***",
      //   "If an sop needs to be updated or revised please send approved, revised sop in DM to Tango71#0001"
      // )
    );
    message.delete().catch(O_o => {});
  }
  //AWOL & LOA SOP
  if (command === "awol") {
    message.delete().catch(O_o => {});
    message.author.send(
      new Discord.RichEmbed()
        .setColor("RANDOM")
        .addField("AWOL", ": ")
        .addField(
          "1.",
          "You will be considered AWOL should you be off comms and/or inactive in-game for more than 7 days(1 week) without notice. You are subjected to being kicked and/or have reduced comms access on the 8th day until you reestablish comms."
        )
        .addField(
          "2",
          "You should request a LOA should you find that you may potentially be off comms and/or inactive for more than 7 days(1 week). This maybe done by letting someone in command know or on the 8th day of no comms and/or inactivity you will get kicked and/or have comms access reduced."
        )
        .addBlankField()
        .addField(
          "Personnel who identified as LOA status can be kicked in-game and have comms access reduced at the discretion of Command for reasons that may include but are not limited to the following",
          ":"
        )
        .addField("1", "Space is needed for new active recruits.")
        .addField("2", "Character becomes a liability during Alliance events.")
        .addField(
          "Regardless of the length of AWOLs and LOAs expulsions will be handle on a case by case basis. ",
          "-",
          true
        )
        .addField(
          "-",
          "Kicked Personnel are always welcome to rejoin at anytime. All that is need is for comms to be reestablish and desire to be active. If there is no slot open rejoining personnel will be accepted on a first come, first served basis.",
          true
        )
        .addBlankField()
        .addField("-", "Questions or concerns refer to Command")

        .addField(
          "***Note***",
          "If an sop needs to be updated or revised please send approved, revised sop in DM to Tango71#0001"
        )
    );
  }

  // Ranking Pay Grade Chart:
  if (command === "pg") {
    message.author.send(
      new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle("Ranking Pay Grade Chart:")
        .addField("O4", "Major", true)
        .addField("O3", "Captain", true)
        .addField("O2", "1st LT", true)
        .addField("O1", "2nd LT", true)
        .addField("E9", "Sgt Maj", true)
        .addField("E8", "1st Sgt", true)
        .addField("E7", "SFC/GNY", true)
        .addField("E6", "SSG", true)
        .addField("E5", "SGT", true)
        .addField("E4", "CPL", true)
        .addField("E3", "(NOT USED)", true)
        .addField("E2", "(NOT USED)", true)
        .addField("E1", "PVT", true)
        .addField(
          "New members",
          " will be E1 for 2 days then advance to E4 till day 7."
        )
        .addField(
          "-",
          "After that Command will determine where to place them based on game knowledge, character power and over all participation."
        )
    );
    message.delete().catch(O_o => {});
  }
  // Royal Tribunal
  if (command === "rt") {
    message.author.send(
      new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle("ROYAL TRIBUNAL:")
        .addField(
          "1",
          " SAVE, SAVE, SAVE! This event is 5 days running and you will need a bare minimum of 5 challenge tokens per day if your character is reasonably strong. That's a 25 token minimum so collect them and then keep them on standby. The more you have the better because if other alliances catch on to how we operate it will turn into a regular blood bath."
        )
        .addField(
          "2",
          "CHOOSE YOUR TARGETS. Have a list of targets ready by writing down name/alliance info to speed things up. DO NOT PICK ONE TARGET AND REPEATEDLY ATTACK THAT ONE PERSON. This may sound like a good plan to attack a weak player, but if you make an enemy of a weak player then you may become the enemy"
        )
        .addField(
          "Cont",
          "of their friends, and they will remember you till the event ends. Choose several names and spread your attacks around. We want points and we can get them from lots of different places. Their is a list of all the players with their ranking and their alliance. Look at the bottom of that list we will try"
        )
        .addField(
          "Cont",
          "to copy and repost in #drill_hall ) in the last three pages or so and find someone from another server (lets try to leave our server alone in this event please). Find their alliance name then look for the player. If you don't see the players name just look for the alliance name again. Some servers have alliances with the same names so the alliance name will appear several times. "
        )
        .addField(
          "Cont",
          "The players name should be close to the bottom of the alliance's player list. Make a challenge or hunt, select the player to attack/hunt, then make your attack. BE PATIENT! Wait till the end of the day to make your move then attack all out. Don't worry about making any boards because there won't be time for anyone to check them. Just rack up as many points as you can as close to the end as you can so no one can put you back under before the checkerd flag gets waved."
        )
    );
    message.delete().catch(O_o => {});
  }
  // Offspring slots vs. Institution slots SOP
  if (command === "kids") {
    message.author.send(
      new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle("Offspring slots vs. Institution slots SOP")
        .addField("1", "The end goal should be retainer advancement")
        .addField(
          "2",
          "Offspring slot offer an increase in offspring to raise at a single time, however be advise that the higher your confidants are  the higher the max level for offspring causing offspring to take longer to raise."
        )
        .addField(
          "3",
          "Institution slot offer more retainers to study at once which allows for more retainer to gain skill exp and book exp which is needed to advance retainers for dungeons, campaign and tribunal. This also offers better perform in the areas previously mentioned."
        )
        .addField(
          "4",
          "This is left to players discretion. It is strongly encouraged to focus on retainer advancements over offspring development."
        )
    );
    message.delete().catch(O_o => {});
  }
  // Staff Postions and descriptions
  if (command === "sd") {
    message.author.send(
      new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle("Staff Postions and descriptions")
        .addField(
          "Public Relations Section",
          "Led by a Vice Leader.Commanding Officer responsible for managing recruiting and public affairs."
        )
        .addField(
          "Recruiting Elite(Officer)",
          "Works to fill team openings. Actively soliciting individuals qualified as Veteran or Current Service Members. Responsiblites include Monitor Recruiting Office, Processing referrals for membership from current members, Monitor roll call."
        )
        .addField(
          "Public Affairs Elite(Officer)",
          "Works to build, develope, and maintain relations between US_VETS and Other Alliances. Responsiblity include Monitor Foreign Embassy. Receive reports from members on actions(Non-Event related) taken against them by outside forces.Be the voice of the alliance, try to maintain positive and helpful communication in game chat.Monitor roll call."
        )
        .addField(
          "Operations Section",
          " Led by a Vice Leader.Commanding Officer responsible for managing team operations and developing SOPs."
        )
        .addField(
          "Event Ops Elite(Officer)",
          "Creates and briefs reports of current events. Coordinate resources needed for Alliance ranking events. Responsiblies include: Inform team of Alliance's Objectives for Team ranking events. Receive reports from members' on events results.Monitor roll call. Update Event briefs."
        )
        .addField(
          "Intel Ops Elite(Officer)",
          "Collects and organize information for strategic planning reports. Opertate Back-End Intel System. Responsiblies include: Monitor Intel reports from various sources. Receive reports of Intel collected by members. Monitor roll call. Update Intel channel. "
        )
    );
    message.delete().catch(O_o => {});
  }
  // Zombies
  if (command === "zombies") {
    message.author.send(
      new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle("Zombie SOP updated 01/31/19")
        .addField("Objectives", ":")
        .addField(
          "Primary",
          "To increase Allience EXP for improvements to team ranking position",
          true
        )
        .addField(
          "Secondary",
          "To maxiumize redeem for all members to use in Alliance store.",
          true
        )
        .addField("Directives", ":")
        .addField(
          "1",
          "Member will be assign a target. Be sure to check the Zombie Reset Post for Target Instructions in drill_hall.",
          true
        )
        .addField(
          "2",
          " Kill shot will no longer be assign. Making all OPEN Targets Free range.",
          true
        )
        .addField(
          "3",
          "Member may request to be assign the oppertunity for kill shot assignments and will be assigned on the next reset day.",
          true
        )
        .addField(
          "4",
          "When a kill shot is requested the target will be brought down as low as possible or around the <5% mark.",
          true
        )
        .addField(
          "5",
          "When needed Zombies will be put in testing mode and instruction for testing will be posted.",
          true
        )
        .addField(
          "6",
          "Assigned kill shot not complete by 2100(game time) are consider forfeit and will be available to anyone to take.",
          true
        )
        .addField(
          "7",
          "If a members find that they have more than half a mag left or doesn't get to fire at a target please report it as it will be noted and used to determine when the next change in target pattern will happen.",
          true
        )
    );
    message.delete().catch(O_o => {});
  }
  //Construction SOP
  if (command === "con") {
    message.author.send(
      new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle("Construction SOP")
        .addField(
          "Construction assignment will be given on a weekly basis in one of the four attribute areas",
          ":"
        )
        .addField("1", "progress is reset on the 1st of each month.", true)
        .addField(
          "2",
          "Once weekly target is down members may use the remaining days of the week as they see fit unless directed otherwise.",
          true
        )
        .addField("Construction relic", ":")
        .addField("STR", ":")
        .addField("1", "Weiyuan fort=100,000,000(100m)", true)
        .addField("2", "Yanmen pass=5,000,000,000(5b)", true)
        .addField("3", "The great wall=120,000,000,000(120b)", true)
        .addField("INT", ":")
        .addField("1", "Hanging temple=5,000,000,000(5b)", true)
        .addField("2", "Confucian temple =100,000,000(100m)", true)
        .addField("3", "Temple of heaven=60,000,000,000(60b)", true)
        .addField("POL", ":")
        .addField("1", "Leshan Giant budda=3,000,000,000(3b)", true)
        .addField("2", "The prefect of kaifeng=100,000,000(100m) ", true)
        .addField("3", "The forbbiden city=60,000,000,000(60b)", true)
        .addField("CHAR", ":")
        .addField("1", "Yueyang tower=100,000,000(100m)", true)
        .addField("2", "Old summer palace=3,000,000,000(3b)", true)
        .addField("3", "Chengde mountain=3,000,000,000(3b)", true)
    );
    message.delete().catch(O_o => {});
  }
  // Personel Activity SOP
  if (command === "pa") {
    message.author.send(
      new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle("Personel Activity SOP---Being UPDATED check back later.")
    );
    message.delete().catch(O_o => {});
  }
  // Intel SOP
  if (command === "intel") {
    message.author.send(
      new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle("Intel SOP")
        .addField(
          "***___ALL  data is Live! This being said, safeguards are put in place to try and prevent mishaps. You Must follow  this exactly or data will not be accurate. ___***",
          "First, the Spreadsheets are designed to auto calculate all results.. The only thing you need to do is follow the steps.",
          true
        )
        .addField("Enlisted and Officer form filling details ", ":")
        .addField("STEP1", "Open the link provided, when told to do so. ", true)
        .addField(
          "STEP2",
          "Select your name from the list and input all your data (numbers only)  Press submit, and close the page. (Repeat if you have blackops )"
        )
        .addField(
          "IMPORTANT NOTES",
          "1. ONLY ENTER YOUR DATA 1 TIME! This will create Inaccurate data if multiple entries are done. Intel ops will direct you if more current data is needed.  2. Hard time To Have all data in to Intel Ops will be 1 hour (server game time) prior to end of event. If you fail to get your data in before this time your numbers will not be included in the report to command staff. "
        )
        .addField(
          "OFFICERS",
          "The  Alliance Data tab contains all the specifics on each member. I have provided an easy access running totals  which is found on the officer area Tab. This is a classified document so if you need access, contact  Your chain of command. If you are approved and  need access to these , send your  gmail address to Intel Ops and  you will be added to the list. Of authorized users. The Form data is linked to all the spreadsheets, so when a member updates, it is available  almost immediately. The ***Officer Area*** tab shows roster info and who's data we have , during events Intel_OPS will submit form links on Discord #drill_hall for data gathering. Intel reports will be available upon members filling out data. Officers Will meet in the Commanders office approximately 45minutes prior to events end to discuss the FINAL intel report. The Combat  Ops Officer or designee will then Brief #drill_hall on how to proceed."
        )
    );
    message.delete().catch(O_o => {});
  }
  //**************************************************************END OF SOPS*******************************************
  //*************START OF ADMIN COMMANDS******************

  // place a warning on a user and demote them based on number of times they have been warned

  //accept into alliance command
  if (command === "usvadd") {
    if (message.channel.type === "dm")
      console.log(`[${message.author.username}] ${message.content}`);
    let memberai = message.mentions.members.first();
    //    let memberid = member.client.User.username();
    // let guildmembera = message.members.find(val => val.user.tag === memberai);
    if (!memberai) return message.reply("Please tag a valid member");
    memberai.send(
      "Congratulations and Welcome to the Alliance! Your Membership has been approved by Command. Please take a moment to read our Standard operating Procedures by typing !help"
    );

    message.channel.send(
      new Discord.RichEmbed()
        .setColor("RED")
        .addField(
          "Attention to orders! A new Recruit has been approved by command and added to the roster as rank PVT (E1).",
          " Please take a moment to to say hello."
        )

      //        .settimestamp()
    );
    message.delete().catch(O_o => {});

    memberai
      .edit({
        nick: ` PVT(E1)`
      })

      .then(console.log)
      .catch(console.error);

    memberai
      //these are the roles for enlisted and pvt(e1)
      .setRoles(["632003707894104065", "632003520131891200"])
      .then(console.log)
      .catch(console.error);
  }

  //checks the latency of the server
  if (command === "latencyping") {
    const m = await message.channel.send("Ping?");
    m.edit(
      `Pong! Latency is ${m.createdTimestamp -
        message.createdTimestamp}ms. API Latency is ${Math.round(
        client.ping
      )}ms`
    );
    message.delete().catch(O_o => {});
  }
  // Commanders Text Via BOT
  if (command === "usvsay") {
    const sayMessage = args.join(" ");
    const channel = client.channels.get("637686319711256586");
    message.channel.send(
      " Attention! The following is an Official Message from Command."
    );
    message.channel.send(sayMessage);
    message.delete().catch(O_o => {});
  }

  // kick member
  if (command === "usvkick") {
    if (
      !message.member.roles.some(r =>
        ["Administrator", "Moderator"].includes(r.name)
      )
    )
      return message.reply("Sorry, you don't have permissions to use this!");

    let member =
      message.mentions.members.first() || message.guild.members.get(args[0]);
    if (!member)
      return message.reply("Please mention a valid member of this server");
    if (!member.kickable)
      return message.reply(
        "I cannot kick this user! Do they have a higher role? Do I have kick permissions?"
      );

    let reason = args.slice(1).join(" ");
    if (!reason) reason = "No reason provided";

    await member
      .kick(reason)
      .catch(error =>
        message.reply(
          `Sorry ${message.author} I couldn't kick because of : ${error}`
        )
      );

    message.reply(
      `${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`
    );
    message.delete().catch(O_o => {});
  }
  //ban member
  if (command === "usvban") {
    if (!message.member.roles.some(r => ["Administrator"].includes(r.name)))
      return message.reply("Sorry, you don't have permissions to use this!");

    let member = message.mentions.members.first();
    if (!member)
      return message.reply("Please mention a valid member of this server");
    if (!member.bannable)
      return message.reply(
        "I cannot ban this user! Do they have a higher role? Do I have ban permissions?"
      );

    let reason = args.slice(1).join(" ");
    if (!reason) reason = "No reason provided";

    await member
      .ban(reason)
      .catch(error =>
        message.reply(
          `Sorry ${message.author} I couldn't ban because of : ${error}`
        )
      );
    message.reply(
      `${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`
    );
    message.delete().catch(O_o => {});
  }
  // delete messages

  if (command === "usvd") {
    message.delete().catch(O_o => {});
    const deleteCount = parseInt(args[0], 10);
    if (!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply(
        "Please provide a number between 2 and 100 for the number of messages to delete"
      );
    const fetched = await message.channel.fetchMessages({ limit: deleteCount });
    message.channel
      .bulkDelete(fetched)
      .catch(error =>
        message.reply(`Couldn't delete messages because of: ${error}`)
      );
  }
  // ****************END OF ADMIN COMMANDS********************
});

client.login(process.env.token);
