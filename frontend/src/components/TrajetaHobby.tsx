
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Modal,
  ScrollView,
  Image,
} from 'react-native';

import { useState } from 'react';

interface TarjetaHobbyProps {
  titulo: string;
  descripcion: string;
  detalle: string;
  imagen?: any;
}

export default function TarjetaHobby({
  titulo,
  descripcion,
  detalle,
  imagen,
}: TarjetaHobbyProps) {

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      {/* Tarjeta principal */}
      <Pressable
        style={styles.tarjeta}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.titulo}>{titulo}</Text>

        <Text style={styles.descripcion}>
          {descripcion}
        </Text>

        <Text style={styles.indicacion}>
          Saber más →
        </Text>
      </Pressable>

      {/* Ventana emergente */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.fondoModal}>
          <View style={styles.contenidoModal}>

            <ScrollView showsVerticalScrollIndicator={false}>

              <Text style={styles.tituloModal}>
                {titulo}
              </Text>

              {/* Espacio para imagen */}
              <View style={styles.contenedorImagen}>
                {imagen ? (
                  <Image
                    source={imagen}
                    style={styles.imagen}
                    resizeMode="cover"
                  />
                ) : (
                  <Text style={styles.textoImagen}>
                    Espacio para tu imagen
                  </Text>
                )}
              </View>

              <Text style={styles.detalle}>
                {detalle}
              </Text>

            </ScrollView>

            <Pressable
              style={styles.botonCerrar}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.textoCerrar}>
                Cerrar
              </Text>
            </Pressable>

          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  tarjeta: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 14,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#DCE6DA',
  },

  titulo: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#244C3A',
  },

  descripcion: {
    fontSize: 14,
    color: '#536458',
    marginTop: 8,
    lineHeight: 21,
  },

  indicacion: {
    fontSize: 12,
    color: '#477A58',
    marginTop: 12,
    fontWeight: 'bold',
  },

  fondoModal: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.45)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  contenidoModal: {
    backgroundColor: '#F2F5EF',
    width: '100%',
    maxHeight: '80%',
    padding: 20,
    borderRadius: 18,
  },

  tituloModal: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#244C3A',
    marginBottom: 15,
  },

  contenedorImagen: {
    width: '100%',
    height: 190,
    backgroundColor: '#E5EFE3',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginBottom: 18,
  },

  imagen: {
    width: '100%',
    height: '100%',
  },

  textoImagen: {
    color: '#477A58',
    fontSize: 14,
    fontWeight: '600',
  },

  detalle: {
    fontSize: 14,
    color: '#536458',
    lineHeight: 22,
  },

  botonCerrar: {
    backgroundColor: '#477A58',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 15,
  },

  textoCerrar: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
