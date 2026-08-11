import { Player } from "../types/"
import { PLAYERS_DATA } from "../constants/mockPlayers"
import { useState, useEffect } from "react"

export const usePlayers = () => {
    const [players, setPlayers] = useState<Player[]>([]);
    const loading = useState<boolean>(true);
    const error = useState<string | null>(null)
}


useEffect(() => {
    const timer = setTimeout(() => {
        try {
            
        } catch (err) {

        } finally {

        }
    }, 1500);

    return () => clearTimeout(timer)
})