import * as Discord from 'discord.js';
import { commandCallbackFn } from './types';

export default class DiscordConnector {
    public constructor() {
        this.discordClient = new Discord.Client();
        this.commands = new Map();
        this.configurate();
    }
    public async login(token: string) {
        return await this.discordClient.login(token)
    }
    public async sendMessage(msg: string, channel: Discord.TextChannel) {
        channel.send(msg);
    }
    public onCommand(command: string, callback: commandCallbackFn) {
        this.commands.set(command, callback);
    }
    private configurate() {
        this.discordClient.on('message', this.messageHandler.bind(this));
    }
    private messageHandler(message: Discord.Message) {
        console.log(message.content);
        if(message.content.charAt(0) === ".") {
            this.processCommandMessage(message);
        }
    }
    private processCommandMessage(message: Discord.Message) {
        let command_data = message.content.substring(1).split(' ');
        let command = command_data[0];
        let args = command_data.slice(1);
        if(this.commands.has(command))
            this.commands.get(command)(args, message);
    }
    private commands: Map<string, commandCallbackFn>;
    private discordClient: Discord.Client;
}
