import { StyleSheet } from 'react-native';
import COLORS from '../../constants/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 400,
  },
  fullName: {
    fontSize: 23,
    fontWeight: 'bold',
    marginTop: 24,
    alignSelf: 'center',
    color: COLORS.PRIMARY,
  },
  username: {
    fontSize: 14,
    fontWeight: '400',
    marginTop: 0,
    alignSelf: 'center',
    color: COLORS.GRAY,
  },
  address: {
    width: '90%',
    fontSize: 15,
    fontWeight: '400',
    marginTop: 24,
    alignSelf: 'center',
    textAlign: 'center',
    color: COLORS.GRAY,
  },
});

export default styles;
