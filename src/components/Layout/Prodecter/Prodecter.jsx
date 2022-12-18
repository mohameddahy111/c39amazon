import { useSnackbar } from 'notistack';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Stor } from '../../../context/DataContext';

export default function Prodecter({ children }) {
  const { closeSnackbar, enqueueSnackbar } = useSnackbar();

  const { userInfo } = Stor();
  const navigate = useNavigate();
  useEffect(() => {
    closeSnackbar()
    if (!userInfo) {
      enqueueSnackbar('you must login in first ', { variant: 'error' });
      navigate('/login');
    }
  }, [userInfo]);

  return <>{children}</>;
}
