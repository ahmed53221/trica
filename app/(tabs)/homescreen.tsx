import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {

  // primjer let varijable
  let message = "Hi there from Digital School";

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Hi there!</Text>
      <Text>This is the ExerciseScreen</Text>
      <Text>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontSize: 30,
  },
}); 