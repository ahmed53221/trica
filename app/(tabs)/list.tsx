import { View, Text, StyleSheet, FlatList } from "react-native";

export default function Listscreen() {

    const students = [
        { name: "Tim"},
        { name: "Tim"},
        { name: "Tim"},
        { name: "Tim"},
        { name: "Tim"}
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Student list</Text>
            <FlatList data={students}
            renderItem={({item}) => {return <Text>{item.name}</Text>}}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
    },
    title: {
        fontSize: 30,
        marginBottom: 20,
    },

});