const Discord = require("discord.js");

const client = new Discord.Client;

const prefix = "AB";

client.on("ready", () => {
    console.log("Bot démarré !");
});

client.on("guildMemberAdd", member =>{
    console.log("Un nouveau membre est arrivé !");
    member.guild.channels.cache.find(channel => channel.id === "654341828224483328").send(member.displayName + "est arrivé !\nNous sommes désormais **" + member.guild.memberCount + "**sur le serveur !")
});

client.on("guildMemberRemove", member => {
    console.log("Un membre nous a quitté !")
    member.guild.channels.cache.find(channel => channel.id === "665669794749612072").send(member.displayName + "nous a quitté ! :sob: ")
})
client.on("message", message =>{
    
    if(message.author.bot) return;
    
    //ABhelp
    if(message.content == prefix + "help"){
        message.channel.send(" Voici les commandes fonctionnels : ABping / ABstat / ABMC / ABhelp / ABIP / ABTest /")
    }
    
    //ABping
    if(message.content == prefix + "ping"){
        message.reply("Pong, évidemment !")
    }

    //ABstat
    if(message.content == prefix + "stat"){
        message.channel.send( "**" + message.author.username + "** qui a pour identifiant : "+ message.author.id + " est un membre du serveur !")
    }

    //ABMC
    if(message.content == prefix + "MC"){
        message.reply("Voici le lien pour installer Minecraft Java Edition : https://launcher.mojang.com/download/MinecraftInstaller.msi , MAIS pour les personnes ayant la version Crack : https://dl2.tlauncher.org/f.php?f=files%2FTLauncher-2.72-Installer-0.6.9.exe !")
    }
    
    //ABsecret
    if(message.content == prefix + "secret"){
        message.channel.send("Secret : https://discord.gg/vFYQGp4t !")
    }

    //ABNouveau
    if(message.content == prefix + "Nouveau"){
        console.log("Un admin a utilisé la commande ABNouveau !")
        message.channel.send("Bonjour ou bonsoir, j'ai l'impression que tu es un nouveau sur le serveur, Donc dis moi : As tu Minecraft Crack (Jeu non acheté) ou Minecraft Premium (Jeu acheté) ?")
    }

    //ABIP
    if(message.content == prefix + "IP"){
        message.channel.send("Voici l'ip du serveur Studio : Minecraft_Studio.aternos.me / Voici l'ip du serveur Event : EventMinecraftStudio.aternos.me / Voici l'ip du serveur Event Among Us Minecraft : EventMinecraftStudio.aternos.me!")
    }

    //ABTest
    if(message.content == prefix + "Test"){
        console.log("Un joueur a testé le bot !")
        message.reply(" Merci d'avoir testé le bot !")
    }
});



client.login(process.env.TOKEN);