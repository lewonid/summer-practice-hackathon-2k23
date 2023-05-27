import React, { useState } from 'react'

import { Button } from '@mui/material'

import style from '../assets/AddNewMfaForm.module.css'

const AddNewMfaForm = ({ handleInput }) => {

    const [input, setInput] = useState();

    const handleSubmit = () => {
        if (input) {
            handleInput(input);
        }
        else {
            alert('Invalid input.');
        }
    }

    // console.log(input)

    return (
        <div className={style.AddNewMfaForm}>
            <form>
                <h2>Add your new authenticator</h2>
                <label>
                    <input
                        onChange={e => setInput(e.target.value)}
                        placeholder='ex. Facebook' type="text"
                        onKeyDown={e => {
                            if (e.key === 'Enter') {
                                e.preventDefault();
                                handleSubmit();
                            }
                        }
                        }
                    />

                </label>
                <Button
                    onClick={handleSubmit}
                    onKeyDown={e => {
                        if (e.key === 'Enter') {
                            e.preventDefault();
                            handleSubmit();
                        }
                    }
                    }
                    // type="submit"
                    value="Submit"
                    variant="contained"
                >
                    Submit
                </Button>
            </form>
        </div>
    )
}

export default AddNewMfaForm