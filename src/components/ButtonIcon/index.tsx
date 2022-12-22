import { Container, Icon } from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacityProps } from 'react-native';

type ButtonIconProps = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
};

export function ButtonIcon({ icon, ...rest }: ButtonIconProps) {
  return (
    <Container {...rest}>
      <Icon name={icon} />
    </Container>
  );
}
