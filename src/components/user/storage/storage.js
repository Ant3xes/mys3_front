import React, { Component } from 'react'
import './storage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit, faPlus } from '@fortawesome/free-solid-svg-icons';

export default class storage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataLoaded: false,
            folders: []
        }
    }
    _GetData = () => {
        const api_url = "http://localhost:5000/api/";
        fetch(api_url + "buckets/user/" + localStorage.getItem("user_uuid"))
        .then(res => res.json())
        .then(result => {
            this.setState({folders: result})
        })
    }
    componentDidMount = () => {
       this._GetData()
       this.setState({dataLoaded: true})
    }
    render() {
        if(this.state.dataLoaded && this.state.folders.length > 0) {
            return (
                <div className="m-2 mt-5">          
                    <ul className="list-group-flush">
                        { this.state.folders.map((item, i) => {
                            if(item.name === item.uuid_user) {
                                item.name = "Dossier basique";
                            }
                            return (
                                <span>
                                <a href="#aza" className="list-group-item list-group-item-action active" aria-current="true">
                                {item.name}
                                    <span className="ButtonsGroup">
                                        <span className="Buttons badge bg-white ml-1 "><FontAwesomeIcon icon={faPlus} /> </span>
                                        <span className="Buttons badge bg-white ml-1 "><FontAwesomeIcon icon={faEdit} /></span>
                                        <span className="Buttons badge bg-white ml-1 "><FontAwesomeIcon icon={faTrash} /></span>
                                    </span>
                                </a>
                                {item.blobs.map((blob, w) => {
                                    console.log(blob)
                                    return(
                                        <a href="#aa" className="list-group-item list-group-item-action ml-5">
                                        { blob.name }
                                        <span className="ButtonsGroup">
                                            <span className="Buttons badge bg-white rounded-pill ml-1"><FontAwesomeIcon icon={faPlus} /> </span>
                                            <span className="Buttons badge bg-white rounded-pill ml-1"><FontAwesomeIcon icon={faEdit} /></span>
                                            <span className="Buttons badge bg-white rounded-pill ml-1"><FontAwesomeIcon icon={faTrash} /></span>
                                        </span>
                                        </a>)
                                })}
                                </span>
                            )
                        })}
                    </ul>
                </div>
            )
        } else {
            if(this.state.folders <= 0) {
                return (
                    <div><h1>No data</h1></div>
                )
            } else {
                return (
                    <div className="spinner-border m-5 p-5" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                )
            }

        }
    }
}
