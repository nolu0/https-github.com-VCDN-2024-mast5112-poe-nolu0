// src/components/Component.tsx
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableHighlight, View, SafeAreaView, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { DishDetails } from './type'; // Adjust the import path as necessary

const Component = () => {
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [courseType, setCourseType] = useState('Main Course');
  const [menuItems, setMenuItems] = useState('');
  const [price, setPrice] = useState('');
  const [dishes, setDishes] = useState<DishDetails[]>([]);

  const handleSubmit = () => {
    if (dishName && description && courseType && menuItems && price && !isNaN(parseInt(menuItems))) {
      const newDish: DishDetails = {
        DishName: dishName,
        Description: description,
        Course_Type: courseType,
        MenuItems: parseInt(menuItems),
        Price: parseFloat(price),
        Averageprice: parseInt(price)
      };
      setDishes([...dishes, newDish]);
      clearForm();
      console.log(newDish);
    } else {
      Alert.alert("Please fill out all fields correctly.");
    }
  };

  const clearForm = () => {
    setDishName('');
    setDescription('');
    setCourseType('Main Course');
    setMenuItems('');
    setPrice('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.dishName}>ChrisHouse</Text>
      </View>
<SafeAreaView style={styles.cotainer}>
  <View style={Styles.headingContainer}>
    <Text style={Styles.Homescreen}>ChrisHouse</Text>
    </View>
      <View style={styles.listView}>
        <FlatList
          style={styles.listStyle}
          data={dishes}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.detailText}>Dish Name: {item.DishName}</Text>
              <Text style={styles.detailText}>Description: {item.Description}</Text>
              <Text style={styles.detailText}>Course Type: {item.Course_Type}</Text>
              <Text style={styles.detailText}>Menu Items: {item.MenuItems}</Text>
              <Text style={styles.detailText}>Price: ${item.Price.toFixed(2)}</Text>
              <Text style-={Styles.detailText}>AveragePrice:${item.AveragePrice.toFixed(2)}</Text>
            </View>
          )}
        />
      </View>

      <View style={styles.userInputView}>
        <TextInput
          style={styles.input}
          placeholder="Dish Name"
          value={dishName}
          onChangeText={setDishName}
        />
        <TextInput
          style={styles.input}
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
        />
        
        <Picker
          style={styles.input}
          selectedValue={courseType}
          onValueChange={(itemValue) => setCourseType(itemValue)}
        >
          <Picker.Item label="Starter" value="Starter" />
          <Picker.Item label="Main Course" value="Main Course" />
          <Picker.Item label="Dessert" value="Dessert" />
        </Picker>

        <TextInput
          style={styles.input}
          placeholder="Menu Items"
          value={menuItems}
          onChangeText={setMenuItems}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Price"
          value={price}
          onChangeText={setPrice}
          keyboardType="numeric"
        />

        <TouchableHighlight style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginVertical: 1,
    backgroundColor: 'white',
  },
  headingContainer: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    width: '100%',
  },
  dishName: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#583E96',
  },
  listView: {
    flex: 1,
    width: '100%',
    borderRadius: 10,
    backgroundColor: 'black',
    marginBottom: 20,
  },
  userInputView: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    backgroundColor: '#CBC3E3',
    padding: 16,
    borderRadius: 10,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    paddingHorizontal: 11,
    marginVertical: 5,
    borderRadius: 5,
    color: 'grey',
    fontSize: 20,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    borderRadius: 40, // for round corners
    marginVertical: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
  },
  listStyle: {
    maxHeight: 800,
  },
  itemContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#BDB5D5',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 10,
    padding: 20,
    borderRadius: 10,
  },
  detailText: {
    color: '#5B3E96',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Component;
