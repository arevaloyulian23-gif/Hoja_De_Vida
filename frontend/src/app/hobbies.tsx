
import {
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

import TarjetaHobby from '../components/TrajetaHobby';

export default function Hobbies() {
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
        Mis pasatiempos e intereses
      </Text>

      {/* Tarjetas de hobbies */}
      <TarjetaHobby
        titulo="Programación"
        descripcion="Me interesa aprender lenguajes de programación y desarrollar aplicaciones."
        detalle="Disfruto explorar tecnologías como JavaScript, Python y React Native, además de desarrollar proyectos personales."
        imagen={require('../../assets/images/programacion.jpg')}
      />

      <TarjetaHobby
        titulo="Videojuegos"
        descripcion="Me gusta jugar videojuegos y conocer sus mecánicas."
        detalle="Me interesa especialmente cómo se diseñan los videojuegos, sus personajes, sistemas de combate y mundos."
      />

      <TarjetaHobby
        titulo="Dibujo y arte digital"
        descripcion="Disfruto crear dibujos y explorar diferentes estilos artísticos."
        detalle="Me interesa el diseño de personajes, la ilustración y la creación de recursos visuales."
      />

      <TarjetaHobby
        titulo="Animación y diseño 3D"
        descripcion="Me interesa la creación de animaciones y escenarios digitales."
        detalle="Me gustaría profundizar en herramientas de animación 2D y 3D y en el desarrollo visual de videojuegos."
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
