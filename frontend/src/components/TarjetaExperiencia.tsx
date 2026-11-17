
import { View, Text, StyleSheet } from 'react-native';

interface TarjetaExperienciaProps {
  cargo: string;
  empresa: string;
  periodo: string;
  descripcion: string;
  tipo: string;
}

export default function TarjetaExperiencia({
  cargo,
  empresa,
  periodo,
  descripcion,
  tipo
}: TarjetaExperienciaProps) {
  return (
    <View style={styles.tarjeta}>

      <View style={styles.encabezado}>
        <Text style={styles.tipo}>
          {tipo}
        </Text>
      </View>

      <Text style={styles.cargo}>
        {cargo}
      </Text>

      <Text style={styles.empresa}>
        {empresa}
      </Text>

      <Text style={styles.periodo}>
        {periodo}
      </Text>

      <View style={styles.separador} />

      <Text style={styles.descripcion}>
        {descripcion}
      </Text>

    </View>
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

  encabezado: {
    flexDirection: 'row',
    marginBottom: 10,
  },

  tipo: {
    backgroundColor: '#E5EFE3',
    color: '#477A58',
    fontSize: 11,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    overflow: 'hidden',
  },

  cargo: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#244C3A',
  },

  empresa: {
    fontSize: 14,
    color: '#477A58',
    fontWeight: '600',
    marginTop: 7,
  },

  periodo: {
    fontSize: 12,
    color: '#89958A',
    marginTop: 5,
  },

  separador: {
    height: 1,
    backgroundColor: '#DCE6DA',
    marginVertical: 12,
  },

  descripcion: {
    fontSize: 14,
    color: '#536458',
    lineHeight: 21,
  },
});
