import { Button, View, Text } from 'react-native';
export default function Home({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{color : 'red', fontSize : 50}}>
                 Selamat Datang ! - Natasya
            </Text>
        <Button
          onPress={() => navigation.navigate('Notif')} // ini untuk tujuan pas di klik 'ini tertuju ke bagian notifications
          title="Go to notifications"
        />
        <Text>Ini tampilan Home</Text>
      </View>
    );
  }