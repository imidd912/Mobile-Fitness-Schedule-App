/*
  Title: Home Screen
  Author: Dimitar Velikov
  Version: 1.0
*/

// Imports
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

// Home Screen Component
export default function HomeScreen() {
  
  // Days of the week array
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const [selectedDay, setSelectedDay] = useState('');

  // Stores the page route for each day
  const dayRoutes = {
    Monday: '/monday',
    Tuesday: '/tuesday',
    Wednesday: '/wednesday',
    Thursday: '/thursday',
    Friday: '/friday',
    Saturday: '/saturday',
    Sunday: '/sunday',
  };

// Returns the UI for the home screen
  return (
    <LinearGradient colors={['#22C55E', '#05226e']}
      style={styles.container}>
      
      <Text style={styles.title}>Gympler</Text>
      <Text style={styles.subtitle}>Choose a workout day</Text>
      
      <View style={styles.daysContainer}> 
        {days.map((day) => (
          <Pressable key={day} style={styles.dayCard} onPress={() => {
            if (day === 'Monday') {
              router.push('/monday'); // Goes to the Monday page
            }

            else {
              setSelectedDay(day); 
            }
          }}>
            <Text style={styles.dayText}>{day}</Text>
          </Pressable>
        ))}
      </View>
    </LinearGradient>
  )
};

// Styles for the home screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 32,
    fontWeight: '600',
    textAlign: 'center',
    color: 'white',
  },

  subtitle: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 5,
    color: 'white',
  },

  daysContainer: {
    marginTop: 20,
    width: '99%',
    gap: 12,
  },

  dayCard: {
    backgroundColor: '#0F172A3D',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 12,
    alignItems: 'center',
  },

  dayText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
});

