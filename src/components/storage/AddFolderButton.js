import React, { useState } from 'react'
import { Button, Modal, Form} from 'react-bootstrap'
import { database } from '../../firebase'
import { useAuth } from '../../contexts/AuthContext'
import { storage } from '../../firebase'
import ProgressBar from './ProgressBar'

export default function AddFolderButton({currentFolder}) {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState("")
  const [file, setFile] = useState(null)
  const { currentUser } = useAuth()

  const [error, setError] = useState(null)
  
  function openModal() {
    setOpen(true)
  }

  function closeModal() {
    setOpen(false)
    setName("")
    // setFile("")
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (currentFolder == null) return
    //create a folder in the database

    database.text.add({
      name: name,
      parentID: currentFolder.id,
      userId: currentUser.uid,
      // path,
      createdAt: database.getCurrentTimestamp(),
    })


    // database.files.add({
    //   file: file,
    //   parentID: currentFolder.id,
    //   userId: currentUser.uid,
    //   createdAt: database.getCurrentTimestamp(),
    // })
    // setName("")
    // setFile("")
    // closeModal()
  }

  // function handleUpload(e) {
  //   const file = e.target.files[0]
  //   if (currentFolder == null || file == null) return

  //   const uploadTask = storage.ref('/files/${currentUser.uid}')
  //   .put(file)
  // }

  const types = ['image/png', 'image/jpeg'];

  const changeHandler = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file (png or jpeg)');
    }

  }
  
  return (
    <>
    <Button onClick={openModal} size="sm" className="site-button add-button">
      Add
    </Button>
    <Modal show={open} onHide={closeModal}> 
      <Form onSubmit={handleSubmit}>
        <Modal.Body>


          <Form.Group>  
            <Form.Label>Enter Symbol Name</Form.Label>
            <Form.Control 
              type="text"
              required
              value={name}
              onChange={e => setName(e.target.value)}
            />
            </Form.Group>


            <Form.Group> 
            <Form.Label>Upload Symbol Image</Form.Label>
            <Form.Control 
              type="file"
              required
              // value={file}
              onChange={changeHandler}
              // onChange={e => setFile(e.target.value)}
            />
            <div className="output">
              { error && <div className="error">{ error }</div>}
              { file && <div>{ file.name }</div> }
              { file && <ProgressBar file={file} setFile={setFile} />}
            </div>
          </Form.Group>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>

          <Button variant="success" type="submit">
            Submit
          </Button>

        </Modal.Footer>
      </Form>
    </Modal>
    </>
  )
}
