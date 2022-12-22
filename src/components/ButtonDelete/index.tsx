import { Container, Icon } from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacityProps } from 'react-native';

type ButtonDeleteProps = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
};

export function ButtonDelete({ icon, ...rest }: ButtonDeleteProps) {
  return (
    <Container {...rest}>
      <Icon name={icon} />
    </Container>
  );
}
