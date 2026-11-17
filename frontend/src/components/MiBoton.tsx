
import { Pressable, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface MiBotonProps {
  texto: string;
  icono: React.ComponentProps<typeof Ionicons>['name'];
  onPress: () => void;
}

export default function MiBoton({
  texto,
  icono,
  onPress
}: MiBotonProps) {
  return (
    <Pressable
      style={styles.boton}
      onPress={onPress}
    >
      <Ionicons name={icono} size={20} color="#FFFFFF" />

      <Text style={styles.texto}>
        {texto}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  
    boton: {
  backgroundColor: '#477A58',
  padding: 12,
  borderRadius: 10,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 8,
  marginVertical: 5,
},

texto: {
  color: '#FFFFFF',
  fontSize: 14,
  fontWeight: 'bold',
},
});
