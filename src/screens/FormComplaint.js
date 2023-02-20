import React, {useState} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SelectList} from 'react-native-dropdown-select-list';
import {useContext} from 'react';
import {ComplaintsContext} from '../../App';
import {useNavigation} from '@react-navigation/core';
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const FormComplaint = () => {
  const {complaints, setComplaints} = useContext(ComplaintsContext);
  const [selected, setSelected] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const navigation = useNavigation();

  const data = [
    {key: '1', value: 'Electricity'},
    {key: '2', value: 'Telephone / Electonic'},
    {key: '3', value: 'Air Conditioner (AC)'},
    {key: '4', value: 'Plumbing'},
    {key: '5', value: 'Civil'},
    {key: '6', value: 'Diary Cleaning & Sanitation'},
    {key: '7', value: 'Safety & Security'},
  ];

  const selectImages = () => {
    var options = {
      title: 'Select Image',
      customButtons: [
        {
          name: 'customOptionKey',
          title: 'Choose file from Custom Option',
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    // launchImageLibrary(options, res => {
    //   console.log('Response = ', res);
    //   if (res.didCancel) {
    //     console.log('User cancelled image picker');
    //   } else if (res.error) {
    //     console.log('ImagePicker Error: ', res.error);
    //   } else if (res.customButton) {
    //     console.log('User tapped custom button: ', res.customButton);
    //     alert(res.customButton);
    //   } else {
    //     let source = res;
    //     setImages({
    //       resourcePath: source,
    //     });
    //   }
    // });
  };
  const handleChange = e => {
    const value = e.nativeEvent.text;
    setDescription(value);
    setDisabled(false);
  };

  const handleSubmit = () => {
    setComplaints(oldVal => [
      ...oldVal,
      {
        id: oldVal.length + 1,
        tenantName: 'Paradise Coffee',
        status: 'Waiting',
        type: 'Complaint',
        code: 'L1 #03',
        description,
        category: selected,
        assignee: '',
        createdDate: new Date(),
      },
    ]);
    navigation.navigate('Submit');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Category</Text>
          <Icon name="info-circle" size={16} color="#212121" />
        </View>
        <SelectList
          setSelected={val => setSelected(val)}
          data={data}
          save="value"
          boxStyles={{borderColor: '#EFEFEF'}}
        />
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Description</Text>
          <Icon name="info-circle" size={16} color="#212121" />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Type description"
          multiline
          numberOfLines={4}
          value={description}
          onChange={handleChange}
        />
      </View>
      <View style={{...styles.inputContainer, marginBottom: 2}}>
        <View style={{...styles.labelContainer, marginBottom: 8}}>
          <Text style={styles.label}>Photo</Text>
        </View>
        <Text>Tap to take picture or upload from gallery</Text>
        <TouchableOpacity style={styles.imageInput}>
          <Icon name="image" size={30} />
        </TouchableOpacity>
      </View>
      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={{
            ...styles.linearGradient,
            backgroundColor: disabled ? '#D6D6D6' : '#1E1934',
          }}
          disabled={disabled}
          onPress={handleSubmit}>
          <Text style={{...styles.buttonText, color: '#fff'}}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FormComplaint;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    // maxWidth: 380,
    // paddingHorizontal: 20,
    alignSelf: 'center',
    height: '100%',
    backgroundColor: '#EFEFEF',
  },
  inputContainer: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 4,
    borderColor: '#EFEFEF',
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  label: {
    color: '#1E1934',
    fontSize: 16,
    fontWeight: 500,
  },
  input: {
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#EFEFEF',
    padding: 16,
    color: '#1E1934',
  },
  imageInput: {
    marginTop: 20,
    marginBottom: 30,
    borderWidth: 1,
    borderRadius: 12,
    width: 85,
    height: 85,
    borderStyle: 'dashed',
    borderColor: '#979797',
    padding: 25,
  },
  bottomBar: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 10,
    width: '100%',
  },
  linearGradient: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#fff',
    backgroundColor: 'transparent',
  },
});
