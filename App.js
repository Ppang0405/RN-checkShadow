import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const shadowStyle = {
  shadowColor: Colors.BLACK,
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.16,
  shadowRadius: 6,
  elevation: 7,
};

const getWidthHeight = (dim) => ({
  width: dim,
  height: dim,
  borderRadius: 50,
});

const getCenterStyle = () => ({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
});

const App = () => {
  return (
    <View style={getCenterStyle()}>
      <View
        style={[getWidthHeight(400), shadowStyle, {backgroundColor: 'red'}]}>
        <View
          style={[
            getWidthHeight(300),
            shadowStyle,
            {backgroundColor: 'tomato'},
          ]}>
          <View
            style={[
              getWidthHeight(200),
              shadowStyle,
              {backgroundColor: 'blue'},
            ]}>
            <View
              style={[
                getWidthHeight(100),
                shadowStyle,
                {backgroundColor: 'pink'},
              ]}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default App;
