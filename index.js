import * as contactService from "./contacts.js";
import yargs from "yargs";


const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contactService.getAllContacts();
      return console.log(allContacts);

    case "get":
      const contactById = await contactService.getContactById(id);
      return console.log(contactById);
    case "add":
      const addContactNew = await contactService.addContact({
        name,
        email,
        phone,
      });
      return console.log(addContactNew);
      case "remove":
        const removeById = await contactService.removeContact(id);
        return console.log(removeById);
    default:
      console.warn('Unknow action type!');
  }
};
const { argv } = yargs(process.argv.slice(2));
invokeAction(argv);
