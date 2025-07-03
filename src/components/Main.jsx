import React from "react";
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"
import { getRecipeFromMistral } from "../api/ai.js";



export default function Main(){
    let [ingredients, setIngredients] = React.useState([])
    let [recipe, setRecipe] = React.useState("")

    async function getRecipe(){
        const generatedRecipe = await getRecipeFromMistral(ingredients)
        setRecipe(generatedRecipe)
    }

    function submitted(formData){
        const newIngredient = formData.get("ingredient")
        if(newIngredient === "") return
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])

    }
    return (
    <main>
        <div className="input-block">
            <form action={submitted} className="add-ingredients-form">
            <input
                type="text"
                placeholder="Eg Oregano"
                className="input-box"
                aria-label="Add ingredient"
                name="ingredient"
            />
            <button className="form-button">+ Add ingredient</button>
            </form>
            {ingredients.length>0 && <IngredientsList
            ingredients = {ingredients}
            getRecipe = {getRecipe}
            />}
        
            {recipe && <ClaudeRecipe recipe={recipe}/>}
        </div>
    </main>

    );
}