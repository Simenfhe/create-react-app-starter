import React, { useState, useEffect} from 'react';
import axios from 'axios';

function Contactlist({backgroundColor = "lightblue"}){

    const [contacts, setContacts] = useState()
    const [input, setInput] = useState({
        address: '',
        birthday: '',
        firstname: '',
        name: '',
        organization: '',
        email: '',
        telephone: ''
        
    })

    useEffect(() =>{

        async function getlist(){
            console.log("halla")
            try{
                const response = await axios.get('https://cloud-cache.onrender.com/contacts')
                console.log(response)
                setContacts(response.data)
            }catch(err){
                console.error(err)
            }
        }

        getlist()

    },[])

    const handleInputChange = (event) => {
        const {name, value} = event.target
        setInput(prevState => ({ ...prevState, [name] : value}))
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault()

        try{
            await axios.post('https://cloud-api-vcard-production-34ea.up.railway.app/',{
                address: input.address,
                birthday: input.birthday,
                firstname: input.firstname,
                name: input.name,
                organization: input.organization,
                email: input.email,
                telephone: input.telephone
            })
        }catch(err){console.error(err)}
    }

    const styles = {
        backgroundColor,
        fontWeight: "bold"
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
                                        <td>{contact.address}</td>
                                        <td>{contact.birthday}</td>
                                        <td>{contact.firstname}</td>
                                        <td>{contact.name}</td>
                                        <td>{contact.organization}</td>
                                        <td>{contact.email}</td>
                                        <td>{contact.telephone}</td>
                                    </tr>
                            )}
                        </tbody>
                    </table>
                )
                : <p>no matches</p>
            }
            <form onSubmit={handleFormSubmit}>
                <input type="hidden" name="version" value={"3.0"}/>
                <label htmlFor="address">address</label>
                <input type="text" name="address" value={input.address} onChange={handleInputChange}/>
                <label htmlFor="birthday">birthday</label>
                <input type="text" name="birthday" value={input.birthday} onChange={handleInputChange}/>
                <label htmlFor="firstname">firstname</label>
                <input type="text" name="firstname" value={input.firstname} onChange={handleInputChange}/>
                <label htmlFor="name">name</label>
                <input type="text" name="name" value={input.name} onChange={handleInputChange}/>
                <label htmlFor="organization">organization</label>
                <input type="text" name="organization" value={input.organization} onChange={handleInputChange}/>
                <label htmlFor="email">email</label>
                <input type="text" name="email" value={input.email} onChange={handleInputChange}/>
                <label htmlFor="telephone">telephone</label>
                <input type="number" name="telephone" value={input.telephone} onChange={handleInputChange}/>
                <button type='submit'>submit</button>

            </form>
        </>
    )

}


export default Contactlist
