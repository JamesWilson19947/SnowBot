const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageSelectMenu } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ethicsroll')
        .setDescription('A command to random ethics'),
    async execute(interaction) {
        var data = require('../data/stellaris/ethics.json');
        
        // Stellaris allows 3 points for ethics
        var points = 3

        // We shall store the ethics here
        var ethics = [];

        var ethicData = data['empireEthics'];

        var loop = 4
        while(points > 0){

            // Select a random ethic from the group
            var randomEthicGroup = randomIntFromInterval(0,loop);
            var randomEthic      = randomIntFromInterval(0,1);
            var ethic            = ethicData[randomEthicGroup][randomEthic]

            console.log(ethic);
            console.log(ethicData);

            // Remove this from the array so we cannot select it twice.
            ethicData[randomEthicGroup].splice(0, 2);
            ethicData.splice(randomEthicGroup, randomEthicGroup);
            loop = loop-1;
 
            //Roll for a chance of this ethic being fanatic
            var fanatic = randomIntFromInterval(0,1)
            if(fanatic == 1){
                ethics.push(`Fanatic ${ethic}`);
                points = points - 2;
            }else{
                ethics.push(`${ethic}`);
                points = points - 1;
            }

        }
        await interaction.reply('Pong!');
    },
};
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}