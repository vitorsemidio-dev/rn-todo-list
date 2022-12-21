import { TouchableOpacity } from 'react-native';
import { Text } from './styles';

export function Button() {
  return (
    <TouchableOpacity>
      <Text>Clique-me</Text>
    </TouchableOpacity>
  );
}
