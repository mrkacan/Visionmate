import { StyleSheet } from 'react-native';
import COLORS from '../../constants/theme';

const styles = StyleSheet.create({
  itemText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.PRIMARY,
  },
  itemSmallText: {
    fontSize: 15,
    fontWeight: '400',
    color: '#FFFFFF',
  },
  itemXSmallText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#FFFFFF',
  },
  generalItemWrapper: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
    borderWidth: 4,
    borderColor: '#00a5e0',
    overflow: 'hidden',
  },
  itemWrapper: {
    flex: 1,
    height: 250,
    backgroundColor: '#696969',
    justifyContent: 'flex-end',
  },
  textsWrapper: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(0,0,0,0.33)',
    padding: 10,
  },
});

export default styles;
