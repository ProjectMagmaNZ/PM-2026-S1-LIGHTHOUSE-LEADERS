import React, { useEffect, useRef, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'

const Dashboard = () => {
    const navigate = useNavigate()
    return (
        <div className="dashboard-wrapper">
            <div className="dashboard-page">
                <div className="dashboard-header">
                    <h1>Dashboard</h1>
                    <p>
                        Welcome to the Lighthouse Leaders Dashboard! Here you can view and
                        manage your surveys, track responses, and analyze results.
                    </p>
                </div>
                <div className="dashboard-content">
                    <div onClick={() => navigate('/survey')} className="dashboard-card">
                        <img src={assets.surveyIcon} alt="Survey Icon" />
                        <h1>New Survey</h1>
                        <p>You have a new survey to complete</p>
                    </div>
                    <div onClick={() => navigate('/completed')} className="dashboard-card">
                        <img src={assets.completedIcon} alt="Completed Survey Icon" />
                        <h1>Completed Surveys</h1>
                        <p>View your last submitted survey.</p>
                    </div>
                    <div onClick={() => navigate('/analytics')} className="dashboard-card">
                        <img src={assets.dataIcon} alt="Analytics Icon" />
                        <h1>Analytics</h1>
                        <p>View data breakdown of your survey responses</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
