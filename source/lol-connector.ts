import { Kayn, KaynClass, REGIONS } from 'kayn';

export default class LoLConnector {
    constructor() {}
    async login(key: string) {
        this.kayn = Kayn(key)();
    }
    kayn: KaynClass;
}
