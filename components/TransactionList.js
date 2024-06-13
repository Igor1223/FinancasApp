import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const TransactionList = ({ transactions }) => {
  const renderItem = ({ item }) => {
    let textColor = 'black';

    if (item.type === 'expense') {
      textColor = 'red';
    } else if (item.type === 'income') {
      textColor = 'green';
    }

    return (
      <View style={styles.item}>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.category}>{item.category}</Text>
        <Text style={[styles.amount, { color: textColor }]}>R$ {item.amount.toFixed(2)}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Últimas Movimentações</Text>
      <FlatList
        data={transactions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginRight: 180,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  description: {
    fontSize: 19,
    color: 'black',
    flex: 1,
    fontWeight: 'bold', // Adicionado o estilo de negrito
    textTransform: 'capitalize' // Primeira letra maiúscula
  },
  category: {
    fontSize: 18,
    color: 'gray',
    marginRight: 20,
  },
  amount: {
    fontSize: 18,
    marginLeft: 'auto',
  },
});

export default TransactionList;
