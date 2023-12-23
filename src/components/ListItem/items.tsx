import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

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
