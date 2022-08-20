import React, { useState } from 'react'
import {
  Text,
  View,
  Button,
  StyleSheet,
  SafeAreaView,
  Pressable
} from 'react-native';

const Home = () => {
  const [bodyText, SetBodyText] = useState('')
  const [submitted, SetSubmitted] = useState(false)
  const onPressHandler = () => {
    SetSubmitted(!submitted)
    SetBodyText(Math.floor(Math.random() * 11))
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainView}>
        <Pressable onPress={onPressHandler}>
          <Text style={styles.buttonText}>Generate random number</Text>
        </Pressable>
        <Text style={styles.baseText}>
          {bodyText}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  baseText: {
    fontFamily: "Cochin",
    color: '#000',
    fontSize: 150,
    fontWeight: "bold",
    marginTop: 100,
  },
  mainView: {
    marginTop: 40,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {

    height: 50,
    alignItems: 'center',
    fontSize: 30,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default Home;