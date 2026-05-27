/*
  Title: Add Exercise Screen
  Author: Dimitar Velikov
  Version: 1.0
*/

// Imports
import { StyleSheet, Text, View } from 'react-native';

// Monday Screen Component
export default function MondayScreen() {
    const exercises = [
        { name: 'Bench Press', sets: 4, reps: 10 },
        { name: 'Shoulder Press', sets: 3, reps: 12 },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.screenContent}>
                <View>
                    <View style={styles.addExerciseCard}>
                        <Text style={styles.title}>Exercise Name</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

// Styles for the Monday screen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#0f172afb',
    },

    screenContent: {
        flex: 1,
        marginTop: 20,
        marginBottom: 20,
        width: '45%',
        justifyContent: 'center',
    },

    title: {
        fontSize: 32,
        fontWeight: '600',
        textAlign: 'center',
        color: 'white',
    },

    addExerciseCard: {
        backgroundColor: '#6580bf9f',
        padding: 12,
        borderRadius: 12,
        height: 350,
        width: '100%',
    },
});