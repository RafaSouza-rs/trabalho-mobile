import React, { useState } from 'react';
import { View, Text, TextInput, Button, ImageBackground, StyleSheet,TouchableOpacity } from 'react-native';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');

  const handleCadastro = () => {
    navigation.navigate('Cadastro')
  };

  const handleLogin = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setMensagemErro('Por favor, insira um email válido.');
    } else if (password.length < 3) {
      setMensagemErro('A senha deve conter pelo menos 3 caracteres.');
    } else {
      navigation.navigate('Home');
    }
  };

  return (
    <ImageBackground
    source={require('../../assets/make.jpg')}
      style={styles.backgroundImage}
    >
    <View style={styles.container}>
      <Text style={styles.title}>Login Makeup</Text>
      <Text style={styles.subtitle}>Seja Bem-vindo(a)</Text>
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
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <Button title='Entrar' onPress={handleLogin} />
      {mensagemErro ? <Text style={styles.mensagemErro}>{mensagemErro}</Text> : null}
      <TouchableOpacity onPress={handleCadastro} style={styles.cadastroButton}>
          <Text style={styles.cadastroButtonText}>Cadastre-se</Text>
        </TouchableOpacity>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 107, 152, 0.4)',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
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
  cadastroButton: {
    backgroundColor: '#FF6B98', 
    paddingVertical: 10, 
    paddingHorizontal: 20, 
    borderRadius: 5, 
    marginTop: 20, 
  },
  cadastroButtonText: {
    color: 'white', 
    fontSize: 18,
  },
});

export default Login;
