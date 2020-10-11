import React, { useState, useEffect } from 'react';
import firebase from './FireBase';

import SentimentButton from './SentimentButton';
import BarChart from './BarChart';

function Poll(props) {
  const [data, setData] = useState([]);
  const db = firebase.firestore();

  const onClick = async (e) => {
    // Get current value
    let currData = data.filter(function (option) {
      return option.name == e.target.name
    })[0].count;

    // Set new value to current + 1
    db.collection('poll').doc(e.target.name).set({
      count: currData + 1
    })
      .catch(function (error) {
        console.error('Error writing document: ', error);
      });
  }

  useEffect(() => {
    async function getCollection(collection) {
      const snapshot = await db.collection(collection).get();
      let data = snapshot.docs.map(doc => doc.data());
      let result = pollOptions.map((option, index) => ({ ...option, count: data[index]['count'] }));
      console.log('getCollection');
      setData(result);
    }
    getCollection('poll');
  }, []);


  useEffect(() => {
    if (!db.collection('poll')) return;

    const unsubscribe = db.collection('poll').onSnapshot(function (snapshot) {
      // let i = 0;
      // querySnapshot.forEach(function (doc) {
      //   pollOptions[i]['count'] = doc.data().count;
      //   i++;
      // });

      let data = snapshot.docs.map(doc => doc.data());
      let result = pollOptions.map((option, index) => ({ ...option, count: data[index]['count'] }));

      console.log('snapshot', result);
    });
    return () => unsubscribe();
  }, [db.collection('poll')]);

  // Buttons
  const pollOptions = [
    { name: 'sentiment1' },
    { name: 'sentiment2' },
    { name: 'sentiment3' },
    { name: 'sentiment4' }
  ]
  const buttons = pollOptions.map((option) => <SentimentButton text={option.name} onClick={onClick} />)

  return (
    <>
      {buttons}
      <BarChart data={data} />
    </>
  )
}

export default Poll;