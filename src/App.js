import React from 'react';
import Header from './components/Header';
import Button from './components/Button';
import Options from './components/Options';
import AddOption from './components/AddOption';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.deleteOptions = this.deleteOptions.bind(this);
    this.pickOption = this.pickOption.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.deleteOption = this.deleteOption.bind(this)
    this.state = {
      options: [],
      headerText: "Indecision app",
      error: undefined
    }
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      console.error(e)
    }
  }
  componentDidUpdate(_, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }
  pickOption() {
    const num = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[num];
    alert(option)
  }
  deleteOptions() {
    this.setState(() => {
      return ({
        options: []
      })
    })
  }
  deleteOption(valueToRemove) {
    this.setState((prevState) => {
      return {
        options: prevState.options.filter((option) => valueToRemove !== option)
      }
    })
  }
  handleAddOption(e) {
    e.preventDefault();
    const textBox = document.getElementById('textBox');
    const value = textBox.value.trim();
    if (!value) {
      return (
        this.setState(() => {
          return ({ error: "Empty text not allowed!" })
        })
      )
    } else if (this.state.options.indexOf(value) > -1) {
      return (
        this.setState(() => {
          return ({ error: "Option already exist" })
        })
      )
    }
    this.setState((prevState) => {
      return ({
        options: prevState.options.concat(value),
        error: undefined
      })
    })

    textBox.value = "";

  }
  render() {
    return (
      <div className="container-fluid d-flex align-items-center">
        <div className=" col-11 col-md-9 col-lg-6 p-5 mx-auto">
          <Header headerText={this.state.headerText} />
          <hr className="hr" />
          {this.state.error && <p className="text-danger h5 mb-3 font-weight-light" >{this.state.error}</p>}
          <div className=" mx-auto">
            <Button
              color={"danger"}
              text={"clear all"}
              runFunction={this.deleteOptions}
              shouldHide={this.state.options.length === 0}
            />
            <Button
              color={"warning"}
              text={"Select"}
              runFunction={this.pickOption}
              shouldHide={this.state.options.length === 0}
            />
            <hr className="hr" />
            <Options
              options={this.state.options}
              deleteOption={this.deleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>
      </div>
    );
  }

}







