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

    const handleToggle = () => {
        onToggleDraft(player.id);
    };
    
    return (
        <View style={{flex: 1, padding: 8}}>
            <Text>{player.name}</Text>
            <Text>{player.price}</Text>
            <Text>{player.position}</Text>
            <TouchableOpacity onPress={handleToggle}>
                <Text>{isDrafted ? "Dispensar" : "Contratar"}</Text>
            </TouchableOpacity>
        </View>
    );
    
}); 

PlayerCard.displayName = "PlayerCard";
