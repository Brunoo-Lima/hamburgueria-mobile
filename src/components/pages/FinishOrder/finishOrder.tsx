import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';

type RouteDetailParams = {
  FinishOrder: {
    number: string | number;
    order_id: string;
  };
};

type FinishOrderRouteProp = RouteProp<RouteDetailParams, 'FinishOrder'>;

export default function FinishOrder() {
  const route = useRoute<FinishOrderRouteProp>();

  async function handleFinish() {
    alert('test');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.alert}>Você deseja finalizar esse pedido?</Text>
      <Text style={styles.titleTable}>Mesa {route.params?.number}</Text>

      <TouchableOpacity style={styles.button} onPress={handleFinish}>
        <Text style={styles.textBtn}>Finalizar pedido</Text>
        <Feather name="shopping-cart" size={20} color="#01080E" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#01080E',
    paddingVertical: '5%',
    paddingHorizontal: '4%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  alert: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'bold',
    marginBottom: 12,
  },
  titleTable: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#2AFDBE',
    flexDirection: 'row',
    width: '65%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  textBtn: {
    fontSize: 18,
    marginRight: 8,
    fontWeight: 'bold',
    color: '#01080E',
  },
});
