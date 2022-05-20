import * as React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// import {Card} from 'react-native-shadow-cards';
const DATA = [
    {
        id: 1,
        title: "Orange Lunch ODC in Sierra Leone",
        description: "ipsum dolor sit amet consectetur adipisicing elit. Nihil expedita aliquid ab reiciendis? Expedita, culpa!"
    },

    {
        id: 2,
        title: "Orange SL Fighting against Corruption",
        description: "ipsum dolor sit amet consectetur adipisicing elit. Nihil expedita aliquid ab reiciendis? Expedita, culpa!"
    },

    {
        id: 3,
        title: "Orange Lunch New Promotion",
        description: "ipsum dolor sit amet consectetur adipisicing elit. Nihil expedita aliquid ab reiciendis? Expedita, culpa!"
    },

    {
        id: 4,
        title: "Turaymathic Academy",
        description: "Turaymathic Academy to become the orst online e learning platform in Sierra Leone"
    },

    {
        id: 5,
        title: "Kenema ",
        description: "Kenema District  is the Largest District in Sierra"
    },

    {
        id: 6,
        title: "ODC lunching",
        description: "ipsum dolor sit amet consectetur adipisicing elit. Nihil expedita aliquid ab reiciendis? Expedita, culpa!"
    },
    {
        id: 7,
        title: "ODC lunching",
        description: "ipsum dolor sit amet consectetur adipisicing elit. Nihil expedita aliquid ab reiciendis? Expedita, culpa!"
    },
    {
        id: 8,
        title: "ODC lunching",
        description: "ipsum dolor sit amet consectetur adipisicing elit. Nihil expedita aliquid ab reiciendis? Expedita, culpa!"
    },
    {
        id: 9,
        title: "ODC lunching",
        description: "ipsum dolor sit amet consectetur adipisicing elit. Nihil expedita aliquid ab reiciendis? Expedita, culpa!"
    },
    {
        id: 10,
        title: "ODC lunching",
        description: "ipsum dolor sit amet consectetur adipisicing elit. Nihil expedita aliquid ab reiciendis? Expedita, culpa!"
    },
]

const Item = ({ title, description }) => (
    <View style={styles.item}>
        <Text style={styles.title}> {title} </Text>
        <Text style={styles.description}> {description} </Text>
    </View>
)
export default function DetailsScreen({ navigation }) {
    const renderItem = ({ item }) => (
        <Item title={item.title} description={item.description} />
    )

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#FF4949',
        marginTop: 10,
    },

    item: {
        backgroundColor: '#16003B',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 20,
    },
    item: {
        backgroundColor: '#16003B',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 20,
    },

    title: {
        fontSize: 20,
        color: 'gold',
        paddingBottom: 10,
        textAlign: 'center',
        fontWeight: 'bold',
    },

    description: {
        color: 'tomato'
    }
})