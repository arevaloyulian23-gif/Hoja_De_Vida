
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import TarjetaExperiencia from '../components/TarjetaExperiencia';

export default function Experiencia() {
  return (
    <ScrollView style={styles.contenedor}>
      <Text style={styles.titulo}>
        Mi experiencia
      </Text>

      <TarjetaExperiencia
        cargo="Desarrollador de software"
        empresa="Proyecto personal"
        periodo="2026 - Actualidad"
        descripcion="Desarrollo de aplicaciones y aprendizaje de tecnologías de programación."
      />

      <TarjetaExperiencia
        cargo="Aprendiz de desarrollo de software"
        empresa="SENA"
        periodo="2025 - Actualidad"
        descripcion="Formación en programación, bases de datos, desarrollo de software y trabajo en equipo."
      />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#F2F5EF',
    padding: 20,
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#244C3A',
  },
});
