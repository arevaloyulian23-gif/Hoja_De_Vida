
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import TarjetaEstudio from '../components/TarjetaEstudio';

export default function Estudios() {
  return (
    <ScrollView style={styles.contenedor}>
      <Text style={styles.titulo}>Mi formación académica</Text>

      <TarjetaEstudio
        titulo="Análisis y Desarrollo de Software"
        institucion="SENA"
        periodo="2025 - Actualidad"
        enCurso={true}
      />

      <TarjetaEstudio
        titulo="Educación Media"
        institucion="Institución educativa"
        periodo="2023 - 2024"
        enCurso={false}
      />

      <TarjetaEstudio
        titulo="Educación Básica"
        institucion="Institución educativa"
        periodo="2014 - 2022"
        enCurso={false}
      />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    padding: 20,
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#111827',
  },
});
