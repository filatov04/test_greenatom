import { makeAutoObservable } from "mobx";

class store {
    task = [
    ]

    constructor(){
        makeAutoObservable(this);
    }

    addTodoItem(item){
        this.task.unshift({id: this.task.length + 1, title: item, status: false});

    }

    removeTodoItem(id){
        //console.log(id);
        this.task = this.task.filter(item => item.id !== id);
    }

    completeTodoItem(id){
        this.task = this.task.map(item => item.id === id ? {...item, id: item.id, title: item.title, status: !item.status} : {...item})
    }

    delFirsTask(){
        let res = 1;
        for (let i = 0; i <= this.task.length; i++){
            if(!this.task[i].status){
                res = i;
                console.log(res);
                break;
            }
        }
        this.task = this.task.filter((item, index) => index !== res);
    }

    delLastTask(){
        let res = 1;
        for (let i = this.task.length - 1; i >= 0; i--){
            if(!this.task[i].status){
                res = i;
                break;
            }
        }
        this.task = this.task.filter((item, index) => index !== res);
    }

    Even(){
        let k = 0;
        for(let i = 0; i < this.task.length; i++){
            if(!this.task[i].status){
                k++;
                if(k === 2){
                    this.task[i].border = !this.task[i].border;
                    k = 0;
                }
            }
        }
    }

    Odd(){
        let k = 1;
        for(let i = 0; i < this.task.length; i++){
            if(!this.task[i].status){
                k++;
                if(k === 2){
                    this.task[i].border = !this.task[i].border;
                    k = 0;
                }
            }
        }
    }
}

export default new store();