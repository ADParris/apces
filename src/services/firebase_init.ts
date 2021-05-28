import firebase from 'firebase/app';

const config = {
	apiKey: 'AIzaSyA6wWkeMDAd2haAfl7Ufp2TJxIv_2Y1H1Y',
	authDomain: 'apces-e2b28.firebaseapp.com',
	projectId: 'apces-e2b28',
	storageBucket: 'apces-e2b28.appspot.com',
	messagingSenderId: '268680430733',
	appId: '1:268680430733:web:b5c3bb4458c352ab05cec4',
	measurementId: 'G-2493V9H71J',
};

firebase.initializeApp(config);

export { firebase };
