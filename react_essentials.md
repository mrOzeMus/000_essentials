# React essentials


## New React Api 

Installation:

On parle de React 16.3

Pour l'instant encore en béta donc on doit installer manuellement après react app.

    npm install --save react@next react-dom@next


> Changements: 

exemple:

Component principal: 

    class App extends Component{
        state = {
            name: 'Wes',
            age: 100,
            cool: true
        }
        render(){
            return(
                <div>
                    <Family/>
                </div>
            )
        }
    }


Deuxième Component:

    class Person extends Component{
        render(){
            return(

            )
        }
    }

    const Family =(props) =>(
        <div className="family">
            <Person />
        </div>
    )


Maintenant pour passer une info à un enfant éloignée on peut faire un **Context** !

    const MyContext = React.createContext();

Puis créer un provider component (la ou les datas seront stockées)

    class myProvider extends Component{
        state= {
            name:'Wes',
            age: 100,
            cool: true
        }
        render(){
            return(
                <MyContext.Proveder value="I'm the value">
                    {this.props.children}
                </MyContext.Provider>
            )
        }
    }


Ensuite, wrapper toute l'application dans le provider:

    class App extends Component{
        render(){
            return(
                <MyProvider>
                    ...
                    <Family />
                </MyProvider>
            )
        }
    }

Ainsi tout le monde peut accéder aux données. Pour cela il faut créer un consumer pour les éleéments qui ont besoin des datas:

    class Person extends Component{
        render(){
            return(
                <div className="person">
                    <MyContext.Consumer>
                        {(context)=>(
                            <p>I'm inside the {context}
                            </p>
                        )}
                    </MyContext.Consumer>
                </div>
            )
        }
    }

    
On peut aussi mettre la valeur dans une clé de MyContext.Consumer.

On peut aussi passer un state dans MyContext.Provider.

    class myProvider extends Component{
        state= {
            name:'Wes',
            age: 100,
            cool: true
        }
        render(){
            return(
                <MyContext.Proveder value={{
                    state: this.state
                }}>
                    {this.props.children}
                </MyContext.Provider>
            )
        }
    

    ...

    class Person extends Component{
        render(){
            return(
                <div className="person">
                    <MyContext.Consumer>
                        {(context)=>(
                            <p>I'm inside the {context.state.age}
                            </p>
                        )}
                    </MyContext.Consumer>
                </div>
            )
        }
    }


> Pour pouvoir updater les valeurs dans le provider , on peut stocker des fonctions qui vont pouvoir être appelées par les éléments.

    <MyContext.Provider value={{
        state: this.state,
        grownAYearOlder :() =>this.setState({
            age:this.state.age +1
        })
    }}>


    ..

    <MyContext.Consumer>
    {(centext) => (
        ...
        <button onClick =>{context.growAYearOlder}>button</button>
        ...
    )}