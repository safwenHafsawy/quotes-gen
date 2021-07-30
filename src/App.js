import React from 'react';

const quotes = [
    {key : 1, quote : 'Be yourself; everyone else is already taken.' ,author :
    " Oscar Wilde "},
    {key : 2 , quote : "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    author : "Marilyn Monroe" },
    {key : 3, quote : "So many books, so little time.", author : "Frank Zappa "},
    {key : 4 , quote : "A room without books is like a body without a soul.", author : "Marcus Tullius Cicero "},
    {key : 5, quote: 'The purpose of our lives is to be happy', author : 'Dalai Lama'},
    {key : 6, quote : 'Get busy living or get busy dying' , author : 'Stephen King'} ,
    {key : 7, quote : 'Many of life’s failures are people who did not realize how close they were to success when they gave up' , author : 'Thomas A. Edison'},
    {key : 8, quote : 'If you want to live a happy life, tie it to a goal, not to people or things.' , author : 'Albert Einstein'},
    {key : 9, quote : 'Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking' , author : 'Steve Jobs'},
    {key : 10, quote : 'If life were predictable it would cease to be life, and be without flavor.' , author : 'Eleanor Roosevelt'},
    {key : 11, quote : 'The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.' , author : 'Henry Ford'}
]



class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            qtNum : quotes.length,
            quote : {}
        }
        this.generateClick = this.generateClick.bind(this);
    }

    generateClick(){
        const key = Math.floor(Math.random()*this.state.qtNum) + 1
        let quote = quotes.filter((qt) => qt.key === key);
        this.setState({quote : quote[0]})
    }

    componentDidMount(){
        const key = Math.floor(Math.random()*this.state.qtNum) + 1
        let quote = quotes.filter((qt) => qt.key === key);
        this.setState({quote : quote[0]})
    }
    render(){
        return (
            <div className='container'>
                <div className='row'>
                    <div id="quote-box">
                        <h3 id="text">"{this.state.quote.quote}"</h3>
                        <p id="author">-{this.state.quote.author}</p>
                    </div>
                    <hr />
                    <div className='col-2'></div>
                    <div className='col-4'>
                        <button onClick = {this.generateClick}>Refresh</button>
                    </div>  
                    <div className="col-4">
                        <button ><a href={`https://twitter.com/intent/tweet?text="${this.state.quote.quote}" -${this.state.quote.author}`} target='_blank' rel='noreferrer'>Share</a></button>          
                    </div>                   
                </div>
            </div>
        )
    }
}

export default App;
