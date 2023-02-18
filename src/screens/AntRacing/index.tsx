import { useEffect, useState } from "react"
import { View, Text, Image, FlatList } from "react-native"
import { FunctionsAntRacing } from "./functions"
import { styles } from "./styles"

import { AntsProps } from "../../services/api"
import { AntCard } from "../../components/AntCard"
import { ErroType } from "../../@types/erro"
import { Loading } from "../../components/Loading"
import { Button } from "../../components/Button"

import AntRacingImage from "../../assets/images/ant-racing-removebg-preview.png"

export const AntRacing = () => {

    const [ants, setAnts] = useState<AntsProps[]>([]);
    const [error, setError] = useState<ErroType>({ active: false, message: "" });
    const [loadingAnts, setLoadingAnts] = useState<boolean>(false);

    const [calculate, setCalculate] = useState<boolean>(false);
    const [seeProgress, setSeeProgress] = useState<boolean>(false);
    const [progressWinChance, setProgressWinChance] = useState<string>("Not yet run");

    const { showAnts, showProgress } = FunctionsAntRacing({
        setAnts,
        setLoadingAnts,
        setError,
        ants,
        setProgressWinChance
    });

    useEffect(() => {
        calculate && showProgress();
    }, [seeProgress, calculate]);

    return (
        <View
            style={styles.container}
        >
            <View
                style={styles.containerWelcome}
            >
                <Image
                    style={styles.containerImage}
                    source={AntRacingImage}
                />
                <Text
                    style={styles.titleWelcome}
                >
                    Welcome to the best{"\n"}Ant-racing APP!
                </Text>
                {loadingAnts ?
                    <Loading />
                    :
                    !calculate && <Button
                        title={ants.length === 0 ? "Show our competitors" : "Start Race"}
                        onPress={() => {
                            ants.length === 0 ? showAnts() : setCalculate(true);
                        }}
                    />
                }

                {ants.length > 0 && <Text
                    style={styles.stateRun}
                >
                    {progressWinChance}
                </Text>
                }

                {error.active &&
                    <Text
                        style={styles.stateRun}
                    >
                        {error.message}
                    </Text>
                }
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.name}
                data={ants}
                renderItem={({ item }) => {
                    return (
                        <AntCard
                            setAnts={setAnts}
                            ant={item}
                            calculate={calculate}
                            ants={ants}
                            setSeeProgress={setSeeProgress}
                        />
                    )
                }}
            />

        </View>
    )
}