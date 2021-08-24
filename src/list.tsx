import React, {useLayoutEffect, useState} from 'react';
import {Alert, TouchableOpacity, View, StyleSheet} from 'react-native';
import {ListItem, Avatar, Text} from 'react-native-elements';
import {db} from '../firebase';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
interface Doc {
  id: String;
  data: any;
}
const ListComponent = () => {
  const [data, setData] = useState([]);

  useLayoutEffect(() => {
    //for direct function
    db.collection('ingredients').onSnapshot(function (querySnapshot: any) {
      setData(
        querySnapshot.docs.map((doc: Doc) => ({
          id: doc.id,
          data: doc.data(),
        })),
      );
    });
  }, []);

  const handleDeletion = (id: any) => {
    //by fireabse deployed function
    axios.post(
      'https://us-central1-fir-test-3e7f0.cloudfunctions.net/superAdminApi/deleteProduct',
      {id},
    );

    //by direct firebase function
    // db.collection('ingredients')
    //   .doc(id)
    //   .delete()
    //   .then(() => {
    //   });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Ingredient</Text>

      {data?.map((l: any, i) => (
        <ListItem key={i} bottomDivider>
          <Icon name="checkmark-circle" size={30} color="#30BB6B" />
          <ListItem.Content>
            <ListItem.Title
              style={{
                width: '100%',
              }}>
              <Text>{l.data.title}</Text>
            </ListItem.Title>
          </ListItem.Content>
          <TouchableOpacity onPress={() => handleDeletion(l.id)}>
            <Icon name="md-trash-outline" size={20} />
          </TouchableOpacity>
        </ListItem>
      ))}
    </View>
  );
};
export default ListComponent;
const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingVertical: 20,
  },
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '90%',
  },
});
