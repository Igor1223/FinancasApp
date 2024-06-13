import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TotalBalance = ({ balance }) => {
  let balanceColor = 'black';

  if (balance > 0.01) {
    balanceColor = 'green';
  } else if (balance < 0) {
    balanceColor = 'red';
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.balanceLabel, { color: 'black' }]}>Saldo Total</Text>
      <Text style={styles.balanceText}>R$ <Text style={[styles.balanceValue, { color: balanceColor }]}>{balance.toFixed(2)}</Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    elevation: 1,
    marginBottom: 20,
  },
  balanceLabel: {
    fontSize: 16,
    marginBottom: 5,
  },
  balanceText: {
    fontSize: 24,
  },
  balanceValue: {
    fontSize: 24,
  },
});

export default TotalBalance;
