/*
  Title: Monday Screen
  Author: Dimitar Velikov
  Version: 1.0
*/

// Imports
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

// Monday Screen Component
export default function MondayScreen() {
  const exercises = [
    { name: 'Bench Press', sets: 4, reps: 10 },
    { name: 'Shoulder Press', sets: 3, reps: 12 },
  ];

  return (
    <LinearGradient colors={['#22C55E', '#05226e']} style={styles.container}>
      <View style={styles.screenContent}>

        <View style={styles.topSection}>

          <View style={styles.headerCard}>
            <Text style={styles.title}>Monday Workout</Text>
          </View>

        </View>

        <View style={styles.middleSection}>

          <Text style={styles.workoutSubtitle}>Chest, Shoulder & Abs Day</Text>

          <View style={styles.exerciseTable}>

          </View>

        </View>

        <View style={styles.bottomSection}>

          <Pressable
            style={styles.addExerciseButton}
            onPress={() => router.push('/addExercise')}
          >
            <Text style={styles.addExerciseButtonText}>Add Exercise</Text>
          </Pressable>

          <Pressable onPress={() => router.back()} style={styles.backButton}>
            <Text style={styles.backButtonText}>Back</Text>
          </Pressable>

        </View>

      </View>
    </LinearGradient>
  );
}

// Styles for the Monday screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  screenContent: {
    flex: 1,
    marginTop: 20,
    marginBottom: 20,
    width: '99%',
  },

  topSection: {

  },

  middleSection: {

  },

  bottomSection: {
    marginTop: 'auto',
    alignItems: 'center',
  },

  headerCard: {
    backgroundColor: '#0F172A3D',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginTop: 20,
  },

  exerciseTable: {
    marginTop: 5,
    backgroundColor: '#0F172A3D',
    borderRadius: 12,
    padding: 12,
  },

  backButton: {
    backgroundColor: '#A7F3D0',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 14,
    marginBottom: 20,
    width: '30%',
  },

  backButtonText: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: '#05226e',
  },

  title: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    color: 'white',
  },

  rightSpacer: {
    width: 80,
  },

  addExerciseButton: {
    backgroundColor: '#38BDF8',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: '100%',
    marginBottom: 12,
  },

  addExerciseButtonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: '600',
  },

  workoutSubtitle: {
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 55,
  },
});