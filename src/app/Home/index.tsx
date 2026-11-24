import { View, Image } from "react-native";
import { styles } from "./styles";
import { Button } from "@/componentes/Button";
import { Input } from "@/componentes/Input";

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/logo.png")} style={styles.logo} />

      <View style={styles.form}>
        <Input placeholder="O que você precisa comprar?" />

        <Button
          title="Comprar"
          activeOpacity={0.7}
          onPress={() => console.log("COMPRAR")}
        />
      </View>
      <View style={styles.content}></View>
    </View>
  );
}
