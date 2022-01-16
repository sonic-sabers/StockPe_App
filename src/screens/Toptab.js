import React from 'react';
import {Tab, Text, TabView} from 'react-native-elements';
import Live from '../components/Live';

export default Toptab = ({navigation}) => {
  const [index, setIndex] = React.useState(0);

  return (
    <>
      <Tab
        value={index}
        onChange={e => setIndex(e)}
        style={{backgroundColor: 'green'}}
        indicatorStyle={{
          backgroundColor: 'white',
          height: 3,
        }}
        style={{backgroundColor: '#333'}}
        variant="primary"
        screenOptions={{
          tabBarStyle: {backgroundColor: '#333'},
          headerStyle: {
          backgroundColor: '#333',
        },
        }}>
        <Tab.Item title="Live" titleStyle={{fontSize: 18}} />
        <Tab.Item
          title="Upcoming"
          titleStyle={{fontSize: 18}}
          //   icon={{name: 'cart', type: 'ionicon', color: 'white'}}
        />
      </Tab>

      <TabView
        value={index}
        onChange={setIndex}
        animationType="spring"
        style={{backgroundColor: 'blue', width: '100%'}}>
        <TabView.Item style={{width: '100%'}}>
          {/* <Text h1>Refvbfc bcv cent</Text> */}
          <Live />
        </TabView.Item>
        <TabView.Item style={{backgroundColor: 'blue', width: '100%'}}>
          <Live />
        </TabView.Item>

      </TabView>
    </>
  );
};
