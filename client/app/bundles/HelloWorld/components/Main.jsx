import React, { PropTypes } from 'react';

export default class Main extends React.Component {

   constructor() {
     super();
     this.state = {
       cards: [],
     }
   }

    componentWillMount(){
      this.getCards();
    }

    getCards() {
      this.setState({
      cards: [
      {
        aceHearts:      <div className="outline shadow rounded red" onClick={this.flipCard}>
                         <div className="top"><span>A</span><span>&hearts;</span></div>
                          <h1>&hearts;</h1>
                         <div className="bottom"><span>&hearts;</span><span>A</span></div>
                        </div>
      },
      {
        kingHearts:     <div className="outline shadow rounded red" onClick={this.flipCard}>
                         <div className="top"><span>K</span><span>&hearts;</span></div>
                           <h1>&hearts;</h1>
                         <div className="bottom"><span>&hearts;</span><span>K</span></div>
                        </div>
      },
      {
        queenHearts:    <div className="outline shadow rounded red" onClick={this.flipCard}>
                         <div className="top"><span>Q</span><span>&hearts;</span></div>
                            <h1>&hearts;</h1>
                         <div className="bottom"><span>&hearts;</span><span>Q</span></div>
                        </div>
      },
      {
        jackHearts:     <div className="outline shadow rounded red" onClick={this.flipCard}>
                         <div className="top"><span>J</span><span>&hearts;</span></div>
                          <h1>&hearts;</h1>
                         <div className="bottom"><span>&hearts;</span><span>J</span></div>
                        </div>
      },
      {
        tenHearts:      <div className="outline shadow rounded red" onClick={this.flipCard}>
                         <div className="top"><span>10</span><span>&hearts;</span></div>
                          <h1>&hearts;</h1>
                         <div className="bottom"><span>&hearts;</span><span>10</span></div>
                        </div>
      },
      {
        nineHearts:     <div className="outline shadow rounded red" onClick={this.flipCard}>
                         <div className="top"><span>9</span><span>&hearts;</span></div>
                          <h1>&hearts;</h1>
                         <div className="bottom"><span>&hearts;</span><span>9</span></div>
                        </div>
      },
      {
        eightHearts:    <div className="outline shadow rounded red" onClick={this.flipCard}>
                         <div className="top"><span>8</span><span>&hearts;</span></div>
                          <h1>&hearts;</h1>
                         <div className="bottom"><span>&hearts;</span><span>8</span></div>
                        </div>
      },
      {
        sevenHearts:    <div className="outline shadow rounded red" onClick={this.flipCard}>
                         <div className="top"><span>7</span><span>&hearts;</span></div>
                          <h1>&hearts;</h1>
                         <div className="bottom"><span>&hearts;</span><span>7</span></div>
                        </div>
      },
      {
        sixHearts:      <div className="outline shadow rounded red" onClick={this.flipCard}>
                         <div className="top"><span>6</span><span>&hearts;</span></div>
                          <h1>&hearts;</h1>
                         <div className="bottom"><span>&hearts;</span><span>6</span></div>
                        </div>
      },
      {
        fiveHearts:     <div className="outline shadow rounded red" onClick={this.flipCard}>
                         <div className="top"><span>5</span><span>&hearts;</span></div>
                          <h1>&hearts;</h1>
                         <div className="bottom"><span>&hearts;</span><span>5</span></div>
                        </div>
      },
      {
        fourHearts:     <div className="outline shadow rounded red" onClick={this.flipCard}>
                         <div className="top"><span>4</span><span>&hearts;</span></div>
                          <h1>&hearts;</h1>
                         <div className="bottom"><span>&hearts;</span><span>4</span></div>
                        </div>
      },
      {
        threeHearts:    <div className="outline shadow rounded red" onClick={this.flipCard}>
                         <div className="top"><span>3</span><span>&hearts;</span></div>
                          <h1>&hearts;</h1>
                         <div className="bottom"><span>&hearts;</span><span>3</span></div>
                        </div>
      },
      {
        twoHearts:      <div className="outline shadow rounded red" onClick={this.flipCard}>
                         <div className="top"><span>2</span><span>&hearts;</span></div>
                          <h1>&hearts;</h1>
                         <div className="bottom"><span>&hearts;</span><span>2</span></div>
                        </div>
      }
      ]
      });
    }

  render() {
    let cards;
    cards = this.state.cards.map((card) => {
      return <div>{card.aceHearts}</div>
    })
    return (
      <div>
        {cards}
      </div>
    );
  }
}
