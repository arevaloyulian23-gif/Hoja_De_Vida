
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import TarjetaEstudio from '../components/TarjetaEstudio';

export default function Estudios() {
  const router = useRouter();

  return (
    <ScrollView
      style={styles.contenedor}
      contentContainerStyle={styles.contenido}
    >
      {/* Botón para regresar al inicio */}
      <Pressable
        style={styles.botonRegreso}
        onPress={() => router.replace('/')}
      >
        <Ionicons
          name="arrow-back"
          size={18}
          color="#477A58"
        />
        <Text style={styles.textoRegreso}>Inicio</Text>
      </Pressable>

      {/* Encabezado */}
      <View style={styles.encabezado}>
        <Text style={styles.etiqueta}>MI FORMACIÓN</Text>
        <Text style={styles.titulo}>
          Estudios académicos
        </Text>
        <Text style={styles.descripcion}>
          Mi recorrido educativo y formación profesional.
        </Text>
      </View>

      
        {/* Tarjetas de estudios */}
        <View style={styles.lista}>
          <TarjetaEstudio
            titulo="Análisis y Desarrollo de Software"
            institucion="SENA"
            periodo="2025 - Actualidad"
            descripcion="Formación en programación, bases de datos, desarrollo de aplicaciones, análisis de requerimientos y construcción de soluciones de software."
            enCurso={true}
          />
        
          <TarjetaEstudio
            titulo="Educación Media"
            institucion="Institución educativa"
            periodo="2023 - 2024"
            descripcion="Formación académica en diferentes áreas del conocimiento, fortaleciendo habilidades de comunicación y pensamiento crítico."
            enCurso={false}
          />
        
          <TarjetaEstudio
            titulo="Educación Básica"
            institucion="Institución educativa"
            periodo="2014 - 2022"
            descripcion="Desarrollo de conocimientos fundamentales y habilidades en las distintas áreas de formación académica."
            enCurso={false}
          />
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#F2F5EF',
  },

  contenido: {
    padding: 20,
    paddingBottom: 35,
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

  encabezado: {
    marginBottom: 20,
  },

  etiqueta: {
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 2,
    color: '#89958A',
    marginBottom: 8,
  },

  titulo: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#244C3A',
  },

  descripcion: {
    fontSize: 14,
    color: '#536458',
    lineHeight: 21,
    marginTop: 8,
  },

  lista: {
    gap: 8,
  },
});
