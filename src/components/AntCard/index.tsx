import { useEffect, useState } from "react";
import { View, Text, Image } from "react-native"
import { FunctionsAntCard } from "./functions";
import { styles } from "./styles"

import { AntInformation } from "./AntInformation";

import { AntsProps } from "../../services/api"

import redAnt from '../../assets/images/redAnt.png';
import blackAnt from '../../assets/images/blackAnt.png';
import silverAnt from '../../assets/images/silverAnt.png';

import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

interface AntCardProps {
    ant: AntsProps;
    ants: AntsProps[];
    setAnts: React.Dispatch<React.SetStateAction<AntsProps[]>>;
    calculate: boolean;
    setSeeProgress: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AntCard = ({
    ant,
    ants,
    setAnts,
    calculate,
    setSeeProgress
}: AntCardProps) => {

    const [progress, setProgress] = useState<string>("Not yet run");

    useEffect(() => {
        calculate && showWinningChanceOfAnt();
    }, [calculate]);

    const { showWinningChanceOfAnt } = FunctionsAntCard({
        setProgress,
        setAnts,
        ants,
        ant,
        setSeeProgress
    });

    return (
        <View
            style={styles.container}
        >
            <Image
                style={styles.antImage}
                source={
                    ant.color === "BLACK" ? blackAnt :
                        ant.color === "RED" ? redAnt
                            : silverAnt
                }
            />
            <View>
                <Text
                    style={styles.title}
                >
                    {ant.name}
                </Text>
                <Text
                    style={styles.subTitle}
                >
                    {progress}
                </Text>

                <View
                    style={styles.informationContainer}
                >
                    <AntInformation
                        icon={<MaterialIcons
                            name="height"
                            size={24}
                            color="white"
                        />}
                        text={ant.length.toString()}
                    />
                    <AntInformation
                        icon={<MaterialCommunityIcons
                            name="weight"
                            size={24}
                            color="white"
                        />}
                        text={ant.weight.toString()}
                    />
                    <AntInformation
                        icon={<MaterialIcons
                            name="color-lens"
                            size={24}
                            color="white"
                        />}
                        text={ant.color}
                    />
                    <AntInformation
                        icon={<FontAwesome5
                            name="percentage"
                            size={24}
                            color="white"
                        />}
                        text={ant.winChance ? ant.winChance : 0.00}
                    />
                </View>
            </View>
        </View>
    )
}