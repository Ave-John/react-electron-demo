import React from 'react';
import ThemeContext from '../Theme/Theme';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { ColorPicker } from 'primereact/colorpicker';
import { Button } from 'primereact/button';
import './userStyling.css';

class AddTask extends React.Component {
    constructor() {
        super();
        this.state = {
            time: new Date(),
            duration: 0,
            title: '',
            bgColor: 'ffffff',
            textColor: '000000'
        }
        this.eventData = ''
    }

    handleCreateClick = () => {
        const data = { title: this.state.title, startTime: this.state.time, duration: this.state.duration }
        console.log(this.eventData);
        this.props.dragHandle(data);
    }

    render() {
        var moment = require('moment');
        return (
            <ThemeContext.Consumer>{(context) => {
                const { isLightTheme, light, dark } = context
                const theme = isLightTheme ? light : dark;
                return (
                    <div style={{ background: theme.ui, color: theme.color }}>
                        <div className="p-grid">
                            <div className="p-col-3">
                                <div className="box">Enter Task Name :</div>
                            </div>
                            <div className="p-col-9">
                                <div className="box">
                                    <InputText value={this.state.title} onChange={(e) => this.setState({ title: e.target.value })} />
                                </div>
                            </div>
                            <div className="p-col-3">
                                <div className="box">Select Start Time :</div>
                            </div>
                            <div className="p-col-9">
                                <div className="box">
                                    <Calendar value={this.state.time} onChange={(e) => this.setState({ time: e.value })} timeOnly={true} />
                                </div>
                            </div>
                            <div className="p-col-3">
                                <div className="box">Enter Duration :</div>
                            </div>
                            <div className="p-col-9">
                                <div className="box">
                                    <InputNumber value={this.state.duration} onChange={(e) => this.setState({ duration: e.value })} mode="decimal" useGrouping={false} />
                                </div>
                            </div>
                            <div className="p-col-3">
                                <div className="box">Pick BG Color :</div>
                            </div>
                            <div className="p-col-9">
                                <div className="box">
                                    <ColorPicker value={this.state.bgColor} onChange={(e) => this.setState({ bgColor: e.value })}></ColorPicker>
                                </div>
                            </div>
                            <div className="p-col-3">
                                <div className="box">Pick Text Color :</div>
                            </div>
                            <div className="p-col-9">
                                <div className="box">
                                    <ColorPicker value={this.state.textColor} onChange={(e) => this.setState({ textColor: e.value })}></ColorPicker>
                                </div>
                            </div>
                            <div className="p-col-3">
                                <div className="box">
                                    Task Details :
                                </div>
                            </div>
                            <div className="p-col-9">
                                <div className="box">
                                    <div style={{ backgroundColor: "#" + this.state.bgColor, color: "#" + this.state.textColor }}>
                                        <h5>{this.state.title}</h5>
                                        {moment(this.state.time).format("HH:mm")}<br />{this.state.duration}
                                    </div>
                                </div>
                            </div>
                            <div className="p-col-3">
                                <div className="box">
                                    <Button label="New" onClick={this.handleNewClick} />
                                </div>
                            </div>
                            <div className="p-col-9">
                                <div className="box" style={{ textAlign: "center" }}>
                                    <Button label="Create" onClick={this.handleCreateClick()} />
                                </div>
                            </div>
                        </div>
                    </div>)
            }}</ThemeContext.Consumer>
        )
    }
}

export default AddTask;