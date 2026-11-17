
import { View, Text, StyleSheet } from 'react-native';

interface TarjetaExperienciaProps {
  cargo: string;
  empresa: string;
  periodo: string;
  descripcion: string;
}

export default function TarjetaExperiencia({
  cargo,
  empresa,
  periodo,
  descripcion
}: TarjetaExperienciaProps) {
  return (
    <View style={styles.tarjeta}>
      <Text style={styles.cargo}>{cargo}</Text>

      <Text style={styles.empresa}>{empresa}</Text>

      <Text style={styles.periodo}>{periodo}</Text>

      <Text style={styles.descripcion}>
        {descripcion}
      </Text>
    </View>
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

  cargo: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#244C3A',
  },

  empresa: {
    fontSize: 15,
    color: '#477A58',
    marginTop: 6,
  },

  periodo: {
    fontSize: 12,
    color: '#89958A',
    marginTop: 5,
  },

  descripcion: {
    fontSize: 14,
    color: '#536458',
    lineHeight: 21,
    marginTop: 10,
  },
});
