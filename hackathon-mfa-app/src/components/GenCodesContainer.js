import React, { useState, useEffect } from 'react'

import GeneratedCode from './GeneratedCode'
import AddNewMfaForm from './AddNewMfaForm'

import { fetchData } from '../utils/fetchData'

import { MdPlaylistAdd } from 'react-icons/md'
import { Button } from '@mui/material'

import style from '../assets/GenCodesContainer.module.css'

const GenCodesContainer = () => {

    const [showForm, setShowForm] = useState(false);
    const [mfaData, setMfaData] = useState([]);
    const [localStorageValues, setLocalStorageValues] = useState([]);
    const [fetchedData, setFetchedData] = useState();


    // const mfaData = ['Facebook', 'Instagram'];

    // console.log(typeof mfaData)

    const setShowFormTrue = () => {
        setShowForm(!showForm);
    }

    // getting the input from AddNewMfaForm component
    // also saving in local storage the input.
    const handleInput = (input) => {
        // mfaData.push(input);

        setMfaData(oldData => [...oldData, input]);
        localStorage.setItem(input, input);
        // console.log(mfaData);
        setShowForm(false);
    };

    // remove element function from mfa list
    const removeElement = (elementToRemove) => {
        const updatedArray = mfaData.filter((element) => element !== elementToRemove);
        setMfaData(updatedArray);
    };

    // calling the remove function using a callback function from GeneratedCode component to delete only the
    // clicked one. 
    const handleDelete = (mfa) => {
        removeElement(mfa);
        localStorage.removeItem(mfa);
    }

    // useEffect(() => {
    const getDataByApi = async () => {
        const fetchedData = await fetchData('https://swapi.dev/api/people/');
        setFetchedData(fetchedData.results);
        console.log(fetchedData);

    }
    // getDataByApi();
    // }, [])


    // get all the elements from localStorage
    useEffect(() => {
        const getAllLocalStorageValues = () => {
            const values = [];
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                const value = localStorage.getItem(key);
                values.push(value);
            }
            return values;
        };

        // update the state with localStorage values
        const localStorageValues = getAllLocalStorageValues();
        setLocalStorageValues(localStorageValues);
    }, []);

    console.log(localStorageValues);

    return (
        <div className={style.GenCodesContainer}>
            {
                fetchedData && fetchedData.map((mfa) =>
                    <GeneratedCode key={mfa.name} mfa={mfa.name} handleDelete={handleDelete} />
                )
            }
            {   // if mfaData exists then render it.
                mfaData && mfaData.map((mfa) =>
                    <GeneratedCode key={mfa} mfa={mfa} handleDelete={handleDelete} />
                )
            }
            {
                // here it renders the data from localStorage
                localStorageValues.map((mfa) =>
                    <GeneratedCode key={mfa} mfa={mfa} handleDelete={handleDelete} />
                )
            }
            <MdPlaylistAdd // add Button, triggers the form
                id={style.AddButton}
                onClick={setShowFormTrue}
            />

            {   // the form
                showForm && <AddNewMfaForm handleInput={handleInput} />
            }
            <h2>Add data by fetching random names from an API:</h2>
            <Button onClick={getDataByApi} variant="contained">fetch data by api</Button>
            {/* deleted arrow function after push */}
        </div>
    )
}

export default GenCodesContainer