import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import './Main.css'
import { Context } from '../../context/Context'

const Main = () => {

    const {
        onSent,
        recentPrompt,
        showResult,
        loading,
        resultData,
        setInput,
        input } = useContext(Context)

    return (
        <div className='main'>
            <div className='nav'>
                <p>Hello-AI</p>
                <img src={assets.user_icon} alt='' />
            </div>
            <div className='main-container'>

                {!showResult ?
                    <>
                        <div className='greet'>
                            <p><span>नमस्ते, जनाब</span></p>
                            <p>How can I help you today?</p>
                        </div>

                        {/* <div className='cards'>
                            <div className='card'>
                                <p>Suggest an upcoming road trip to travel best place</p>
                                <img src={assets.compass_icon} />
                            </div>
                            <div className='card'>
                                <p>Mountains stand tall, whispering secrets of strength, age, and grace.</p>
                                <img src={assets.bulb_icon} />
                            </div>
                            <div className='card'>
                                <p>Rivers flow gently, carrying tales of life, love, and loss.</p>
                                <img src={assets.message_icon} />
                            </div>
                            <div className='card'>
                                <p>Sunsets unfold slowly, coloring skies with warmth, hope, and peace.</p>
                                <img src={assets.code_icon} />
                            </div>
                        </div> */}
                    </> :
                    <div className='result'>
                        <div className='result-title'>
                            <img src={assets.user_icon} alt="" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className='result-data'>
                            <img src={assets.gemini_icon} alt="" />
                            {loading ? 
                            <div className='loader' >
                                <hr />
                                <hr />
                                <hr />
                            </div>
                            :
                            <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            }
                            </div>
                    </div>
                }

                <div className='main-bottom' >
                    <div className='search-box' >
                        <input onChange={(e) => { setInput(e.target.value) }} value={input} type='text' placeholder='Enter a prompt here' />
                        <div>
                            {input ? <img onClick={() => onSent()} src={assets.send_icon} alt='' /> :null }
                        </div>
                    </div>
                    <p className='bottom-info'>
                        Hello-AI: Your adaptive, intelligent companion, enhancing life through connection.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main
