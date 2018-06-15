import DiscordConnector from "./discord-connector";
import { Message } from "discord.js";
import { REGIONS } from 'kayn';
import LoLConnector from "./lol-connector";

export default class GuardianoCore {
    constructor(private riotAPIKey: string, private discordBotToken: string) {
        this.discordConnector = new DiscordConnector();
        this.lolConnector = new LoLConnector();
    }
    public run() {
        this.main();
    }
    private main() {
        this.discordConnector.login(this.discordBotToken);
        this.lolConnector.login(this.riotAPIKey);
        this.discordConnector.onCommand('sg-ping', this.pingCommand.bind(this));
        this.discordConnector.onCommand('sg-check', this.checkCommand.bind(this));
    }
    private pingCommand(args: string, message: Message) {
        message.channel.send("Pong");
    }
    private async checkCommand(args: string, message: Message) {
        if(!args[0] || !args[1])
            return message.channel.send(`<@${message.author.id}> bad arguments, use .sg-check <summoner name> <region>`);
        let summonerName = args[0];
        let region = this.convertRegion(args[1]);
        if(!region)
            return message.channel.send(`<@${message.author.id}> wrong region, list of available regions is here: https://github.com/ScuroGuardiano/lol-discord-bot/blob/master/README.md#regions`);
        
        let summoner;
        try {
            summoner = await this.lolConnector.getSummonerInfoByName(summonerName, region);
        }
        catch(err) {
            console.error(err);
            if(err.statusCode === 404)
                return message.channel.send(`<@${message.author.id}> summoner does not exists`);
            else return message.channel.send(`<@${message.author.id}> unknown error`);
        }

        let msg = "# Summoner name: " + summoner.name + '\n';
        msg += "> SoloQ Division: " + summoner.soloQ.tier + ' ' + summoner.soloQ.rank + '\n';
        msg += "> Flex Division: " + summoner.flexSR.tier + ' ' + summoner.flexSR.rank;
        return message.channel.send('```markdown\n' + msg + '\n```');
    }
    private convertRegion(region: string) {
        switch(region) {
            case "eune":
                return REGIONS.EUROPE;
            case "euw":
                return REGIONS.EUROPE_WEST;
            case "na":
                return REGIONS.NORTH_AMERICA;
            case "kr":
                return REGIONS.KOREA;
            case "br":
                return REGIONS.BRAZIL;
            case "lan":
                return REGIONS.LATIN_AMERICA_NORTH;
            case "las":
                return REGIONS.LATIN_AMERICA_SOUTH;
            case "oce":
                return REGIONS.OCEANIA;
            case "ru":
                return REGIONS.RUSSIA;
            case "tr":
                return REGIONS.TURKEY;
            case "jp":
                return REGIONS.JAPAN;
            default:
                return undefined;
        }
    }
    private discordConnector: DiscordConnector;
    private lolConnector: LoLConnector;
}