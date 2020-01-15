import React, { Component } from 'react';
import { data } from './person.json';
import ModalComponent from './componentModal.jsx';
import './satr.css';
import '../image/start.jpg'
const datos = data

class StarWars extends Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            data: datos,
            modalContent: false,
            setdata: null

        }
    }

    handleModal = (item) => {
        this.setState({
            modalContent: true,
            setdata: item
        })
    }

    handleCloseDelete = () => {
        this.setState({
            modalContent: false,

        })
    }

    render() {
        return (
            <div className="content-map">
                 <div className="content-title">
                     <img  className="content-image"   src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/star-wars-el-ascenso-de-skywalker-poster-1574768258.jpg?crop=1xw:0.7069689336691856xh;center,top&resize=640:*"/>
                     <p>
                     </p>personajes de start wars la saga de El Ranking definitivo
               </div>
                {
                    this.state.data ?
                        this.state.data.map(item => {
                            return <div className={'content-main'}>
                                <div className="content-display">
                                    <img className="img-start" src={item.urlImage} />
                                    <h5 className='text'>{item.name}</h5>
                                    <button id="button" type="button" class="btn btn-primary submitBtn" onClick={() => this.handleModal(item)}><div>ver detalles</div></button>
                                </div>

                            </div>
                        })
                        : null
                }
                {
                    this.state.modalContent ?
                        <ModalComponent
                            alertClose={() => this.handleCloseDelete()}
                            dataprops={this.state.setdata}
                        />
                        : null
                }
            </div>
        );
    }
}
export default StarWars