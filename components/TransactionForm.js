import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const TransactionForm = ({ onAddTransaction }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [transactionType, setTransactionType] = useState('expense');
  const [category, setCategory] = useState('Salário');
  const [descriptionError, setDescriptionError] = useState('');
  const [amountError, setAmountError] = useState('');

  const handleDescriptionChange = (text) => {
    const filteredText = text.replace(/[^a-zA-Z\s]/g, '');
    setDescription(filteredText);
  };

  const handleAmountChange = (text) => {
    const filteredText = text.replace(/[^0-9.,]/g, '');
    setAmount(filteredText);
  };

  const handleSubmit = () => {
    let valid = true;

    if (!description.trim()) {
      setDescriptionError('Preencha a descrição');
      valid = false;
    } else if (!/^[a-zA-Z\s]+$/.test(description)) {
      setDescriptionError('A descrição deve conter apenas letras');
      valid = false;
    } else {
      setDescriptionError('');
    }

    if (!amount.trim()) {
      setAmountError('Preencha o valor');
      valid = false;
    } else {
      // Validar formato do valor
      const formattedAmount = amount.replace(',', '.');
      if (!/^\d+(\.\d{1,2})?$/.test(formattedAmount)) {
        setAmountError('Valor inválido');
        valid = false;
      } else {
        setAmountError('');
      }
    }

    if (valid) {
      onAddTransaction({ description, amount: parseFloat(amount.replace(',', '.')), type: transactionType, category });
      setDescription('');
      setAmount('');
      setTransactionType('expense');
      setCategory('Salário');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={description}
        onChangeText={handleDescriptionChange}
      />
      {descriptionError ? <Text style={styles.error}>{descriptionError}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Valor"
        keyboardType="numeric"
        value={amount}
        onChangeText={handleAmountChange}
      />
      {amountError ? <Text style={styles.error}>{amountError}</Text> : null}
      <Picker
        selectedValue={category}
        onValueChange={(itemValue) => setCategory(itemValue)}
      >
        <Picker.Item label="Salário" value="Salário" />
        <Picker.Item label="Lazer" value="Lazer" />
        <Picker.Item label="Compras" value="Compras" />
        <Picker.Item label="Alimentação" value="Alimentação" />
        <Picker.Item label="Carro" value="Carro" />
        <Picker.Item label="Casa" value="Casa" />
      </Picker>
      <Picker
        selectedValue={transactionType}
        onValueChange={(itemValue) => setTransactionType(itemValue)}
      >
        <Picker.Item label="Despesa" value="expense" />
        <Picker.Item label="Receita" value="income" />
      </Picker>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Adicionar Transação</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  error: {
    color: 'red',
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    marginTop: 16,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TransactionForm;
