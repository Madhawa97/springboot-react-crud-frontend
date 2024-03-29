import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";
import { Paper } from "@mui/material";
import { useState } from "react";
import { Button } from "@mui/material";
import { useEffect } from "react";

export default function User() {

    const paperStyle = {padding:'50px 20px', width:'600', margin:'20px auto'}
    // const classes = useStyles();
    const[name, setName] = useState('');
    const[address, setAddress] = useState('');
    const[users, setUsers] = useState([]);

    const handleClick = (e) => {
        e.preventDefault();
        const user = {name, address}

        // console.log(user)

        fetch('http://localhost:8080/user/add', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(()=>{
            console.log("New user was created.")
        });

    }

    useEffect(() => {
        fetch("http://localhost:8080/user/getAll")
        .then(res=>res.json())
        .then((result)=>{
            setUsers(result);
        })
    },[])
    

    return (
        <Container>
            <Paper elevation={3} style={paperStyle}>
                <h1 style={{ color: "blue" }}>
                    <u>Add User</u>
                </h1>
                <Box
                    component="form"
                    sx={{
                        "& > :not(style)": { m: 1 },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        id="outlined-basic"
                        label="User Name"
                        variant="outlined"
                        fullWidth
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        id="outlined-basic"
                        label="User Address"
                        variant="outlined"
                        fullWidth
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <Button variant="contained" onClick={handleClick}>
                        Submit
                    </Button>
                </Box>
                {/* {name}
                {address} */}
            </Paper>
            
            <h1>Users</h1>
            <Paper elevation={3} style={paperStyle}>

                {users.map(user => (
                    <Paper elevation={6} style={{margin:'10px',padding:'15px',textAlign:'left'}} key={user.id}>
                        Id: {user.id} <br />
                        Name: {user.name} <br />
                        Address: {user.address}


                    </Paper>
                ))

                }
            </Paper>
        </Container>
    );
}
