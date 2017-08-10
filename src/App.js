import React, { Component } from 'react';
import update from 'react-addons-update';
import quizQuestions from './api/quizQuestions';
import Quiz from './components/Quiz';
import Result from './components/Result';
import logo from './svg/logo.svg';
import molecules from './tools/molecules';
import resultOptions from './api/ResultOptions';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {
        ConfidenceAdd2: 0,
        ConfidenceAdd1: 0,
        ConfidenceAdd0: 0,
        ConfidenceSub1: 0,
        ConfidenceSub2: 0,
        NeedAdd1: 0,
        NeedAdd0: 0,
      },
      result: ''
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentWillMount() {
    // const shuffledAnswerOptions = quizQuestions.map((question) => this.shuffleArray(question.answers));
    // const shuffledQuestions = quizQuestions.map((question) => this.shuffleArray(question));

    this.setState({
      // question: shuffledQuestions[0],
      question: quizQuestions[0].question,
      // answerOptions: shuffledAnswerOptions[0]
      answerOptions: quizQuestions[0].answers
    });
  }

  // componentDidMount() {
  // molecules()
  // }

  shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);

    if (this.state.questionId < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }

  setUserAnswer(answer) {
    const updatedAnswersCount = update(this.state.answersCount, {
      [answer]: { $apply: (currentValue) => currentValue + 1 }
    });

    this.setState({
      answersCount: updatedAnswersCount,
      answer: answer
    });
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: ''
    });
  }

  getResults() {
    const { ConfidenceAdd0, ConfidenceAdd1, ConfidenceAdd2, ConfidenceSub1, ConfidenceSub2, NeedAdd0, NeedAdd1 } = this.state.answersCount;
    const confidenceTotal = ConfidenceAdd1 + (ConfidenceAdd2 * 2) - ConfidenceSub1 - (ConfidenceSub2 * 2)
    const needTotal = NeedAdd1
    const finalResults = { confidence: confidenceTotal, need: needTotal }
    return finalResults
  }

  setResults(result) {
    this.setState({ result: result });
  }

  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  renderResult() {
    const { confidence, need } = this.state.result
    console.log(resultOptions[0].ideal.header)

    const strategicMessage = 'Ideal'
    const creativeMessage = 'Mixed Confident'
    const practicalMessage = 'Mixed Need'
    const nonconclusiveMessage = 'Poor Fit';

    let message
    if (confidence >= 1 && need >= 2) {
      message = resultOptions[0].ideal
    } else if (confidence >= 1 && need < 2) {
      message = resultOptions[0].mixedConfident
    } else if (confidence < 1 && need >= 2) {
      message = resultOptions[0].mixedNeed
    } else if (confidence < 1 && need < 2) {
      message = resultOptions[0].poorFit
    }

      return (
        <Result quizResult={message} />
      );
    }

    render() {
      return (
        <div className="App">
          <div className="App-header molecules">
            <canvas className="canvas">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>O2KL Chemistry Quiz Base</h2>
              <h3>No styling at all yet</h3>
            </canvas>
          </div>
          {this.state.result ? this.renderResult() : this.renderQuiz()}
        </div>
      );
    }

  }

  export default App;
