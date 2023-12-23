import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#01080E',
  },
  logo: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#D7F9FF',
    marginBottom: 10,
  },
  inputContainer: {
    width: '95%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 32,
    paddingHorizontal: 14,
  },
  input: {
    width: '95%',
    height: 40,
    backgroundColor: '#1D3056',
    color: '#ffffff',
    marginBottom: 12,
    borderRadius: 4,
    paddingHorizontal: 8,
  },
  button: {
    width: '95%',
    height: 40,
    backgroundColor: '#2AFDBE',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e1e1e',
  },
});
