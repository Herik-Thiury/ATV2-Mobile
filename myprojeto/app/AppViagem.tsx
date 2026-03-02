import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function AppViagem() {
  const router = useRouter();

  // Categorias simuladas do PDF
  const categorias = ['Resort', 'Homestay', 'Hotel', 'Lodge', 'Villa', 'Apartment', 'Hostel'];

  // Imagens simuladas para Destinos Populares
  const destinosPopulares = [
    { id: '1', imagem: 'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' }, // Parque
    { id: '2', imagem: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' }, // Montanhas
    { id: '3', imagem: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' }, // Lago
    { id: '4', imagem: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' }, // Praia
    { id: '5', imagem: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' }, // Cidade
    { id: '6', imagem: 'https://images.unsplash.com/photo-1478265409131-1f65c88f965c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' }, // Neve
  ];

  // Imagens simuladas para Recomendados
  const recomendados = [
    { id: '1', imagem: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' }, 
    { id: '2', imagem: 'https://images.unsplash.com/photo-1543429776-27826ac18eb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' }, 
  ];

  return (
    <View style={styles.container}>
      {/* Scroll principal da tela */}
      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* === CABEÇALHO ROXO === */}
        <View style={styles.headerBackground}>
          
          {/* Logo e Barra de Pesquisa */}
          <View style={styles.topBar}>
            <Ionicons name="earth" size={40} color="#FFF" style={styles.logoIcon} />
            <View style={styles.searchContainer}>
              <Text style={styles.searchPlaceholder}>Search here...</Text>
              <Ionicons name="search" size={20} color="#999" />
            </View>
          </View>

          {/* Perfil do Utilizador */}
          <View style={styles.profileSection}>
            <View style={styles.profileInfo}>
              <Image 
                source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }} 
                style={styles.profilePic} 
              />
              <View>
                <Text style={styles.welcomeText}>Welcome!</Text>
                <Text style={styles.userName}>Donna Stroupe</Text>
              </View>
            </View>
            
            <TouchableOpacity style={styles.bellIcon}>
              <Ionicons name="notifications-outline" size={24} color="#FFF" />
              {/* Pontinho amarelo de notificação */}
              <View style={styles.notificationDot} />
            </TouchableOpacity>
          </View>
        </View>

        {/* === CONTEÚDO PRINCIPAL (BRANCO) === */}
        <View style={styles.mainContent}>
          
          {/* Categorias */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Category</Text>
            <MaterialIcons name="sort" size={24} color="#333" />
          </View>

          {/* Scroll Horizontal para Categorias */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesScroll}>
            {categorias.map((cat, index) => (
              <TouchableOpacity 
                key={index} 
                style={[styles.categoryChip, index === 0 && styles.categoryChipActive]}
              >
                <Text style={[styles.categoryText, index === 0 && styles.categoryTextActive]}>
                  {cat}
                </Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity style={styles.categoryChip}>
              <Text style={styles.categoryTextSeeAll}>See all</Text>
            </TouchableOpacity>
          </ScrollView>

          {/* Destinos Populares */}
          <Text style={styles.sectionTitleMargin}>Popular Destination</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
            {destinosPopulares.map((dest) => (
              <Image key={dest.id} source={{ uri: dest.imagem }} style={styles.popularCard} />
            ))}
          </ScrollView>

          {/* Recomendados */}
          <Text style={styles.sectionTitleMargin}>Recommended</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
            {recomendados.map((rec) => (
              <Image key={rec.id} source={{ uri: rec.imagem }} style={styles.recommendedCard} />
            ))}
          </ScrollView>

          {/* Espaçamento extra no fundo para a barra não cobrir o conteúdo */}
          <View style={{ height: 100 }} />
        </View>
      </ScrollView>

      {/* === BARRA DE NAVEGAÇÃO ROXA (Fundo da tela) === */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => router.back()}>
          <Ionicons name="home" size={28} color="#FFD700" />
          <Text style={[styles.navText, { color: '#FFF' }]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="compass-outline" size={28} color="#AFA5D9" />
          <Text style={styles.navText}>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="search-outline" size={28} color="#AFA5D9" />
          <Text style={styles.navText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person-outline" size={28} color="#AFA5D9" />
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
  headerBackground: {
    backgroundColor: '#5C4DB1', 
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 30,
    borderBottomLeftRadius: 30, 
    borderBottomRightRadius: 30,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  logoIcon: {
    marginRight: 15,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFF',
    height: 50,
    borderRadius: 25,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchPlaceholder: {
    color: '#999',
    fontSize: 16,
  },
  profileSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePic: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
    borderWidth: 2,
    borderColor: '#FFF',
  },
  welcomeText: {
    color: '#D1CBEB',
    fontSize: 16,
  },
  userName: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
  bellIcon: {
    backgroundColor: '#7364C4',
    padding: 10,
    borderRadius: 20,
    position: 'relative',
  },
  notificationDot: {
    position: 'absolute',
    top: 10,
    right: 12,
    width: 8,
    height: 8,
    backgroundColor: '#FFD700', 
    borderRadius: 4,
  },
  mainContent: {
    paddingTop: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  sectionTitleMargin: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    paddingHorizontal: 20,
    marginTop: 25,
    marginBottom: 15,
  },
  categoriesScroll: {
    paddingLeft: 20,
    paddingRight: 10,
  },
  categoryChip: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#F0F0F0',
    borderRadius: 20,
    marginRight: 10,
  },
  categoryChipActive: {
    backgroundColor: '#5C4DB1',
  },
  categoryText: {
    color: '#666',
    fontWeight: '600',
  },
  categoryTextActive: {
    color: '#FFF',
  },
  categoryTextSeeAll: {
    color: '#5C4DB1',
    fontWeight: 'bold',
  },
  horizontalScroll: {
    paddingLeft: 20,
  },
  popularCard: {
    width: 140,
    height: 180,
    borderRadius: 20,
    marginRight: 15,
  },
  recommendedCard: {
    width: 220,
    height: 120,
    borderRadius: 20,
    marginRight: 15,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#5C4DB1', 
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    paddingBottom: 25,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    marginTop: 4,
    color: '#AFA5D9',
  },
});