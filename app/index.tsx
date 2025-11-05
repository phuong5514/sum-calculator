import { Text, View } from "react-native";
import Calculator from "./components/Calculator";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Sum calculator</Text>
      <Calculator />
    </View>
  );
}
