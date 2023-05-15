import React, { useState, useEffect} from 'react';
import axios from 'axios';

function Contactlist({backgroundColor = "lightblue", border = "1px black solid"}){

    const [contacts, setContacts] = useState() 
    
    useEffect(() =>{

        async function getlist(){
            console.log("halla")
            try{
                const response = await axios.get('https://cloud-cache.onrender.com/contacts/pass/password')
                console.log(response)
                setContacts(response.data)
            }catch(err){
                console.error(err)
            }
        }

        getlist()

    },[])

    const styles = {
        backgroundColor,
        fontWeight: "bold"
    }

    const td = {
      border: "2px black solid"
    }

    return (
        <>
            {contacts?.length
                ? (
                    <table>
                        <thead>
                            <tr>
                                <th style={styles}>address</th>
                                <th style={styles}>birthday</th>
                                <th style={styles}>firstname</th>
                                <th style={styles}>name</th>
                                <th style={styles}>organization</th>
                                <th style={styles}>email</th>
                                <th style={styles}>telephone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts.map((contact,i)=>
                                    <tr key={i} className='tr'>
                                        <td style={td}>{contact.address}</td>
                                        <td style={td}>{contact.birthday}</td>
                                        <td style={td}>{contact.firstname}</td>
                                        <td style={td}>{contact.name}</td>
                                        <td style={td}>{contact.organization}</td>
                                        <td style={td}>{contact.email}</td>
                                        <td style={td}>{contact.telephone}</td>
                                    </tr>
                            )}
                        </tbody>
                    </table>
                )
                : <p>no matches</p>
            }
            <div>
                <a href="https://cloud-api-vcard-production-34ea.up.railway.app/upload/pass/password" id='left'>Upload</a>
                <a href="https://cloud-api-vcard-production-34ea.up.railway.app/contacts/vcard/pass/password">Download</a>
            </div>
        </>
    )
}

export default Contactlist
