import { View, Image } from "react-native";
import { styles } from "./styles";
import { Button } from "@/componentes/Button";

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/logo.png")} style={styles.logo} />

      <Button title="Comprar" activeOpacity={0.7} onPress={() => console.log("COMPRAR")} />
    </View>
  );
}
