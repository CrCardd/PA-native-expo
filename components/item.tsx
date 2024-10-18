import { Text, View, StyleSheet } from 'react-native'
import { Image } from 'expo-image'

export const Item = ({name,age,date,image}:{name:string,age:string,date:string,image:string}) => {
    return(
        <>
            <View style={styles.itemList}>
                <Text>{name}</Text>
                <Text>{age}</Text>
                <Text>{date}</Text>
                <Image source={image} alt='image' style={styles.imageStyle}/>
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
    },
    imageStyle: {
        width: 30,
        height: 30
    }
})