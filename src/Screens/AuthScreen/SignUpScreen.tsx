import { Text, View, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { register } from '../../store/slices/authSlice';
import { styles } from './styles'; // ✅ استيراد التنسيقات من ملف خارجي

const SignUpScreen = () => {
  const dispatch = useAppDispatch();
  const { loading, error, user } = useAppSelector(state => state.auth);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (email && password) {
      dispatch(register({ email, password }));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        style={styles.input}
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />

      <TouchableOpacity onPress={handleRegister} style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      {loading && <ActivityIndicator style={styles.loader} />}
      {error && <Text style={styles.error}>{error}</Text>}
      {user && <Text style={styles.success}>تم التسجيل بنجاح: {user}</Text>}
    </View>
  );
};

export default SignUpScreen;
