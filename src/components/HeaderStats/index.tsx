import { HighlightText } from '@components/HighlightText';
import { Container, Content, Pill } from './styles';

type HeaderStatsProps = {
  numberOfCreated: number;
  numberOfCompleted: number;
};

export function HeaderStats({
  numberOfCreated,
  numberOfCompleted,
}: HeaderStatsProps) {
  return (
    <Container>
      <Content>
        <HighlightText type="PRIMARY" text="Criadas"></HighlightText>
        <Pill style={{ marginLeft: 8 }}>{numberOfCreated}</Pill>
      </Content>
      <Content>
        <HighlightText type="SECONDARY" text="Conluídas"></HighlightText>
        <Pill style={{ marginLeft: 8 }}>{numberOfCompleted}</Pill>
      </Content>
    </Container>
  );
}
