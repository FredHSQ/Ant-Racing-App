import { ActivityIndicator, View } from "react-native"
import { styles } from "./styles"

export const Loading = () => {
    return (
        <View
            style={styles.loading}
        >
            <ActivityIndicator
                size={"large"}
                color={"#FFF"}
            />
        </View>
    )
}