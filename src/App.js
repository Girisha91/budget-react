import './App.css';
import { Container } from 'semantic-ui-react';
import MainHeader from './components/MainHeader';
import DisplayBalance from './components/DisplayBalance';
import NewEntryForm from './components/NewEntryForm';
import DB from './components/DB';
import EntryLine from './components/EntryLine';
function App() {
  return (
    <Container>
      <MainHeader title='Budget' type='h1' />
      <DisplayBalance size='small' label='Your Balance:' value='2,550.53' />
      <DB />
      <MainHeader title='History' type='h3' />

      <EntryLine description='Something' value='$10.00' isExpense />
      <EntryLine description='Something more' value='$100.00' />
      <EntryLine description='Something less' value='$20.00' isExpense />

      <MainHeader title='Add Transaction' type='h3' />
      <NewEntryForm />
    </Container>
  );
}

export default App;
