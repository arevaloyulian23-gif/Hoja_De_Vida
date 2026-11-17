
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Alert,
  Platform,
} from 'react-native';

import MiBoton from '../components/MiBoton';
import { useRouter } from 'expo-router';

function mostrarInformacion(titulo: string, mensaje: string) {
  if (Platform.OS === 'web') {
    window.alert(`${titulo}\n${mensaje}`);
  } else {
    Alert.alert(titulo, mensaje);
  }
}


export default function Inicio() {
  const router = useRouter();

  function irA(pantalla: string) {
    router.push(pantalla as any);
  }

  return (
    <ScrollView style={styles.contenedor}>

      <View style={styles.presentacion}>
        <Text style={styles.nombre}>
          Yulian Camilo Arevalo Castro
        </Text>

        <Text style={styles.titulacion}>
          Técnico en programación de software
        </Text>

        <Text style={styles.perfil}>
          Soy una persona interesada en el desarrollo de
          software, la tecnología y la creación de soluciones
          digitales. Me gusta aprender nuevas herramientas
          y desarrollar proyectos que aporten valor.
        </Text>
      </View>

      <View style={styles.seccion}>
        <Text style={styles.tituloSeccion}>
          Información de contacto
        </Text>

        <MiBoton
          texto="Correo electrónico"
          icono="mail-outline"
          onPress={() =>
            mostrarInformacion(
              'Correo electrónico',
              'arevalo.yulian23@gmail.com'
            )
          }
        />

        <MiBoton
          texto="Teléfono"
          icono="call-outline"
          onPress={() =>
            mostrarInformacion('Teléfono', '3214674002')
          }
        />

        <MiBoton
          texto="GitHub"
          icono="logo-github"
          onPress={() =>
            mostrarInformacion(
              'GitHub',
              'https://github.com/arevaloyulian23-gif?tab=repositories'
            )
          }
        />
      </View>

      <View style={styles.seccion}>
        <Text style={styles.tituloSeccion}>
          Explorar mi hoja de vida
        </Text>

        <MiBoton
          texto="Mis estudios"
          icono="school-outline"
          onPress={() => irA('/estudios')}
        />

        <MiBoton
          texto="Mi experiencia"
          icono="briefcase-outline"
          onPress={() => irA('/experiencia')}
        />

        <MiBoton
          texto="Mis hobbies"
          icono="game-controller-outline"
          onPress={() => irA('/hobbies')}
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

  presentacion: {
    padding: 24,
    backgroundColor: '#FFFFFF',
    margin: 16,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#DCE6DA',
  },

  nombre: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#244C3A',
    marginBottom: 8,
  },

  titulacion: {
    fontSize: 16,
    color: '#477A58',
    fontWeight: '600',
    marginBottom: 16,
  },

  perfil: {
    fontSize: 14,
    color: '#536458',
    lineHeight: 22,
  },

  seccion: {
    marginHorizontal: 16,
    marginBottom: 24,
  },

  tituloSeccion: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#244C3A',
    marginBottom: 12,
  },
});
