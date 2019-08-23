import * as React from 'react'
// import { List, Avatar } from 'antd';
interface IProps {
    data:any,
}
export default class ListView extends React.Component<IProps> {

    public constructor(props: any) {
        super(props)
    }

    // public componentDidMount() {
    //     console.log('')
    // }

    public render() {
        return(
            <div>
                <p> { this.props.data.text }</p>
                <p> { this.props.data.name }</p>
                <p> { this.props.data.thumbnail }</p>
                <p> { this.props.data.passtime } </p>

                {/* <List
                    itemLayout="horizontal"
                    dataSource={ [{
                        "text":"1235",
                    }] }
                    renderItem={ item => (
                    <List.Item>
                        <List.Item.Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title={<a href="https://ant.design">{item.text}</a>}
                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                        />
                    </List.Item>
                    )}
                /> */}

            </div>
        )
    }
}