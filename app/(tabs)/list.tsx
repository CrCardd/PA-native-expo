import { FlatList, SafeAreaView, Text, StyleSheet, View } from "react-native"
import data from '@/constants/dataEx.json'
import { Item } from "@/components/item"

export default function List() {
    return(
        <>
            <View style={styles.center}>
                <Text>List</Text>
            </View>
            <SafeAreaView style={styles.container}>
                <FlatList 
                    style={styles.back}
                    data={data}
                    renderItem={({item}) => <Item name={item.nome} age={item.idade} date={item.data} image={item.imagem}/>}
                    keyExtractor={(item) => item.id}/>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    back: {
      paddingHorizontal: 20  
    },
    center: {
        margin: 20,
        display: "flex",
        alignItems: "center"


    }
})