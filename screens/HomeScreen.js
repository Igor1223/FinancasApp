import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TransactionContext } from '../contexts/TransactionContext';
import TransactionList from '../components/TransactionList';

const HomeScreen = ({ navigation }) => {
  const { transactions } = useContext(TransactionContext);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const totalBalance = transactions.reduce((acc, cur) => {
      if (cur.type === 'income') {
        return acc + cur.amount;
      } else {
        return acc - cur.amount;
      }
    }, 0);
    setBalance(totalBalance);
  }, [transactions]);

  let balanceColor = 'black';
  if (balance > 0.01) {
    balanceColor = 'green';
  } else if (balance < 0) {
    balanceColor = 'red';
  }

  return (
    <View style={styles.container}>
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceLabel}>Saldo Total</Text>
        <Text style={[styles.balanceText, { color: balanceColor }]}>R$ {balance.toFixed(2)}</Text>
      </View>
      <TransactionList transactions={transactions} />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddTransaction')}
      >
        <Ionicons name="add" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  balanceContainer: {
    width: '100%',
    alignSelf: 'flex-start',
    padding: 20,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 0,
    elevation: 1,
    marginBottom: 20,
  },
  balanceLabel: {
    fontSize: 21,
    marginBottom: 5,
    color: 'black', // Manter o rótulo preto
  },
  balanceText: {
    fontSize: 24,
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#4CAF50',
    borderRadius: 30,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
});

export default HomeScreen;
