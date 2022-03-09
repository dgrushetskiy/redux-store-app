import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Provider} from "react-redux";
import App from './componets/app/app';


export const Root = ({store}) => (
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route path=":filter" element={<App/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </Provider>
);
