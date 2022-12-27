import { AppRegistration, Login } from '@mui/icons-material';
import { Button, List, ListItem, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Stor } from '../../context/DataContext';
import UserAvatar from '../Layout/UserAvatar/UserAvatar';

export default function UserInfo() {
  const navigate = useNavigate();
  const { userInfo } = Stor();
  const [loginList, setLoginList] = useState(false);
  const open = () => {
    setLoginList(!loginList);
  };
  const loginfun = info => {
    if (info === 'LOG IN') {
      navigate('/login');
      setLoginList(false);
    } else {
      navigate('/register');
      setLoginList(false);
    }
  };

  return (
    <>
      {userInfo ? (
        <UserAvatar />
      ) : (
        <div
          className=' cursor-pointer  text-white relative  ml-2  leading-3  py-3 p-2 hover:shadow-sm hover:shadow-[#208080] '
          onClick={() => {
            open();
          }}
        >
          <span className=' text-sm text-gray-400 '>Hello,sign in </span>{' '}
          <div className=''>
            <span className=' font-semibold '>Account & Lists</span>
            <i className='fa-solid fa-angle-down text-xs ml-1   '></i>
          </div>
          {loginList && (
            <div className=' absolute top-[100%] ' onMouseLeave={()=>{setLoginList(false)} }>
              <List className=' bg-white text-black rounded-md shadow-lg z-20'>
                <ListItem>
                  <Button
                    startIcon={<Login />}
                    onClick={e => {
                      loginfun(e.target.innerText);
                    }}
                  >
                    Log in
                  </Button>
                </ListItem>
                <ListItem>
                  <Button
                    startIcon={<AppRegistration />}
                    onClick={e => {
                      loginfun(e.target.innerText);
                    }}
                  >
                    Register
                  </Button>
                </ListItem>
              </List>
            </div>
          )}
        </div>
      )}
    </>
  );
}
