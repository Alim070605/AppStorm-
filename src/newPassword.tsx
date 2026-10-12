import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

type NewPasswordScreenProps = {
  onBack: () => void;
  onSubmit: (password: string) => void;
};

// Не менее 8 символов, есть строчная и прописная буква
const isPasswordValid = (value: string) =>
  value.length >= 8 && /[a-zа-яё]/.test(value) && /[A-ZА-ЯЁ]/.test(value);

export default function NewPasswordScreen({
  onBack,
  onSubmit,
}: NewPasswordScreenProps) {
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeat, setShowRepeat] = useState(false);

  const passwordsMatch = password === repeatPassword;
  const canSubmit =
    isPasswordValid(password) && repeatPassword.length > 0 && passwordsMatch;

  const showMismatch = repeatPassword.length > 0 && !passwordsMatch;

  return (
    <>
      {/* Кнопка назад */}
      <TouchableOpacity style={styles.backBtn} onPress={onBack}>
        <Text style={styles.iconText}>←</Text>
      </TouchableOpacity>

      <View style={styles.headerCentered}>
        <Text style={styles.titleCentered}>Сбросить пароль</Text>
        <Text style={styles.subtitleCentered}>
          Не менее 8 символов, с прописными и строчными буквами
        </Text>
      </View>

      {/* Пароль */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputIconText}>🔒</Text>
        <TextInput
          style={styles.input}
          placeholder="Пароль"
          placeholderTextColor="#A0A0A0"
          secureTextEntry={!showPassword}
          autoCapitalize="none"
          autoCorrect={false}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Text style={styles.eyeText}>{showPassword ? '👁' : '👁‍🗨'}</Text>
        </TouchableOpacity>
      </View>

      {/* Повторить пароль */}
      <View
        style={[
          styles.inputContainer,
          { marginTop: 16 },
          showMismatch && styles.inputError,
        ]}
      >
        <Text style={styles.inputIconText}>🔒</Text>
        <TextInput
          style={styles.input}
          placeholder="Повторить пароль"
          placeholderTextColor="#A0A0A0"
          secureTextEntry={!showRepeat}
          autoCapitalize="none"
          autoCorrect={false}
          value={repeatPassword}
          onChangeText={setRepeatPassword}
        />
        <TouchableOpacity onPress={() => setShowRepeat(!showRepeat)}>
          <Text style={styles.eyeText}>{showRepeat ? '👁' : '👁‍🗨'}</Text>
        </TouchableOpacity>
      </View>

      {showMismatch && (
        <Text style={styles.errorText}>Пароли не совпадают</Text>
      )}

      <TouchableOpacity
        style={[
          styles.loginBtn,
          { marginTop: 24 },
          !canSubmit && styles.loginBtnDisabled,
        ]}
        disabled={!canSubmit}
        onPress={() => onSubmit(password)}
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
    marginTop: 60,
    marginBottom: 32,
    paddingHorizontal: 10,
  },
  titleCentered: {
    fontSize: 24,
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
    borderWidth: 1,
    borderColor: 'transparent',
  },
  inputError: {
    borderColor: '#E5484D',
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
  errorText: {
    color: '#E5484D',
    fontSize: 13,
    marginTop: 8,
    marginLeft: 4,
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
  loginBtnDisabled: {
    opacity: 0.5,
  },
  loginBtnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
