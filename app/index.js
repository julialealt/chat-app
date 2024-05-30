import { ActivityIndicator } from 'react-native';
import { Container } from './styles'

export default function StartPage() {
  return (
    <Container>
      <ActivityIndicator size='large' color='gray'/>
    </Container>
  );
}
