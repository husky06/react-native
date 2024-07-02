  import React, { useState, useEffect } from 'react';
  import { View, Text, StyleSheet, Image, ScrollView, FlatList, TouchableOpacity, TextInput } from 'react-native';
  import Icon from 'react-native-vector-icons/MaterialIcons';
  import ModalDropdown from 'react-native-modal-dropdown'; 
  import styles from "./style";
  const ProductDetail = ({ navigation }) => {
    const [userReview, setUserReview] = useState('');
    const [userRating, setUserRating] = useState(0);
    const [products, setProducts] = useState([]);
    const [brandInfo, setBrandInfo] = useState({});
    const [brands, setBrands] = useState([]);
    const [brandComments, setBrandComments] = useState({});
    const [showDropdown, setShowDropdown] = useState(false);
    const SelectedBrandInfo = ({ brandInfo }) => {
      return (
        <View style={styles.selectedBrandContainer}>
          <Image source={brandInfo.image} style={styles.selectedBrandImage} />
          <Text style={styles.selectedBrandText}>{brandInfo.name}</Text>
        </View>
      );
    };
    useEffect(() => {
      const mockBrands = [
        { _id: 1, name: 'Brand A', image: require('../../assets/image/banner.jpg')},
        { _id: 2, name: 'Brand B', image: require('../../assets/image/messi.jpg')},
        { _id: 3, name: 'Brand C', image: require('../../assets/image/banner.jpg')},
        { _id: 4, name: 'Brand D', image: require('../../assets/image/banner.jpg')},
        { _id: 5, name: 'Brand E', image: require('../../assets/image/banner.jpg')},
      ];
      setBrands(mockBrands);
    }, []);

    useEffect(() => {
      const mockBrandComments = {
        'Brand A': [
          { author: 'User1', comment: 'Comment 1 for Brand A', rating: 4 },
          { author: 'User2', comment: 'Comment 2 for Brand A', rating: 5 },
        ],
        'Brand B': [
          { author: 'User3', comment: 'Comment 1 for Brand B', rating: 3 },
          { author: 'User4', comment: 'Comment 2 for Brand B', rating: 4 },
          { author: 'User5', comment: 'Comment 3 for Brand B', rating: 5 },
        ],
        'Brand C': [
          { author: 'User6', comment: 'Comment 1 for Brand C', rating: 4 },
          { author: 'User7', comment: 'Comment 2 for Brand C', rating: 5 },
          { author: 'User8', comment: 'Comment 3 for Brand C', rating: 3 },
        ],
      };
      setBrandComments(mockBrandComments);
    }, []);

    const handleBrandChange = (itemValue) => {
      const selectedBrand = brands.find((brand) => brand.name === itemValue);
      setBrandInfo(selectedBrand || {});
      setShowDropdown(false);
    };

    useEffect(() => {
      const fetchData = async () => { 
        try { 
          const res_product = await fetch('http://192.168.32.1:3000/get-all-product');
          const jsonProduct = await res_product.json();
          setProducts(jsonProduct);
        } catch (error) {
          console.log(products)
        }
      };
      fetchData();
    }, []);

    const product = {
      rating: 4.5,
      isFavorite: true,
      reviews: [
        { id: 1, author: 'John Doe', text: 'Great product! I love it.', rating: 5 },
        { id: 2, author: 'Jane Smith', text: 'The quality is amazing.', rating: 4 },
      ],
    };

    const renderSimilarProduct = ({ item }) => (
      <TouchableOpacity style={styles.similarProductItem}>
        <Image source={{ uri: item.imageString[0] }} style={styles.similarProductImage} />
        <Text style={styles.similarProductName}>{item.nameProduct}</Text>
      </TouchableOpacity>
    );

    const toggleFavorite = () => {
      product.isFavorite = !product.isFavorite;
    };

    const handleComparePress = () => {
      console.log('Compare button pressed');
    };

    const handleAddReview = () => {
      const newReview = {
        id: product.reviews.length + 1,
        author: 'User',
        text: userReview,
        rating: userRating,
      };
      product.reviews = [...product.reviews, newReview];
      setUserReview('');
      setUserRating(0);
    };

    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.imageContainer}>
            {/* <Image source={{ uri: products.length > 0 ? products[0].imageString[0] : '' }} style={styles.productImage} /> */}
            <Image source={products.length > 0 && products[0].imageString[0] ? { uri: products[0].imageString[0] } : null} style={styles.productImage} />
            <View style={[styles.overlay, styles.ratingOverlay]}>
              <View style={styles.ratingContainer}>
                <Text style={styles.ratingText}>{product.rating}</Text>
              </View>
            </View>
          </View>
          <View style={styles.favoriteContainer}>
            <TouchableOpacity onPress={toggleFavorite}>
              <Icon
                name={product.isFavorite ? 'favorite' : 'favorite-border'}
                size={30}
                color={product.isFavorite ? 'red' : 'black'}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.goBackContainer}
            onPress={() => navigation.goBack()}>
            <Icon name="arrow-back-ios" size={24} color="black" />
          </TouchableOpacity>
          <View style={styles.namePriceContainer}>
            <Text style={styles.productName}>{products.length > 0 ? products[0].nameProduct : ''}</Text>
            <TouchableOpacity style={styles.priceHighlight}>
              <Text style={styles.productPrice}>
                {products.length > 0 ?  `${products[0].regularPrive}`  : ''}
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.descriptionText}>
            {products.length > 0 ? products[0].reviewProduct : 'No description available'}
          </Text>
          <View style={styles.commentsContainer}>
            <Text style={styles.commentsHeading}>Customer Reviews</Text>
            {product.reviews.map((review) => (
              <View key={review.id} style={styles.reviewItem}>
                <View style={styles.reviewContent}>
                  <View style={styles.reviewHeader}>
                    <Text style={styles.reviewAuthor}>{review.author}</Text>
                    <View style={styles.starRating}>
                      {[...Array(review.rating)].map((_, index) => (
                        <Icon
                          key={index}
                          name="star"
                          size={15}
                          color="gold"
                          style={{ marginRight: 2 }}
                        />
                      ))}
                    </View>
                  </View>
                  <Text style={styles.reviewText}>{review.text}</Text>
                </View>
              </View>
            ))}
          </View>
          <View style={styles.dropdownView}>
          <View style={styles.dropdownWrapper}>
            <ModalDropdown
              options={brands.map((item) => ({
                id: item._id,
                name: item.name,
                image: item.image,
              }))}
              onSelect={(index) => {
                handleBrandChange(brands[index].name);
              }}
              renderRow={(option) => (
                <TouchableOpacity style={styles.dropdownOption} onPress={() => handleBrandChange(option.name)}>
                  <View style={styles.dropdownOptionContainer}>
                    <Image source={option.image} style={styles.brandImage} />
                    <Text style={styles.dropdownOptionText}>{option.name}</Text>
                  </View>
                </TouchableOpacity>
              )}
              onDropdownWillShow={() => setShowDropdown(true)}
              onDropdownWillHide={() => setShowDropdown(false)}
              dropdownStyle={showDropdown ? styles.dropdownWrapper : { display: 'none' }}
            >
              <View style={styles.selectedBrandWrapper}>
                {brandInfo.name ? (
                  <SelectedBrandInfo brandInfo={brandInfo} />
                ) : (
                  <Text>Select a brand</Text>
                )}
                <Icon name="arrow-drop-down" size={20} />
              </View>
            </ModalDropdown>
          </View>
        </View>
        <View style={styles.brandInfoContainer}>
          {brandComments[brandInfo.name]?.map((comment, index) => (
            <View key={index} style={styles.brandCommentItem}>
              <Text style={styles.brandCommentAuthor}>{comment.author}</Text>
              <Text style={styles.brandCommentText}>{comment.comment}</Text>
              <View style={styles.starRating}>
                {[...Array(comment.rating)].map((_, index) => (
                  <Icon
                    key={index}
                    name="star"
                    size={15}
                    color="gold"
                    style={{ marginRight: 2 }}
                  />
                ))}
              </View>
            </View>
          ))}
        </View>
          <View style={styles.addReviewContainer}>
            <Text style={styles.addReviewHeading}>Add Your Review</Text>
            <TextInput
              style={styles.reviewInput}
              placeholder="Write your review..."
              multiline
              value={userReview}
              onChangeText={(text) => setUserReview(text)}
            />
            <TouchableOpacity
              style={styles.addReviewButton}
              onPress={handleAddReview}>
              <Text style={styles.addReviewButtonText}>Add Review</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.similarProductsContainer}>
            <Text style={styles.similarProductsHeading}>Similar Products</Text>
            <FlatList
              data={products}
              renderItem={renderSimilarProduct}
              keyExtractor={(item) => item._id.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </ScrollView>
        <TouchableOpacity style={styles.compareButton} onPress={handleComparePress}>
          <Text style={styles.compareButtonText}>Compare</Text>
        </TouchableOpacity>
      </View>
    );
  };

  
  export default ProductDetail;