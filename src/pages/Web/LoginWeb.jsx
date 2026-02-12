import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { typography } from "../../theme/typographyWeb";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase";

export default function LoginWeb({navigation}) {
  const [correo, setCorreo] = useState("");
  const [pass, setPass] = useState("");
  const [autenticacion, setAutenticacion] = useState(false);

  const login = async () => {
    try {
      const resultadoLogin = await signInWithEmailAndPassword(auth, correo, pass);
      const registrado = resultadoLogin?._tokenResponse?.registered;
      setAutenticacion(Boolean(registrado));
      if (registrado) {
        console.log("Acceso concedido");
        navigation.navigate('Sidebar')
      }
    } catch (error) {
      console.log("Error: ", error.code);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={typography.title}>Bitso</Text>
      <p style={typography.body}>From Bio-Disma</p>
      <StatusBar style="light" />

      <TextInput
        value={correo}
        placeholder="Correo"
        keyboardType="email-address"
        onChangeText={(text) => {
          setCorreo(text);
        }}
        style={[typography.body, {
          padding: 15,
          borderColor: "Black",
          borderWidth: 1,
          height: 30,
          width: 340,
          marginTop: 10,
          marginBottom: 10
        }]}
      ></TextInput>

      <TextInput
        value={pass}
        placeholder="Contraseña"
        secureTextEntry
        autoCapitalize="none"
        onChangeText={(text) => {
          setPass(text)
        }}
        style={[typography.body,{
          padding: 15,
          borderColor: "Black",
          borderWidth: 1,
          height: 30,
          width: 340,
          marginBottom: 40
        }]}
      ></TextInput>

      <Button
        color="green"
        title="Entrar"
        onPress={ login }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4ff",
    alignItems: "center",
    justifyContent: "center",
  },
});
