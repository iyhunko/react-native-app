import React from 'react'
import {
    Text,
    View,
    Button,
    StyleSheet
  } from 'react-native';

const Home = ()=> {
  const bodyText = "$1 = 37.33UAH";

  return (
      <View style={styles.mainView}>
        <Text style={styles.baseText}>
          {bodyText}
        </Text>
        <Button title="Click me"/>
      </View>
  );
}

const styles = StyleSheet.create({
    baseText: {
      fontFamily: "Cochin",
      color: '#000',
    },
    titleText: {
      fontSize: 20,
      fontWeight: "bold"
    },
    mainView: {
      marginTop: 40,
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }
  });

export default Home;