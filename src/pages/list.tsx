import * as React from 'react'
import ListView from '../components/views/ListView'
interface IState {
    dataInfo: {
        result: []
    }
}

export default class List extends React.Component<{}, IState> {



    public constructor(props: any) {
        super(props)
        this.state = {
            dataInfo: {
                result: []
            }
        }
    }

    public componentDidMount() {
        fetch("https://api.apiopen.top/getJoke?page=1&count=20&type=video")
        .then(res => res.json())
        .then(data => {
            this.setState({
                dataInfo : data
            })
        })
    }


    public render() {
        return(
            <div>
                {
                    this.state.dataInfo.result.length > 0
                    ?
                    <div>
                        <ul>
                            {
                                this.state.dataInfo.result.map((ele, index) => {
                                    return <ListView  key={ index } data = {ele}/>
                                })
                            }
                        </ul>
                    </div>
                    :
                    <div>数据正在请求。。。</div>
                }
            </div>
        )
    }
}