import React from 'react';
import {SafeAreaView,View,StatusBar,Text,TextInput,FlatList,Dimensions,StyleSheet,Image,Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Style from "./style";
import houses from '../../assets/conts/houses';

const {width} = Dimensions.get('screen');

const HotPage = () => {
  const optionsList = [
    {title: 'Buy a Messi', img: require('../../assets/image/messi.jpg')},
    {title: 'Buy a Messi', img: require('../../assets/image/messi.jpg')},
  ];
  const categoryList = ['Recently', 'See All',];

  const ListCategories = () => {
    const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
    return (
      <View style={Style.categoryListContainer}>
        {categoryList.map((category, index) => (
          <Pressable
            key={index}
            onPress={() => setSelectedCategoryIndex(index)}>
            <Text
              style={[
                Style.categoryListText,
                index == selectedCategoryIndex && Style.activeCategoryListText,
              ]}>
              {category}
            </Text>
          </Pressable>
        ))}
      </View>
    );
  };

  const ListOptions = () => {
    return (
        <View style={Style.optionListsContainer}>
          {optionsList.map((option, index) => (
            <View style={Style.optionsCard} key={index}>
              {/* House image */}
              <Image source={option.img} style={Style.optionsCardImage} />
  
              {/* Option title */}
              <Text style={Style.optionTitle}>
                {option.title}
              </Text>
            </View>
          ))}
        </View>
      );
  };

  const Card = ({house}) => {
    return (
          <View style={Style.card}>
            <Image source={house.image} style={Style.cardImage} />
            <View style={{marginTop: 10}}>
              <View
                style={Style.priceContainer}>
                <Text style={{color: '#000000',fontSize: 18, fontWeight: 'bold'}}>
                  {house.title}
                </Text>
                <Text
                  style={Style.textPrice}>
                  $1,500
                </Text>
              </View>
              <Text style={Style.textLoctaion}>
                {house.location}
              </Text>
              <View style={{marginTop: 10, flexDirection: 'row'}}>
                <View style={Style.facility}>
                  <Icon name="hotel" size={18} />
                  <Text style={Style.facilityText}>2</Text>
                </View>
                <View style={Style.facility}>
                  <Icon name="bathtub" size={18} />
                  <Text style={Style.facilityText}>2</Text>
                </View>
                <View style={Style.facility}>
                  <Icon name="aspect-ratio" size={18} />
                  <Text style={Style.facilityText}>100m</Text>
                </View>
              </View>
            </View>
          </View>
      );
  };

  return (
    <SafeAreaView style={Style.backgroundColor}>
      <StatusBar translucent={false}/>

      <View style={Style.header}>
        <View>
          <Text style={Style.location}>Location</Text>
          <Text style={Style.location2}>
            Canada
          </Text>
        </View>
        <Image
          style={Style.profileImage}
          source={require('../../assets/image/messi.jpg')}
        />
      </View>

      <View
        style={Style.viewInput}>
        <View style={Style.searchInputContainer}>
          <Icon name="search"  size={25} />
          <TextInput placeholder="Search address, city, location" />
        </View>
        <View style={Style.sortBtn}>
          <Icon name="tune"  size={25} />
        </View>
      </View>
      {houses && houses.length > 0 && 
        (<FlatList
          snapToInterval={width - 20}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingLeft: 20, paddingVertical: 20}}
          data={houses}
          renderItem={({item}) => <Card house={item} />}
          ListHeaderComponent={() => (
            <>
              {ListOptions()}
              {ListCategories()}
            </>
          )}
        />)
      }
    </SafeAreaView>
  );
};

export default HotPage;
