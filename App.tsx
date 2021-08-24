/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  // SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Header, Button} from 'react-native-elements';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import ListComponent from './src/list';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header backgroundColor="#30BB6B" />
        <View style={styles.headerView}>
          <View style={{marginLeft: 'auto', marginRight: 'auto', width: '90%'}}>
            <Text style={styles.headerHeading}>Ingredient</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingBottom: 20,
              }}>
              <Button
                buttonStyle={styles.buttonStyleOne}
                titleStyle={{color: '#6CCE95'}}
                title="By Recipe"
                containerStyle={styles.button}
              />
              <Button
                buttonStyle={styles.buttonStyleTwo}
                titleStyle={{color: '#30BB6B'}}
                title="All Griedients"
                containerStyle={styles.button}
                // raised
              />
            </View>
          </View>
        </View>
        <ListComponent />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  headerView: {
    backgroundColor: '#30BB6B',
  },
  buttonStyleOne: {
    backgroundColor: 'transparent',
    borderRadius: 20,
    paddingHorizontal: 20,
  },
  buttonStyleTwo: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  button: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  headerHeading: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    paddingTop: 30,
  },
});

export default App;
