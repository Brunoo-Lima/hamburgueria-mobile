import React, { useContext, useState } from 'react';
import { Text, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { styles } from './styles';

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
