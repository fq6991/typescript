import * as React from 'react';
import Button from 'antd/es/button';

interface IProps {
    title:string,
    age:number,
    work?:string,
    onMyClick: any
}

interface IState {
    count:number
}

export default class Box extends React.Component<IProps, IState> {

    public constructor(props: IProps) {
        super(props);
        this.state = {
            count : 100
        },
        this.enterLoading = this.enterLoading.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
    }

    // public readonly state: Readonly<IState> = {
    //     count:1
    // }

    public enterLoading() {
        this.setState({
            count: 1000
        })
        // this.state.count = 1000
    }

    public sendMessage() {
        this.props.onMyClick("Child Msg")
    }

    public render() {
        const { title,age } = this.props;
        return(
            <div>
                <div>
                    <Button type="primary" onClick={this.enterLoading}>Button</Button>
                    {/* <button onClick = {this.enterLoading}>123456</button> */}
                </div>
                <div>
                    <Button type="primary" onClick={this.sendMessage}>Button</Button>
                </div>
                { title } {age}
                { this.state.count }
            </div>
        )
    }
}