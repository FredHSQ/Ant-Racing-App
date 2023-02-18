import { View, Text } from "react-native"
import { styles } from "./styles"

export interface AntInformationProps {
    text: string | number;
    icon: any;
}

export const AntInformation = ({
    text,
    icon
}: AntInformationProps) => {

    let shownText = typeof text === "number" ? (text * 100).toFixed(2) : text

    return (
        <View
            style={styles.textInformationContainer}
        >

            <Text
                style={styles.textInformation}
            >
                {shownText}
            </Text>
            {icon}
        </View>
    )
}