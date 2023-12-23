import { StyleSheet, Dimensions } from 'react-native';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: WIDTH - 30,
    height: HEIGHT / 2,
    backgroundColor: '#1D3056',
    borderColor: '#8a8a8a',
    borderRadius: 4,
  },
  option: {
    alignItems: 'flex-start',
    borderBottomWidth: 0.8,
    borderBottomColor: '#8a8a8a',
  },
  item: {
    margin: 18,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
