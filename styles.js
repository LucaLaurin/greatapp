import { StyleSheet, StatusBar} from 'react-native';

export const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginHorizontal: 20,
      paddingTop: StatusBar.currentHeight,
    },
    inputContainer: {
      paddingTop: 50,
      flexDirection: 'row', 
      justifyContent: 'space-between',
    },
    input: {
      flex: 0.95,
      borderWidth: 1,
      borderRadius: 10,
      paddingHorizontal: 10,
      color: '#212121',
      height: 40,
      borderColor: '#e76f51',
      fontSize: 14,
  
    }
});