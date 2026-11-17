
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Modal,
  Pressable,
} from 'react-native';

import MiBoton from '../components/MiBoton';
import { useRouter } from 'expo-router';
import { useState } from 'react';

export default function Inicio() {
  const router = useRouter();

  // Estados de la ventana de contacto
  const [contactoVisible, setContactoVisible] = useState(false);
  const [tipoContacto, setTipoContacto] = useState('');

  // Navegación
  function irA(pantalla: string) {
    router.push(pantalla as any);
  }

  // Mostrar información de contacto
  function mostrarContacto(tipo: string) {
    setTipoContacto(tipo);
    setContactoVisible(true);
  }

  return (
    <ScrollView style={styles.contenedor}>

      {/* Fotografía */}
      <View style={styles.fotoContenedor}>
        <Image
          source={require('../../assets/images/profile.jpg')}
          style={styles.foto}
        />
      </View>

      {/* Presentación */}
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

      {/* Contacto */}
      <View style={styles.seccion}>
        <Text style={styles.tituloSeccion}>
          Información de contacto
        </Text>

        <MiBoton
          texto="Correo electrónico"
          icono="mail-outline"
          onPress={() => mostrarContacto('correo')}
        />

        <MiBoton
          texto="Teléfono"
          icono="call-outline"
          onPress={() => mostrarContacto('telefono')}
        />

        <MiBoton
          texto="GitHub"
          icono="logo-github"
          onPress={() => mostrarContacto('github')}
        />
      </View>

      {/* Navegación */}
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

      {/* Ventana emergente */}
      <Modal
        visible={contactoVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setContactoVisible(false)}
      >
        <View style={styles.fondoModal}>
          <View style={styles.ventanaModal}>

            <Text style={styles.tituloModal}>
              Información de contacto
            </Text>

            {tipoContacto === 'correo' && (
              <>
                <Text style={styles.subtituloModal}>
                  Correo electrónico
                </Text>
                <Text style={styles.datoModal}>
                  arevalo.yulian23@gmail.com
                </Text>
              </>
            )}

            {tipoContacto === 'telefono' && (
              <>
                <Text style={styles.subtituloModal}>
                  Teléfono
                </Text>
                <Text style={styles.datoModal}>
                  3214674002
                </Text>
              </>
            )}

            {tipoContacto === 'github' && (
              <>
                <Text style={styles.subtituloModal}>
                  GitHub
                </Text>
                <Text style={styles.datoModal}>
                  github.com/arevaloyulian23-gif
                </Text>
              </>
            )}

            <Pressable
              style={styles.botonCerrar}
              onPress={() => setContactoVisible(false)}
            >
              <Text style={styles.textoCerrar}>
                Cerrar
              </Text>
            </Pressable>

          </View>
        </View>
      </Modal>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fotoContenedor: {
    width: 130,
    height: 130,
    borderRadius: 65,
    overflow: 'hidden',
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 20,
    borderWidth: 3,
    borderColor: '#A8BFA5',
  },

  foto: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

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

  // Estilos de la ventana
  fondoModal: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  ventanaModal: {
    width: '100%',
    maxWidth: 380,
    backgroundColor: '#FFFFFF',
    padding: 24,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#DCE6DA',
  },

  tituloModal: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#244C3A',
    marginBottom: 20,
  },

  subtituloModal: {
    fontSize: 14,
    fontWeight: '600',
    color: '#477A58',
    marginBottom: 8,
  },

  datoModal: {
    fontSize: 15,
    color: '#536458',
    marginBottom: 20,
  },

  botonCerrar: {
    backgroundColor: '#477A58',
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
  },

  textoCerrar: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
