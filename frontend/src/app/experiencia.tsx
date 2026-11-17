
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

import TarjetaExperiencia from '../components/TarjetaExperiencia';

export default function Experiencia() {
  const router = useRouter();

  return (
    <ScrollView style={styles.contenedor}>

      {/* Botón para regresar a Inicio */}
      <Pressable
        style={styles.botonRegreso}
        onPress={() => router.replace('/')}
      >
        <Ionicons name="arrow-back" size={18} color="#477A58" />
        <Text style={styles.textoRegreso}>Inicio</Text>
      </Pressable>

      {/* Título */}
      <Text style={styles.titulo}>
        Mi experiencia
      </Text>

      {/* Tarjetas de experiencia */}
      <TarjetaExperiencia
        cargo="Desarrollador de software"
        empresa="Proyecto personal"
        periodo="2026 - Actualidad"
        tipo="Proyecto personal"
        descripcion="Desarrollo de aplicaciones y aprendizaje de tecnologías de programación."
      />

      <TarjetaExperiencia
        cargo="Aprendiz de desarrollo de software"
        empresa="SENA"
        periodo="2025 - Actualidad"
        tipo="Formación profesional"
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

  botonRegreso: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    backgroundColor: '#E5EFE3',
    marginBottom: 25,
    gap: 6,
  },

  textoRegreso: {
    color: '#477A58',
    fontSize: 14,
    fontWeight: '600',
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#244C3A',
  },
});
