import React, {Component} from 'react';
import firebase from '../../../utlis/firebase'
import './login.scss'
 

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
        <div className='form-grey'>

            <form  className='form-grey-input' onSubmit={(e) => this.handleform(e) }>

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
                        <label>Haslo</label>
                        <input
                            type="password"
                            className="form"
                            name="password"
                            onChange={ (e) => this.changeHandler(e)}
                        >
                        </input>
                </div>

                <button type="submit" className="btn box-button-zaloguj">
                        zaloguj 
                    </button> 

                <div className='box-button'>
                    <button type="submit" className="btn box-button-zaloz">
                        załóż konto
                    </button>
                    <button type="submit" className="btn box-button-zaloguj">
                        zaloguj 
                    </button>   
                </div>
                

            </form>
 
            

        </div>

            <button className='handleLoggedUser' onClick={ ()=>this.handleLoggedUser() }>
               zalogowany user pojawi się w console.log
            </button>

        </>
    );
    }
    
};
export default LoginForm;