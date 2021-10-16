import React from 'react';
import { useState } from 'react';
import { createTheme, TextField, ThemeProvider } from '@mui/material';
import './Note.css';

function QuoteItem(props){

  const handleClick = (e) => {
    props.deleteQuoteCallBack(props.index)
  }

  return (
    <div onClick={handleClick}>
      <p><span>{`${props.index+1}. `}</span>{props.name}</p>
    </div>
  );
}



function QuoteForm(props){

  const [quote, setQuote] = useState("")

  const handleSubmit = (e) => {
    // prevent refreshing page
    e.preventDefault()
    props.addQuoteCallBack(quote)
    // clear the form
    setQuote("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
          id="outlined-multiline-static"
          label="New Quote or Quick Note"
          multiline
          fullWidth
          rows={3}
          defaultValue="Add a new Quote or Quick Note!"
          onChange={e => setQuote(e.target.value)}
          className="submitText"
        />
    </form>
  )
}


const Note = ({lightMode}) => {

    const [quotes, setQuotes] = useState([
        "I am no bird; and no net ensnares me: I am a free human being with an independent will, which I now exert to leave you.   — Charlotte Brontë, Jane Eyre", 
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.   — Charles Dickens, A Tale of Two Cities", 
        "Read one more chapter of The Crucible. :)"])

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: lightMode? '#000':'#fff'
            }, 
            mode: lightMode? 'light':'dark',
        },
        });

    const deleteQuote = (index) => {
        // copy current todos using spread syntax
        const newQuote = [...quotes]
        // remove the todo at the given index
        newQuote.splice(index, 1)
        // update todos in state
        setQuotes(newQuote)
    }

    const addQuote = (quote) => {
        const newQuote = [...quotes, quote]
        setQuotes(newQuote)
    }

    return (
        <div className="noteContainer">
            <h2>Beautiful Quotes & Quick Notes</h2>
            {quotes.map((item, index) => 
            <QuoteItem index={index} name={item} deleteQuoteCallBack={deleteQuote} />)}
            <ThemeProvider theme={darkTheme}>
                <QuoteForm addQuoteCallBack={addQuote}></QuoteForm>
            </ThemeProvider>
        </div>
    )
}

export default Note
