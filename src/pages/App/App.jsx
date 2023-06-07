import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainScreanProfile from '../../components/mainScreenProfile/mainScreanProfile';
import UserProfileScreean from '../../components/userProfileScreean/UserProfileScreean';
import MainLibrary from '../../components/userLibrary/mainLibrary/MainLibrary';

const App = () => {

    return(
        <BrowserRouter>
            <Switch>
                <Route path='/libary'>
                    <MainLibrary/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App;