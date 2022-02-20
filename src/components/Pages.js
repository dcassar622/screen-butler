import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { addDoc, deleteDoc, collection, getDocs, getFirestore } from "firebase/firestore"; 


import SearchPage from './SearchPage';
import CurrentlyWatchingPage from './CurrentlyWatchingPage';
import WishlistPage from './WishlistPage';

const Pages = ({ currUser }) => {

    const db = getFirestore();     // invokes firebase firestore
    let [current, setCurrentShows] = useState([]);
    let [wishlist, setWishlist] = useState([]);

    /**** loads the requested page for this user (Current / Wishlist) from the database and sets them to state for rendering ****/
    const getShows = async (page) => {
        try {
            const querySnapshot = await getDocs(collection(db, 'users', currUser.id, page))
            const docs = querySnapshot.docs
            const updatedShows = docs.map(doc => doc.data().show )
            page==='current' ? setCurrentShows(updatedShows) : setWishlist(updatedShows)
        }
        catch (err) {
            alert('Sorry, we seem to be having some trouble loading this page... please try again')
        }
        
    }
  
    /**** Add show to the desired page then reload shows ****/
    const addToPage = async (showToAdd, page) => {

        if (page === 'current') {
            // check if show is already in current shows
            const alreadyAdded = current.some(item => {
                return item.id === showToAdd.id ? true : false
            })

            if (alreadyAdded) {
                alert('This show has already been added to Current')
            }
            else {
                await addDoc(
                    collection(db, 'users', currUser.id, 'current'), { show : showToAdd }
                ).then(() =>  getShows(page))
            }
        }
        else {
            // check if show has already been added to the requested page
            const alreadyAdded = wishlist.some(item => {
                return item.id === showToAdd.id ? true : false
            })

            if (alreadyAdded) {
                alert('This show has already been added to Wishlist')
            }
            // if not already added, add to page
            else {
                await addDoc(
                    collection(db, 'users', currUser.id, 'wishlist'), { show : showToAdd }
                ).then(() =>  getShows(page))
            }
        }
        
    }


    /**** Remove show from current shows collection then reload shows ****/
    const removeFromPage = async (page, showToRemove, event) => {
        const querySnapshot = await getDocs(collection(db, 'users', currUser.id, page))
        const docs = querySnapshot.docs
        docs.forEach(async doc => {
            if (doc.data().show.id === showToRemove.id) { 
                await deleteDoc(doc.ref);
            }
            else {
                console.log('not found')
            }
        } )
        getShows(page);
        
    }

    /**** invoke loading of current shows ****/
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { 
        if (currUser) { 
            getShows('current') 
            getShows('wishlist')
        } 
    }, [currUser])

  
    return (
    <div className='pages-wrapper'>
        <Routes>
            <Route path='/' 
                element={<SearchPage addToPage={addToPage}/>} exact />
            <Route path='current-shows' 
                element={<CurrentlyWatchingPage currShows={current} removeFromPage={removeFromPage}/>} />
            <Route path='wishlist' 
                element={<WishlistPage wishlist={wishlist}  addToPage={addToPage} removeFromPage={removeFromPage}/>} /> 
        </Routes>
    </div>
  );
}

export default Pages;
