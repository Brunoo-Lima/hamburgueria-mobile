import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Dashboard from '../components/pages/Dashboard/dashboard';
import Order from '../components/pages/Order/order';
import FinishOrder from '../components/pages/FinishOrder/finishOrder';

export type StackParamsList = {
  Dashboard: undefined;
  Order: {
    number: number | string;
    order_id: string;
  };
  FinishOrder: {
    number: number | string;
    order_id: string;
  };
};

const Stack = createNativeStackNavigator<StackParamsList>();

function AppRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Order"
        component={Order}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FinishOrder"
        component={FinishOrder}
        options={{
          title: 'Finalizando',
          headerStyle: {
            backgroundColor: '#01080E',
          },
          headerTintColor: '#ffffff',
        }}
      />
    </Stack.Navigator>
  );
}

export default AppRoutes;
