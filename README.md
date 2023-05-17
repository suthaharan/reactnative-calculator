### Simple Calculator App
An example of a simple calculator application using React Native:

* Set up a new React Native project:
* Open a terminal and navigate to the desired directory.
* Run the following command to create a new React Native project:
```
npx react-native init CalculatorApp
```

* Open the project in your preferred code editor.
* Create a new file named "Calculator.js" in the project's source code directory.
* Add the following code to the "Calculator.js" file:
```
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Calculator = () => {
  const [result, setResult] = useState('');

  const handleButtonPress = (value) => {
    setResult(result + value);
  };

  const calculateResult = () => {
    setResult(eval(result));
  };

  const clearResult = () => {
    setResult('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.result}>{result}</Text>
      <View style={styles.buttonContainer}>
        <View style={styles.row}>
          <Button title="1" onPress={() => handleButtonPress('1')} />
          <Button title="2" onPress={() => handleButtonPress('2')} />
          <Button title="3" onPress={() => handleButtonPress('3')} />
        </View>
        <View style={styles.row}>
          <Button title="4" onPress={() => handleButtonPress('4')} />
          <Button title="5" onPress={() => handleButtonPress('5')} />
          <Button title="6" onPress={() => handleButtonPress('6')} />
        </View>
        <View style={styles.row}>
          <Button title="7" onPress={() => handleButtonPress('7')} />
          <Button title="8" onPress={() => handleButtonPress('8')} />
          <Button title="9" onPress={() => handleButtonPress('9')} />
        </View>
        <View style={styles.row}>
          <Button title="0" onPress={() => handleButtonPress('0')} />
          <Button title="+" onPress={() => handleButtonPress('+')} />
          <Button title="=" onPress={calculateResult} />
        </View>
        <View style={styles.row}>
          <Button title="C" onPress={clearResult} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  result: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    width: '80%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});

export default Calculator;
```

* Open the "App.js" file in the project's source code directory.

* Replace the existing code in "App.js" with the following code:
```
import React from 'react';
import Calculator from './Calculator';

const App = () => {
  return <Calculator />;
};

export default App;
```
* Save the files and return to the terminal.

* Run the following command to start the React Native development server:

```
npx react-native start
```

* Open a new terminal and run the following command to launch the application on an Android emulator or connected device:
```
npx react-native run-android
```

Make sure you have a running Android emulator or a connected Android device with USB debugging enabled.

The calculator application should now be displayed on the emulator or device. You can perform basic calculations by pressing the number buttons and the "+" button. Pressing the "=" button will evaluate the expression, and pressing "C" will clear the result.

That's it! You have created a simple calculator application using React Native. Feel free to modify and enhance the application according to your needs.