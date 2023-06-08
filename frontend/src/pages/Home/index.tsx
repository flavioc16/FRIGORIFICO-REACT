import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import api from "../../services/api";

interface UserRequest{
    id: string;
    name: string;
    username: string;
}

function Home(){
    const [users, setUsers] = useState<UserRequest[]>();

    useEffect(()=>{
        async function loadUsers() {
            const response = await api.get('/users',{
                headers: {
                    Authorization : `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZmxhdmluIiwidXNlcm5hbWUiOiJmbGF2aW4iLCJpYXQiOjE2ODYxMzkzMjgsImV4cCI6MTY4ODczMTMyOCwic3ViIjoiZWIzZjI3MjctMWI3MC00MzEwLTk3YzctNTM4NGFlYmFjMGUzIn0.JI0TQkPV2m8Hmnvzfx4cf7vi-LK1k-keOKexaVat9Jw`
                }
            })
            setUsers(response.data);
        }

        loadUsers()
    }, [users])

    return(
        <div>
            <h1>Home page</h1>
            {users?.map((user)=>{
                return(
                    <article key={user.id}>
                        <strong>{user.name}</strong>
                        <span>{user.username}</span>
                    </article>
                )
            })}
            <Link to="/session">Login</Link>
        </div>
    )
}

export default Home;