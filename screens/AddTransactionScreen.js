import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import TransactionForm from '../components/TransactionForm';
import { TransactionContext } from '../contexts/TransactionContext';

const AddTransactionScreen = ({ navigation }) => {
  const { setTransactions } = useContext(TransactionContext);

  const handleAddTransaction = (transaction) => {
    setTransactions((prevTransactions) => [...prevTransactions, transaction]);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TransactionForm onAddTransaction={handleAddTransaction} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
});

export default AddTransactionScreen;
