import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function ForgotPasswordScreen({ onBack, onSubmit }) {
  const [resetPhone, setResetPhone] = useState('+7 ');

  return (
    <>
      {/* Кнопка назад */}
      <TouchableOpacity style={styles.backBtn} onPress={onBack}>
        <Text style={styles.iconText}>←</Text>
      </TouchableOpacity>

      <View style={styles.headerCentered}>
        <Text style={styles.titleCentered}>Восстановление пароля</Text>
        <Text style={styles.subtitleCentered}>
          Введите свой номер телефона, чтобы восстановить пароль
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={[styles.inputIconText, { color: '#A020F0' }]}>📞</Text>
        <TextInput
          style={styles.input}
          placeholder="Номер телефона"
          placeholderTextColor="#A0A0A0"
          keyboardType="phone-pad"
          value={resetPhone}
          onChangeText={setResetPhone}
        />
      </View>

      <TouchableOpacity 
        style={[styles.loginBtn, { marginTop: 16 }]}
        onPress={() => onSubmit(resetPhone)}
      >
        <Text style={styles.loginBtnText}>Продолжить</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  backBtn: {
    marginTop: 10,
    marginBottom: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 24,
    color: '#111111',
    fontWeight: 'bold',
  },
  headerCentered: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 32,
    paddingHorizontal: 10,
  },
  titleCentered: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111111',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitleCentered: {
    fontSize: 15,
    color: '#9E9E9E',
    textAlign: 'center',
    lineHeight: 22,
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
  input: {
    flex: 1,
    fontSize: 15,
    color: '#111111',
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
});