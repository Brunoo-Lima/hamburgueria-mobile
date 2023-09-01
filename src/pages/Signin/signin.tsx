import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function SignIn() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Hamburgueria</Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#fff"
          style={styles.input}
        />

        <TextInput
          placeholder="Senha"
          placeholderTextColor="#fff"
          style={styles.input}
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#01080E',
  },
  logo: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#D7F9FF',
    marginBottom: 10,
  },
  inputContainer: {
    width: '95%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 32,
    paddingHorizontal: 14,
  },
  input: {
    width: '95%',
    height: 40,
    backgroundColor: '#1D3056',
    marginBottom: 12,
    borderRadius: 4,
    paddingHorizontal: 8,
  },
  button: {
    width: '95%',
    height: 40,
    backgroundColor: '#4FECFB',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e1e1e',
  },
});
