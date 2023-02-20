import * as React from 'react';
import {
  View,
  useWindowDimensions,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import ComplaintCard from '../components/ComplaintCard';
import {useContext} from 'react';
import {ComplaintsContext} from '../../App';
import {ScrollView} from 'react-native-gesture-handler';
import BottomBar from '../components/BottomBar';
import {useNavigation} from '@react-navigation/core';

const FirstRoute = () => {
  const navigation = useNavigation();
  const {complaints, setComplaints} = useContext(ComplaintsContext);
  return (
    <View style={{flex: 1, backgroundColor: '#fff', paddingBottom: 60}}>
      <FlatList
        data={complaints}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Detail', {
                id: item.id,
              });
            }}>
            <ComplaintCard data={item} />
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const SecondRoute = () => <View style={{flex: 1, backgroundColor: '#fff'}} />;

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

export default function FormList() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'COMPLAINT FORM'},
    {key: 'second', title: 'REQUEST SERVICE'},
  ]);

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{
        backgroundColor: '#BAC62A',
        borderWidth: 2,
        borderColor: '#BAC62A',
      }}
      style={{backgroundColor: '#fff'}}
      renderLabel={({route, focused, color}) => (
        <Text
          style={{
            color: focused ? '#BAC62A' : '#9B9B9B',
            margin: 8,
            fontSize: 12,
            letterSpacing: 12 / 14,
            fontWeight: 500,
          }}>
          {route.title}
        </Text>
      )}
    />
  );

  return (
    <View style={{flex: 1}}>
      <TabView
        renderTabBar={renderTabBar}
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
      />
      <BottomBar />
    </View>
  );
}
