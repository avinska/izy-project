import React from 'react';
import {View, Text, Image} from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';

const ComplaintCard = ({data, navigation}) => {
  const theme = {
    Waiting: '#D0021B',
    Processed: '#FFA000',
    Approved: '#521ac4',
    Complete: '#869E93',
  };
  return (
    <View
      style={{
        backgroundColor: '#fff',
        margin: 16,
        borderWidth: 1,
        borderColor: '#EFEFEF',
        borderRadius: 8,
      }}>
      <View
        style={{
          backgroundColor: '#fff',
          padding: 16,
          borderBottomWidth: 1,
          borderColor: '#EFEFEF',
          borderTopRightRadius: 8,
          borderTopleftRadius: 8,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 16,
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
            }}>
            <View
              style={{
                backgroundColor: theme[data.status],
                paddingVertical: 6,
                paddingHorizontal: 16,
                borderRadius: 3,
                marginRight: 4,
              }}>
              <Text style={{color: '#fff', fontSize: 10}}>{data.status}</Text>
            </View>
            <View
              style={{
                backgroundColor: '#3F51B5',
                paddingVertical: 6,
                paddingHorizontal: 16,
                borderRadius: 3,
                marginRight: 4,
              }}>
              <Text style={{color: '#fff', fontSize: 10}}>{data.type}</Text>
            </View>
          </View>
          <View>
            <Text style={{color: '#9B9B9B'}}>12:33</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={{width: 60, height: 60, resizeMode: 'contain'}}
            source={require('../assets/e1a6bc42bb9d6c7fc6b641c9310ec785--logo-ideas-paradise.jpg')}
          />
          <View style={{flex: 1, marginLeft: 16}}>
            <Text
              style={{
                color: '#1E1934',
                fontSize: 14,
                marginBottom: 4,
                fontWeight: 500,
              }}>
              {data.tenantName}
            </Text>
            <Text style={{color: '#9B9B9B', fontSize: 12, marginBottom: 8}}>
              {data.code}
            </Text>
            <Text style={{color: '#212121', fontSize: 14}}>
              {data.description}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          borderBottomLeftRadius: 8,
          borderBottomRightRadius: 8,
        }}>
        <View
          style={{
            borderColor: '#EFEFEF',
            borderRightWidth: 1,
            padding: 23,
            width: '50%',
          }}>
          <Text style={{color: '#9B9B9B', fontSize: 12, marginBottom: 8}}>
            Category
          </Text>
          <Text
            style={{
              color: '#1E1934',
              fontSize: 14,
              marginBottom: 4,
              fontWeight: 500,
            }}>
            {data.category}
          </Text>
        </View>
        <View
          style={{
            padding: 23,
            width: '50%',
          }}>
          <Text style={{color: '#9B9B9B', fontSize: 12, marginBottom: 8}}>
            Assign to
          </Text>
          {!data.assignee && (
            <Text
              style={{
                color: '#D0021B',
                fontSize: 14,
                marginBottom: 4,
                fontWeight: 500,
              }}>
              Unassigned
            </Text>
          )}
          {data.assignee && (
            <View
              style={{
                width: 24,
                height: 24,
                borderRadius: 12,
                backgroundColor: '#2196F3',
              }}>
              <Text
                style={{
                  fontSize: 14,
                  marginBottom: 4,
                  fontWeight: 500,
                  color: '#fff',
                  textAlign: 'center',
                }}>
                {data.assignee.slice(0)}
              </Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default ComplaintCard;
