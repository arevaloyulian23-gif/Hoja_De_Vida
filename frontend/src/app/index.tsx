
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Alert,
} from 'react-native';

import MiBoton from '../components/MiBoton';

export default function Inicio() {
  return (
    <ScrollView style={styles.contenedor}>
      
      <View style={styles.presentacion}>
        <Text style={styles.nombre}>
          Tu nombre completo
        </Text>

        <Text style={styles.titulacion}>
          Aprendiz de Análisis y Desarrollo de Software
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
            Alert.alert('Correo electrónico', 'tu-correo@ejemplo.com')
          }
        />

        <MiBoton
          texto="Teléfono"
          icono="call-outline"
          onPress={() =>
            Alert.alert('Teléfono', 'Tu número de contacto')
          }
        />

        <MiBoton
          texto="LinkedIn"
          icono="logo-linkedin"
          onPress={() =>
            Alert.alert('LinkedIn', 'Tu perfil de LinkedIn')
          }
        />

        <MiBoton
          texto="Facebook"
          icono="logo-facebook"
          onPress={() =>
            Alert.alert('Facebook', 'Tu perfil de Facebook')
          }
        />

        <MiBoton
          texto="GitHub"
          icono="logo-github"
          onPress={() =>
            Alert.alert('GitHub', 'Tu repositorio de proyectos')
          }
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
