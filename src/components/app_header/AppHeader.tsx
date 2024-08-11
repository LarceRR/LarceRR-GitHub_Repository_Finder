import './AppHeader.scss'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { useDispatch } from 'react-redux';
import { setSearchInput } from '../../features/githubRepos/githubReposSlice';
import { useState } from 'react';

const AppHeader = () => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const handleSearchInputChanges = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>):void => {
      setInput(event.target.value)
    }

    const handleSubmitButtonClick = ():void => {
      dispatch(setSearchInput(input))
    }

    return (
        <div className="app-wrapper__header">
        <TextField id="outlined-basic" placeholder="Введите поисковый запрос" variant="outlined"
                   onChange={handleSearchInputChanges}
                   sx={{
                    "& .MuiInputBase-root": {
                      height: '42px',
                      minWidth: '912px',
                      background: '#F2F2F2',
                      border: 'none',
                      fontWeight: '400',
                      fontStyle: 'italic',
                      lineHeight: '24px'
                    },
                    "& .MuiFormLabel-root": {
                      top: '-6px'
                    },
                    "& .MuiFormLabel-root.Mui-focused": {
                      color: 'white'
                    }
                   }}/>
        <Button variant="contained"
                style={{
                    background: '#2196F3',
                    padding: '8px 22px 8px 22px'
                }}
                onClick={handleSubmitButtonClick}
        >Искать</Button>
      </div>
    );
};

export default AppHeader;