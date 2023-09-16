import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Cadastro = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');

  const handleCadastro = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nome) {
      setMensagemErro('Por favor, insira seu nome.');
    } else if (!emailPattern.test(email)) {
      setMensagemErro('Por favor, insira um email válido.');
    } else if (senha.length < 3) {
      setMensagemErro('A senha deve conter pelo menos 3 caracteres.');
    } else {
        setMensagemErro('Cadastro realizado com sucesso!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro Makeup</Text>
      <TextInput
        placeholder='Nome'
        style={styles.input}
        onChangeText={(text) => setNome(text)}
        value={nome}
      />
      <TextInput
        placeholder='Email (usuario@exemplo.com)'
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        placeholder='Senha'
        secureTextEntry
        style={styles.input}
        onChangeText={(text) => setSenha(text)}
        value={senha}
      />
      <Button title='Cadastrar' onPress={handleCadastro} />
      {mensagemErro ? <Text style={styles.mensagemErro}>{mensagemErro}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF6B98',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  input: {
    width: 250,
    height: 40,
    backgroundColor: 'white',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  mensagemErro: {
    color: 'red',
    marginTop: 16,
  },
});

export default Cadastro;
