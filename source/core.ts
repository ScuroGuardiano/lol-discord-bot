import DiscordConnector from "./discord-connector";

export default class GuardianoCore {
    constructor(riotAPIKey: string, private discordBotToken: string) {
        this.discordConnector = new DiscordConnector();
    }
    public run() {
        this.main();
    }
    private main() {
        this.discordConnector.login(this.discordBotToken);
        this.discordConnector.onCommand('sg-ping', (args, message) => {
            message.channel.send("Pong");
        });
    }
    private discordConnector: DiscordConnector;
}