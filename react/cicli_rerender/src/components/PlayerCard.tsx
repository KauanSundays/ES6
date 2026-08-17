import { Player } from "@/types";
import { View, Text, TouchableOpacity} from "react-native";
import { memo } from "react";

interface PlayerCardProps {
  player: Player
  isDrafted: boolean
  onToggleDraft: (id: number) => void // aqui eu indico que isso é uma função
}

export const PlayerCard = memo(({ player, isDrafted, onToggleDraft } : PlayerCardProps) =>  {
    console.log(player.name);
    
    return (
        <View>
            <Text>{player.name}</Text>
            <TouchableOpacity onPress={() => onToggleDraft(player.id)}>
                <Text>{isDrafted ? "Dispensar" : "Contratar"}</Text>
            </TouchableOpacity>
        </View>
    );
}); 

