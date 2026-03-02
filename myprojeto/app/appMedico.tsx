import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function AppMedico() {
  const router = useRouter();

  // Dados simulados baseados no PDF
  const categories = [
    { id: '1', name: 'Consultation', icon: 'stethoscope' },
    { id: '2', name: 'Dentist', icon: 'tooth' },
    { id: '3', name: 'Cardiologist', icon: 'heartbeat' },
    { id: '4', name: 'Hospital', icon: 'hospital' },
    { id: '5', name: 'Emergency', icon: 'ambulance' },
    { id: '6', name: 'Laboratory', icon: 'microscope' },
  ];

  const topDoctors = [
    {
      id: '1',
      name: 'dr. Olivia Wilson',
      specialty: 'Consultant - Physiotherapy',
      rating: '4.9',
      reviews: '37 Reviews',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      id: '2',
      name: 'dr. Jonathan Patterson',
      specialty: 'Consultant - Internal Medicine',
      rating: '4.9',
      reviews: '37 Reviews',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* === Cabeçalho === */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Welcome</Text>
            <Text style={styles.userName}>Dani Martinez</Text>
          </View>
          <Image 
            source={{ uri: 'https://randomuser.me/api/portraits/women/68.jpg' }} 
            style={styles.profilePic} 
          />
        </View>

        {/* === Barra de Pesquisa === */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#999" style={styles.searchIcon} />
          <TextInput 
            style={styles.searchInput} 
            placeholder="Search doctor" 
            placeholderTextColor="#999"
          />
        </View>

        {/* === Secção de Categorias === */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>Show All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.categoriesGrid}>
          {categories.map((cat) => (
            <TouchableOpacity key={cat.id} style={styles.categoryCard}>
              <View style={styles.iconContainer}>
                <FontAwesome5 name={cat.icon} size={28} color="#4A90E2" />
              </View>
              <Text style={styles.categoryText}>{cat.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* === Secção Top Doctors === */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Top doctors</Text>
        </View>

        {topDoctors.map((doc) => (
          <TouchableOpacity key={doc.id} style={styles.doctorCard}>
            <Image source={{ uri: doc.image }} style={styles.doctorImage} />
            <View style={styles.doctorInfo}>
              <Text style={styles.doctorName}>{doc.name}</Text>
              <Text style={styles.doctorSpecialty}>{doc.specialty}</Text>
              <View style={styles.ratingRow}>
                <Ionicons name="star" size={16} color="#FFD700" />
                <Text style={styles.ratingText}>{doc.rating}</Text>
                <Text style={styles.reviewsText}>({doc.reviews})</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
        
        {/* Espaço extra no final para não sobrepor com a barra de baixo */}
        <View style={{ height: 100 }} />
      </ScrollView>

      {/* === Menu Fixo na Base === */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => router.back()}>
          <Ionicons name="home" size={24} color="#4A90E2" />
          <Text style={[styles.navText, { color: '#4A90E2' }]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="medkit-outline" size={24} color="#999" />
          <Text style={styles.navText}>Doctors</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="calendar-outline" size={24} color="#999" />
          <Text style={styles.navText}>Appointment</Text>
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
    backgroundColor: '#F8F9FB',
  },
  scrollContent: {
    padding: 20,
    paddingTop: 50, 
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },
  greeting: {
    fontSize: 16,
    color: '#666',
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 4,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 15,
    paddingHorizontal: 15,
    height: 50,
    marginBottom: 30,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  seeAllText: {
    fontSize: 14,
    color: '#4A90E2',
    fontWeight: '600',
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  categoryCard: {
    width: '30%',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#FFF',
    paddingVertical: 15,
    borderRadius: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
  },
  iconContainer: {
    width: 50,
    height: 50,
    backgroundColor: '#F0F5FA',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  categoryText: {
    fontSize: 12,
    color: '#555',
    fontWeight: '500',
    textAlign: 'center',
  },
  doctorCard: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
  },
  doctorImage: {
    width: 70,
    height: 70,
    borderRadius: 15,
    marginRight: 15,
  },
  doctorInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  doctorName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  doctorSpecialty: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 5,
  },
  reviewsText: {
    fontSize: 12,
    color: '#999',
    marginLeft: 5,
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