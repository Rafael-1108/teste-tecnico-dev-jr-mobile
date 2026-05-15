import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import PerfilScreen from './screens/PerfilScreen';
import HabilidadesScreen from './screens/HabilidadesScreen';
import ProjetosScreen from './screens/ProjetosScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#1e40af',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            drawerActiveTintColor: '#1e40af',
            drawerActiveBackgroundColor: '#dbeafe',
            drawerInactiveTintColor: '#334155',
            drawerLabelStyle: {
              fontSize: 16,
              fontWeight: '500',
            },
            drawerStyle: {
              backgroundColor: '#f8fafc',
              width: 260,
            },
          }}
        >
          <Drawer.Screen name="Perfil" component={PerfilScreen} />
          <Drawer.Screen name="Projetos" component={ProjetosScreen} />
          <Drawer.Screen name="Habilidades" component={HabilidadesScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}