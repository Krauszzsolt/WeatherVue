import { loginModel } from '../models/login.model';

export default {
    state: {
      currentUser: localStorage.getItem('currentUser') || '',
      status: 'error'
    },
    mutations: {
        authenticate(state: any, user: loginModel) {
        localStorage.setItem('currentUser', user.userName+'IDs')
        state.status = 'success';
      },
      noAuthenticate(state: any, user: loginModel) {
        console.log('logout');
        state.status = 'error';
        localStorage.removeItem('currentUser')
      },
    },
    actions:{
      logout(context: any,) {
        console.log('logout');
        context.commit("noAuthenticate")
        
      },
      authenticate(context: any, datas: any) {
        if (
            datas.userName === localStorage.getItem(datas.userName) &&
            datas.password === localStorage.getItem(datas.userName)
          )
        {context.commit("authenticate", datas);}
        else {
            context.commit("noAuthenticate", datas);
        }
      }

    },
    getters: {
      isAuthenticate: (state: any) => state.status
    }
  };
  