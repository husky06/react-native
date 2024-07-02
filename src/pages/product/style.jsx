const { StyleSheet,Dimensions } = require("react-native");
const {width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    marginBottom: 100,
  },
  imageContainer: {
    position: 'relative',
  },
  productImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    borderRadius: 15,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
  ratingContainer: {
    position: 'absolute',
    top: 250,
    right: 10,
    flexDirection: 'row',
    padding: 5,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  ratingText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  favoriteContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  goBackContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
  namePriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  priceHighlight: {
    backgroundColor: '#e1f7ec',
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 5,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  descriptionText: {
    fontSize: 17,
    color: '#555',
    marginBottom: 20,
    paddingHorizontal: 10,
    color: 'black'
  },
  commentsContainer: {
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  commentsHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    color: 'black',
  },
  reviewItem: {
    marginBottom: 15,
  },
  reviewAuthor: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',
  },
  reviewAuthorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  starRating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reviewText: {
    fontSize: 14,
    color: 'black',
  },
  leftRatingContainer: {
    flexDirection: 'row',
    marginRight: 100,
  },
  dropdownView: {
    marginBottom: 10,
  },
  
  brandInfoContainer: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginTop: 10,
    
  },
  brandItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,

  },
  dropdownWrapper: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    overflow: 'hidden',
  },
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    paddingHorizontal: 10,
    width: '100%'
  },
  dropdownOption: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  
  dropdownOptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%'
    
  },
  brandImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  dropdownOptionText: {
    fontSize: 16,
    color: 'black',
  },
  selectedBrandWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'gray',
    overflow: 'hidden',
    width: '100%',
  },
  selectedBrandContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectedBrandImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  selectedBrandText: {
    fontSize: 16,
    color: 'black',
  },
  brandCommentItem: {
    marginBottom: 10,
  },
  brandCommentAuthor: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',
  },
  brandCommentText: {
    fontSize: 14,
    color: 'black',
  },
  starRating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reviewContent: {
    flex: 1,
  },
  addReviewContainer: {
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  addReviewHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    color: 'black',
    marginTop: 5,
  },
  reviewInput: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    marginBottom: 10,
    height: 100,
  },
  addReviewButton: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    paddingBottom:5,
  },
  addReviewButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  similarProductsHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingTop: 7,
    color: 'black'
  },
  similarProductsContainer: {
    paddingHorizontal: 5,
  },
  similarProductItem: {
    marginRight: 20,
  },
  similarProductImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
    resizeMode: 'cover',
  },
  similarProductName: {
    marginTop: 5,
    textAlign: 'center',
    color: 'black'
  },
  compareButton: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    borderRadius: 5,
    marginHorizontal: 10,
    marginBottom: 20,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  compareButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});


export default styles;