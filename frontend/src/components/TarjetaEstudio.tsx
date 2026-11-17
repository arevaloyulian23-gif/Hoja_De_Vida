
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
    borderColor: '#E5E7EB',
  },

  tarjetaEnCurso: {
    backgroundColor: '#F3E8FF',
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
  },

  etiqueta: {
    backgroundColor: '#7E22CE',
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
    color: '#374151',
  },

  periodo: {
    fontSize: 12,
    marginTop: 5,
    color: '#6B7280',
  },
});
