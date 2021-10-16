import React from 'react';
import './Header.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import categories from '../../data/catagory'


const Header = ({ setCategory, category, setWord, word, lightMode}) => {

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: lightMode? '#000':'#fff'
            }, 
            mode: lightMode? 'light':'dark',
        },
      });

      const handleChange = (language) => {
        setCategory(language);
        setWord("");
      };

    return (
        <div className='header'>
            <span className='title'>{word? word: "Literature Bird"}</span>
            <div className='inputs'> 
                <ThemeProvider theme={darkTheme}>

                    <TextField 
                            className="search"
                            label="Search a word" 
                            variant="standard" 
                            value={word}
                            onChange={(e)=>setWord(e.target.value)}/>
                            
                    <FormControl fullWidth className="select">
                        <InputLabel id="demo-simple-select-label">Language</InputLabel>
                            <Select
                                labelId="select-language-label"
                                id="select-language"
                                label="Language"
                                value={category}
                                onChange={(e)=>handleChange(e.target.value)}
                            >
                                {
                                    categories.map((option)=>
                                        <MenuItem key={option.label} value={option.label}>
                                            {option.value}
                                        </MenuItem>)
                                }
                            </Select>
                    </FormControl>
                        
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Header
