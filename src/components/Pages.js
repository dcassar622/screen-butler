import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { addDoc, deleteDoc, collection, getDocs, getFirestore, updateDoc } from "firebase/firestore"; 


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
            const updatedShows = docs.map(doc => doc.data() )
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
            // if not, add to database
                await addDoc(
                    collection(db, 'users', currUser.id, 'current'), { show : showToAdd, season : 1, episode : 1 }
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
    const removeFromPage = async (page, showToRemove) => {
        const querySnapshot = await getDocs(collection(db, 'users', currUser.id, page))
        const docs = querySnapshot.docs
        docs.forEach(async doc => {
            if (doc.data().show.id === showToRemove.show.id) { 
                await deleteDoc(doc.ref);
            }
            else {
                console.log('looking for the right document to remove from database')
            }
        } )
        getShows(page);
    }

   
    /****  Track and write updates made to the curent show (season and episode number) 
           Operand can be + or - and feature is either 'season' or 'episode'  ***/

    const updateShowProgress = async (show, operand, feature) => {
        // get all of the user's current shows
        const querySnapshot = await getDocs(collection(db, 'users', currUser.id, 'current'))
        const docs = querySnapshot.docs
        // match the current show being updated to the docs in the database
        docs.forEach(async doc => {
            const docShowData = doc.data();
            // when match is found, make the necessary updates to that show's database document
            if (docShowData.show.id === show.show.id) {
                if (feature === 'season') {
                    const currValue = docShowData.season;
                    await operand === '+' ? 
                    updateDoc(doc.ref, {season : currValue + 1}) : updateDoc(doc.ref, {season : currValue - 1})
                }
                else {
                    const currValue = docShowData.episode;
                    await operand === '+' ? 
                    updateDoc(doc.ref, {episode : currValue + 1}) : updateDoc(doc.ref, {episode : currValue - 1})
                }
            }
        })
        // reload the current shows page
        getShows('current')

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
                element={<CurrentlyWatchingPage 
                currUser={currUser}
                currShows={current} 
                removeFromPage={removeFromPage}
                updateShowProgress={updateShowProgress} />}
             />
            <Route path='wishlist' 
                element={<WishlistPage wishlist={wishlist}  addToPage={addToPage} removeFromPage={removeFromPage}/>} /> 
        </Routes>
    </div>
  );
}

export default Pages;
