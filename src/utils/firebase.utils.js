import { initializeApp } from "firebase/app";
import {
	addDoc,
	doc,
	collection,
	getDoc,
	setDoc,
	get,
	getFirestore,
	query,
	getDocs,
	deleteDoc

} from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
	apiKey: "AIzaSyBjngqRe8d4Dc_D4-mC554ZRoSWr1pxKYw",
	authDomain: "galery-bcaa.firebaseapp.com",
	databaseURL: "https://galery-bcaa-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "galery-bcaa",
	storageBucket: "galery-bcaa.appspot.com",
	messagingSenderId: "956536225499",
	appId: "1:956536225499:web:b16e4f08848473bb2596fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export const addPosts = async (title, subtitle, img, text, id) => {
	if (title === '' || subtitle === '' || img === '' || text === '') return
	try {
		const docRef = await addDoc(collection(db, 'posts'), {
			title,
			subtitle,
			img,
			text,
			id
		})
		console.log('Doc', docRef.id)
	} catch (e) {
		console.error('Error: ', e)
	}
}

/* export const getPosts = async () => {
	const q = query(collection(db, 'posts'))
	let posts = []
	const qSnap = await getDocs(q)
	qSnap.forEach((doc) => {
		posts = [...posts, doc.data()]
	})
	return posts
} */
export const getPosts = async () => {
	const postsCollection = collection(db, "posts");
	const postsSnapshot = await getDocs(postsCollection);
	const posts = [];

	postsSnapshot.forEach((postDoc) => {
		const postData = postDoc.data();
		const postId = postDoc.id; // отримуємо id документа
		posts.push({ ...postData, id: postId });
	});

	return posts;
};

export const deletePosts = async (postId) => {
	try {
	  await deleteDoc(doc(db, "posts", postId));
	  console.log(`Документ з id ${postId} успішно видалено`);
	} catch (error) {
	  console.error("Помилка видалення документа:", error);
	}
  };