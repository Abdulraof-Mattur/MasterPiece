import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

export default function Home({ navigation }) {
  const [products, setProduct] = useState([]);

  const getProduct = async () => {
    try {
      const response = await axios.get("http://10.0.2.2:8000/api/products");
      setProduct(response.data); // Assuming the response contains data
    } catch (error) {
      console.error("Axios error:", error);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);
  const renderItemProduct = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate("ProductDetails", { product: item })}
    >
      <Image style={styles.imageCard} source={{ uri: item.image.url }} />
      <Text style={styles.card}>{item.name}</Text>
    </TouchableOpacity>
  );

  //     {
  //         id: '1',
  //         title: 'Accidents',
  //         image: require('../../assets/images/Accidents.png'),
  //     },
  //     {
  //         id: '2',
  //         title: 'Maintenance request',
  //         image: require('../../assets/images/MaintenanceRequest.png'),
  //     },
  //     {
  //         id: '3',
  //         title: 'location of the pieces',
  //         image: require('../../assets/images/locationPieces.png'),

  //     },
  //     {
  //         id: '4',
  //         title: 'Before buying',
  //         image: require('../../assets/images/BeforeBuying.png'),

  //     },
  //     {
  //         id: '5',
  //         title: 'Rental service',
  //         image: require('../../assets/images/RentalService.png'),

  //     },

  // ];

  // const renderItemServices = ({ item }) => (
  //     <TouchableOpacity style={styles.item}>
  //         <Image
  //             style={styles.imageCard}
  //             source={item.image}
  //         />
  //         <Text style={styles.card}>{item.title}</Text>
  //     </TouchableOpacity>
  // );

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.title}>Products</Text>

        <FlatList
          data={products}
          renderItem={renderItemProduct}
          keyExtractor={(item) => item.id}
          horizontal={false} // Set horizontal to false to make it vertical
          numColumns={2} // Set numColumns to 2 to display two items side by side
          contentContainerStyle={styles.flatlistContent}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  flatlistContent: {
    paddingHorizontal: 16,
    paddingLeft: 3,
  },
  item: {
    backgroundColor: "white",
    width: 160,
    height: 140,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 8,
    borderRadius: 32,
    shadowColor: "#93D3D6",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
    alignItems: "center",
  },
  imageCard: {
    width: 70,
    height: 60,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    paddingBottom: 10,
    textAlign: "center",
    color: "#93D3D6",
  },
  card: {
    fontSize: 16,
    padding: 10,
    fontWeight: "700",
    textAlign: "center",
    color: "#93D3D6",
  },
  space: {
    height: 250,
  },
});
