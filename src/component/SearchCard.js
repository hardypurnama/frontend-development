import React, { useState } from "react"
import { Form,Button, Container } from "react-bootstrap"

function SearchCard (props){
    const [search, setSearch] = useState('')

        return(
            <Container>
                <Form className="d-flex">
                    <Form.Control
                        type="Search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                <Button class="btn btn-primary btn-lg" type="button" onClick={(e) => props.search(search)}>Search</Button>
        
                </Form>
            </Container>
            
        );
        
    
}


export default SearchCard;