
export default {
    state: {
      status: 'aa'
    },
    mutations: {
        change(state: any, name: string) {
            console.log(name)
      status = name
      console.log(status)
      },
    },
    actions:{
      change(context: any, name: string) {
        console.log(name)
        context.commit("change", name)
      }

    },
    getters: {
      compStatus: (state: any) => state.status
    }
  };
  