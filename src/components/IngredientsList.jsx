export default function IngredientsList(props){
    const displayIngredients = props.ingredients.map((item)=>{
        return <li key={item}>{item}</li>
    });
    return(
        <section>
            <h2 className="belowSearchTitle">Ingredients on hand:</h2>
            <ul className="ingredients-list">
            {displayIngredients}
            </ul>
            {props.ingredients.length>3 &&<div className="get-recipe">
                <div>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients</p>
                </div>
                <button onClick={props.getRecipe}>Get a recipe</button>
            </div>}
        </section>
    );
}