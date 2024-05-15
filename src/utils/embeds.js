const { EmbedBuilder } = require("discord.js");

module.exports = {
  // Event: channelCreate
  channelC: (client, channel) => {
    const channelCreate = new EmbedBuilder()
      .setColor(client.color)
      .setAuthor({
        name: `${client.user.username} | Yeni oda oluşturuldu`,
        iconURL: client.user.displayAvatarURL({ size: 4096 }),
      })
      .setThumbnail(
        "https://cdn.discordapp.com/emojis/1138482145673871400.webp?size=96&quality=lossless"
      )
      .addFields(
        { name: `İsim`, value: `${channel.name}`, inline: true },
        { name: `ID`, value: `${channel.id}`, inline: true },
        { name: `Mention`, value: `<#${channel.id}>`, inline: true },
        {
          name: `NSFW`,
          value: `${channel.nsfw ? "Hayır :white_check_mark:" : "Evet :x:"}`,
          inline: true,
        },
        {
          name: `Kanal Kategorisi`,
          value: `${channel.parent.name}`,
          inline: true,
        },
        {
          name: `Oluşturuldu`,
          value: `<t:${parseInt(channel.createdAt / 1000)}:R>`,
          inline: true,
        }
      );

    return channelCreate;
  },

  // Event: channelDelete
  channelD: (client, channel) => {
    const channelDelete = new EmbedBuilder()
      .setColor(client.color)
      .setAuthor({
        name: `${client.user.username} | Kanal Silindi`,
        iconURL: client.user.displayAvatarURL({ size: 4096 }),
      })
      .setThumbnail(
        "https://cdn.discordapp.com/emojis/1138482145673871400.webp?size=96&quality=lossless"
      )
      .setDescription(
        `:white_check_mark: **#${channel.name}** isimli kanal silindi`
      )
      .addFields(
        { name: `Adı`, value: `${channel.name}`, inline: true },
        { name: `ID`, value: `${channel.id}`, inline: true },
        {
          name: `NSFW`,
          value: `${channel.nsfw ? "Yes :white_check_mark:" : "No :x:"}`,
          inline: true,
        }
      );

    return channelDelete;
  },

  // Event: channelPinsUpdate
  channelP: (client, channel) => {
    var date = Date.now();

    const channelPins = new EmbedBuilder()
      .setColor(client.color)
      .setAuthor({
        name: `${client.user.username} | Mesaj Sabitlendi`,
        iconURL: client.user.displayAvatarURL({ size: 4096 }),
      })
      .setThumbnail(
        "https://cdn.discordapp.com/emojis/1138483813694046339.webp?size=96&quality=lossless"
      )
      .setDescription(`:pushpin: Kanala mesaj sabitlendi ya da kaldırıldı`)
      .addFields(
        { name: `Kanal`, value: `<#${channel.id}>`, inline: true },
        { name: `Kanal ID`, value: `${channel.id}`, inline: true },
        { name: `Zaman`, value: `<t:${parseInt(date / 1000)}:R>`, inline: true }
      );

    return channelPins;
  },

  // Event: channelUpdate
  channelUN: (client, newChannel, oldChannel) => {
    var date = Date.now();

    const channelUpdateName = new EmbedBuilder()
      .setColor(client.color)
      .setAuthor({
        name: `${client.user.username} | Yeni Kanal Adı`,
        iconURL: client.user.displayAvatarURL({ size: 4096 }),
      })
      .setThumbnail(
        "https://cdn.discordapp.com/emojis/1138482145673871400.webp?size=96&quality=lossless"
      )
      .setDescription(
        [
          `### Kanal Bilgisi:`,
          `Adı: **${newChannel.name}**`,
          `Mention: <#${newChannel.id}>`,
          `ID: **${newChannel.id}**`,
        ].join("\n")
      )
      .addFields(
        { name: `Öncesi`, value: `${oldChannel.name}`, inline: true },
        { name: `Sonrası`, value: `${newChannel.name}`, inline: true },
        { name: `Zaman`, value: `<t:${parseInt(date / 1000)}:R>`, inline: true }
      );

    return channelUpdateName;
  },

  // Event: channelUpdate
  channelUNSFW: (client, newChannel, oldChannel) => {
    const channelNSFW = new EmbedBuilder()
      .setColor(client.color)
      .setAuthor({
        name: `${client.user.username} | Kanal Yaş Sınırlaması Güncellendi`,
        iconURL: client.user.displayAvatarURL({ size: 4096 }),
      })
      .setDescription(
        [
          `### Kanal Bilgisi:`,
          `Adı: **${newChannel.name}**`,
          `Mention: <#${newChannel.id}>`,
          `ID: **${newChannel.id}**`,
        ].join("\n")
      )
      .addFields(
        {
          name: `Eski Kısıtlama`,
          value: `${oldChannel.nsfw ? "Etkinleştirildi :white_check_mark:" : "Engellendi :x:"
            }`,
          inline: true,
        },
        {
          name: `Yeni Kısıtlama`,
          value: `${newChannel.nsfw ? "Etkinleştirildi :white_check_mark:" : "Engellendi :x:"
            }`,
          inline: true,
        }
      )
      .setTimestamp();

    return channelNSFW;
  },

  // Event: channelUpdate
  channelUP: (client, newChannel, oldChannel) => {
    var date = Date.now();

    const channelUpdateParent = new EmbedBuilder()
      .setColor(client.color)
      .setAuthor({
        name: `${client.user.username} | Kanal Kategorisi Değiştirildi`,
        iconURL: client.user.displayAvatarURL({ size: 4096 }),
      })
      .setThumbnail(
        "https://cdn.discordapp.com/emojis/1138488289846890557.webp?size=96&quality=lossless"
      )
      .setDescription(
        [
          `### Kanal Bilgisi:`,
          `Adı: **${newChannel.name}**`,
          `Mention: <#${newChannel.id}>`,
          `ID: **${newChannel.id}**`,
        ].join("\n")
      )
      .addFields(
        {
          name: `Öncesi`,
          value: `${oldChannel.parent || "None :x:"}`,
          inline: true,
        },
        {
          name: `Sonrası`,
          value: `${newChannel.parent || "None :x:"}`,
          inline: true,
        },
        { name: `Zaman`, value: `<t:${parseInt(date / 1000)}:R>`, inline: true }
      );

    return channelUpdateParent;
  },

  // Event: channelUpdate
  channelUT: (client, newChannel, oldChannel) => {
    var date = Date.now();

    const channelUpdateTopic = new EmbedBuilder()
      .setColor(client.color)
      .setAuthor({
        name: `${client.user.username} | Kanal Konusu Değişti`,
        iconURL: client.user.displayAvatarURL({ size: 4096 }),
      })
      .setThumbnail(
        "https://cdn.discordapp.com/emojis/1138482145673871400.webp?size=96&quality=lossless"
      )
      .setDescription(
        [
          `### Kanal Bilgisi:`,
          `Adı: **${newChannel.name}**`,
          `Mention: <#${newChannel.id}>`,
          `ID: **${newChannel.id}**`,
        ].join("\n")
      )
      .addFields(
        {
          name: `Öncesi`,
          value: `${oldChannel.topic || `None :x:`}`,
          inline: true,
        },
        {
          name: `Sonrası`,
          value: `${newChannel.topic || `None :x:`}`,
          inline: true,
        },
        { name: `Zaman`, value: `<t:${parseInt(date / 1000)}:R>`, inline: true }
      );

    return channelUpdateTopic;
  },

  // Event: channelUpdate
  channelURPU: (client, newChannel, oldChannel) => {
    var date = Date.now();

    const channelUpdateRatelimitPerUser = new EmbedBuilder()
      .setColor(client.color)
      .setAuthor({
        name: `${client.user.username} | Kanal Yavaş Modu Değişti`,
        iconURL: client.user.displayAvatarURL({ size: 4096 }),
      })
      .setThumbnail(
        "https://cdn.discordapp.com/emojis/785483969453883432.webp?size=96&quality=lossless"
      )
      .setDescription(
        [
          `### Kanal Bilgisi:`,
          `Adı: **${newChannel.name}**`,
          `Mention: <#${newChannel.id}>`,
          `ID: **${newChannel.id}**`,
        ].join("\n")
      )
      .addFields(
        {
          name: `Önceki Süre`,
          value: `${oldChannel.rateLimitPerUser || "None :x:"}`,
          inline: true,
        },
        {
          name: `Sonraki Süre`,
          value: `${newChannel.rateLimitPerUser || "None :x:"}`,
          inline: true,
        },
        { name: `Zaman`, value: `<t:${parseInt(date / 1000)}:R>`, inline: true }
      );

    return channelUpdateRatelimitPerUser;
  },

  // Event: emojiCreate
  emojiC: (client, emoji) => {
    var date = Date.now();

    const emojiCreate = new EmbedBuilder()
      .setColor(client.color)
      .setAuthor({
        name: `${client.user.username} | Yeni Emoji Eklendi`,
        iconURL: client.user.displayAvatarURL({ dynamic: 4096 }),
      })
      .setThumbnail(emoji.url)
      .addFields(
        { name: `Adı`, value: `${emoji.name}`, inline: false },
        { name: `ID`, value: `${emoji.id}`, inline: false },
        { name: `Zaman`, value: `<t:${parseInt(date / 1000)}:R>`, inline: false }
      );

    return emojiCreate;
  },

  // Event: emojiDelete
  emojiD: (client, emoji) => {
    var date = Date.now();

    const emojiDelete = new EmbedBuilder()
      .setColor(client.color)
      .setAuthor({
        name: `${client.user.username} | Emoji Kaldırıldı`,
        iconURL: client.user.displayAvatarURL({ size: 4096 }),
      })
      .setThumbnail(emoji.url)
      .addFields(
        { name: `Adı`, value: `${emoji.name}`, inline: false },
        { name: `ID`, value: `${emoji.id}`, inline: false },
        { name: `Zaman`, value: `<t:${parseInt(date / 1000)}:R>`, inline: false }
      );

    return emojiDelete;
  },

  // Event: emojiUpdate
  emojiU: (client, newEmoji, oldEmoji) => {
    var date = Date.now();

    const emojiUpdate = new EmbedBuilder()
      .setColor(client.color)
      .setAuthor({
        name: `${client.user.username} | Emoji Adı Değiştirildi`,
        iconURL: client.user.displayAvatarURL({ size: 4096 }),
      })
      .setThumbnail(newEmoji.url)
      .addFields(
        { name: `Yeni Adı`, value: `${oldEmoji.name}`, inline: false },
        { name: `Eski Adı`, value: `${newEmoji.name}`, inline: false },
        { name: `Zaman`, value: `<t:${parseInt(date / 1000)}:R>`, inline: false }
      );

    return emojiUpdate;
  },

  // Event: guildBanAdd
  guildBA: (client, member, reason) => {
    const guildBanAdd = new EmbedBuilder()
      .setColor(client.color)
      .setAuthor({
        name: `${client.user.username} | Kullanıcı Yasaklandı`,
        iconURL: client.user.displayAvatarURL({ size: 4096 }),
      })
      .setThumbnail(
        "https://cdn.discordapp.com/emojis/1117871692803494023.webp?size=96&quality=lossless"
      )
      .setDescription(
        [
          `**${member.user.username}** isimli kullanıcı banlandı`,
          ``,
          `**Adı:** ${member.user.username}`,
          `**ID:** ${member.user.id}`,
        ].join("\n")
      )
      .setFooter({
        text: `Sebep: ${reason || "None"}`,
        iconURL: member.user.displayAvatarURL({ dynamic: true, size: 4096 }),
      })
      .setTimestamp();

    return guildBanAdd;
  },

  // Event: guildBanRemove
  guildBR: (client, member, reason) => {
    const guildBanRemove = new EmbedBuilder()
      .setColor(client.color)
      .setAuthor({
        name: `${client.user.username} | Kullanıcının Yasağı Kaldırıldı`,
        iconURL: client.user.displayAvatarURL({ size: 4096 }),
      })
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 4096 }))
      .setDescription(
        [
          `**${member.user.username}** yasağı kaldırıldı`,
          ``,
          `**Kullanıcı:**`,
          `**Adı:** ${member.user.username}`,
          `**ID:** ${member.user.id}`,
        ].join("\n")
      )
      .setTimestamp();

    return guildBanRemove;
  },

  // Event: guildMemberAdd
  guildMA: (client, member) => {
    var date = Date.now();

    const guildMemberAdd = new EmbedBuilder()
      .setColor(client.color)
      .setAuthor({
        name: `${member.user.username} sunucuya katıldı`,
        iconURL: member.user.displayAvatarURL({ dynamic: true, size: 4096 }),
      })
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 4096 }))
      .setDescription([`<@${member.user.id}> sunucuya katıldı`].join("\n"))
      .addFields(
        { name: `Adı`, value: `${member.user.username}`, inline: true },
        { name: `ID`, value: `${member.user.id}`, inline: true },
        { name: `Zaman`, value: `<t:${parseInt(date / 1000)}:R>`, inline: true }
      );

    return guildMemberAdd;
  },

  // Event: Member left
  guildMR: (client, member) => {
    var date = Date.now();

    const guildMemberRemove = new EmbedBuilder()
      .setColor(client.color)
      .setAuthor({
        name: `${member.user.username} | Sunucudan Ayrıldı`,
        iconURL: member.user.displayAvatarURL({ dynamic: true, size: 4096 }),
      })
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 4096 }))
      .setDescription(
        [`**${member.user.username}** sunucudan ayrıldı`].join("\n")
      )
      .addFields(
        { name: `Adı`, value: `${member.user.username}`, inline: true },
        { name: `ID`, value: `${member.user.id}`, inline: true },
        { name: `Zaman`, value: `<t:${parseInt(date / 1000)}:R>`, inline: true }
      );

    return guildMemberRemove;
  },

  // Event: messageDelete
  messageD: (client, message) => {
    var date = Date.now();

    const messageDelete = new EmbedBuilder()
      .setColor(client.color)
      .setAuthor({
        name: `Bir mesaj silindi`,
        iconURL: client.user.displayAvatarURL({ dynamic: true }),
      })
      .setThumbnail(
        "https://cdn.discordapp.com/emojis/830790543659368448.webp?size=96&quality=lossless"
      )
      .setDescription(
        [
          `### Mesaj içeriği`,
          `\`\`\`${message}\`\`\``
        ].join("\n")
      )
      .addFields(
        {
          name: `Mesaj ID`,
          value: `${message.id}`,
          inline: false,
        },
        {
          name: `Kullanıcı`,
          value: `<@${message.author.id}>`,
          inline: false,
        },
        {
          name: `Kullanıcı Bilgisi`,
          value: `${message.author.username}**/**${message.author.id}`,
          inline: false,
        },
        {
          name: `Kanal`,
          value: `<#${message.channel.id}>`,
          inline: false,
        },
        { name: `Zaman`, value: `<t:${parseInt(date / 1000)}:R>`, inline: true }
      );

    return messageDelete;
  },

  // Event: messageUpdate
  messageU: (client, oldMessage, newMessage) => {
    var date = Date.now();

    const messageUpdate = new EmbedBuilder()
      .setColor(client.color)
      .setAuthor({
        name: `Mesaj Güncellendi (1/2)`,
        iconURL: client.user.displayAvatarURL({ dynamic: true }),
      })
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/1240076731860123658/1240431838464573470/pencil.png?ex=664689ac&is=6645382c&hm=e84a387a18d69beb071af45acf7725dcc1ec6b9a309ec5c7c4f3a13cb68ee6dc&"
      )
      .setDescription(
        [
          `### Mesaj Kaynağı`,
          `\`\`\`${oldMessage}\`\`\``
        ].join("\n")
      )
      .addFields();

    return messageUpdate;
  },

  // Event: messageUpdate
  messageUN: (client, oldMessage, newMessage) => {
    var date = Date.now();

    const messageUpdate = new EmbedBuilder()
      .setColor(client.color)
      .setAuthor({
        name: `Mesaj Güncellendi (2/2)`,
        iconURL: client.user.displayAvatarURL({ dynamic: true }),
      })
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/1240076731860123658/1240431838464573470/pencil.png?ex=664689ac&is=6645382c&hm=e84a387a18d69beb071af45acf7725dcc1ec6b9a309ec5c7c4f3a13cb68ee6dc&"
      )
      .setDescription(
        [
          `### Güncellenen Mesaj`,
          `\`\`\`${newMessage}\`\`\``
        ].join("\n")
      )
      .addFields(
        {
          name: `Mesaj ID`,
          value: `${newMessage.id}`,
          inline: false,
        },
        {
          name: `Kullanıcı`,
          value: `<@${newMessage.author.id}>`,
          inline: false,
        },
        {
          name: `Kullanıcı Bilgisi`,
          value: `${newMessage.author.username}**/**${newMessage.author.id}`,
          inline: false,
        },
        {
          name: `Kanal`,
          value: `<#${newMessage.channel.id}>`,
          inline: false,
        },
        { name: `Zaman`, value: `<t:${parseInt(date / 1000)}:R>`, inline: true }
      );

    return messageUpdate;
  },

  // Event: voiceStateUpdate
  voiceJ: (client, oldState, newState) => {
    var date = Date.now();

    const voiceJoin = new EmbedBuilder()
      .setColor(client.color)
      .setAuthor({
        name: `${newState.member.user.username} | Sese Katıldı`,
        iconURL: newState.member.user.displayAvatarURL({
          dynamic: true,
          size: 4096,
        }),
      })
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/1050740883319967764/1155814932999327814/1f50a.png"
      )
      .setDescription(
        `<@${newState.member.user.id}> sesli sohbete **katıldı** <#${newState.channel.id}>`
      )
      .addFields({
        name: `Zaman`,
        value: `<t:${parseInt(date / 1000)}:R>`,
        inline: true,
      });

    return voiceJoin;
  },

  // Event: voiceStateUpdate
  voiceL: (client, oldState, newState) => {
    var date = Date.now();

    const voiceLeft = new EmbedBuilder()
      .setColor(client.color)
      .setAuthor({
        name: `${newState.member.user.username} | Sesten Ayrıldı`,
        iconURL: newState.member.user.displayAvatarURL({
          dynamic: true,
          size: 4096,
        }),
      })
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/1050740883319967764/1155814932999327814/1f50a.png"
      )
      .setDescription(
        `<@${oldState.member.user.id}> ses kanalından **ayrıldı** <#${oldState.channel.id}>`
      )
      .addFields({
        name: `Zaman`,
        value: `<t:${parseInt(date / 1000)}:R>`,
        inline: true,
      });

    return voiceLeft;
  },

  // Event: voiceStateUpdate
  voiceSM: (client, oldState, newState) => {
    var date = Date.now();

    const voiceSelfMute = new EmbedBuilder()
      .setColor(client.color)
      .setAuthor({
        name: `${newState.member.user.username} | Kendini Sessize Aldı`,
        iconURL: newState.member.user.displayAvatarURL({
          dynamic: true,
          size: 4096,
        }),
      })
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/1050740883319967764/1155814932999327814/1f50a.png"
      )
      .setDescription(
        `<@${newState.member.user.id}> kullanıcı kendini **sessize aldı** <#${newState.channel.id}>`
      )
      .addFields({
        name: `Zaman`,
        value: `<t:${parseInt(date / 1000)}:R>`,
        inline: true,
      });

    return voiceSelfMute;
  },

  // Event: voiceStateUpdate
  voiceSUM: (client, oldState, newState) => {
    var date = Date.now();

    const voiceSelfUnmute = new EmbedBuilder()
      .setColor(client.color)
      .setAuthor({
        name: `${newState.member.user.username} | Mikrofonunu Açtı`,
        iconURL: newState.member.user.displayAvatarURL({
          dynamic: true,
          size: 4096,
        }),
      })
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/1050740883319967764/1155814932999327814/1f50a.png"
      )
      .setDescription(
        `<@${newState.member.user.id}> kullanıcı mikrofonunu açtı <#${newState.channel.id}>`
      )
      .addFields({
        name: `Zaman`,
        value: `<t:${parseInt(date / 1000)}:R>`,
        inline: true,
      });

    return voiceSelfUnmute;
  },

  // Event: voiceStateUpdate
  voiceSD: (client, oldState, newState) => {
    var date = Date.now();

    const voiceSelfDeaf = new EmbedBuilder()
      .setColor(client.color)
      .setAuthor({
        name: `${newState.member.user.username} | Kendini Sağırlaştırdı`,
        iconURL: newState.member.user.displayAvatarURL({
          dynamic: true,
          size: 4096,
        }),
      })
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/1050740883319967764/1155814932999327814/1f50a.png"
      )
      .setDescription(
        `<@${newState.member.user.id}> kullanıcı kendini **sağırlaştırdı** <#${newState.channel.id}>`
      )
      .addFields({
        name: `Zaman`,
        value: `<t:${parseInt(date / 1000)}:R>`,
        inline: true,
      });

    return voiceSelfDeaf;
  },

  // Event: voiceStateUpdate
  voiceSUD: (client, oldState, newState) => {
    var date = Date.now();

    const voiceSelfUndeaf = new EmbedBuilder()
      .setColor(client.color)
      .setAuthor({
        name: `${newState.member.user.username} | Kulaklığını Açtı`,
        iconURL: newState.member.user.displayAvatarURL({
          dynamic: true,
          size: 4096,
        }),
      })
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/1050740883319967764/1155814932999327814/1f50a.png"
      )
      .setDescription(
        `<@${newState.member.user.id}> kullanıcı kulaklığını açtı <#${newState.channel.id}>`
      )
      .addFields({
        name: `Zaman`,
        value: `<t:${parseInt(date / 1000)}:R>`,
        inline: true,
      });

    return voiceSelfUndeaf;
  },
};
