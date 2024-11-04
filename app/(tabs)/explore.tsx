import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList } from "react-native";
import { FIRESTORE_DB } from "@/firebaseConfig"; 
import { collection, addDoc, deleteDoc, doc, onSnapshot, updateDoc } from "firebase/firestore";

import { Firestore } from "firebase/firestore";

interface Products {
    id: string;
    name: string;
    price: string;
    quantity: number;
}

export default function HomeScreen() {
    const [products, setProducts] = useState<Products[]>([]); 
    const [newProduct, setNewProduct] = useState({ name: '', price: '0' });


    useEffect(() => {
      const read = onSnapshot(collection(FIRESTORE_DB, 'products'), (snapshot) => {
        const list: Products[] = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))  as Products[]
        setProducts(list);
      })
      return () => read();
    }, [])


    const addProduct = async () => {
      if (newProduct.name === "") {
          Alert.alert("Por favor, insira um nome para o produto.");
          return;
      }
      await addDoc(collection(FIRESTORE_DB, "products"), newProduct);
      setNewProduct({ name: '', price: '0' });
  };
    

    
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Nome do Produto"
                value={String(newProduct.name)}
                onChangeText={(name) => setNewProduct(prev => ({ ...prev, name: String(name) }))}
            />  
            <TouchableOpacity style={styles.button} onPress={addProduct}>
                <Text style={styles.buttonText}>Adicionar</Text>
            </TouchableOpacity>

            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.userItem}>
                      <Text>{item.id}</Text>
                        <Text>{item.name}</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        height: 40,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#4b6beb',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
    },
    userItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    deleteButton: {
        color: 'red',
    },
});
