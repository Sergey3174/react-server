import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
	apiKey: 'AIzaSyDL74wjKDjIhC8cX29r-Ielhul3hGOaJ5g',
	authDomain: 'todosproject-f778a.firebaseapp.com',
	projectId: 'todosproject-f778a',
	storageBucket: 'todosproject-f778a.appspot.com',
	messagingSenderId: '356519857723',
	appId: '1:356519857723:web:2e21b3858644c13857161e',
	databaseURL:
		'https://todosproject-f778a-default-rtdb.europe-west1.firebasedatabase.app/',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
