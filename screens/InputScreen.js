import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Pressable, Image, StyleSheet, Keyboard } from 'react-native';

export default function InputScreen() {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [clave, setClave] = useState('');

  const handlePress = () => {
    console.log('Nombre:', nombre);
    console.log('Teléfono:', telefono);
    console.log('Email:', email);
    console.log('Clave:', clave);
    Keyboard.dismiss(); // Cierra el teclado
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/image/icon.png')} style={styles.icon} />
      <Text style={styles.label}>Nombre:</Text>
      <TextInput
        style={styles.input}
        value={nombre}
        onChangeText={setNombre}
        returnKeyType="next"
        placeholder="Ingrese su nombre"
      />
      
      <Text style={styles.label}>Teléfono:</Text>
      <TextInput
        style={styles.input}
        value={telefono}
        onChangeText={setTelefono}
        returnKeyType="next"
        keyboardType="phone-pad"
        placeholder="Ingrese su teléfono"
      />

      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        returnKeyType="next"
        keyboardType="email-address"
        placeholder="Ingrese su email"
      />

      <Text style={styles.label}>Clave:</Text>
      <TextInput
        style={styles.input}
        value={clave}
        onChangeText={setClave}
        returnKeyType="done"
        secureTextEntry={true}
        placeholder="Ingrese su clave"
      />

      <Button title="Boton normal" onPress={handlePress} />
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>TouchableOpacity</Text>
      </TouchableOpacity>
      <Pressable style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Pressable</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  icon: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333333',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#cccccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    backgroundColor: '#ffffff',
  },
  button: {
    width: '100%',
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#3F51B5',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
});