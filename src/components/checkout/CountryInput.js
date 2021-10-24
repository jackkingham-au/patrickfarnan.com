import React, { useState } from 'react';
import { TextField } from '@mui/material';
import countries from '../../helpers/countries';

const CountrySelect = ({setFormData}) => {
    const [value, setValue] = useState('')
    const [helper, setHelper] = useState('')
    const [error, setError] = useState(false);
    const [valid, setValid] = useState(false);

    const validate = () => {
        if(value === '') {
            setHelper('Select a country from the list.');
            setError(true)
        } else {
            setError(false);
            setHelper('');
            setValid(true);
        }
    }

    const focusOut = e => {
        validate();
        if(value !== '') {
            setFormData(prev => ({
                ...prev,
                [e.target.name]: e.target.value
            }));
        }
    }

    return (
        <TextField
            label="Country"
            fullWidth
            required
            name="country"
            onChange={e => setValue(e.target.value)}
            onBlur={focusOut}
            value={value}
            select
            helperText={helper}
            error={error}
            valid={valid}
            sx={{
                '& select:valid + svg + fieldset': {
                    borderColor: '#00e676',
                    borderWidth: 2,
                },
                '& select + svg + fieldset': {
                    borderColor: '#757575',
                }
            }}
            SelectProps={{native: true}}
        >
            <option value=""></option>
            {
                countries.map(country => (
                    <option key={country.code} value={country.code}>{country.name}</option>
                ))
            }
        </TextField>
    );
}

export default CountrySelect;
