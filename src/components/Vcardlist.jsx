import React, { useState, useEffect} from 'react';


function Contactlist(){

    const [contacts, setContacts] = useState()


    useEffect(() =>{

        async function getlist(){

            try{
                const response = await axios.get('https://cloud-cache.onrender.com/contacts')
                console.log(response)
                setContacts(response.data)
            }catch(err){
                console.error(err)
            }
        }



    },[])

    return (
        <>
            {contacts?.lenght
                ? (
                    <ul>
                        {contacts.map((contact,i)=>
                            <tr key={i}>
                                <li>{contact}</li>
                            </tr>
                        
                        
                        )}
                    </ul>

                )
                : <p> no matches</p>
            
            
            }
        </>
    )

}

export default Contactlist
