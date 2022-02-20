import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";
import { Paper } from "@mui/material";
import { useState } from "react";
import { Button } from "@mui/material";

export default function User() {

    const paperStyle = {padding:'50px 20px', width:'600', margin:'20px auto'}
    // const classes = useStyles();
    const[name, setName] = useState('');
    const[address, setAddress] = useState('');

    const handleClick = (e) => {
        e.preventDefault();
        const user = {name, address}

        console.log(user)
    }

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
                    <Button variant="contained" onClick={handleClick}>Submit</Button>
                </Box>
                {/* {name}
                {address} */}
            </Paper>
        </Container>
    );
}
