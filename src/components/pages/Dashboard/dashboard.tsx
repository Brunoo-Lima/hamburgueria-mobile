import React, { useContext, useState } from 'react';
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamsList } from '../../../routes/app.routes';

import { api } from '../../services/api';

import { MaterialIcons } from '@expo/vector-icons';
import { AuthContext } from '../../contexts/AuthContext';

export default function Dashboard() {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackParamsList>>();
  const [number, setNumber] = useState('');
  const { signOut } = useContext(AuthContext);

  async function openOrder() {
    if (number === '') return;

    const response = await api.post('/order', {
      table: Number(number),
    });

    navigation.navigate('Order', {
      number: number,
      order_id: response.data.id,
    });
    setNumber('');
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Novo pedido</Text>

      <TextInput
        style={styles.input}
        placeholder="Numero da mesa"
        placeholderTextColor="#fff"
        keyboardType="numeric"
        value={number}
        onChangeText={setNumber}
      />

      <TouchableOpacity style={styles.button} onPress={openOrder}>
        <Text style={styles.buttonText}>Abrir mesa</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signOut} onPress={signOut}>
        <MaterialIcons name="logout" size={28} color="#ffffff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: '#01080E',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#D7F9FF',
  },
  input: {
    width: '90%',
    height: 60,
    backgroundColor: '#1D3056',
    color: '#D7F9FF',
    borderRadius: 4,
    paddingHorizontal: 8,
    textAlign: 'center',
    fontSize: 20,
  },
  button: {
    width: '90%',
    height: 40,
    backgroundColor: '#2AFDBE',
    borderRadius: 4,
    marginVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e1e1e',
  },
  signOut: {
    position: 'absolute',
    backgroundColor: '#1472E5',
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
    paddingHorizontal: 8,
    borderRadius: 50,
  },
});
