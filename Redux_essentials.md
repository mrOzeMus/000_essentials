# Redux

Voici une configuration de redux nue pour mieux comprendre le fonctionnement:


	const stateDiv = document.getElementById('result')
	const actionButtonInc = document.getElementById('mybutton')
	const actionButtonDec = document.getElementById('mybutton2')
	const actionButtonAdd6 = document.getElementById('mybutton3')

	const initialState ={
	  count: 0 
	}


	const reducer = (state, action) => {
	  console.log({state, type:action.type})
	  switch (action.type){
		case 'INCREMENT':  
		return {
			count: state.count + 1
		  }

		case 'DECREMENT':
		return {
		  count: state.count -1
		}

		case 'ADD':
		return{
		  count: Math.max(0, Math.min(state.count + action.amount, 10))
		}
	  }
	  return state
	}

	//creation du store
	const store = Redux.createStore(reducer,initialState)

	//fonction qui va etre appele a chaque changement du store
	store.subscribe(()=> {
	  const state = store.getState()
	  stateDiv.textContent = state.count
	})

	//liste de mes actions a appeller
	const actions = {
	  increment: ()=> store.dispatch({ type: 'INCREMENT' }),
	  decrement: ()=> store.dispatch({ type: 'DECREMENT' }),
	  //ou bien en mettant un parametre
	  add: amount => store.dispatch({ type: 'ADD', amount: amount})
	}


	actionButtonInc.addEventListener('click', actions.increment)
	actionButtonDec.addEventListener('click', actions.decrement)
	actionButtonAdd6.addEventListener('click', ()=> actions.add(6)) 
	
	
## avec React


installation apres create react app

	npm i redux react-redux redux-thunk