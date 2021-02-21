import React, {Component} from 'react';
import firebase from '../../../utlis/firebase'
 

class LoginForm extends Component {

    state = {

        register:true,
        user:{
            email:'',
            password:''
        }
    }

    handleform =(e) => {
        e.preventDefault();

        const email = this.state.user.email;
        const password = this.state.user.password;

        if(this.state.register){
            firebase
            .auth()
            .createUserWithEmailAndPassword(email,password)
            .then (res => {
                console.log(res)
            })
            .catch( e => {
                console.log(e);
            });
        }else {
            firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(res =>{
                console.log(res)
            })
            .catch(e =>{
                console.log(e);
            });
        }
    }

    changeHandler =(e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState (prevS => ({
            user:{
                ...prevS.user,
                [name]: value
            }
        }))
    }

    handleLogout = () => {
        firebase
        .auth()
        .signOut()
        .then(()=>{
            console.log('User logged out');
        })
    }

    handleLoggedUser = () => {
        let whichUser = firebase.auth().currentUser;
        if(whichUser){
            whichUser.getIdTokenResult().then( res => {
                console.log(res)
            })
        } else {
            console.log('NO USER');
        }
    }


    render(){
        return (
        <>
            <form onSubmit={(e) => this.handleform(e) }>

                <div className="form-email">
                   
                        <label>Email</label>
                        <input
                            type="email"
                            className="form"
                            name="email"
                            onChange={ (e) => this.changeHandler(e)}
                        >
                        </input>
                </div>

                <div className="form-password">
                   
                        <label>Password</label>
                        <input
                            type="password"
                            className="form"
                            name="password"
                            onChange={ (e) => this.changeHandler(e)}
                        >
                        </input>
                </div>

                <button type="submit" className="btn">
                    zaloguj </button>

            </form>

            <button onClick={ ()=> this.handleLogout() }>
                wyloguj
            </button>

            <button onClick={ ()=>this.handleLoggedUser() }>
               current user
            </button>
           
        </>
    );
    }
    
};
export default LoginForm;