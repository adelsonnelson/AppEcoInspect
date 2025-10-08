import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebaseConfig';


const TelaBoasVindas = ({ navigation }: any) => {
  
  const handleLogout = () => {
    signOut(auth).then(() => {
        navigation.navigate('Login');
    }).catch((error) => {
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

export default TelaBoasVindas;