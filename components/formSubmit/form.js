import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useState } from "react";
import { useMutation } from '@apollo/client';
import { POST_SUBSCRIBE } from '@/schema';

function Form() {
    const [email, setEmail] = useState([]);
    const [response, setResponse] = useState([]);
    const [ subscribe ] = useMutation(POST_SUBSCRIBE);

    const handleSubmit = async () => {
        const responseData = await subscribe(
            {
                variables: {
                    email: email
                }
            }
        )
        
        setResponse(responseData.data.subscribe.status)
        setEmail('')
    };

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px'}}>
            <Box noValidate autoComplete="off">
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                onClick={handleSubmit}
              >
                    Subscribe
              </Button>
            {
                response && (
                    <Typography variant="p" component="p" gutterBottom style={
                        response.response === 'Success' ? {
                            color: 'green'
                        } : {
                            color: 'red'
                        }
                    }>
                        { response.message }
                    </Typography>
                )
            }
            </Box>
        </div>
    );
}

export default Form;