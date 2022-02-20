import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";
import { Paper } from "@mui/material";

export default function User() {

    const paperStyle = {padding:'50px 20px', width:'600', margin:'20px auto'}
    // const classes = useStyles();

    return (
        <Container>
            <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"blue"}}><u>Add User</u></h1>
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
                    />
                    <TextField
                        id="outlined-basic"
                        label="User Address"
                        variant="outlined"
                        fullWidth
                    />
                </Box>
            </Paper>
        </Container>
    );
}
