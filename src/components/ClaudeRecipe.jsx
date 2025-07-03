import ReactMarkdown from 'react-markdown'

export default function ClaudeRecipe(props){
    return(
        <section className="recipe-card" aria-live='polite'>
            <h2>CookPrompt Recommends: </h2>
            <ReactMarkdown>
                {props.recipe}
            </ReactMarkdown>
        </section>
    );
}