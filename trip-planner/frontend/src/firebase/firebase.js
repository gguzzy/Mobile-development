import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

class Firebase {
  signIn(email, password) {
    return auth().signInWithEmailAndPassword(email, password);
  }

  signUp(email, password) {
    return auth().createUserWithEmailAndPassword(email, password);
  }

  signOut() {
    return auth().signOut();
  }

  addTrip(trip) {
    return firestore().collection('trips').add(trip);
  }

  getTrips() {
    return firestore().collection('trips').get();
  }

  shareTrip() {
    console.log('Trip shared');
  }

  sendFriendRequest() {
    console.log('Friend request sent');
  }
}

export default new Firebase();
