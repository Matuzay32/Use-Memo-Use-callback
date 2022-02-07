import React, { memo, useEffect, useState } from 'react';
import Item from './Item';






const List = memo(({users , handdleDelete}) => {


useEffect(() => {


    
    return () => {
    }
}, []);




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
    


return (
    
    <ul>

        {users.map((user)=><Item user={user} key={user.id}  handdleDelete={handdleDelete}/>)}



    </ul>
    );
});


export default List;