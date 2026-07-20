const rawPayloadFromApi: unknown = {
  id: "player_87",
  name: "Sidney Crosby",
  sport: "hockey",
  stats: {
    goals: 591,
    assists: 1002,
  },
  isActive: true,
};

interface HockeyPlayer {
    id: string,
    name: string,
    sport: string,
    stats: {
        goals: number,
        assists: number,
    },
    isActive: boolean,
};

interface FootballPlayer {
    name: string,
    sport: string;
    stats: {
        touchdowns: number,
        passingYards: number
    }
}

function isHockeyPlayer(data: unknown): data is HockeyPlayer {
    if (typeof data !== 'object' || data === null) return false;

    const p = data as Record<string, any>;
    return p.sport === 'hockey' && typeof p.stats?.goals === 'number';
}

console.log(isHockeyPlayer(rawPayloadFromApi));
