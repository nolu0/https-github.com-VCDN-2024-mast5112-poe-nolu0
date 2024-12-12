import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { DishDetails } from './type';
import { useState } from 'react';

export default function App() {

  const[Dish_Name, setDishName]= useState<string>('');
  const[Course_Type, setCourseType] = useState<string>('');
  const[Price, setPrice]= useState<string>('');

 const [Workouts, setWorkouts] = useState<DishDetails[]>([])

 const CourseType = ['Breakfast', 'Brunch', 'Lunch', 'Dinner', 'Desert'];//User will choose whatever their prefer under coursetype.
const [totalPrice, setPricee] = useState<number>(0)
const totalworkouts = Workouts
 const handleSubmit =() => {}

  if (Dish_Name&& Course_Type && Price && parseInt(Price) > 0) {
    const DishDetails= {
  Dish_Name: Dish_Name,
  Course_Type:Course_Type,
  Price: parseInt(Price),
};
setCourseType
setDishName
setPrice

 }
 MenuItems: //Breakfast: Cereal, Toast&Eggs, Smootie
 //Brunch: Combine breakfast and lunch
 //Lunch: Burgers& chips, Sushi, Jollof rice, Usu& steam bread
 //Dinner: Cream Pasta, Mac& Cheese, Creamy stamp
 //Desert: Ice cream, waffles, pancakes, cheesecake

 // Beverages: Non-alcohol champagne , apple juice , orange , water and alcohol
 // These are the items that chris offer.


  return(
<SafeAreaView style={styles.container}>
<View style={styles.headingContainer}>
<Text>CHRISHOUSE</Text> // Chris House is biscally the name of the chef that im working for and i named my app after him.
</View>

<View style={styles.summaryContainer}>
  <Text style={styles.summaryHeading}>TODAY'S MENU</Text> // Under todays menu their will be a display of menu offered on a specific
  day , example: Monday ; Steam bread& usu , Fries with apple juice
</View>

<View>
  <Text style={styles.summaryText}>Total Menu Items: </Text>
  <Text style={styles.summaryText}>Total Price: {totalPrice}</Text> // Total price of how much the user will spend/pay.

</View>

<View style={styles.listview}>

  
<View style={styles.itemContainer}> 
<Text style={styles.detailText}>Dish_Name:{}</Text>
<Text style={styles.detailText}> foodType:{}</Text>
<Text style={styles.detailText}>Price:{}</Text>

</View>
</View>
<View style={styles.userInputView}>
<TextInput placeholder='Dish_Name' value={Dish_Name} onChangeText={setDishName}></TextInput>

<TextInput placeholder='Course_Type' value={Course_Type} onChangeText={setCourseType}></TextInput>
<Picker style={styles.input}

selectedValue={CourseType}
onValueChange={(itemValue) => setCourseType}>

     {CourseType.map((CourseType)=>(
<Picker.Item label={CourseType} value={CourseType} key={CourseType}/>
     
     ))}

<TextInput placeholder='Price' value={Course_Type} onChangeText={setPrice}></TextInput>


</Picker>


<TouchableHighlight style={styles.button}>
<Text>Save</Text>
</TouchableHighlight>


</View>
</SafeAreaView>
  )
}
    
const styles = StyleSheet.create({


  container: {
    flex: 1,
    padding: 20,
    marginVertical:1,
    backgroundColor: '#fff',
  
  },
  headingContainer:{
    backgroundColor: '#BDB505',
    alignItems: 'center',
    justifyContent:'center',
    marginBottom:90,
    width:'100%',

  },
  ChrisHouse:{
    fontSize: 36,
    fontWeight: 'bold',
    color:'white',
  },
  listview:{
    marginTop:-10,
    width:'100%',
    height:500,
    borderRadius:10,
    backgroundColor:'#ECECEC'

  },
  userInputView:{
    alignItems:'center',
    justifyContent:'flex-start',
    width: '100%',
    marginVertical: 5,
    backgroundColor:'#CBC3E3',
    padding:15,
    marginTop: 40,
    marginBottom: 45,
    borderRadius: 10,
  },
  input:{
    width: '100%',
    height: 35,
    backgroundColor:'pink',
    paddingHorizontal:10,
    marginVertical:-15,
    borderRadius: 5,
    color:'black',
    marginTop:30,
    fontSize:25,
  },
  button:{
    backgroundColor:'#BDB505',
    paddingVertical:16,
    paddingHorizontal:41,
    borderRadius:41,// For rounded corners
    marginVertical: 11,
    alignItems:'center',
    marginTop: 40,

  },
  liststyle: {


  },
  itemContainer:{
    flex: 1,
    width:500,
    backgroundColor:'white',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 10,
    padding: 10,
    marginLeft: 10,
    borderRadius: 10,
  },
detailText:{
  color:'black',
  fontSize:22,
  fontWeight:'bold'
},
summaryContainer: {
backgroundColor: 'pink',
padding: 15,
borderRadius: 25,
marginTop: 20,
alignItems: 'flex-start',
},
summaryHeading: {
  fontSize: 23,
  fontWeight: 'bold',
  marginBottom:22,
},
summaryText:{
  fontSize: 20,
  fontWeight:'bold',
  color: 'pink'
},
handleRemoval:{
fontSize:20,
fontWeight:'bold',
color:'pink',

},
workoutItem:{
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: 11,
  paddingHorizontal: 6,
  shadowColor: '#000',
},
Picker:{
  backgroundColor: '#f0f5f9',//light gray background colour for picker
  padding: 14,
  marginBottom: 10,
  borderRadius: 7,
  borderColor: 'pink'// pink border for picker,
},
display: {
  backgroundColor:'peach white',// peach white background for summary section
  padding: 15,
  borderRadius: 9,// slightly rounder corner for the border
  marginBottom: 20,
  alignItems: 'center',
}
}
);