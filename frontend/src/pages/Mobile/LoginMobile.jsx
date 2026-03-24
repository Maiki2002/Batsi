import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import {typography} from "../../theme/typographyMobile";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase";

export default function LoginMobile({navigation}) {
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
        navigation.navigate('SidebarMobile')
      }
    } catch (error) {
      console.log("Error: ", error.code);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={typography.title}>Bitso from Bio-Disma</Text>
      <StatusBar style="light" />

      <TextInput
        value={correo}
        placeholder="Ingresa el correo"
        keyboardType="email-address"
        onChangeText={text => {
          setCorreo(text);
        }}
        style={[typography.body, {
          borderColor: "Black",
          borderWidth: 1,
          width: 300,
          marginTop:40,
          marginBottom:10

        }]}
      ></TextInput>

      <TextInput
        value={pass}
        placeholder="Ingresa la contraseña"
        secureTextEntry
        autoCapitalize="none"
        onChangeText={(text) => {
          setPass(text);
        }}
        style={[typography.body, {
          borderColor: "Black",
          borderWidth: 1,
          width: 300,
          marginBottom: 30
          
        }]}
      ></TextInput>

      <Button
        color="green"
        title="Entrar"
        onPress={login}
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
