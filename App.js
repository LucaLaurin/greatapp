import { StyleSheet, Text, View, TextInput, Button, SafeAreaView} from 'react-native';
import { styles } from './styles';
import { useState } from 'react';

export default function App() {
  const [borderColor, setBorderColor] = useState('#264653')

  const onHandlerFocus = () => {
    setBorderColor('#424D9E')
  }

  const onHandlerBlur = () => {
    setBorderColor('#424D9E') 
  }
  return (
    <SafeAreaView style={styles.safeArea}> 
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput 
          style={[styles.input, { borderColor: borderColor}]} 
          placeholder='Welcome'
          autoCapitalize='none'
          autoCorrect={false}
          cursorColor='#e76f51'
          selectionColor='#e76f51'
          placeholderTextColor='#264653'
          onFocus={onHandlerFocus}
          onBlur={onHandlerBlur}
          /> 
          <Button title='Creat' color= '#e76f51' />
        </View>
      </View>
    </SafeAreaView>
  );
}


