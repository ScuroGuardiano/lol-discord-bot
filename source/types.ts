import { Message } from "discord.js";

export type commandCallbackFn = (args: string[], message: Message) => void;