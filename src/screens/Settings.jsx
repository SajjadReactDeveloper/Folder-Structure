import {
  StyleSheet,
  Text,
  View,
  Switch,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import colors from '../constants/colors';
import fontFamily from '../constants/fontFamily';
import LinearGradient from 'react-native-linear-gradient';

const Settings = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style = {{ marginTop: 60 }}>
      <View style={styles.incognito}>
        <Text style={styles.incognitoText}>Incognito Mode</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: 337,
          right: 2,
        }}>
        <Text style={styles.paragraph}>
          Enable incongnito mode so no one see you unless you want them to.Only
          people you swipe right on will be able to view your profile
        </Text>
      </View>
      <View>
        <Text style={styles.locationText}>Location</Text>
        <View style={styles.incognito2}>
          <Text style={styles.incognitoText}>Current Location</Text>
          <Text style={styles.locationTextSecond}>Bronx, US</Text>
        </View>
      </View>

      <View>
        <LinearGradient
          colors={[colors.card.colorOne, colors.card.colorTwo]}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.linearGradient}>
          <TouchableOpacity style={styles.travelBtn}>
            <Text>Travel</Text>
            <Image source={require('../../assets/Vector.png')} />
          </TouchableOpacity>
        </LinearGradient>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: 337,
          right: 2,
        }}>
        <Text style={styles.paragraph}>
          Change your location to connect with people in other locations.
        </Text>
      </View>

      <View style = {{ marginTop: -40 }}>
      <View style={styles.incognito1}>
        <Text style={styles.incognitoText}>Notification Settings</Text>
        <Image source={require('../../assets/arrow.png')} />
      </View>
      <View style={styles.incognito1}>
        <Text style={styles.incognitoText}>Security & Privacy</Text>
        <Image source={require('../../assets/arrow.png')} />
      </View>
      <View style={styles.incognito1}>
        <Text style={styles.incognitoText}>Contact & FAQ</Text>
        <Image source={require('../../assets/arrow.png')} />
      </View>
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  incognito: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    height: 45,
    backgroundColor: '#fff',
    borderRadius: 50,
    marginVertical: 30,
    marginHorizontal: 10,
  },
  incognitoText: {
    fontSize: 16,
    opacity: 0.5,
    color: colors.text,
    fontFamily: fontFamily.bold,
    left: 22,
  },
  paragraph: {
    fontSize: 15,
    fontFamily: fontFamily.secondary,
    color: colors.text,
    opacity: 0.6,
    lineHeight: 24,
    width: 337,
    height: 96,
    left: 27,
    letterSpacing: 0.6,
  },
  locationText: {
    fontSize: 16,
    opacity: 0.7,
    fontFamily: fontFamily.black,
    color: colors.text,
    left: 35,
    marginTop: 15,
  },
  locationTextSecond: {
    fontSize: 16,
    fontFamily: fontFamily.bold,
    color: colors.text,
    opacity: 0.5,
    marginRight: 8,
  },
  travelBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  linearGradient: {
    padding: 15,
    borderRadius: 50,
    marginHorizontal: 10,
    marginBottom: 20,
  },

  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  incognito1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    height: 45,
    backgroundColor: '#fff',
    borderRadius: 50,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  incognito2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    height: 45,
    backgroundColor: '#fff',
    borderRadius: 50,
    marginVertical: 10,
    marginHorizontal: 10,
    marginBottom: 30
  },
});
