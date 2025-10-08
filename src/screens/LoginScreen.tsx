import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';

const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigation.navigate('BoasVindas');
      })
      .catch((error) => {
        Alert.alert("Erro no Login", error.message);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>EcoInspect - Login</Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Entrar" onPress={handleLogin} color="#2E8B57" />
      <Button title="Não tem uma conta? Cadastre-se" onPress={() => navigation.navigate('Cadastro')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 16, backgroundColor: '#F0F8FF' },
  title: { fontSize: 24, marginBottom: 20, textAlign: 'center', color: '#006400' },
  input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 12, padding: 10, borderRadius: 5 }
});

export default LoginScreen;