import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { 
    Form,
    Row,
    Col,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap'


const PostForm = () => {

    return(
        <Form>
            <Row form>
                <Col md={6}>
                <FormGroup>
                    <Label for="title">
                    Title
                    </Label>
                    <Input
                    id="title"
                    name="title"
                    placeholder="Post Title"
                    type="email"
                    />
                </FormGroup>
                </Col>
                <Col md={6}>
                <FormGroup>
                    <Label for="description">
                    Share what you learned today!
                    </Label>
                    <Input
                    id="description"
                    name="description"
                    type="textarea"
                    />
                </FormGroup>
                </Col>
            </Row>
            <Button>
                Sign in
            </Button>
        </Form>
    )
}

export default PostForm