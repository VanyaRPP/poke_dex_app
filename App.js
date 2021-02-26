import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

import obj from 'api/index';

export default function App() {
  const [List, setList] = useState([]);
  
  useEffect(() => {
    obj
      .getPokeList()
      .then((data) => setList(data.data))
      .catch(console.log);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your xyz!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

