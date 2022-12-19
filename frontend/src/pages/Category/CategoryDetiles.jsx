import React from 'react';
import { useParams } from 'react-router-dom';
import ShowWhithCard from '../../components/ShowWhithCard';
import {  UseSingleCategory } from '../../hooks/UseApi';

export default function CategoryDetiles() {
  const params = useParams()
  const { categorie } = UseSingleCategory(params.category);
  return (
    <>
    <ShowWhithCard data={categorie} title={params.category}/>
    
    </>
  );
}
