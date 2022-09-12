import { Routes, Route } from "react-router-dom";

//////////////////////////castomHooks/////////////////////////////////////////////////
import useAuthorization from "../features/useAuthorization";
import useGetLoginAndPassword from "../features/useGetLoginAndPassword";
import useRegistration from "../features/useRegistration";
import useCheckStorage from "../features/useCheckStorage";

import {useGetUsersQuery, useCreateUserMutation, useCreateNewTodoMutation} from "../redux/users";

////////////////////////////components/////////////////////////////////////////////////
import Authorization from "../components/authorization/Authorization";
import UserTodo from "../components/userTodo/UserTodo";
import ComponentMistake from "../components/componentMistake/ComponentMistake";
import {PrivateHok} from "../HOC/PrivateHok";
import useAddNewTodo from "../features/useAddNewTodo";
import useFindUserFromData from "../features/useFindUserFromData";
///////////////////////////////////////////////////////////////////////////////////////





function AppRoutes(props) {


    const { data = [] } = useGetUsersQuery()   // для получения данных из db.json
    const [createNewUser] = useCreateUserMutation()  // добавления нового пользователя
    const [addTodo] = useCreateNewTodoMutation() ///добавление нового todos

    const {login, password, setLogin, setPassword} = useGetLoginAndPassword()   /// функция для получения данных из авторизационных и регистрационных input

    const { FindUserFromData } = useFindUserFromData(login, password, data)
    const {...registration} = useRegistration(login, password, setLogin, setPassword, createNewUser)  // функция для регистрации нового пользователя
    const {authorizationPrivatePage, userObj, authorizationHandler} = useAuthorization(FindUserFromData); /// функция для входа на страницу пользователя
    const {user, checkStoragePrivatePage} = useCheckStorage(data) // функция проверяет LocalStorage и в случае если в нем что то есть, берет данные из него

    //const { } = useAdd NewTodo(addTodo,  || user)



    return (
        <Routes>
            //////////////////////////////////Authorization/////////////////////////////////////
            <Route path="/" element={<Authorization
                enterTextHandlerLogin={setLogin}
                enterTextHandlerPassword={setPassword}

               // valueLogin={}
               // valuePassword={}
                buttonClickHandler={authorizationHandler}
                placeholderLogin="Введите логин"
                placeholderPassword="Введите пароль"
                title="АВТОРИЗАЦИЯ"
                buttonText="авторизоваться"
                link="registration"
            />}/>
            //////////////////////////////////Registration/////////////////////////////////////
            <Route
                path="registration" element={<Authorization
                enterTextHandlerLogin={setLogin}
                enterTextHandlerPassword={setPassword}
                buttonClickHandler={registration.registrationHandler}
                placeholderLogin="Введите логин для регистрации"
                placeholderPassword="Введите пароль для регистрации"
                valueLogin={registration.inputLogin}
                valuePassword={registration.inputPassword}
                title="РЕГИСТРАЦИЯ"
                buttonText="зарегистрироваться"
            />}/>
            //////////////////////////////////UserTodo/////////////////////////////////////
            <Route path="/:user" element={<PrivateHok privatePageKey={checkStoragePrivatePage || authorizationPrivatePage}>
                <UserTodo
                    //enterTextHandlerTodo={}
                    //buttonClickHandler={}
                    //valueTodo={todo}
                   userPosts={user || userObj}
                    placeholder="Введите Todos"
                    buttonText="Ввод"
                />
            </PrivateHok>
            }/>
            //////////////////////////////////FalseCom/////////////////////////////////////
            <Route path="/FalseCom" element={<ComponentMistake
                text="Адрес введен не верно"
                />}/>
            //////////////////////////////////ComponentMistake/////////////////////////////////////
            <Route path="*" element={<ComponentMistake
                text="Такой страницы не существует"
            />}/>
        </Routes>
    );
}

export default AppRoutes;