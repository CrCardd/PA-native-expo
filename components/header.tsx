import { View, Text, Image, ImageSourcePropType, StyleSheet } from "react-native";

export const Header = ({image}: {image: ImageSourcePropType | undefined}) => {
    return(
        <>
            <View style={styles.naView}>
                <Text style={styles.noText}>Header exemplo</Text>
                <Text style={styles.fonteDiferente}>Testando fontes diferentes</Text>
                <Text style={styles.fonteDiferente02}>Testando fontes diferentes</Text>
                <Image source={image}></Image>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    naView: {
        backgroundColor: "#050620FF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 10,
        paddingVertical: 30,

    },
    noText: {
        color: "#F5F5F5FF",
        fontWeight: "bold",
        fontSize: 30

    },
    fonteDiferente: {
        fontFamily: "Anton",
        color: "#f5f5f5"
    },
    fonteDiferente02: {
        fontFamily: "Lobster",
        color: "#f5f5f5"
    }

})