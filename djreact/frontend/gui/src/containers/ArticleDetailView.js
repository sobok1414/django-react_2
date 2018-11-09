import React from 'react';
import axios from 'axios';

import { Card } from 'antd';

import CustomForm from '../components/Form'

class ArticleDetail extends React.Component {

    state = {
        articles : {}
    }

    componentDidMount(){
        const articleID = this.props.match.params.articleID;
        axios.get('http://127.0.0.1:8000/api/'+articleID)
            .then(res => {
                this.setState({
                    articles: res.data
                })
            })
    }

    render() {
        return(
            <div>
            <Card title={this.state.articles.title}>
                <p>{this.state.articles.content}</p>
            </Card>
            <CustomForm />
            </div>
        )
    }
}

export default ArticleDetail