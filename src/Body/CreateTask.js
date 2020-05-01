import { ScrollPanel } from 'primereact/scrollpanel';
import React from 'react';
import './bodyStyling.css'
import { Calendar } from 'primereact/calendar';
import { ColorPicker } from 'primereact/colorpicker';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import { Editor } from 'primereact/editor';
import { Button } from "primereact/button";
import ThemeContext from '../Theme/Theme';

class TaskCreation extends React.Component {
    constructor() {
        super();
        this.state = {
            dates: null,
            time: null,
            color: null,
            description: null,
            requestID: null,
            comment: null,
        };
    }
    render() {
        return (
            <ThemeContext.Consumer>{(context) => {
                const { isLightTheme, light, dark } = context
                const theme = isLightTheme ? light : dark;
                return (
                    <div style={{ background: theme.ui, color: theme.color }}>
                        <div className="p-grid createTaskMainDiv">
                            <div className="p-col-6">
                                <div className="box">
                                    <ScrollPanel style={{ width: '100%', height: '100%' }} className="custombar1">
                                        <h6>
                                            Task Tracking:
                    </h6>
                                        <div className="p-grid" style={{ padding: '1em', lineHeight: '1.5' }}>
                                            <div className="p-col-3">
                                                <div className="box">Select Date :</div>
                                            </div>
                                            <div className="p-col-9">
                                                <div className="box">
                                                    <Calendar value={this.state.dates} onChange={(e) => this.setState({ dates: e.value })} selectionMode="range" readOnlyInput={true} />
                                                </div>
                                            </div>
                                            <div className="p-col-3">
                                                <div className="box">Select Time:</div>
                                            </div>
                                            <div className="p-col-9">
                                                <div className="box">
                                                    <Calendar value={this.state.time} onChange={(e) => this.setState({ time: e.value })} timeOnly={true} />
                                                </div>
                                            </div>
                                            <div className="p-col-3">
                                                <div className="box">Pick a Color for the task:</div>
                                            </div>
                                            <div className="p-col-9">
                                                <div className="box">
                                                    <ColorPicker value={this.state.color} onChange={(e) => this.setState({ color: e.value })}></ColorPicker>
                                                    <span style={{ paddingLeft: "14px" }}>Selected Color: <span style={{ 'color': '#' + this.state.color }}>{this.state.color}</span></span>
                                                </div>
                                            </div>
                                            <div className="p-col-3">
                                                <div className="box">
                                                    Description:
                                                </div>
                                            </div>
                                            <div className="p-col-9">
                                                <div className="box">
                                                    <Editor style={{ height: '250px' }} value={this.state.description} onTextChange={(e) => this.setState({ description: e.htmlValue })} />
                                                    <Button label="Clear" icon="pi pi-times" onClick={() => this.setState({ description: '' })} />
                                                </div>
                                            </div>
                                        </div>
                                    </ScrollPanel>
                                </div></div>
                            <div className="p-col-1 midSeparator" style={{ background: theme.color }}>
                                <div className="box">
                                </div>
                            </div>
                            <div className="p-col-5">
                                <div className="box">
                                    <ScrollPanel style={{ width: '100%', height: '100%' }} className="custombar1">
                                        <h6>
                                            Request Tracking:
                    </h6>
                                        <div className="p-grid" style={{ padding: '1em', lineHeight: '1.5' }}>
                                            <div className="p-col-3">
                                                <div className="box">Request ID :</div>
                                            </div>
                                            <div className="p-col-9">
                                                <div className="box">
                                                    <InputNumber value={this.state.requestID} onChange={(e) => this.setState({ requestID: e.value })} mode="decimal" useGrouping={false} />
                                                </div>
                                            </div>
                                            <div className="p-col-3">
                                                <div className="box">Comment:</div>
                                            </div>
                                            <div className="p-col-9">
                                                <div className="box">
                                                    <InputText value={this.state.comment} onChange={(e) => this.setState({ comment: e.target.value })} />
                                                </div>
                                            </div>
                                        </div>
                                    </ScrollPanel>
                                </div>
                            </div>
                        </div>
                    </div>)
            }}</ThemeContext.Consumer>
        )
    }
}

export default TaskCreation;