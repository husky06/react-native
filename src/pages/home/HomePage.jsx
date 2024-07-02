import React, { useEffect, useState } from "react";
import { Button, FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Banner from "../../components/banner/banner";
import Input from "../../components/input/input";
import ButtonD from "../../components/button/button";
import CardProduct from "../../components/card-product/card-product";
import Style from "./style";
import BannerAds from "../../components/banner-advertise/banner-advertise";




//depen rỗng, chayj  1 lần khi ui được hiển thị xong
const HomePage = ({ navigation }) => {

    const [brand, setBrand] = useState([]);
    const [products, setProducts] = useState([]);
    const [rsSearch, setRsSearch] = useState([]);

    const [brandActive, setBrandActive] = useState(-1);
    useEffect(() => {
        const fetchData = async () => { 
            try { 
                const res_brand = await fetch('http://192.168.32.1:3000/get-all-brand');
                const jsonData = await res_brand.json();
                const res_product = await fetch('http://192.168.32.1:3000/get-all-product');

                const jsonProduct = await res_product.json();
                setBrand(jsonData);

                setProducts(jsonProduct);
                setRsSearch(jsonProduct);
            } catch (error) {
                console.log(error)
            }
        };

        fetchData();
    }, [])


    //function to change brand
    const changeActiveBrand = (index) => {
        setBrandActive(index);
        if (index == -1) {
            setRsSearch(products);
            return;
        }
        //filter
        var rsSerach = products.filter((item) => {
            console.log(index)
            return item.brand._id === index
        })
        setRsSearch(rsSerach);
    }

    const st_img_search = require('../../assets/icon/search.png')
    const st_img_ads_pc = require('../../assets/icon/pc.png')

    // productdetail 

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={Style.container}>
            <View style={Style.containHeader}>
                <Text style={Style.titleHeader}>
                    Trang chủ
                </Text>
                {/* only icon */}
                <View style={Style.containIcon}>
                    <Image source={st_img_search} style={Style.searchIcon} />
                </View>
            </View>

            {/* banner */}
            <BannerAds src_banner={st_img_ads_pc} title={"Sale off 50%"} time={"Until november 23"} />
            <SafeAreaView style={Style.contain_option}>
                <ScrollView horizontal>
                    <TouchableOpacity onPress={() => changeActiveBrand(-1)}>
                        <View style={[Style.containIconOption, Style.containIconOptionActive]}>
                            <Text style={{ color: 'white', fontSize: 12 }}>T.cả </Text>
                        </View>
                    </TouchableOpacity>
                    <FlatList
                        horizontal
                        data={brand}
                        keyExtractor={(item) => item._id}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity onPress={() => changeActiveBrand(item._id)}>
                                <View style={[Style.containIconOption, item._id === brandActive ? Style.containIconOptionActive2 : null]}>
                                    <Image
                                        source={{ uri: item.logoBrand }}
                                        style={Style.logoBrand}
                                    />
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </ScrollView>
            </SafeAreaView>
            <Text style={Style.title_choose}>Popular</Text>
            <SafeAreaView style={Style.contain_card_prod}>
                <FlatList numColumns={2} data={rsSearch} renderItem={({ item }) =>
                    <TouchableOpacity onPress={() => navigation.navigate('detail-product',
                        {
                            urlImage: item.imageString[0],
                            allImage: item.imageString,
                            nameProduct: item.nameProduct,
                            price: item.regularPrive,
                            reiveiw: item.reviewProduct
                        })}>
                        <CardProduct
                            key={item._id}
                            nameProduct={item.nameProduct}
                            price={item.regularPrive}
                            uri={item.imageString[0]}
                        />
                    </TouchableOpacity>

                }>
                </FlatList>
            </SafeAreaView>
        </ScrollView>
    )
}

export default HomePage;