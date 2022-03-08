import { Provider } from "react-redux";
import App from './componets/app/app';


export const Root = ({store}) => (
    <Provider store={store}>
        <App />
    </Provider>
);
