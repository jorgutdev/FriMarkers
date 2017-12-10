import { call, put } from 'redux-saga/effects';
import { path } from 'ramda';
import MetadataActions from '../Redux/MetadataRedux';
import firebase from 'react-native-firebase';

export function* getMetadata() {
  console.log('getMetadata* init');

  const dataObject = yield call(getData);

  const result = {
    videoBackground: dataObject.videoBackground,
  };

  yield put(MetadataActions.success(result));
  console.log('getMetadata* finish');
}
function getData() {
  return firebase
    .database()
    .ref('metadata')
    .once('value')
    .then(snap => snap.val());
}
