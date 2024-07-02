const { StyleSheet,Dimensions } = require("react-native");
const {width} = Dimensions.get('screen');
const Style = StyleSheet.create({
    backgroundColor:{
      backgroundColor: '#FFFFFF',
      flex: 1,
    },
    location:{
      color:'#A9A9A9',
    },
    location2:{
      color: '#000000', 
      fontSize: 20, 
      fontWeight: 'bold'
    },
    viewInput:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
    },
    searchIcon:{
      color: '#000'
    },
    tuneIcon:{
      color:'#FFFFFF',
    },
    optionTitle:{
      marginTop: 10, 
      fontSize: 18, 
      fontWeight: 'bold',
      color: '#696969',
    },
    priceContainer:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10,
    },
    textPrice:{
      fontWeight: 'bold', 
      color: '#000000', 
      fontSize: 18,
  },
    textLocation:{
      color: '#808080', 
      fontSize: 14, 
      marginTop: 5
    },
    header: {
      paddingVertical: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
    },
    profileImage: {
      height: 50,
      width: 50,
      borderRadius: 25,
    },
    searchInputContainer: {
      height: 50,
      backgroundColor: '#E8E8E8',
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 20,
      borderRadius: 12,
    },
    sortBtn: {
      backgroundColor: '#FFFFFF',
      height: 50,
      width: 50,
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 5,
    },
    optionsCard: {
      height: 210,
      width: width / 2 - 30,
      elevation: 15,
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      borderRadius: 20,
      paddingTop: 10,
      paddingHorizontal: 5,
      marginRight: 10
    },
    optionsCardImage: {
      height: 140,
      borderRadius: 10,
      width: '100%',
    },
    optionListsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10,
      paddingHorizontal: 10,
    },
    categoryListText: {
      fontSize: 16,
      fontWeight: 'bold',
      paddingBottom: 10,
      color: '#000000',
      
    },
    activeCategoryListText: {
      color: '#000000',
      borderBottomWidth: 1,
      paddingBottom: 5,
    },
    categoryListContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 40,
      paddingHorizontal: 40,
    },
    card: {
      height: 250,
      backgroundColor: '#FFFFFF',
      elevation: 10,
      width: width - 40,
      marginRight: 20,
      marginTop: 10,
      padding: 10,
      borderRadius: 20,
    },
    cardImage: {
      width: '100%',
      height: 120,
      borderRadius: 15,
    },
    facility: {flexDirection: 'row', marginRight: 15,},
    facilityText: {marginLeft: 5, color: '#000000'},
  });
export default Style;