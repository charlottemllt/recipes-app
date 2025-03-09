import { createContext, useState} from 'react';

let Recipes = [
    {
        index: "001",
        quantity: 1
    }
]

export const RecipesContext = createContext({
    recipes: Recipes,
    setRecipes: () => {}
});

export const RecipesContextProvider = (props) => {
    const setRecipes = (recipes) => {
        setState({...state, recipes: recipes})
    }
    
    const initState = {
        recipes: Recipes,
        setRecipes: setRecipes
    }

    const [state, setState] = useState(initState)

    return (
        <RecipesContext.Provider value={state}>
            {props.children}
        </RecipesContext.Provider>
    )
};