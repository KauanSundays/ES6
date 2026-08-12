import { Player } from "../types/"
import { PLAYERS_DATA } from "../constants/mockPlayers"
import { useState, useEffect } from "react"

export const usePlayers = () => {
    const [players, setPlayers] = useState<Player[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    async function fetchPlayers(): Promise<Player[]> {
        const response = PLAYERS_DATA;
        return response;
    }


    useEffect(() => {
        const timer = setTimeout( async () => {
            try {
                const response = await fetchPlayers();
                setPlayers(response);
            } catch (err) {
                setError("Não foi possível carregar os atletas")
            } finally {
                setLoading(false)
            }
        }, 5500);

        return () => clearTimeout(timer)
    }, []);

    return {
        players, 
        loading,
        error,
    }
}

