https://maximyarmoliuk.github.io/phonebook-react-hooks/

Implemented by:
  Registration page "/ register"
  Login page "/ login"
  Main page "/"
  Contacts page "/ contacts"
 
The main thing:
 The work is implemented on React hooks and React redux.
 For styling, the material-UI framework was used.
 For animation used react-transition-group.
 The sweetalert2 library was used to create alerts.

Details:
 Сan’t gets to the contact page without authorization.
 Hidden are the registration and authorization pages for an authorized user.
 Redirect to the main page when logout.
 On the pages of registration, authorization, and contacts, client validation has been performed (check for mandatory fields).
 A warning about the impossibility of adding a contact when there is another with the same name is implemented.
 User data is stored in localStorage.
 On the contact page, the filtering of contacts by name is implemented.
 Implemented confirmation of contact deletion.
 Added animation of showing/hiding filter and contacts.

Launch of the project:
 npm install
 npm run dev / npm run build
