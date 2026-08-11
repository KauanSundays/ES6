import { Player } from "../types/"
import { PLAYERS_DATA } from "../constants/mockPlayers"
import { useState, useEffect } from "react"

export const usePlayers = () => {
    const [players, setPlayers] = useState<Player[]>([]);
    const loading = useState<boolean>(true);
    const error = useState<string | null>(null)
}

