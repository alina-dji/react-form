import React from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Contact Us</h1>
        <p>Got a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        <Form>
          <FormGroup>
              <Input placeholder="Name"/>
          </FormGroup>
          <FormGroup>
            <Input type="email" name="email" id="exampleEmail" placeholder="E-mail" />
          </FormGroup>
          <FormGroup>
            <Input type="textarea" placeholder="Message"/>
          </FormGroup>
          <Button color="secondary" block>Send Message</Button>
        </Form>
      </div>
    </div>
  );
}

export default App;
