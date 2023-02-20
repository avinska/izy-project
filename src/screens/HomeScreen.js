import React, {useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Background from '../components/Background';
import {SliderBox} from 'react-native-image-slider-box';
import FloatingButton from '../components/FloatingButton';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function HomeScreen({navigation}) {
  const images = [
    require('../assets/banner-2.jpg'),
    require('../assets/banner-1.jpg'),
    require('../assets/banner-2.jpg'),
    require('../assets/banner-1.jpg'),
  ];
  const [width, setWidth] = useState(null);
  const onLayout = e => {
    setWidth(e.nativeEvent.layout.width);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/76148C9B-5350-4596-9304-B795A59B69B7.png')}
          style={styles.image}
        />
        <View style={styles.profileContainer}>
          <Text style={styles.jobTitle}>STORE MANAGER</Text>
          <Text style={styles.name}>Syidh Al Rasyid</Text>
        </View>
      </View>
      <View style={styles.card}>
        <View
          style={{
            ...styles.innerCard,
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
          }}>
          <Text style={styles.cardUpperText}>Location</Text>
          <Text style={styles.cardBottomText}>Beachwalk Mall</Text>
        </View>
        <View
          style={{
            ...styles.innerCard,
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8,
            borderLeftColor: '#D8D8D8',
            borderLeftWidth: 2,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={{marginRight: 8}}>
            <Text style={styles.cardUpperText}>Tenant</Text>
            <Text style={styles.cardBottomText}>Paradise Coffee</Text>
          </View>
          <TouchableOpacity>
            <Icon name="chevron-right" size={10} color="#212121" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.sliderContainer} onLayout={onLayout}>
        <SliderBox
          images={images}
          parentWidth={width}
          ImageComponentStyle={{borderRadius: 12}}
          dotColor="#BAC62A"
          inactiveDotColor="#ECECED"
          paginationBoxStyle={{
            position: 'absolute',
            bottom: -30,
            left: -20,
            padding: 0,
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
            paddingVertical: 10,
          }}
          dotStyle={{
            width: 27,
            height: 7,
            borderRadius: 3,
            marginHorizontal: 0,
          }}
          inactiveDotStyle={{
            width: 8,
            height: 8,
            borderRadius: 4,
            marginHorizontal: 0,
          }}
        />
      </View>
      <View>
        <TouchableOpacity style={styles.seeMore} onPress={() => {}}>
          <Text style={styles.seeMoreText}>See more</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginBottom: 100}}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
            color: '#212121',
            marginBottom: 16,
          }}>
          Features
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('FormList')}
          style={{
            borderColor: '#EFEFEF',
            borderWidth: 1,
            borderRadius: 8,
            paddingVertical: 12,
            marginBottom: 8,
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <Image
              style={{height: 50, resizeMode: 'contain'}}
              source={require('../assets/list.png')}
            />
            <Text style={{color: '#1E1934', fontSize: 14, fontWeight: 500}}>
              Complaints & Service Request
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderColor: '#EFEFEF',
            borderWidth: 1,
            borderRadius: 8,
            paddingVertical: 12,
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <Image
              style={{height: 50, resizeMode: 'contain'}}
              source={require('../assets/forms.png')}
            />
            <Text style={{color: '#1E1934', fontSize: 14, fontWeight: 500}}>
              Tenant Form
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <FloatingButton />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    // maxWidth: 380,
    paddingHorizontal: 20,
    alignSelf: 'center',
    height: '100%',
    backgroundColor: 'white',
  },
  imageContainer: {
    marginVertical: 16,
    marginLeft: 8,
    flex: 1,
    flexDirection: 'row',
  },
  image: {
    height: 48,
    width: 48,
    borderRadius: 48 / 2,
  },
  profileContainer: {
    marginLeft: 16,
  },
  jobTitle: {
    color: '#212121',
    fontSize: 10,
    fontWeight: 500,
  },
  name: {
    color: '#212121',
    fontSize: 16,
    fontWeight: 500,
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
  },
  innerCard: {
    backgroundColor: '#EEEEEE',
    padding: 17,
    width: '50%',
  },
  cardUpperText: {
    letterSpacing: 1,
    fontSize: 12,
    fontWeight: 300,
    color: '#212121',
  },
  cardBottomText: {
    letterSpacing: 16 / 14,
    fontSize: 14,
    fontWeight: 700,
    color: '#212121',
  },
  sliderContainer: {
    marginVertical: 16,
  },
  seeMore: {
    width: '100%',
    justifyContent: 'flex-end',
    textAlign: 'right',
    marginBottom: 30,
  },
  seeMoreText: {
    fontSize: 13,
    color: '#212529',
    fontWeight: 500,
    textAlign: 'right',
  },
});
