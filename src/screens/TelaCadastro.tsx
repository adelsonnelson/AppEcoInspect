import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';

// O nome do componente também foi alterado
const TelaCadastro = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        Alert.alert("Sucesso", "Conta criada com sucesso!");
        navigation.navigate('Login');
      })
      .catch((error) => {
        Alert.alert("Erro no Cadastro", error.message);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>EcoInspect - Cadastro</Text>
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
      <Button title="Cadastrar" onPress={handleSignUp} color="#2E8B57" />
      <Button title="Já tem uma conta? Faça Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 16, backgroundColor: '#F0F8FF' },
  title: { fontSize: 24, marginBottom: 20, textAlign: 'center', color: '#006400' },
  input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 12, padding: 10, borderRadius: 5 }
});

// A exportação default também foi atualizada
export default TelaCadastro;