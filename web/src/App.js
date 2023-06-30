import './styles/App.css';
import './styles/reset.css';
import {useState} from 'react'
import { makeRequest} from './api/api';
import { SideMenu} from './components/SideMenu/SideMenu';
import { ChatMessage } from './components/ChatMessage/ChatMessage';

function App() {
  
  const [input, setInput] = useState('')
  const [chatLog, setChatLog] = useState([{
    user: 'gpt',
    message: "Como posso te ajudar hoje?"
  }])

  async function handleSubmit(e) {
    e.preventDefault();

    const prompt = chatLog.map(message => message.message).join('\n') + '\n' + input;

    let response = await makeRequest({ prompt });
    const responseData = response.data;

    response = responseData.split('\n').map((line, index) => <p key={index}>{line}</p>);

    setChatLog(prevChatLog => [
      ...prevChatLog,
      { user: 'me', message: `${input}` },
      { user: 'gpt', message: responseData }
    ]);
    
    setInput("")
  }
  
  return (
    <div className="App">
      <SideMenu/>
      <section className='chatbox'>
        <div className='chat-log'>
          {chatLog.map((message, index) =>(
            <ChatMessage key={index} message={message}/>
          ))}
        </div>
        <div className='chat-input-holder'>
          <form onSubmit={handleSubmit}>
            <input rows="1" className="chat-input-textarea" value={input} onChange={e => setInput(e.target.value)}/>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;
