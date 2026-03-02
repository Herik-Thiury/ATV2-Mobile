import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function AppMensagens() {
  const router = useRouter();

  const conversas = [
    { 
      id: '1', 
      nome: 'Claudia Alves', 
      mensagem: 'Do more of what you love.', 
      tempo: '3m ago', 
      naoLidas: 3, 
      imagem: 'https://randomuser.me/api/portraits/women/44.jpg' 
    },
    { 
      id: '2', 
      nome: 'Dani Martinez', 
      mensagem: 'Do your own thing.', 
      tempo: '5m ago', 
      naoLidas: 2, 
      imagem: 'https://randomuser.me/api/portraits/men/32.jpg' 
    },
    { 
      id: '3', 
      nome: 'Kimberly Nguyen', 
      mensagem: 'Kindness is beautiful.', 
      tempo: '1h ago', 
      naoLidas: 1, 
      imagem: 'https://randomuser.me/api/portraits/women/68.jpg' 
    },
    { 
      id: '4', 
      nome: 'Mariana Napolitani', 
      mensagem: 'Live your purpose.', 
      tempo: '2h ago', 
      naoLidas: 0, 
      imagem: 'https://randomuser.me/api/portraits/women/12.jpg' 
    },
    { 
      id: '5', 
      nome: 'Olivia Wilson', 
      mensagem: 'You got this.', 
      tempo: '5h ago', 
      naoLidas: 0, 
      imagem: 'https://randomuser.me/api/portraits/women/17.jpg' 
    },
    { 
      id: '6', 
      nome: 'Rachelle Beaudry', 
      mensagem: "You're wonderful.", 
      tempo: 'Yesterday', 
      naoLidas: 0, 
      imagem: 'https://randomuser.me/api/portraits/women/9.jpg' 
    },
    { 
      id: '7', 
      nome: 'Soo Jin Ae', 
      mensagem: 'Keep it simple.', 
      tempo: 'Yesterday', 
      naoLidas: 0, 
      imagem: 'https://randomuser.me/api/portraits/women/31.jpg' 
    },
  ];

  return (
    <View style={styles.container}>
      
      {/* === Cabeçalho do Ecrã === */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.markReadBtn}>
          <Text style={styles.markReadText}>Mark all read</Text>
        </TouchableOpacity>
        
        <Text style={styles.title}>Messages & Chat</Text>
        
        <TouchableOpacity style={styles.sortBtn}>
          <Text style={styles.sortText}>Sort by time</Text>
          <Ionicons name="chevron-down" size={16} color="#666" />
        </TouchableOpacity>
      </View>

      {/* === Lista de Conversas === */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.listContainer}>
        {conversas.map((chat) => (
          <TouchableOpacity key={chat.id} style={styles.chatRow}>
            
            {/* Imagem de Perfil */}
            <View style={styles.avatarContainer}>
              <Image source={{ uri: chat.imagem }} style={styles.avatar} />
            </View>

            {/* Informação Central (Nome e Mensagem) */}
            <View style={styles.chatInfo}>
              <Text style={styles.chatName}>{chat.nome}</Text>
              <Text style={[styles.chatMessage, chat.naoLidas > 0 && styles.chatMessageUnread]} numberOfLines={1}>
                {chat.mensagem}
              </Text>
            </View>

            {/* Lado Direito (Tempo e Contador de Não Lidas) */}
            <View style={styles.chatRight}>
              <Text style={styles.chatTime}>{chat.tempo}</Text>
              {chat.naoLidas > 0 && (
                <View style={styles.badgeContainer}>
                  <Text style={styles.badgeText}>{chat.naoLidas}</Text>
                </View>
              )}
            </View>

          </TouchableOpacity>
        ))}
        
        {/* Espaçamento extra no fundo para a barra de navegação não tapar a última mensagem */}
        <View style={{ height: 100 }} />
      </ScrollView>

      {/* === Barra de Navegação Inferior === */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => router.back()}>
          <Ionicons name="home-outline" size={24} color="#999" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="chatbubble-ellipses" size={24} color="#5C4DB1" />
          <Text style={[styles.navText, { color: '#5C4DB1', fontWeight: 'bold' }]}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="mail-outline" size={24} color="#999" />
          <Text style={styles.navText}>Mail</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person-outline" size={24} color="#999" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: '#FFF',
  },
  markReadBtn: {
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  markReadText: {
    color: '#999',
    fontSize: 14,
    fontWeight: '500',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 15,
  },
  sortBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sortText: {
    color: '#666',
    fontSize: 14,
    marginRight: 5,
    fontWeight: '500',
  },
  listContainer: {
    paddingHorizontal: 20,
  },
  chatRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  avatarContainer: {
    marginRight: 15,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#EEE',
  },
  chatInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  chatName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  chatMessage: {
    fontSize: 14,
    color: '#999',
  },
  chatMessageUnread: {
    color: '#000', 
    fontWeight: '600',
  },
  chatRight: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  chatTime: {
    fontSize: 12,
    color: '#999',
    marginBottom: 8,
  },
  badgeContainer: {
    backgroundColor: '#5C4DB1',
    borderRadius: 12,
    minWidth: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6,
  },
  badgeText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: '#EEE',
    paddingBottom: 25,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    marginTop: 4,
    color: '#999',
  },
});