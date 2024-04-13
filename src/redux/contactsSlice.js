import { createSlice } from "@reduxjs/toolkit";
import contactsData from "../contactsData.json"
import { nanoid } from "nanoid";

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: contactsData,
    },
    reducers: {
        addContact: {
            reducer(state, action) {
                state.items.push(action.payload)
            },
            prepare(value) {
                return {
                    payload: {
                        ...value,
                        id: nanoid()
                    }
                }
            }
        },
        deleteContact(state, action) {
            const i = state.items.findIndex((contact) => contact.id === action.payload)
            state.items.splice(i, 1)
        }
    }
})

export const { addContact, deleteContact } = contactsSlice.actions
export const contactsReducer = contactsSlice.reducer