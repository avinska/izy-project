import React, {useState} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SliderBox} from 'react-native-image-slider-box';
import StepIndicator from 'react-native-step-indicator';
import {useContext} from 'react';
import {ComplaintsContext} from '../../App';

const ComplaintDetail = ({route}) => {
  const {id} = route.params;
  const {complaints} = useContext(ComplaintsContext);

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
  const labels = ['Waiting', 'Processed', 'Approval', 'Complete'];
  const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 25,
    separatorStrokeWidth: 5,
    currentStepStrokeWidth: 5,
    stepStrokeCurrentColor: '#FFCDD2',
    stepStrokeWidth: 5,
    stepStrokeFinishedColor: '#F44336',
    stepStrokeUnFinishedColor: '#EFEFEF',
    separatorFinishedColor: '#F44336',
    separatorUnFinishedColor: '#EFEFEF',
    stepIndicatorFinishedColor: '#F44336',
    stepIndicatorUnFinishedColor: '#9B9B9B',
    stepIndicatorCurrentColor: '#F44336',
    stepIndicatorLabelFontSize: 0,
    currentStepIndicatorLabelFontSize: 0,
    stepIndicatorLabelCurrentColor: '#F44336',
    stepIndicatorLabelFinishedColor: '#9B9B9B',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#1E1934',
    labelSize: 10,
    currentStepLabelColor: '#1E1934',
  };

  return (
    <ScrollView style={styles.container}>
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
      <View style={styles.titleContainer}>
        <View style={styles.titleBox}>
          <Image
            source={require('../assets/image-removebg-preview.png')}
            style={styles.image}
          />
          <View style={{alignSelf: 'center', marginLeft: 10}}>
            <Text style={{fontWeight: 'bold', fontSize: 20, color: 'black'}}>
              {complaints[id].tenantName}
            </Text>
            <Text> {complaints[id].code}</Text>
          </View>
        </View>
        <View style={styles.statusBox}>
          <Text style={{color: 'white', fontWeight: 500}}>
            {' '}
            {complaints[id].type}
          </Text>
        </View>
      </View>
      <View style={styles.logContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
            paddingHorizontal: 20,
          }}>
          <Text style={styles.label}>Progress</Text>
          <Text style={{color: 'skyblue', fontWeight: 'bold', fontSize: 14}}>
            View Log Detail
          </Text>
        </View>
        <StepIndicator
          customStyles={customStyles}
          currentPosition={labels.indexOf(complaints[id].status)}
          labels={labels}
          stepCount={4}
        />
      </View>

      <View style={styles.logContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
            paddingHorizontal: 20,
            alignItems: 'center',
          }}>
          <Image
            source={require('../assets/logo_cornerstone.png')}
            style={styles.logo}
          />
          <View>
            <Text>08 Apr 2019</Text>
            <Text style={{textAlign: 'right'}}>11:08</Text>
          </View>
        </View>
        <View style={styles.contentBox}>
          <Text style={styles.label}>Category</Text>
          <Text style={styles.text}>{complaints[id].category}</Text>
        </View>
        <View style={styles.contentBox}>
          <Text style={styles.label}>Description</Text>
          <Text
            style={styles.description}
            ellipsizeMode="tail"
            numberOfLines={2}>
            {complaints[id].description}
          </Text>
        </View>
      </View>

      <View style={{...styles.logContainer, marginBottom: 30}}>
        <View style={styles.contentBox}>
          <Text style={styles.label}>Location Detail</Text>
          <Text style={styles.text}>Kitchen Number 2</Text>
        </View>
        <View style={styles.contentBox}>
          <Text style={styles.label}>Assign to</Text>
          <View style={{flexDirection: 'row'}}>
            <Icon
              name="user-circle"
              size={24}
              style={{marginVertical: 10, marginRight: 10}}
            />
            <Text
              style={{...styles.text, color: '#D0021B', alignSelf: 'center'}}>
              Unassign User
            </Text>
          </View>
        </View>
        <View style={styles.contentBox}>
          <Text style={styles.label}>Expected Due Date</Text>
          <Text style={{...styles.text, color: '#BAC62A'}}>10 Apr 2019</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ComplaintDetail;

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
  sliderContainer: {
    marginVertical: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  image: {
    height: 48,
    width: 48,
  },
  titleBox: {justifyContent: 'space-between', flexDirection: 'row'},
  statusBox: {
    padding: 10,
    backgroundColor: '#3F51B5',
    borderRadius: 15,
    alignSelf: 'center',
  },
  logContainer: {
    borderRadius: 15,
    borderWidth: 1,
    paddingVertical: 10,
    marginTop: 20,
    borderColor: '#EFEFEF',
  },
  logo: {
    height: 30,
    width: 120,
    resizeMode: 'contain',
  },
  contentBox: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  text: {
    fontSize: 14,
    fontWeight: 500,
    marginTop: 3,
    color: '#1E1934',
  },
  label: {
    color: '#9B9B9B',
    fontSize: 12,
  },
  description: {
    fontSize: 14,
    fontWeight: 500,
    marginBottom: 20,
    color: '#1E1934',
  },
});
