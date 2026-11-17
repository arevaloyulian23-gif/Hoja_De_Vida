
import { View, Text, StyleSheet } from 'react-native';

interface TarjetaEstudioProps {
  titulo: string;
  institucion: string;
  periodo: string;
  enCurso: boolean;
}

export default function TarjetaEstudio({
  titulo,
  institucion,
  periodo,
  enCurso
}: TarjetaEstudioProps) {

  return (
    <View style={[
      styles.tarjeta,
      enCurso && styles.tarjetaEnCurso
    ]}>

      <View style={styles.encabezado}>
        <Text style={styles.titulo}>
          {titulo}
        </Text>

        {enCurso && (
          <Text style={styles.etiqueta}>
            En Curso
          </Text>
        )}
      </View>

      <Text style={styles.institucion}>
        {institucion}
      </Text>

      <Text style={styles.periodo}>
        {periodo}
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

  tarjetaEnCurso: {
    backgroundColor: '#E5EFE3',
  },

  encabezado: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,
  },

  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
    color: '#244C3A',
  },

  etiqueta: {
    backgroundColor: '#477A58',
    color: '#FFFFFF',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    fontSize: 12,
    overflow: 'hidden',
  },

  institucion: {
    fontSize: 14,
    marginTop: 10,
    color: '#536458',
  },

  periodo: {
    fontSize: 12,
    marginTop: 5,
    color: '#89958A',
  },
});
