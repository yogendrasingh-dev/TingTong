import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {USER_STATE_CHANGE} from '../types';

export const getCurrentUserData = () => dispatch => {
  firestore()
    .collection('user')
    .doc(auth().currentUser.uid)
    .onSnapshot(res => {
      if (res.exists) {
        return dispatch({
          type: USER_STATE_CHANGE,
          currentUser: res.data(),
          loading: false,
          splashLoading: false,
        });
      }
    });
};

export const userAuthStateListener = () => dispatch => {
  auth().onAuthStateChanged(user => {
    if (user) {
      dispatch(getCurrentUserData());
    } else {
      dispatch({
        type: USER_STATE_CHANGE,
        currentUser: null,
        loading: true,
        splashLoading: false,
      });
    }
  });
};

export const login = (email, password) => dispatch =>
  new Promise((resolve, reject) => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        resolve();
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          reject('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          reject('That email address is invalid!');
        }

        reject(error);
      });
  });

export const register = (email, password) => dispatch =>
  new Promise((resolve, reject) => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        resolve();
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          reject('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          reject('That email address is invalid!');
        }

        reject(error);
      });
  });
