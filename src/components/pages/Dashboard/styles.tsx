import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: '#01080E',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#D7F9FF',
  },
  input: {
    width: '90%',
    height: 60,
    backgroundColor: '#1D3056',
    color: '#D7F9FF',
    borderRadius: 4,
    paddingHorizontal: 8,
    textAlign: 'center',
    fontSize: 20,
  },
  button: {
    width: '90%',
    height: 40,
    backgroundColor: '#2AFDBE',
    borderRadius: 4,
    marginVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e1e1e',
  },
  signOut: {
    position: 'absolute',
    backgroundColor: '#1472E5',
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
    paddingHorizontal: 8,
    borderRadius: 50,
  },
});
