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
    const [addTodo, {isError}] = useCreateNewTodoMutation() ///добавление нового todos

    const {login, password, setLogin, setPassword} = useGetLoginAndPassword()   /// функция для получения данных из авторизационных и регистрационных input

    const { FindUserFromData , userLogin, userPassword, user: userItem} = useFindUserFromData(login, password, setLogin, setPassword, data)
    const {...registration} = useRegistration(login, password, setLogin, setPassword, createNewUser)  // функция для регистрации нового пользователя
    const {...authorization} = useAuthorization(FindUserFromData(login, password, setLogin, setPassword, data), userItem); /// функция для входа на страницу пользователя
    const {user, privatePage} = useCheckStorage(data) // функция проверяет LocalStorage и в случае если в нем что то есть, берет данные из него

    const { addNewTodo, todo, setTodo } = useAddNewTodo(addTodo, authorization.userItem || user)



    return (
        <Routes>
            //////////////////////////////////Authorization/////////////////////////////////////
            <Route path="/" element={<Authorization
                enterTextHandlerLogin={setLogin}
                enterTextHandlerPassword={setPassword}

                valueLogin={userLogin}
                valuePassword={userPassword}

                buttonClickHandler={authorization.authorizationHandler}
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
            <Route path="/:user" element={<PrivateHok privatePageKey={privatePage || authorization.privatePage}>
                <UserTodo
                    enterTextHandlerTodo={setTodo}
                    buttonClickHandler={addNewTodo}
                    valueTodo={todo}
                    userPosts={user || authorization.userItem}
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