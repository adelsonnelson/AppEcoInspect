import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebaseConfig';

// O nome do componente também foi alterado
const TelaBoasVindas = ({ navigation }: any) => {
  
  const handleLogout = () => {
    signOut(auth).then(() => {
        navigation.navigate('Login');
    }).catch((error) => {
        // Tratar erro aqui se necessário
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao EcoInspect!</Text>
      <Text style={styles.subtitle}>Você está logado.</Text>
      <Button title="Sair" onPress={handleLogout} color="#DC143C"/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16, backgroundColor: '#F0F8FF' },
  title: { fontSize: 28, fontWeight: 'bold', color: '#006400', marginBottom: 10 },
  subtitle: { fontSize: 18, color: 'gray' }
});

// A exportação default também foi atualizada
export default TelaBoasVindas;