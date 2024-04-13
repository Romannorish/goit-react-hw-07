import css from "./App.module.css"
import ContactList from "./ContactList/ContactList"
import SearchBar from "./SearchBox/SearchBox"
import ContactForm from "./ContactForm/ContactForm"

function App() {
  return (
    <>
      <div className={css.containerApp}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm />
        <SearchBar />
        <ContactList />
      </div>
    </>
  )
}

export default App
