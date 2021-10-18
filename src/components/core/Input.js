import React, { useState }  from 'react';
import { TextField } from '@mui/material';
import { validate } from '../../helpers/validate';

const Input = ({name, label, validation, setFormData}) => {
    const [value, setValue] = useState('');
    const [helper, setHelper] = useState('');
    const [error, setError] = useState(false);
    const [valid, setValid] = useState(false);

    const handleChange = e => {
        setValue(e.target.value)
        validate(e.target.value, validation, setHelper, setError, setValid);
        if(valid) {
            setFormData(prev => ({
                ...prev,
                [e.target.name]: e.target.value
            }));
        }
    }

    return (
        <TextField 
            value={value}
            onChange={e => handleChange(e)}
            helperText={helper}
            error={(error) ? true : false}
            valid={valid}
            name={name}
            label={label}
            required
            fullWidth
            sx={{
                '& input:valid + fieldset': {
                    borderColor: '#00e676',
                    borderWidth: 2,
                },
                '& input + fieldset': {
                    borderColor: '#757575',
                },
                '& input + svg + fieldset': {
                    borderColor: '#757575',
                }
            }}
        />
    );
}

export default Input;
