import React from 'react';
import './Definitions.css';

const Definitions = ({word,category,meanings,lightMode}) => {
    return (
        
        <div className="meanings">

            {
                meanings[0] && word && category==="en" && (
                    <audio 
                        src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio} 
                        style={{ backgroundColor: '#02162a', borderRadius: 10}}
                        controls
                    >
                        Your Browser doesn't support audio element.
                    </audio>
                )
            }


            {word === "" ? (
                <span className="subTitle">Start by typing a word in search</span>
                ) : (
                        meanings.map((mean) => 
                            mean.meanings.map((item) => 
                                item.definitions.map((def) => 
                                    <div className='singleMean' 
                                        style={{
                                            backgroundColor: lightMode? '#ddd':'#02162a', 
                                            color: lightMode? '#111':'#eee'}}>
                                        <b>{def.definition}</b>
                                        <hr style={{ backgroundColor: lightMode? 'white':'black', width: '100%'}}/>
                                        {
                                            def.example && (
                                                <span>
                                                    <b>Example: </b>{def.example}
                                                </span>
                                            )
                                        }
                                        {
                                            def.synonyms && (
                                                <span>
                                                    <b>Synonyms: </b>
                                                    {def.synonyms.map((s) => `${s}, `)}
                                                </span>
                                            )
                                        }
                                    </div>
                                )
                            )
                        )
                )
            }
        </div>
    );
};

export default Definitions
