import { StyleSheet } from 'react-native';
import COLORS from '../../constants/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    padding: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    color: COLORS.TITLE,
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'center',
  },
});

export default styles;
