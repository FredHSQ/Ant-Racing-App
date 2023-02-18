import { AntsProps } from "../../services/api";

interface FunctionsAntCardProps {
    setProgress: React.Dispatch<React.SetStateAction<string>>;
    setAnts: React.Dispatch<React.SetStateAction<AntsProps[]>>;
    ants: AntsProps[];
    ant: AntsProps;
    setSeeProgress: React.Dispatch<React.SetStateAction<boolean>>
}

export const FunctionsAntCard = ({
    setProgress,
    setAnts,
    ants,
    ant,
    setSeeProgress
}: FunctionsAntCardProps) => {

    function showWinningChanceOfAnt () {
        setProgress("In progress");
        generateAntWinLikelihoodCalculator()(showProgress);
    }

    function showProgress(likelihoodOfAntWinning: number) {
        let newArray: AntsProps[] = ants
        let index = newArray.findIndex((value)=> value.name === ant.name)
        newArray[index].winChance = likelihoodOfAntWinning
        setAnts(orderAntsByWinChance(newArray));
        setSeeProgress(value=> !value);
        setProgress("Calculated");        
    }

    function orderAntsByWinChance (oldArray:AntsProps[]) {
        return oldArray.sort((a, b) => {
            if (a.winChance && b.winChance)
                return b.winChance - a.winChance
            else if (b.winChance)
                return 1
            else
                return -1
        })
    }
      
    function generateAntWinLikelihoodCalculator() {
        const delay = 7000 + Math.random() * 7000;
        const likelihoodOfAntWinning = Math.random();

        return (callback) => {
            setTimeout(() => {
                callback(likelihoodOfAntWinning);
            }, delay);
        };
    }

    return {
        generateAntWinLikelihoodCalculator,
        showWinningChanceOfAnt
    }
}