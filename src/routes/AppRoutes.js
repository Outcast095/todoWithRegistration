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





function AppRoutes() {


    const { data = [] } = useGetUsersQuery()   // для получения данных из db.json
    const [createNewUser] = useCreateUserMutation()  // добавления нового пользователя
    const [addTodo] = useCreateNewTodoMutation() ///добавление нового todos

    const {user, getLoginAndPassword } = useGetLoginAndPassword()   /// функция для получения данных из авторизационных и регистрационных input
    const { userObjectFromData } = useFindUserFromData(user, data)   /// функция сравнивает введенные пользователем логин и пароль с данным хранящимися в db.json и в случае совпадения отдает объект
    const { userData, authorizationKey } =  useAuthorization(userObjectFromData); /// функция для входа на страницу пользователя
    const { storageUserData, checkStorageKey } = useCheckStorage(data) // функция проверяет LocalStorage и в случае если в нем что то есть, берет данные из него

    const { addNewTodo } = useAddNewTodo(addTodo, userData || storageUserData)  /// добавление нового поста




    return (
        <Routes>
            //////////////////////////////////Authorization/////////////////////////////////////
            <Route path="/" element={<Authorization
                enterTextHandler={getLoginAndPassword}
                placeholderLogin="Введите логин"
                placeholderPassword="Введите пароль"
                title="АВТОРИЗАЦИЯ"
                buttonText="авторизоваться"
                link="registration"
            />}/>
            //////////////////////////////////Registration/////////////////////////////////////
            <Route
                path="registration" element={<Authorization
                //buttonClickHandler={registrationHandler}
                placeholderLogin="Введите логин для регистрации"
                placeholderPassword="Введите пароль для регистрации"
                title="РЕГИСТРАЦИЯ"
                buttonText="зарегистрироваться"
            />}/>
            //////////////////////////////////UserTodo/////////////////////////////////////
            <Route path="/:user" element={<PrivateHok privatePageKey={authorizationKey || checkStorageKey}>
                <UserTodo
                    enterAddNewTodo={addNewTodo}
                    userPosts={userData || storageUserData}
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