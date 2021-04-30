import React from "react"
import { Container } from "react-bootstrap"
// import { useFolder } from "../../hooks/useFolder"
import Navbar from "./Navbar"
import AddFolderButton from "./AddFolderButton"
import ImageGrid from "./ImageGrid"
import ImageWrap from "./ImageWrap"
import SelectSubject from "./SelectSubject"
import SelectVerb from "./SelectVerb"
import SelectObject from "./SelectObject"

export default function Dashboard() {
    // // const state = useFolder()
    // const { text } = useFolder()
    // console.log(text)

    return (
        <>
            <Navbar />
            <Container fluid>
                <SelectSubject>
                    <ImageGrid>
                        <ImageWrap>
                        </ImageWrap>
                    </ImageGrid>
                </SelectSubject>
                <SelectVerb></SelectVerb>
                <SelectObject></SelectObject>
                
            </Container>
        </>
       
    )
}
