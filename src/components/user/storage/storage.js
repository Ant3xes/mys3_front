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
        const api_url = "http://efrei-mystrois.herokuapp.com/api/";
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', Authorization: localStorage.getItem("token") }
        };
        fetch(api_url + "buckets/user/" + localStorage.getItem("user_uuid"), requestOptions)
        .then(res => res.json())
        .then(result => {
            this.setState({folders: result})
        })
    }
    componentDidMount = () => {
       this._GetData()
       this.setState({dataLoaded: true})
    }
    GoAddFile = (bucket_uuid) => {
        this.props.history.push("/addfile/" + bucket_uuid);
    }
    GoChangeFile = (blob_uuid) => {
        this.props.history.push("/changefile/" + blob_uuid);
    }
    _DeleteObject = (uuid) => {
        const api_url = "http://efrei-mystrois.herokuapp.com/api/";
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json', Authorization: localStorage.getItem("token") }
        };
        fetch(api_url + "blobs/" + uuid, requestOptions)
        .then(res => res.json())
        .then(data => {
            console.log(data) 
        })
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
                                <span key={i}>
                                <span className="list-group-item list-group-item-action active" aria-current="true">
                                {item.name}
                                    <span className="ButtonsGroup">
                                        <span className="Buttons badge bg-white ml-1 "><FontAwesomeIcon icon={faPlus} onClick={() => {this.GoAddFile(item.uuid)}} /> </span>
                                        <span className="Buttons badge bg-white ml-1 "><FontAwesomeIcon icon={faEdit} /></span>
                                        <span className="Buttons badge bg-white ml-1 "><FontAwesomeIcon icon={faTrash} /></span>
                                    </span>
                                </span>
                                {item.blobs.map((blob, w) => {
                                    return(
                                        <span className="list-group-item list-group-item-action ml-5">
                                        <a href={blob.url} target="blank">{ blob.name }</a>
                                            <span className="ButtonsGroup">
                                                <span className="Buttons badge bg-white rounded-pill ml-1"><FontAwesomeIcon icon={faEdit} onClick={() => {this.GoChangeFile(blob.uuid)}} /></span>
                                                <span className="Buttons badge bg-white rounded-pill ml-1"><FontAwesomeIcon icon={faTrash} onClick={() => {this._DeleteObject(blob.uuid)}}/></span>
                                            </span>
                                        </span>
                                    )
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
