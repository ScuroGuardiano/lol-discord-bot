import { Kayn, KaynClass, REGIONS } from 'kayn';

export default class LoLConnector {
    constructor() {}
    async login(key: string) {
        this.kayn = Kayn(key)();
    }
    async getSummonerInfoByName(name: string, region: REGIONS) {
        let summoner = await this.kayn.Summoner.by.name(name).region(region);
        let summonerLeague = await this.kayn.LeaguePositions.by.summonerID(summoner.id).region(region);
        let soloQData = summonerLeague.find((el => {
            return el.queueType == "RANKED_SOLO_5x5";
        }))
        let flexSRData = summonerLeague.find((el => {
            return el.queueType == "RANKED_FLEX_SR";
        }));
        return {
            name: summoner.name,
            soloQ: soloQData || null,
            flexSR: flexSRData || null
        }
    }
    private kayn: KaynClass;
}
