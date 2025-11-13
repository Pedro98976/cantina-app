import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

  function handleLogin() {
    //1 passo - validar usuario e senha
    if(email === 'admin' && senha === '1234') {
      Alert.alert('Usuario valido');
    } else {
      Alert.alert('Usuario não encontrado');
    }
    //2 passo - redirecionar para a tela principal
  }

  return (
    <View style={styles.container}>

      <Text>Usuario {email}</Text>
      <TextInput placeholder="Digite seu email" onChangeText={(e) => setEmail(e)}></TextInput>
)
      <Text>Senha {senha}</Text>
      <TextInput placeholder="Digite sua senha" onChangeText={(e) => setSenha(e)} ></TextInput>

      <Button title="Entrar" onPress={handleLogin} ></Button>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
