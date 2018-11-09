import React from 'react';
import { Form, Input, Button } from 'antd';

import axios from 'axios';

const FormItem = Form.Item;

class CustomForm extends React.Component {

    handlerFormSubmit = (event, requestType, articleID) => {
        event.preventDefault();
        const title = event.target.elements.title.value;
        const content = event.target.elements.content.value;

        switch( requestType ){
            case 'post':
                axios.post('http://127.0.0.1:8000/api/', {
                    title : title,
                    content : content
                })
                .then(res => console.log(res))
                .catch(err => console.err(error))
            case 'put':
            axios.post('http://127.0.0.1:8000/api/'+articleID, {
                    title : title,
                    content : content
                })
                .then(res => console.log(res))
                .catch(err => console.err(error))
        }

        console.log(title, content)
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handlerFormSubmit}>
                    <FormItem label="Title">
                        <Input name="title" placeholder="Put a title here" />
                    </FormItem>
                    <FormItem label="Content">
                        <Input name="content" placeholder="Enter some content" />
                    </FormItem>
                    <FormItem >
                        <Button type="primary" htmlType="submit">Submit</Button>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

export default CustomForm;