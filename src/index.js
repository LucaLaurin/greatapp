import { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Button, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';

import { Header } from './components';
import { Categories, Products } from './screens';
import { COLORS } from './themes';

const categoryDefault = {
  categoryId: null,
  color: COLORS.primary,
};
export default function App() {
  const [loaded] = useFonts ({
    'Nunito-Regular': require('../assets/fonts/Nunito-Regular.ttf'),
    'Nunito-Light': require('../assets/fonts/Nunito-Light.ttf'),
    'Nunito-Medium': require('../assets/fonts/Nunito-Medium.ttf'),
    'Nunito-Black': require('../assets/fonts/Nunito-Black.ttf'),
  })
  const [isCategorySelected, setIsCategorySelected] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categoryDefault);

  const headerTitle = isCategorySelected ? 'Products' : 'Categories';

  const onHandleSelectCategory = ({ categoryId, color }) => {
    setSelectedCategory({ categoryId, color });
    setIsCategorySelected(!isCategorySelected);
  };
  const onHandleNavigate = () => {
    setIsCategorySelected(!isCategorySelected);
    setSelectedCategory(categoryDefault);
  };


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header title={headerTitle} style={{ backgroundColor: selectedCategory.color }} />
        {isCategorySelected ? (
          <Products onHandleGoBack={onHandleNavigate} categorySelected={selectedCategory} />
        ) : (
          <Categories onSelectCategory={onHandleSelectCategory} />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});




