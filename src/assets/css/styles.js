import { StyleSheet } from 'react-native';

export default StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    flexDirection: 'column'
},
input: {
    flex: 1,
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fff',
},
infoContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 300,
    bottom: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    backgroundColor: '#000000',
},
itemStyle: {
    marginBottom: 20,
},
iconStyle: {
    color: '#fff',
    fontSize: 30,
    marginRight: 15
},
buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#E15A46',
    padding: 14,
    marginBottom: 20,
    borderRadius: 3,
},
buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#fff",
},
logoContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 500,
    bottom: 180,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
},
textStyle: {
    fontWeight: 'bold',
    fontSize: 18,
    padding: 10,
    color: '#fff'
},
})