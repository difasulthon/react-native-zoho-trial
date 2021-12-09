import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ZohoSalesIQ } from 'react-native-zohosalesiq-mobilisten';

const App = () => {

  // if (Platform.OS === 'ios') {
  //   ZohoSalesIQ.init("ios_app_key", "ios_access_key");
  // } else {
  //   ZohoSalesIQ.init(
  //     "E5HdvV0BntJoQaxA0%2FryQAQtKJ2Or8XXFr9Q0TGqB9hSVKjwrIVoyqzgvqyMyct0",
  //     "mhkMU4lTOUbFYn1NX85gIKivdStMmnA4ouPaXJVpS1Lgw%2B%2F6CyozgfVdsMzuUUArkUA0Aq%2BtJOVWOcJH6tyhpxILVNqj8KL%2FdlIHEc5idFHdvO1Rx7OfEC5asmXX61UIeZ5Hpu3xXgCKxk0%2B%2BlQHBhu6Ih6Vfee3");
  // }

  // ZohoSalesIQ.setLauncherVisibility(true);

  let appKey;
  let accessKey;

  if (Platform.OS === 'ios') {
    appKey = "ios_appKey";
    accessKey = "ios_accessKey";
  } else {
    appKey = "E5HdvV0BntJoQaxA0%2FryQAQtKJ2Or8XXFr9Q0TGqB9hSVKjwrIVoyqzgvqyMyct0";
    accessKey = "mhkMU4lTOUbFYn1NX85gIKivdStMmnA4ouPaXJVpS1Lgw%2B%2F6CyozgfVdsMzuUUArkUA0Aq%2BtJOVWOcJH6tyhpxILVNqj8KL%2FdlIHEc5idFHdvO1Rx7OfEC5asmXX61UIeZ5Hpu3xXgCKxk0%2B%2BlQHBhu6Ih6Vfee3";
  }

  ZohoSalesIQ.initWithCallback(appKey, accessKey, (success) => {
    if (success) {
      ZohoSalesIQ.setLauncherVisibility(true);
      // To show the default live chat launcher, you can use the setLauncherVisibility API. 
      // Alternatively, you may use the 'Avail floating chat button for your app' option under Settings → Brands → Installation → Android/iOS.
    } else {
      // your code to handle initialization failure
    }
  });

  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})
