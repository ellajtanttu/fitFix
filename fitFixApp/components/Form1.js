import * as React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';


export default function Form1({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>THIS IS THE FORM1 COMPONENT</Text>
      <StatusBar style="auto" />
      <Button
        title="Go to Form2"
        onPress={() => navigation.navigate('Form2')}
      />
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