import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const Calculator = () => {
  const [result, setResult] = useState('');

  const handleButtonPress = value => {
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
