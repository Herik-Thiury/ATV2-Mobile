import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Atividade 02</Text>
      <Text style={styles.subtitle}>Escolha uma das interfaces para visualizar:</Text>

      {/* Botão 1: App Médico */}
      <TouchableOpacity 
        style={[styles.button, { backgroundColor: '#4A90E2' }]} 
        onPress={() => router.push('/appMedico')} // Navega para o arquivo appMedico.tsx
      >
        <Text style={styles.buttonText}>1. App Médico</Text>
      </TouchableOpacity>

      {/* Botão 2: App de Viagens */}
      <TouchableOpacity 
        style={[styles.button, { backgroundColor: '#6C5CE7' }]} 
        onPress={() => router.push('/AppViagem')} // Navega para o arquivo appViagem.tsx
      >
        <Text style={styles.buttonText}>2. App de Viagens</Text>
      </TouchableOpacity>

      {/* Botão 3: App de Mensagens */}
      <TouchableOpacity 
        style={[styles.button, { backgroundColor: '#00B894' }]} 
        onPress={() => router.push('/AppMensagens')} // Navega para o arquivo appMensagens.tsx
      >
        <Text style={styles.buttonText}>3. App de Mensagens</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F9FA',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    width: '100%',
    paddingVertical: 18,
    borderRadius: 12,
    marginBottom: 20,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});