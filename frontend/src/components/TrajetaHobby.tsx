
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Alert,
  Platform,
} from 'react-native';

interface TarjetaHobbyProps {
  titulo: string;
  descripcion: string;
  detalle: string;
}

export default function TarjetaHobby({
  titulo,
  descripcion,
  detalle,
}: TarjetaHobbyProps) {

  function mostrarDetalle() {
    if (Platform.OS === 'web') {
      window.alert(`${titulo}\n\n${detalle}`);
    } else {
      Alert.alert(titulo, detalle);
    }
  }

  return (
    <Pressable
      style={styles.tarjeta}
      onPress={mostrarDetalle}
    >
      <Text style={styles.titulo}>{titulo}</Text>

      <Text style={styles.descripcion}>
        {descripcion}
      </Text>

      <Text style={styles.indicacion}>
        Pulsa para conocer más
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  tarjeta: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
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
    fontWeight: '600',
  },
});
