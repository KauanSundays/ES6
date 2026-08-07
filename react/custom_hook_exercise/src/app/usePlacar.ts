import { useState, useEffect } from "react";

export function usePlacar() {
    const [faltas, useFaltas] = useState(0);
    const [pontos, setPontos] = useState(0);
    
    const cestaDeDois = () => setPontos(pontos + 2);
    const cestaDeTres = () => setPontos(pontos + 3);

    const cometerFalta = () => useFaltas(faltas + 1);

    function zerarPlacar() {
        useFaltas(0);
        setPontos(0);
    }

    const props = {
        faltas,
        pontos,
        cestaDeDois,
        cestaDeTres,
        cometerFalta,
        zerarPlacar
    }

    return props
}

