module.exports = {
    name: 'interactionCreate',
    execute(interaction) {
        if (!interaction.isSelectMenu()) return;
        
        if (interaction.customId === 'eu4roll') {
            region = interaction.values[0];

            responses = [
                'may you fight well!', 
                'you\'re in for a ride!', 
                'may you fight for freedom!'
            ];

            switch(region) {
                case 'africa':
                    countries = ['Tunis', 'Morocco', 'Songhai', 'Mali', 'Kongo', 'Mutapa', 'Ajuuran', 'Ethiopia'];
                    break;
                case 'europe':
                    countries = ['Brandenburg', 'Scotland', 'Denmark', 'Norway', 'Sweden', 'Saxony', 'Munich', 'Milan', 'Florence', 'Papal State',
                    'Naples', 'Hungary', 'Serbia', 'Crimea', 'Golden Horde', 'Kazan', 'Lithuania', 'Novgorod', 'Teutonic Order', 'Brabant', 'Holland',
                    'Flanders', 'Provence', 'Livionian Order'];
                    break;
                case 'asia':
                    countries = ['Brandenburg', 'Scotland', 'Denmark', 'Norway', 'Sweden', 'Saxony', 'Munich', 'Milan', 'Florence', 'Papal State',
                    'Naples', 'Hungary', 'Serbia', 'Crimea', 'Golden Horde', 'Kazan', 'Lithuania', 'Novgorod', 'Teutonic Order', 'Brabant', 'Holland',
                    'Flanders', 'Provence', 'Livionian Order'];
                    break;
                default:
                    countries = ['Muscovy', 'France', 'England', 'Castile/Aragon', 'Portugal', 'Austria',
                    'Poland', 'Ottomans', 'Mamluks', 'Burgundy', 'Venice'];
            }

            const randomResponse = responses[Math.floor(Math.random() * responses.length)]
            const randomCountry  = countries[Math.floor(Math.random() * countries.length)];

            interaction.reply(`${interaction.user.toString()} I give you: ${randomCountry}, ${randomResponse}`);
        }
    },
};
