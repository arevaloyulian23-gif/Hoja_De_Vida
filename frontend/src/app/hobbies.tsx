
import { Text, StyleSheet, ScrollView } from 'react-native';

import TarjetaHobby from '../components/TrajetaHobby';

export default function Hobbies() {
  return (
    <ScrollView style={styles.contenedor}>
      <Text style={styles.titulo}>
        Mis pasatiempos e intereses
      </Text>

      <TarjetaHobby
        titulo="Programación"
        descripcion="Me interesa aprender lenguajes de programación y desarrollar aplicaciones."
        detalle="Disfruto explorar tecnologías como JavaScript, Python y React Native, además de desarrollar proyectos personales."
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

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#244C3A',
  },
});
