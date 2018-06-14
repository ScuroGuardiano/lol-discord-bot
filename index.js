const GuardianoCore = require('./build/index');
const fs = require('fs');

function loadConfig() {
    let data = fs.readFileSync("config.json");
    if(!data)
        throw new Error("Can't read file config.json");
    let config = JSON.parse(data);
    if (!config.riotAPIKey || !config.discordBotToken)
        throw new Error("Invalid file config.json");
    return config;
}

(function() {
    let config = loadConfig();
    let core = new GuardianoCore(config.riotAPIKey, config.discordBotToken);
    core.run();
})();
