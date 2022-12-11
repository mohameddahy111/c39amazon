import React, { useEffect, useState } from 'react';
import { Stor } from '../../context/DataContext';

export default function AutoComplet() {
  const {
    data,
    autoCompletListOpen,
    setautoCompletListOpen,
    keyWord,
    setKeyWord,
  } = Stor();
  const [searchList, setSe] = useState([]);
  const search = () => {
    const newList = data.filter(x =>
      x.title.toLowerCase().includes(keyWord.toLowerCase())
    );
    return setSe(newList);
  };
  useEffect(() => {
    search();
    setautoCompletListOpen(true);
  }, [keyWord]);
  console.log(data);
  const changeInputValue = text => {
    setKeyWord(text);
    setSe([]);
    setautoCompletListOpen(false);
  };
  return (
    <>
      {autoCompletListOpen && (
        <div className=' w-[600] bg-white absolute top-20 px-4 p-2 shadow-xl rounded-md left-1/3'>
          <ul
            onMouseLeave={() => setautoCompletListOpen(false)}
            className=' h-[300px] w-[300px] overflow-y-auto'
          >
            {searchList.length === 0 && <p>this product not found</p>}
            {searchList.map(x => (
              <li
                key={x.id}
                className='my-1 cursor-pointer '
                onClick={e => changeInputValue(e.target.innerText)}
              >
                {x.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
