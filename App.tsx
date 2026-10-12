import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import ForgotPasswordScreen from './src/reset';

export default function App() {
  const [screen, setScreen] = useState('login');

  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {screen === 'login' ? (
        <>
          <View style={[styles.header, { marginTop: 30 }]}>
            <Text style={styles.title}>Привет, с возвращением!</Text>
            <Text style={styles.subtitle}>Войдите в свой аккаунт.</Text>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputIconText}>📞</Text>
            <TextInput
              style={styles.input}
              placeholder="Номер телефона"
              placeholderTextColor="#A0A0A0"
              keyboardType="phone-pad"
              value={phone}
              onChangeText={setPhone}
            />
          </View>

          <View style={[styles.inputContainer, { marginTop: 16 }]}>
            <Text style={styles.inputIconText}>🔒</Text>
            <TextInput
              style={styles.input}
              placeholder="Пароль"
              placeholderTextColor="#A0A0A0"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Text style={styles.eyeText}>
                {showPassword ? '👁' : '👁‍🗨'}
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.forgotBtn}
            onPress={() => setScreen('reset')}
          >
            <Text style={styles.forgotText}>Забыл пароль?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginBtnText}>Войти</Text>
          </TouchableOpacity>

          <View style={styles.footer}>
            <Text style={styles.footerText}>У вас нет аккаунта?</Text>
            <TouchableOpacity>
              <Text style={styles.registerText}>Зарегистрироваться</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <ForgotPasswordScreen 
          onBack={() => setScreen('login')}
          onSubmit={(phoneNum) => {
            alert(`Запрос на восстановление отправлен для: ${phoneNum}`);
            setScreen('login');
          }}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
  },
  header: {
    marginBottom: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111111',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: '#9E9E9E',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7F7FA',
    borderRadius: 16,
    height: 56,
    paddingHorizontal: 16,
  },
  inputIconText: {
    fontSize: 18,
    marginRight: 12,
  },
  eyeText: {
    fontSize: 18,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: '#111111',
  },
  forgotBtn: {
    alignSelf: 'flex-end',
    marginTop: 12,
    marginBottom: 24,
  },
  forgotText: {
    color: '#A020F0',
    fontSize: 14,
    fontWeight: '500',
  },
  loginBtn: {
    backgroundColor: '#A020F0',
    borderRadius: 16,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#A020F0',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  loginBtnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 'auto',
    marginBottom: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#9E9E9E',
    marginBottom: 4,
  },
  registerText: {
    fontSize: 14,
    color: '#A020F0',
    fontWeight: 'bold',
  },
});