import React, { useState, useEffect } from 'react';
import axios from 'axios';
// const URL = 'https://jsonplaceholder.typicode.com/users';
const Convert = ({language, text}) => {
    const [translated, setTranslated] = useState('');
    const [debouncedText, setDebouncedtext] = useState(text);

    // const [users, setUsers] = useState([]);

    // useEffect( ()=> {
    //     console.log('run');
    //     const helper = async () => {
    //        const { data } = await axios.get(URL )
    //         setUsers(data);
    //     }
    //     helper();
    // }, []);

    // const renderedUsers = users.map((user) => {
    //     return <li key={user.id}>{user.name}</li>
    // })

    useEffect(()=> {
      const timerId = setTimeout(() => {
        setDebouncedtext(text);
      }, 500);

      //Cleanup function for clearing previous timer set by setTimeout() function.
      return () => {
        clearTimeout(timerId)
      };

    }, [text]);

    useEffect(()=> {
        const doTranslation = async () => {
            const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    q: debouncedText,
                    target: language.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            });
            setTranslated(data.data.translations[0].translatedText)
        };

        //Helper(doTranslation()) function is called
        doTranslation();

    },[language, debouncedText]);

    return(
        <div>
            <h1>{translated}</h1>
            {/* <h1>{renderedUsers}</h1> */}
        </div>
    );
}

export default Convert;