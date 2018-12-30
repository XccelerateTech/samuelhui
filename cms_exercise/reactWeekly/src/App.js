import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar'
import LinkList from './LinkList'
import AddLinkForm from './AddLinkForm'
import Profile from './Profile'

const testarr = [{
  id: 1,
  site: "Google",
  url: "www.google.com",
  tags: ["Search engine"]
}, {
  id: 2,
  site: "Yahoo",
  url: "www.yahoo.com",
  tags: ["Search engine"]
}, {
  id: 3,
  site: "ebb",
  url: "www.ebb.io",
  tags: ["Anime", "Adult"]
}]


window.localStorage.list = JSON.stringify(testarr)


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: JSON.parse(window.localStorage.list),
      filter: '',
      isAddingtag: false,
      form: {
        id: "",
        site: "",
        url: "",
        tags: ["","",""]
      }
    }
    this.searchTag = this.searchTag.bind(this)
    this.toogleAddingTag = this.toogleAddingTag.bind(this)
    this.handleFormInput = this.handleFormInput.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }

  removeTag = (id) => {
    const list = this.state.list.filter((el) => {
      return el.id != id
    })
    window.localStorage.list = JSON.stringify(list)
    this.setState({ list: JSON.parse(window.localStorage.list) })
  }

  searchTag = (event) => {
    this.setState({ filter: event.target.value })
  }

  toogleAddingTag = () => {
    this.setState({ isAddingtag: !this.state.isAddingtag })
    this.setState({form: {
      id: "",
      site: "",
      url: "",
      tags: ["","",""]
    }})
  }

  handleFormInput = (event) => {
    const targetState = event.target.name;
    const value = event.target.value
    let form = { ...this.state.form }
    form[targetState] = value
    this.setState({ form })
  }

  handleFormInputArr = (event,i) => {
    const targetState = event.target.name;
    const targetStateNum = event.target.num;
    console.log(targetStateNum)
    const value = event.target.value
    let form = { ...this.state.form }
    form[targetState][i] = value
    console.log(form)
    this.setState({ form })
  }

  submitForm = () => {
    let form = { ...this.state.form }
    form.id = this.state.list.length + 1
    let list = [...this.state.list]
    list.push(form)
    window.localStorage.list = JSON.stringify(list)
    this.setState({ list: JSON.parse(window.localStorage.list) })
    this.setState({ isAddingtag: !this.state.isAddingtag })
    this.setState({form: {
      id: "",
      site: "",
      url: "",
      tags: ["","",""]
    }})
  }



  render() {
    const { list, filter, isAddingtag, form } = this.state;
    return (
      <div className="App container-fluid">
        <AddLinkForm myClass={isAddingtag ? 'fadeIn' : 'fadeOut'} toggle={this.toogleAddingTag} handleFormInput={this.handleFormInput} submitForm={this.submitForm} handleFormInputArr={this.handleFormInputArr} form={form} />
        <div className="row yee">
          <div className="col-3 bg-warning setting">
            <Profile count={list.length} isAddingtag={isAddingtag} toggle={this.toogleAddingTag} />
          </div>
          <div className="col-9 bg-success">
            <div className="row">
              <div className="col-12 bg-success setting">
                <SearchBar search={this.searchTag} />
              </div>
              <div className="col-12 bg-danger setting yeee">
                <h1>Porn List</h1>
                <h3>You are searching: {filter}</h3>

                <LinkList list={list} filter={filter} remove={this.removeTag} />

              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
