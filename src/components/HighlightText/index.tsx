import { Container, HightlightTextType } from './styles';

type HighlightTextProps = {
  text: string;
  type?: HightlightTextType;
};

export function HighlightText({ text, type = 'PRIMARY' }: HighlightTextProps) {
  return <Container type={type}>{text}</Container>;
}
