import React from "react";
import { Table, Container, Button, Form, FormGroup, Label, Input, FormText, Modal, ModalHeader, ModalBody, ModalFooter, Card, Col, Row } from "reactstrap";

let dataSiswas = [
  {
    id: 1,
    nama: 'Joki Production',
    alamat: 'Drama,Romance',
    premis: 'Cinta Kursi Roda',
    beasiswa: false,
    jurusan: 'Fiksi',

  },
  {
    id: 2,
    nama: 'Bunga Picture',
    alamat: '',
    premis: 'Marbot Andalan jilid 3 ',
    beasiswa: true,
    jurusan: 'Dokumenter',

  },
  {
    id: 3,
    nama: 'Pensil media',
    alamat: 'Horror,Thriller',
    premis: 'Lewat Batas',
    beasiswa: false,
    jurusan: 'Fiksi',

  },
  {
    id: 4,
    nama: 'Imagine House',
    alamat: 'Drama,Family',
    premis: 'Rumah Dalam Memori',
    beasiswa: false,
    jurusan: 'Fiksi',

  },
  {
    id: 5,
    nama: 'Pohon media',
    alamat: '',
    premis: 'Cling-Team episode 2  ',
    beasiswa: true,
    jurusan: 'Dokumenter',

  },
  {
    id: 6,
    nama: 'Setiawan',
    alamat: 'Drama,Thriller',
    premis: 'Salah Pilih (lagi)',
    beasiswa: true,
    jurusan: 'Fiksi',

  },
  {
    id: 7,
    nama: 'Page to Picture',
    alamat: 'Drama,Family',
    premis: 'Bukan Lagi Rumah',
    beasiswa: true,
    jurusan: 'Fiksi',

  },
  {
    id: 8,
    nama: 'Kangoo Production',
    alamat: 'Drama,Comedy',
    premis: 'Telap',
    beasiswa: false,
    jurusan: 'Fiksi',

  },  


]


class InputSiswa extends React.Component {

  constructor() {
    super()
    this.state = {
      nama: '',
      alamat: '',
      premis: '',
      beasiswa: false,
      jurusan: '',
      id: '',
      namaTombol: "Tambah"
    }
  }

  handleEditButton = (data) => {
    // console.log(dataSiswas);
    const newDatas = dataSiswas.filter(
      i => i.id === data
    )
    this.setState({
      nama: newDatas[0].nama,
      alamat: newDatas[0].alamat,
      premis: newDatas[0].premis,   
      beasiswa: newDatas[0].beasiswa,
      jurusan: newDatas[0].jurusan,
      id: newDatas[0].id,
      namaTombol: "Ubah",
      modal: false
    })




  }

  toggle = () => {
    const modal = (this.state.modal) ? false : true;
    this.setState({ modal: modal });
  }

  clearState = () => {
    this.setState({
      nama: '',
      alamat: '',
      premis: '',
      beasiswa: '',
      jurusan: '',
      id: '',
      namaTombol: "Tambah",
    })
  }

  handleSubmitButtom = () => {


    if (this.state.namaTombol === "Ubah") {
      // edit
      // alert(`Ini data akan dirubah`);

      const result = dataSiswas.findIndex((a) => a.id === this.state.id);
      // console.log(result);
      const newDataSiswas = dataSiswas;
      newDataSiswas.splice(result, 1, this.state);
      this.clearState();

    } else {
      let hasilSubmit = this.state;
      hasilSubmit.id = Math.floor(Math.random() * 10000000);
      // Cek dulu validasi nya
      // Cek nama
      if (this.state.nama.trim() === "") {
        alert('Maaf Nama Kosong');

      } else {

        dataSiswas.push(hasilSubmit);
        this.clearState();
      }
    }
  }
  
  handleHapusButton = (data) => {
    let newData = dataSiswas.filter((siswa) => siswa.id !== data);
    dataSiswas = newData;
    this.clearState();
  };

  render() {
    return (
      <>
    
        <Container>
          
          <h1 className="mt-3 mb-2 text-center" >Daftar Film Komunitas</h1>
         
        <br></br>
      
          <Row>
           <Col sm="3">
          {/* Ini adalah form input */}
          <Card body
            color="light"
            >
               <h3 className="text-center">Masukan Data</h3>
               <br></br>
            <Form>
              <FormGroup>
                <Label for="nama">
                  Nama Tim
                </Label>
                <Input
                  id="nama"
                  name="nama"
                  placeholder="Tulis Nama"
                  type="text"
                  value={this.state.nama}
                  onChange={(a) => {
                    return this.setState({ nama: a.target.value })
                  }}

                  invalid={this.state.nama.trim() === "" && true}
                  valid={this.state.nama.trim() !== "" && true}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleSelect">
                    Kategori Film
                </Label>
                <Input
                  id="exampleSelect"
                  name="select"
                  type="select"
                  value={this.state.jurusan}
                  onChange={(a) => {
                    return this.setState({ jurusan: a.target.value })
                  }}
             
                  valid={this.state.jurusan.trim() !== "" && true}
                >
                  <option>
                    Dokumenter
                  </option>
                  <option>
                    Fiksi
                  </option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">
                  Judul
                </Label>
                <Input
                  id="exampleText"
                  name="text"
                  type="textarea"
                  value={this.state.premis}
                  onChange={(a) => {
                    return this.setState({ premis: a.target.value })
                  }}
                  invalid={this.state.premis.trim() === "" && true}
                  valid={this.state.premis.trim() !== "" && true}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">
                  Genre
                </Label>
                <Input
                  id="exampleText"
                  name="text"
                  type="textarea"
                  value={this.state.alamat}
                  onChange={(a) => {
                    return this.setState({ alamat: a.target.value })
                  }}
                  invalid={this.state.alamat.trim() === "" && true}
                  valid={this.state.alamat.trim() !== "" && true}
                />
              </FormGroup>
              
              <FormGroup check>
                <Input type="checkbox" checked={this.state.beasiswa === true}
                  onChange={(a) => {
                    return this.setState({ beasiswa: a.target.checked })
                  }} />
                <Label check>
                  Film Lanjutan
                </Label>
                <br></br>
                <br></br>
              </FormGroup>
              <Button color="success" onClick={this.handleSubmitButtom}>
                {this.state.namaTombol}
              </Button>
              <br></br>
          
            </Form>
          </Card>
     </Col>
            
          <br />
          <Col sm="9">
          <Card body
            color="light"
            inverse>
          <Table
            hover
            responsive
            bordered
            
          >
            <thead>
              <tr>
                <th>
                  #
                </th>
                <th>
                  Nama Tim
                </th>
                <th>
                  Kategori 
                </th>
                <th>
                  Judul
                </th>
                <th>
                  Genre
                </th>
                <th>
                  Film Lanjutan
                </th>
                <th>
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              {dataSiswas.map((siswa, i) =>
                <tr key={i}>
                  <th scope="row">
                    {++i}
                  </th>
                  <td>
                    {siswa.nama}
                  </td>
                  <td>
                    {siswa.jurusan}
                  </td>
                  <td>
                    {siswa.premis}
                  </td>
                  <td>{siswa.alamat}</td>
                  <td> {siswa.beasiswa.toString()} </td>
                  <td>
                    <div>
                      <Button
                        color="info"

                        onClick={
                          () => { this.handleEditButton(siswa.id) }
                        }
                      >
                        Ubah
                      </Button>
                      &nbsp;
                      <Button
                        color="danger"
                        onClick={() => {
                          this.handleHapusButton(siswa.id)
                        }}
                      >
                        Hapus
                      </Button>
                    </div>
                  </td>
                </tr>
              )}

            </tbody>
          </Table>
          </Card>
          </Col>
      </Row>
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
            <ModalBody>
              Yakin Mau dihapus ??
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.toggle}>
                Ya
              </Button>
              <Button color="secondary" onClick={this.toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>


        </Container>
      </>
    )
  }

}

export default InputSiswa;