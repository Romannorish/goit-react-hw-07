import {selectContacts, selectNameFilter} from "../../selectors/selectors"
import Contact from "./Contact/Contact"
import css from "./ContactList.module.css"
import {useSelector} from "react-redux"
export default function ContactList() {
  const contacts = useSelector(selectContacts)
  const filter = useSelector(selectNameFilter)
  const searchContact = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  )
  return (
    <div className={css.listBox}>
      <ul className={css.listContact}>
        {searchContact.map((contact) => (
          <li key={contact.id} className={css.item}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </div>
  )
}
