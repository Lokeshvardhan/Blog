import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Indexscreen from './src/screens/indexscreen';
import {BlogProvider} from './src/context/blogcontext';
 const navigator=createStackNavigator({
   Index:Indexscreen
 },{
    initialRouteName:'Index',
    defaultNavigationOptions:{
      title:'Blogs'
    }
  })
const App = createAppContainer(navigator);
 
 export default ()=>{
   return <BlogProvider>
         <App />
      </BlogProvider>
 };