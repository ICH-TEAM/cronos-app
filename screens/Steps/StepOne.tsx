import { StyleSheet } from "react-native"
import { Text, View } from "../../components/Themed"

const Steps = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Steps</Text>
      <Text>ESTA ES LA VISTA STEPS</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
})

export default Steps
