import { ErroType } from "../../@types/erro";
import { AntsProps, getAnts } from "../../services/api"

interface FunctionsAntRacingProps {
    setAnts: React.Dispatch<React.SetStateAction<AntsProps[]>>;
    setLoadingAnts: React.Dispatch<React.SetStateAction<boolean>>;
    setError: React.Dispatch<React.SetStateAction<ErroType>>;
    ants: AntsProps[];
    setProgressWinChance: React.Dispatch<React.SetStateAction<string>>;
}


export const FunctionsAntRacing = ({
    setAnts,
    setLoadingAnts,
    setError,
    ants,
    setProgressWinChance,
}: FunctionsAntRacingProps) => {

    function showAnts() {
        setError({ active: false, message: "" })
        setLoadingAnts(true);
        getAnts().then((res) => {
            setAnts(res.data.ants)
        }).catch((err) => {
            setError({ active: true, message: err.toString() })
        }).finally(() => {
            setLoadingAnts(false);
        });
    }

    function showProgress() {
        setProgressWinChance("In Progress");
        !ants.some(ant => ant.winChance === undefined) && setProgressWinChance("All Calculated");
    }

    return {
        showAnts,
        showProgress
    }
}