const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageSelectMenu } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('eu4roll')
        .setDescription('A command to roll a random EU4 nation. <europe/asia/africa>'),
    async execute(interaction) {
        const row = new MessageActionRow()
        .addComponents(
            new MessageSelectMenu()
                .setCustomId('eu4roll')
                .setPlaceholder('Nothing selected')
                .addOptions([
                    {
                        label: 'Europe',
                        description: 'This is a description',
                        value: 'europe',
                    },
                    {
                        label: 'Asia',
                        description: 'This is also a description',
                        value: 'asia',
                    },
                    {
                        label: 'Africa',
                        description: 'This is also a description',
                        value: 'africa',
                    }
                ]),
        );
        await interaction.reply({ content: 'Select your region', components: [row] });
    },
};
