import API from '../../store/utils/api'
export const login = (email, pass) => {
    return (dispatch) => {
        // console.log(API);
        API.login(email, pass, res => {
            console.log("Result", res.data);
           dispatch({
                type: 'LOGIN',
                Payload: { email, pass }
            })
        })
    }
    // return {
    //     type:'LOGIN',
    //     Payload:{email,pass}
    // }
}
export const register = (email, pass) => {
    return {
        type: 'REGISTER',
        payload: { email, pass }

    }
}