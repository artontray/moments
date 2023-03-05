import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();

/*
Now, to have code run when a component mounts,  we have to make use of the useEffect hook  
and pass it an empty dependency array. Now  we can call the handleMount function inside.
As you can probably imagine, different pieces  of UI will be displayed based on whether the  
user browsing our site is logged in or not.  This means that user state and data will be  
used all over the application. It would  be a real pain to have to pass both the  
currentUser variable and its setter function  manually as props down the component tree.
First, we’ll have to create and  export the CurrentUserContext by  
calling the createContext function,  which again, we will auto import.  
We’ll create an additional one for  the setCurrentUser function, too.
So, every time we call the createContext function,  
a new Context Object is created. The Context  Object has quite a lot going on under the hood,  
*/

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  /*
  Let’s first go to the App.js file and get  started by creating our useState hook.  
We’ll use it to persist the state of the  currently logged in user. We’ll set the initial  
value to null and destructure the returned  values as currentUser and setCurrentUser.
  */ 

  const handleMount = async () => {
    /*
    Now, we should make a network request to check  who the user is, based on their credentials in  
the cookie. To do that, we have to make a GET  request to the dj-rest-auth/user/ endpoint of our API.
As is usually the case with network requests,  we’ll have to make it when the component mounts.
Let’s first define the handleMount async function.  
Inside a try-catch block, we’ll make a GET request  to the user endpoint. We’ll destructure the data  
property in place, and we’ll set the currentUser  to data, by calling setCurrentUser with it. 
Just in case there is an error, inside the catch  block, I’ll log the error to the console as well.
    */
    try {
      const { data } = await axios.get("dj-rest-auth/user/");
      setCurrentUser(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleMount();
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <SetCurrentUserContext.Provider value={setCurrentUser}>
        {/*
        First, Every Context Object comes with  a Provider component that allows child  
components to subscribe to context changes.
A Provider accepts a value prop to be passed to  child components that need to consume that value.  
In our case, the values being  passed will be the currentUser,  
and setCurrentUser, which is the  function to update the currentUser value.
For now, all you need  to understand is that these two Context Object  
Providers will allow both the currentUser value  and the function to update it, to be available to  
every child component in our application.
  */}
        <div className={styles.App}>
          <NavBar />
          <Container className={styles.Main}>
            <Switch>
              <Route exact path="/" render={() => <h1>Home page</h1>} />
              <Route exact path="/signin" render={() => <SignInForm />} />
              <Route exact path="/signup" render={() => <SignUpForm />} />
              <Route render={() => <p>Page not found!</p>} />
            </Switch>
          </Container>
        </div>
      </SetCurrentUserContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;