import React from 'react';
import { FullCalendar } from 'primereact/fullcalendar';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Draggable } from '@fullcalendar/interaction';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { ColorPicker } from 'primereact/colorpicker';
import { Button } from 'primereact/button';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import ThemeContext from '../Theme/Theme';
import './userStyling.css';

class Overview extends React.Component {
    constructor() {
        super();
        this.state = {
            events: [],
            options: {
                plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
                defaultView: 'dayGridMonth',
                defaultDate: new Date(),
                droppable: true,
                drop: (e) => {
                    this.handleDrop(e);
                },
                header: {
                    left: 'prev,next',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                },
                editable: true
            },
            time: new Date(),
            duration: 0,
            title: '',
            bgColor: 'ffffff',
            textColor: '000000'
        };
    }

    handleCreateClick = () => {
        let dragContainer = document.getElementById('draggableElmtContainer');
        if (dragContainer.childNodes.length > 0) {
            for (const child of dragContainer.childNodes) {
                child.remove();
            }
        }
        const dragValue = { title: this.state.title, startTime: this.state.time, duration: this.state.duration }
        if (dragValue.title !== '' && dragValue.duration && dragValue.startTime) {
            var draggableElmt = document.createElement("div");
            draggableElmt.setAttribute("id", "dragElement");
            draggableElmt.setAttribute("class","draggableElementStyle");
            draggableElmt.innerHTML = "Drag Me to the Date!!!";
            dragContainer.appendChild(draggableElmt);

            // const dragElmt = document.getElementById('dragElement');
            new Draggable(draggableElmt, {
                eventData: {
                    title: dragValue.title,
                    duration: dragValue.duration.toString(),
                }
            });
        }
    }

    handleDrop = (e) => {
        e.draggedEl.parentNode.removeChild(e.draggedEl);
    }

    render() {
        var moment = require('moment');
        return (
            <ThemeContext.Consumer>{(context) => {
                const { isLightTheme, light, dark } = context
                const theme = isLightTheme ? light : dark;
                return (
                    <div className="p-grid BoxDiv" style={{ background: theme.ui, color: theme.color }}>
                        <div className="p-col-6 addDiv">
                            <div className="box sideBox">
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
                                        </div>
                                    </div>
                                    <div className="p-col-9">
                                        <div className="box" style={{ textAlign: "center" }}>
                                            <Button label="Create" onClick={() => this.handleCreateClick()} />
                                        </div>
                                    </div>
                                    <div className="p-col-3">
                                        <div className="box">

                                        </div>
                                    </div>
                                    <div className="p-col-9 draggableContainerStyle" style={{borderColor: theme.color}}>
                                        <div className="box">
                                            <div id="draggableElmtContainer">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-col-6">
                            <div className="box calenderBox">
                                <FullCalendar options={this.state.options} />
                            </div>
                        </div>
                    </div>)
            }}</ThemeContext.Consumer>
        )
    }
}

export default Overview;