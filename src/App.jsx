import "./styles.css";
import Entry from "./Entry";
import emojipedia from "./emojipedia";

function App(){
  return (
    <div>
      <h1><span>emojipedia</span></h1>
    
    <dl className = "dictionary">
      {
        emojipedia.map( x => <Entry emoji = {x.emojiPicture} name = {x.emojiName} meaning = {x.emojiMeaning} />
      )
      })
    </dl>
    </div>
  )
}
export default App;