import React from 'react';
import { Sidebar } from 'primereact/sidebar';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import User from '../Side Bar/UserDetail';
import Overview from '../Body/Overview';
import TaskCreation from '../Body/CreateTask';
import EditTask from '../Body/EditTask';
import ExportTask from '../Body/ExportTask';
import Dashboard from '../Body/Dashboard';
import userPic from '../assets/user.jpg';
import TaskPic from '../assets/filter.jpg';
import OverviewPic from '../assets/events.png';
import ExportPic from '../assets/export.png';
import DashboardPic from '../assets/dashboard.jpg';
import EditPic from '../assets/edit.png';
import ThemeContext from '../Theme/Theme'

class NavigationPanel extends React.Component {
    constructor() {
        super();
        this.state = { visibleRight: false };
    }
    
    render() {
        return (
            <ThemeContext.Consumer>{(context) => {
                const { isLightTheme, light, dark } = context
                const theme = isLightTheme ? light : dark;
                return (
                    <div>
                        <Router>
                            <div className="p-grid mainContainer">
                                <div className="p-col-1 sideNavContainer" style={{ background: theme.navColor, color: theme.ui }}>
                                    <div className="box">
                                        <Link className="nav-link" onClick={() => { this.setState({ visibleRight: true }) }} to="">
                                            <img src={userPic} alt="No_Image_Found" className="img img-rounded img-responsive sideIcon" />
                                        </Link>
                                        <Link style={{ color: theme.color }} className="nav-link" to="/dashboard">
                                            <img src={DashboardPic} alt="No_Image_Found" className="img img-rounded img-responsive sideIcon" />
                                        </Link>
                                        <Link style={{ color: theme.color }} className="nav-link" to="/monthlyView">
                                            <img src={OverviewPic} alt="No_Image_Found" className="img img-rounded img-responsive sideIcon" />
                                        </Link>
                                        <Link style={{ color: theme.color }} className="nav-link" to="/trackTask">
                                            <img src={EditPic} alt="No_Image_Found" className="img img-rounded img-responsive sideIcon" />
                                        </Link>
                                        <Link style={{ color: theme.color }} className="nav-link" to="/editTask">
                                            <img src={TaskPic} alt="No_Image_Found" className="img img-rounded img-responsive sideIcon" />
                                        </Link>
                                        <Link style={{ color: theme.color }} className="nav-link" to="/export">
                                            <img src={ExportPic} alt="No_Image_Found" className="img img-rounded img-responsive sideIcon" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="p-col-11 displayContainer" style={{ background: theme.ui, color: theme.color }}>
                                    <div className="headStyle">

                                    </div>
                                    <div className="displayStyle">
                                        <Route exact path="/" component={Dashboard} />
                                        <Route path="/dashboard" component={Dashboard} />
                                        <Route path="/monthlyView" component={Overview} />
                                        <Route path="/trackTask" component={TaskCreation} />
                                        <Route path="/editTask" component={EditTask} />
                                        <Route path="/export" component={ExportTask} />
                                        <Route path="/userDetails" component={User} />
                                    </div>
                                </div>
                            </div>
                        </Router>
                        <Sidebar style={{ background: theme.ui, color: theme.color }} visible={this.state.visibleRight} position="right" baseZIndex={1000000} onHide={() => { this.setState({ visibleRight: false }) }}>
                            <User user={this.props.userName} />
                        </Sidebar>
                    </div>)
            }}</ThemeContext.Consumer>
        )
    }
}

export default NavigationPanel;