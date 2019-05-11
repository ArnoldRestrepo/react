import React from 'react';
import { Link } from 'react-router-dom';

import './styles/BadgeDetails.css';
import confLogo from '../img/platziconf-logo.svg';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import Badge from '../components/Badge';
import api from '../api';

class BadgeDetails extends React.Component{
    render(){
        return (
            <div>
                <div className="BadgeDetails__hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <img src={confLogo} alt="Logo de la Conferencia"/>
                            </div>
                            <div className="col-6"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeDetails;