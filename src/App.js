import React from 'react';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import Modal from './components/Modal/Modal';
import Select from './components/Select/Select';

function App() {
  return (
    <>
      <Button />
      <Input color={'#55efc4'} />
      <Modal color={'#55efc4'} />
      <Select />
    </>
  )
}

export default App