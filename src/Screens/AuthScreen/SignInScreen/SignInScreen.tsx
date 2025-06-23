import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import StackNames from '../../../navigation/StackNames';

const SignInScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if(email === '' && password === ''){
      navigation.navigate(StackNames.MainTabs);
    }
    else {
      Alert.alert('البريد الإلكتروني أو كلمة المرور غير صحيحة');
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}>
      <Text style={styles.title}>مرحباً بك 👋</Text>
      <Text style={styles.subtitle}>سجّل دخولك للمتابعة</Text>

      <TextInput
        placeholder="البريد الإلكتروني"
        placeholderTextColor="#9CA3AF"
        style={styles.input}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        placeholder="كلمة المرور"
        placeholderTextColor="#9CA3AF"
        secureTextEntry
        style={styles.input}
        onChangeText={text => setPassword(text)}
      />


      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => handleLogin()}>
        <Text style={styles.loginButtonText}>تسجيل الدخول</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>ليس لديك حساب؟</Text>
        <TouchableOpacity>
          <Text style={styles.signupText}>إنشاء حساب</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignInScreen;
