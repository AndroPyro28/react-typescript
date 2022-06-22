import React from 'react';
import PersonList from './PersonList';

interface NameInterface {
    firstname: string,
    lastname: string
}

interface GreetProps {
    name:NameInterface,
    messageCount: number,
    isLoggedIn: Boolean
}

// type props

function Greet(props:GreetProps) {
    const {name, messageCount, isLoggedIn} = props

    const nameList: NameInterface[] = [
        {
            firstname: 'John',
            lastname: 'Doe'
        },
        {
            firstname: 'jean',
            lastname: 'correa',
        },
        {
            firstname: 'lyssa',
            lastname: 'correa',
        }
    ]
    
  return (
    <>
        {
            isLoggedIn ? 
            (
                <div>
                    <h2>Welcome {name.firstname} {name.lastname} You have {messageCount} unread messages!</h2>
                    <PersonList nameList={nameList} />
                </div>
            ) : 
            <h2>Welcome please login first</h2>
        }
    </>
  )
}

export default Greet