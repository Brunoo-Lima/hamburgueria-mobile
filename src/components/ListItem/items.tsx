import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';

interface ItemProps {
  data: {
    id: string;
    product_id: string;
    name: string;
    amount: string | number;
  };
  deleteItem: (item_id: string) => void;
}

export function ListItem({ data, deleteItem }: ItemProps) {
  function handleItemOrder() {
    deleteItem(data.id);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.items}>
        {data.amount} - {data.name}
      </Text>

      <TouchableOpacity onPress={handleItemOrder}>
        <Feather name="trash-2" size={25} color="#FF3F4b" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D3056',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginBottom: 12,
    borderRadius: 4,
    borderWidth: 0.3,
    borderColor: '#D7F9FF',
  },
  items: {
    color: '#fff',
  },
});
