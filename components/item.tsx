import { Text, View, StyleSheet } from 'react-native'

export const Item = ({name,age,date}:{name:string,age:string,date:string}) => {
    return(
        <>
            <View style={styles.itemList}>
                <Text>{name}</Text>
                <Text>{age}</Text>
                <Text>{date}</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    itemList: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "#4168e4d4",
        margin: 10,
        height: 80,
        paddingHorizontal: 10,
    }
})